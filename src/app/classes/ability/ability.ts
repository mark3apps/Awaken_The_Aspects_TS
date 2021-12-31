import { UnitAbility } from '..'
import { EffectType } from '../abilityType/enums/EffectType'
import { IUnitAbilityParam } from '../unitAbility/interfaces/IUnitAbilityParam'
import { IAbility } from './interfaces/IAbility'
import { IAbilityDepend } from './interfaces/IAbilityDepend'
import { IAbilityParams } from './interfaces/IAbilityParams'

export class Ability implements IAbility {
	// Static
	protected static map: Map<number, Ability> = new Map<number, Ability>()

	abilType
	TriggerUnit

	static fromAbilId (abilId: number) {
		return Ability.map.get(abilId)
	}

	// Instance
	getAbility: (unitAbil: IUnitAbilityParam) => unknown

	// Dependencies
	cast

	constructor (depend: IAbilityDepend, ability: IAbilityParams) {
		// Dependencies
		const abilityEngine = depend.abilityEngine
		this.cast = depend.abilityCast

		this.abilType = ability.abilType
		this.TriggerUnit = ability.TriggerUnit

		// this.abilityType = abilityTrigger.abilityType
		this.getAbility = ability.GetAblity

		switch (this.abilType.effectType) {
			case EffectType.Attacked:
				abilityEngine.Attacked.push({ ability: this })
				break

			case EffectType.Attacks:
				abilityEngine.Attacks.push({ ability: this })
				break

			case EffectType.Dies:
				abilityEngine.Dies.push({ ability: this })
				break

			case EffectType.Kills:
				abilityEngine.Kills.push({ ability: this })
				break

			case EffectType.Casts:
				abilityEngine.Casts.set(this.abilType.id, this)
				break
			default:
				break
		}

		// Add to Map
		Ability.map.set(this.abilType.id, this)
	}

	get castAbility () {
		return this.getAbility({ unit: this.TriggerUnit(), abilType: this.abilType }) as UnitAbility
	}

	onEffectCast () {
		this.castAbility.onEffect(this.cast)
	}
}
