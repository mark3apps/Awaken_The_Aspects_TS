import { Ability } from 'app/classes'
import { IAbility } from 'app/classes/ability/interfaces/IAbility'
import { IAbilityCast } from 'app/classes/ability/interfaces/IAbilityCast'

export class ConeOfFireTower extends Ability {
	override onEffect (cast: IAbilityCast): void {
		if (this.isCastable() && cast.attackedUnit.isGround) this.cast(cast.attackedUnit.coordinate)
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as ConeOfFireTower
	}
}
