import { ABILITIES, ITEM } from "lib/globals"
import { HeroType, Strategy } from "../classes/herotype"

export class ManaAddictHeroType extends HeroType {

    
    constructor() {
        super("manaAddict", UNIT_FOUR.ManaAddict, UNIT_FOUR.ManaAddictAlter)
        this.addAbility(ABILITIES.manaShield, true, true)
        this.addAbility(ABILITIES.manaBomb)
        this.addAbility(ABILITIES.manaExplosion)
        this.addAbility(ABILITIES.soulBind)
        this.addAbility(ABILITIES.unleashMana, true, false, true)
        this.addItem(ITEM.teleport)
        this.addItem(ITEM.mage)

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