import { Ability } from 'app/classes'
import { AbilityType } from 'app/classes/abilityType'
import { AbilityTypeMap } from "app/classes/abilityTypeMap"
import { UnitType } from 'app/classes/unitType'
import { Globals } from 'app/globals'
import { Pathing } from 'app/systems/pathing'
import { AbilityField } from 'lib/resources/fields'
import { Unit, Group, Timer, Effect, AbilityModel, AttachPoint } from 'lib/w3ts/index'

export class ShadestormAbility extends Ability {

	damage = 100
	maxShades = 2
	duration = 10
	augments = 0

	constructor (unit: Unit, abilityType: AbilityType) {
		super(unit, abilityType)
		this.updateTooltips()
	}

	updateTooltip (): void {
		this.tooltip = `Shade Storm - [|cffffcc00${this.augments} Augments|r]`
	}

	updateExtendedTooltop (): void {
		this.extendedTooltip = `The Shift Master calls up to ${this.maxShades} of his nearby shades to go into a whirlwind, dealing damage to all nearby enemies.  After the whirlwind is over, the Shade disapears.

|cff00ffff${this.damage}|r Damage per second
|cff00ffff${this.duration}|r Second Duration`
	}

	override onEffect = (): void => {
		const G = Globals.get()

		const aoe = this.areaOfEffect

		const g = new Group()

		g.enumUnitsInRange(this.unit, aoe, () => {
			const u = Unit.fromFilter()
			return u.isIllusion && u.owner === this.unit.owner
		})

		// Reset the Ability if no Shades are within the Area of Effect
		if (g.size === 0) {
			const reset = new Timer()
			reset.start(0.02, false, () => {
				this.resetCooldown()
				this.unit.mana += this.manaCost
				reset.destroy()
			})

			// Cast the Spell!!!
		} else {
			new Effect(AbilityModel.howlCaster, this.unit, AttachPoint.origin).destroy()

			let unitsPicked = 0
			g.firstLoop((u) => {
				if (unitsPicked < this.maxShades) {
					const shade = u.replace(UnitType.DummyShiftstorm)
					shade.addAbility(G.abilityType.shadeStormDummy)

					const shadeAbility = Ability.get(shade, G.abilityType.shadeStormDummy)
					shadeAbility.setLevelField(AbilityField.DAMAGE_PER_SECOND_OWW1, this.damage)
					shadeAbility.normalDuration = this.duration
					shadeAbility.castImmediate()
					Pathing.newOrders(shade)

					const killTimer = new Timer()
					killTimer.start(this.duration, false, () => {
						new Effect(AbilityModel.mirrorImageDeathCaster, shade.position, {}).destroy()
						shade.destroy()
					})
				}
				unitsPicked += 1
			})
			g.destroy()
		}
	}

	static override fromCast (): ShadestormAbility {
		return this.getAbility(Unit.fromCaster(), AbilityTypeMap.fromSpellEvent())
	}

	static override get (unit: Unit, abilityType: AbilityType): ShadestormAbility {
		return this.getAbility(unit, abilityType)
	}
}
