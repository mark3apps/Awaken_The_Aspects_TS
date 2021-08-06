import { Spawn } from "classes/spawn"
import { SpawnLoop, SpawnValues } from "lib/resources/spawnCheck"
import { Timer } from "lib/w3ts/index"
import { FACTION } from "./bases"



export namespace SPAWN {

	export let maxLevel: number
	export let maxWaves: number

	export let spawnTimer: Timer
	export let levelTimer: Timer
	export let check: SpawnValues
	export let loop: SpawnLoop
	export let spawns: string[]

	export function define() {
		maxLevel = 12
		maxWaves = 10

		check = { levels: 12, waves: 10, level: 1, wave: 1, base: 0, unit: 0 }
		loop = { cycle: 1, wave: 10, base: 0.5, unit: 0.05 }
		spawns = []

		base.define()
	}

	export namespace base {
		export let arcane: Spawn
		export let arcaneCreep: Spawn
		export let arcaneHero: Spawn
		export let arcaneTop: Spawn
		export let arcaneBottom: Spawn
		export let highCity: Spawn
		export let castle: Spawn
		export let cityElves: Spawn
		export let cityFront: Spawn
		export let citySide: Spawn
		export let draenei: Spawn
		export let highElves: Spawn
		export let highElvesCreep: Spawn
		export let merc: Spawn
		export let dwarf: Spawn
		export let murloc: Spawn
		export let naga: Spawn
		export let nagaCreep: Spawn
		export let nightElves: Spawn
		export let orc: Spawn
		export let humanShipyard: Spawn
		export let nightElfShipyard: Spawn
		export let undead: Spawn

