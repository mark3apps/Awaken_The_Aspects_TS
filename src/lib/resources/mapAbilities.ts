import { AbilityFelGrunt, AbilityFelOgre, AbilityFelWarlock, AbilityFelWarlord } from "app/abilities/unit/felOrc"
import { UNIT_TYPE } from "app/definitions/unitTypes"
import { Ability, EffectType } from "classes/ability"
import { HeroAbility } from "classes/heroAbility"
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

    export function define(): void {

        // Custom Abilities
        BonusArmor = new Ability({ four: ID.Ability.BonusArmor, type: EffectType.Passive })
        BonusCriticalStrike = new Ability({ four: ID.Ability.BonusCriticalStrike, type: EffectType.Passive })
        BonusDamage = new Ability({ four: ID.Ability.BonusDamage, type: EffectType.Passive })
        BonusEvasion = new Ability({ four: ID.Ability.BonusEvasion, type: EffectType.Passive })
        BonusLifeRegen = new Ability({ four: ID.Ability.BonusLifeRegen, type: EffectType.Passive })
        BonusLifeSteal = new Ability({ four: ID.Ability.BonusLifeSteal, type: EffectType.Passive })
        BonusMagicResistance = new Ability({ four: ID.Ability.BonusMagicResistance, type: EffectType.Passive })
        BonusMovementSpeed = new Ability({ four: ID.Ability.BonusMovementSpeed, type: EffectType.Passive })
        BonusStats = new Ability({ four: ID.Ability.BonusStats, type: EffectType.Passive })
        BonusManaRegen = new Ability({ four: ID.Ability.BonusManaRegen, type: EffectType.Passive })

        //
        // Unit Abilities
        //

        // Orc Abilities
        new AbilityFelGrunt({ four: ID.Ability.FelGrunt, type: EffectType.Death }, UNIT_TYPE.Grunt)
        new AbilityFelOgre({ four: ID.Ability.FelOgre, type: EffectType.Death }, UNIT_TYPE.Ogre)
        new AbilityFelWarlord({ four: ID.Ability.FelWarlord, type: EffectType.Death }, UNIT_TYPE.OrcWarchief)
        new AbilityFelWarlock({ four: ID.Ability.FelWarlock, type: EffectType.Death }, UNIT_TYPE.Warlock)

        //
        // Hero Abilities
        //

        // Brawler Abilities
        BrawlerDrain = new Ability({ four: ID.Ability.Drain, type: EffectType.Channel, orderId: OrderId.Stomp })
        BrawlerBloodlust = new Ability({ four: ID.Ability.Bloodlust, orderId: OrderId.Stomp })
        BrawlerWarstomp = new Ability({ four: ID.Ability.Warstomp, orderId: OrderId.Stomp })
        BrawlerUnleashRage = new Ability({ four: ID.Ability.UnleashRage, type: EffectType.Channel, orderId: OrderId.Stomp })

        // Mana Addict Abilities
        ManaAddictManaShield = new Ability({ four: ID.Ability.ManaShield, orderId: OrderId.Manashieldon, buffFour: ID.Buff.ManaShield })
        ManaAddictManaBomb = new Ability({ four: ID.Ability.ManaBomb, orderId: OrderId.Flamestrike })
        ManaAddictManaExplosion = new Ability({ four: ID.Ability.ManaExplosion, orderId: OrderId.Thunderclap })
        ManaAddictSoulBind = new Ability({ four: ID.Ability.SoulBind, orderId: OrderId.Clusterrockets, buffFour: ID.Buff.ManaAddictSoulBind })
        ManaAddictUnleashMana = new Ability({ four: ID.Ability.UnleashMana, type: EffectType.Channel, orderId: OrderId.Starfall })

        // Shift Master Abilities
        ShiftMasterShadeStrength = new Ability({ four: ID.Ability.ShadeStrength, type: EffectType.Instant })
        ShiftMasterSwiftMoves = new Ability({ four: ID.Ability.SwiftMoves, type: EffectType.Instant })
        ShiftMasterSwiftAttacks = new Ability({ four: ID.Ability.SwiftAttacks, type: EffectType.Instant })
        ShiftMasterSwitch = new Ability({ four: ID.Ability.MirrorSwitch, orderId: OrderId.Reveal })
        ShiftMasterShift = new Ability({ four: ID.Ability.Shift, orderId: OrderId.Berserk })
        ShiftMasterFallingStrike = new Ability({ four: ID.Ability.FallingStrike, type: EffectType.Channel, orderId: OrderId.Thunderbolt })
        ShiftMasterShiftStorm = new Ability({ four: ID.Ability.ShiftStorm, orderId: OrderId.Channel })
        ShiftMasterFelForm = new Ability({ four: ID.Ability.FelForm, orderId: OrderId.Metamorphosis })

        // Tactition Abilities
        TactitionInspire = new Ability({ four: ID.Ability.Inspire, orderId: OrderId.Channel })
        TactitionIronDefense = new Ability({ four: ID.Ability.IronDefense, orderId: OrderId.Roar })
        TactitionRaiseBanner = new Ability({ four: ID.Ability.RaiseBanner, orderId: OrderId.Healingward })
        TactitionAttack = new Ability({ four: ID.Ability.Attack, orderId: OrderId.Fingerofdeath })
        TactitionBolster = new Ability({ four: ID.Ability.Bolster, orderId: OrderId.Tranquility })

        // Time Mage Abilities
        TimeMageChronoAtrophy = new HeroAbility({ four: ID.Ability.ChronoAtrophy, orderId: OrderId.Flamestrike }, true, false, false)
        TimeMageDecay = new Ability({ four: ID.Ability.Decay, orderId: OrderId.Shadowstrike })
        TimeMageTimeTravel = new Ability({ four: ID.Ability.TimeTravel, orderId: OrderId.Clusterrockets })
        TimeMageParadox = new Ability({ four: ID.Ability.Paradox, type: EffectType.Channel, orderId: OrderId.Tranquility })

    }

}
