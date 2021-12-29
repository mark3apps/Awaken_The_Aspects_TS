import { AbilityTrigger } from './AbilityTrigger'
import { IAbilityEngineMap } from './interfaces/IAbilityEngineMap'
import { IAbilityEngineDepend } from './interfaces/IAbilityEngineDepend'

export class AbilityEngine {
	Attacked: IAbilityEngineMap[]
	Attacks: IAbilityEngineMap[]
	Dies: IAbilityEngineMap[]
	Kills: IAbilityEngineMap[]
	Casts: Map<number, AbilityTrigger>

	protected static instance?: AbilityEngine

	static getInstance (depend: IAbilityEngineDepend) {
		if (!AbilityEngine.instance) AbilityEngine.instance = new AbilityEngine(depend)
		return AbilityEngine.instance
	}

	private constructor (depend: IAbilityEngineDepend) {
		// Prep Dependencies
		const triggers = depend.triggers
		const abilCast = depend.abilityCast

		this.Attacked = []
		this.Attacks = []
		this.Dies = []
		this.Kills = []
		this.Casts = new Map<number, AbilityTrigger>()

		triggers.UnitAttacked.addAction(() => {
			// Unit Attacked
			for (let index = 0; index < this.Attacked.length; index++) {
				const element = this.Attacked[index]
				if (abilCast.attackedUnit.hasAbility(element.id)) element.abilityTrigger.onEffect()
			}

			// Unit Attacks
			for (let index = 0; index < this.Attacks.length; index++) {
				const element = this.Attacks[index]
				if (abilCast.attackingUnit.hasAbility(element.id)) element.abilityTrigger.onEffect()
			}
		})

		triggers.UnitDying.addAction(() => {
			// Unit Dies
			for (let index = 0; index < this.Dies.length; index++) {
				const element = this.Dies[index]
				if (abilCast.damageTarget.hasAbility(element.id)) element.abilityTrigger.onEffect()
			}
		})

		triggers.UnitDies.addAction(() => {
			// Unit Kills
			for (let index = 0; index < this.Kills.length; index++) {
				const element = this.Kills[index]
				if (abilCast.killingUnit.hasAbility(element.id)) element.abilityTrigger.onEffect()
			}
		})

		triggers.UnitCasts.addAction(() => {
			// Unit Casting
			const abilTrig = this.Casts.get(GetSpellAbilityId())
			if (abilTrig) abilTrig.onEffect()
		})
	}
}
