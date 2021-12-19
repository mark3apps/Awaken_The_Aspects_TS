import { Ability } from 'app/classes'
import { AbilityType } from 'app/classes/abilityType'
import { UnitType } from 'app/classes/unitType'
import { Globals } from 'app/globals'
import { Pathing } from 'app/systems/pathing'
import { Unit, Group, Timer, Effect, AbilityModel, AttachPoint } from 'lib/w3ts/index'

export class ShadestormAbility extends Ability {
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

			g.firstLoop((u) => {
				const shade = u.replace(UnitType.DummyShiftstorm)
				shade.addAbility(G.abilityType.shadeStormDummy)

				const shadeAbility = Ability.get(shade, G.abilityType.shadeStormDummy)
				shadeAbility.level = this.level
				shadeAbility.castImmediate()
				Pathing.newOrders(shade)

				const duration = shadeAbility.normalDuration
				const killTimer = new Timer()
				killTimer.start(duration, false, () => {
					new Effect(AbilityModel.mirrorImageDeathCaster, shade.position, {}).destroy()
					shade.destroy()
				})
			})
			g.destroy()
		}
	}

	static override fromCast (): ShadestormAbility {
		return this.getAbility(Unit.fromCaster(), AbilityType.fromSpellEvent())
	}

	static override get (unit: Unit, abilityType: AbilityType): ShadestormAbility {
		return this.getAbility(unit, abilityType)
	}
}
