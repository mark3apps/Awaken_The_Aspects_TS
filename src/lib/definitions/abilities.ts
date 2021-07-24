import { Ability } from "app/classes/ability"
import { ABILITY } from "lib/globals"
import { OrderId } from "w3ts/globals/order"

export function defineAbilities() {
    ABILITY.bonusArmor = new Ability("bonusArmor", "Z001")
    ABILITY.bonusCriticalStrike = new Ability("bonusCriticalStrike", "Z003")
    ABILITY.bonusDamage = new Ability("bonusDamage", "Z004")
    ABILITY.bonusEvasion = new Ability("bonusEvasion", "Z005")
    ABILITY.bonusLifeRegen = new Ability("bonusLifeRegen", "Z006")
    ABILITY.bonusLifeSteal = new Ability("bonusLifeSteal", "Z007")
    ABILITY.bonusMagicResistance = new Ability("bonusMagicResistance", "Z008")
    ABILITY.bonusMovementSpeed = new Ability("bonusMovementSpeed", "Z009")
    ABILITY.bonusStats = new Ability("bonusStats", "Z010")
    ABILITY.bonusManaRegen = new Ability("bonusManaRegen", "Z011")

    // Brawler Abilities
    ABILITY.drain = new Ability("drain", "A01Y", OrderId.Stomp, false, "", [6, 6, 6, 6, 6, 6])
    ABILITY.bloodlust = new Ability("bloodlust", "A007", OrderId.Stomp)
    ABILITY.warstomp = new Ability("warstomp", "A002", OrderId.Stomp)
    ABILITY.unleashRage = new Ability("unleashRage", "A029", OrderId.Stomp, false, "", [6, 6, 6])

    // Mana Addict Abilities
    ABILITY.manaShield = new Ability("manaShield", "A001", OrderId.Manashieldon, true, "BNms")
    ABILITY.manaBomb = new Ability("manaBomb", "A03P", OrderId.Flamestrike)
    ABILITY.manaExplosion = new Ability("manaExplosion", "A018", OrderId.Thunderclap)
    ABILITY.soulBind = new Ability("soulBind", "A015", OrderId.Clusterrockets, true, "B00F")
    ABILITY.unleashMana = new Ability("unleashMana", "A03S", OrderId.Starfall, false, "", [15, 15, 15])

    // Shift Master Abilities
    ABILITY.shadeStrength = new Ability("shadeStrength", "A037")
    ABILITY.swiftMoves = new Ability("swiftMoves", "A056")
    ABILITY.swiftAttacks = new Ability("swiftAttacks", "A030")
    ABILITY.switch = new Ability("switch", "A03U", OrderId.Reveal)
    ABILITY.shift = new Ability("shift", "A03T", OrderId.Berserk)
    ABILITY.fallingStrike = new Ability("fallingStrike", "A059", OrderId.Thunderbolt, false, "", [1.5, 1.5, 1.5, 1.5, 1.5, 1.5])
    ABILITY.shiftStorm = new Ability("shiftStorm", "A03C", OrderId.Channel)
    ABILITY.felForm = new Ability("felForm", "A02Y", OrderId.Metamorphosis)

    // Tactition Abilities
    ABILITY.inspire = new Ability("inspire", "A042", OrderId.Channel)
    ABILITY.ironDefense = new Ability("ironDefense", "A019", OrderId.Roar)
    ABILITY.raiseBanner = new Ability("raiseBanner", "A01I", OrderId.Healingward)
    ABILITY.attack = new Ability("attack", "A01B", OrderId.Fingerofdeath)
    ABILITY.bolster = new Ability("bolster", "A01Z", OrderId.Tranquility)

    // Time Mage Abilities
    ABILITY.chronoAtrophy = new Ability("chronoAtrophy", "A04K", OrderId.Flamestrike)
    ABILITY.decay = new Ability("decay", "A032", OrderId.Shadowstrike)
    ABILITY.timeTravel = new Ability("timeTravel", "A04P", OrderId.Clusterrockets)
    ABILITY.paradox = new Ability("paradox", "A04N", OrderId.Tranquility, false, "", [10, 10, 10])
}