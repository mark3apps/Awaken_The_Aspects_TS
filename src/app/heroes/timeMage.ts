import { HeroType } from "app/classes/herotype"
import { ABL } from "app/globals/abilities"
import { IT } from "app/globals/itemTypes"

export class TimeMageHeroType extends HeroType {

    constructor() {
        super("timeMage", "H00J", "h00Z")
        this.addAbility(ABL.chronoAtrophy)
        this.addAbility(ABL.decay)
        this.addAbility(ABL.timeTravel)
        this.addAbility(ABL.paradox, true, false, true)
        this.addItem(IT.teleport)
        this.addItem(IT.mage)
    }
}