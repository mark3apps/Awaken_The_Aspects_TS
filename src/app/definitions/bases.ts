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

    export function define() {
        arcane = {
            alliance: new Base(Unit.fromHandle(gg_unit_h003_0015), ARMY.alliance, LOC.arcane.alliance, LOC.bottom.federation, 4, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_h003_0007), ARMY.federation, LOC.arcane.federation, LOC.top.alliance, 4, true, true, true)
        }
        arcaneCreep = {
            alliance: new Base(Unit.fromHandle(gg_unit_h003_0015), ARMY.alliance, LOC.sArcane.alliance, LOC.cStorm.alliance, 1, false, false, false),
            federation: new Base(Unit.fromHandle(gg_unit_h003_0007), ARMY.federation, LOC.sArcane.federation, LOC.cStorm.federation, 1, false, false, false)
        }
        arcaneHero = {
            alliance: new Base(Unit.fromHandle(gg_unit_h014_0017), ARMY.alliance, LOC.sArcaneHero.alliance, LOC.bottom.federation, 2, true, true, false),
            federation: new Base(Unit.fromHandle(gg_unit_h014_0158), ARMY.federation, LOC.sArcaneHero.federation, LOC.top.alliance, 2, true, true, false)
        }
        arcaneTop = {
            alliance: new Base(Unit.fromHandle(gg_unit_hars_0355), ARMY.alliance, LOC.sElementalTop.alliance, LOC.bottom.federation, 2, true, true, false),
            federation: new Base(Unit.fromHandle(gg_unit_hars_0293), ARMY.federation, LOC.sElementalTop.federation, LOC.top.alliance, 2, true, true, false)
        }
        arcaneBottom = {
            alliance: new Base(Unit.fromHandle(gg_unit_hars_0292), ARMY.alliance, LOC.sElementalBottom.alliance, LOC.bottom.federation, 2, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_hars_0303), ARMY.federation, LOC.sElementalBottom.federation, LOC.top.alliance, 2, true, true, true)
        }
        castle = {
            alliance: new Base(Unit.fromHandle(gg_unit_h00E_0033), ARMY.alliance, LOC.sHero.alliance, LOC.everything.federation, 6, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_h00E_0081), ARMY.federation, LOC.sHero.federation, LOC.everything.alliance, 6, true, true, true)
        }
        highCity = {
            alliance: new Base(Unit.fromHandle(gg_unit_n00K_0802), ARMY.alliance, LOC.sHighCity.alliance, LOC.cDeathMid.alliance, 2, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_n00K_0477), ARMY.federation, LOC.sHighCity.federation, LOC.cDeathMid.federation, 2, true, true, true)
        }
        cityElves = {
            alliance: new Base(Unit.fromHandle(gg_unit_hvlt_0207), ARMY.alliance, LOC.sCityElf.alliance, LOC.everything.federation, 2, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_hvlt_0406), ARMY.federation, LOC.sCityElf.federation, LOC.everything.alliance, 2, true, true, true)
        }
        cityFront = {
            alliance: new Base(Unit.fromHandle(gg_unit_n00B_0364), ARMY.alliance, LOC.sCityFront.alliance, LOC.middle.federation, 3, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_n00B_0399), ARMY.federation, LOC.sCityFront.federation, LOC.middle.alliance, 3, true, true, true)
        }
        citySide = {
            alliance: new Base(Unit.fromHandle(gg_unit_n00B_0102), ARMY.alliance, LOC.sCitySide.alliance, LOC.bottom.federation, 2, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_n00B_0038), ARMY.federation, LOC.sCitySide.federation, LOC.top.alliance, 2, true, true, true)
        }
        humanShipyard = {
            alliance: new Base(Unit.fromHandle(gg_unit_hshy_0011), ARMY.alliance, LOC.sHumanShipyard.alliance, LOC.sHumanShipyard.federation, 1, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_hshy_0212), ARMY.federation, LOC.sHumanShipyard.federation, LOC.sHumanShipyard.alliance, 1, true, true, true)
        }
        highElves = {
            alliance: new Base(Unit.fromHandle(gg_unit_nheb_0109), ARMY.alliance, LOC.sElf.alliance, LOC.top.federation, 4, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_nheb_0036), ARMY.federation, LOC.sElf.federation, LOC.bottom.alliance, 4, true, true, true)
        }
        highElvesCreep = {
            alliance: new Base(Unit.fromHandle(gg_unit_nheb_0109), ARMY.alliance, LOC.sElf.alliance, LOC.cForestMid.alliance, 1, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_nheb_0036), ARMY.federation, LOC.sElf.federation, LOC.cForestMid.federation, 1, true, true, true)
        }
        nightElves = {
            alliance: new Base(Unit.fromHandle(gg_unit_e003_0058), ARMY.alliance, LOC.sNightElf.alliance, LOC.top.federation, 1, true, true, false),
            federation: new Base(Unit.fromHandle(gg_unit_e003_0014), ARMY.federation, LOC.sNightElf.federation, LOC.bottom.alliance, 1, true, true, false)
        }
        nightElfShipyard = {
            alliance: new Base(Unit.fromHandle(gg_unit_eshy_0120), ARMY.alliance, LOC.sElfShipyard.alliance, LOC.sHumanShipyard.federation, 1, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_eshy_0047), ARMY.federation, LOC.sElfShipyard.federation, LOC.sHumanShipyard.alliance, 1, true, true, true)
        }
        merc = {
            alliance: new Base(Unit.fromHandle(gg_unit_n001_0048), ARMY.alliance, LOC.sCamp.alliance, LOC.bottom.federation, 2, true, true, false),
            federation: new Base(Unit.fromHandle(gg_unit_n001_0049), ARMY.federation, LOC.sCamp.federation, LOC.top.alliance, 2, true, true, false)
        }
        dwarf = {
            alliance: new Base(Unit.fromHandle(gg_unit_h006_0074), ARMY.alliance, LOC.sDwarf.alliance, LOC.bottom.federation, 3, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_h006_0055), ARMY.federation, LOC.sDwarf.federation, LOC.top.alliance, 3, true, true, true)
        }
        naga = {
            alliance: new Base(Unit.fromHandle(gg_unit_nntt_0135), ARMY.alliance, LOC.sNaga.alliance, LOC.top.federation, 3, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_nntt_0132), ARMY.federation, LOC.sNaga.federation, LOC.bottom.alliance, 3, true, true, true)
        }
        nagaCreep = {
            alliance: new Base(Unit.fromHandle(gg_unit_nntt_0135), ARMY.alliance, LOC.sNaga.alliance, LOC.cTides.alliance, 1, true, true, false),
            federation: new Base(Unit.fromHandle(gg_unit_nntt_0132), ARMY.federation, LOC.sNaga.federation, LOC.cTides.federation, 1, true, true, false)
        }
        murloc = {
            alliance: new Base(Unit.fromHandle(gg_unit_nmh1_0735), ARMY.alliance, LOC.sMurloc.alliance, LOC.top.federation, 2, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_nmh1_0783), ARMY.federation, LOC.sMurloc.federation, LOC.bottom.alliance, 2, true, true, true)
        }
        orc = {
            alliance: new Base(Unit.fromHandle(gg_unit_o001_0075), ARMY.alliance, LOC.sOrc.alliance, LOC.top.federation, 1, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_o001_0078), ARMY.federation, LOC.sOrc.federation, LOC.bottom.alliance, 1, true, true, true)
        }
        draenei = {
            alliance: new Base(Unit.fromHandle(gg_unit_ndh2_0359), ARMY.alliance, LOC.sKolbold.alliance, LOC.top.federation, 2, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_ndh2_0876), ARMY.federation, LOC.sKolbold.federation, LOC.bottom.alliance, 2, true, true, true)
        }
        undead = {
            alliance: new Base(Unit.fromHandle(gg_unit_u001_0097), ARMY.alliance, LOC.sUndead.alliance, LOC.middle.federation, 1, true, true, true),
            federation: new Base(Unit.fromHandle(gg_unit_u001_0098), ARMY.federation, LOC.sUndead.federation, LOC.middle.alliance, 1, true, true, true)
        }
    }

}