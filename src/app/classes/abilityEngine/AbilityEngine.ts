import { ITriggers } from 'app/define/triggers/interfaces/ITriggers'
import { Triggers } from 'app/define/triggers/triggers'
import { AbilityTrigger } from './AbilityTrigger'

export class AbilityEngine {
	Attacked
	Attacks
	Dies
	Kills
	Casts

	protected static instance?: AbilityEngine

	static getInstance () {
		if (!AbilityEngine.instance) AbilityEngine.instance = new AbilityEngine(Triggers.getInstance())
		return AbilityEngine.instance
	}

	private constructor (triggers: ITriggers) {
		this.Attacked = new Map<number, AbilityTrigger>()
		this.Attacks = new Map<number, AbilityTrigger>()
		this.Dies = new Map<number, AbilityTrigger>()
		this.Kills = new Map<number, AbilityTrigger>()
		this.Casts = new Map<number, AbilityTrigger>()

		triggers.UnitAttacked.addAction(() => {
			// Unit Attacked
			let abilTrig = this.Attacked.get(GetSpellAbilityId())
			if (abilTrig && abilTrig.cast.attackedUnit.hasAbility(abilTrig.abilityType)) abilTrig.onEffect()

			// Unit Attacks
			abilTrig = this.Attacks.get(GetSpellAbilityId())
			if (abilTrig && abilTrig.cast.attackingUnit.hasAbility(abilTrig.abilityType)) abilTrig.onEffect()
		})

		triggers.unitDamaged.addAction(() => {
			// Unit Dies
			let abilTrig = this.Attacked.get(GetSpellAbilityId())
			if (abilTrig && abilTrig.cast.dyingUnit.hasAbility(abilTrig.abilityType)) abilTrig.onEffect()

			// Unit Kills
			abilTrig = this.Attacks.get(GetSpellAbilityId())
			if (abilTrig && abilTrig.cast.killingUnit.hasAbility(abilTrig.abilityType)) abilTrig.onEffect()
		})

		triggers.UnitCasts.addAction(() => {
			// Unit Casting
			const abilTrig = this.Casts.get(GetSpellAbilityId())
			if (abilTrig && abilTrig.cast.castingUnit.hasAbility(abilTrig.abilityType)) abilTrig.onEffect()
		})
	}
}
