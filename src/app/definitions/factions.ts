import { Base } from "classes/base"
import { Faction } from "lib/resources/baseInterface"
import { Unit } from "lib/w3ts/index"
import { ARMY } from "./armies"
import { LOC } from "./locs"

export namespace FACTION {
    export let arcane: Faction
    export let arcaneCreep: Faction
    export let arcaneHero: Faction
    export let arcaneTop: Faction
    export let arcaneBottom: Faction
    export let castle: Faction
    export let highCity: Faction
    export let cityElves: Faction
    export let cityFront: Faction
    export let citySide: Faction
    export let humanShipyard: Faction
    export let highElves: Faction
    export let highElvesCreep: Faction
    export let nightElves: Faction
    export let nightElfShipyard: Faction
    export let merc: Faction
    export let dwarf: Faction
    export let naga: Faction
    export let nagaCreep: Faction
    export let murloc: Faction
    export let orc: Faction
    export let draenei: Faction
    export let undead: Faction

    export function define(): void {
        arcane = {
            alliance: new Base(Unit.fromHandle(gg_unit_h003_0015), ARMY.Alliance, LOC.arcane.alliance, LOC.bottom.federation, 4, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_h003_0007), ARMY.Federation, LOC.arcane.federation, LOC.top.alliance, 4, true, true, true)
        }
        arcaneCreep = {
            alliance: new Base(Unit.fromHandle(gg_unit_h003_0015), ARMY.Alliance, LOC.sArcane.alliance, LOC.cStorm.alliance, 1, false, false, false),
            federation: new Base(Unit.fromHandle(gg_unit_h003_0007), ARMY.Federation, LOC.sArcane.federation, LOC.cStorm.federation, 1, false, false, false)
        }
        arcaneHero = {
            alliance: new Base(Unit.fromHandle(gg_unit_h014_0017), ARMY.Alliance, LOC.sArcaneHero.alliance, LOC.bottom.federation, 2, true, true, false),
            federation: new Base(Unit.fromHandle(gg_unit_h014_0158), ARMY.Federation, LOC.sArcaneHero.federation, LOC.top.alliance, 2, true, true, false)
        }
        arcaneTop = {
            alliance: new Base(Unit.fromHandle(gg_unit_hars_0355), ARMY.Alliance, LOC.sElementalTop.alliance, LOC.bottom.federation, 2, true, true, false),
            federation: new Base(Unit.fromHandle(gg_unit_hars_0293), ARMY.Federation, LOC.sElementalTop.federation, LOC.top.alliance, 2, true, true, false)
        }
        arcaneBottom = {
            alliance: new Base(Unit.fromHandle(gg_unit_hars_0292), ARMY.Alliance, LOC.sElementalBottom.alliance, LOC.bottom.federation, 2, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_hars_0303), ARMY.Federation, LOC.sElementalBottom.federation, LOC.top.alliance, 2, true, true, true)
        }
        castle = {
            alliance: new Base(Unit.fromHandle(gg_unit_h00E_0033), ARMY.Alliance, LOC.sHero.alliance, LOC.everything.federation, 6, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_h00E_0081), ARMY.Federation, LOC.sHero.federation, LOC.everything.alliance, 6, true, true, true)
        }
        highCity = {
            alliance: new Base(Unit.fromHandle(gg_unit_n00K_0802), ARMY.Alliance, LOC.sHighCity.alliance, LOC.cDeathMid.alliance, 2, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_n00K_0477), ARMY.Federation, LOC.sHighCity.federation, LOC.cDeathMid.federation, 2, true, true, true)
        }
        cityElves = {
            alliance: new Base(Unit.fromHandle(gg_unit_hvlt_0207), ARMY.Alliance, LOC.sCityElf.alliance, LOC.everything.federation, 2, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_hvlt_0406), ARMY.Federation, LOC.sCityElf.federation, LOC.everything.alliance, 2, true, true, true)
        }
        cityFront = {
            alliance: new Base(Unit.fromHandle(gg_unit_n00B_0364), ARMY.Alliance, LOC.sCityFront.alliance, LOC.middle.federation, 3, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_n00B_0399), ARMY.Federation, LOC.sCityFront.federation, LOC.middle.alliance, 3, true, true, true)
        }
        citySide = {
            alliance: new Base(Unit.fromHandle(gg_unit_n00B_0102), ARMY.Alliance, LOC.sCitySide.alliance, LOC.bottom.federation, 2, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_n00B_0038), ARMY.Federation, LOC.sCitySide.federation, LOC.top.alliance, 2, true, true, true)
        }
        humanShipyard = {
            alliance: new Base(Unit.fromHandle(gg_unit_hshy_0011), ARMY.Alliance, LOC.sHumanShipyard.alliance, LOC.sHumanShipyard.federation, 1, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_hshy_0212), ARMY.Federation, LOC.sHumanShipyard.federation, LOC.sHumanShipyard.alliance, 1, true, true, true)
        }
        highElves = {
            alliance: new Base(Unit.fromHandle(gg_unit_nheb_0109), ARMY.Alliance, LOC.sElf.alliance, LOC.top.federation, 4, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_nheb_0036), ARMY.Federation, LOC.sElf.federation, LOC.bottom.alliance, 4, true, true, true)
        }
        highElvesCreep = {
            alliance: new Base(Unit.fromHandle(gg_unit_nheb_0109), ARMY.Alliance, LOC.sElf.alliance, LOC.cForestMid.alliance, 1, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_nheb_0036), ARMY.Federation, LOC.sElf.federation, LOC.cForestMid.federation, 1, true, true, true)
        }
        nightElves = {
            alliance: new Base(Unit.fromHandle(gg_unit_e003_0058), ARMY.Alliance, LOC.sNightElf.alliance, LOC.top.federation, 1, true, true, false),
            federation: new Base(Unit.fromHandle(gg_unit_e003_0014), ARMY.Federation, LOC.sNightElf.federation, LOC.bottom.alliance, 1, true, true, false)
        }
        nightElfShipyard = {
            alliance: new Base(Unit.fromHandle(gg_unit_eshy_0120), ARMY.Alliance, LOC.sElfShipyard.alliance, LOC.sHumanShipyard.federation, 1, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_eshy_0047), ARMY.Federation, LOC.sElfShipyard.federation, LOC.sHumanShipyard.alliance, 1, true, true, true)
        }
        merc = {
            alliance: new Base(Unit.fromHandle(gg_unit_n001_0048), ARMY.Alliance, LOC.sCamp.alliance, LOC.bottom.federation, 2, true, true, false),
            federation: new Base(Unit.fromHandle(gg_unit_n001_0049), ARMY.Federation, LOC.sCamp.federation, LOC.top.alliance, 2, true, true, false)
        }
        dwarf = {
            alliance: new Base(Unit.fromHandle(gg_unit_h006_0074), ARMY.Alliance, LOC.sDwarf.alliance, LOC.bottom.federation, 3, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_h006_0055), ARMY.Federation, LOC.sDwarf.federation, LOC.top.alliance, 3, true, true, true)
        }
        naga = {
            alliance: new Base(Unit.fromHandle(gg_unit_nntt_0135), ARMY.Alliance, LOC.sNaga.alliance, LOC.top.federation, 3, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_nntt_0132), ARMY.Federation, LOC.sNaga.federation, LOC.bottom.alliance, 3, true, true, true)
        }
        nagaCreep = {
            alliance: new Base(Unit.fromHandle(gg_unit_nntt_0135), ARMY.Alliance, LOC.sNaga.alliance, LOC.cTides.alliance, 1, true, true, false),
            federation: new Base(Unit.fromHandle(gg_unit_nntt_0132), ARMY.Federation, LOC.sNaga.federation, LOC.cTides.federation, 1, true, true, false)
        }
        murloc = {
            alliance: new Base(Unit.fromHandle(gg_unit_nmh1_0735), ARMY.Alliance, LOC.sMurloc.alliance, LOC.top.federation, 2, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_nmh1_0783), ARMY.Federation, LOC.sMurloc.federation, LOC.bottom.alliance, 2, true, true, true)
        }
        orc = {
            alliance: new Base(Unit.fromHandle(gg_unit_o001_0075), ARMY.Alliance, LOC.sOrc.alliance, LOC.top.federation, 1, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_o001_0078), ARMY.Federation, LOC.sOrc.federation, LOC.bottom.alliance, 1, true, true, true)
        }
        draenei = {
            alliance: new Base(Unit.fromHandle(gg_unit_ndh2_0359), ARMY.Alliance, LOC.sKolbold.alliance, LOC.top.federation, 2, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_ndh2_0876), ARMY.Federation, LOC.sKolbold.federation, LOC.bottom.alliance, 2, true, true, true)
        }
        undead = {
            alliance: new Base(Unit.fromHandle(gg_unit_u001_0097), ARMY.Alliance, LOC.sUndead.alliance, LOC.middle.federation, 1, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_u001_0098), ARMY.Federation, LOC.sUndead.federation, LOC.middle.alliance, 1, true, true, true)
        }
    }

}