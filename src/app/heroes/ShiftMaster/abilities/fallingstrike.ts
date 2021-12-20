import { Ability, AbilityType } from 'app/classes'
import { Logger } from 'app/log'
import { Position } from 'app/classes/position'
import { UnitType } from 'app/classes/unitType'
import { Globals } from 'app/globals'
import { AbilityFour, Unit, Timer, Anim, Effect, AbilityModel, Group } from 'lib/w3ts/index'

export class FallingStrikeAbility extends Ability {
	override onEffect = (): void => {
		try {
			const G = Globals.get()

			// Get Attributes
			const startPos = this.unit.position
			const spellTarget = Position.fromSpellTarget()
			const damage = this.normalDuration

			const aoe = this.areaOfEffect
			const speed = 32

			// Calculate some vars
			let distanceTravelled = 0
			const angle = startPos.yawTo(spellTarget)
			const fullDistance = startPos.distanceTo(spellTarget)
			const maximumHeight = fullDistance * 0.5

			if (spellTarget.isTerrianPathable()) {
				this.unit.setPathing(false)
				this.unit.invulnerable = true
				this.unit.addAbility(AbilityFour.StormCrowForm)
				this.unit.removeAbility(AbilityFour.StormCrowForm)

				// Queue the Proper Animation
				const animTimer = new Timer()
				animTimer.start(0.1, false, () => {
					this.unit.setAnimation(Anim.Hellscream.attackSlam)
				})

				// Start the Jump
				const loop = new Timer()
				loop.start(0.02, true, () => {
					distanceTravelled += speed
					this.unit.moveToPolarProjection(speed, angle)
					this.unit.flyHeight = this.unit.getParabolaZ(distanceTravelled, fullDistance, maximumHeight)

					if (distanceTravelled >= fullDistance) {
						new Effect(AbilityModel.warStompCaster, this.unit.position, {}).destroy()
						this.unit.invulnerable = false
						this.unit.setPathing(true)
						this.unit.flyHeight = this.unit.defaultFlyHeight

						const u = new Unit(this.unit.owner, UnitType.Dummy, this.unit.position, 0)
						u.addAbility(G.abilityType.fallingStrikeDummy)
						Ability.get(u, G.abilityType.fallingStrikeDummy).castImmediate()
						u.applyTimedLifeGeneric(1)

						const g = new Group()
						g.enumUnitsInRange(spellTarget, aoe, () => {
							const u = Unit.fromFilter()
							return u.isAlive() && u.isEnemy(this.unit) && !u.isMagicImmune && !u.isStructure && u.isGround
						})

						g.firstLoop((u) => {
							this.unit.damageTarget(u, damage, false, false, ATTACK_TYPE_MAGIC, DAMAGE_TYPE_NORMAL)
						})
						g.destroy()

						loop.destroy()
					}
				})
			} else {
				const reset = new Timer()
				reset.start(0.1, false, () => {
					this.unit.mana += this.manaCost
					this.resetCooldown()
					reset.destroy()
				})
			}
		} catch (error) {
			Logger.Error(error)
		}
	}

	static override fromCast (): FallingStrikeAbility {
		return this.getAbility(Unit.fromEvent(), AbilityType.fromSpellEvent())
	}

	static override get (unit: Unit, abilityType: AbilityType): FallingStrikeAbility {
		return this.getAbility(unit, abilityType)
	}
}
