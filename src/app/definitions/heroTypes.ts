
import { BrawlerHeroType } from "classes/heroTypes/brawlerHeroType"
import { ManaAddictHeroType } from "classes/heroTypes/manaAddictHeroType"
import { ShiftMasterHeroType } from "classes/heroTypes/shiftMasterHeroType"
import { TacticianHeroType } from "classes/heroTypes/tacticianHeroType"
import { TimeMageHeroType } from "classes/heroTypes/timeMageHeroType"


export namespace HERO_TYPE {
    export let Tactician: TacticianHeroType

    export const define = (): void => {
        new BrawlerHeroType()
        new ManaAddictHeroType()
        new ShiftMasterHeroType()
        Tactician = new TacticianHeroType()
        new TimeMageHeroType()
    }
}

