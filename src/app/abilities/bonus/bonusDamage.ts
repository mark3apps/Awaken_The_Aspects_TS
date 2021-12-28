import { Ability, AbilityType } from 'app/classes'
import { AbilityField } from 'lib/resources/fields'
import { Unit } from 'lib/w3ts'

export class BonusDamageAbility extends Ability {
	get damage () {
		return this.getLevelField(AbilityField.ATTACK_BONUS, 0) as number
	}

	set damage (value) {
		this.setLevelField(AbilityField.ATTACK_BONUS, value, 0)
		this.incLevel()
		this.decLevel()
	}

	static override get (unit: Unit, ability: AbilityType): BonusDamageAbility {
		return this.getAbility(unit, ability)
	}
}
