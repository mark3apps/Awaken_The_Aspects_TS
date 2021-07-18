
import { BrawlerHeroType, ManaAddictHeroType, ShiftMasterHeroType, TactitionHeroType, TimeMageHeroType } from "app/heroes/index";
import { HT } from "globals";


// Hero List Set up
export function defineHeroTypes() {
    HT.Brawler = new BrawlerHeroType()
    HT.manaAddict = new ManaAddictHeroType()
    HT.shiftMaster = new ShiftMasterHeroType()
    HT.tactition = new TactitionHeroType()
    HT.timeMage = new TimeMageHeroType()
}
