import { BrawlerHeroType } from "classes/heroes/brawlerHeroType"
import { ManaAddictHeroType } from "classes/heroes/manaAddictHeroType"
import { HeroType } from "classes/herotype"


export namespace HERO_TYPE {

    export let Brawler: HeroType
    export let ManaAddict: HeroType

    export const define = () : void => {
        Brawler = new BrawlerHeroType()
        ManaAddict = new ManaAddictHeroType()

    }

}

