import { HeroType } from "app/classes/herotype"
import { ABILITY, ITEM } from "lib/globals"

export class TactitionHeroType extends HeroType {

    constructor() {
        super("tactition", UNIT_FOUR.Tactition, UNIT_FOUR.TactitionAlter)
        this.addAbility(ABILITY.raiseBanner, true, true)
        this.addAbility(ABILITY.attack)
        this.addAbility(ABILITY.bolster)
        this.addAbility(ABILITY.ironDefense)
        this.addAbility(ABILITY.inspire, true, false, true)
        this.addItem(ITEM.teleport)
        this.addItem(ITEM.tank)
    }
}