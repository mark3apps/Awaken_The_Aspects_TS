
import { HERO_ABILITY } from "app/definitions/heroAbilities"
import { ATTRIBUTE } from "app/definitions/attributes"
import { Strategy } from "lib/resources/strategy"
import { UNIT_TYPE } from "../../app/definitions/unitTypes"
import { HeroType } from "../herotype"

export class ManaAddictHeroType extends HeroType {

    constructor() {
        super(UNIT_TYPE.ManaAddict, UNIT_TYPE.ManaAddictAlter, "Mana Addict",)

        // Abilities
        this.addAbility(HERO_ABILITY.ManaAddictManaShield)
        this.addAbility(HERO_ABILITY.ManaAddictManaBomb)
        this.addAbility(HERO_ABILITY.ManaAddictManaExplosion)
        this.addAbility(HERO_ABILITY.ManaAddictSoulBind)
        this.addAbility(HERO_ABILITY.ManaAddictUnleashMana)

        // Attributes
        this.addHeroAttribute(ATTRIBUTE.agility)
        this.addHeroAttribute(ATTRIBUTE.ranged)
        this.addHeroAttribute(ATTRIBUTE.mage)

        // Items

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