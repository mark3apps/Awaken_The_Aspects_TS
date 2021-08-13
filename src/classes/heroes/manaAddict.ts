
import { Strategy } from "lib/resources/strategy"
import { HeroType } from "../herotype";
import { ABILITY } from "../../app/definitions/abilities"
import { ITEM_TYPE } from "../../app/definitions/itemTypes"
import { UNIT_TYPE } from "../../app/definitions/unitTypes"


export class ManaAddictHeroType extends HeroType {

    constructor() {
        super("manaAddict", UNIT_TYPE.ManaAddict.four, UNIT_TYPE.ManaAddictAlter.four)

        // Abilities
        this.addAbility(ABILITY.manaShield, true, true)
        this.addAbility(ABILITY.manaBomb)
        this.addAbility(ABILITY.manaExplosion)
        this.addAbility(ABILITY.soulBind)
        this.addAbility(ABILITY.unleashMana, true, false, true)

        // Items
        this.addItem(ITEM_TYPE.teleport)
        this.addItem(ITEM_TYPE.mage)

        // AI
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