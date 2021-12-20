import { Ability, AbilityType, UnitType } from 'app/classes'
import { Globals } from 'app/globals'
import { Logger } from 'app/log'
import { AbilityField } from 'lib/resources/fields'
import { AbilityFour, Effect, AbilityModel, Unit, Timer } from 'lib/w3ts'

export class ShiftAbility extends Ability {
	augments = 0
	distance = 400
	speed = 0.45
	tick = 0.01
	shadeDamageDealt = 0.00
	shadeDamageTaken = 2.00
	shadeDuration = 15
	tooltipName = "Shift"

	constructor (unit: Unit, ability: AbilityType) {
		super(unit, ability)
		this.cooldown = 11
		this.onCreate()
	}

	override updateTooltip (): void {
		this.tooltip = `${this.tooltipName} [|cffffcc00${this.augments} Augments|r]`
	}

	override updateExtendedTooltop (): void {
		this.extendedTooltip =
			`The Shifter shifts forward, leaving a Shade of himself behind that continues to fight.

Shifts ${this.distance} units forward in ${this.speed} seconds.
Shades recieve ${math.floor(this.shadeDamageTaken * 100) / 100}x more damage, deal ${math.floor(this.shadeDamageDealt * 100) / 100}% damage, and last ${this.shadeDuration} seconds.
cooldown ${this.cooldown} seconds.`
	}

	get tickDistance () {
		return this.distance / (this.speed / this.tick)
	}

	override onEffect = () => {
		try {
			const G = Globals.get()

			// Get Unit Constants
			const facing = this.unit.facing
			const startPostion = this.unit.position

			// Add Start Abilitys
			this.unit.addAbility(AbilityFour.Ghost)
			this.unit.setPathing(false)

			// SFX
			const startEffect = new Effect(AbilityModel.feralspirittarget, this.unit.x, this.unit.y)
			startEffect.scale = 2
			startEffect.z = 10
			startEffect.destroy()

			// Cast Illusion on Hero
			const dummy = new Unit(this.unit.owner, UnitType.Dummy, this.unit.position, 0)
			dummy.addAbility(G.abilityType.shift1Dummy)
			dummy.applyTimedLifeGeneric(1)

			const shiftDummyAbil = Ability.get(dummy, G.abilityType.shift1Dummy)
			shiftDummyAbil.setLevelField(AbilityField.DAMAGE_DEALT_PERCENT_OF_NORMAL, this.shadeDamageDealt, 0)
			shiftDummyAbil.setLevelField(AbilityField.DAMAGE_RECEIVED_MULTIPLIER, this.shadeDamageTaken, 0)
			shiftDummyAbil.heroDuration = this.shadeDuration

			shiftDummyAbil.castTarget(this.unit)

			const loop = new Timer()
			loop.start(this.tick, true, () => {
				const pos = this.unit.polarProjection(this.tickDistance, facing)

				if (pos.isTerrianPathable() && (this.unit.distanceTo(startPostion) < this.distance)) {
					this.unit.position = pos
				} else {
					this.unit.removeAbility(AbilityFour.Ghost)
					this.unit.setPathing(true)
					loop.destroy()
				}
			})
		} catch (error) {
			Logger.Error("ShiftAbility.onEffect", error)
		}
	}

	update () {
		this.augments += 1
		this.updateTooltips()
	}

	static override fromCast (): ShiftAbility {
		return this.getAbility(Unit.fromCaster(), AbilityType.fromSpellEvent())
	}

	static override get (unit: Unit, ability: AbilityType): ShiftAbility {
		return this.getAbility(unit, ability)
	}
}
