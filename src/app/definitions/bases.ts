import { Base } from "classes/base"
import { Unit } from "lib/w3ts/index"
import { ARMY } from "./armies"
import { LOC } from "./locs"

interface baseInterface {
    alliance: Base,
    federation: Base
}

export namespace BASE {

    export const arcane: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_h003_0015), ARMY.alliance, LOC.arcane.alliance, LOC.bottom.federation, 4, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_h003_0007), ARMY.federation, LOC.arcane.federation, LOC.top.alliance, 4, true, true, true)
    }
    export const arcaneCreep: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_h003_0015), ARMY.alliance, LOC.sArcane.alliance, LOC.cStorm.alliance, 1, false, false, false),
        federation: new Base(Unit.fromHandle(gg_unit_h003_0007), ARMY.federation, LOC.sArcane.federation, LOC.cStorm.federation, 1, false, false, false)
    }
    export const arcaneHero: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_h014_0017), ARMY.alliance, LOC.sArcaneHero.alliance, LOC.bottom.federation, 2, true, true, false),
        federation: new Base(Unit.fromHandle(gg_unit_h014_0158), ARMY.federation, LOC.sArcaneHero.federation, LOC.top.alliance, 2, true, true, false)
    }
    export const arcaneTop: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_hars_0355), ARMY.alliance, LOC.sElementalTop.alliance, LOC.bottom.federation, 2, true, true, false),
        federation: new Base(Unit.fromHandle(gg_unit_hars_0293), ARMY.federation, LOC.sElementalTop.federation, LOC.top.alliance, 2, true, true, false)
    }
    export const arcaneBottom: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_hars_0292), ARMY.alliance, LOC.sElementalBottom.alliance, LOC.bottom.federation, 2, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_hars_0303), ARMY.federation, LOC.sElementalBottom.federation, LOC.top.alliance, 2, true, true, true)
    }
    export const castle: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_h00E_0033), ARMY.alliance, LOC.sHero.alliance, LOC.everything.federation, 6, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_h00E_0081), ARMY.federation, LOC.sHero.federation, LOC.everything.alliance, 6, true, true, true)
    }
    export const highCity: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_n00K_0802), ARMY.alliance, LOC.sHighCity.alliance, LOC.cDeathMid.alliance, 2, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_n00K_0477), ARMY.federation, LOC.sHighCity.federation, LOC.cDeathMid.federation, 2, true, true, true)
    }
    export const cityElves: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_hvlt_0207), ARMY.alliance, LOC.sCityElf.alliance, LOC.everything.federation, 2, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_hvlt_0406), ARMY.federation, LOC.sCityElf.federation, LOC.everything.alliance, 2, true, true, true)
    }
    export const cityFront: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_n00B_0364), ARMY.alliance, LOC.sCityFront.alliance, LOC.middle.federation, 3, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_n00B_0399), ARMY.federation, LOC.sCityFront.federation, LOC.middle.alliance, 3, true, true, true)
    }
    export const citySide: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_n00B_0102), ARMY.alliance, LOC.sCitySide.alliance, LOC.bottom.federation, 2, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_n00B_0038), ARMY.federation, LOC.sCitySide.federation, LOC.top.alliance, 2, true, true, true)
    }
    export const humanShipyard: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_hshy_0011), ARMY.alliance, LOC.sHumanShipyard.alliance, LOC.sHumanShipyard.federation, 1, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_hshy_0212), ARMY.federation, LOC.sHumanShipyard.federation, LOC.sHumanShipyard.alliance, 1, true, true, true)
    }
    export const highElves: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_nheb_0109), ARMY.alliance, LOC.sElf.alliance, LOC.top.federation, 4, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_nheb_0036), ARMY.federation, LOC.sElf.federation, LOC.bottom.alliance, 4, true, true, true)
    }
    export const highElvesCreep: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_nheb_0109), ARMY.alliance, LOC.sElf.alliance, LOC.cForestMid.alliance, 1, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_nheb_0036), ARMY.federation, LOC.sElf.federation, LOC.cForestMid.federation, 1, true, true, true)
    }
    export const nightElves: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_e003_0058), ARMY.alliance, LOC.sNightElf.alliance, LOC.top.federation, 1, true, true, false),
        federation: new Base(Unit.fromHandle(gg_unit_e003_0014), ARMY.federation, LOC.sNightElf.federation, LOC.bottom.alliance, 1, true, true, false)
    }
    export const nightElfShipyard: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_eshy_0120), ARMY.alliance, LOC.sElfShipyard.alliance, LOC.sHumanShipyard.federation, 1, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_eshy_0047), ARMY.federation, LOC.sElfShipyard.federation, LOC.sHumanShipyard.alliance, 1, true, true, true)
    }
    export const merc: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_n001_0048), ARMY.alliance, LOC.sCamp.alliance, LOC.bottom.federation, 2, true, true, false),
        federation: new Base(Unit.fromHandle(gg_unit_n001_0049), ARMY.federation, LOC.sCamp.federation, LOC.top.alliance, 2, true, true, false)
    }
    export const dwarf: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_h006_0074), ARMY.alliance, LOC.sDwarf.alliance, LOC.bottom.federation, 3, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_h006_0055), ARMY.federation, LOC.sDwarf.federation, LOC.top.alliance, 3, true, true, true)
    }
    export const naga: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_nntt_0135), ARMY.alliance, LOC.sNaga.alliance, LOC.top.federation, 3, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_nntt_0132), ARMY.federation, LOC.sNaga.federation, LOC.bottom.alliance, 3, true, true, true)
    }
    export const nagaCreep: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_nntt_0135), ARMY.alliance, LOC.sNaga.alliance, LOC.cTides.alliance, 1, true, true, false),
        federation: new Base(Unit.fromHandle(gg_unit_nntt_0132), ARMY.federation, LOC.sNaga.federation, LOC.cTides.federation, 1, true, true, false)
    }
    export const murloc: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_nmh1_0735), ARMY.alliance, LOC.sMurloc.alliance, LOC.top.federation, 2, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_nmh1_0783), ARMY.federation, LOC.sMurloc.federation, LOC.bottom.alliance, 2, true, true, true)
    }
    export const orc: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_o001_0075), ARMY.alliance, LOC.sOrc.alliance, LOC.top.federation, 1, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_o001_0078), ARMY.federation, LOC.sOrc.federation, LOC.bottom.alliance, 1, true, true, true)
    }
    export const draenei: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_ndh2_0359), ARMY.alliance, LOC.sKolbold.alliance, LOC.top.federation, 2, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_ndh2_0876), ARMY.federation, LOC.sKolbold.federation, LOC.bottom.alliance, 2, true, true, true)
    }
    export const undead: baseInterface = {
        alliance: new Base(Unit.fromHandle(gg_unit_u001_0097), ARMY.alliance, LOC.sUndead.alliance, LOC.middle.federation, 1, true, true, true),
        federation: new Base(Unit.fromHandle(gg_unit_u001_0098), ARMY.federation, LOC.sUndead.federation, LOC.middle.alliance, 1, true, true, true)
    }
}