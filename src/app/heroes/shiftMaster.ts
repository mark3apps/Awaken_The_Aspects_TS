import { HeroType } from "app/classes/herotype"
import { ABL } from "app/globals/abilities"
import { IT } from "app/globals/itemTypes"

export class ShiftMasterHeroType extends HeroType {

    constructor() {
        super("shiftMaster", "E002", "h00Q")
        this.addAbility(ABL.shift, true, true)
        this.addAbility(ABL.switch)
        this.addAbility(ABL.felForm)
        this.addAbility(ABL.fallingStrike)
        this.addAbility(ABL.shiftStorm)
        this.addAbility(ABL.shadeStrength, true, false, true)
        this.addItem(IT.teleport)
        this.addItem(IT.tank)
    }
}