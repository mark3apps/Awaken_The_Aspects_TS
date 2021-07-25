import { Spawn } from "app/classes/spawn";
import { BASE_ALLIANCE, BASE_FEDERATION } from "lib/globals";
import { Timer } from "w3ts/handles/timer";



export namespace SPAWN {

	export let names: Array<string>
	export let bases: { [name: string]: Spawn }

	bases.arcane = new Spawn("arcane")
	bases.arcane.addBase(BASE_ALLIANCE.arcane)
	bases.arcane.addBase(BASE_FEDERATION.arcane)
	bases.arcane.addUnit({ uFour: UNIT_FOUR.Sorcress, waves: [6, 7, 8, 9, 10], start: 3 })
	bases.arcane.addUnit({ uFour: UNIT_FOUR.StormSummoner, waves: [6, 7, 8, 9, 10], start: 5 })
	names.push(bases.arcane.name)

	bases.arcaneCreep = new Spawn("arcaneCreep")
	bases.arcaneCreep.addBase(BASE_ALLIANCE.arcane)
	bases.arcaneCreep.addBase(BASE_FEDERATION.arcane)
	bases.arcaneCreep.addUnit({ uFour: UNIT_FOUR.BattleGolem, waves: [1, 2, 3, 4], start: 2 })
	bases.arcaneCreep.addUnit({ uFour: UNIT_FOUR.WaterElemental2, waves: [1, 3], start: 3 })
	bases.arcaneCreep.addUnit({ uFour: UNIT_FOUR.WaterElemental3, waves: [2, 3], start: 4 })
	bases.arcaneCreep.addUnit({ uFour: UNIT_FOUR.MagiDefender, waves: [1, 2, 3, 5], start: 6 })
	names.push(bases.arcaneCreep.name)

	// Arcane Hero Sapwn
	bases.arcaneHero = new Spawn("arcaneHero")
	bases.arcaneHero.addBase(BASE_ALLIANCE.arcaneHero)
	bases.arcaneHero.addBase(BASE_FEDERATION.arcaneHero)
	bases.arcaneHero.addUnit({ uFour: UNIT_FOUR.SupremeWizard, waves: [5], start: 7 })
	bases.arcaneHero.addUnit({ uFour: UNIT_FOUR.SeigeGolem, waves: [4], start: 9 })
	names.push(bases.arcaneHero.name)

	// Arcane Top Spawn
	bases.arcaneTop = new Spawn("arcaneTop")
	bases.arcaneTop.addBase(BASE_ALLIANCE.arcaneTop)
	bases.arcaneTop.addBase(BASE_FEDERATION.arcaneTop)
	bases.arcaneTop.addUnit({ uFour: UNIT_FOUR.BattleGolem, amount: 2, waves: [4, 5, 6] })
	bases.arcaneTop.addUnit({ uFour: UNIT_FOUR.WaterElemental2, waves: [4, 6], start: 4 })
	bases.arcaneTop.addUnit({ uFour: UNIT_FOUR.Summoner, waves: [4], start: 8 })
	names.push(bases.arcaneTop.name)

	// Arcane Bottom Spawn
	bases.arcaneBottom = new Spawn("arcaneBottom")
	bases.arcaneBottom.addBase(BASE_ALLIANCE.arcaneBottom)
	bases.arcaneBottom.addBase(BASE_FEDERATION.arcaneBottom)
	bases.arcaneBottom.addUnit({ uFour: UNIT_FOUR.BattleGolem, amount: 2, waves: [1, 2, 3], start: 2 })
	bases.arcaneBottom.addUnit({ uFour: UNIT_FOUR.WaterElemental2, waves: [1, 3], start: 4 })
	bases.arcaneBottom.addUnit({ uFour: UNIT_FOUR.Summoner, waves: [1], start: 8 })
	names.push(bases.arcaneBottom.name)

