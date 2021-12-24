import { Logger } from 'app/log'
import { CC2Four } from 'lib/resources/library'
import { Trigger } from 'lib/w3ts'
import { AbilityType } from './abilityType'

export class AbilityTypeMap {
	static map = new Map<string, AbilityType>();
	static mapInstant = new Map<string, AbilityType>();
	static preload: AbilityType[] = [];

	public static fromSpellEvent () {
		return this.fromId(GetSpellAbilityId()) as AbilityType
	}

	public static fromId (id: number | string) {
		const ability = typeof id === "number" ? this.map.get(CC2Four(id)) : this.map.get(id)
		return ability
	}

	public static initSpellEffects (): void {
		try {
			Trigger.unitSpellEffect.add(() => {
				if (this.mapInstant.has(CC2Four(GetSpellAbilityId()))) {
					const ability = this.fromSpellEvent()
					if (ability && ability.onEffect)
						ability.onEffect()
				}
			})
		} catch (error) {
			Logger.Error('Cast Spell', error)
		}
	}
}
