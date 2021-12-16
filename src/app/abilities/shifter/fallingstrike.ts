import { Ability } from 'app/classes'
import { AbilityType, EffectType, TargetType } from 'app/classes/abilityType'
import { Logger } from 'app/classes/log'
import { Position } from 'app/classes/position'
import { UnitType } from 'app/classes/unitType'
import { Globals } from 'app/globals'
import { AbilityFour, Order, Unit, Timer, Anim, Effect, AbilityModel, Group } from 'lib/w3ts/index'

export class FallingStrikeAbility extends AbilityType {
	constructor () {
		super({
			four: AbilityFour.FallingStrike,
			orderId: Order.Thunderbolt,
			type: EffectType.Instant,
			target: TargetType.DamageAreaTarget,
			permanent: true,
			starting: true,
			addEffect: true
		})
	}

	public override onEffect = (): void => {
		try {
			const G = Globals.getInstance()

			const eventUnit = Unit.fromEvent()
			const ability = Ability.get(eventUnit, this)
			if (!ability) return

			// Get Attributes
			const startPos = eventUnit.position
			const spellTarget = Position.fromSpellTarget()
			const damage = ability.normalDuration

			const aoe = ability.areaOfEffect
			const speed = 32

			// Calculate some vars
			let distanceTravelled = 0
			const angle = startPos.yawTo(spellTarget)
			const fullDistance = startPos.distanceTo(spellTarget)
			const maximumHeight = fullDistance * 0.5

			if (spellTarget.isTerrianPathable()) {
				eventUnit.setPathing(false)
				eventUnit.invulnerable = true
				eventUnit.addAbility(AbilityFour.StormCrowForm)
				eventUnit.removeAbility(AbilityFour.StormCrowForm)

				// Queue the Proper Animation
				const animTimer = new Timer()
				animTimer.start(0.1, false, () => {
					eventUnit.setAnimation(Anim.Hellscream.attackSlam)
				})

				// Start the Jump
				const loop = new Timer()
				loop.start(0.02, true, () => {
					distanceTravelled += speed
					eventUnit.moveToPolarProjection(speed, angle)
					eventUnit.flyHeight = eventUnit.getParabolaZ(distanceTravelled, fullDistance, maximumHeight)

					if (distanceTravelled >= fullDistance) {
						new Effect(AbilityModel.warStompCaster, eventUnit.position, {}).destroy()
						eventUnit.invulnerable = false
						eventUnit.setPathing(true)
						eventUnit.flyHeight = eventUnit.defaultFlyHeight

						const u = new Unit(eventUnit.owner, UnitType.Dummy, eventUnit.position, 0)
						u.addAbility(G.abilityType.fallingStrikeDummy)
						Ability.get(u, G.abilityType.fallingStrikeDummy).castImmediate()
						u.applyTimedLifeGeneric(1)

						const g = new Group()
						g.enumUnitsInRange(spellTarget, aoe, () => {
							const u = Unit.fromFilter()
							return u.isAlive() && u.isEnemy(eventUnit) && !u.isMagicImmune && !u.isStructure && u.isGround
						})

						g.firstLoop((u) => {
							eventUnit.damageTarget(u, damage, false, false, ATTACK_TYPE_MAGIC, DAMAGE_TYPE_NORMAL)
						})
						g.destroy()

						loop.destroy()
					}
				})
			} else {
				const reset = new Timer()
				reset.start(0.1, false, () => {
					eventUnit.mana += ability.manaCost
					ability.resetCooldown()
					reset.destroy()
				})
			}
		} catch (error) {
			Logger.Error(error)
		}
	}
}
