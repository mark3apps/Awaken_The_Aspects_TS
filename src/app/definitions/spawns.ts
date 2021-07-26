import { Spawn } from "src/app/classes/spawn";
import { BASE_ALLIANCE, BASE_FEDERATION } from "src/lib/globals";
import { Timer } from "w3ts/handles/timer";

interface SpawnBases {
	bases: {[name: string]: Spawn},
	names: Array<string>
}

export declare const SPAWN: SpawnBases


export function declareSpawns() {

	SPAWN.bases.arcane = new Spawn("arcane")
	SPAWN.bases.arcane.addBase(BASE_ALLIANCE.arcane)
	SPAWN.bases.arcane.addBase(BASE_FEDERATION.arcane)
	SPAWN.bases.arcane.addUnit({ uFour: UNIT_FOUR.Sorcress, waves: [6, 7, 8, 9, 10], start: 3 })
	SPAWN.bases.arcane.addUnit({ uFour: UNIT_FOUR.StormSummoner, waves: [6, 7, 8, 9, 10], start: 5 })
	SPAWN.names.push(SPAWN.bases.arcane.name)

	SPAWN.bases.arcaneCreep = new Spawn("arcaneCreep")
	SPAWN.bases.arcaneCreep.addBase(BASE_ALLIANCE.arcane)
	SPAWN.bases.arcaneCreep.addBase(BASE_FEDERATION.arcane)
	SPAWN.bases.arcaneCreep.addUnit({ uFour: UNIT_FOUR.BattleGolem, waves: [1, 2, 3, 4], start: 2 })
	SPAWN.bases.arcaneCreep.addUnit({ uFour: UNIT_FOUR.WaterElemental2, waves: [1, 3], start: 3 })
	SPAWN.bases.arcaneCreep.addUnit({ uFour: UNIT_FOUR.WaterElemental3, waves: [2, 3], start: 4 })
	SPAWN.bases.arcaneCreep.addUnit({ uFour: UNIT_FOUR.MagiDefender, waves: [1, 2, 3, 5], start: 6 })
	SPAWN.names.push(SPAWN.bases.arcaneCreep.name)

	// Arcane Hero Sapwn
	SPAWN.bases.arcaneHero = new Spawn("arcaneHero")
	SPAWN.bases.arcaneHero.addBase(BASE_ALLIANCE.arcaneHero)
	SPAWN.bases.arcaneHero.addBase(BASE_FEDERATION.arcaneHero)
	SPAWN.bases.arcaneHero.addUnit({ uFour: UNIT_FOUR.SupremeWizard, waves: [5], start: 7 })
	SPAWN.bases.arcaneHero.addUnit({ uFour: UNIT_FOUR.SeigeGolem, waves: [4], start: 9 })
	SPAWN.names.push(SPAWN.bases.arcaneHero.name)

	// Arcane Top Spawn
	SPAWN.bases.arcaneTop = new Spawn("arcaneTop")
	SPAWN.bases.arcaneTop.addBase(BASE_ALLIANCE.arcaneTop)
	SPAWN.bases.arcaneTop.addBase(BASE_FEDERATION.arcaneTop)
	SPAWN.bases.arcaneTop.addUnit({ uFour: UNIT_FOUR.BattleGolem, amount: 2, waves: [4, 5, 6] })
	SPAWN.bases.arcaneTop.addUnit({ uFour: UNIT_FOUR.WaterElemental2, waves: [4, 6], start: 4 })
	SPAWN.bases.arcaneTop.addUnit({ uFour: UNIT_FOUR.Summoner, waves: [4], start: 8 })
	SPAWN.names.push(SPAWN.bases.arcaneTop.name)

	// Arcane Bottom Spawn
	SPAWN.bases.arcaneBottom = new Spawn("arcaneBottom")
	SPAWN.bases.arcaneBottom.addBase(BASE_ALLIANCE.arcaneBottom)
	SPAWN.bases.arcaneBottom.addBase(BASE_FEDERATION.arcaneBottom)
	SPAWN.bases.arcaneBottom.addUnit({ uFour: UNIT_FOUR.BattleGolem, amount: 2, waves: [1, 2, 3], start: 2 })
	SPAWN.bases.arcaneBottom.addUnit({ uFour: UNIT_FOUR.WaterElemental2, waves: [1, 3], start: 4 })
	SPAWN.bases.arcaneBottom.addUnit({ uFour: UNIT_FOUR.Summoner, waves: [1], start: 8 })
	SPAWN.names.push(SPAWN.bases.arcaneBottom.name)

	// Blacksmith Creep Spawn
	SPAWN.bases.highCity = new Spawn("highCity")
	SPAWN.bases.highCity.addBase(BASE_ALLIANCE.arcaneBottom)
	SPAWN.bases.highCity.addBase(BASE_FEDERATION.arcaneBottom)
	SPAWN.bases.highCity.addUnit({ uFour: UNIT_FOUR.Militia1, amount: 2, waves: [1, 2, 3, 4], end: 6 })
	SPAWN.bases.highCity.addUnit({ uFour: UNIT_FOUR.Arbalist, waves: [1, 2], start: 3 })
	SPAWN.bases.highCity.addUnit({ uFour: UNIT_FOUR.BloodElfBreaker, waves: [3, 4], start: 5 })
	SPAWN.bases.highCity.addUnit({ uFour: UNIT_FOUR.Footman2, waves: [1, 2, 3, 4, 5], start: 8 })
	SPAWN.bases.highCity.addUnit({ uFour: UNIT_FOUR.Captian1, waves: [1, 2, 3, 4, 5] })
	SPAWN.names.push(SPAWN.bases.highCity.name)

	// Castle Spawn
	SPAWN.bases.castle = new Spawn("castle")
	SPAWN.bases.castle.addBase(BASE_ALLIANCE.castle)
	SPAWN.bases.castle.addBase(BASE_FEDERATION.castle)
	SPAWN.bases.castle.addUnit({ uFour: UNIT_FOUR.Captian2, waves: [1, 2, 3], start: 8 })
	SPAWN.names.push(SPAWN.bases.castle.name)

	// City Elves
	SPAWN.bases.cityElves = new Spawn("cityElves")
	SPAWN.bases.cityElves.addBase(BASE_ALLIANCE.cityElves)
	SPAWN.bases.cityElves.addBase(BASE_FEDERATION.cityElves)
	SPAWN.bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfArcher, waves: [1, 3, 5], end: 3 })
	SPAWN.bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfArcher, waves: [1, 2, 3, 4, 5, 6], start: 4 })
	SPAWN.bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfBreaker, waves: [1, 3, 4, 5, 6], start: 2, end: 3 })
	SPAWN.bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfBreaker, waves: [1, 2, 3, 4, 5, 6, 7], start: 4, end: 5 })
	SPAWN.bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfBreaker, amount: 2, waves: [1, 2, 3, 4, 5], start: 6 })
	SPAWN.bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfMage, waves: [1, 4], start: 3, end: 6 })
	SPAWN.bases.cityElves.addUnit({ uFour: UNIT_FOUR.BloodElfMage, waves: [1, 2, 3, 4, 5, 7], start: 7 })
	SPAWN.names.push(SPAWN.bases.cityElves.name)

	// City Front Spawn
	SPAWN.bases.cityFront = new Spawn("cityFront")
	SPAWN.bases.cityFront.addBase(BASE_ALLIANCE.cityFront)
	SPAWN.bases.cityFront.addBase(BASE_FEDERATION.cityFront)
	SPAWN.bases.cityFront.addUnit({ uFour: UNIT_FOUR.Militia1, amount: 3, waves: [1, 2, 3, 4, 5, 6], end: 2 })
	SPAWN.bases.cityFront.addUnit({ uFour: UNIT_FOUR.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6], start: 3, end: 4 })
	SPAWN.bases.cityFront.addUnit({ uFour: UNIT_FOUR.Footman1, amount: 3, waves: [1, 2, 3, 4, 5, 6], start: 5 })
	SPAWN.bases.cityFront.addUnit({ uFour: UNIT_FOUR.Captian1, amount: 2, waves: [3, 4, 6], start: 5 })
	SPAWN.bases.cityFront.addUnit({ uFour: UNIT_FOUR.Knight, waves: [1, 3, 5], start: 6 })
	SPAWN.bases.cityFront.addUnit({ uFour: UNIT_FOUR.Catapult, waves: [1, 4], start: 8 })
	SPAWN.bases.cityFront.addUnit({ uFour: UNIT_FOUR.Commander, waves: [2], start: 10 })
	SPAWN.names.push(SPAWN.bases.cityFront.name)

	// City Side Spawn
	SPAWN.bases.citySide = new Spawn("citySide")
	SPAWN.bases.citySide.addBase(BASE_ALLIANCE.citySide)
	SPAWN.bases.citySide.addBase(BASE_FEDERATION.citySide)
	SPAWN.bases.citySide.addUnit({ uFour: UNIT_FOUR.Militia1, waves: [6, 7, 8, 9, 10], end: 2 })
	SPAWN.bases.citySide.addUnit({ uFour: UNIT_FOUR.Footman1, amount: 2, waves: [5, 6, 8, 9], start: 2, end: 3 })
	SPAWN.bases.citySide.addUnit({ uFour: UNIT_FOUR.Footman1, amount: 3, waves: [5, 6, 8, 9], start: 4 })
	SPAWN.bases.citySide.addUnit({ uFour: UNIT_FOUR.Knight, waves: [6, 8], start: 3, end: 4 })
	SPAWN.bases.citySide.addUnit({ uFour: UNIT_FOUR.Knight, waves: [6, 7, 8, 9], start: 5 })
	SPAWN.bases.citySide.addUnit({ uFour: UNIT_FOUR.Footman2, waves: [8, 10], start: 6 })
	SPAWN.bases.citySide.addUnit({ uFour: UNIT_FOUR.Arbalist, waves: [4, 5, 6, 7, 8, 9], start: 3 })
	SPAWN.names.push(SPAWN.bases.citySide.name)

	// Draenei Spawn
	SPAWN.bases.draenei = new Spawn("draenei")
	SPAWN.bases.draenei.addBase(BASE_ALLIANCE.draenei)
	SPAWN.bases.draenei.addBase(BASE_FEDERATION.draenei)
	SPAWN.bases.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiGuardian, amount: 2, waves: [5, 6, 7, 8, 9, 10] })
	SPAWN.bases.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiGuardian, waves: [7, 8, 9], start: 5 })
	SPAWN.bases.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiDarkslayer, waves: [6, 7, 8, 9, 10], start: 3 })
	SPAWN.bases.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiSeer, waves: [7, 10], start: 4 })
	SPAWN.bases.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiVindicator, waves: [5, 6, 8], start: 7 })
	SPAWN.bases.draenei.addUnit({ uFour: UNIT_FOUR.DraeneiDemolisher, waves: [6, 8, 10], start: 6 })
	SPAWN.names.push(SPAWN.bases.draenei.name)

	// // High Elves
	SPAWN.bases.highElves = new Spawn("highElves")
	SPAWN.bases.highElves.addBase(BASE_ALLIANCE.highElves)
	SPAWN.bases.highElves.addBase(BASE_FEDERATION.highElves)
	SPAWN.bases.highElves.addUnit({ uFour: UNIT_FOUR.HighElfApprenticeSwordsman, waves: [1, 2, 3, 5], end: 3 })
	SPAWN.bases.highElves.addUnit({ uFour: UNIT_FOUR.HighElfApprenticeSwordsman, waves: [1, 3], start: 4 })
	SPAWN.bases.highElves.addUnit({ uFour: UNIT_FOUR.HighElfArcher, waves: [1, 3, 5], start: 2 })
	SPAWN.bases.highElves.addUnit({ uFour: UNIT_FOUR.HighElfSwordsman, amount: 2, waves: [1, 2, 3, 4], start: 4 })
	SPAWN.bases.highElves.addUnit({ uFour: UNIT_FOUR.HighElfHealer, waves: [1, 3, 5], start: 5 })
	SPAWN.bases.highElves.addUnit({ uFour: UNIT_FOUR.DragonHawk, waves: [1, 2, 3, 5], start: 6 })
	SPAWN.bases.highElves.addUnit({ uFour: UNIT_FOUR.HighElfKnight, waves: [1, 3, 5], start: 7 })
	SPAWN.names.push(SPAWN.bases.highElves.name)

	// // High Elves Creep
	SPAWN.bases.highElvesCreep = new Spawn("highElvesCreep")
	SPAWN.bases.highElvesCreep.addBase(BASE_ALLIANCE.highElvesCreep)
	SPAWN.bases.highElvesCreep.addBase(BASE_FEDERATION.highElvesCreep)
	SPAWN.bases.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfSwordsman, waves: [1, 2, 3, 4], end: 2 })
	SPAWN.bases.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfSwordsman, waves: [1, 2, 3, 4], start: 3 })
	SPAWN.bases.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfArcher, waves: [1, 3, 5], start: 2 })
	SPAWN.bases.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfHealer, waves: [1, 3], start: 4 })
	SPAWN.bases.highElvesCreep.addUnit({ uFour: UNIT_FOUR.HighElfGuardian, amount: 2, waves: [1, 3, 5], start: 5 })
	SPAWN.names.push(SPAWN.bases.highElvesCreep.name)

	// Merc Spawn
	SPAWN.bases.merc = new Spawn("merc")
	SPAWN.bases.merc.addBase(BASE_ALLIANCE.merc)
	SPAWN.bases.merc.addBase(BASE_FEDERATION.merc)
	SPAWN.bases.merc.addUnit({ uFour: UNIT_FOUR.Rogue, amount: 2, waves: [1, 2, 3, 4, 5, 6] })
	SPAWN.bases.merc.addUnit({ uFour: UNIT_FOUR.BanditSpearman, waves: [2, 3, 4, 5, 6, 7, 8], start: 2 })
	SPAWN.bases.merc.addUnit({ uFour: UNIT_FOUR.Bandit, amount: 2, waves: [1, 2, 3, 5, 6], start: 3 })
	SPAWN.bases.merc.addUnit({ uFour: UNIT_FOUR.Enforcer, waves: [2, 5], start: 4 })
	SPAWN.bases.merc.addUnit({ uFour: UNIT_FOUR.Assassin, waves: [3, 5, 7], start: 5 })
	SPAWN.bases.merc.addUnit({ uFour: UNIT_FOUR.BanditLord, waves: [1, 5], start: 6 })
	SPAWN.names.push(SPAWN.bases.merc.name)

	// Dwarf Spawn
	SPAWN.bases.dwarf = new Spawn("dwarf")
	SPAWN.bases.dwarf.addBase(BASE_ALLIANCE.dwarf)
	SPAWN.bases.dwarf.addBase(BASE_FEDERATION.dwarf)
	SPAWN.bases.dwarf.addUnit({ uFour: UNIT_FOUR.IronGuard, amount: 2, waves: [1, 2, 3, 5, 6], end: 1 })
	SPAWN.bases.dwarf.addUnit({ uFour: UNIT_FOUR.IronGuard, amount: 3, waves: [1, 2, 3, 4, 5, 6, 7], start: 2 })
	SPAWN.bases.dwarf.addUnit({ uFour: UNIT_FOUR.IronMorterTeam, waves: [2, 4, 6], start: 2 })
	SPAWN.bases.dwarf.addUnit({ uFour: UNIT_FOUR.IronRifleman, waves: [1, 2, 3, 4, 5, 6], start: 3 })
	SPAWN.bases.dwarf.addUnit({ uFour: UNIT_FOUR.IronCaptian, waves: [1, 2, 3, 4], start: 5 })
	SPAWN.bases.dwarf.addUnit({ uFour: UNIT_FOUR.IronMagi, waves: [1, 2, 3, 4], start: 6 })
	SPAWN.bases.dwarf.addUnit({ uFour: UNIT_FOUR.GryphonRider, waves: [1, 2, 3, 4], start: 8 })
	SPAWN.bases.dwarf.addUnit({ uFour: UNIT_FOUR.SeigeEngine, waves: [2, 5], start: 6 })
	SPAWN.bases.dwarf.addUnit({ uFour: UNIT_FOUR.Automation, waves: [1, 3, 6], start: 7 })
	SPAWN.names.push(SPAWN.bases.dwarf.name)

	// Murloc Spawn
	SPAWN.bases.murloc = new Spawn("murloc")
	SPAWN.bases.murloc.addBase(BASE_ALLIANCE.murloc)
	SPAWN.bases.murloc.addBase(BASE_FEDERATION.murloc)
	SPAWN.bases.murloc.addUnit({ uFour: UNIT_FOUR.MurlocCliffrunner, amount: 3, waves: [5, 6, 7, 9, 10] })
	SPAWN.bases.murloc.addUnit({ uFour: UNIT_FOUR.MurlocReaver, waves: [5, 7], start: 2 })
	SPAWN.bases.murloc.addUnit({ uFour: UNIT_FOUR.MurlocSnarecaster, waves: [6, 8, 10], start: 3 })
	SPAWN.bases.murloc.addUnit({ uFour: UNIT_FOUR.MurlocTidewarrior, waves: [4, 8], start: 6 })
	SPAWN.names.push(SPAWN.bases.murloc.name)

	// Naga Spawn
	SPAWN.bases.naga = new Spawn("naga")
	SPAWN.bases.naga.addBase(BASE_ALLIANCE.murloc)
	SPAWN.bases.naga.addBase(BASE_FEDERATION.murloc)
	SPAWN.bases.naga.addUnit({ uFour: UNIT_FOUR.NagaMyrmidon, waves: [1, 3], end: 3 })
	SPAWN.bases.naga.addUnit({ uFour: UNIT_FOUR.NagaMyrmidon, waves: [1, 2, 3, 4], start: 4, end: 5 })
	SPAWN.bases.naga.addUnit({ uFour: UNIT_FOUR.NagaMyrmidon, waves: [1, 2, 3, 4, 5, 6], start: 6 })
	SPAWN.bases.naga.addUnit({ uFour: UNIT_FOUR.NagaSiren, waves: [2, 4, 6], start: 3 })
	SPAWN.bases.naga.addUnit({ uFour: UNIT_FOUR.NagaRoyalGuard, waves: [2, 5], start: 6 })
	SPAWN.bases.naga.addUnit({ uFour: UNIT_FOUR.DragonTurtle, waves: [1, 4], start: 9 })
	SPAWN.names.push(SPAWN.bases.naga.name)

	// Naga Creep Spawn
	SPAWN.bases.nagaCreep = new Spawn("nagaCreep")
	SPAWN.bases.nagaCreep.addBase(BASE_ALLIANCE.murloc)
	SPAWN.bases.nagaCreep.addBase(BASE_FEDERATION.murloc)
	SPAWN.bases.nagaCreep.addUnit({ uFour: UNIT_FOUR.NagaMyrmidon, waves: [1, 2, 3, 4], start: 2 })
	SPAWN.bases.nagaCreep.addUnit({ uFour: UNIT_FOUR.NagaSiren, waves: [2, 4], start: 3 })
	SPAWN.bases.nagaCreep.addUnit({ uFour: UNIT_FOUR.SnapDragon, waves: [2, 3, 4, 5, 6], start: 5 })
	SPAWN.names.push(SPAWN.bases.nagaCreep.name)

	// Night Elves Spawn
	SPAWN.bases.nightElves = new Spawn("nightElves")
	SPAWN.bases.nightElves.addBase(BASE_ALLIANCE.nightElves)
	SPAWN.bases.nightElves.addBase(BASE_FEDERATION.nightElves)
	SPAWN.bases.nightElves.addUnit({ uFour: UNIT_FOUR.NightElfRanger, waves: [1, 2, 3, 4, 5] })
	SPAWN.bases.nightElves.addUnit({ uFour: UNIT_FOUR.NightElfEliteRanger, waves: [1, 2, 3, 4, 5], start: 2 })
	SPAWN.bases.nightElves.addUnit({ uFour: UNIT_FOUR.NightElfSentry, waves: [7, 8, 9, 10], start: 2 })
	SPAWN.bases.nightElves.addUnit({ uFour: UNIT_FOUR.Dryad, waves: [7, 9, 10], start: 3 })
	SPAWN.bases.nightElves.addUnit({ uFour: UNIT_FOUR.DruidOfTheClaw, waves: [6, 7, 8, 9, 10], start: 4 })
	SPAWN.bases.nightElves.addUnit({ uFour: UNIT_FOUR.MountianGiant, waves: [5, 9], start: 5 })
	SPAWN.bases.nightElves.addUnit({ uFour: UNIT_FOUR.AncientProtector, waves: [5], start: 10 })
	SPAWN.names.push(SPAWN.bases.nightElves.name)

	// Orc Spawn
	SPAWN.bases.orc = new Spawn("orc")
	SPAWN.bases.orc.addBase(BASE_ALLIANCE.orc)
	SPAWN.bases.orc.addBase(BASE_FEDERATION.orc)
	SPAWN.bases.orc.addUnit({ uFour: UNIT_FOUR.Grunt, amount: 2, waves: [1, 3, 5, 6] })
	SPAWN.bases.orc.addUnit({ uFour: UNIT_FOUR.Grunt, waves: [2, 4, 6, 7], start: 3 })
	SPAWN.bases.orc.addUnit({ uFour: UNIT_FOUR.TrollAxethrower, waves: [2, 4, 6, 7], start: 2 })
	SPAWN.bases.orc.addUnit({ uFour: UNIT_FOUR.Ogre, amount: 2, waves: [2, 4, 6, 7], start: 4 })
	SPAWN.bases.orc.addUnit({ uFour: UNIT_FOUR.Warlock, waves: [3, 5, 7], start: 3 })
	SPAWN.bases.orc.addUnit({ uFour: UNIT_FOUR.OrcWarchief, waves: [1, 7], start: 6 })
	SPAWN.names.push(SPAWN.bases.orc.name)

	// Human Shipyard Spawn
	SPAWN.bases.humanShipyard = new Spawn("humanShipyard")
	SPAWN.bases.humanShipyard.addBase(BASE_ALLIANCE.humanShipyard)
	SPAWN.bases.humanShipyard.addBase(BASE_FEDERATION.humanShipyard)
	SPAWN.bases.humanShipyard.addUnit({ uFour: UNIT_FOUR.HumanFrigate, waves: [2], end: 2 })
	SPAWN.bases.humanShipyard.addUnit({ uFour: UNIT_FOUR.HumanFrigate, waves: [2, 4], start: 3, end: 4 })
	SPAWN.bases.humanShipyard.addUnit({ uFour: UNIT_FOUR.HumanFrigate, waves: [2, 4, 6], start: 5 })
	SPAWN.bases.humanShipyard.addUnit({ uFour: UNIT_FOUR.HumanBattleship, waves: [3], start: 6 })
	SPAWN.names.push(SPAWN.bases.humanShipyard.name)

	// Night Elf Shipyard Spawn
	SPAWN.bases.nightElfShipyard = new Spawn("nightElfShipyard")
	SPAWN.bases.nightElfShipyard.addBase(BASE_ALLIANCE.nightElfShipyard)
	SPAWN.bases.nightElfShipyard.addBase(BASE_FEDERATION.nightElfShipyard)
	SPAWN.bases.nightElfShipyard.addUnit({ uFour: UNIT_FOUR.NightElfFrigate, waves: [1], start: 2, end: 3 })
	SPAWN.bases.nightElfShipyard.addUnit({ uFour: UNIT_FOUR.NightElfFrigate, waves: [1, 3], start: 4, end: 5 })
	SPAWN.bases.nightElfShipyard.addUnit({ uFour: UNIT_FOUR.NightElfFrigate, waves: [1, 3, 6], start: 6 })
	SPAWN.bases.nightElfShipyard.addUnit({ uFour: UNIT_FOUR.NightElfBattleship, waves: [3], start: 7 })
	SPAWN.names.push(SPAWN.bases.nightElfShipyard.name)

	// Undead Spawn
	SPAWN.bases.undead = new Spawn("undead")
	SPAWN.bases.undead.addBase(BASE_ALLIANCE.undead)
	SPAWN.bases.undead.addBase(BASE_FEDERATION.undead)
	SPAWN.bases.undead.addUnit({ uFour: UNIT_FOUR.Ghoul, amount: 4, waves: [6, 7, 8, 9, 10] })
	SPAWN.bases.undead.addUnit({ uFour: UNIT_FOUR.SkeletonMage, waves: [6, 7, 8, 9, 10], start: 2 })
	SPAWN.bases.undead.addUnit({ uFour: UNIT_FOUR.Necromancer, waves: [5, 7, 9], start: 4 })
	SPAWN.bases.undead.addUnit({ uFour: UNIT_FOUR.EredarWarlock, waves: [7], start: 6 })
	SPAWN.bases.undead.addUnit({ uFour: UNIT_FOUR.GiantSkeleton, waves: [6, 9], start: 8 })
	SPAWN.bases.undead.addUnit({ uFour: UNIT_FOUR.InfernalContraption, waves: [5, 7], start: 3, end: 5 })
	SPAWN.bases.undead.addUnit({ uFour: UNIT_FOUR.InfernalMachine, waves: [5, 7], start: 6, end: 9 })
	SPAWN.bases.undead.addUnit({ uFour: UNIT_FOUR.InfernalJuggernaut, waves: [5, 7], start: 10 })
	SPAWN.names.push(SPAWN.bases.undead.name)


}

