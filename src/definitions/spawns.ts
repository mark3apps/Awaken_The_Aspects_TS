import { Spawn, SpawnUnit } from "app/classes/spawn";
import { BSA, BSF, SP, UnitFour } from "globals";


export function defineSpawns() {

    SP.arcane = new Spawn()
    SP.arcane.addBase(BSA.arcane)
    SP.arcane.addBase(BSF.arcane)
    SP.arcane.addUnit(new SpawnUnit(UnitFour.Sorcress, 1, [6, 7, 8, 9, 10], 3, 12)) 
	SP.arcane.addUnit(new SpawnUnit(UnitFour.StormSummoner, 1, [6, 7, 8, 9, 10], 5, 12))

    SP.arcaneCreep = new Spawn()
    SP.arcaneCreep.addBase(BSA.arcane)
    SP.arcaneCreep.addBase(BSF.arcane)
    SP.arcaneCreep.addUnit(new SpawnUnit(UnitFour.BattleGolem, 1, [1, 2, 3, 4], 2, 12))
	SP.arcaneCreep.addUnit(new SpawnUnit(UnitFour.WaterElemental2, 1, [1, 3], 3, 12))
	SP.arcaneCreep.addUnit(new SpawnUnit(UnitFour.WaterElemental3, 1, [2, 3], 4, 12))
	SP.arcaneCreep.addUnit(new SpawnUnit(UnitFour.MagiDefender, 1, [1, 2, 3, 5], 6, 12))
    
	// Arcane Hero Sapwn
    SP.arcaneHero = new Spawn()
    SP.arcaneHero.addBase(BSA.arcaneHero)
    SP.arcaneHero.addBase(BSF.arcaneHero)
	SP.arcaneHero.addUnit(new SpawnUnit(UnitFour.SupremeWizard, 1, [5], 7, 12))
	SP.arcaneHero.addUnit(new SpawnUnit(UnitFour.SeigeGolem, 1, [4], 9, 12))

	// Arcane Top Spawn
    SP.arcaneTop = new Spawn()
    SP.arcaneTop.addBase(BSA.arcaneTop)
    SP.arcaneTop.addBase(BSF.arcaneTop)
	SP.arcaneTop.addUnit(new SpawnUnit(UnitFour.BattleGolem, 2, [4, 5, 6], 1, 12))
	SP.arcaneTop.addUnit(new SpawnUnit(UnitFour.WaterElemental2, 1, [4, 6], 4, 12))
	SP.arcaneTop.addUnit(new SpawnUnit(UnitFour.Summoner, 1, [4], 8, 12))

	// Arcane Bottom Spawn
    SP.arcaneBottom = new Spawn()
    SP.arcaneBottom.addBase(BSA.arcaneBottom)
    SP.arcaneBottom.addBase(BSF.arcaneBottom)
	SP.arcaneBottom.addUnit(new SpawnUnit(UnitFour.BattleGolem, 2, [1, 2, 3], 2, 12))
	SP.arcaneBottom.addUnit(new SpawnUnit(UnitFour.WaterElemental2, 1, [1, 3], 4, 12))
	SP.arcaneBottom.addUnit(new SpawnUnit(UnitFour.Summoner, 1, [1], 8, 12))

	// Blacksmith Creep Spawn
    SP.highCity = new Spawn()
    SP.highCity.addBase(BSA.arcaneBottom)
    SP.highCity.addBase(BSF.arcaneBottom)
	SP.highCity.addUnit(new SpawnUnit(UnitFour.Militia1, 2, [1, 2, 3, 4], 1, 6))
	SP.highCity.addUnit(new SpawnUnit(UnitFour.Arbalist, 1, [1, 2], 3, 12))
	SP.highCity.addUnit(new SpawnUnit(UnitFour.BloodElfBreaker, 1, [3, 4], 5, 12))
	SP.highCity.addUnit(new SpawnUnit(UnitFour.Footman2, 1, [1, 2, 3, 4, 5], 8, 12))
	SP.highCity.addUnit(new SpawnUnit(UnitFour.Captian1, 1, [1, 2, 3, 4, 5], 11, 12))

	// Castle Spawn
    SP.castle = new Spawn()
    SP.castle.addBase(BSA.castle)
    SP.castle.addBase(BSF.castle)
	SP.castle.addUnit(new SpawnUnit(UnitFour.Captian2, 1, [1, 2, 3], 8, 12))

	// City Elves
    SP.cityElves = new Spawn()
    SP.cityElves.addBase(BSA.cityElves)
    SP.cityElves.addBase(BSF.cityElves)
	SP.cityElves.addUnit(new SpawnUnit(UnitFour.BloodElfArcher, 1, [1, 3, 5], 1, 3))
	SP.cityElves.addUnit(new SpawnUnit(UnitFour.BloodElfArcher, 1, [1, 2, 3, 4, 5, 6], 4, 12))
	SP.cityElves.addUnit(new SpawnUnit(UnitFour.BloodElfBreaker, 1, [1, 3, 4, 5, 6], 2, 3))
	SP.cityElves.addUnit(new SpawnUnit(UnitFour.BloodElfBreaker, 1, [1, 2, 3, 4, 5, 6, 7], 4, 5))
	SP.cityElves.addUnit(new SpawnUnit(UnitFour.BloodElfBreaker, 2, [1, 2, 3, 4, 5], 6, 12))
	SP.cityElves.addUnit(new SpawnUnit(UnitFour.BloodElfMage, 1, [1, 4], 3, 6))
	SP.cityElves.addUnit(new SpawnUnit(UnitFour.BloodElfMage, 1, [1, 2, 3, 4, 5, 7], 7, 12))

	// City Front Spawn
    SP.cityFront = new Spawn()
    SP.cityFront.addBase(BSA.cityFront)
    SP.cityFront.addBase(BSF.cityFront)
	SP.cityFront.addUnit(new SpawnUnit(UnitFour.Militia1, 3, [1, 2, 3, 4, 5, 6], 1, 2))
	SP.cityFront.addUnit(new SpawnUnit(UnitFour.Militia2, 2, [1, 2, 3, 4, 5, 6], 3, 4))
	SP.cityFront.addUnit(new SpawnUnit(UnitFour.Footman1, 3, [1, 2, 3, 4, 5, 6], 5, 12))
	SP.cityFront.addUnit(new SpawnUnit(UnitFour.Captian1, 2, [3, 4, 6], 5, 12))
	SP.cityFront.addUnit(new SpawnUnit(UnitFour.Knight, 1, [1, 3, 5], 6, 12))
	SP.cityFront.addUnit(new SpawnUnit(UnitFour.Catapult, 1, [1, 4], 8, 12))
	SP.cityFront.addUnit(new SpawnUnit(UnitFour.Commander, 1, [2], 10, 12))

	// City Side Spawn
    SP.citySide = new Spawn()
    SP.citySide.addBase(BSA.citySide)
    SP.citySide.addBase(BSF.citySide)
	SP.citySide.addUnit(new SpawnUnit(UnitFour.Militia1, 1, [6, 7, 8, 9, 10], 1, 2))
	SP.citySide.addUnit(new SpawnUnit(UnitFour.Footman1, 2, [5, 6, 8, 9], 2, 3))
	SP.citySide.addUnit(new SpawnUnit(UnitFour.Footman1, 3, [5, 6, 8, 9], 4, 12))
	SP.citySide.addUnit(new SpawnUnit(UnitFour.Knight, 1, [6, 8], 3, 4))
	SP.citySide.addUnit(new SpawnUnit(UnitFour.Knight, 1, [6, 7, 8, 9], 5, 12))
	SP.citySide.addUnit(new SpawnUnit(UnitFour.Footman2, 1, [8, 10], 6, 12))
	SP.citySide.addUnit(new SpawnUnit(UnitFour.Arbalist, 1, [4, 5, 6, 7, 8, 9], 3, 12))

	// Draenei Spawn
    SP.draenei = new Spawn()
    SP.draenei.addBase(BSA.draenei)
    SP.draenei.addBase(BSF.draenei)
	SP.draenei.addUnit(new SpawnUnit(UnitFour.DraeneiGuardian, 2, [5, 6, 7, 8, 9, 10], 1, 12))
	SP.draenei.addUnit(new SpawnUnit(UnitFour.DraeneiGuardian, 1, [7, 8, 9], 5, 12))
	SP.draenei.addUnit(new SpawnUnit(UnitFour.DraeneiDarkslayer, 1, [6, 7, 8, 9, 10], 3, 12))
	SP.draenei.addUnit(new SpawnUnit(UnitFour.DraeneiSeer, 1, [7, 10], 4, 12))
	SP.draenei.addUnit(new SpawnUnit(UnitFour.DraeneiVindicator, 1, [5, 6, 8], 7, 12))
	SP.draenei.addUnit(new SpawnUnit(UnitFour.DraeneiDemolisher, 1, [6, 8, 10], 6, 12))

	// // High Elves
    SP.highElves = new Spawn()
    SP.highElves.addBase(BSA.highElves)
    SP.highElves.addBase(BSF.highElves)
	SP.highElves.addUnit(new SpawnUnit(UnitFour.HighElfApprenticeSwordsman, 1, [1, 2, 3, 5], 1, 3))
	SP.highElves.addUnit(new SpawnUnit(UnitFour.HighElfApprenticeSwordsman, 1, [1, 3], 4, 12))
	SP.highElves.addUnit(new SpawnUnit(UnitFour.HighElfArcher, 1, [1, 3, 5], 2, 12))
	SP.highElves.addUnit(new SpawnUnit(UnitFour.HighElfSwordsman, 2, [1, 2, 3, 4], 4, 12))
	SP.highElves.addUnit(new SpawnUnit(UnitFour.HighElfHealer, 1, [1, 3, 5], 5, 12))
	SP.highElves.addUnit(new SpawnUnit(UnitFour.DragonHawk, 1, [1, 2, 3, 5], 6, 12))
	SP.highElves.addUnit(new SpawnUnit(UnitFour.HighElfKnight, 1, [1, 3, 5], 7, 12))

	// // High Elves Creep
    SP.highElvesCreep = new Spawn()
    SP.highElvesCreep.addBase(BSA.highElvesCreep)
    SP.highElvesCreep.addBase(BSF.highElvesCreep)
	SP.highElvesCreep.addUnit(new SpawnUnit(UnitFour.HighElfSwordsman, 1, [1, 2, 3, 4], 1, 2))
	SP.highElvesCreep.addUnit(new SpawnUnit(UnitFour.HighElfSwordsman, 1, [1, 2, 3, 4], 3, 12))
	SP.highElvesCreep.addUnit(new SpawnUnit(UnitFour.HighElfArcher, 1, [1, 3, 5], 2, 12))
	SP.highElvesCreep.addUnit(new SpawnUnit(UnitFour.HighElfHealer, 1, [1, 3], 4, 12))
	SP.highElvesCreep.addUnit(new SpawnUnit(UnitFour.HighElfGuardian, 2, [1, 3, 5], 5, 12))

	// Merc Spawn
    SP.merc = new Spawn()
    SP.merc.addBase(BSA.merc)
    SP.merc.addBase(BSF.merc)
	SP.merc.addUnit(new SpawnUnit(UnitFour.Rogue, 2, [1, 2, 3, 4, 5, 6], 1, 12))
	SP.merc.addUnit(new SpawnUnit(UnitFour.BanditSpearman, 1, [2, 3, 4, 5, 6, 7, 8], 2, 12))
	SP.merc.addUnit(new SpawnUnit(UnitFour.Bandit, 2, [1, 2, 3, 5, 6], 3, 12))
	SP.merc.addUnit(new SpawnUnit(UnitFour.Enforcer, 1, [2, 5], 4, 12))
	SP.merc.addUnit(new SpawnUnit(UnitFour.Assassin, 1, [3, 5, 7], 5, 12))
	SP.merc.addUnit(new SpawnUnit(UnitFour.BanditLord, 1, [1, 5], 6, 12))

	// Dwarf Spawn
    SP.dwarf = new Spawn()
    SP.dwarf.addBase(BSA.dwarf)
    SP.dwarf.addBase(BSF.dwarf)
	SP.dwarf.addUnit(new SpawnUnit(UnitFour.IronGuard, 2, [1, 2, 3, 5, 6], 1, 1))
	SP.dwarf.addUnit(new SpawnUnit(UnitFour.IronGuard, 3, [1, 2, 3, 4, 5, 6, 7], 2, 12))
	SP.dwarf.addUnit(new SpawnUnit(UnitFour.IronMorterTeam, 1, [2, 4, 6], 2, 12))
	SP.dwarf.addUnit(new SpawnUnit(UnitFour.IronRifleman, 1, [1, 2, 3, 4, 5, 6], 3, 12))
	SP.dwarf.addUnit(new SpawnUnit(UnitFour.IronCaptian, 1, [1, 2, 3, 4], 5, 12))
	SP.dwarf.addUnit(new SpawnUnit(UnitFour.IronMagi, 1, [1, 2, 3, 4], 6, 12))
	SP.dwarf.addUnit(new SpawnUnit(UnitFour.GryphonRider, 1, [1, 2, 3, 4], 8, 12))
	SP.dwarf.addUnit(new SpawnUnit(UnitFour.SeigeEngine, 1, [2, 5], 6, 12))
	SP.dwarf.addUnit(new SpawnUnit(UnitFour.Automation, 1, [1, 3, 6], 7, 12))

	// Murloc Spawn
    SP.murloc = new Spawn()
    SP.murloc.addBase(BSA.murloc)
    SP.murloc.addBase(BSF.murloc)
	SP.murloc.addUnit(new SpawnUnit(UnitFour.MurlocCliffrunner, 3, [5, 6, 7, 9, 10], 1, 12))
	SP.murloc.addUnit(new SpawnUnit(UnitFour.MurlocReaver, 1, [5, 7], 2, 12))
	SP.murloc.addUnit(new SpawnUnit(UnitFour.MurlocSnarecaster, 1, [6, 8, 10], 3, 12))
	SP.murloc.addUnit(new SpawnUnit(UnitFour.MurlocTidewarrior, 1, [4, 8], 6, 12))

	// Naga Spawn
    SP.naga = new Spawn()
    SP.naga.addBase(BSA.murloc)
    SP.naga.addBase(BSF.murloc)
	SP.naga.addUnit(new SpawnUnit(UnitFour.NagaMyrmidon, 1, [1, 3], 1, 3))
	SP.naga.addUnit(new SpawnUnit(UnitFour.NagaMyrmidon, 1, [1, 2, 3, 4], 4, 5))
	SP.naga.addUnit(new SpawnUnit(UnitFour.NagaMyrmidon, 1, [1, 2, 3, 4, 5, 6], 6, 12))
	SP.naga.addUnit(new SpawnUnit(UnitFour.NagaSiren, 1, [2, 4, 6], 3, 12))
	SP.naga.addUnit(new SpawnUnit(UnitFour.NagaRoyalGuard, 1, [2, 5], 6, 12))
	SP.naga.addUnit(new SpawnUnit(UnitFour.DragonTurtle, 1, [1, 4], 9, 12))

	// Naga Creep Spawn
    SP.nagaCreep = new Spawn()
    SP.nagaCreep.addBase(BSA.murloc)
    SP.nagaCreep.addBase(BSF.murloc)
	SP.nagaCreep.addUnit(new SpawnUnit(UnitFour.NagaMyrmidon, 1, [1, 2, 3, 4], 2, 12))
	SP.nagaCreep.addUnit(new SpawnUnit(UnitFour.NagaSiren, 1, [2, 4], 3, 12))
	SP.nagaCreep.addUnit(new SpawnUnit(UnitFour.SnapDragon, 1, [2, 3, 4, 5, 6], 5, 12))

	// Night Elves Spawn
    SP.nightElves = new Spawn()
    SP.nightElves.addBase(BSA.nightElves)
    SP.nightElves.addBase(BSF.nightElves)
	SP.nightElves.addUnit(new SpawnUnit(UnitFour.NightElfRanger, 1, [1, 2, 3, 4, 5], 1, 12))
	SP.nightElves.addUnit(new SpawnUnit(UnitFour.NightElfEliteRanger, 1, [1, 2, 3, 4, 5], 2, 12))
	SP.nightElves.addUnit(new SpawnUnit(UnitFour.NightElfSentry, 1, [7, 8, 9, 10], 2, 12))
	SP.nightElves.addUnit(new SpawnUnit(UnitFour.Dryad, 1, [7, 9, 10], 3, 12))
	SP.nightElves.addUnit(new SpawnUnit(UnitFour.DruidOfTheClaw, 1, [6, 7, 8, 9, 10], 4, 12))
	SP.nightElves.addUnit(new SpawnUnit(UnitFour.MountianGiant, 1, [5, 9], 5, 12))
	SP.nightElves.addUnit(new SpawnUnit(UnitFour.AncientProtector, 1, [5], 10, 12))

	// Orc Spawn
    SP.orc = new Spawn()
    SP.orc.addBase(BSA.orc)
    SP.orc.addBase(BSF.orc)
	SP.orc.addUnit(new SpawnUnit(UnitFour.Grunt, 2, [1, 3, 5, 6], 1, 12))
	SP.orc.addUnit(new SpawnUnit(UnitFour.Grunt, 1, [2, 4, 6, 7], 3, 12))
	SP.orc.addUnit(new SpawnUnit(UnitFour.TrollAxethrower, 1, [2, 4, 6, 7], 2, 12))
	SP.orc.addUnit(new SpawnUnit(UnitFour.Ogre, 2, [2, 4, 6, 7], 4, 12))
	SP.orc.addUnit(new SpawnUnit(UnitFour.Warlock, 1, [3, 5, 7], 3, 12))
	SP.orc.addUnit(new SpawnUnit(UnitFour.OrcWarchief, 1, [1, 7], 6, 12))

	// Human Shipyard Spawn
    SP.humanShipyard = new Spawn()
    SP.humanShipyard.addBase(BSA.humanShipyard)
    SP.humanShipyard.addBase(BSF.humanShipyard)
	SP.humanShipyard.addUnit(new SpawnUnit(UnitFour.HumanFrigate, 1, [2], 1, 2))
	SP.humanShipyard.addUnit(new SpawnUnit(UnitFour.HumanFrigate, 1, [2, 4], 3, 4))
	SP.humanShipyard.addUnit(new SpawnUnit(UnitFour.HumanFrigate, 1, [2, 4, 6], 5, 12))
	SP.humanShipyard.addUnit(new SpawnUnit(UnitFour.HumanBattleship, 1, [3], 6, 12))

	// Night Elf Shipyard Spawn
    SP.nightElfShipyard = new Spawn()
    SP.nightElfShipyard.addBase(BSA.nightElfShipyard)
    SP.nightElfShipyard.addBase(BSF.nightElfShipyard)
	SP.nightElfShipyard.addUnit(new SpawnUnit(UnitFour.NightElfFrigate, 1, [1], 2, 3))
	SP.nightElfShipyard.addUnit(new SpawnUnit(UnitFour.NightElfFrigate, 1, [1, 3], 4, 5))
	SP.nightElfShipyard.addUnit(new SpawnUnit(UnitFour.NightElfFrigate, 1, [1, 3, 6], 6, 12))
	SP.nightElfShipyard.addUnit(new SpawnUnit(UnitFour.NightElfBattleship, 1, [3], 7, 12))

	// Undead Spawn
    SP.undead = new Spawn()
    SP.undead.addBase(BSA.undead)
    SP.undead.addBase(BSF.undead)
	SP.undead.addUnit(new SpawnUnit(UnitFour.Ghoul, 4, [6, 7, 8, 9, 10], 1, 12))
	SP.undead.addUnit(new SpawnUnit(UnitFour.SkeletonMage, 1, [6, 7, 8, 9, 10], 2, 12))
	SP.undead.addUnit(new SpawnUnit(UnitFour.Necromancer, 1, [5, 7, 9], 4, 12))
	SP.undead.addUnit(new SpawnUnit(UnitFour.EredarWarlock, 1, [7], 6, 12))
	SP.undead.addUnit(new SpawnUnit(UnitFour.GiantSkeleton, 1, [6, 9], 8, 12))
	SP.undead.addUnit(new SpawnUnit(UnitFour.InfernalContraption, 1, [5, 7], 3, 5))
	SP.undead.addUnit(new SpawnUnit(UnitFour.InfernalMachine, 1, [5, 7], 6, 9))
	SP.undead.addUnit(new SpawnUnit(UnitFour.InfernalJuggernaut, 1, [5, 7], 10, 12))
}