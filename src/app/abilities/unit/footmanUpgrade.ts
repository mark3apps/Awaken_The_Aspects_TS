import { Ability, AbilityParameters } from "classes/ability"
import { Unit } from "lib/w3ts/index"


export class AbilityFootmanUpgrade extends Ability {

    constructor(ability: AbilityParameters | Ability){
        super(ability)
    }

    public onEffect(): void{
        const eventUnit = Unit.fromEvent()

        if (eventUnit.manaPercent == 100) {
            eventUnit.issueImmediateOrder(this.orderId)
            eventUnit.lifePercent += 20
        }
    }
}