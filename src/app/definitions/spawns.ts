import { Spawn } from "classes/spawn"
import { SpawnLoop, SpawnValues } from "lib/resources/spawnCheck"
import { UNIT_TYPE } from "app/definitions/unitTypes"
import { Timer } from "lib/w3ts/index"
import { FACTION } from "./factions"



export namespace SPAWN {

	export let maxLevel: number
	export let maxWaves: number

	export let spawnTimer: Timer
	export let levelTimer: Timer
	export let check: SpawnValues
	export let loop: SpawnLoop
	export let spawns: string[]

	export const define = (): void => {
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
		export let draenei: Spawn
		export let highElves: Spawn
		export let highElvesCreep: Spawn
		export let merc: Spawn
		export let dwarf: Spawn
		export let murloc: Spawn
		export let naga: Spawn
		export let nagaCreep: Spawn
		export let nightElf: Spawn
		export let tree: Spawn
		export let orc: Spawn
		export let humanShipyard: Spawn
		export let nightElfShipyard: Spawn
		export let undead: Spawn

		export const define = (): void => {
			arcane = new Spawn("arcane")
			arcane.faction = FACTION.arcane
			arcane.addUnit({ unitType: UNIT_TYPE.Sorceress, waves: [6, 7, 8, 9, 10], start: 3 })
			arcane.addUnit({ unitType: UNIT_TYPE.StormSummoner, waves: [6, 7, 8, 9, 10], start: 5 })
			arcane.addUnit({ unitType: UNIT_TYPE.MagiDefender, waves: [6, 8], start: 7 })
			SPAWN.addSpawn(arcane.name)

			arcaneCreep = new Spawn("arcaneCreep")
			arcaneCreep.faction = FACTION.arcaneCreep
			arcaneCreep.addUnit({ unitType: UNIT_TYPE.BattleGolem, waves: [1, 2, 3, 4], start: 2 })
			arcaneCreep.addUnit({ unitType: UNIT_TYPE.WaterElemental2, waves: [1, 3], start: 3 })
			arcaneCreep.addUnit({ unitType: UNIT_TYPE.WaterElemental3, waves: [2, 3], start: 4 })
			arcaneCreep.addUnit({ unitType: UNIT_TYPE.MagiDefender, waves: [1, 2, 3, 5], start: 6 })
			SPAWN.addSpawn(arcaneCreep.name)

			// Arcane Hero Spawn
			arcaneHero = new Spawn("arcaneHero")
			arcaneHero.faction = FACTION.arcaneHero
			arcaneHero.addUnit({ unitType: UNIT_TYPE.MagiDefender, waves: [1, 2, 3, 5], start: 6 })
			arcaneHero.addUnit({ unitType: UNIT_TYPE.SupremeWizard, waves: [5], start: 7 })
			arcaneHero.addUnit({ unitType: UNIT_TYPE.SeigeGolem, waves: [4], start: 9 })

			SPAWN.addSpawn(arcaneHero.name)

			// Arcane Top Spawn
			arcaneTop = new Spawn("arcaneTop")
			arcaneTop.faction = FACTION.arcaneTop
			arcaneTop.addUnit({ unitType: UNIT_TYPE.BattleGolem, amount: 2, waves: [4, 5, 6] })
			arcaneTop.addUnit({ unitType: UNIT_TYPE.WaterElemental2, waves: [4, 6], start: 4 })
			arcaneTop.addUnit({ unitType: UNIT_TYPE.Summoner, waves: [4], start: 8 })
			SPAWN.addSpawn(arcaneTop.name)

			// Arcane Bottom Spawn
			arcaneBottom = new Spawn("arcaneBottom")
			arcaneBottom.faction = FACTION.arcaneBottom
			arcaneBottom.addUnit({ unitType: UNIT_TYPE.BattleGolem, amount: 2, waves: [1, 2, 3], start: 2 })
			arcaneBottom.addUnit({ unitType: UNIT_TYPE.WaterElemental2, waves: [1, 3], start: 4 })
			arcaneBottom.addUnit({ unitType: UNIT_TYPE.Summoner, waves: [1], start: 8 })
			SPAWN.addSpawn(arcaneBottom.name)

			// High City Spawn
			highCity = new Spawn("highCity")
			highCity.faction = FACTION.highCity
			highCity.addUnit({ unitType: UNIT_TYPE.Militia1, amount: 3, waves: [1, 2, 3, 4, 5, 6], end: 7 })
			highCity.addUnit({ unitType: UNIT_TYPE.Arbalist, waves: [1, 2, 3, 4, 5, 6], start: 1 })
			highCity.addUnit({ unitType: UNIT_TYPE.Arbalist, waves: [1, 2, 3, 4], start: 5 })
			highCity.addUnit({ unitType: UNIT_TYPE.Footman1, waves: [1, 2, 3, 4], start: 4 })
			highCity.addUnit({ unitType: UNIT_TYPE.Footman2, amount: 2, waves: [1, 2, 3, 4], start: 8 })
			highCity.addUnit({ unitType: UNIT_TYPE.Captain1, amount: 1, waves: [1, 2, 3, 4], start: 9 })
			SPAWN.addSpawn(highCity.name)

			// Castle Spawn
			castle = new Spawn("castle")
			castle.faction = FACTION.castle
			castle.addUnit({ unitType: UNIT_TYPE.Captain2, waves: [1, 2, 3], start: 8 })
			SPAWN.addSpawn(castle.name)

			// City Elves
			cityElves = new Spawn("cityElves")
			cityElves.faction = FACTION.cityElves
			cityElves.addUnit({ unitType: UNIT_TYPE.BloodElfArcher, waves: [1, 3, 5], end: 1 })
			cityElves.addUnit({ unitType: UNIT_TYPE.BloodElfArcher, waves: [1, 2, 3, 4, 5, 6], start: 2 })
			cityElves.addUnit({ unitType: UNIT_TYPE.BloodElfArcher, waves: [2, 3, 4, 5], start: 4 })
			cityElves.addUnit({ unitType: UNIT_TYPE.BloodElfBreaker, waves: [1, 3, 4, 5, 6], start: 2, end: 3 })
			cityElves.addUnit({ unitType: UNIT_TYPE.BloodElfBreaker, waves: [1, 2, 3, 4, 5, 6, 7], start: 4, end: 5 })
			cityElves.addUnit({ unitType: UNIT_TYPE.BloodElfBreaker, amount: 2, waves: [1, 2, 3, 4, 5], start: 6 })
			cityElves.addUnit({ unitType: UNIT_TYPE.BloodElfMage, waves: [1, 4], start: 3, end: 6 })
			cityElves.addUnit({ unitType: UNIT_TYPE.BloodElfMage, waves: [1, 2, 3, 4, 5, 7], start: 7 })
			SPAWN.addSpawn(cityElves.name)

			// City Front Spawn
			cityFront = new Spawn("cityFront")
			cityFront.faction = FACTION.cityFront
			cityFront.addUnit({ unitType: UNIT_TYPE.Militia1, amount: 3, waves: [1, 2, 3, 4, 5, 6], end: 2 })
			cityFront.addUnit({ unitType: UNIT_TYPE.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6, 7], start: 3, end: 4 })
			cityFront.addUnit({ unitType: UNIT_TYPE.Footman1, amount: 3, waves: [1, 2, 3, 4, 5, 6, 7], start: 5 })
			cityFront.addUnit({ unitType: UNIT_TYPE.Captain1, amount: 2, waves: [3, 4, 6, 7], start: 5 })
			cityFront.addUnit({ unitType: UNIT_TYPE.Knight, waves: [1, 3, 5, 7], start: 6 })
			cityFront.addUnit({ unitType: UNIT_TYPE.Catapult, waves: [1, 4], start: 6 })
			cityFront.addUnit({ unitType: UNIT_TYPE.Commander, waves: [2], start: 10 })
			SPAWN.addSpawn(cityFront.name)

			// Draenei Spawn
			draenei = new Spawn("draenei")
			draenei.faction = FACTION.draenei
			draenei.addUnit({ unitType: UNIT_TYPE.DraeneiGuardian, amount: 2, waves: [5, 6, 7, 8, 9, 10] })
			draenei.addUnit({ unitType: UNIT_TYPE.DraeneiGuardian, waves: [7, 8, 9], start: 5 })
			draenei.addUnit({ unitType: UNIT_TYPE.DraeneiDarkslayer, waves: [6, 7, 8, 9, 10], start: 3 })
			draenei.addUnit({ unitType: UNIT_TYPE.DraeneiSeer, waves: [7, 10], start: 4 })
			draenei.addUnit({ unitType: UNIT_TYPE.DraeneiVindicator, waves: [5, 6, 8], start: 7 })
			draenei.addUnit({ unitType: UNIT_TYPE.DraeneiDemolisher, waves: [6, 8, 10], start: 6 })
			SPAWN.addSpawn(draenei.name)

			// High Elves
			highElves = new Spawn("highElves")
			highElves.faction = FACTION.highElves
			highElves.addUnit({ unitType: UNIT_TYPE.HighElfApprenticeSwordsman, waves: [1, 2, 3, 5], end: 3 })
			highElves.addUnit({ unitType: UNIT_TYPE.HighElfApprenticeSwordsman, waves: [1, 3], start: 4 })
			highElves.addUnit({ unitType: UNIT_TYPE.HighElfArcher, waves: [1, 3, 5], start: 2 })
			highElves.addUnit({ unitType: UNIT_TYPE.HighElfSwordsman, amount: 2, waves: [1, 2, 3, 4], start: 4 })
			highElves.addUnit({ unitType: UNIT_TYPE.HighElfHealer, waves: [1, 3, 5], start: 5 })
			highElves.addUnit({ unitType: UNIT_TYPE.DragonHawk, amount: 2, waves: [2, 3, 5], start: 6 })
			highElves.addUnit({ unitType: UNIT_TYPE.HighElfKnight, waves: [1, 3, 5], start: 7 })
			SPAWN.addSpawn(highElves.name)

			// High Elves Creep
			highElvesCreep = new Spawn("highElvesCreep")
			highElvesCreep.faction = FACTION.highElvesCreep
			highElvesCreep.addUnit({ unitType: UNIT_TYPE.HighElfSwordsman, waves: [1, 2, 3, 4], end: 2 })
			highElvesCreep.addUnit({ unitType: UNIT_TYPE.HighElfSwordsman, waves: [1, 2, 3, 4], start: 3 })
			highElvesCreep.addUnit({ unitType: UNIT_TYPE.HighElfArcher, waves: [1, 3, 5], start: 2 })
			highElvesCreep.addUnit({ unitType: UNIT_TYPE.HighElfHealer, waves: [1, 3], start: 4 })
			highElvesCreep.addUnit({ unitType: UNIT_TYPE.HighElfGuardian, amount: 2, waves: [1, 3, 5], start: 5 })
			SPAWN.addSpawn(highElvesCreep.name)

			// Merc Spawn
			merc = new Spawn("merc")
			merc.faction = FACTION.merc
			merc.addUnit({ unitType: UNIT_TYPE.Rogue, amount: 2, waves: [4, 5, 6, 7] })
			merc.addUnit({ unitType: UNIT_TYPE.BanditSpearman, waves: [3, 4, 5, 6, 7, 8, 9], start: 2 })
			merc.addUnit({ unitType: UNIT_TYPE.Bandit, amount: 2, waves: [3, 5, 6, 7], start: 3 })
			merc.addUnit({ unitType: UNIT_TYPE.Enforcer, waves: [3, 5], start: 4 })
			merc.addUnit({ unitType: UNIT_TYPE.Assassin, waves: [5, 6, 7], start: 5 })
			merc.addUnit({ unitType: UNIT_TYPE.BanditLord, waves: [3, 5], start: 6 })
			SPAWN.addSpawn(merc.name)

			// Dwarf Spawn
			dwarf = new Spawn("dwarf")
			dwarf.faction = FACTION.dwarf
			dwarf.addUnit({ unitType: UNIT_TYPE.IronGuard, amount: 2, waves: [1, 2, 3, 5, 6], end: 1 })
			dwarf.addUnit({ unitType: UNIT_TYPE.IronGuard, amount: 3, waves: [1, 2, 3, 4, 5, 6, 7], start: 2 })
			dwarf.addUnit({ unitType: UNIT_TYPE.IronRifleman, waves: [1, 2, 3, 4, 5, 6], start: 2 })
			dwarf.addUnit({ unitType: UNIT_TYPE.IronMortarTeam, waves: [2, 3, 4, 6], start: 3 })
			dwarf.addUnit({ unitType: UNIT_TYPE.IronCaptain, waves: [1, 2, 3, 4, 5, 6], start: 4 })
			dwarf.addUnit({ unitType: UNIT_TYPE.IronMagi, waves: [1, 2, 3, 4], start: 5 })
			dwarf.addUnit({ unitType: UNIT_TYPE.SeigeEngine, waves: [1, 2, 5], start: 6 })
			dwarf.addUnit({ unitType: UNIT_TYPE.GryphonRider, waves: [1, 2, 3, 4, 5], start: 8 })
			SPAWN.addSpawn(dwarf.name)

			// Murloc Spawn
			murloc = new Spawn("murloc")
			murloc.faction = FACTION.murloc
			murloc.addUnit({ unitType: UNIT_TYPE.MurlocCliffRunner, amount: 3, waves: [5, 6, 7, 10] })
			murloc.addUnit({ unitType: UNIT_TYPE.MurlocReaver, waves: [5, 7], start: 3 })
			murloc.addUnit({ unitType: UNIT_TYPE.MurlocSnareCaster, waves: [6, 8, 10], start: 4 })
			murloc.addUnit({ unitType: UNIT_TYPE.MurlocTideWarrior, waves: [4, 8], start: 7 })
			SPAWN.addSpawn(murloc.name)

			// Naga Spawn
			naga = new Spawn("naga")
			naga.faction = FACTION.naga
			naga.addUnit({ unitType: UNIT_TYPE.NagaMyrmidon, waves: [1, 3], end: 3 })
			naga.addUnit({ unitType: UNIT_TYPE.NagaMyrmidon, waves: [1, 2, 3, 4], start: 4, end: 6 })
			naga.addUnit({ unitType: UNIT_TYPE.NagaMyrmidon, waves: [1, 2, 3, 4, 5, 6], start: 7 })
			naga.addUnit({ unitType: UNIT_TYPE.NagaSiren, waves: [2, 4, 6], start: 3 })
			naga.addUnit({ unitType: UNIT_TYPE.NagaRoyalGuard, waves: [2, 5], start: 6 })
			naga.addUnit({ unitType: UNIT_TYPE.DragonTurtle, waves: [1, 4], start: 9 })
			SPAWN.addSpawn(naga.name)

			// Naga Creep Spawn
			nagaCreep = new Spawn("nagaCreep")
			nagaCreep.faction = FACTION.nagaCreep
			nagaCreep.addUnit({ unitType: UNIT_TYPE.NagaMyrmidon, waves: [1, 2, 3, 4], start: 2 })
			nagaCreep.addUnit({ unitType: UNIT_TYPE.NagaMyrmidon, waves: [1, 2], start: 4 })
			nagaCreep.addUnit({ unitType: UNIT_TYPE.NagaSiren, waves: [2, 4], start: 3 })
			nagaCreep.addUnit({ unitType: UNIT_TYPE.SnapDragon, waves: [2, 3, 4, 5, 6], start: 5 })
			SPAWN.addSpawn(nagaCreep.name)

			// Tree Spawn
			tree = new Spawn("tree")
			tree.faction = FACTION.tree
			tree.addUnit({ unitType: UNIT_TYPE.Dryad, waves: [7, 8, 9, 10], start: 3 })
			tree.addUnit({ unitType: UNIT_TYPE.DruidOfTheClaw, waves: [6, 7, 8, 9, 10], start: 4 })
			tree.addUnit({ unitType: UNIT_TYPE.MountainGiant, waves: [5, 9], start: 5 })
			tree.addUnit({ unitType: UNIT_TYPE.AncientOfLife, waves: [5, 8], start: 6 })
			tree.addUnit({ unitType: UNIT_TYPE.AncientOfWar, waves: [3], start: 10 })
			SPAWN.addSpawn(tree.name)

			// Night Elves Spawn
			nightElf = new Spawn("nightElf")
			nightElf.faction = FACTION.nightElf
			nightElf.addUnit({ unitType: UNIT_TYPE.NightElfRanger, waves: [5, 6, 7, 8, 9, 10] })
			nightElf.addUnit({ unitType: UNIT_TYPE.NightElfEliteRanger, waves: [6, 7, 8, 9, 10], start: 2 })
			nightElf.addUnit({ unitType: UNIT_TYPE.NightElfSentry, waves: [6, 7, 8, 9, 10], start: 2 })
			nightElf.addUnit({ unitType: UNIT_TYPE.NightElfSentry, waves: [7, 8, 9], start: 4 })
			nightElf.addUnit({ unitType: UNIT_TYPE.NightElfWarden, waves: [6, 7, 8, 9, 10], start: 5 })
			nightElf.addUnit({ unitType: UNIT_TYPE.HippogryphRider, amount: 2, waves: [4, 6, 7], start: 6 })
			SPAWN.addSpawn(nightElf.name)

			// Orc Spawn
			orc = new Spawn("orc")
			orc.faction = FACTION.orc
			orc.addUnit({ unitType: UNIT_TYPE.Grunt, amount: 2, waves: [1, 3, 5, 6] })
			orc.addUnit({ unitType: UNIT_TYPE.Grunt, waves: [2, 4, 6, 7], start: 3 })
			orc.addUnit({ unitType: UNIT_TYPE.TrollAxethrower, waves: [2, 4, 6, 7], start: 2 })
			orc.addUnit({ unitType: UNIT_TYPE.Ogre, amount: 2, waves: [2, 4, 6, 7], start: 4 })
			orc.addUnit({ unitType: UNIT_TYPE.Warlock, waves: [3, 5, 7], start: 3 })
			orc.addUnit({ unitType: UNIT_TYPE.OrcWarchief, waves: [1, 7], start: 6 })
			SPAWN.addSpawn(orc.name)

			// Human Shipyard Spawn
			humanShipyard = new Spawn("humanShipyard")
			humanShipyard.faction = FACTION.humanShipyard
			humanShipyard.addUnit({ unitType: UNIT_TYPE.HumanFrigate, waves: [2], end: 2 })
			humanShipyard.addUnit({ unitType: UNIT_TYPE.HumanFrigate, waves: [2, 6], start: 3, end: 5 })
			humanShipyard.addUnit({ unitType: UNIT_TYPE.HumanFrigate, waves: [2, 4, 7], start: 6, end: 8 })
			humanShipyard.addUnit({ unitType: UNIT_TYPE.HumanFrigate, waves: [2, 4, 6, 7], start: 9 })
			humanShipyard.addUnit({ unitType: UNIT_TYPE.HumanBattleship, waves: [3], start: 5, end: 7 })
			humanShipyard.addUnit({ unitType: UNIT_TYPE.HumanBattleship, waves: [3, 5], start: 8 })
			SPAWN.addSpawn(humanShipyard.name)

			// Night Elf Shipyard Spawn
			nightElfShipyard = new Spawn("nightElfShipyard")
			nightElfShipyard.faction = FACTION.nightElfShipyard
			nightElfShipyard.addUnit({ unitType: UNIT_TYPE.NightElfFrigate, waves: [3], end: 3 })
			nightElfShipyard.addUnit({ unitType: UNIT_TYPE.NightElfFrigate, waves: [1, 3], start: 4, end: 5 })
			nightElfShipyard.addUnit({ unitType: UNIT_TYPE.NightElfFrigate, waves: [1, 3, 6], start: 6 })
			nightElfShipyard.addUnit({ unitType: UNIT_TYPE.NightElfBattleship, waves: [3], start: 7 })
			SPAWN.addSpawn(nightElfShipyard.name)

			// Undead Spawn
			undead = new Spawn("undead")
			undead.faction = FACTION.undead
			undead.addUnit({ unitType: UNIT_TYPE.Ghoul, amount: 4, waves: [4, 5, 6, 7, 8] })
			undead.addUnit({ unitType: UNIT_TYPE.Necromancer, waves: [4, 6, 8], start: 2 })
			undead.addUnit({ unitType: UNIT_TYPE.Lich, waves: [5, 7, 9], start: 4 })
			undead.addUnit({ unitType: UNIT_TYPE.EredarWarlock, waves: [6], start: 6 })
			undead.addUnit({ unitType: UNIT_TYPE.GiantSkeleton, waves: [4, 6], start: 8 })
			undead.addUnit({ unitType: UNIT_TYPE.InfernalContraption, waves: [5, 7], start: 3, end: 5 })
			undead.addUnit({ unitType: UNIT_TYPE.InfernalMachine, waves: [5, 7], start: 6, end: 9 })
			undead.addUnit({ unitType: UNIT_TYPE.InfernalJuggernaut, waves: [5, 7], start: 10 })
			SPAWN.addSpawn(undead.name)
		}

	}


	export const addSpawn = (value: string): void => {
		spawns.push(value)
	}

	export const start = (): void => {

		spawnTimer = new Timer
		spawnTimer.start(1, false, SPAWN.iterate)

		levelTimer = new Timer
		levelTimer.start((50 + (10 * check.level)), false, levelUp)
	}

	export const iterate = (): void => {

		try {

			const spawnName = spawns[check.base]

			const curSpawn: Spawn = base[spawnName]

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

	export const levelUp = (): number => {
		check.level++
		if (check.level > check.levels) {
			check.level = check.levels
		} else {
			print("Level Up")

			levelTimer.start((50 + (15 * check.level)), false, levelUp)
		}
		return check.level
	}
}