	// Blacksmith Creep Spawn
	bases.highCity = new Spawn("highCity")
	bases.highCity.addBase(BASE_ALLIANCE.arcaneBottom)
	bases.highCity.addBase(BASE_FEDERATION.arcaneBottom)
	bases.highCity.addUnit({ uFour: UNIT_FOUR.Militia1, amount: 2, waves: [1, 2, 3, 4], end: 6 })
	bases.highCity.addUnit({ uFour: UNIT_FOUR.Arbalist, waves: [1, 2], start: 3 })
	bases.highCity.addUnit({ uFour: UNIT_FOUR.BloodElfBreaker, waves: [3, 4], start: 5 })
	bases.highCity.addUnit({ uFour: UNIT_FOUR.Footman2, waves: [1, 2, 3, 4, 5], start: 8 })
	bases.highCity.addUnit({ uFour: UNIT_FOUR.Captian1, waves: [1, 2, 3, 4, 5] })
	names.push(bases.highCity.name)

	// Castle Spawn
	bases.castle = new Spawn("castle")
	bases.castle.addBase(BASE_ALLIANCE.castle)
	bases.castle.addBase(BASE_FEDERATION.castle)
	bases.castle.addUnit({ uFour: UNIT_FOUR.Captian2, waves: [1, 2, 3], start: 8 })
	names.push(bases.castle.name)

