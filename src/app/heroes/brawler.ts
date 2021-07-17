import { HeroType, Strategy } from "app/classes/herotype"
import { ABL } from "app/globals/abilities"
import { IT } from "app/globals/itemTypes"

export class BrawlerHeroType extends HeroType {

    constructor() {
        super("brawler", "E001", "h00I")

        // Brawler Hero Setup
        this.addAbility(ABL.bloodlust)
        this.addAbility(ABL.drain)
        this.addAbility(ABL.warstomp)
        this.addAbility(ABL.unleashRage, true, false, true)
        this.addItem(IT.teleport)
        this.addItem(IT.tank)

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