import { AbilityType, UnitAbility } from 'app/classes'
import { IUnitAbilityParam } from 'app/classes/unitAbility/interfaces/IUnitAbilityParam'
import { Unit } from 'lib/w3ts'

export interface IAbility {
	abilType: AbilityType,
	onEffectCast: () => void,
	getAbility: (unitAbil: IUnitAbilityParam) => unknown,
	TriggerUnit: () => Unit,
	castAbility: UnitAbility
}