	// City Elves
	bases.cityElves = new Spawn("cityElves")
	bases.cityElves.addBase(BASE_ALLIANCE.cityElves)
	bases.cityElves.addBase(BASE_FEDERATION.cityElves)
	bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfArcher, waves: [1, 3, 5], end: 3 })
	bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfArcher, waves: [1, 2, 3, 4, 5, 6], start: 4 })
	bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfBreaker, waves: [1, 3, 4, 5, 6], start: 2, end: 3 })
	bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfBreaker, waves: [1, 2, 3, 4, 5, 6, 7], start: 4, end: 5 })
	bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfBreaker, amount: 2, waves: [1, 2, 3, 4, 5], start: 6 })
	bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfMage, waves: [1, 4], start: 3, end: 6 })
	bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfMage, waves: [1, 2, 3, 4, 5, 7], start: 7 })
	names.push(bases.cityElves.name)

	// City Front Spawn
	bases.cityFront = new Spawn("cityFront")
	bases.cityFront.addBase(BASE_ALLIANCE.cityFront)
	bases.cityFront.addBase(BASE_FEDERATION.cityFront)
	bases.cityFront.addUnit({ uFour: UNIT_FOUR.Militia1, amount: 3, waves: [1, 2, 3, 4, 5, 6], end: 2 })
	bases.cityFront.addUnit({ uFour: UNIT_FOUR.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6], start: 3, end: 4 })
	bases.cityFront.addUnit({ uFour: UNIT_FOUR.Footman1, amount: 3, waves: [1, 2, 3, 4, 5, 6], start: 5 })
	bases.cityFront.addUnit({ uFour: UNIT_FOUR.Captian1, amount: 2, waves: [3, 4, 6], start: 5 })
	bases.cityFront.addUnit({ uFour: UNIT_FOUR.Knight, waves: [1, 3, 5], start: 6 })
	bases.cityFront.addUnit({ uFour: UNIT_FOUR.Catapult, waves: [1, 4], start: 8 })
	bases.cityFront.addUnit({ uFour: UNIT_FOUR.Commander, waves: [2], start: 10 })
	names.push(bases.cityFront.name)

	// City Side Spawn
	bases.citySide = new Spawn("citySide")
	bases.citySide.addBase(BASE_ALLIANCE.citySide)
	bases.citySide.addBase(BASE_FEDERATION.citySide)
	bases.citySide.addUnit({ uFour: UNIT_FOUR.Militia1, waves: [6, 7, 8, 9, 10], end: 2 })
	bases.citySide.addUnit({ uFour: UNIT_FOUR.Footman1, amount: 2, waves: [5, 6, 8, 9], start: 2, end: 3 })
	bases.citySide.addUnit({ uFour: UNIT_FOUR.Footman1, amount: 3, waves: [5, 6, 8, 9], start: 4 })
	bases.citySide.addUnit({ uFour: UNIT_FOUR.Knight, waves: [6, 8], start: 3, end: 4 })
	bases.citySide.addUnit({ uFour: UNIT_FOUR.Knight, waves: [6, 7, 8, 9], start: 5 })
	bases.citySide.addUnit({ uFour: UNIT_FOUR.Footman2, waves: [8, 10], start: 6 })
	bases.citySide.addUnit({ uFour: UNIT_FOUR.Arbalist, waves: [4, 5, 6, 7, 8, 9], start: 3 })
	names.push(bases.citySide.name)

	// Draenei Spawn
	bases.draenei = new Spawn("draenei")
	bases.draenei.addBase(BASE_ALLIANCE.draenei)
	bases.draenei.addBase(BASE_FEDERATION.draenei)
	bases.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiGuardian, amount: 2, waves: [5, 6, 7, 8, 9, 10] })
	bases.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiGuardian, waves: [7, 8, 9], start: 5 })
	bases.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiDarkslayer, waves: [6, 7, 8, 9, 10], start: 3 })
	bases.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiSeer, waves: [7, 10], start: 4 })
	bases.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiVindicator, waves: [5, 6, 8], start: 7 })
	bases.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiDemolisher, waves: [6, 8, 10], start: 6 })
	names.push(bases.draenei.name)

	// // High Elves
	bases.highElves = new Spawn("highElves")
	bases.highElves.addBase(BASE_ALLIANCE.highElves)
	bases.highElves.addBase(BASE_FEDERATION.highElves)
	bases.highElves.addUnit({ uFour: UNIT_FOUR.HighElfApprenticeSwordsman, waves: [1, 2, 3, 5], end: 3 })
	bases.highElves.addUnit({ uFour: UNIT_FOUR.HighElfApprenticeSwordsman, waves: [1, 3], start: 4 })
	bases.highElves.addUnit({ uFour: UNIT_FOUR.HighElfArcher, waves: [1, 3, 5], start: 2 })
	bases.highElves.addUnit({ uFour: UNIT_FOUR.HighElfSwordsman, amount: 2, waves: [1, 2, 3, 4], start: 4 })
	bases.highElves.addUnit({ uFour: UNIT_FOUR.HighElfHealer, waves: [1, 3, 5], start: 5 })
	bases.highElves.addUnit({ uFour: UNIT_FOUR.DragonHawk, waves: [1, 2, 3, 5], start: 6 })
	bases.highElves.addUnit({ uFour: UNIT_FOUR.HighElfKnight, waves: [1, 3, 5], start: 7 })
	names.push(bases.highElves.name)

	// // High Elves Creep
	bases.highElvesCreep = new Spawn("highElvesCreep")
	bases.highElvesCreep.addBase(BASE_ALLIANCE.highElvesCreep)
	bases.highElvesCreep.addBase(BASE_FEDERATION.highElvesCreep)
	bases.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfSwordsman, waves: [1, 2, 3, 4], end: 2 })
	bases.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfSwordsman, waves: [1, 2, 3, 4], start: 3 })
	bases.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfArcher, waves: [1, 3, 5], start: 2 })
	bases.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfHealer, waves: [1, 3], start: 4 })
	bases.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfGuardian, amount: 2, waves: [1, 3, 5], start: 5 })
	names.push(bases.highElvesCreep.name)

	// Merc Spawn
	bases.merc = new Spawn("merc")
	bases.merc.addBase(BASE_ALLIANCE.merc)
	bases.merc.addBase(BASE_FEDERATION.merc)
	bases.merc.addUnit({ uFour: UNIT_FOUR.Rogue, amount: 2, waves: [1, 2, 3, 4, 5, 6] })
	bases.merc.addUnit({ uFour: UNIT_FOUR.BanditSpearman, waves: [2, 3, 4, 5, 6, 7, 8], start: 2 })
	bases.merc.addUnit({ uFour: UNIT_FOUR.Bandit, amount: 2, waves: [1, 2, 3, 5, 6], start: 3 })
	bases.merc.addUnit({ uFour: UNIT_FOUR.Enforcer, waves: [2, 5], start: 4 })
	bases.merc.addUnit({ uFour: UNIT_FOUR.Assassin, waves: [3, 5, 7], start: 5 })
	bases.merc.addUnit({ uFour: UNIT_FOUR.BanditLord, waves: [1, 5], start: 6 })
	names.push(bases.merc.name)

	// Dwarf Spawn
	bases.dwarf = new Spawn("dwarf")
	bases.dwarf.addBase(BASE_ALLIANCE.dwarf)
	bases.dwarf.addBase(BASE_FEDERATION.dwarf)
	bases.dwarf.addUnit({ uFour: UNIT_FOUR.IronGuard, amount: 2, waves: [1, 2, 3, 5, 6], end: 1 })
	bases.dwarf.addUnit({ uFour: UNIT_FOUR.IronGuard, amount: 3, waves: [1, 2, 3, 4, 5, 6, 7], start: 2 })
	bases.dwarf.addUnit({ uFour: UNIT_FOUR.IronMorterTeam, waves: [2, 4, 6], start: 2 })
	bases.dwarf.addUnit({ uFour: UNIT_FOUR.IronRifleman, waves: [1, 2, 3, 4, 5, 6], start: 3 })
	bases.dwarf.addUnit({ uFour: UNIT_FOUR.IronCaptian, waves: [1, 2, 3, 4], start: 5 })
	bases.dwarf.addUnit({ uFour: UNIT_FOUR.IronMagi, waves: [1, 2, 3, 4], start: 6 })
	bases.dwarf.addUnit({ uFour: UNIT_FOUR.GryphonRider, waves: [1, 2, 3, 4], start: 8 })
	bases.dwarf.addUnit({ uFour: UNIT_FOUR.SeigeEngine, waves: [2, 5], start: 6 })
	bases.dwarf.addUnit({ uFour: UNIT_FOUR.Automation, waves: [1, 3, 6], start: 7 })
	names.push(bases.dwarf.name)

	// Murloc Spawn
	bases.murloc = new Spawn("murloc")
	bases.murloc.addBase(BASE_ALLIANCE.murloc)
	bases.murloc.addBase(BASE_FEDERATION.murloc)
	bases.murloc.addUnit({ uFour: UNIT_FOUR.MurlocCliffrunner, amount: 3, waves: [5, 6, 7, 9, 10] })
	bases.murloc.addUnit({ uFour: UNIT_FOUR.MurlocReaver, waves: [5, 7], start: 2 })
	bases.murloc.addUnit({ uFour: UNIT_FOUR.MurlocSnarecaster, waves: [6, 8, 10], start: 3 })
	bases.murloc.addUnit({ uFour: UNIT_FOUR.MurlocTidewarrior, waves: [4, 8], start: 6 })
	names.push(bases.murloc.name)

	// Naga Spawn
	bases.naga = new Spawn("naga")
	bases.naga.addBase(BASE_ALLIANCE.murloc)
	bases.naga.addBase(BASE_FEDERATION.murloc)
	bases.naga.addUnit({ uFour: UNIT_FOUR.NagaMyrmidon, waves: [1, 3], end: 3 })
	bases.naga.addUnit({ uFour: UNIT_FOUR.NagaMyrmidon, waves: [1, 2, 3, 4], start: 4, end: 5 })
	bases.naga.addUnit({ uFour: UNIT_FOUR.NagaMyrmidon, waves: [1, 2, 3, 4, 5, 6], start: 6 })
	bases.naga.addUnit({ uFour: UNIT_FOUR.NagaSiren, waves: [2, 4, 6], start: 3 })
	bases.naga.addUnit({ uFour: UNIT_FOUR.NagaRoyalGuard, waves: [2, 5], start: 6 })
	bases.naga.addUnit({ uFour: UNIT_FOUR.DragonTurtle, waves: [1, 4], start: 9 })
	names.push(bases.naga.name)

	// Naga Creep Spawn
	bases.nagaCreep = new Spawn("nagaCreep")
	bases.nagaCreep.addBase(BASE_ALLIANCE.murloc)
	bases.nagaCreep.addBase(BASE_FEDERATION.murloc)
	bases.nagaCreep.addUnit({ uFour: UNIT_FOUR.NagaMyrmidon, waves: [1, 2, 3, 4], start: 2 })
	bases.nagaCreep.addUnit({ uFour: UNIT_FOUR.NagaSiren, waves: [2, 4], start: 3 })
	bases.nagaCreep.addUnit({ uFour: UNIT_FOUR.SnapDragon, waves: [2, 3, 4, 5, 6], start: 5 })
	names.push(bases.nagaCreep.name)

	// Night Elves Spawn
	bases.nightElves = new Spawn("nightElves")
	bases.nightElves.addBase(BASE_ALLIANCE.nightElves)
	bases.nightElves.addBase(BASE_FEDERATION.nightElves)
	bases.nightElves.addUnit({ uFour: UNIT_FOUR.NightElfRanger, waves: [1, 2, 3, 4, 5] })
	bases.nightElves.addUnit({ uFour: UNIT_FOUR.NightElfEliteRanger, waves: [1, 2, 3, 4, 5], start: 2 })
	bases.nightElves.addUnit({ uFour: UNIT_FOUR.NightElfSentry, waves: [7, 8, 9, 10], start: 2 })
	bases.nightElves.addUnit({ uFour: UNIT_FOUR.Dryad, waves: [7, 9, 10], start: 3 })
	bases.nightElves.addUnit({ uFour: UNIT_FOUR.DruidOfTheClaw, waves: [6, 7, 8, 9, 10], start: 4 })
	bases.nightElves.addUnit({ uFour: UNIT_FOUR.MountianGiant, waves: [5, 9], start: 5 })
	bases.nightElves.addUnit({ uFour: UNIT_FOUR.AncientProtector, waves: [5], start: 10 })
	names.push(bases.nightElves.name)

	// Orc Spawn
	bases.orc = new Spawn("orc")
	bases.orc.addBase(BASE_ALLIANCE.orc)
	bases.orc.addBase(BASE_FEDERATION.orc)
	bases.orc.addUnit({ uFour: UNIT_FOUR.Grunt, amount: 2, waves: [1, 3, 5, 6] })
	bases.orc.addUnit({ uFour: UNIT_FOUR.Grunt, waves: [2, 4, 6, 7], start: 3 })
	bases.orc.addUnit({ uFour: UNIT_FOUR.TrollAxethrower, waves: [2, 4, 6, 7], start: 2 })
	bases.orc.addUnit({ uFour: UNIT_FOUR.Ogre, amount: 2, waves: [2, 4, 6, 7], start: 4 })
	bases.orc.addUnit({ uFour: UNIT_FOUR.Warlock, waves: [3, 5, 7], start: 3 })
	bases.orc.addUnit({ uFour: UNIT_FOUR.OrcWarchief, waves: [1, 7], start: 6 })
	names.push(bases.orc.name)

	// Human Shipyard Spawn
	bases.humanShipyard = new Spawn("humanShipyard")
	bases.humanShipyard.addBase(BASE_ALLIANCE.humanShipyard)
	bases.humanShipyard.addBase(BASE_FEDERATION.humanShipyard)
	bases.humanShipyard.addUnit({ uFour: UNIT_FOUR.HumanFrigate, waves: [2], end: 2 })
	bases.humanShipyard.addUnit({ uFour: UNIT_FOUR.HumanFrigate, waves: [2, 4], start: 3, end: 4 })
	bases.humanShipyard.addUnit({ uFour: UNIT_FOUR.HumanFrigate, waves: [2, 4, 6], start: 5 })
	bases.humanShipyard.addUnit({ uFour: UNIT_FOUR.HumanBattleship, waves: [3], start: 6 })
	names.push(bases.humanShipyard.name)

	// Night Elf Shipyard Spawn
	bases.nightElfShipyard = new Spawn("nightElfShipyard")
	bases.nightElfShipyard.addBase(BASE_ALLIANCE.nightElfShipyard)
	bases.nightElfShipyard.addBase(BASE_FEDERATION.nightElfShipyard)
	bases.nightElfShipyard.addUnit({ uFour: UNIT_FOUR.NightElfFrigate, waves: [1], start: 2, end: 3 })
	bases.nightElfShipyard.addUnit({ uFour: UNIT_FOUR.NightElfFrigate, waves: [1, 3], start: 4, end: 5 })
	bases.nightElfShipyard.addUnit({ uFour: UNIT_FOUR.NightElfFrigate, waves: [1, 3, 6], start: 6 })
	bases.nightElfShipyard.addUnit({ uFour: UNIT_FOUR.NightElfBattleship, waves: [3], start: 7 })
	names.push(bases.nightElfShipyard.name)

	// Undead Spawn
	bases.undead = new Spawn("undead")
	bases.undead.addBase(BASE_ALLIANCE.undead)
	bases.undead.addBase(BASE_FEDERATION.undead)
	bases.undead.addUnit({ uFour: UNIT_FOUR.Ghoul, amount: 4, waves: [6, 7, 8, 9, 10] })
	bases.undead.addUnit({ uFour: UNIT_FOUR.SkeletonMage, waves: [6, 7, 8, 9, 10], start: 2 })
	bases.undead.addUnit({ uFour: UNIT_FOUR.Necromancer, waves: [5, 7, 9], start: 4 })
	bases.undead.addUnit({ uFour: UNIT_FOUR.EredarWarlock, waves: [7], start: 6 })
	bases.undead.addUnit({ uFour: UNIT_FOUR.GiantSkeleton, waves: [6, 9], start: 8 })
	bases.undead.addUnit({ uFour: UNIT_FOUR.InfernalContraption, waves: [5, 7], start: 3, end: 5 })
	bases.undead.addUnit({ uFour: UNIT_FOUR.InfernalMachine, waves: [5, 7], start: 6, end: 9 })
	bases.undead.addUnit({ uFour: UNIT_FOUR.InfernalJuggernaut, waves: [5, 7], start: 10 })
	names.push(bases.undead.name)

	export let maxLevel = 12
	export let maxWaves = 10
	export let unitDelay = 0.05
	export let baseDelay = 0.5
	export let waveDelay = 10
	export let cycleDelay = 1

	const spawnTimer = new Timer
	const levelTimer = new Timer

	let base = 0
	let unit = 0



	export function getSpawn(value: number) {
		return bases[names[value]]
	}

	export function start() {
		spawnTimer.start(2, false, iterateSpawn)
		levelTimer.start(60, false, upgradeLevel)
	}

	function iterateSpawn() {
		let curSpawn = getSpawn(base)

		// Spawn Units
		curSpawn.spawnUnit(unit)

		unit++

		// If unit is last unit in Base
		if (unit > curSpawn.countOfUnits) {
			unit = 0
			base++

			// Base is last Base in Wave
			if (base >= curSpawn.countOfBases) {
				base = 0
				Spawn.wave++

				// Wave is last Wave in Cycly
				if (Spawn.wave > maxWaves) {
					Spawn.wave = 1

					// New Cycle Time
					spawnTimer.start(cycleDelay, false, iterateSpawn)
				} else {

					// New Wave Time
					spawnTimer.start(waveDelay, false, iterateSpawn)
				}
			} else {

				// New Base Time
				spawnTimer.start(baseDelay, false, iterateSpawn)
			}
		} else {

			// New Unit Time
			spawnTimer.start(unitDelay, false, iterateSpawn)
		}
	}

	function upgradeLevel() {
		Spawn.level++

		// Set Spawn level if too high
		if (Spawn.level < maxLevel) {
			levelTimer.start((50 + (10 * Spawn.level)), false, upgradeLevel)
		}
		

	}
}



