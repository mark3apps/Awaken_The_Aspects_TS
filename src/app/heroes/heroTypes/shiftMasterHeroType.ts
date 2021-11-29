import { FallingStrikeAbility } from "app/abilities/shifter/fallingstrike"
import { ShadestormAbility } from "app/abilities/shifter/shadestorm"
import { ShiftAbility } from "app/abilities/shifter/shift"
import { SwitchAbility } from "app/abilities/shifter/switch"
import { Ability } from "app/classes/ability"
import { UnitType } from "app/classes/unitType"
import { HeroAttribute } from "app/systems/attribute"
import { HeroType } from "lib/w3ts/handles/herotype"
import { AbilityFour, Order } from "lib/w3ts/index"

export class ShiftMasterHeroType extends HeroType {

    constructor() {
        super("E002", UnitType.ShiftMasterAlter, "Shift Master")

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
            four: AbilityFour.ShadeStrength,
            permanent: true,
        }))

        // Swift Moves
        this.addAbility(new Ability({
            four: AbilityFour.SwiftMoves,
            permanent: true,
        }))

        // Swift Attacks
        this.addAbility( new Ability({
            four: AbilityFour.SwiftAttacks,
            permanent: true,
        }))

        // Switch
        this.addAbility(new SwitchAbility())

        // Shift
        this.addAbility(new ShiftAbility())

        // Falling Strike
        this.addAbility(new FallingStrikeAbility())

        // Fel Form
        this.addAbility(new Ability({
            four: AbilityFour.FelForm,
            orderId: Order.Metamorphosis,
            type: EffectType.Instant,
            target: TargetType.SupportSelf,
            permanent: true,
        }))

        // Shift Storm
        this.addAbility(new ShadestormAbility())
    }
}