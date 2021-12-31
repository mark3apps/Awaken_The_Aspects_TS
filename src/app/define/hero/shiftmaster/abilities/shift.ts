import { UnitAbility, Position } from 'app/classes'
import { AbilityTypes } from 'app/define/abilityTypes/abilityTypes'
import { AbilityField } from 'lib/resources/fields'
import { AbilityFour, Effect, AbilityModel, Unit, Timer } from 'lib/w3ts'
import { IUnitAbilityParam } from 'app/classes/unitAbility/interfaces/IUnitAbilityParam'
import { IAbilityCast } from 'app/classes/abilityCast/interfaces/IAbilityCast'
import { Logger } from 'app/log'
import { UnitTypes } from 'app/define/UnitTypes'

export class Shift extends UnitAbility {
	augments = 0
	distance = 400
	speed = 0.45
	tick = 0.01
	shadeDamageDealt = 0.00
	shadeDamageTaken = 2.00
	shadeDuration = 15
	tooltipName = "Shift"

	constructor (ability: IUnitAbilityParam) {
		super(ability)
		this.updateTooltips()
	}

	override updateTooltip (): void {
		this.tooltip = `${this.tooltipName} [|cffffcc00${this.augments} Augments|r]`
	}

	override updateExtendedTooltop (): void {
		this.extendedTooltip =
			`The Shifter shifts forward, leaving a Shade of himself behind that continues to fight.

Shifts |cff00ffff${this.distance}|r units forward in |cff00ffff${this.speed}|r seconds.
Shades recieve |cff00ffff${math.floor(this.shadeDamageTaken * 100)}%|r damage, deal |cff00ffff${math.floor(this.shadeDamageDealt * 100 / 100)}%|r damage, and last |cff00ffff${this.shadeDuration}|r seconds.
cooldown |cff00ffff${math.floor(this.cooldown)}|r seconds.`
	}

	get tickDistance () {
		return this.distance / (this.speed / this.tick)
	}

	override onEffect = (cast: IAbilityCast) => {
		try {
			const abilityTypes = AbilityTypes.getInstance()
			const unitTypes = UnitTypes.getInstance()

			// Get Unit Constants
			const facing = this.unit.facing
			const startPostion = new Position(this.unit.coordinate)

			// Add Start Abilitys
			this.unit.addAbility(AbilityFour.Ghost)
			this.unit.setPathing(false)

			// SFX
			const startEffect = new Effect(AbilityModel.feralspirittarget, this.unit.x, this.unit.y)
			startEffect.scale = 2
			startEffect.z = 10
			startEffect.destroy()

			// Cast Illusion on Hero
			const dummy = new Unit({ owner: this.unit.owner, type: unitTypes.Dummy, coor: this.unit.coordinate })
			dummy.addAbility(abilityTypes.ShiftDummy)
			dummy.applyTimedLifeGeneric(1)

			const shiftDummyAbil = new UnitAbility({ unit: dummy, abilType: abilityTypes.ShiftDummy })
			shiftDummyAbil.setLevelField(AbilityField.DAMAGE_DEALT_PERCENT_OF_NORMAL, this.shadeDamageDealt, 0)
			shiftDummyAbil.setLevelField(AbilityField.DAMAGE_RECEIVED_MULTIPLIER, this.shadeDamageTaken, 0)
			shiftDummyAbil.heroDuration = this.shadeDuration

			shiftDummyAbil.castTarget(this.unit)

			const loop = new Timer()
			loop.start(this.tick, true, () => {
				const pos = new Position(this.unit.polarProjection(this.tickDistance, facing))

				if (pos.isTerrianPathable() && (this.unit.distanceTo(startPostion) < this.distance)) {
					this.unit.coordinate = pos
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

	static override fromHandle (ability: IUnitAbilityParam) {
		return this.getObject(ability) as Shift
	}
}
