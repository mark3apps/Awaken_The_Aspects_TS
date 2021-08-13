
import { Strategy } from "lib/resources/strategy"
import { HeroType } from "../herotype";
import { ABILITY } from "../../app/definitions/abilities"
import { ITEM_TYPE } from "../../app/definitions/itemTypes"
import { UNIT_TYPE } from "../../app/definitions/unitTypes"


export class BrawlerHeroType extends HeroType {

    constructor() {
        super("brawler", UNIT_TYPE.Brawler.four, UNIT_TYPE.BrawlerAlter.four);

        
        // Brawler Hero Setup
        this.addAbility(ABILITY.bloodlust);
        this.addAbility(ABILITY.drain);
        this.addAbility(ABILITY.warstomp);
        this.addAbility(ABILITY.unleashRage, true, false, true);
        this.addItem(ITEM_TYPE.teleport);
        this.addItem(ITEM_TYPE.tank);


        // Brawler AI Setup
        this.lifeFactor = 1;
        this.manaFactor = 0.02;
        this.lifeHighPercent = 65;
        this.lifeLowPercent = 20;
        this.lifeLowNumber = 400;
        this.highDamageSingle = 17;
        this.highDamageAverage = 25;
        this.powerBase = 500;
        this.powerLevel = 200;
        this.unitClumpCheck = true;
        this.unitClumpRange = 100;
        this.intelRange = 1100;
        this.intelCloseRange = 500;
        this.addStrategy(Strategy.Agressive);
        this.addStrategy(Strategy.Neutral);
        this.addStrategy(Strategy.Defensive);
    }
}