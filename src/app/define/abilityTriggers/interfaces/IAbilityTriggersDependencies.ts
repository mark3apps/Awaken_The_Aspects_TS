import { AbilityTypes } from 'app/classes/ability/abilityTypes'
import { IAbilityTriggerDepend } from 'app/classes/abilityEngine/interfaces/IAbilityTrigger'

export interface IAbilityTriggersDepend extends IAbilityTriggerDepend {
	abilityTypes: AbilityTypes
}
