import { Base } from "app/classes/base";
import { Allied, BSA, BSF, Federation, L } from "globals";
import { Unit } from "w3ts/index";

export function defineBases() {

    BSA.arcane = new Base(Unit.fromHandle(gg_unit_h003_0015), Allied, L.arcaneAllied, L.bottomFederation, 4, true, true, true)
    BSF.arcane = new Base(Unit.fromHandle(gg_unit_h003_0007), Federation, L.arcaneFederation, L.topAllied, 4, true, true, true)
    BSA.arcaneCreep = new Base(Unit.fromHandle(gg_unit_h003_0015), Allied, L.sArcaneAllied, L.cStormAllied, 1, false, false, false)
    BSF.arcaneCreep = new Base(Unit.fromHandle(gg_unit_h003_0007), Federation, L.sArcaneFederation, L.cStormFederation, 1, false, false, false)
	BSA.arcaneHero = new Base(Unit.fromHandle(gg_unit_h014_0017), Allied, L.sArcaneHeroAllied, L.bottomFederation, 2, true, true, false)
	BSF.arcaneHero = new Base(Unit.fromHandle(gg_unit_h014_0158), Federation, L.sArcaneHeroFederation, L.topAllied, 2, true, true, false)
	BSA.arcaneTop = new Base(Unit.fromHandle(gg_unit_hars_0355), Allied, L.sElementalTopAllied, L.bottomFederation, 2, true, true, false)
	BSF.arcaneTop = new Base(Unit.fromHandle(gg_unit_hars_0293), Federation, L.sElementalTopFederation, L.topAllied, 2, true, true, false)
	BSA.arcaneBottom = new Base(Unit.fromHandle(gg_unit_hars_0292), Allied, L.sElementalBottomAllied, L.bottomFederation, 2, true, true, true)
	BSF.arcaneBottom = new Base(Unit.fromHandle(gg_unit_hars_0303), Federation, L.sElementalBottomFederation, L.topAllied, 2, true, true, true)

	BSA.castle = new Base(Unit.fromHandle(gg_unit_h00E_0033), Allied, L.sHeroAllied, L.everythingFederation, 6, true, true, true)
	BSF.castle = new Base(Unit.fromHandle(gg_unit_h00E_0081), Federation, L.sHeroFederation, L.everythingAllied, 6, true, true, true)
	BSA.highCity = new Base(Unit.fromHandle(gg_unit_n00K_0802), Allied, L.sHighCityAllied, L.cDeathMidAllied, 2, true, true, true)
	BSF.highCity = new Base(Unit.fromHandle(gg_unit_n00K_0477), Federation, L.sHighCityFederation, L.cDeathMidFederation, 2, true, true, true)
	BSA.cityElves = new Base(Unit.fromHandle(gg_unit_hvlt_0207), Allied, L.sCityElfAllied, L.everythingFederation, 2, true, true, true)
	BSF.cityElves = new Base(Unit.fromHandle(gg_unit_hvlt_0406), Federation, L.sCityElfFederation, L.everythingAllied, 2, true, true, true)
	BSA.cityFront = new Base(Unit.fromHandle(gg_unit_n00B_0364), Allied, L.sCityFrontAllied, L.middleFederation, 3, true, true, true)
	BSF.cityFront = new Base(Unit.fromHandle(gg_unit_n00B_0399), Federation, L.sCityFrontFederation, L.middleAllied, 3, true, true, true)
	BSA.citySide = new Base(Unit.fromHandle(gg_unit_n00B_0102), Allied, L.sCitySideAllied, L.bottomFederation, 2, true, true, true)
	BSF.citySide = new Base(Unit.fromHandle(gg_unit_n00B_0038), Federation, L.sCitySideFederation, L.topAllied, 2, true, true, true)
    BSA.humanShipyard = new Base(Unit.fromHandle(gg_unit_hshy_0011), Allied, L.sHumanShipyardAllied, L.sHumanShipyardFederation, 1, true, true, true)
	BSF.humanShipyard = new Base(Unit.fromHandle(gg_unit_hshy_0212), Federation, L.sHumanShipyardFederation, L.sHumanShipyardAllied, 1, true, true, true)


	BSA.highElves = new Base(Unit.fromHandle(gg_unit_nheb_0109), Allied, L.sElfAllied, L.topFederation, 4, true, true, true)
	BSF.highElves = new Base(Unit.fromHandle(gg_unit_nheb_0036), Federation, L.sElfFederation, L.bottomAllied, 4, true, true, true)
	BSA.highElvesCreep = new Base(Unit.fromHandle(gg_unit_nheb_0109), Allied, L.sElfAllied, L.cForestMidAllied, 1, true, true, true)
	BSF.highElvesCreep = new Base(Unit.fromHandle(gg_unit_nheb_0036), Federation, L.sElfFederation, L.cForestMidFederation, 1, true, true, true)
    BSA.nightElves = new Base(Unit.fromHandle(gg_unit_e003_0058), Allied, L.sNightElfAllied, L.topFederation, 1, true, true, false)
	BSF.nightElves = new Base(Unit.fromHandle(gg_unit_e003_0014), Federation, L.sNightElfFederation, L.bottomAllied, 1, true, true, false)
    BSA.nightElfShipyard = new Base(Unit.fromHandle(gg_unit_eshy_0120), Allied, L.sElfShipyardAllied, L.sHumanShipyardFederation, 1, true, true, true)
	BSF.nightElfShipyard = new Base(Unit.fromHandle(gg_unit_eshy_0047), Federation, L.sElfShipyardFederation, L.sHumanShipyardAllied, 1, true, true, true)

	BSA.merc = new Base(Unit.fromHandle(gg_unit_n001_0048), Allied, L.sCampAllied, L.bottomFederation, 2, true, true, false)
	BSF.merc = new Base(Unit.fromHandle(gg_unit_n001_0049), Federation, L.sCampFederation, L.topAllied, 2, true, true, false)

	BSA.dwarf = new Base(Unit.fromHandle(gg_unit_h006_0074), Allied, L.sDwarfAllied, L.bottomFederation, 3, true, true, true)
	BSF.dwarf = new Base(Unit.fromHandle(gg_unit_h006_0055), Federation, L.sDwarfFederation, L.topAllied, 3, true, true, true)

	BSA.naga = new Base(Unit.fromHandle(gg_unit_nntt_0135), Allied, L.sNagaAllied, L.topFederation, 3, true, true, true)
	BSF.naga = new Base(Unit.fromHandle(gg_unit_nntt_0132), Federation, L.sNagaFederation, L.bottomAllied, 3, true, true, true)
	BSA.nagaCreep = new Base(Unit.fromHandle(gg_unit_nntt_0135), Allied, L.sNagaAllied, L.cTidesAllied, 1, true, true, false)
	BSF.nagaCreep = new Base(Unit.fromHandle(gg_unit_nntt_0132), Federation, L.sNagaFederation, L.cTidesFederation, 1, true, true, false)
	BSA.murloc = new Base(Unit.fromHandle(gg_unit_nmh1_0735), Allied, L.sMurlocAllied, L.topFederation, 2, true, true, true)
	BSF.murloc = new Base(Unit.fromHandle(gg_unit_nmh1_0783), Federation, L.sMurlocFederation, L.bottomAllied, 2, true, true, true)

	BSA.orc = new Base(Unit.fromHandle(gg_unit_o001_0075), Allied, L.sOrcAllied, L.topFederation, 1, true, true, true)
	BSF.orc = new Base(Unit.fromHandle(gg_unit_o001_0078), Federation, L.sOrcFederation, L.bottomAllied, 1, true, true, true)
	BSA.draenei = new Base(Unit.fromHandle(gg_unit_ndh2_0359), Allied, L.sKolboldAllied, L.topFederation, 2, true, true, true)
	BSF.draenei = new Base(Unit.fromHandle(gg_unit_ndh2_0876), Federation, L.sKolboldFederation, L.bottomAllied, 2, true, true, true)

    BSA.undead = new Base(Unit.fromHandle(gg_unit_u001_0097), Allied, L.sUndeadAllied, L.middleFederation, 1, true, true, true)
	BSF.undead = new Base(Unit.fromHandle(gg_unit_u001_0098), Federation, L.sUndeadFederation, L.middleAllied, 1, true, true, true)

}