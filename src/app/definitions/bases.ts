import { Base } from "app/classes/base";
import { ALLIANCE, BASE_ALLIANCE, BASE_FEDERATION, FEDERATION, LOC } from "lib/globals";
import { Unit } from "w3ts/handles/unit";

export function defineBases() {

    BASE_ALLIANCE.arcane = new Base(Unit.fromHandle(gg_unit_h003_0015), ALLIANCE, LOC.arcaneAllied, LOC.bottomFederation, 4, true, true, true)
    BASE_FEDERATION.arcane = new Base(Unit.fromHandle(gg_unit_h003_0007), FEDERATION, LOC.arcaneFederation, LOC.topAllied, 4, true, true, true)
    BASE_ALLIANCE.arcaneCreep = new Base(Unit.fromHandle(gg_unit_h003_0015), ALLIANCE, LOC.sArcaneAllied, LOC.cStormAllied, 1, false, false, false)
    BASE_FEDERATION.arcaneCreep = new Base(Unit.fromHandle(gg_unit_h003_0007), FEDERATION, LOC.sArcaneFederation, LOC.cStormFederation, 1, false, false, false)
	BASE_ALLIANCE.arcaneHero = new Base(Unit.fromHandle(gg_unit_h014_0017), ALLIANCE, LOC.sArcaneHeroAllied, LOC.bottomFederation, 2, true, true, false)
	BASE_FEDERATION.arcaneHero = new Base(Unit.fromHandle(gg_unit_h014_0158), FEDERATION, LOC.sArcaneHeroFederation, LOC.topAllied, 2, true, true, false)
	BASE_ALLIANCE.arcaneTop = new Base(Unit.fromHandle(gg_unit_hars_0355), ALLIANCE, LOC.sElementalTopAllied, LOC.bottomFederation, 2, true, true, false)
	BASE_FEDERATION.arcaneTop = new Base(Unit.fromHandle(gg_unit_hars_0293), FEDERATION, LOC.sElementalTopFederation, LOC.topAllied, 2, true, true, false)
	BASE_ALLIANCE.arcaneBottom = new Base(Unit.fromHandle(gg_unit_hars_0292), ALLIANCE, LOC.sElementalBottomAllied, LOC.bottomFederation, 2, true, true, true)
	BASE_FEDERATION.arcaneBottom = new Base(Unit.fromHandle(gg_unit_hars_0303), FEDERATION, LOC.sElementalBottomFederation, LOC.topAllied, 2, true, true, true)

	BASE_ALLIANCE.castle = new Base(Unit.fromHandle(gg_unit_h00E_0033), ALLIANCE, LOC.sHeroAllied, LOC.everythingFederation, 6, true, true, true)
	BASE_FEDERATION.castle = new Base(Unit.fromHandle(gg_unit_h00E_0081), FEDERATION, LOC.sHeroFederation, LOC.everythingAllied, 6, true, true, true)
	BASE_ALLIANCE.highCity = new Base(Unit.fromHandle(gg_unit_n00K_0802), ALLIANCE, LOC.sHighCityAllied, LOC.cDeathMidAllied, 2, true, true, true)
	BASE_FEDERATION.highCity = new Base(Unit.fromHandle(gg_unit_n00K_0477), FEDERATION, LOC.sHighCityFederation, LOC.cDeathMidFederation, 2, true, true, true)
	BASE_ALLIANCE.cityElves = new Base(Unit.fromHandle(gg_unit_hvlt_0207), ALLIANCE, LOC.sCityElfAllied, LOC.everythingFederation, 2, true, true, true)
	BASE_FEDERATION.cityElves = new Base(Unit.fromHandle(gg_unit_hvlt_0406), FEDERATION, LOC.sCityElfFederation, LOC.everythingAllied, 2, true, true, true)
	BASE_ALLIANCE.cityFront = new Base(Unit.fromHandle(gg_unit_n00B_0364), ALLIANCE, LOC.sCityFrontAllied, LOC.middleFederation, 3, true, true, true)
	BASE_FEDERATION.cityFront = new Base(Unit.fromHandle(gg_unit_n00B_0399), FEDERATION, LOC.sCityFrontFederation, LOC.middleAllied, 3, true, true, true)
	BASE_ALLIANCE.citySide = new Base(Unit.fromHandle(gg_unit_n00B_0102), ALLIANCE, LOC.sCitySideAllied, LOC.bottomFederation, 2, true, true, true)
	BASE_FEDERATION.citySide = new Base(Unit.fromHandle(gg_unit_n00B_0038), FEDERATION, LOC.sCitySideFederation, LOC.topAllied, 2, true, true, true)
    BASE_ALLIANCE.humanShipyard = new Base(Unit.fromHandle(gg_unit_hshy_0011), ALLIANCE, LOC.sHumanShipyardAllied, LOC.sHumanShipyardFederation, 1, true, true, true)
	BASE_FEDERATION.humanShipyard = new Base(Unit.fromHandle(gg_unit_hshy_0212), FEDERATION, LOC.sHumanShipyardFederation, LOC.sHumanShipyardAllied, 1, true, true, true)


	BASE_ALLIANCE.highElves = new Base(Unit.fromHandle(gg_unit_nheb_0109), ALLIANCE, LOC.sElfAllied, LOC.topFederation, 4, true, true, true)
	BASE_FEDERATION.highElves = new Base(Unit.fromHandle(gg_unit_nheb_0036), FEDERATION, LOC.sElfFederation, LOC.bottomAllied, 4, true, true, true)
	BASE_ALLIANCE.highElvesCreep = new Base(Unit.fromHandle(gg_unit_nheb_0109), ALLIANCE, LOC.sElfAllied, LOC.cForestMidAllied, 1, true, true, true)
	BASE_FEDERATION.highElvesCreep = new Base(Unit.fromHandle(gg_unit_nheb_0036), FEDERATION, LOC.sElfFederation, LOC.cForestMidFederation, 1, true, true, true)
    BASE_ALLIANCE.nightElves = new Base(Unit.fromHandle(gg_unit_e003_0058), ALLIANCE, LOC.sNightElfAllied, LOC.topFederation, 1, true, true, false)
	BASE_FEDERATION.nightElves = new Base(Unit.fromHandle(gg_unit_e003_0014), FEDERATION, LOC.sNightElfFederation, LOC.bottomAllied, 1, true, true, false)
    BASE_ALLIANCE.nightElfShipyard = new Base(Unit.fromHandle(gg_unit_eshy_0120), ALLIANCE, LOC.sElfShipyardAllied, LOC.sHumanShipyardFederation, 1, true, true, true)
	BASE_FEDERATION.nightElfShipyard = new Base(Unit.fromHandle(gg_unit_eshy_0047), FEDERATION, LOC.sElfShipyardFederation, LOC.sHumanShipyardAllied, 1, true, true, true)

	BASE_ALLIANCE.merc = new Base(Unit.fromHandle(gg_unit_n001_0048), ALLIANCE, LOC.sCampAllied, LOC.bottomFederation, 2, true, true, false)
	BASE_FEDERATION.merc = new Base(Unit.fromHandle(gg_unit_n001_0049), FEDERATION, LOC.sCampFederation, LOC.topAllied, 2, true, true, false)

	BASE_ALLIANCE.dwarf = new Base(Unit.fromHandle(gg_unit_h006_0074), ALLIANCE, LOC.sDwarfAllied, LOC.bottomFederation, 3, true, true, true)
	BASE_FEDERATION.dwarf = new Base(Unit.fromHandle(gg_unit_h006_0055), FEDERATION, LOC.sDwarfFederation, LOC.topAllied, 3, true, true, true)

	BASE_ALLIANCE.naga = new Base(Unit.fromHandle(gg_unit_nntt_0135), ALLIANCE, LOC.sNagaAllied, LOC.topFederation, 3, true, true, true)
	BASE_FEDERATION.naga = new Base(Unit.fromHandle(gg_unit_nntt_0132), FEDERATION, LOC.sNagaFederation, LOC.bottomAllied, 3, true, true, true)
	BASE_ALLIANCE.nagaCreep = new Base(Unit.fromHandle(gg_unit_nntt_0135), ALLIANCE, LOC.sNagaAllied, LOC.cTidesAllied, 1, true, true, false)
	BASE_FEDERATION.nagaCreep = new Base(Unit.fromHandle(gg_unit_nntt_0132), FEDERATION, LOC.sNagaFederation, LOC.cTidesFederation, 1, true, true, false)
	BASE_ALLIANCE.murloc = new Base(Unit.fromHandle(gg_unit_nmh1_0735), ALLIANCE, LOC.sMurlocAllied, LOC.topFederation, 2, true, true, true)
	BASE_FEDERATION.murloc = new Base(Unit.fromHandle(gg_unit_nmh1_0783), FEDERATION, LOC.sMurlocFederation, LOC.bottomAllied, 2, true, true, true)

	BASE_ALLIANCE.orc = new Base(Unit.fromHandle(gg_unit_o001_0075), ALLIANCE, LOC.sOrcAllied, LOC.topFederation, 1, true, true, true)
	BASE_FEDERATION.orc = new Base(Unit.fromHandle(gg_unit_o001_0078), FEDERATION, LOC.sOrcFederation, LOC.bottomAllied, 1, true, true, true)
	BASE_ALLIANCE.draenei = new Base(Unit.fromHandle(gg_unit_ndh2_0359), ALLIANCE, LOC.sKolboldAllied, LOC.topFederation, 2, true, true, true)
	BASE_FEDERATION.draenei = new Base(Unit.fromHandle(gg_unit_ndh2_0876), FEDERATION, LOC.sKolboldFederation, LOC.bottomAllied, 2, true, true, true)

    BASE_ALLIANCE.undead = new Base(Unit.fromHandle(gg_unit_u001_0097), ALLIANCE, LOC.sUndeadAllied, LOC.middleFederation, 1, true, true, true)
	BASE_FEDERATION.undead = new Base(Unit.fromHandle(gg_unit_u001_0098), FEDERATION, LOC.sUndeadFederation, LOC.middleAllied, 1, true, true, true)

}