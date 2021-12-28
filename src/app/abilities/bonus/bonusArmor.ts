import { Ability, AbilityType } from 'app/classes'
import { AbilityTypeMap } from 'app/classes/abilityTypeMap'
import { AbilityField } from 'lib/resources/fields'
import { Unit } from 'lib/w3ts'

export class BonusArmorAbility extends Ability {
	get armor () {
		return this.getLevelField(AbilityField.DEFENSE_BONUS_IDEF, 0) as number
	}

	set armor (value) {
		this.setLevelField(AbilityField.DEFENSE_BONUS_IDEF, value, 0)
		this.incLevel()
		this.decLevel()
	}

	static override fromCast (): BonusArmorAbility {
		return this.getAbility(Unit.fromEvent(), AbilityTypeMap.fromSpellEvent())
	}

	static override get (unit: Unit, ability: AbilityType): BonusArmorAbility {
		return this.getAbility(unit, ability)
	}
}
