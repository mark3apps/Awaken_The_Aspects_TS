import { IAbilityCast } from 'app/classes/ability/interfaces/IAbilityCast'
import { ITriggers } from "app/define/triggers/interfaces/ITriggers"
import { AbilityType } from '../../abilityType/abilityType'
import { AbilityEngine } from "../AbilityEngine"

export interface IAbilityTrigger {
	abilityType: AbilityType,
	getAblity: () => unknown
}

export interface IAbilityTriggerDependencies {
	triggers: ITriggers,
	cast: IAbilityCast,
	abilityEngine: AbilityEngine
}
