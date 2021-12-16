import { Ability } from 'app/classes'
import { AbilityType, EffectType, TargetType } from 'app/classes/abilityType'
import { UnitType } from 'app/classes/unitType'
import { Globals } from 'app/globals'
import { Pathing } from 'app/systems/pathing'
import { AbilityFour, Order, Unit, Group, Timer, Effect, AbilityModel, AttachPoint } from 'lib/w3ts/index'

export class ShadestormAbility extends AbilityType {
	constructor () {
		super({
			four: AbilityFour.ShiftStorm,
			orderId: Order.Channel,
			type: EffectType.Instant,
			target: TargetType.Specific,
			permanent: true,
			ult: true,
			addEffect: true
		})
	}

	public override onEffect = (): void => {
		const G = Globals.getInstance()

		const eventUnit = Unit.fromEvent()
		const ability = Ability.get(eventUnit, this)

		const aoe = ability.areaOfEffect

		const g = new Group()

		g.enumUnitsInRange(eventUnit, aoe, () => {
			const u = Unit.fromFilter()
			return u.isIllusion && u.owner === eventUnit.owner
		})

		// Reset the Ability if no Shades are within the Area of Effect
		if (g.size === 0) {
			const reset = new Timer()
			reset.start(0.02, false, () => {
				ability.resetCooldown()
				eventUnit.mana += ability.manaCost
				reset.destroy()
			})

			// Cast the Spell!!!
		} else {
			new Effect(AbilityModel.howlCaster, eventUnit, AttachPoint.origin).destroy()

			g.firstLoop((u) => {
				const shade = u.replace(UnitType.DummyShiftstorm)
				shade.addAbility(G.abilityType.shadeStormDummy)

				const shadeAbility = Ability.get(shade, G.abilityType.shadeStormDummy)
				shadeAbility.level = ability.level
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
}
