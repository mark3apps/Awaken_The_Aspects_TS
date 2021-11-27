
import { Strategy } from "lib/resources/strategy"
import { HeroType } from "../herotype"
import { Ability, EffectType, TargetType } from "app/classes/ability"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"
import { HeroAttribute } from "app/classes/attribute"
import { UnitType } from "app/classes/unitType"

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
            four: ID.Ability.Drain,
            type: EffectType.Channel,
            orderId: OrderId.Stomp,
            target: TargetType.DamageAround,
            permanent: true
        }))

        // Bloodlust
        this.addAbility(new Ability({
            four: ID.Ability.Bloodlust,
            orderId: OrderId.Stomp,
            type: EffectType.Instant,
            target: TargetType.SupportSelf,
            permanent: true,
            starting: true
        }))

        // Warstomp
        this.addAbility(new Ability({
            four: ID.Ability.Warstomp,
            orderId: OrderId.Stomp,
            type: EffectType.Instant,
            target: TargetType.DamageAround,
            permanent: true,
            starting: true
        }))

        // Unleash Rage
        this.addAbility(new Ability({
            four: ID.Ability.UnleashRage,
            type: EffectType.Channel,
            orderId: OrderId.Stomp,
            target: TargetType.DamageAround,
            permanent: true,
            starting: false,
            ult: true
        }))

    }
}