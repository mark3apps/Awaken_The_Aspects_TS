import { BrawlerHeroType } from "classes/heroes/brawler"
import { ManaAddictHeroType } from "classes/heroes/manaAddict"



export namespace HERO_TYPE {

    export let Brawler: BrawlerHeroType
    export let ManaAddict: BrawlerHeroType

    export function define(): void {
        Brawler = new BrawlerHeroType()
        ManaAddict = new ManaAddictHeroType()
    }
}