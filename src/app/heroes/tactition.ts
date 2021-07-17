import { HeroType } from "app/classes/herotype"
import { ABL } from "app/globals/abilities"
import { IT } from "app/globals/itemTypes"

export class TactitionHeroType extends HeroType {

    constructor() {
        super("tactition", "H009", "h00Y")
        this.addAbility(ABL.raiseBanner, true, true)
        this.addAbility(ABL.attack)
        this.addAbility(ABL.bolster)
        this.addAbility(ABL.ironDefense)
        this.addAbility(ABL.inspire, true, false, true)
        this.addItem(IT.teleport)
        this.addItem(IT.tank)
    }
}