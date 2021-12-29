import { Ability } from 'app/classes'
import { IAbility } from 'app/classes/ability/interfaces/IAbility'
import { IAbilityCast } from 'app/classes/ability/interfaces/IAbilityCast'

export class ChainLightningTower extends Ability {
	override onEffect (cast: IAbilityCast): void {
		if (this.isCastable() && cast.attackedUnit.isGround) this.castTarget(cast.attackedUnit)
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as ChainLightningTower
	}
}
