import { Ability, AbilityType } from 'app/classes'
import { Logger } from 'app/log'
import { Position } from 'app/classes/position'
import { UnitType } from 'app/classes/unitType'
import { Globals } from 'app/globals'
import { AbilityFour, Unit, Timer, Anim, Effect, AbilityModel, Group, Order } from 'lib/w3ts/index'
import { AttackType, DamageType } from 'lib/resources/types'
import { AbilityTypeMap } from 'app/classes/abilityTypeMap'

export class FallingStrikeAbility extends Ability {

	damage = 85
	speed = 32
	augments = 0
	slowDuration = 5
	slowMovement = 0.50

	constructor (unit: Unit, abilityType: AbilityType) {
		super(unit, abilityType)
		this.updateTooltips()
	}

	updateTooltip (): void {
		this.tooltip = `Falling Strike - [|cffffcc00${this.augments} Augments|r]`
	}

	updateExtendedTooltop (): void {
		this.extendedTooltip = `The Shifter jumps to the target dealing damage and slowing units in close proximity to the landing attack for a short time.

|cff00ffff${this.damage}|r Area Damage
|cff00ffff${this.slowMovement * 100}%|r Slower Movement Speed
|cff00ffff${this.slowDuration}|r Second Area Slow
|cff00ffff${math.floor(this.areaOfEffect)}|r Area of Effect
|cff00ffff${math.floor(this.castRange)}|r Jump Distance`
	}

	override onEffect = () => {
		try {
			const G = Globals.get()

			// Get Attributes
			const startPos = this.unit.position
			const spellTarget = Position.fromSpellTarget()

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
					distanceTravelled += this.speed
					this.unit.moveToPolarProjection(this.speed, angle)
					this.unit.flyHeight = this.unit.getParabolaZ(distanceTravelled, fullDistance, maximumHeight)

					if (distanceTravelled >= fullDistance) {
						this.unit.invulnerable = false
						this.unit.setPathing(true)
						this.unit.flyHeight = this.unit.defaultFlyHeight

						const u = new Unit(this.unit.owner, UnitType.Dummy, this.unit.position, 0)
						u.addAbility(G.abilityType.fallingStrikeDummy)
						u.applyTimedLifeGeneric(1)

						const ability = Ability.get(u, G.abilityType.fallingStrikeDummy)
						ability.heroDuration = this.slowDuration
						ability.normalDuration = this.slowDuration
						ability.areaOfEffect = this.areaOfEffect
						ability.castImmediate()

						const g = new Group()
						g.enumUnitsInRange(spellTarget, this.areaOfEffect, () => {
							const u = Unit.fromFilter()
							return u.isAlive() && u.isEnemy(this.unit) && !u.isMagicImmune && !u.isStructure && u.isGround
						})

						g.firstLoop((u) => {
							this.unit.damageTarget(u, this.damage, false, false, AttackType.MAGIC, DamageType.NORMAL)
						})
						g.destroy()

						loop.destroy()
					}
				})
			} else {
				this.unit.issueImmediateOrder(Order.Stop)
				this.unit.mana += this.manaCost
				this.resetCooldown()
			}
		} catch (error) {
			Logger.Error(error)
		}
	}

	static override fromCast (): FallingStrikeAbility {
		return this.getAbility(Unit.fromEvent(), AbilityTypeMap.fromSpellEvent())
	}

	static override get (unit: Unit, abilityType: AbilityType): FallingStrikeAbility {
		return this.getAbility(unit, abilityType)
	}
}
