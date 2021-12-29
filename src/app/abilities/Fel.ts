import { Ability } from 'app/classes'
import { IAbility } from 'app/classes/ability/interfaces/IAbility'
import { IAbilityCast } from 'app/classes/ability/interfaces/IAbilityCast'
import { AbilityFour } from 'lib/w3ts'

export class FelGrunt extends Ability {
	override onEffect (cast: IAbilityCast): void {
		this.unit.addAbility(AbilityFour.FelGruntTransformed)
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as FelGrunt
	}
}

export class FelOgre extends Ability {
	override onEffect (cast: IAbilityCast): void {
		this.unit.addAbility(AbilityFour.FelOgreTransformed)
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as FelOgre
	}
}

export class FelWarlord extends Ability {
	override onEffect (cast: IAbilityCast): void {
		if (this.unit.kills >= 4) this.unit.addAbility(AbilityFour.FelWarlordTransformed)
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as FelWarlord
	}
}

export class FelWarlock extends Ability {
	override onEffect (cast: IAbilityCast): void {
		if (this.unit.kills >= 2) this.unit.addAbility(AbilityFour.FelWarlockTransformed)
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as FelWarlock
	}
}
