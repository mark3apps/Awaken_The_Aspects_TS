import { Ability, AbilityType } from 'app/classes'
import { Unit } from 'lib/w3ts'

export class FelFormAbility extends Ability {
	override onEffect = () => {

	}

	static override fromCast (): FelFormAbility {
		return this.getAbility(Unit.fromEvent(), AbilityType.fromSpellEvent())
	}

	static override get (unit: Unit, abilityType: AbilityType): FelFormAbility {
		return this.getAbility(unit, abilityType)
	}
}
