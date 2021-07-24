import { Spawn } from "app/classes/spawn";
import { BASE_ALLIANCE, BASE_FEDERATION, SPAWN } from "lib/globals";



export function defineSpawns() {

	SPAWN.arcane = new Spawn()
	SPAWN.arcane.addBase(BASE_ALLIANCE.arcane)
	SPAWN.arcane.addBase(BASE_FEDERATION.arcane)
	SPAWN.arcane.addUnit({ uFour: UNIT_FOUR.Sorcress, waves: [6, 7, 8, 9, 10], start: 3 })
	SPAWN.arcane.addUnit({ uFour: UNIT_FOUR.StormSummoner, waves: [6, 7, 8, 9, 10], start: 5 })

	SPAWN.arcaneCreep = new Spawn()
	SPAWN.arcaneCreep.addBase(BASE_ALLIANCE.arcane)
	SPAWN.arcaneCreep.addBase(BASE_FEDERATION.arcane)
	SPAWN.arcaneCreep.addUnit({ uFour: UNIT_FOUR.BattleGolem, waves: [1, 2, 3, 4], start: 2 })
	SPAWN.arcaneCreep.addUnit({ uFour: UNIT_FOUR.WaterElemental2, waves: [1, 3], start: 3 })
	SPAWN.arcaneCreep.addUnit({ uFour: UNIT_FOUR.WaterElemental3, waves: [2, 3], start: 4 })
	SPAWN.arcaneCreep.addUnit({ uFour: UNIT_FOUR.MagiDefender, waves: [1, 2, 3, 5], start: 6 })

	// Arcane Hero Sapwn
	SPAWN.arcaneHero = new Spawn()
	SPAWN.arcaneHero.addBase(BASE_ALLIANCE.arcaneHero)
	SPAWN.arcaneHero.addBase(BASE_FEDERATION.arcaneHero)
	SPAWN.arcaneHero.addUnit({ uFour: UNIT_FOUR.SupremeWizard, waves: [5], start: 7 })
	SPAWN.arcaneHero.addUnit({ uFour: UNIT_FOUR.SeigeGolem, waves: [4], start: 9 })

	// Arcane Top Spawn
	SPAWN.arcaneTop = new Spawn()
	SPAWN.arcaneTop.addBase(BASE_ALLIANCE.arcaneTop)
	SPAWN.arcaneTop.addBase(BASE_FEDERATION.arcaneTop)
	SPAWN.arcaneTop.addUnit({ uFour: UNIT_FOUR.BattleGolem, amount: 2, waves: [4, 5, 6] })
	SPAWN.arcaneTop.addUnit({ uFour: UNIT_FOUR.WaterElemental2, waves: [4, 6], start: 4 })
	SPAWN.arcaneTop.addUnit({ uFour: UNIT_FOUR.Summoner, waves: [4], start: 8 })

	// Arcane Bottom Spawn
	SPAWN.arcaneBottom = new Spawn()
	SPAWN.arcaneBottom.addBase(BASE_ALLIANCE.arcaneBottom)
	SPAWN.arcaneBottom.addBase(BASE_FEDERATION.arcaneBottom)
	SPAWN.arcaneBottom.addUnit({ uFour: UNIT_FOUR.BattleGolem, amount: 2, waves: [1, 2, 3], start: 2 })
	SPAWN.arcaneBottom.addUnit({ uFour: UNIT_FOUR.WaterElemental2, waves: [1, 3], start: 4 })
	SPAWN.arcaneBottom.addUnit({ uFour: UNIT_FOUR.Summoner, waves: [1], start: 8 })

	// Blacksmith Creep Spawn
	SPAWN.highCity = new Spawn()
	SPAWN.highCity.addBase(BASE_ALLIANCE.arcaneBottom)
	SPAWN.highCity.addBase(BASE_FEDERATION.arcaneBottom)
	SPAWN.highCity.addUnit({ uFour: UNIT_FOUR.Militia1, amount: 2, waves: [1, 2, 3, 4], end: 6 })
	SPAWN.highCity.addUnit({ uFour: UNIT_FOUR.Arbalist, waves: [1, 2], start: 3 })
	SPAWN.highCity.addUnit({ uFour: UNIT_FOUR.BloodElfBreaker, waves: [3, 4], start: 5 })
	SPAWN.highCity.addUnit({ uFour: UNIT_FOUR.Footman2, waves: [1, 2, 3, 4, 5], start: 8 })
	SPAWN.highCity.addUnit({ uFour: UNIT_FOUR.Captian1, waves: [1, 2, 3, 4, 5] })

	// Castle Spawn
	SPAWN.castle = new Spawn()
	SPAWN.castle.addBase(BASE_ALLIANCE.castle)
	SPAWN.castle.addBase(BASE_FEDERATION.castle)
	SPAWN.castle.addUnit({ uFour: UNIT_FOUR.Captian2, waves: [1, 2, 3], start: 8 })

	// City Elves
	SPAWN.cityElves = new Spawn()
	SPAWN.cityElves.addBase(BASE_ALLIANCE.cityElves)
	SPAWN.cityElves.addBase(BASE_FEDERATION.cityElves)
	SPAWN.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfArcher, waves: [1, 3, 5], end: 3 })
	SPAWN.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfArcher, waves: [1, 2, 3, 4, 5, 6], start: 4 })
	SPAWN.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfBreaker, waves: [1, 3, 4, 5, 6], start: 2, end: 3 })
	SPAWN.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfBreaker, waves: [1, 2, 3, 4, 5, 6, 7], start: 4, end: 5 })
	SPAWN.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfBreaker, amount: 2, waves: [1, 2, 3, 4, 5], start: 6 })
	SPAWN.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfMage, waves: [1, 4], start: 3, end: 6 })
	SPAWN.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfMage, waves: [1, 2, 3, 4, 5, 7], start: 7 })

	// City Front Spawn
	SPAWN.cityFront = new Spawn()
	SPAWN.cityFront.addBase(BASE_ALLIANCE.cityFront)
	SPAWN.cityFront.addBase(BASE_FEDERATION.cityFront)
	SPAWN.cityFront.addUnit({ uFour: UNIT_FOUR.Militia1, amount: 3, waves: [1, 2, 3, 4, 5, 6], end: 2 })
	SPAWN.cityFront.addUnit({ uFour: UNIT_FOUR.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6], start: 3, end: 4 })
	SPAWN.cityFront.addUnit({ uFour: UNIT_FOUR.Footman1, amount: 3, waves: [1, 2, 3, 4, 5, 6], start: 5 })
	SPAWN.cityFront.addUnit({ uFour: UNIT_FOUR.Captian1, amount: 2, waves: [3, 4, 6], start: 5 })
	SPAWN.cityFront.addUnit({ uFour: UNIT_FOUR.Knight, waves: [1, 3, 5], start: 6 })
	SPAWN.cityFront.addUnit({ uFour: UNIT_FOUR.Catapult, waves: [1, 4], start: 8 })
	SPAWN.cityFront.addUnit({ uFour: UNIT_FOUR.Commander, waves: [2], start: 10 })

	// City Side Spawn
	SPAWN.citySide = new Spawn()
	SPAWN.citySide.addBase(BASE_ALLIANCE.citySide)
	SPAWN.citySide.addBase(BASE_FEDERATION.citySide)
	SPAWN.citySide.addUnit({ uFour: UNIT_FOUR.Militia1, waves: [6, 7, 8, 9, 10], end: 2 })
	SPAWN.citySide.addUnit({ uFour: UNIT_FOUR.Footman1, amount: 2, waves: [5, 6, 8, 9], start: 2, end: 3 })
	SPAWN.citySide.addUnit({ uFour: UNIT_FOUR.Footman1, amount: 3, waves: [5, 6, 8, 9], start: 4 })
	SPAWN.citySide.addUnit({ uFour: UNIT_FOUR.Knight, waves: [6, 8], start: 3, end: 4 })
	SPAWN.citySide.addUnit({ uFour: UNIT_FOUR.Knight, waves: [6, 7, 8, 9], start: 5 })
	SPAWN.citySide.addUnit({ uFour: UNIT_FOUR.Footman2, waves: [8, 10], start: 6 })
	SPAWN.citySide.addUnit({ uFour: UNIT_FOUR.Arbalist, waves: [4, 5, 6, 7, 8, 9], start: 3 })

	// Draenei Spawn
	SPAWN.draenei = new Spawn()
	SPAWN.draenei.addBase(BASE_ALLIANCE.draenei)
	SPAWN.draenei.addBase(BASE_FEDERATION.draenei)
	SPAWN.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiGuardian, amount: 2, waves: [5, 6, 7, 8, 9, 10] })
	SPAWN.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiGuardian, waves: [7, 8, 9], start: 5 })
	SPAWN.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiDarkslayer, waves: [6, 7, 8, 9, 10], start: 3 })
	SPAWN.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiSeer, waves: [7, 10], start: 4 })
	SPAWN.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiVindicator, waves: [5, 6, 8], start: 7 })
	SPAWN.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiDemolisher, waves: [6, 8, 10], start: 6 })

	// // High Elves
	SPAWN.highElves = new Spawn()
	SPAWN.highElves.addBase(BASE_ALLIANCE.highElves)
	SPAWN.highElves.addBase(BASE_FEDERATION.highElves)
	SPAWN.highElves.addUnit({ uFour: UNIT_FOUR.HighElfApprenticeSwordsman, waves: [1, 2, 3, 5], end: 3 })
	SPAWN.highElves.addUnit({ uFour: UNIT_FOUR.HighElfApprenticeSwordsman, waves: [1, 3], start: 4 })
	SPAWN.highElves.addUnit({ uFour: UNIT_FOUR.HighElfArcher, waves: [1, 3, 5], start: 2 })
	SPAWN.highElves.addUnit({ uFour: UNIT_FOUR.HighElfSwordsman, amount: 2, waves: [1, 2, 3, 4], start: 4 })
	SPAWN.highElves.addUnit({ uFour: UNIT_FOUR.HighElfHealer, waves: [1, 3, 5], start: 5 })
	SPAWN.highElves.addUnit({ uFour: UNIT_FOUR.DragonHawk, waves: [1, 2, 3, 5], start: 6 })
	SPAWN.highElves.addUnit({ uFour: UNIT_FOUR.HighElfKnight, waves: [1, 3, 5], start: 7 })

	// // High Elves Creep
	SPAWN.highElvesCreep = new Spawn()
	SPAWN.highElvesCreep.addBase(BASE_ALLIANCE.highElvesCreep)
	SPAWN.highElvesCreep.addBase(BASE_FEDERATION.highElvesCreep)
	SPAWN.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfSwordsman, waves: [1, 2, 3, 4], end: 2 })
	SPAWN.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfSwordsman, waves: [1, 2, 3, 4], start: 3 })
	SPAWN.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfArcher, waves: [1, 3, 5], start: 2 })
	SPAWN.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfHealer, waves: [1, 3], start: 4 })
	SPAWN.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfGuardian, amount: 2, waves: [1, 3, 5], start: 5 })

	// Merc Spawn
	SPAWN.merc = new Spawn()
	SPAWN.merc.addBase(BASE_ALLIANCE.merc)
	SPAWN.merc.addBase(BASE_FEDERATION.merc)
	SPAWN.merc.addUnit({ uFour: UNIT_FOUR.Rogue, amount: 2, waves: [1, 2, 3, 4, 5, 6] })
	SPAWN.merc.addUnit({ uFour: UNIT_FOUR.BanditSpearman, waves: [2, 3, 4, 5, 6, 7, 8], start: 2 })
	SPAWN.merc.addUnit({ uFour: UNIT_FOUR.Bandit, amount: 2, waves: [1, 2, 3, 5, 6], start: 3 })
	SPAWN.merc.addUnit({ uFour: UNIT_FOUR.Enforcer, waves: [2, 5], start: 4 })
	SPAWN.merc.addUnit({ uFour: UNIT_FOUR.Assassin, waves: [3, 5, 7], start: 5 })
	SPAWN.merc.addUnit({ uFour: UNIT_FOUR.BanditLord, waves: [1, 5], start: 6 })

	// Dwarf Spawn
	SPAWN.dwarf = new Spawn()
	SPAWN.dwarf.addBase(BASE_ALLIANCE.dwarf)
	SPAWN.dwarf.addBase(BASE_FEDERATION.dwarf)
	SPAWN.dwarf.addUnit({ uFour: UNIT_FOUR.IronGuard, amount: 2, waves: [1, 2, 3, 5, 6], end: 1 })
	SPAWN.dwarf.addUnit({ uFour: UNIT_FOUR.IronGuard, amount: 3, waves: [1, 2, 3, 4, 5, 6, 7], start: 2 })
	SPAWN.dwarf.addUnit({ uFour: UNIT_FOUR.IronMorterTeam, waves: [2, 4, 6], start: 2 })
	SPAWN.dwarf.addUnit({ uFour: UNIT_FOUR.IronRifleman, waves: [1, 2, 3, 4, 5, 6], start: 3 })
	SPAWN.dwarf.addUnit({ uFour: UNIT_FOUR.IronCaptian, waves: [1, 2, 3, 4], start: 5 })
	SPAWN.dwarf.addUnit({ uFour: UNIT_FOUR.IronMagi, waves: [1, 2, 3, 4], start: 6 })
	SPAWN.dwarf.addUnit({ uFour: UNIT_FOUR.GryphonRider, waves: [1, 2, 3, 4], start: 8 })
	SPAWN.dwarf.addUnit({ uFour: UNIT_FOUR.SeigeEngine, waves: [2, 5], start: 6 })
	SPAWN.dwarf.addUnit({ uFour: UNIT_FOUR.Automation, waves: [1, 3, 6], start: 7 })

	// Murloc Spawn
	SPAWN.murloc = new Spawn()
	SPAWN.murloc.addBase(BASE_ALLIANCE.murloc)
	SPAWN.murloc.addBase(BASE_FEDERATION.murloc)
	SPAWN.murloc.addUnit({ uFour: UNIT_FOUR.MurlocCliffrunner, amount: 3, waves: [5, 6, 7, 9, 10] })
	SPAWN.murloc.addUnit({ uFour: UNIT_FOUR.MurlocReaver, waves: [5, 7], start: 2 })
	SPAWN.murloc.addUnit({ uFour: UNIT_FOUR.MurlocSnarecaster, waves: [6, 8, 10], start: 3 })
	SPAWN.murloc.addUnit({ uFour: UNIT_FOUR.MurlocTidewarrior, waves: [4, 8], start: 6 })

	// Naga Spawn
	SPAWN.naga = new Spawn()
	SPAWN.naga.addBase(BASE_ALLIANCE.murloc)
	SPAWN.naga.addBase(BASE_FEDERATION.murloc)
	SPAWN.naga.addUnit({ uFour: UNIT_FOUR.NagaMyrmidon, waves: [1, 3], end: 3 })
	SPAWN.naga.addUnit({ uFour: UNIT_FOUR.NagaMyrmidon, waves: [1, 2, 3, 4], start: 4, end: 5 })
	SPAWN.naga.addUnit({ uFour: UNIT_FOUR.NagaMyrmidon, waves: [1, 2, 3, 4, 5, 6], start: 6 })
	SPAWN.naga.addUnit({ uFour: UNIT_FOUR.NagaSiren, waves: [2, 4, 6], start: 3 })
	SPAWN.naga.addUnit({ uFour: UNIT_FOUR.NagaRoyalGuard, waves: [2, 5], start: 6 })
	SPAWN.naga.addUnit({ uFour: UNIT_FOUR.DragonTurtle, waves: [1, 4], start: 9 })

	// Naga Creep Spawn
	SPAWN.nagaCreep = new Spawn()
	SPAWN.nagaCreep.addBase(BASE_ALLIANCE.murloc)
	SPAWN.nagaCreep.addBase(BASE_FEDERATION.murloc)
	SPAWN.nagaCreep.addUnit({ uFour: UNIT_FOUR.NagaMyrmidon, waves: [1, 2, 3, 4], start: 2 })
	SPAWN.nagaCreep.addUnit({ uFour: UNIT_FOUR.NagaSiren, waves: [2, 4], start: 3 })
	SPAWN.nagaCreep.addUnit({ uFour: UNIT_FOUR.SnapDragon, waves: [2, 3, 4, 5, 6], start: 5 })

	// Night Elves Spawn
	SPAWN.nightElves = new Spawn()
	SPAWN.nightElves.addBase(BASE_ALLIANCE.nightElves)
	SPAWN.nightElves.addBase(BASE_FEDERATION.nightElves)
	SPAWN.nightElves.addUnit({ uFour: UNIT_FOUR.NightElfRanger, waves: [1, 2, 3, 4, 5] })
	SPAWN.nightElves.addUnit({ uFour: UNIT_FOUR.NightElfEliteRanger, waves: [1, 2, 3, 4, 5], start: 2 })
	SPAWN.nightElves.addUnit({ uFour: UNIT_FOUR.NightElfSentry, waves: [7, 8, 9, 10], start: 2 })
	SPAWN.nightElves.addUnit({ uFour: UNIT_FOUR.Dryad, waves: [7, 9, 10], start: 3 })
	SPAWN.nightElves.addUnit({ uFour: UNIT_FOUR.DruidOfTheClaw, waves: [6, 7, 8, 9, 10], start: 4 })
	SPAWN.nightElves.addUnit({ uFour: UNIT_FOUR.MountianGiant, waves: [5, 9], start: 5 })
	SPAWN.nightElves.addUnit({ uFour: UNIT_FOUR.AncientProtector, waves: [5], start: 10 })

	// Orc Spawn
	SPAWN.orc = new Spawn()
	SPAWN.orc.addBase(BASE_ALLIANCE.orc)
	SPAWN.orc.addBase(BASE_FEDERATION.orc)
	SPAWN.orc.addUnit({ uFour: UNIT_FOUR.Grunt, amount: 2, waves: [1, 3, 5, 6] })
	SPAWN.orc.addUnit({ uFour: UNIT_FOUR.Grunt, waves: [2, 4, 6, 7], start: 3 })
	SPAWN.orc.addUnit({ uFour: UNIT_FOUR.TrollAxethrower, waves: [2, 4, 6, 7], start: 2 })
	SPAWN.orc.addUnit({ uFour: UNIT_FOUR.Ogre, amount: 2, waves: [2, 4, 6, 7], start: 4 })
	SPAWN.orc.addUnit({ uFour: UNIT_FOUR.Warlock, waves: [3, 5, 7], start: 3 })
	SPAWN.orc.addUnit({ uFour: UNIT_FOUR.OrcWarchief, waves: [1, 7], start: 6 })

	// Human Shipyard Spawn
	SPAWN.humanShipyard = new Spawn()
	SPAWN.humanShipyard.addBase(BASE_ALLIANCE.humanShipyard)
	SPAWN.humanShipyard.addBase(BASE_FEDERATION.humanShipyard)
	SPAWN.humanShipyard.addUnit({ uFour: UNIT_FOUR.HumanFrigate, waves: [2], end: 2 })
	SPAWN.humanShipyard.addUnit({ uFour: UNIT_FOUR.HumanFrigate, waves: [2, 4], start: 3, end: 4 })
	SPAWN.humanShipyard.addUnit({ uFour: UNIT_FOUR.HumanFrigate, waves: [2, 4, 6], start: 5 })
	SPAWN.humanShipyard.addUnit({ uFour: UNIT_FOUR.HumanBattleship, waves: [3], start: 6 })

	// Night Elf Shipyard Spawn
	SPAWN.nightElfShipyard = new Spawn()
	SPAWN.nightElfShipyard.addBase(BASE_ALLIANCE.nightElfShipyard)
	SPAWN.nightElfShipyard.addBase(BASE_FEDERATION.nightElfShipyard)
	SPAWN.nightElfShipyard.addUnit({ uFour: UNIT_FOUR.NightElfFrigate, waves: [1], start: 2, end: 3 })
	SPAWN.nightElfShipyard.addUnit({ uFour: UNIT_FOUR.NightElfFrigate, waves: [1, 3], start: 4, end: 5 })
	SPAWN.nightElfShipyard.addUnit({ uFour: UNIT_FOUR.NightElfFrigate, waves: [1, 3, 6], start: 6 })
	SPAWN.nightElfShipyard.addUnit({ uFour: UNIT_FOUR.NightElfBattleship, waves: [3], start: 7 })

	// Undead Spawn
	SPAWN.undead = new Spawn()
	SPAWN.undead.addBase(BASE_ALLIANCE.undead)
	SPAWN.undead.addBase(BASE_FEDERATION.undead)
	SPAWN.undead.addUnit({ uFour: UNIT_FOUR.Ghoul, amount: 4, waves: [6, 7, 8, 9, 10] })
	SPAWN.undead.addUnit({ uFour: UNIT_FOUR.SkeletonMage, waves: [6, 7, 8, 9, 10], start: 2 })
	SPAWN.undead.addUnit({ uFour: UNIT_FOUR.Necromancer, waves: [5, 7, 9], start: 4 })
	SPAWN.undead.addUnit({ uFour: UNIT_FOUR.EredarWarlock, waves: [7], start: 6 })
	SPAWN.undead.addUnit({ uFour: UNIT_FOUR.GiantSkeleton, waves: [6, 9], start: 8 })
	SPAWN.undead.addUnit({ uFour: UNIT_FOUR.InfernalContraption, waves: [5, 7], start: 3, end: 5 })
	SPAWN.undead.addUnit({ uFour: UNIT_FOUR.InfernalMachine, waves: [5, 7], start: 6, end: 9 })
	SPAWN.undead.addUnit({ uFour: UNIT_FOUR.InfernalJuggernaut, waves: [5, 7], start: 10 })
}