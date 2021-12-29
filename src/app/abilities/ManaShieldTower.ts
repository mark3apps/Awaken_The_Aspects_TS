import { Ability } from 'app/classes'
import { IAbility } from 'app/classes/ability/interfaces/IAbility'
import { IAbilityCast } from 'app/classes/ability/interfaces/IAbilityCast'

export class ManaShieldTower extends Ability {
	override onEffect (cast: IAbilityCast): void {
		if (this.isCastable() && !this.hasBuff()) this.castImmediate()
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as ManaShieldTower
	}
}
