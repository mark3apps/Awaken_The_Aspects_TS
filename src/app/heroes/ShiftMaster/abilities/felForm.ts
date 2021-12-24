import { Ability, AbilityType, UnitType } from 'app/classes'
import { AbilityTypeMap } from 'app/classes/abilityTypeMap'
import { AbilityField } from 'lib/resources/fields'
import { Unit } from 'lib/w3ts'

export class FelFormAbility extends Ability {
	private _felUnit = UnitType.get(this.getLevelField(AbilityField.ALTERNATE_FORM_UNIT_EMEU) as number)

	get felUnit () {
		return this._felUnit
	}

	set felUnit (value) {
		if (value) {
			this.setLevelField(AbilityField.ALTERNATE_FORM_UNIT_EMEU, value.id)
			this._felUnit = value
		}
	}

	get hitPointBonus () {
		return this.getLevelField(AbilityField.ALTERNATE_FORM_HIT_POINT_BONUS) as number
	}

	set hitPointBonus (value) {
		this.setLevelField(AbilityField.ALTERNATE_FORM_HIT_POINT_BONUS, value)
	}

	override onCreate = () => {

	}

	override onEffect = () => {

	}

	static override fromCast (): FelFormAbility {
		return this.getAbility(Unit.fromEvent(), AbilityTypeMap.fromSpellEvent())
	}

	static override get (unit: Unit, abilityType: AbilityType): FelFormAbility {
		return this.getAbility(unit, abilityType)
	}
}
