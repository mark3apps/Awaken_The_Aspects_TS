import { Spawn } from "classes/spawn"
import { SpawnLoop, SpawnValues } from "lib/resources/spawnCheck"
import { Timer } from "lib/w3ts/index"
import { BASE, UNIT_TYPE } from "./index"



export let maxLevel: number
export let maxWaves: number

export let spawnTimer: Timer
export let levelTimer: Timer
export let check: SpawnValues
export let loop: SpawnLoop
export let spawns: string[]
export let units: number[]


export function define(): void {
	maxLevel = 12
	maxWaves = 10

	check = { levels: 12, waves: 10, level: 1, wave: 1, base: 0, unit: 0 }
	loop = { cycle: 1, wave: 10, base: 0.5, unit: 0.05 }
	spawns = []

	unitsInit()
}


//
//  Functions
//

export function addSpawn(value: string): void {
	spawns.push(value)
}

export function start(): void {

	spawnTimer = new Timer
	spawnTimer.start(1, false, iterate)

	levelTimer = new Timer
	levelTimer.start((50 + (10 * check.level)), false, levelUp)
}

function iterate(): void {

	try {

		const spawnName = spawns[check.base]

		const curSpawn: Spawn = BASE[spawnName]

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

				// Wave is last Wave in Cycle
				if (check.wave > check.waves) {
					check.wave = 1

					// New Cycle Time
					spawnTimer.start(loop.cycle, false, iterate)
				} else {

					// New Wave Time
					spawnTimer.start(loop.wave, false, iterate)
				}
			} else {

				// New Base Time
				spawnTimer.start(loop.base, false, iterate)
			}
		} else {

			// New Unit Time
			spawnTimer.start(loop.unit, false, iterate)
		}
	} catch (e) {
		print(e)
	}
}

function levelUp(): void {
	check.level++
	if (check.level > check.levels) {
		check.level = check.levels
	} else {
		print("Level Up")
		levelTimer.start((40 + (10 * check.level)), false, levelUp)
	}
}

function unitsInit(): void {
	units = [
		UNIT_TYPE.Arbalist.id,
		UNIT_TYPE.Assassin.id,
		UNIT_TYPE.Automation.id,
		UNIT_TYPE.Bandit.id,
		UNIT_TYPE.BanditLord.id,
		UNIT_TYPE.BanditSpearman.id,
		UNIT_TYPE.BattleGolem.id,
		UNIT_TYPE.BloodElfArcher.id,
		UNIT_TYPE.BloodElfBreaker.id,
		UNIT_TYPE.BloodElfMage.id,
		UNIT_TYPE.Captain1.id,
		UNIT_TYPE.Captain2.id,
		UNIT_TYPE.Catapult.id,
		UNIT_TYPE.Clockwerk.id,
		UNIT_TYPE.Commander.id,
		UNIT_TYPE.DraeneiDarkslayer.id,
		UNIT_TYPE.DraeneiDemolisher.id,
		UNIT_TYPE.DraeneiGuardian.id,
		UNIT_TYPE.DraeneiSeer.id,
		UNIT_TYPE.DraeneiVindicator.id,
		UNIT_TYPE.DragonHawk.id,
		UNIT_TYPE.DragonTurtle.id,
		UNIT_TYPE.DruidOfTheClaw.id,
		UNIT_TYPE.Dryad.id,
		UNIT_TYPE.DwarfAxethrower.id,
		UNIT_TYPE.DwarfClansman.id,
		UNIT_TYPE.DwarfElite.id,
		UNIT_TYPE.Enforcer.id,
		UNIT_TYPE.EredarWarlock.id,
		UNIT_TYPE.Footman1.id,
		UNIT_TYPE.Footman2.id,
		UNIT_TYPE.Ghoul.id,
		UNIT_TYPE.GiantSkeleton.id,
		UNIT_TYPE.Grunt.id,
		UNIT_TYPE.GryphonRider.id,
		UNIT_TYPE.Gyrocopter.id,
		UNIT_TYPE.InfernalContraption.id,
		UNIT_TYPE.InfernalJuggernaut.id,
		UNIT_TYPE.InfernalMachine.id,
		UNIT_TYPE.HighElfApprenticeSwordsman.id,
		UNIT_TYPE.HighElfArcher.id,
		UNIT_TYPE.HighElfGuardian.id,
		UNIT_TYPE.HighElfHealer.id,
		UNIT_TYPE.HighElfKnight.id,
		UNIT_TYPE.HighElfSwordsman.id,
		UNIT_TYPE.HumanBattleship.id,
		UNIT_TYPE.HumanFrigate.id,
		UNIT_TYPE.IronCaptain.id,
		UNIT_TYPE.IronGuard.id,
		UNIT_TYPE.IronMagi.id,
		UNIT_TYPE.IronMortarTeam.id,
		UNIT_TYPE.IronRifleman.id,
		UNIT_TYPE.Knight.id,
		UNIT_TYPE.MagiDefender.id,
		UNIT_TYPE.Militia1.id,
		UNIT_TYPE.Militia2.id,
		UNIT_TYPE.MountainGiant.id,
		UNIT_TYPE.MurlocCliffRunner.id,
		UNIT_TYPE.MurlocReaver.id,
		UNIT_TYPE.MurlocSnareCaster.id,
		UNIT_TYPE.MurlocTideWarrior.id,
		UNIT_TYPE.NagaMyrmidon.id,
		UNIT_TYPE.NagaSiren.id,
		UNIT_TYPE.NagaRoyalGuard.id,
		UNIT_TYPE.Necromancer.id,
		UNIT_TYPE.NightElfBattleship.id,
		UNIT_TYPE.NightElfFrigate.id,
		UNIT_TYPE.NightElfRanger.id,
		UNIT_TYPE.NightElfEliteRanger.id,
		UNIT_TYPE.NightElfSentry.id,
		UNIT_TYPE.Ogre.id,
		UNIT_TYPE.OrcWarchief.id,
		UNIT_TYPE.Rogue.id,
		UNIT_TYPE.SeigeEngine.id,
		UNIT_TYPE.SeigeEngineDamaged.id,
		UNIT_TYPE.SeigeGolem.id,
		UNIT_TYPE.SkeletonMage.id,
		UNIT_TYPE.SnapDragon.id,
		UNIT_TYPE.Sorceress.id,
		UNIT_TYPE.Summoner.id,
		UNIT_TYPE.SupremeWizard.id,
		UNIT_TYPE.StormSummoner.id,
		UNIT_TYPE.TrollAxethrower.id,
		UNIT_TYPE.WarGolem.id,
		UNIT_TYPE.Warlock.id,
		UNIT_TYPE.WaterElemental1.id,
		UNIT_TYPE.WaterElemental2.id,
		UNIT_TYPE.WaterElemental3.id,
	]
}

