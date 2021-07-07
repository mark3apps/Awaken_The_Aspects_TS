import { HeroType } from "app/classes/herotype"
import { ABL } from "./abilities"
import { IT } from "./itemTypes"

export declare const HT: {[name: string]: HeroType}

// Brawler Hero Setup
HT.brawler = new HeroType("brawler", "E001", "h00I")
HT.brawler.addAbility(ABL.bloodlust)
HT.brawler.addAbility(ABL.drain)
HT.brawler.addAbility(ABL.warstomp)
HT.brawler.addAbility(ABL.unleashRage, true, false, true)
HT.brawler.addItem(IT.teleport)
HT.brawler.addItem(IT.tank)

// Mana Addict Hero Setup
HT.manaAddict = new HeroType("manaAddict", "H00R", "h00B")
HT.manaAddict.addAbility(ABL.manaShield, true, true)
HT.manaAddict.addAbility(ABL.manaBomb)
HT.manaAddict.addAbility(ABL.manaExplosion)
HT.manaAddict.addAbility(ABL.soulBind)
HT.manaAddict.addAbility(ABL.unleashMana, true, false, true)
HT.manaAddict.addItem(IT.teleport)
HT.manaAddict.addItem(IT.mage)

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

// Tactition Hero Setup
HT.tactition = new HeroType("tactition", "H009", "h00Y")
HT.tactition.addAbility(ABL.raiseBanner, true, true)
HT.tactition.addAbility(ABL.attack)
HT.tactition.addAbility(ABL.bolster)
HT.tactition.addAbility(ABL.ironDefense)
HT.tactition.addAbility(ABL.inspire, true, false, true)
HT.tactition.addItem(IT.teleport)
HT.tactition.addItem(IT.tank)

// Time Mage Hero Setup
HT.timeMage = new HeroType("timeMage", "H00J", "h00Z")
HT.timeMage.addAbility(ABL.chronoAtrophy)
HT.timeMage.addAbility(ABL.decay)
HT.timeMage.addAbility(ABL.timeTravel)
HT.timeMage.addAbility(ABL.paradox, true, false, true)
HT.timeMage.addItem(IT.teleport)
HT.timeMage.addItem(IT.mage)
