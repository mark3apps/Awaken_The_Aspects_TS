import { Ability } from "app/classes/ability"
import { UnitType } from "app/classes/unitType"
import { HeroAttribute } from "app/systems/attribute"
import { HeroType } from "app/classes/herotype"
import { AbilityFour, Order } from "lib/w3ts/index"

export class BrawlerHeroType extends HeroType {

    constructor() {
        super("E001", UnitType.BrawlerAlter, "Brawler")

        // Attributes
        this.addHeroAttribute(HeroAttribute.strength)
        this.addHeroAttribute(HeroAttribute.melee)
        this.addHeroAttribute(HeroAttribute.brawler)

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

        this.traitAgressive = 80
        this.traitDefensive = 60
        this.traitSupport = 30
        this.traitAssassinate = 0

        this.addStrategy(Strategy.Agressive)
        this.addStrategy(Strategy.Neutral)
        this.addStrategy(Strategy.Defensive)

        // Abilities
        
        // Drain
        this.addAbility(new Ability({
            four: AbilityFour.Drain,
            type: EffectType.Channel,
            orderId: Order.Stomp,
            target: TargetType.DamageAround,
            permanent: true
        }))

        // Bloodlust
        this.addAbility(new Ability({
            four: AbilityFour.Bloodlust,
            orderId: Order.Stomp,
            type: EffectType.Instant,
            target: TargetType.SupportSelf,
            permanent: true,
            starting: true
        }))

        // Warstomp
        this.addAbility(new Ability({
            four: AbilityFour.Warstomp,
            orderId: Order.Stomp,
            type: EffectType.Instant,
            target: TargetType.DamageAround,
            permanent: true,
            starting: true
        }))

        // Unleash Rage
        this.addAbility(new Ability({
            four: AbilityFour.UnleashRage,
            type: EffectType.Channel,
            orderId: Order.Stomp,
            target: TargetType.DamageAround,
            permanent: true,
            starting: false,
            ult: true
        }))

    }
}