import { HeroType } from "app/classes/herotype"
import { ABL, IT, UnitFour } from "globals"

export class ShiftMasterHeroType extends HeroType {

    constructor() {
        super("shiftMaster", UnitFour.ShiftMaster, UnitFour.ShiftMasterAlter)
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