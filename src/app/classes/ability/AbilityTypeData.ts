import { AbilityFour, Order } from 'lib/w3ts'
import { TargetType } from "../abilityType/TargetType"
import { EffectType } from "../abilityType/EffectType"

export const AbilityTypeData = {
	infernoAspect: {
		four: AbilityFour.InfernoAspect,
		orderId: Order.Dreadlordinferno
	},
	shiftDummy: {
		four: AbilityFour.ItemIllusions,
		orderId: Order.Illusion
	},
	fallingStrikeDummy: {
		four: AbilityFour.FallingStrikeDummy,
		orderId: Order.Creepthunderclap
	},
	shadeStormDummy: {
		four: 'A03O',
		orderId: Order.Whirlwind
	},
	stormCrowForm: {
		four: AbilityFour.StormCrowForm,
		orderId: Order.Ravenform
	},
	footmanUpgrade: {
		four: AbilityFour.FootmanCharge,
		type: EffectType.Casts,
		target: TargetType.SupportSelf,
		orderId: Order.Bearform,
	}
}
