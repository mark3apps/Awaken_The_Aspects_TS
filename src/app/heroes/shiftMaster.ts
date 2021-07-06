import { Ability } from "app/classes/ability"
import { HeroType } from "app/classes/herotype"
import { ABL, HT, IT } from "app/globals/keys"
import { OrderId } from "w3ts/globals/order"

// Shift Master Abilities
ABL.shadeStrength = new Ability("shadeStrength", "A037")
ABL.swiftMoves = new Ability("swiftMoves", "A056")
ABL.swiftAttacks = new Ability("swiftAttacks", "A030")
ABL.switch = new Ability("switch", "A03U", OrderId.Reveal)
ABL.shift = new Ability("shift", "A03T", OrderId.Berserk)
ABL.fallingStrike = new Ability("fallingStrike", "A059", OrderId.Thunderbolt, false, "", [1.5, 1.5, 1.5, 1.5, 1.5, 1.5])
ABL.shiftStorm = new Ability("shiftStorm", "A03C", OrderId.Channel)
ABL.felForm = new Ability("felForm", "A02Y", OrderId.Metamorphosis)

//Shift Master Hero Setup
HT.shiftMaster = new HeroType("shiftMaster", "E002", "h00Q")
HT.shiftMaster.addAbility(ABL.shift, true, true)
HT.shiftMaster.addAbility(ABL.switch)
HT.shiftMaster.addAbility(ABL.felForm,)
HT.shiftMaster.addAbility(ABL.fallingStrike)
HT.shiftMaster.addAbility(ABL.shiftStorm)
HT.shiftMaster.addAbility(ABL.shadeStrength, true, false, true)
HT.shiftMaster.addItem(IT.teleport)
HT.shiftMaster.addItem(IT.tank)