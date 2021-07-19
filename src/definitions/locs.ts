import { Loc } from "app/classes/loc";
import { Allied, Federation, L } from "globals";
import { Rectangle } from "w3ts/index";

export function defineLocs() {

    L.arcaneAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Mage_Base), L.castleAllied, Federation)
    L.castleAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Hero))
    L.startAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Start), L.castleAllied, Federation)
	L.elfAllied = new Loc(Rectangle.fromHandle(gg_rct_Elf_Base_Left), L.castleAllied, Federation)

    L.arcaneFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Mage_Base), L.castleFederation, Allied)
    L.castleFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Hero))
	L.startFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Start), L.castleFederation, Allied)
	L.elfFederation = new Loc(Rectangle.fromHandle(gg_rct_Elf_Base_Right), L.casteFederation, Allied)

    
	// Pathing Rects
	L.everythingAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Everything), L.castleAllied, Federation)
    L.bottomAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Bottom), L.arcaneAllied, Federation)
    L.middleAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Middle), L.startAllied, Federation)
    L.topAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Top), L.elfAllied, Federation)

	L.everythingFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Everything), L.castleFederation, Allied)
	L.bottomFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Bottom), L.elfFederation, Allied)
	L.middleFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Middle), L.startFederation, Allied)
	L.topFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Top), L.arcaneFederation, Allied)

	// Spawn Rects
	L.sArcaneAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Arcane))
	L.sArcaneFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Arcane))
	L.sArcaneHeroAllied = new Loc(Rectangle.fromHandle(gg_rct_Arcane_Hero_Left))
	L.sArcaneHeroFederation = new Loc(Rectangle.fromHandle(gg_rct_Arcane_Hero_Right))
	L.sCampAllied = new Loc(Rectangle.fromHandle(gg_rct_Camp_Bottom))
	L.sCampFederation = new Loc(Rectangle.fromHandle(gg_rct_Camp_Top))
	L.sHighCityAllied = new Loc(Rectangle.fromHandle(gg_rct_Blacksmith_Left))
	L.sHighCityFederation = new Loc(Rectangle.fromHandle(gg_rct_Blacksmith_Right))
	L.sCityElfAllied = new Loc(Rectangle.fromHandle(gg_rct_City_Elves_Left))
	L.sCityElfFederation = new Loc(Rectangle.fromHandle(gg_rct_City_Elves_Right))
	L.sCityFrontAllied = new Loc(Rectangle.fromHandle(gg_rct_Front_Town_Left))
	L.sCityFrontFederation = new Loc(Rectangle.fromHandle(gg_rct_Front_City_Right))
	L.sCitySideAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_City))
	L.sCitySideFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_City))
	L.sElementalTopAllied = new Loc(Rectangle.fromHandle(gg_rct_Arcane_Left_Top))
	L.sElementalTopFederation = new Loc(Rectangle.fromHandle(gg_rct_Arcane_Right_Top))
	L.sElementalBottomAllied = new Loc(Rectangle.fromHandle(gg_rct_Arcane_Left_Bottom))
	L.sElementalBottomFederation = new Loc(Rectangle.fromHandle(gg_rct_Arcane_Right_Bottom))
	L.sElfAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_High_Elves))
	L.sElfFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_High_Elves))
	L.sElfShipyardAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Shipyard))
	L.sElfShipyardFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Shipyard))
	L.sHeroAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Hero))
	L.sHeroFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Hero))
	L.sHumanShipyardAllied = new Loc(Rectangle.fromHandle(gg_rct_Human_Shipyard_Left))
	L.sHumanShipyardFederation = new Loc(Rectangle.fromHandle(gg_rct_Human_Shipyard_Right))
	L.sKolboldAllied = new Loc(Rectangle.fromHandle(gg_rct_Furbolg_Left))
	L.sKolboldFederation = new Loc(Rectangle.fromHandle(gg_rct_Furbolg_Right))
	L.sMurlocAllied = new Loc(Rectangle.fromHandle(gg_rct_Murloc_Spawn_Left))
	L.sMurlocFederation = new Loc(Rectangle.fromHandle(gg_rct_Murloc_Spawn_Right))
	L.sNagaAllied = new Loc(Rectangle.fromHandle(gg_rct_Naga_Left))
	L.sNagaFederation = new Loc(Rectangle.fromHandle(gg_rct_Naga_Right))
	L.sOrcAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Orc))
	L.sOrcFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Orc))
	L.sNightElfAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Tree))
	L.sNightElfFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Tree))
	L.sDwarfAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Workshop))
	L.sDwarfFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Workshop))
	L.sUndeadAllied = new Loc(Rectangle.fromHandle(gg_rct_Undead_Left))
	L.sUndeadFederation = new Loc(Rectangle.fromHandle(gg_rct_Undead_Right))

	// Creep Rects
	L.cForestMidAllied = new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left_Mid), L.cForestAllied, Allied)
	L.cForestAllied = new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left), L.topFederation, Allied)
	L.cForestMidFederation = new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right_Mid), L.cForestFederation, Federation)
	L.cForestFederation = new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right), L.bottomAllied, Federation)
	L.cTidesAllied = new Loc(Rectangle.fromHandle(gg_rct_Murloc_Left), L.topFederation, Allied)
	L.cTidesFederation = new Loc(Rectangle.fromHandle(gg_rct_Murloc_Right), L.bottomAllied, Federation)
	L.cDeathMidAllied = new Loc(Rectangle.fromHandle(gg_rct_Zombie_Mid_Left), L.cDeathAllied, Allied)
	L.cDeathAllied = new Loc(Rectangle.fromHandle(gg_rct_Zombie_End_Left), L.middleFederation, Allied)
	L.cDeathMidFederation = new Loc(Rectangle.fromHandle(gg_rct_Zombie_Mid_Right), L.cDeathFederation, Federation)
	L.cDeathFederation = new Loc(Rectangle.fromHandle(gg_rct_Zombie_End_Right), L.middleAllied, Federation)
	L.cStormAllied = new Loc(Rectangle.fromHandle(gg_rct_Left_Elemental_Start), L.bottomFederation, Allied)
	L.cStormFederation = new Loc(Rectangle.fromHandle(gg_rct_Right_Elemental_Start), L.topAllied, Federation)
}