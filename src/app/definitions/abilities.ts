import { Ability } from "classes/ability"
import { OrderId } from "lib/w3ts/globals/order"


export namespace ABILITY {
    export let bonusArmor: Ability
    export let bonusCriticalStrike: Ability
    export let bonusDamage: Ability
    export let bonusEvasion: Ability
    export let bonusLifeRegen: Ability
    export let bonusLifeSteal: Ability
    export let bonusMagicResistance: Ability
    export let bonusMovementSpeed: Ability
    export let bonusStats: Ability
    export let bonusManaRegen: Ability

    // Brawler Abilities
    export let drain: Ability
    export let bloodlust: Ability
    export let warstomp: Ability
    export let unleashRage: Ability

    // Mana Addict Abilities
    export let manaShield: Ability
    export let manaBomb: Ability
    export let manaExplosion: Ability
    export let soulBind: Ability
    export let unleashMana: Ability

    // Shift Master Abilities
    export let shadeStrength: Ability
    export let swiftMoves: Ability
    export let swiftAttacks: Ability
    export let mirrorSwitch: Ability
    export let shift: Ability
    export let fallingStrike: Ability
    export let shiftStorm: Ability
    export let felForm: Ability

    // Tactition Abilities
    export let inspire: Ability
    export let ironDefense: Ability
    export let raiseBanner: Ability
    export let attack: Ability
    export let bolster: Ability

    // Time Mage Abilities
    export let chronoAtrophy: Ability
    export let decay: Ability
    export let timeTravel: Ability
    export let paradox: Ability

    export function define(): void {
        bonusArmor = new Ability("bonusArmor", "Z001")
        bonusCriticalStrike = new Ability("bonusCriticalStrike", "Z003")
        bonusDamage = new Ability("bonusDamage", "Z004")
        bonusEvasion = new Ability("bonusEvasion", "Z005")
        bonusLifeRegen = new Ability("bonusLifeRegen", "Z006")
        bonusLifeSteal = new Ability("bonusLifeSteal", "Z007")
        bonusMagicResistance = new Ability("bonusMagicResistance", "Z008")
        bonusMovementSpeed = new Ability("bonusMovementSpeed", "Z009")
        bonusStats = new Ability("bonusStats", "Z010")
        bonusManaRegen = new Ability("bonusManaRegen", "Z011")

        // Brawler Abilities
        drain = new Ability("drain", "A01Y", OrderId.Stomp, false, "", [6, 6, 6, 6, 6, 6])
        bloodlust = new Ability("bloodlust", "A007", OrderId.Stomp)
        warstomp = new Ability("warstomp", "A002", OrderId.Stomp)
        unleashRage = new Ability("unleashRage", "A029", OrderId.Stomp, false, "", [6, 6, 6])

        // Mana Addict Abilities
        manaShield = new Ability("manaShield", "A001", OrderId.Manashieldon, true, "BNms")
        manaBomb = new Ability("manaBomb", "A03P", OrderId.Flamestrike)
        manaExplosion = new Ability("manaExplosion", "A018", OrderId.Thunderclap)
        soulBind = new Ability("soulBind", "A015", OrderId.Clusterrockets, true, "B00F")
        unleashMana = new Ability("unleashMana", "A03S", OrderId.Starfall, false, "", [15, 15, 15])

        // Shift Master Abilities
        shadeStrength = new Ability("shadeStrength", "A037")
        swiftMoves = new Ability("swiftMoves", "A056")
        swiftAttacks = new Ability("swiftAttacks", "A030")
        mirrorSwitch = new Ability("mirrorSwitch", "A03U", OrderId.Reveal)
        shift = new Ability("shift", "A03T", OrderId.Berserk)
        fallingStrike = new Ability("fallingStrike", "A059", OrderId.Thunderbolt, false, "", [1.5, 1.5, 1.5, 1.5, 1.5, 1.5])
        shiftStorm = new Ability("shiftStorm", "A03C", OrderId.Channel)
        felForm = new Ability("felForm", "A02Y", OrderId.Metamorphosis)

        // Tactition Abilities
        inspire = new Ability("inspire", "A042", OrderId.Channel)
        ironDefense = new Ability("ironDefense", "A019", OrderId.Roar)
        raiseBanner = new Ability("raiseBanner", "A01I", OrderId.Healingward)
        attack = new Ability("attack", "A01B", OrderId.Fingerofdeath)
        bolster = new Ability("bolster", "A01Z", OrderId.Tranquility)

        // Time Mage Abilities
        chronoAtrophy = new Ability("chronoAtrophy", "A04K", OrderId.Flamestrike)
        decay = new Ability("decay", "A032", OrderId.Shadowstrike)
        timeTravel = new Ability("timeTravel", "A04P", OrderId.Clusterrockets)
        paradox = new Ability("paradox", "A04N", OrderId.Tranquility, false, "", [10, 10, 10])


    }
}