import { Loc } from "classes/loc"
import { Rectangle } from "lib/w3ts/index"
import { ARMY } from "./armies"

interface LocInterface {
    alliance: Loc,
    federation: Loc
}

export namespace LOC {

    export const castle: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Hero)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Hero))
    }
    export const arcane: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Mage_Base), castle.alliance, ARMY.federation),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Mage_Base), castle.federation, ARMY.alliance)
    }
    export const start: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Start), castle.alliance, ARMY.federation),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Start), castle.federation, ARMY.alliance)
    }
    export const elf: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Elf_Base_Left), castle.alliance, ARMY.federation),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Elf_Base_Right), castle.federation, ARMY.alliance)
    }

    // Pathing Rects
    export const everything: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Everything), castle.alliance, ARMY.federation),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Everything), castle.federation, ARMY.alliance)
    }
    export const bottom: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Bottom), arcane.alliance, ARMY.federation),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Bottom), elf.federation, ARMY.alliance)
    }
    export const middle: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Middle), start.alliance, ARMY.federation),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Middle), start.federation, ARMY.alliance)
    }
    export const top: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Top), elf.alliance, ARMY.federation),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Top), arcane.federation, ARMY.alliance)
    }

    // Spawn Rects
    export const sArcane: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Arcane)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Arcane))
    }
    export const sArcaneHero: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Hero_Left)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Hero_Right))
    }
    export const sCamp: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Camp_Bottom)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Camp_Top))
    }
    export const sHighCity: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Blacksmith_Left)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Blacksmith_Right))
    }
    export const sCityElf: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_City_Elves_Left)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_City_Elves_Right))
    }
    export const sCityFront: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Front_Town_Left)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Front_City_Right))
    }
    export const sCitySide: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_City)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_City))
    }
    export const sElementalTop: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Left_Top)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Right_Top))
    }
    export const sElementalBottom: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Left_Bottom)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Right_Bottom))
    }
    export const sElf: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_High_Elves)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_High_Elves))
    }
    export const sElfShipyard: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Shipyard)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Shipyard))
    }
    export const sHero: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Hero)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Hero))
    }
    export const sHumanShipyard: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Human_Shipyard_Left)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Human_Shipyard_Right))
    }
    export const sKolbold: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Furbolg_Left)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Furbolg_Right))
    }
    export const sMurloc: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Murloc_Spawn_Left)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Murloc_Spawn_Right))
    }
    export const sNaga: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Naga_Left)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Naga_Right))
    }
    export const sOrc: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Orc)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Orc))
    }
    export const sNightElf: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Tree)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Tree))
    }
    export const sDwarf: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Workshop)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Workshop))
    }
    export const sUndead: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Undead_Left)),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Undead_Right))
    }

    // Creep Rects
    export const cForest: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left), top.federation, ARMY.alliance),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right), bottom.alliance, ARMY.federation)
    }
    export const cForestMid: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left_Mid), cForest.alliance, ARMY.alliance),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right_Mid), cForest.federation, ARMY.federation)
    }
    export const cTides: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Murloc_Left), top.federation, ARMY.alliance),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Murloc_Right), bottom.alliance, ARMY.federation)
    }
    export const cDeath: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Zombie_End_Left), middle.federation, ARMY.alliance),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Zombie_End_Right), middle.alliance, ARMY.federation)
    }
    export const cDeathMid: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Zombie_Mid_Left), cDeath.alliance, ARMY.alliance),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Zombie_Mid_Right), cDeath.federation, ARMY.federation)
    }
    export const cStorm: LocInterface = {
        alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Elemental_Start), bottom.federation, ARMY.alliance),
        federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Elemental_Start), top.alliance, ARMY.federation)
    }
}