import { Unit } from 'lib/w3ts/index'
import { AbilityType } from '../../abilityType/abilityType'

export interface IAbility {
	castingUnit: Unit
	abilType: AbilityType
}
