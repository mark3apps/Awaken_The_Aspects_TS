import { Ability, AbilityType } from 'app/classes'
import { AbilityTypeMap } from 'app/classes/abilityTypeMap'
import { AbilityField } from 'lib/resources/fields'
import { Unit } from 'lib/w3ts'

export class BonusAttackSpeedAbility extends Ability {
	get attackSpeed () {
		return this.getLevelField(AbilityField.ATTACK_SPEED_INCREASE_ISX1, 0) as number
	}

	set attackSpeed (value) {
		this.setLevelField(AbilityField.ATTACK_SPEED_INCREASE_ISX1, value, 0)
		this.incLevel()
		this.decLevel()
	}

	static override fromCast (): BonusAttackSpeedAbility {
		return this.getAbility(Unit.fromEvent(), AbilityTypeMap.fromSpellEvent())
	}

	static override get (unit: Unit, ability: AbilityType): BonusAttackSpeedAbility {
		return this.getAbility(unit, ability)
	}
}
