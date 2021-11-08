import { ATTRIBUTE } from "app/definitions/attributes"
import { Strategy } from "lib/resources/strategy"
import { UNIT_TYPE } from "../../app/definitions/unitTypes"
import { HeroType } from "../herotype"
import { Ability, EffectType, TargetType } from "classes/ability"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"

export class TimeMageHeroType extends HeroType {

    constructor() {
        super(UNIT_TYPE.TimeMage, UNIT_TYPE.TimeMageAlter, "TimeMage")

        // Attributes
        this.addHeroAttribute(ATTRIBUTE.intelligence)
        this.addHeroAttribute(ATTRIBUTE.ranged)
        this.addHeroAttribute(ATTRIBUTE.healer)

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

        this.traitAgressive = 40
        this.traitDefensive = 40
        this.traitSupport = 80
        this.traitAssassinate = 40

        this.addStrategy(Strategy.Agressive)
        this.addStrategy(Strategy.Neutral)
        this.addStrategy(Strategy.Defensive)

        // Abilities

        // Chrono Atrophy
        this.addAbility(new Ability({
            four: ID.Ability.ChronoAtrophy,
            orderId: OrderId.Flamestrike,
            type: EffectType.Instant,
            target: TargetType.ModifyArea,
            permanent: true,
            starting: true,
            ult: false
        }))

        // Decay
        this.addAbility(new Ability({
            four: ID.Ability.Decay,
            orderId: OrderId.Shadowstrike,
            type: EffectType.Instant,
            target: TargetType.ModifySingle,
            permanent: true,
            starting: true,
            ult: false
        }))

        // Time Travel
        this.addAbility(new Ability({
            four: ID.Ability.TimeTravel,
            orderId: OrderId.Clusterrockets,
            type: EffectType.Instant,
            target: TargetType.ModifyArea,
            permanent: true,
            starting: false,
            ult: false
        }))

        // Paradox
        this.addAbility(new Ability({
            four: ID.Ability.Paradox,
            orderId: OrderId.Tranquility,
            type: EffectType.Channel,
            target: TargetType.ModifyAround,
            permanent: true,
            starting: false,
            ult: true
        }))
    }
}