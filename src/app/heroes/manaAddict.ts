import { HeroType, Strategy } from "app/classes/herotype"
import { ABL } from "app/globals/abilities"
import { IT } from "app/globals/itemTypes"
import { UnitFour } from "globals/unitFour"

export class ManaAddictHeroType extends HeroType {

    constructor() {
        super("manaAddict", UnitFour.ManaAddict, UnitFour.ManaAddictAlter)
        this.addAbility(ABL.manaShield, true, true)
        this.addAbility(ABL.manaBomb)
        this.addAbility(ABL.manaExplosion)
        this.addAbility(ABL.soulBind)
        this.addAbility(ABL.unleashMana, true, false, true)
        this.addItem(IT.teleport)
        this.addItem(IT.mage)

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
        this.addStrategy(Strategy.Agressive)
        this.addStrategy(Strategy.Neutral)
        this.addStrategy(Strategy.Defensive)
    }
}