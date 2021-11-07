import { AbilityFelGrunt, AbilityFelOgre, AbilityFelWarlock, AbilityFelWarlord } from "app/abilities/unit/felOrc"
import { AbilityFootmanUpgrade } from "app/abilities/unit/footmanUpgrade"
import { Ability, EffectType, TargetType } from "classes/ability"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"

export namespace ABILITY {

    // Custom Abilities
    export let BonusArmor: Ability
    export let BonusCriticalStrike: Ability
    export let BonusDamage: Ability
    export let BonusEvasion: Ability
    export let BonusLifeRegen: Ability
    export let BonusLifeSteal: Ability
    export let BonusMagicResistance: Ability
    export let BonusMovementSpeed: Ability
    export let BonusStats: Ability
    export let BonusManaRegen: Ability

    //
    // Unit Abilities
    //

    export let FelOrcGrunt: Ability
    export let FelOgre: Ability
    export let FelWarlord: Ability
    export let FelWarlock: Ability

    // Brawler Abilities
    export let BrawlerDrain: Ability
    export let BrawlerBloodlust: Ability
    export let BrawlerWarstomp: Ability
    export let BrawlerUnleashRage: Ability

    // Mana Addict Abilities
    export let ManaAddictManaShield: Ability
    export let ManaAddictManaBomb: Ability
    export let ManaAddictManaExplosion: Ability
    export let ManaAddictSoulBind: Ability
    export let ManaAddictUnleashMana: Ability

    // Shift Master Abilities
    export let ShiftMasterShadeStrength: Ability
    export let ShiftMasterSwiftMoves: Ability
    export let ShiftMasterSwiftAttacks: Ability
    export let ShiftMasterSwitch: Ability
    export let ShiftMasterShift: Ability
    export let ShiftMasterFallingStrike: Ability
    export let ShiftMasterShiftStorm: Ability
    export let ShiftMasterFelForm: Ability

    // Tactition Abilities
    export let TactitionInspire: Ability
    export let TactitionIronDefense: Ability
    export let TactitionRaiseBanner: Ability
    export let TactitionAttack: Ability
    export let TactitionBolster: Ability

    // Time Mage Abilities
    export let TimeMageChronoAtrophy: Ability
    export let TimeMageDecay: Ability
    export let TimeMageTimeTravel: Ability
    export let TimeMageParadox: Ability

