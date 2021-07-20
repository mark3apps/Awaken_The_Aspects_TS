
import { BrawlerHeroType, ManaAddictHeroType, ShiftMasterHeroType, TactitionHeroType, TimeMageHeroType } from "app/heroes/index";
import { HERO_TYPE } from "utils/globals";


// Hero List Set up
export function defineHeroTypes() {
    HERO_TYPE.Brawler = new BrawlerHeroType()
    HERO_TYPE.manaAddict = new ManaAddictHeroType()
    HERO_TYPE.shiftMaster = new ShiftMasterHeroType()
    HERO_TYPE.tactition = new TactitionHeroType()
    HERO_TYPE.timeMage = new TimeMageHeroType()
}
