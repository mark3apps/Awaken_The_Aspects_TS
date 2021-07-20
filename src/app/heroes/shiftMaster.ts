import { HeroType } from "app/classes/herotype"
import { ABILITY, ITEM, UNIT_FOUR } from "utils/globals"

export class ShiftMasterHeroType extends HeroType {

    constructor() {
        super("shiftMaster", UNIT_FOUR.ShiftMaster, UNIT_FOUR.ShiftMasterAlter)
        this.addAbility(ABILITY.shift, true, true)
        this.addAbility(ABILITY.switch)
        this.addAbility(ABILITY.felForm)
        this.addAbility(ABILITY.fallingStrike)
        this.addAbility(ABILITY.shiftStorm)
        this.addAbility(ABILITY.shadeStrength, true, false, true)
        this.addItem(ITEM.teleport)
        this.addItem(ITEM.tank)
    }
}