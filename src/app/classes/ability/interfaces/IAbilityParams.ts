import { AbilityType } from 'app/classes'
import { IUnitAbilityParam } from 'app/classes/unitAbility/interfaces/IUnitAbilityParam'
import { Unit } from 'lib/w3ts'

export interface IAbilityParams {
	GetAblity: (e: IUnitAbilityParam) => unknown
	TriggerUnit: () => Unit
	abilType: AbilityType
}
