import { Strategy } from "lib/resources/strategy"
import { HeroType } from "../herotype"
import { Ability, EffectType, TargetType } from "app/classes/ability"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"
import { AbilityManaStorm } from "app/classes/abilities/manaAddict/manaStorm"
import { AbilityMark } from "app/classes/abilities/manaAddict/mark"
import { HeroAttribute } from "app/classes/attribute"
import { UnitType } from "app/classes/unitType"

export class ManaAddictHeroType extends HeroType {

    constructor() {
        super("H00R", UnitType.ManaAddictAlter, "Mana Addict",)

        // Attributes
        this.addHeroAttribute(HeroAttribute.intelligence)
        this.addHeroAttribute(HeroAttribute.ranged)
        this.addHeroAttribute(HeroAttribute.mage)

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
        this.addAbility(new AbilityMark())


        // Mana Storm
        this.addAbility(new AbilityManaStorm())
    }




}