let maxLevel = 12
export let maxWaves = 10
export let unitDelay = 0.05
export let baseDelay = 0.5
export let waveDelay = 10
export let cycleDelay = 1

const spawnTimer = new Timer
const levelTimer = new Timer

let base = 0
let unit = 0



// export function getSpawn(value: number) {
// 	return bases[names[value]]
// }

// export function start() {
// 	spawnTimer.start(2, false, iterateSpawn)
// 	levelTimer.start(60, false, upgradeLevel)
// }

// function iterateSpawn() {
// 	let curSpawn = getSpawn(base)

// 	// Spawn Units
// 	curSpawn.spawnUnit(unit)

// 	unit++

// 	// If unit is last unit in Base
// 	if (unit > curSpawn.countOfUnits) {
// 		unit = 0
// 		base++

// 		// Base is last Base in Wave
// 		if (base >= curSpawn.countOfBases) {
// 			base = 0
// 			Spawn.wave++

// 			// Wave is last Wave in Cycly
// 			if (Spawn.wave > maxWaves) {
// 				Spawn.wave = 1

// 				// New Cycle Time
// 				spawnTimer.start(cycleDelay, false, iterateSpawn)
// 			} else {

// 				// New Wave Time
// 				spawnTimer.start(waveDelay, false, iterateSpawn)
// 			}
// 		} else {

// 			// New Base Time
// 			spawnTimer.start(baseDelay, false, iterateSpawn)
// 		}
// 	} else {

// 		// New Unit Time
// 		spawnTimer.start(unitDelay, false, iterateSpawn)
// 	}
// }

function upgradeLevel() {
	Spawn.level++

	// Set Spawn level if too high
	if (Spawn.level < maxLevel) {
		levelTimer.start((50 + (10 * Spawn.level)), false, upgradeLevel)
	}


}

