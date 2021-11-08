
import { HERO_ABILITY } from "app/definitions/heroAbilities"
import { ATTRIBUTE } from "app/definitions/attributes"
import { Strategy } from "lib/resources/strategy"
import { UNIT_TYPE } from "../../app/definitions/unitTypes"
import { HeroType } from "../herotype"

export class TimeMageHeroType extends HeroType {

    constructor() {
        super(UNIT_TYPE.TimeMage, UNIT_TYPE.TimeMageAlter, "TimeMage")

        // Brawler Hero Setup
        this.addAbility(HERO_ABILITY.TimeMageChronoAtrophy)
        this.addAbility(HERO_ABILITY.TimeMageDecay)
        this.addAbility(HERO_ABILITY.TimeMageParadox)
        this.addAbility(HERO_ABILITY.TimeMageTimeTravel)

        // Passive Abilities

        // Attributes
        this.addHeroAttribute(ATTRIBUTE.intelligence)
        this.addHeroAttribute(ATTRIBUTE.ranged)
        this.addHeroAttribute(ATTRIBUTE.healer)

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