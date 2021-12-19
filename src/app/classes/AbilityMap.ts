import { Unit } from 'lib/w3ts/index'
import { AbilityType } from './abilityType'

export class AbilityMap {
	static map: WeakMap<handle, any> = new WeakMap<handle, any>();

	public static fromHandle (a: ability | Unit, b?: AbilityType) {
		const h = a instanceof Unit ? BlzGetUnitAbility(a.handle, b ? b.id : 0) : a

		const obj = this.map.get(h)
		if (obj !== undefined) {
			return obj
		}

		return undefined
	}
}
