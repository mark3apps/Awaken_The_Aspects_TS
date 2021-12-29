import { CC2Four } from 'lib/resources/library'
import { TargetType } from "./TargetType"
import { EffectType } from "./EffectType"
import { IAbilityType } from "./interfaces/iAbilityType"

const AbilityTypeMap = new Map<number, unknown>()
const MapInstant = new Map<number, unknown>()
const preload: unknown[] = []

export class AbilityTypeHandle {
	readonly four: string
	readonly effectType
	readonly targetType

	readonly buffFour
	readonly orderId
	readonly orderIdAutoOn
	readonly orderIdAutoOff
	readonly orderIdOff
	readonly unitTypes: Map<number, boolean> = new Map<number, boolean>()

	static initAbilityType?: IAbilityType

	constructor (abilityType?: IAbilityType) {
		let abilityTypeDefined: IAbilityType
		if (abilityType) {
			abilityTypeDefined = abilityType
		} else {
			abilityTypeDefined = AbilityTypeHandle.initAbilityType as IAbilityType
		}

		this.four = abilityTypeDefined.four
		this.effectType = abilityTypeDefined.effectType ?? EffectType.None
		this.targetType = abilityTypeDefined.targetType ?? TargetType.None

		this.buffFour = abilityTypeDefined.buffFour ?? ""
		this.orderId = abilityTypeDefined.orderId ?? 0
		this.orderIdAutoOff = abilityTypeDefined.orderIdAutoOff ?? 0
		this.orderIdAutoOn = abilityTypeDefined.orderIdAutoOn ?? 0
		this.orderIdOff = abilityTypeDefined.orderIdOff ?? 0

		if (abilityTypeDefined.unitTypes) {
			for (let index = 0; index < abilityTypeDefined.unitTypes.length; index++) {
				this.unitTypes.set(abilityTypeDefined.unitTypes[index].id, true)
			}
		}
	}

	protected static initFromAbilityType () {
		return AbilityTypeHandle.initAbilityType !== undefined
	}

	protected static getObject (abilityId: number) {
		const obj = AbilityTypeMap.get(abilityId) as unknown

		if (obj !== undefined) {
			return obj
		}

		AbilityTypeHandle.initAbilityType = { four: CC2Four(abilityId) }
		const newObj = new this()
		AbilityTypeHandle.initAbilityType = undefined
		return newObj
	}
}
