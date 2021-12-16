import { AbilityType, EffectType, TargetType } from 'app/classes/abilityType'
import { AbilityFour, Order } from 'lib/w3ts/index'

export class ManaBombAbility extends AbilityType {
	constructor () {
		super({
			four: AbilityFour.ManaBomb,
			orderId: Order.Flamestrike,
			type: EffectType.Instant,
			target: TargetType.DamageArea,
			permanent: true,
			starting: false
		})
	}
}