		export function define() {
			arcane = new Spawn("arcane")
			arcane.faction = FACTION.arcane
			arcane.addUnit({ uFour: UnitFour.Sorcress, waves: [6, 7, 8, 9, 10], start: 3 })
			arcane.addUnit({ uFour: UnitFour.StormSummoner, waves: [6, 7, 8, 9, 10], start: 5 })
			SPAWN.addSpawn(arcane.name)

			arcaneCreep = new Spawn("arcaneCreep")
			arcaneCreep.faction = FACTION.arcane
			arcaneCreep.addUnit({ uFour: UnitFour.BattleGolem, waves: [1, 2, 3, 4], start: 2 })
			arcaneCreep.addUnit({ uFour: UnitFour.WaterElemental2, waves: [1, 3], start: 3 })
			arcaneCreep.addUnit({ uFour: UnitFour.WaterElemental3, waves: [2, 3], start: 4 })
			arcaneCreep.addUnit({ uFour: UnitFour.MagiDefender, waves: [1, 2, 3, 5], start: 6 })
			SPAWN.addSpawn(arcaneCreep.name)

			// Arcane Hero Sapwn
			arcaneHero = new Spawn("arcaneHero")
			arcaneHero.faction = FACTION.arcaneHero
			arcaneHero.addUnit({ uFour: UnitFour.SupremeWizard, waves: [5], start: 7 })
			arcaneHero.addUnit({ uFour: UnitFour.SeigeGolem, waves: [4], start: 9 })
			SPAWN.addSpawn(arcaneHero.name)

			// Arcane Top Spawn
			arcaneTop = new Spawn("arcaneTop")
			arcaneTop.faction = FACTION.arcaneTop
			arcaneTop.addUnit({ uFour: UnitFour.BattleGolem, amount: 2, waves: [4, 5, 6] })
			arcaneTop.addUnit({ uFour: UnitFour.WaterElemental2, waves: [4, 6], start: 4 })
			arcaneTop.addUnit({ uFour: UnitFour.Summoner, waves: [4], start: 8 })
			SPAWN.addSpawn(arcaneTop.name)

			// Arcane Bottom Spawn
			arcaneBottom = new Spawn("arcaneBottom")
			arcaneBottom.faction = FACTION.arcaneBottom
			arcaneBottom.addUnit({ uFour: UnitFour.BattleGolem, amount: 2, waves: [1, 2, 3], start: 2 })
			arcaneBottom.addUnit({ uFour: UnitFour.WaterElemental2, waves: [1, 3], start: 4 })
			arcaneBottom.addUnit({ uFour: UnitFour.Summoner, waves: [1], start: 8 })
			SPAWN.addSpawn(arcaneBottom.name)

			// High City Spawn
			highCity = new Spawn("highCity")
			highCity.faction = FACTION.highCity
			highCity.addUnit({ uFour: UnitFour.Militia1, amount: 2, waves: [1, 2, 3, 4], end: 6 })
			highCity.addUnit({ uFour: UnitFour.Arbalist, waves: [1, 2], start: 3 })
			highCity.addUnit({ uFour: UnitFour.BloodElfBreaker, waves: [3, 4], start: 5 })
			highCity.addUnit({ uFour: UnitFour.Footman2, waves: [1, 2, 3, 4, 5], start: 8 })
			highCity.addUnit({ uFour: UnitFour.Captian1, waves: [1, 2, 3, 4, 5], start: 11 })
			SPAWN.addSpawn(highCity.name)

			// Castle Spawn
			castle = new Spawn("castle")
			castle.faction = FACTION.castle
			castle.addUnit({ uFour: UnitFour.Captian2, waves: [1, 2, 3], start: 8 })
			SPAWN.addSpawn(castle.name)

			// City Elves
			cityElves = new Spawn("cityElves")
			cityElves.faction = FACTION.cityElves
			cityElves.addUnit({ uFour: UnitFour.BloodElfArcher, waves: [1, 3, 5], end: 3 })
			cityElves.addUnit({ uFour: UnitFour.BloodElfArcher, waves: [1, 2, 3, 4, 5, 6], start: 4 })
			cityElves.addUnit({ uFour: UnitFour.BloodElfBreaker, waves: [1, 3, 4, 5, 6], start: 2, end: 3 })
			cityElves.addUnit({ uFour: UnitFour.BloodElfBreaker, waves: [1, 2, 3, 4, 5, 6, 7], start: 4, end: 5 })
			cityElves.addUnit({ uFour: UnitFour.BloodElfBreaker, amount: 2, waves: [1, 2, 3, 4, 5], start: 6 })
			cityElves.addUnit({ uFour: UnitFour.BloodElfMage, waves: [1, 4], start: 3, end: 6 })
			cityElves.addUnit({ uFour: UnitFour.BloodElfMage, waves: [1, 2, 3, 4, 5, 7], start: 7 })
			SPAWN.addSpawn(cityElves.name)

			// City Front Spawn
			cityFront = new Spawn("cityFront")
			cityFront.faction = FACTION.cityFront
			cityFront.addUnit({ uFour: UnitFour.Militia1, amount: 3, waves: [1, 2, 3, 4, 5, 6], end: 2 })
			cityFront.addUnit({ uFour: UnitFour.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6], start: 3, end: 4 })
			cityFront.addUnit({ uFour: UnitFour.Footman1, amount: 3, waves: [1, 2, 3, 4, 5, 6], start: 5 })
			cityFront.addUnit({ uFour: UnitFour.Captian1, amount: 2, waves: [3, 4, 6], start: 5 })
			cityFront.addUnit({ uFour: UnitFour.Knight, waves: [1, 3, 5], start: 6 })
			cityFront.addUnit({ uFour: UnitFour.Catapult, waves: [1, 4], start: 8 })
			cityFront.addUnit({ uFour: UnitFour.Commander, waves: [2], start: 10 })
			SPAWN.addSpawn(cityFront.name)

			// City Side Spawn
			citySide = new Spawn("citySide")
			citySide.faction = FACTION.citySide
			citySide.addUnit({ uFour: UnitFour.Militia1, waves: [6, 7, 8, 9, 10], end: 2 })
			citySide.addUnit({ uFour: UnitFour.Footman1, amount: 2, waves: [5, 6, 8, 9], start: 2, end: 3 })
			citySide.addUnit({ uFour: UnitFour.Footman1, amount: 3, waves: [5, 6, 8, 9], start: 4 })
			citySide.addUnit({ uFour: UnitFour.Knight, waves: [6, 8], start: 3, end: 4 })
			citySide.addUnit({ uFour: UnitFour.Knight, waves: [6, 7, 8, 9], start: 5 })
			citySide.addUnit({ uFour: UnitFour.Footman2, waves: [8, 10], start: 6 })
			citySide.addUnit({ uFour: UnitFour.Arbalist, waves: [4, 5, 6, 7, 8, 9], start: 3 })
			SPAWN.addSpawn(citySide.name)

