
import { Strategy } from "lib/resources/strategy"
import { HeroType } from "../herotype"
import { Ability, EffectType, TargetType } from "app/classes/ability"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"
import { InspireAbility, AbilityInspireDeath } from "app/classes/abilities/tactition/inspire"
import { AttackAbility } from "app/classes/abilities/tactition/attack"
import { BolsterAbility } from "app/classes/abilities/tactition/bolster"
import { HeroAttribute } from "app/classes/attribute"
import { UnitType } from "app/classes/unitType"



export class TacticianHeroType extends HeroType {
    inspire: Ability

    constructor() {
        super("H009", UnitType.TacticianAlter, "Tactician")

        this.defineAbilities()
        this.defineAttributes()
        this.defineItems()
        this.defineAI()

    }


    public override defineAttributes(): void {
        this.addHeroAttribute(HeroAttribute.strength)
        this.addHeroAttribute(HeroAttribute.melee)
        this.addHeroAttribute(HeroAttribute.brawler)
    }


    public override defineItems(): void {
        // Empty
    }


    public override defineAI(): void {
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
    }


    public override defineAbilities(): void {

        // Standard Abilities

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


        // Custom Abilities
        this.addAbility(new BolsterAbility())
        this.addAbility(new AttackAbility())
        this.addAbility(new InspireAbility())
        new AbilityInspireDeath()
    }
}