import { Logger } from 'app/log'
import { CC2Four, GetSpellAbilityFour } from 'lib/resources/library'
import { Triggers } from 'lib/w3ts/handles/triggers'
import { AbilityType } from './abilityType'

export class AbilityTypeMap {
	static map = new Map<string, AbilityType>();
	static mapInstant = new Map<string, AbilityType>();
	static preload: AbilityType[] = [];


	public static fromSpellEvent () {
		return this.fromId(GetSpellAbilityFour())
	}

	public static fromId (id: number | string) {
		const ability = typeof id === "number" ? this.map.get(CC2Four(id)) : this.map.get(id)
		return ability
	}

	public static initSpellEffects () {
		try {
			Triggers.unitSpellEffect.addAction(() => {
				if (this.mapInstant.has(GetSpellAbilityFour())) {
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


