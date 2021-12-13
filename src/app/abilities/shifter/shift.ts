import { Hero, Skill } from 'app/classes'
import { Ability, EffectType, TargetType } from 'app/classes/ability'
import { ShiftSkill } from 'app/classes/heroAbility'
import { UnitType } from 'app/classes/unitType'
import { AbilityFour, Order, Unit, Effect, AbilityModel, Timer } from 'lib/w3ts/index'

export class ShiftAbility extends Ability {
	constructor () {
		super({
			four: AbilityFour.Shift,
			orderId: Order.Berserk,
			type: EffectType.Instant,
			target: TargetType.SupportSelf,
			permanent: true,
			starting: true,
			addEffect: true
		})
	}

	public override onEffect = (): void => {
		// ShiftSkill.get(Hero.fromEvent(), this).onEffect()
	}
}
