import { AbilityFour, BuffFour } from 'lib/w3ts'
import { TargetType } from "../TargetType"
import { EffectType } from "../EffectType"
import { UnitType } from 'app/classes'

export interface IAbilityType {
	four: AbilityFour | string,
	buffFour?: BuffFour,
	effectType?: EffectType,
	targetType?: TargetType,
	orderId?: number,
	orderIdAutoOn?: number,
	orderIdAutoOff?: number,
	orderIdOff?: number,
	unitTypes?: UnitType[]
}
