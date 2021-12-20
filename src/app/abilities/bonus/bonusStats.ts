import { Ability, AbilityType } from 'app/classes'
import { AbilityField } from 'lib/resources/fields'
import { Unit } from 'lib/w3ts'

export class BonusStatsAbility extends Ability {
	get strength () {
		return this.getLevelField(AbilityField.STRENGTH_BONUS_ISTR, 0) as number
	}

	set strength (value) {
		this.setLevelField(AbilityField.STRENGTH_BONUS_ISTR, value, 0)
		this.incLevel()
		this.decLevel()
	}

	get agility () {
		return this.getLevelField(AbilityField.AGILITY_BONUS, 0) as number
	}

	set agility (value) {
		this.setLevelField(AbilityField.AGILITY_BONUS, value, 0)
		this.incLevel()
		this.decLevel()
	}

	get intelligence () {
		return this.getLevelField(AbilityField.INTELLIGENCE_BONUS, 0) as number
	}

	set intelligence (value) {
		this.setLevelField(AbilityField.INTELLIGENCE_BONUS, value, 0)
		this.incLevel()
		this.decLevel()
	}

	static override fromCast (): BonusStatsAbility {
		return this.getAbility(Unit.fromEvent(), AbilityType.fromSpellEvent())
	}

	static override get (unit: Unit, ability: AbilityType): BonusStatsAbility {
		return this.getAbility(unit, ability)
	}
}
