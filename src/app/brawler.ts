import { HeroType, Strategy } from "../classes/herotype";
import { Def } from "./definitions/definitions"


export class BrawlerHeroType extends HeroType {

    constructor() {
        super("brawler", UnitFour.Brawler, UnitFour.BrawlerAlter);

        // Brawler Hero Setup
        this.addAbility(Def.ability.bloodlust);
        this.addAbility(Def.ability.drain);
        this.addAbility(Def.ability.warstomp);
        this.addAbility(Def.ability.unleashRage, true, false, true);
        this.addItem(Def.item.teleport);
        this.addItem(Def.item.tank);


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