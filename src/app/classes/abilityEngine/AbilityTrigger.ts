import { Ability } from '..'
import { EffectType } from '../abilityType/EffectType'
import { IAbilityTrigger, IAbilityTriggerDependencies } from "./interfaces/IAbilityTrigger"

export class AbilityTrigger {
	abilityType
	cast
	triggers
	getAbility

	constructor (depend: IAbilityTriggerDependencies, abilityTrigger: IAbilityTrigger) {
		this.abilityType = abilityTrigger.abilityType
		this.cast = depend.cast
		this.triggers = depend.triggers
		this.getAbility = abilityTrigger.getAblity

		switch (this.abilityType.effectType) {
			case EffectType.Attacked:
				depend.abilityEngine.Attacked.set(this.abilityType.id, this)
				break

			case EffectType.Attacks:
				depend.abilityEngine.Attacks.set(this.abilityType.id, this)
				break

			case EffectType.Dies:
				depend.abilityEngine.Dies.set(this.abilityType.id, this)
				break

			case EffectType.Kills:
				depend.abilityEngine.Kills.set(this.abilityType.id, this)
				break

			case EffectType.Casts:
				depend.abilityEngine.Casts.set(this.abilityType.id, this)
				break
			default:
				break
		}
	}

	get ability () {
		return this.getAbility() as Ability
	}

	onEffect () {
		this.ability.onEffect(this.cast)
	}
}