    export const define = (): void => {

        //
        // Unit Abilities
        //

        // Orc Abilities
        new AbilityFelGrunt({
            four: ID.Ability.FelGrunt,
            type: EffectType.Kill,
            target: TargetType.None
        })
        new AbilityFelOgre({
            four: ID.Ability.FelOgre,
            type: EffectType.Kill,
            target: TargetType.None
        })
        new AbilityFelWarlord({
            four: ID.Ability.FelWarlord,
            type: EffectType.Kill,
            target: TargetType.None
        })
        new AbilityFelWarlock({
            four: ID.Ability.FelWarlock,
            type: EffectType.Kill,
            target: TargetType.None
        })

        new AbilityFootmanUpgrade({
            four: ID.Ability.FootmanCharge,
            orderId: OrderId.Bearform,
            type: EffectType.Instant
        })


        //
        // Hero Abilities
        //

        // Brawler Abilities
        BrawlerDrain = new Ability({
            four: ID.Ability.Drain,
            type: EffectType.Channel,
            orderId: OrderId.Stomp,
            target: TargetType.None
        })
        BrawlerBloodlust = new Ability({
            four: ID.Ability.Bloodlust,
            orderId: OrderId.Stomp,
            type: EffectType.Instant,
            target: TargetType.None
        })
        BrawlerWarstomp = new Ability({
            four: ID.Ability.Warstomp,
            orderId: OrderId.Stomp,
            type: EffectType.Instant,
            target: TargetType.None
        })
        BrawlerUnleashRage = new Ability({
            four: ID.Ability.UnleashRage,
            type: EffectType.Channel,
            orderId: OrderId.Stomp,
            target: TargetType.None
        })

        // Mana Addict Abilities
        ManaAddictManaShield = new Ability({
            four: ID.Ability.ManaShield,
            orderId: OrderId.Manashieldon,
            orderIdOff: OrderId.Manashieldoff,
            buffFour: ID.Buff.ManaShield,
            type: EffectType.Instant,
            target: TargetType.None,
            permanent: true,
            starting: true,
            ult: false
        })
        ManaAddictManaBomb = new Ability({
            four: ID.Ability.ManaBomb,
            orderId: OrderId.Flamestrike,
            type: EffectType.Instant,
            target: TargetType.Point,
            permanent: true,
            starting: false,
            ult: false
        })
        ManaAddictManaExplosion = new Ability({
            four: ID.Ability.ManaExplosion,
            orderId: OrderId.Thunderclap,
            type: EffectType.Instant,
            target: TargetType.None,
            permanent: true,
            starting: true,
            ult: false
        })
        ManaAddictSoulBind = new Ability({
            four: ID.Ability.SoulBind,
            orderId: OrderId.Clusterrockets,
            buffFour: ID.Buff.ManaAddictSoulBind,
            type: EffectType.Instant,
            target: TargetType.AOE,
            permanent: true,
            starting: true,
            ult: false
        })
        ManaAddictUnleashMana = new Ability({
            four: ID.Ability.UnleashMana,
            type: EffectType.Channel,
            orderId: OrderId.Starfall,
            target: TargetType.None,
            permanent: true,
            starting: false,
            ult: true
        })

        // Shift Master Abilities
        ShiftMasterShadeStrength = new Ability({
            four: ID.Ability.ShadeStrength,
            type: EffectType.None,
            target: TargetType.None,
            permanent: true,
            starting: false,
            ult: false
        })
        ShiftMasterSwiftMoves = new Ability({
            four: ID.Ability.SwiftMoves,
            type: EffectType.None,
            target: TargetType.None,
            permanent: true,
            starting: false,
            ult: false
        })
        ShiftMasterSwiftAttacks = new Ability({
            four: ID.Ability.SwiftAttacks,
            type: EffectType.None,
            target: TargetType.None,
            permanent: true,
            starting: false,
            ult: false
        })
        ShiftMasterSwitch = new Ability({
            four: ID.Ability.MirrorSwitch,
            orderId: OrderId.Reveal,
            type: EffectType.None,
            target: TargetType.None,
            permanent: true,
            starting: true,
            ult: false
        })
        ShiftMasterShift = new Ability({
            four: ID.Ability.Shift,
            orderId: OrderId.Berserk,
            type: EffectType.Instant,
            target: TargetType.None,
            permanent: true,
            starting: true,
            ult: false
        })
        ShiftMasterFallingStrike = new Ability({
            four: ID.Ability.FallingStrike,
            type: EffectType.Channel,
            orderId: OrderId.Thunderbolt,
            target: TargetType.Point,
            permanent: true,
            starting: true,
            ult: false
        })
        ShiftMasterShiftStorm = new Ability({
            four: ID.Ability.ShiftStorm,
            orderId: OrderId.Channel,
            type: EffectType.None,
            target: TargetType.None,
            permanent: true,
            starting: false,
            ult: true
        })
        ShiftMasterFelForm = new Ability({
            four: ID.Ability.FelForm,
            orderId: OrderId.Metamorphosis,
            type: EffectType.None,
            target: TargetType.None,
            permanent: true,
            starting: false,
            ult: false
        })

        // Tactition Abilities
        TactitionInspire = new Ability({
            four: ID.Ability.Inspire,
            orderId: OrderId.Channel,
            permanent: true,
            starting: false,
            ult: true
        })
        TactitionIronDefense = new Ability({
            four: ID.Ability.IronDefense,
            orderId: OrderId.Roar,
            permanent: true,
            starting: true,
            ult: false
        })
        TactitionRaiseBanner = new Ability({
            four: ID.Ability.RaiseBanner,
            orderId: OrderId.Healingward,
            permanent: true,
            starting: true,
            ult: false
        })
        TactitionAttack = new Ability({
            four: ID.Ability.Attack,
            orderId: OrderId.Fingerofdeath,
            permanent: true,
            starting: true,
            ult: false
        })
        TactitionBolster = new Ability({
            four: ID.Ability.Bolster,
            orderId: OrderId.Tranquility,
            permanent: true,
            starting: true,
            ult: false
        })

        // Time Mage Abilities
        TimeMageChronoAtrophy = new Ability({
            four: ID.Ability.ChronoAtrophy,
            orderId: OrderId.Flamestrike,
            permanent: true,
            starting: true,
            ult: false
        })
        TimeMageDecay = new Ability({
            four: ID.Ability.Decay,
            orderId: OrderId.Shadowstrike,
            permanent: true,
            starting: true,
            ult: false
        })
        TimeMageTimeTravel = new Ability({
            four: ID.Ability.TimeTravel,
            orderId: OrderId.Clusterrockets,
            permanent: true,
            starting: false,
            ult: false
        })
        TimeMageParadox = new Ability({
            four: ID.Ability.Paradox,
            type: EffectType.Channel,
            orderId: OrderId.Tranquility,
            permanent: true,
            starting: false,
            ult: true
        })

    }

}
