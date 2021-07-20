import { HeroType } from "app/classes/herotype"
import { ABILITY, ITEM, UNIT_FOUR } from "utils/globals"

export class TimeMageHeroType extends HeroType {

    constructor() {
        super("timeMage", UNIT_FOUR.TimeMage, UNIT_FOUR.TimeMageAlter)
        this.addAbility(ABILITY.chronoAtrophy)
        this.addAbility(ABILITY.decay)
        this.addAbility(ABILITY.timeTravel)
        this.addAbility(ABILITY.paradox, true, false, true)
        this.addItem(ITEM.teleport)
        this.addItem(ITEM.mage)
    }
}