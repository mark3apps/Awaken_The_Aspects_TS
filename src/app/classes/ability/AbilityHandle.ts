import { Logger } from 'app/log'
import { Ability } from '..'
import { IAbility } from './interfaces/IAbility'

export class AbilityHandle {
	readonly unit
	readonly abilityType

	static initAbility: IAbility | undefined

	constructor (ability?: IAbility) {
		if (ability) {
			this.unit = ability.castingUnit
			this.abilityType = ability.abilType
		} else {
			this.unit = (AbilityHandle.initAbility as IAbility).castingUnit
			this.abilityType = (AbilityHandle.initAbility as IAbility).abilType
		}

		if (GetUnitAbilityLevel(this.unit.handle, this.abilityType.id) < 1) UnitAddAbility(this.unit.handle, this.abilityType.id)

		this.unit.abilities.set(this.abilityType.four, this)
		this.unit.abilityFours.push(this.abilityType.four)
	}

	static initFromAbility () {
		return AbilityHandle.initAbility !== undefined
	}

	// Static Methods
	static fromHandle (ability: IAbility) {
		return this.getObject(ability)
	}

	protected static getObject (ability: IAbility): unknown {
		const obj = ability.castingUnit.abilities.get(ability.abilType.four)
		if (obj) {
			return obj
		}

		AbilityHandle.initAbility = ability
		const newObj = new this()
		AbilityHandle.initAbility = undefined

		return newObj
	}
}