			// Draenei Spawn
			draenei = new Spawn("draenei")
			draenei.faction = FACTION.draenei
			draenei.addUnit({ uFour: UnitFour.DraeneiGuardian, amount: 2, waves: [5, 6, 7, 8, 9, 10] })
			draenei.addUnit({ uFour: UnitFour.DraeneiGuardian, waves: [7, 8, 9], start: 5 })
			draenei.addUnit({ uFour: UnitFour.DraeneiDarkslayer, waves: [6, 7, 8, 9, 10], start: 3 })
			draenei.addUnit({ uFour: UnitFour.DraeneiSeer, waves: [7, 10], start: 4 })
			draenei.addUnit({ uFour: UnitFour.DraeneiVindicator, waves: [5, 6, 8], start: 7 })
			draenei.addUnit({ uFour: UnitFour.DraeneiDemolisher, waves: [6, 8, 10], start: 6 })
			SPAWN.addSpawn(draenei.name)

			// // High Elves
			highElves = new Spawn("highElves")
			highElves.faction = FACTION.highElves
			highElves.addUnit({ uFour: UnitFour.HighElfApprenticeSwordsman, waves: [1, 2, 3, 5], end: 3 })
			highElves.addUnit({ uFour: UnitFour.HighElfApprenticeSwordsman, waves: [1, 3], start: 4 })
			highElves.addUnit({ uFour: UnitFour.HighElfArcher, waves: [1, 3, 5], start: 2 })
			highElves.addUnit({ uFour: UnitFour.HighElfSwordsman, amount: 2, waves: [1, 2, 3, 4], start: 4 })
			highElves.addUnit({ uFour: UnitFour.HighElfHealer, waves: [1, 3, 5], start: 5 })
			highElves.addUnit({ uFour: UnitFour.DragonHawk, waves: [1, 2, 3, 5], start: 6 })
			highElves.addUnit({ uFour: UnitFour.HighElfKnight, waves: [1, 3, 5], start: 7 })
			SPAWN.addSpawn(highElves.name)

			// // High Elves Creep
			highElvesCreep = new Spawn("highElvesCreep")
			highElvesCreep.faction = FACTION.highElvesCreep
			highElvesCreep.addUnit({ uFour: UnitFour.HighElfSwordsman, waves: [1, 2, 3, 4], end: 2 })
			highElvesCreep.addUnit({ uFour: UnitFour.HighElfSwordsman, waves: [1, 2, 3, 4], start: 3 })
			highElvesCreep.addUnit({ uFour: UnitFour.HighElfArcher, waves: [1, 3, 5], start: 2 })
			highElvesCreep.addUnit({ uFour: UnitFour.HighElfHealer, waves: [1, 3], start: 4 })
			highElvesCreep.addUnit({ uFour: UnitFour.HighElfGuardian, amount: 2, waves: [1, 3, 5], start: 5 })
			SPAWN.addSpawn(highElvesCreep.name)

			// Merc Spawn
			merc = new Spawn("merc")
			merc.faction = FACTION.merc
			merc.addUnit({ uFour: UnitFour.Rogue, amount: 2, waves: [1, 2, 3, 4, 5, 6] })
			merc.addUnit({ uFour: UnitFour.BanditSpearman, waves: [2, 3, 4, 5, 6, 7, 8], start: 2 })
			merc.addUnit({ uFour: UnitFour.Bandit, amount: 2, waves: [1, 2, 3, 5, 6], start: 3 })
			merc.addUnit({ uFour: UnitFour.Enforcer, waves: [2, 5], start: 4 })
			merc.addUnit({ uFour: UnitFour.Assassin, waves: [3, 5, 7], start: 5 })
			merc.addUnit({ uFour: UnitFour.BanditLord, waves: [1, 5], start: 6 })
			SPAWN.addSpawn(merc.name)

			// Dwarf Spawn
			dwarf = new Spawn("dwarf")
			dwarf.faction = FACTION.dwarf
			dwarf.addUnit({ uFour: UnitFour.IronGuard, amount: 2, waves: [1, 2, 3, 5, 6], end: 1 })
			dwarf.addUnit({ uFour: UnitFour.IronGuard, amount: 3, waves: [1, 2, 3, 4, 5, 6, 7], start: 2 })
			dwarf.addUnit({ uFour: UnitFour.IronMorterTeam, waves: [2, 4, 6], start: 2 })
			dwarf.addUnit({ uFour: UnitFour.IronRifleman, waves: [1, 2, 3, 4, 5, 6], start: 3 })
			dwarf.addUnit({ uFour: UnitFour.IronCaptian, waves: [1, 2, 3, 4], start: 5 })
			dwarf.addUnit({ uFour: UnitFour.IronMagi, waves: [1, 2, 3, 4], start: 6 })
			dwarf.addUnit({ uFour: UnitFour.GryphonRider, waves: [1, 2, 3, 4], start: 8 })
			dwarf.addUnit({ uFour: UnitFour.SeigeEngine, waves: [2, 5], start: 6 })
			dwarf.addUnit({ uFour: UnitFour.Automation, waves: [1, 3, 6], start: 7 })
			SPAWN.addSpawn(dwarf.name)

