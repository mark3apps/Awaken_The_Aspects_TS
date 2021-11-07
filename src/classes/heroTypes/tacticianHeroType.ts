
import { ABILITY } from "app/definitions/abilities"
import { ATTRIBUTE } from "app/definitions/attributes"
import { Strategy } from "lib/resources/strategy"
import { UNIT_TYPE } from "../../app/definitions/unitTypes"
import { HeroType } from "../herotype"

export class TacticianHeroType extends HeroType {

    constructor() {
        super(UNIT_TYPE.Tactician, UNIT_TYPE.TacticianAlter, "Tactician")

        // Brawler Hero Setup
        this.addAbility(ABILITY.TactitionAttack)
        this.addAbility(ABILITY.TactitionBolster)
        this.addAbility(ABILITY.TactitionInspire)
        this.addAbility(ABILITY.TactitionIronDefense)
        this.addAbility(ABILITY.TactitionRaiseBanner)

        // Passive Abilities

        // Attributes
        this.addHeroAttribute(ATTRIBUTE.strength)
        this.addHeroAttribute(ATTRIBUTE.melee)
        this.addHeroAttribute(ATTRIBUTE.brawler)

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