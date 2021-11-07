import { BrawlerHeroType } from "classes/heroTypes/brawlerHeroType"
import { ManaAddictHeroType } from "classes/heroTypes/manaAddictHeroType"
import { HeroType } from "classes/herotype"
import { ShiftMasterHeroType } from "classes/heroTypes/shiftMasterHeroType"
import { TacticianHeroType } from "classes/heroTypes/tacticianHeroType"
import { TimeMageHeroType } from "classes/heroTypes/timeMageHeroType"


export namespace HERO_TYPE {

    export let Brawler: HeroType
    export let ManaAddict: HeroType
    export let ShiftMaster: HeroType
    export let Tactician: HeroType
    export let TimeMage: HeroType

    export const define = () : void => {
        Brawler = new BrawlerHeroType()
        ManaAddict = new ManaAddictHeroType()
        ShiftMaster = new ShiftMasterHeroType()
        Tactician = new TacticianHeroType()
        TimeMage = new TimeMageHeroType()
    }

}

