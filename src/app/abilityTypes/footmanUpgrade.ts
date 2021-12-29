import { Ability } from 'app/classes'
import { IAbility } from 'app/classes/ability/interfaces/IAbility'
import { IAbilityCast } from 'app/classes/ability/interfaces/IAbilityCast'
import { Order, Effect, AbilityModel, AttachPoint } from 'lib/w3ts'

export class FootmanUpgrade extends Ability {
	override onEffect (cast: IAbilityCast): void {
		if (this.unit.manaPercent === 100) {
			this.unit.issueImmediateOrder(Order.Bearform)
			this.unit.lifePercent += 25
			new Effect(AbilityModel.spiritWalkerChange, this.unit, AttachPoint.chest).destroy()
		}
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as FootmanUpgrade
	}
}
