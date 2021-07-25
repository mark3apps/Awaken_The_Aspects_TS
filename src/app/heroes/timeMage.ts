import { HeroType, Strategy } from "../classes/herotype"
import { ABILITIES, ITEM } from "lib/globals"

export class TimeMageHeroType extends HeroType {

    constructor() {
        super("timeMage", UNIT_FOUR.TimeMage, UNIT_FOUR.TimeMageAlter)
        this.addAbility(ABILITIES.chronoAtrophy)
        this.addAbility(ABILITIES.decay)
        this.addAbility(ABILITIES.timeTravel)
        this.addAbility(ABILITIES.paradox, true, false, true)
        this.addItem(ITEM.teleport)
        this.addItem(ITEM.mage)
    }
}