			// Murloc Spawn
			murloc = new Spawn("murloc")
			murloc.faction = FACTION.murloc
			murloc.addUnit({ uFour: UnitFour.MurlocCliffrunner, amount: 3, waves: [5, 6, 7, 9, 10] })
			murloc.addUnit({ uFour: UnitFour.MurlocReaver, waves: [5, 7], start: 2 })
			murloc.addUnit({ uFour: UnitFour.MurlocSnarecaster, waves: [6, 8, 10], start: 3 })
			murloc.addUnit({ uFour: UnitFour.MurlocTidewarrior, waves: [4, 8], start: 6 })
			SPAWN.addSpawn(murloc.name)

			// Naga Spawn
			naga = new Spawn("naga")
			naga.faction = FACTION.murloc
			naga.addUnit({ uFour: UnitFour.NagaMyrmidon, waves: [1, 3], end: 3 })
			naga.addUnit({ uFour: UnitFour.NagaMyrmidon, waves: [1, 2, 3, 4], start: 4, end: 5 })
			naga.addUnit({ uFour: UnitFour.NagaMyrmidon, waves: [1, 2, 3, 4, 5, 6], start: 6 })
			naga.addUnit({ uFour: UnitFour.NagaSiren, waves: [2, 4, 6], start: 3 })
			naga.addUnit({ uFour: UnitFour.NagaRoyalGuard, waves: [2, 5], start: 6 })
			naga.addUnit({ uFour: UnitFour.DragonTurtle, waves: [1, 4], start: 9 })
			SPAWN.addSpawn(naga.name)

			// Naga Creep Spawn
			nagaCreep = new Spawn("nagaCreep")
			nagaCreep.faction = FACTION.murloc
			nagaCreep.addUnit({ uFour: UnitFour.NagaMyrmidon, waves: [1, 2, 3, 4], start: 2 })
			nagaCreep.addUnit({ uFour: UnitFour.NagaSiren, waves: [2, 4], start: 3 })
			nagaCreep.addUnit({ uFour: UnitFour.SnapDragon, waves: [2, 3, 4, 5, 6], start: 5 })
			SPAWN.addSpawn(nagaCreep.name)

			// Night Elves Spawn
			nightElves = new Spawn("nightElves")
			nightElves.faction = FACTION.nightElves
			nightElves.addUnit({ uFour: UnitFour.NightElfRanger, waves: [1, 2, 3, 4, 5] })
			nightElves.addUnit({ uFour: UnitFour.NightElfEliteRanger, waves: [1, 2, 3, 4, 5], start: 2 })
			nightElves.addUnit({ uFour: UnitFour.NightElfSentry, waves: [7, 8, 9, 10], start: 2 })
			nightElves.addUnit({ uFour: UnitFour.Dryad, waves: [7, 9, 10], start: 3 })
			nightElves.addUnit({ uFour: UnitFour.DruidOfTheClaw, waves: [6, 7, 8, 9, 10], start: 4 })
			nightElves.addUnit({ uFour: UnitFour.MountianGiant, waves: [5, 9], start: 5 })
			nightElves.addUnit({ uFour: UnitFour.AncientProtector, waves: [5], start: 10 })
			SPAWN.addSpawn(nightElves.name)

			// Orc Spawn
			orc = new Spawn("orc")
			orc.faction = FACTION.orc
			orc.addUnit({ uFour: UnitFour.Grunt, amount: 2, waves: [1, 3, 5, 6] })
			orc.addUnit({ uFour: UnitFour.Grunt, waves: [2, 4, 6, 7], start: 3 })
			orc.addUnit({ uFour: UnitFour.TrollAxethrower, waves: [2, 4, 6, 7], start: 2 })
			orc.addUnit({ uFour: UnitFour.Ogre, amount: 2, waves: [2, 4, 6, 7], start: 4 })
			orc.addUnit({ uFour: UnitFour.Warlock, waves: [3, 5, 7], start: 3 })
			orc.addUnit({ uFour: UnitFour.OrcWarchief, waves: [1, 7], start: 6 })
			SPAWN.addSpawn(orc.name)

