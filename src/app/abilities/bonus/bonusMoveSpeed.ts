import { Ability, AbilityType } from 'app/classes'
import { AbilityTypeMap } from 'app/classes/abilityTypeMap'
import { AbilityField } from 'lib/resources/fields'
import { Unit } from 'lib/w3ts'

export class BonusMoveSpeedAbility extends Ability {
	get moveSpeed () {
		return this.getLevelField(AbilityField.MOVEMENT_SPEED_BONUS, 0) as number
	}

	set moveSpeed (value) {
		this.setLevelField(AbilityField.MOVEMENT_SPEED_BONUS, value, 0)
		this.incLevel()
		this.decLevel()
	}

	static override fromCast (): BonusMoveSpeedAbility {
		return this.getAbility(Unit.fromEvent(), AbilityTypeMap.fromSpellEvent())
	}

	static override get (unit: Unit, ability: AbilityType): BonusMoveSpeedAbility {
		return this.getAbility(unit, ability)
	}
}
