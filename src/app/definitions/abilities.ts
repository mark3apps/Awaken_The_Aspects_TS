
import { Ability } from "app/classes/ability"
import { ABILITIES } from "lib/globals"
import { OrderId } from "w3ts/globals/order"

export function defineAbilities() {
    ABILITIES.bonusArmor = new Ability("bonusArmor", "Z001")
    ABILITIES.bonusCriticalStrike = new Ability("bonusCriticalStrike", "Z003")
    ABILITIES.bonusDamage = new Ability("bonusDamage", "Z004")
    ABILITIES.bonusEvasion = new Ability("bonusEvasion", "Z005")
    ABILITIES.bonusLifeRegen = new Ability("bonusLifeRegen", "Z006")
    ABILITIES.bonusLifeSteal = new Ability("bonusLifeSteal", "Z007")
    ABILITIES.bonusMagicResistance = new Ability("bonusMagicResistance", "Z008")
    ABILITIES.bonusMovementSpeed = new Ability("bonusMovementSpeed", "Z009")
    ABILITIES.bonusStats = new Ability("bonusStats", "Z010")
    ABILITIES.bonusManaRegen = new Ability("bonusManaRegen", "Z011")

    // Brawler Abilities
    ABILITIES.drain = new Ability("drain", "A01Y", OrderId.Stomp, false, "", [6, 6, 6, 6, 6, 6])
    ABILITIES.bloodlust = new Ability("bloodlust", "A007", OrderId.Stomp)
    ABILITIES.warstomp = new Ability("warstomp", "A002", OrderId.Stomp)
    ABILITIES.unleashRage = new Ability("unleashRage", "A029", OrderId.Stomp, false, "", [6, 6, 6])

    // Mana Addict Abilities
    ABILITIES.manaShield = new Ability("manaShield", "A001", OrderId.Manashieldon, true, "BNms")
    ABILITIES.manaBomb = new Ability("manaBomb", "A03P", OrderId.Flamestrike)
    ABILITIES.manaExplosion = new Ability("manaExplosion", "A018", OrderId.Thunderclap)
    ABILITIES.soulBind = new Ability("soulBind", "A015", OrderId.Clusterrockets, true, "B00F")
    ABILITIES.unleashMana = new Ability("unleashMana", "A03S", OrderId.Starfall, false, "", [15, 15, 15])

    // Shift Master Abilities
    ABILITIES.shadeStrength = new Ability("shadeStrength", "A037")
    ABILITIES.swiftMoves = new Ability("swiftMoves", "A056")
    ABILITIES.swiftAttacks = new Ability("swiftAttacks", "A030")
    ABILITIES.switch = new Ability("switch", "A03U", OrderId.Reveal)
    ABILITIES.shift = new Ability("shift", "A03T", OrderId.Berserk)
    ABILITIES.fallingStrike = new Ability("fallingStrike", "A059", OrderId.Thunderbolt, false, "", [1.5, 1.5, 1.5, 1.5, 1.5, 1.5])
    ABILITIES.shiftStorm = new Ability("shiftStorm", "A03C", OrderId.Channel)
    ABILITIES.felForm = new Ability("felForm", "A02Y", OrderId.Metamorphosis)

    // Tactition Abilities
    ABILITIES.inspire = new Ability("inspire", "A042", OrderId.Channel)
    ABILITIES.ironDefense = new Ability("ironDefense", "A019", OrderId.Roar)
    ABILITIES.raiseBanner = new Ability("raiseBanner", "A01I", OrderId.Healingward)
    ABILITIES.attack = new Ability("attack", "A01B", OrderId.Fingerofdeath)
    ABILITIES.bolster = new Ability("bolster", "A01Z", OrderId.Tranquility)

    // Time Mage Abilities
    ABILITIES.chronoAtrophy = new Ability("chronoAtrophy", "A04K", OrderId.Flamestrike)
    ABILITIES.decay = new Ability("decay", "A032", OrderId.Shadowstrike)
    ABILITIES.timeTravel = new Ability("timeTravel", "A04P", OrderId.Clusterrockets)
    ABILITIES.paradox = new Ability("paradox", "A04N", OrderId.Tranquility, false, "", [10, 10, 10])
}