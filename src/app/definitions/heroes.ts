




import { ShiftMasterHeroType } from "app/heroes/shiftMaster";
import { HERO_TYPE } from "lib/globals";
import { BrawlerHeroType } from "../heroes/brawler";
import { ManaAddictHeroType } from "../heroes/manaAddict";
import { TactitionHeroType } from "../heroes/tactition";
import { TimeMageHeroType } from "../heroes/timeMage";


// Hero List Set up
export function defineHeroTypes() {
    HERO_TYPE.Brawler = new BrawlerHeroType()
    HERO_TYPE.manaAddict = new ManaAddictHeroType()
    HERO_TYPE.shiftMaster = new ShiftMasterHeroType()
    HERO_TYPE.tactition = new TactitionHeroType()
    HERO_TYPE.timeMage = new TimeMageHeroType()
}
