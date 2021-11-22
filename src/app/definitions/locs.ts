import { Loc } from "classes/loc"
import { Rectangle } from "lib/w3ts/index"
import { ARMY } from "./armies"

interface LocInterface {
    alliance: Loc,
    federation: Loc
}

export namespace LOC {
    export let castle: LocInterface
    export let arcane: LocInterface
    export let start: LocInterface
    export let elf: LocInterface
    export let everything: LocInterface
    export let bottom: LocInterface
    export let middle: LocInterface
    export let top: LocInterface
    export let sArcane: LocInterface
    export let sArcaneHero: LocInterface
    export let sNightElf: LocInterface
    export let sCamp: LocInterface
    export let sHighCity: LocInterface
    export let sCityElf: LocInterface
    export let sCityFront: LocInterface
    export let sElementalTop: LocInterface
    export let sElementalBottom: LocInterface
    export let sElf: LocInterface
    export let sElfShipyard: LocInterface
    export let sHero: LocInterface
    export let sHumanShipyard: LocInterface
    export let sKolbold: LocInterface
    export let sMurloc: LocInterface
    export let sNaga: LocInterface
    export let sOrc: LocInterface
    export let sTree: LocInterface
    export let sDwarf: LocInterface
    export let sUndead: LocInterface
    export let cForest: LocInterface
    export let cForestMid: LocInterface
    export let cTides: LocInterface
    export let cDeath: LocInterface
    export let cStorm: LocInterface
    export let cRock: LocInterface

    export const define = (): void => {
        castle = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Hero)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Hero))
        }
        arcane = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Mage_Base), [{ loc: castle.alliance, army: ARMY.Federation }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Mage_Base), [{ loc: castle.federation, army: ARMY.Alliance }])
        }
        start = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Start), [{ loc: castle.alliance, army: ARMY.Federation }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Start), [{ loc: castle.federation, army: ARMY.Alliance }])
        }
        elf = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Elf_Base_Left), [{ loc: castle.alliance, army: ARMY.Federation }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Elf_Base_Right), [{ loc: castle.federation, army: ARMY.Alliance }])
        }

        // Pathing Rects
        everything = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Everything), [{ loc: castle.alliance, army: ARMY.Federation }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Everything), [{ loc: castle.federation, army: ARMY.Alliance }])
        }
        bottom = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Bottom), [{ loc: arcane.alliance, army: ARMY.Federation }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Bottom), [{ loc: elf.federation, army: ARMY.Alliance }])
        }
        middle = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Middle), [{ loc: start.alliance, army: ARMY.Federation }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Middle), [{ loc: start.federation, army: ARMY.Alliance }])
        }
        top = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Top), [{ loc: elf.alliance, army: ARMY.Federation }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Top), [{ loc: arcane.federation, army: ARMY.Alliance }])
        }

        // Spawn Rects
        sArcane = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Arcane)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Arcane))
        }
        sArcaneHero = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Hero_Left)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Hero_Right))
        }
        sCamp = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Camp_Bottom)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Camp_Top))
        }
        sHighCity = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Blacksmith_Left)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Blacksmith_Right))
        }
        sCityElf = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_City_Elves_Left)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_City_Elves_Right))
        }
        sCityFront = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Front_Town_Left), [{ loc: middle.federation, army: ARMY.Alliance }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Front_City_Right), [{ loc: middle.alliance, army: ARMY.Federation }])
        }
        sElementalTop = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Left_Top)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Right_Top))
        }
        sElementalBottom = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Left_Bottom)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Right_Bottom))
        }
        sElf = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_High_Elves)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_High_Elves))
        }
        sElfShipyard = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Shipyard)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Shipyard))
        }
        sHero = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Hero)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Hero))
        }
        sHumanShipyard = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Human_Shipyard_Left)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Human_Shipyard_Right))
        }
        sKolbold = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Furbolg_Left)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Furbolg_Right))
        }
        sMurloc = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Murloc_Spawn_Left)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Murloc_Spawn_Right))
        }
        sNaga = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Naga_Left)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Naga_Right))
        }
        sOrc = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Orc)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Orc))
        }
        sTree = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Tree)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Tree))
        }
        sNightElf = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Night_Elf_Left)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Night_Elf_Right))
        }
        sDwarf = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Workshop)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Workshop))
        }
        sUndead = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Undead_Left)),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Undead_Right))
        }

        // Creep Rects
        cForest = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left), [{ loc: top.federation, army: ARMY.Alliance }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right), [{ loc: bottom.alliance, army: ARMY.Federation }])
        }
        cForestMid = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left_Mid), [{ loc: cForest.alliance, army: ARMY.Alliance }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right_Mid), [{ loc: cForest.federation, army: ARMY.Federation }])
        }
        cTides = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Murloc_Left), [{ loc: top.federation, army: ARMY.Alliance }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Murloc_Right), [{ loc: bottom.alliance, army: ARMY.Federation }])
        }
        cDeath = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Zombie_End_Left), [{ loc: middle.federation, army: ARMY.Alliance }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Zombie_End_Right), [{ loc: middle.alliance, army: ARMY.Federation }])
        }
        cStorm = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Elemental_Start), [{ loc: bottom.federation, army: ARMY.Alliance }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Elemental_Start), [{ loc: top.alliance, army: ARMY.Federation }])
        }
        cRock = {
            alliance: new Loc(Rectangle.fromHandle(gg_rct_Rock_Left), [{ loc: bottom.federation, army: ARMY.Alliance }]),
            federation: new Loc(Rectangle.fromHandle(gg_rct_Rock_Right), [{ loc: top.alliance, army: ARMY.Federation }])
        }
    }

}