import { ATTRIBUTE } from "app/definitions/attributes"
import { Strategy } from "lib/resources/strategy"
import { UNIT_TYPE } from "../../app/definitions/unitTypes"
import { HeroType } from "../herotype"
import { Ability, EffectType, TargetType } from "classes/ability"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"

export class ManaAddictHeroType extends HeroType {

    constructor() {
        super(UNIT_TYPE.ManaAddict, UNIT_TYPE.ManaAddictAlter, "Mana Addict",)

        // Attributes
        this.addHeroAttribute(ATTRIBUTE.intelligence)
        this.addHeroAttribute(ATTRIBUTE.ranged)
        this.addHeroAttribute(ATTRIBUTE.mage)

        // Items


        // AI Setup
        this.lifeFactor = 1
        this.manaFactor = 0.75
        this.lifeHighPercent = 85
        this.lifeLowPercent = 25
        this.lifeLowNumber = 300
        this.highDamageSingle = 3
        this.highDamageAverage = 18
        this.powerBase = 700
        this.powerLevel = 220
        this.unitClumpCheck = true
        this.unitClumpRange = 100
        this.intelRange = 1000
        this.intelCloseRange = 400

        this.traitAgressive = 20
        this.traitDefensive = 60
        this.traitSupport = 80
        this.traitAssassinate = 0

        this.addStrategy(Strategy.Agressive)
        this.addStrategy(Strategy.Neutral)
        this.addStrategy(Strategy.Defensive)

        // Abilities

        // Mana Shield
        this.addAbility(new Ability({
            four: ID.Ability.ManaShield,
            orderId: OrderId.Manashieldon,
            orderIdOff: OrderId.Manashieldoff,
            buffFour: ID.Buff.ManaShield,
            type: EffectType.Instant,
            target: TargetType.SupportSelf,
            permanent: true,
            starting: true
        }))

        // Mana Bomb
        this.addAbility(new Ability({
            four: ID.Ability.ManaBomb,
            orderId: OrderId.Flamestrike,
            type: EffectType.Instant,
            target: TargetType.DamageArea,
            permanent: true,
            starting: false
        }))

        // Mana Explosion
        this.addAbility(new Ability({
            four: ID.Ability.ManaExplosion,
            orderId: OrderId.Thunderclap,
            type: EffectType.Instant,
            target: TargetType.CrippleAround,
            permanent: true,
            starting: true
        }))

        // Soul Bind
        this.addAbility(new Ability({
            four: ID.Ability.SoulBind,
            orderId: OrderId.Clusterrockets,
            buffFour: ID.Buff.ManaAddictSoulBind,
            type: EffectType.Instant,
            target: TargetType.ModifyArea,
            permanent: true,
            starting: true
        }))

        // Unleash Mana
        this.addAbility(new Ability({
            four: ID.Ability.UnleashMana,
            type: EffectType.Channel,
            orderId: OrderId.Starfall,
            target: TargetType.DamageAround,
            permanent: true,
            ult: true
        }))
    }




}