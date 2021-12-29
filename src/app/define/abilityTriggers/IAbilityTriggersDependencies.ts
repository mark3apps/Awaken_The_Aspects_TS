import { AbilityTypes } from 'app/classes/ability/abilityTypes'
import { IAbilityTriggerDependencies } from 'app/classes/abilityEngine/interfaces/IAbilityTrigger'

export interface IAbilityTriggersDependencies extends IAbilityTriggerDependencies {
	abilityTypes: AbilityTypes
}
