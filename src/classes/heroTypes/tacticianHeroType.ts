import { ATTRIBUTE } from "app/definitions/attributes"
import { Strategy } from "lib/resources/strategy"
import { UNIT_TYPE } from "../../app/definitions/unitTypes"
import { HeroType } from "../herotype"
import { Ability, EffectType, TargetType } from "classes/ability"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"

export class TacticianHeroType extends HeroType {

    constructor() {
        super(UNIT_TYPE.Tactician, UNIT_TYPE.TacticianAlter, "Tactician")

        // Attributes
        this.addHeroAttribute(ATTRIBUTE.strength)
        this.addHeroAttribute(ATTRIBUTE.melee)
        this.addHeroAttribute(ATTRIBUTE.brawler)

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
        this.traitSupport = 60
        this.traitAssassinate = 0

        this.addStrategy(Strategy.Agressive)
        this.addStrategy(Strategy.Neutral)
        this.addStrategy(Strategy.Defensive)

        // Abilities

        // Iron Defense
        this.addAbility(new Ability({
            four: ID.Ability.IronDefense,
            orderId: OrderId.Roar,
            type: EffectType.Instant,
            target: TargetType.SupportSelf,
            permanent: true,
            starting: true,
        }))

        // Raise Banner
        this.addAbility(new Ability({
            four: ID.Ability.RaiseBanner,
            orderId: OrderId.Healingward,
            type: EffectType.Instant,
            target: TargetType.SupportArea,
            permanent: true,
            starting: true,
        }))

        // Attack
        this.addAbility(new Ability({
            four: ID.Ability.Attack,
            orderId: OrderId.Fingerofdeath,
            type: EffectType.Instant,
            target: TargetType.Specific,
            permanent: true,
            starting: true,
        }))

        // Bolster
        this.addAbility(new Ability({
            four: ID.Ability.Bolster,
            orderId: OrderId.Tranquility,
            type: EffectType.Instant,
            target: TargetType.SupportAround,
            permanent: true,
        }))

        // Inspire
        this.addAbility(new Ability({
            four: ID.Ability.Inspire,
            orderId: OrderId.Channel,
            type: EffectType.Instant,
            target: TargetType.SupportAround,
            permanent: true,
            ult: true
        }))

    }
}