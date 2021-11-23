

import { Strategy } from "lib/resources/strategy"
import { HeroType } from "../herotype"
import { Ability, EffectType, TargetType } from "classes/ability"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"
import { HeroAttribute } from "classes/attribute"
import { UnitType } from "classes/unitType"

export class ShiftMasterHeroType extends HeroType {

    constructor() {
        super(UnitType.ShiftMaster, UnitType.ShiftMasterAlter, "Shift Master")

        // Attributes
        this.addHeroAttribute(HeroAttribute.agility)
        this.addHeroAttribute(HeroAttribute.melee)
        this.addHeroAttribute(HeroAttribute.assassin)

        // Items


        // AI Setup
        this.lifeFactor = 1
        this.manaFactor = 0.02
        this.lifeHighPercent = 65
        this.lifeLowPercent = 20
        this.lifeLowNumber = 400
        this.highDamageSingle = 17
        this.highDamageAverage = 25
        this.powerBase = 500
        this.powerLevel = 200
        this.unitClumpCheck = true
        this.unitClumpRange = 100
        this.intelRange = 1100
        this.intelCloseRange = 500

        this.traitAgressive = 60
        this.traitDefensive = 30
        this.traitSupport = 20
        this.traitAssassinate = 80

        this.addStrategy(Strategy.Agressive)
        this.addStrategy(Strategy.Neutral)
        this.addStrategy(Strategy.Defensive)

        // Abilities

        // Shade Strength
        this.addAbility(new Ability({
            four: ID.Ability.ShadeStrength,
            permanent: true,
        }))

        // Swift Moves
        this.addAbility(new Ability({
            four: ID.Ability.SwiftMoves,
            permanent: true,
        }))

        // Swift Attacks
        this.addAbility( new Ability({
            four: ID.Ability.SwiftAttacks,
            permanent: true,
        }))

        // Switch
        this.addAbility(new Ability({
            four: ID.Ability.MirrorSwitch,
            orderId: OrderId.Reveal,
            type: EffectType.Instant,
            target: TargetType.Specific,
            permanent: true,
            starting: true,
            addEffect: true
        }))

        // Shift
        this.addAbility(new Ability({
            four: ID.Ability.Shift,
            orderId: OrderId.Berserk,
            type: EffectType.Instant,
            target: TargetType.SupportSelf,
            permanent: true,
            starting: true
        }))

        // Falling Strike
        this.addAbility(new Ability({
            four: ID.Ability.FallingStrike,
            type: EffectType.Channel,
            orderId: OrderId.Thunderbolt,
            target: TargetType.DamageAreaTarget,
            permanent: true,
            starting: true,
        }))

        // Fel Form
        this.addAbility(new Ability({
            four: ID.Ability.FelForm,
            orderId: OrderId.Metamorphosis,
            type: EffectType.Instant,
            target: TargetType.SupportSelf,
            permanent: true,
        }))

        // Shift Storm
        this.addAbility(new Ability({
            four: ID.Ability.ShiftStorm,
            orderId: OrderId.Channel,
            type: EffectType.Instant,
            target: TargetType.Specific,
            permanent: true,
            ult: true
        }))
    }
}