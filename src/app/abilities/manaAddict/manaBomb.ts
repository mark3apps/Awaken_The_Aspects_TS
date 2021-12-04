import { Ability, EffectType, TargetType } from 'app/classes/ability'
import { AbilityFour, Order } from 'lib/w3ts/index'

export class ManaBombAbility extends Ability {
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
