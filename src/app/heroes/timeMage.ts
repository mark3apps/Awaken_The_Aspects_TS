import { HeroType } from "app/classes/herotype"
import { ABL } from "app/globals/abilities"
import { IT } from "app/globals/itemTypes"
import { UnitFour } from "globals/unitFour"

export class TimeMageHeroType extends HeroType {

    constructor() {
        super("timeMage", UnitFour.TimeMage, UnitFour.TimeMageAlter)
        this.addAbility(ABL.chronoAtrophy)
        this.addAbility(ABL.decay)
        this.addAbility(ABL.timeTravel)
        this.addAbility(ABL.paradox, true, false, true)
        this.addItem(IT.teleport)
        this.addItem(IT.mage)
    }
}