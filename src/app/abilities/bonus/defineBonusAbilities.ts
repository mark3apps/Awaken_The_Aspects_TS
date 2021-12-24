import { Ability, AbilityType } from 'app/classes'
import { AbilityFour } from 'lib/w3ts'
import { BonusStatsAbility } from './bonusStats'

export class DefineBonusAbilities {
	private static instance: DefineBonusAbilities

	collection
	stats

	static get () {
		if (!DefineBonusAbilities.instance) DefineBonusAbilities.instance = new DefineBonusAbilities()
		return DefineBonusAbilities.instance
	}

	private constructor () {
		this.stats = new AbilityType({ four: AbilityFour.BonusStats })
		this.stats.getAbility = (unit) => { return BonusStatsAbility.get(unit, this.stats) }

		this.collection = new AbilityType({ four: AbilityFour.BonusSpellBook })
		this.collection.getAbility = (unit) => { return Ability.get(unit, this.collection) }
	}
}
