import { HeroType } from "app/classes/herotype"
import { ABL } from "app/globals/abilities"
import { IT } from "app/globals/itemTypes"
import { UnitFour } from "globals/unitFour"

export class TactitionHeroType extends HeroType {

    constructor() {
        super("tactition", UnitFour.Tactition, UnitFour.TactitionAlter)
        this.addAbility(ABL.raiseBanner, true, true)
        this.addAbility(ABL.attack)
        this.addAbility(ABL.bolster)
        this.addAbility(ABL.ironDefense)
        this.addAbility(ABL.inspire, true, false, true)
        this.addItem(IT.teleport)
        this.addItem(IT.tank)
    }
}