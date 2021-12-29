import { Ability } from '..'
import { EffectType } from '../abilityType/EffectType'
import { IAbilityTrigger, IAbilityTriggerDepend } from "./interfaces/IAbilityTrigger"

export class AbilityTrigger {
	abilityType
	cast
	getAbility: () => unknown

	constructor (depend: IAbilityTriggerDepend, abilityTrigger: IAbilityTrigger) {
		const abilityEngine = depend.abilityEngine

		this.abilityType = abilityTrigger.abilityType
		this.cast = depend.abilityCast
		this.getAbility = abilityTrigger.getAblity

		switch (this.abilityType.effectType) {
			case EffectType.Attacked:
				abilityEngine.Attacked.push({ id: this.abilityType.id, abilityTrigger: this })
				break

			case EffectType.Attacks:
				abilityEngine.Attacks.push({ id: this.abilityType.id, abilityTrigger: this })
				break

			case EffectType.Dies:
				abilityEngine.Dies.push({ id: this.abilityType.id, abilityTrigger: this })
				break

			case EffectType.Kills:
				abilityEngine.Kills.push({ id: this.abilityType.id, abilityTrigger: this })
				break

			case EffectType.Casts:
				abilityEngine.Casts.set(this.abilityType.id, this)
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
