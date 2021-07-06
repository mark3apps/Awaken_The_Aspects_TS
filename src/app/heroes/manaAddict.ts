import { Ability } from "app/classes/ability"
import { HeroType } from "app/classes/herotype"
import { ABL, HT, IT } from "app/globals/keys"
import { OrderId } from "w3ts/globals/order"

// Mana Addict Abilities
ABL.manaShield = new Ability("manaShield", "A001", OrderId.Manashieldon, true, "BNms")
ABL.manaBomb = new Ability("manaBomb", "A03P", OrderId.Flamestrike)
ABL.manaExplosion = new Ability("manaExplosion", "A018", OrderId.Thunderclap)
ABL.soulBind = new Ability("soulBind", "A015", OrderId.Clusterrockets, true, "B00F")
ABL.unleashMana = new Ability("unleashMana", "A03S", OrderId.Starfall, false, "", [15, 15, 15])

// Mana Addict Hero Setup
HT.manaAddict = new HeroType("manaAddict", "H00R", "h00B")
HT.manaAddict.addAbility(ABL.manaShield, true, true)
HT.manaAddict.addAbility(ABL.manaBomb)
HT.manaAddict.addAbility(ABL.manaExplosion)
HT.manaAddict.addAbility(ABL.soulBind)
HT.manaAddict.addAbility(ABL.unleashMana, true, false, true)
HT.manaAddict.addItem(IT.teleport)
HT.manaAddict.addItem(IT.mage) 