			// Human Shipyard Spawn
			humanShipyard = new Spawn("humanShipyard")
			humanShipyard.faction = FACTION.humanShipyard
			humanShipyard.addUnit({ uFour: UnitFour.HumanFrigate, waves: [2], end: 2 })
			humanShipyard.addUnit({ uFour: UnitFour.HumanFrigate, waves: [2, 4], start: 3, end: 4 })
			humanShipyard.addUnit({ uFour: UnitFour.HumanFrigate, waves: [2, 4, 6], start: 5 })
			humanShipyard.addUnit({ uFour: UnitFour.HumanBattleship, waves: [3], start: 6 })
			SPAWN.addSpawn(humanShipyard.name)

			// Night Elf Shipyard Spawn
			nightElfShipyard = new Spawn("nightElfShipyard")
			nightElfShipyard.faction = FACTION.nightElfShipyard
			nightElfShipyard.addUnit({ uFour: UnitFour.NightElfFrigate, waves: [1], start: 2, end: 3 })
			nightElfShipyard.addUnit({ uFour: UnitFour.NightElfFrigate, waves: [1, 3], start: 4, end: 5 })
			nightElfShipyard.addUnit({ uFour: UnitFour.NightElfFrigate, waves: [1, 3, 6], start: 6 })
			nightElfShipyard.addUnit({ uFour: UnitFour.NightElfBattleship, waves: [3], start: 7 })
			SPAWN.addSpawn(nightElfShipyard.name)

			// Undead Spawn
			undead = new Spawn("undead")
			undead.faction = FACTION.undead
			undead.addUnit({ uFour: UnitFour.Ghoul, amount: 4, waves: [6, 7, 8, 9, 10] })
			undead.addUnit({ uFour: UnitFour.SkeletonMage, waves: [6, 7, 8, 9, 10], start: 2 })
			undead.addUnit({ uFour: UnitFour.Necromancer, waves: [5, 7, 9], start: 4 })
			undead.addUnit({ uFour: UnitFour.EredarWarlock, waves: [7], start: 6 })
			undead.addUnit({ uFour: UnitFour.GiantSkeleton, waves: [6, 9], start: 8 })
			undead.addUnit({ uFour: UnitFour.InfernalContraption, waves: [5, 7], start: 3, end: 5 })
			undead.addUnit({ uFour: UnitFour.InfernalMachine, waves: [5, 7], start: 6, end: 9 })
			undead.addUnit({ uFour: UnitFour.InfernalJuggernaut, waves: [5, 7], start: 10 })
			SPAWN.addSpawn(undead.name)
		}

	}


	export function addSpawn(value: string) {
		spawns.push(value)
	}

	export function start() {

		spawnTimer = new Timer
		spawnTimer.start(1, false, SPAWN.iterate)

		levelTimer = new Timer
		levelTimer.start((50 + (10 * check.level)), false, levelUp)
	}

	export function iterate() {

		try {

			let spawnName = spawns[check.base]

			let curSpawn: Spawn = base[spawnName]

			// Spawn Units
			curSpawn.spawnUnit(check)

			check.unit++

			// If unit is last unit in Base
			if (check.unit > curSpawn.countOfUnits - 1) {
				check.unit = 0
				check.base++

				// Base is last Base in Wave
				if (check.base >= spawns.length) {
					check.base = 0
					check.wave++

					// Wave is last Wave in Cycly
					if (check.wave > check.waves) {
						check.wave = 1

						// New Cycle Time
						spawnTimer.start(loop.cycle, false, SPAWN.iterate)
					} else {

						// New Wave Time
						spawnTimer.start(loop.wave, false, SPAWN.iterate)
					}
				} else {

					// New Base Time
					spawnTimer.start(loop.base, false, SPAWN.iterate)
				}
			} else {

				// New Unit Time
				spawnTimer.start(loop.unit, false, SPAWN.iterate)
			}
		} catch (e) {
			print(e)
		}
	}

	export function levelUp() {
		check.level++
		if (check.level > check.levels) {
			check.level = check.levels
		} else {
			print("Level Up")
			levelTimer.start((40 + (10 * check.level)), false, levelUp)
		}
	}
}






