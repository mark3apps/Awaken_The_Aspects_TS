import { HeroType, Strategy } from "../classes/herotype"
import { ABILITIES, ITEM } from "lib/globals"

export class TactitionHeroType extends HeroType {

    constructor() {
        super("tactition", UNIT_FOUR.Tactition, UNIT_FOUR.TactitionAlter)
        this.addAbility(ABILITIES.raiseBanner, true, true)
        this.addAbility(ABILITIES.attack)
        this.addAbility(ABILITIES.bolster)
        this.addAbility(ABILITIES.ironDefense)
        this.addAbility(ABILITIES.inspire, true, false, true)
        this.addItem(ITEM.teleport)
        this.addItem(ITEM.tank)
    }
}