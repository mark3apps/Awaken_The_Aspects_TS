import { IAbilityCast } from 'app/classes/ability/interfaces/IAbilityCast'
import { ITriggers } from 'app/define/triggers/interfaces/ITriggers'

export interface IAbilityEngineDepend {
	triggers: ITriggers,
	abilityCast: IAbilityCast
}
