import { FelGrunt } from 'app/abilities/Fel'
import { FootmanUpgrade } from 'app/abilityTypes/footmanUpgrade'
import { AbilityTrigger } from 'app/classes/abilityEngine/AbilityTrigger'
import { IAbilityTriggersDependencies } from './IAbilityTriggersDependencies'

export class AbilityTriggers {
	protected static instance?: AbilityTriggers

	static getInstance (depend: IAbilityTriggersDependencies) {
		if (!AbilityTriggers.instance) AbilityTriggers.instance = new AbilityTriggers(depend)
		return AbilityTriggers.instance
	}

	FootmanUpgradeTrigger
	FelGruntTrigger

	private constructor (depend: IAbilityTriggersDependencies) {
		this.FootmanUpgradeTrigger = new AbilityTrigger(depend,
			{
				abilityType: depend.abilityTypes.footmanUpgrade,
				getAblity: () => { FootmanUpgrade.fromHandle({ castingUnit: depend.cast.killingUnit, abilType: depend.abilityTypes.footmanUpgrade }) }
			})
		this.FelGruntTrigger = new AbilityTrigger(depend,
			{
				abilityType: depend.abilityTypes.felGrunt,
				getAblity: () => { FelGrunt.fromHandle({ castingUnit: depend.cast.killingUnit, abilType: depend.abilityTypes.felGrunt }) }
			})
	}
}
