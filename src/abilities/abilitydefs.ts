/** @noSelfInFile **/

import { Ability } from "../classes/ability"
import { OrderId } from "w3ts/globals/order"

export declare const ABL: {[name: string]: Ability}

ABL.bonusCriticalStrike = new Ability("bonusCriticalStrike", "Z003")
ABL.bonusDamage = new Ability("bonusDamage", "Z004")
ABL.bonusEvasion = new Ability("bonusEvasion", "Z005")
ABL.bonusHealthRegen = new Ability("bonusHealthRegen", "Z006")
ABL.bonusLifeSteal = new Ability("bonusLifeSteal", "Z007")
ABL.bonusMagicResistance = new Ability("bonusMagicResistance", "Z008")
ABL.bonusMovementSpeed = new Ability("bonusMovementSpeed", "Z009")
ABL.bonusStats = new Ability("bonusStats", "Z010")
ABL.bonusManaRegen = new Ability("bonusManaRegen", "Z011")

// Brawler
ABL.drain = new Ability("drain", "A01Y", OrderId.Stomp, false, "", [6, 6, 6, 6, 6, 6])
ABL.bloodlust = new Ability("bloodlust", "A007", OrderId.Stomp)
ABL.warstomp = new Ability("warstomp", "A002", OrderId.Stomp)
ABL.unleashRage = new Ability("unleashRage", "A029", OrderId.Stomp, false, "", [6, 6, 6])

// Tactition
ABL.inspire = new Ability("inspire", "A042", OrderId.Channel)
ABL.ironDefense = new Ability("ironDefense", "A019", OrderId.Roar)
ABL.raiseBanner = new Ability("raiseBanner", "A01I", OrderId.Healingward)
ABL.attack = new Ability("attack", "A01B", OrderId.Fingerofdeath)
ABL.bolster = new Ability("bolster", "A01Z", OrderId.Tranquility)

// Shift Master
ABL.shadeStrength = new Ability("shadeStrength", "A037")
ABL.swiftMoves = new Ability("swiftMoves", "A056")
ABL.swiftAttacks = new Ability("swiftAttacks", "A030")
ABL.switch = new Ability("switch", "A03U", OrderId.Reveal)
ABL.shift = new Ability("shift", "A03T", OrderId.Berserk)
ABL.fallingStrike = new Ability("fallingStrike", "A059", OrderId.Thunderbolt, false, "", [1.5, 1.5, 1.5, 1.5, 1.5, 1.5])
ABL.shiftStorm = new Ability("shiftStorm", "A03C", OrderId.Channel)
ABL.felForm = new Ability("felForm", "A02Y", OrderId.Metamorphosis)

// Mana Addict
ABL.manaShield = new Ability("manaShield", "A001", OrderId.Manashieldon, true, "BNms")
ABL.manaBomb = new Ability("manaBomb", "A03P", OrderId.Flamestrike)
ABL.manaExplosion = new Ability("manaExplosion", "A018", OrderId.Thunderclap)
ABL.soulBind = new Ability("soulBind", "A015", OrderId.Clusterrockets, true, "B00F")
ABL.unleashMana = new Ability("unleashMana", "A03S", OrderId.Starfall, false, "", [15, 15, 15])

// Time Mage
ABL.chronoAtrophy = new Ability("chronoAtrophy", "A04K", OrderId.Flamestrike)
ABL.decay = new Ability("decay", "A032", OrderId.Shadowstrike)
ABL.timeTravel = new Ability("timeTravel", "A04P", OrderId.Clusterrockets, )
ABL.paradox = new Ability("paradox", "A04N", OrderId.Tranquility, false, "", [10, 10, 10])