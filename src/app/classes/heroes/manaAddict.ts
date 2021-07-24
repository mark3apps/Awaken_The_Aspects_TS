import { HeroType, Strategy } from "app/classes/herotype"
import { ABILITY, ITEM } from "lib/globals"

export class ManaAddictHeroType extends HeroType {

    constructor() {
        super("manaAddict", UNIT_FOUR.ManaAddict, UNIT_FOUR.ManaAddictAlter)
        this.addAbility(ABILITY.manaShield, true, true)
        this.addAbility(ABILITY.manaBomb)
        this.addAbility(ABILITY.manaExplosion)
        this.addAbility(ABILITY.soulBind)
        this.addAbility(ABILITY.unleashMana, true, false, true)
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