import { AbilityTypes } from 'app/define/abilityTypes/abilityTypes'
import { IAbilityTriggerDepend } from 'app/classes/abilityEngine/interfaces/IAbilityTrigger'

export interface IAbilityTriggersDepend extends IAbilityTriggerDepend {
	abilityTypes: AbilityTypes
}
