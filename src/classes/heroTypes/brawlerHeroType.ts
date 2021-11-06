
import { ABILITY } from "app/definitions/abilities"
import { Strategy } from "lib/resources/strategy"
import { ITEM_TYPE } from "../../app/definitions/itemTypes"
import { UNIT_TYPE } from "../../app/definitions/unitTypes"
import { HeroType } from "../herotype"

export class BrawlerHeroType extends HeroType {

    constructor() {
        super(UNIT_TYPE.Brawler, UNIT_TYPE.BrawlerAlter)

        // // Brawler Hero Setup
        this.addAbility(ABILITY.BrawlerBloodlust)
        this.addAbility(ABILITY.BrawlerDrain)
        this.addAbility(ABILITY.BrawlerWarstomp)
        this.addAbility(ABILITY.BrawlerUnleashRage)

        this.addItem(ITEM_TYPE.teleport)
        this.addItem(ITEM_TYPE.tank)


        // // Brawler AI Setup
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