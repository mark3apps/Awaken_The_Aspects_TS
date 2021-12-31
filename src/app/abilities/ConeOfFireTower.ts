import { UnitAbility } from 'app/classes'
import { IUnitAbilityParam } from 'app/classes/unitAbility/interfaces/IUnitAbilityParam'
import { IAbilityCast } from 'app/classes/abilityCast/interfaces/IAbilityCast'

export class ConeOfFireTower extends UnitAbility {
	override onEffect (cast: IAbilityCast): void {
		if (this.isCastable() && cast.AttackedUnit().isGround) this.cast(cast.AttackedUnit().coordinate)
	}

	static override fromHandle (ability: IUnitAbilityParam) {
		return this.getObject(ability) as ConeOfFireTower
	}
}
