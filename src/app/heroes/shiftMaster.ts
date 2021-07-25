import { HeroType, Strategy } from "../classes/herotype"
import { ABILITIES, ITEM } from "lib/globals"

export class ShiftMasterHeroType extends HeroType {

    constructor() {
        super("shiftMaster", UNIT_FOUR.ShiftMaster, UNIT_FOUR.ShiftMasterAlter)
        this.addAbility(ABILITIES.shift, true, true)
        this.addAbility(ABILITIES.switch)
        this.addAbility(ABILITIES.felForm)
        this.addAbility(ABILITIES.fallingStrike)
        this.addAbility(ABILITIES.shiftStorm)
        this.addAbility(ABILITIES.shadeStrength, true, false, true)
        this.addItem(ITEM.teleport)
        this.addItem(ITEM.tank)
    }
}