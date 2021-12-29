import { Ability } from 'app/classes'
import { IAbility } from 'app/classes/ability/interfaces/IAbility'
import { IAbilityCast } from 'app/classes/ability/interfaces/IAbilityCast'
import { AbilityFour } from 'lib/w3ts'

export class FelGrunt extends Ability {
	override onEffect (cast: IAbilityCast): void {
		cast.killingUnit.addAbility(AbilityFour.FelWarlordTransformed)
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as FelGrunt
	}
}

export class FelOgre extends Ability {
	override onEffect (cast: IAbilityCast): void {
		cast.killingUnit.addAbility(AbilityFour.FelOgreTransformed)
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as FelOgre
	}
}

export class FelWarlord extends Ability {
	override onEffect (cast: IAbilityCast): void {
		if (cast.killingUnit.kills >= 4) cast.killingUnit.addAbility(AbilityFour.FelWarlordTransformed)
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as FelWarlord
	}
}

export class FelWarlock extends Ability {
	override onEffect (cast: IAbilityCast): void {
		if (cast.killingUnit.kills >= 2) cast.killingUnit.addAbility(AbilityFour.FelWarlockTransformed)
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as FelWarlock
	}
}
