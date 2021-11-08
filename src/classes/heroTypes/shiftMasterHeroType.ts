
import { HERO_ABILITY } from "app/definitions/heroAbilities"
import { ATTRIBUTE } from "app/definitions/attributes"
import { Strategy } from "lib/resources/strategy"
import { UNIT_TYPE } from "../../app/definitions/unitTypes"
import { HeroType } from "../herotype"

export class ShiftMasterHeroType extends HeroType {

    constructor() {
        super(UNIT_TYPE.ShiftMaster, UNIT_TYPE.ShiftMasterAlter, "Shift Master")

        // Brawler Hero Setup
        this.addAbility(HERO_ABILITY.ShiftMasterFallingStrike)
        this.addAbility(HERO_ABILITY.ShiftMasterFelForm)
        this.addAbility(HERO_ABILITY.ShiftMasterShift)
        this.addAbility(HERO_ABILITY.ShiftMasterSwitch)
        this.addAbility(HERO_ABILITY.ShiftMasterShiftStorm)

        // Passive Abilities
        this.addAbility(HERO_ABILITY.ShiftMasterShadeStrength)
        this.addAbility(HERO_ABILITY.ShiftMasterSwiftAttacks)
        this.addAbility(HERO_ABILITY.ShiftMasterSwiftMoves)

        // Attributes
        this.addHeroAttribute(ATTRIBUTE.agility)
        this.addHeroAttribute(ATTRIBUTE.melee)
        this.addHeroAttribute(ATTRIBUTE.assassin)

        // Items
        


        // Brawler AI Setup
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
        this.addStrategy(Strategy.Agressive)
        this.addStrategy(Strategy.Neutral)
        this.addStrategy(Strategy.Defensive)
    }
}