import { Ability } from "classes/ability"
import { OrderId } from "lib/w3ts/globals/order"



export let BonusArmor: Ability
export let BonusCriticalStrike: Ability
export let BonusDamage: Ability
export let BonusEvasion: Ability
export let BonusLifeRegeneration: Ability
export let BonusLifeSteal: Ability
export let BonusMagicResistance: Ability
export let BonusMovementSpeed: Ability
export let BonusStats: Ability
export let BonusManaRegeneration: Ability

// Brawler Abilities
export let Drain: Ability
export let Bloodlust: Ability
export let WarStomp: Ability
export let UnleashRage: Ability

// Mana Addict Abilities
export let ManaShield: Ability
export let ManaBomb: Ability
export let ManaExplosion: Ability
export let SoulBind: Ability
export let UnleashMana: Ability

// Shift Master Abilities
export let ShadeStrength: Ability
export let SwiftMoves: Ability
export let SwiftAttacks: Ability
export let MirrorSwitch: Ability
export let Shift: Ability
export let FallingStrike: Ability
export let ShiftStorm: Ability
export let FelForm: Ability

// Tactician Abilities
export let Inspire: Ability
export let IronDefense: Ability
export let RaiseBanner: Ability
export let Attack: Ability
export let Bolster: Ability

// Time Mage Abilities
export let ChronoAtrophy: Ability
export let Decay: Ability
export let TimeTravel: Ability
export let Paradox: Ability

export function define(): void {
    BonusArmor = new Ability("Z001")
    BonusCriticalStrike = new Ability("Z003")
    BonusDamage = new Ability("Z004")
    BonusEvasion = new Ability("Z005")
    BonusLifeRegeneration = new Ability("Z006")
    BonusLifeSteal = new Ability("Z007")
    BonusMagicResistance = new Ability("Z008")
    BonusMovementSpeed = new Ability("Z009")
    BonusStats = new Ability("Z010")
    BonusManaRegeneration = new Ability("Z011")

    // Brawler Abilities
    Drain = new Ability("A01Y", OrderId.Stomp, false, "", [6, 6, 6, 6, 6, 6])
    Bloodlust = new Ability("A007", OrderId.Stomp)
    WarStomp = new Ability("A002", OrderId.Stomp)
    UnleashRage = new Ability("A029", OrderId.Stomp, false, "", [6, 6, 6])

    // Mana Addict Abilities
    ManaShield = new Ability("A001", OrderId.Manashieldon, true, "BNms")
    ManaBomb = new Ability("A03P", OrderId.Flamestrike)
    ManaExplosion = new Ability("A018", OrderId.Thunderclap)
    SoulBind = new Ability("A015", OrderId.Clusterrockets, true, "B00F")
    UnleashMana = new Ability("A03S", OrderId.Starfall, false, "", [15, 15, 15])

    // Shift Master Abilities
    ShadeStrength = new Ability("A037")
    SwiftMoves = new Ability("A056")
    SwiftAttacks = new Ability("A030")
    MirrorSwitch = new Ability("A03U", OrderId.Reveal)
    Shift = new Ability("A03T", OrderId.Berserk)
    FallingStrike = new Ability("A059", OrderId.Thunderbolt, false, "", [1.5, 1.5, 1.5, 1.5, 1.5, 1.5])
    ShiftStorm = new Ability("A03C", OrderId.Channel)
    FelForm = new Ability("A02Y", OrderId.Metamorphosis)

    // Tactition Abilities
    Inspire = new Ability("A042", OrderId.Channel)
    IronDefense = new Ability("A019", OrderId.Roar)
    RaiseBanner = new Ability("A01I", OrderId.Healingward)
    Attack = new Ability("A01B", OrderId.Fingerofdeath)
    Bolster = new Ability("A01Z", OrderId.Tranquility)

    // Time Mage Abilities
    ChronoAtrophy = new Ability("A04K", OrderId.Flamestrike)
    Decay = new Ability("A032", OrderId.Shadowstrike)
    TimeTravel = new Ability("A04P", OrderId.Clusterrockets)
    Paradox = new Ability("A04N", OrderId.Tranquility, false, "", [10, 10, 10])

}