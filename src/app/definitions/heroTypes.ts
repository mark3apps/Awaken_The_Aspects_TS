import { BrawlerHeroType } from "classes/heroTypes/brawlerHeroType"
import { ManaAddictHeroType } from "classes/heroTypes/manaAddictHeroType"
import { HeroType } from "classes/herotype"


export namespace HERO_TYPE {

    export let Brawler: HeroType
    export let ManaAddict: HeroType

    export const define = () : void => {
        Brawler = new BrawlerHeroType()
        ManaAddict = new ManaAddictHeroType()

    }

}

