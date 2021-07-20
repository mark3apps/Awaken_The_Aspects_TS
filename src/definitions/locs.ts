import { Loc } from "app/classes/loc";
import { ALLIANCE, FEDERATION, LOC } from "utils/globals";
import { Rectangle } from "w3ts/index";

export function defineLocs() {

    LOC.arcaneAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Mage_Base), LOC.castleAllied, FEDERATION)
    LOC.castleAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Hero))
    LOC.startAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Start), LOC.castleAllied, FEDERATION)
	LOC.elfAllied = new Loc(Rectangle.fromHandle(gg_rct_Elf_Base_Left), LOC.castleAllied, FEDERATION)

    LOC.arcaneFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Mage_Base), LOC.castleFederation, ALLIANCE)
    LOC.castleFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Hero))
	LOC.startFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Start), LOC.castleFederation, ALLIANCE)
	LOC.elfFederation = new Loc(Rectangle.fromHandle(gg_rct_Elf_Base_Right), LOC.casteFederation, ALLIANCE)

    
	// Pathing Rects
	LOC.everythingAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Everything), LOC.castleAllied, FEDERATION)
    LOC.bottomAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Bottom), LOC.arcaneAllied, FEDERATION)
    LOC.middleAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Middle), LOC.startAllied, FEDERATION)
    LOC.topAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Top), LOC.elfAllied, FEDERATION)

	LOC.everythingFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Everything), LOC.castleFederation, ALLIANCE)
	LOC.bottomFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Bottom), LOC.elfFederation, ALLIANCE)
	LOC.middleFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Middle), LOC.startFederation, ALLIANCE)
	LOC.topFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Top), LOC.arcaneFederation, ALLIANCE)

	// Spawn Rects
	LOC.sArcaneAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Arcane))
	LOC.sArcaneFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Arcane))
	LOC.sArcaneHeroAllied = new Loc(Rectangle.fromHandle(gg_rct_Arcane_Hero_Left))
	LOC.sArcaneHeroFederation = new Loc(Rectangle.fromHandle(gg_rct_Arcane_Hero_Right))
	LOC.sCampAllied = new Loc(Rectangle.fromHandle(gg_rct_Camp_Bottom))
	LOC.sCampFederation = new Loc(Rectangle.fromHandle(gg_rct_Camp_Top))
	LOC.sHighCityAllied = new Loc(Rectangle.fromHandle(gg_rct_Blacksmith_Left))
	LOC.sHighCityFederation = new Loc(Rectangle.fromHandle(gg_rct_Blacksmith_Right))
	LOC.sCityElfAllied = new Loc(Rectangle.fromHandle(gg_rct_City_Elves_Left))
	LOC.sCityElfFederation = new Loc(Rectangle.fromHandle(gg_rct_City_Elves_Right))
	LOC.sCityFrontAllied = new Loc(Rectangle.fromHandle(gg_rct_Front_Town_Left))
	LOC.sCityFrontFederation = new Loc(Rectangle.fromHandle(gg_rct_Front_City_Right))
	LOC.sCitySideAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_City))
	LOC.sCitySideFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_City))
	LOC.sElementalTopAllied = new Loc(Rectangle.fromHandle(gg_rct_Arcane_Left_Top))
	LOC.sElementalTopFederation = new Loc(Rectangle.fromHandle(gg_rct_Arcane_Right_Top))
	LOC.sElementalBottomAllied = new Loc(Rectangle.fromHandle(gg_rct_Arcane_Left_Bottom))
	LOC.sElementalBottomFederation = new Loc(Rectangle.fromHandle(gg_rct_Arcane_Right_Bottom))
	LOC.sElfAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_High_Elves))
	LOC.sElfFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_High_Elves))
	LOC.sElfShipyardAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Shipyard))
	LOC.sElfShipyardFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Shipyard))
	LOC.sHeroAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Hero))
	LOC.sHeroFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Hero))
	LOC.sHumanShipyardAllied = new Loc(Rectangle.fromHandle(gg_rct_Human_Shipyard_Left))
	LOC.sHumanShipyardFederation = new Loc(Rectangle.fromHandle(gg_rct_Human_Shipyard_Right))
	LOC.sKolboldAllied = new Loc(Rectangle.fromHandle(gg_rct_Furbolg_Left))
	LOC.sKolboldFederation = new Loc(Rectangle.fromHandle(gg_rct_Furbolg_Right))
	LOC.sMurlocAllied = new Loc(Rectangle.fromHandle(gg_rct_Murloc_Spawn_Left))
	LOC.sMurlocFederation = new Loc(Rectangle.fromHandle(gg_rct_Murloc_Spawn_Right))
	LOC.sNagaAllied = new Loc(Rectangle.fromHandle(gg_rct_Naga_Left))
	LOC.sNagaFederation = new Loc(Rectangle.fromHandle(gg_rct_Naga_Right))
	LOC.sOrcAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Orc))
	LOC.sOrcFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Orc))
	LOC.sNightElfAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Tree))
	LOC.sNightElfFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Tree))
	LOC.sDwarfAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Workshop))
	LOC.sDwarfFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Workshop))
	LOC.sUndeadAllied = new Loc(Rectangle.fromHandle(gg_rct_Undead_Left))
	LOC.sUndeadFederation = new Loc(Rectangle.fromHandle(gg_rct_Undead_Right))

	// Creep Rects
	LOC.cForestMidAllied = new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left_Mid), LOC.cForestAllied, ALLIANCE)
	LOC.cForestAllied = new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left), LOC.topFederation, ALLIANCE)
	LOC.cForestMidFederation = new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right_Mid), LOC.cForestFederation, FEDERATION)
	LOC.cForestFederation = new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right), LOC.bottomAllied, FEDERATION)
	LOC.cTidesAllied = new Loc(Rectangle.fromHandle(gg_rct_Murloc_Left), LOC.topFederation, ALLIANCE)
	LOC.cTidesFederation = new Loc(Rectangle.fromHandle(gg_rct_Murloc_Right), LOC.bottomAllied, FEDERATION)
	LOC.cDeathMidAllied = new Loc(Rectangle.fromHandle(gg_rct_Zombie_Mid_Left), LOC.cDeathAllied, ALLIANCE)
	LOC.cDeathAllied = new Loc(Rectangle.fromHandle(gg_rct_Zombie_End_Left), LOC.middleFederation, ALLIANCE)
	LOC.cDeathMidFederation = new Loc(Rectangle.fromHandle(gg_rct_Zombie_Mid_Right), LOC.cDeathFederation, FEDERATION)
	LOC.cDeathFederation = new Loc(Rectangle.fromHandle(gg_rct_Zombie_End_Right), LOC.middleAllied, FEDERATION)
	LOC.cStormAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Elemental_Start), LOC.bottomFederation, ALLIANCE)
	LOC.cStormFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Elemental_Start), LOC.topAllied, FEDERATION)
}