import { Spawn } from "classes/spawn"
import { BASE } from "./bases"



export namespace SPAWN {

    export const names: string[] = []
    export namespace base {
        export const arcane = new Spawn("arcane")
        arcane.addBase(BASE.arcane.alliance)
        arcane.addBase(BASE.arcane.federation)
        arcane.addUnit({ uFour: UnitFour.Sorcress, waves: [6, 7, 8, 9, 10], start: 3 })
        arcane.addUnit({ uFour: UnitFour.StormSummoner, waves: [6, 7, 8, 9, 10], start: 5 })
        SPAWN.names.push(arcane.name)

        export const arcaneCreep = new Spawn("arcaneCreep")
        arcaneCreep.addBase(BASE.arcane.alliance)
        arcaneCreep.addBase(BASE.arcane.federation)
        arcaneCreep.addUnit({ uFour: UnitFour.BattleGolem, waves: [1, 2, 3, 4], start: 2 })
        arcaneCreep.addUnit({ uFour: UnitFour.WaterElemental2, waves: [1, 3], start: 3 })
        arcaneCreep.addUnit({ uFour: UnitFour.WaterElemental3, waves: [2, 3], start: 4 })
        arcaneCreep.addUnit({ uFour: UnitFour.MagiDefender, waves: [1, 2, 3, 5], start: 6 })
        SPAWN.names.push(arcaneCreep.name)

        // Arcane Hero Sapwn
        export const arcaneHero = new Spawn("arcaneHero")
        arcaneHero.addBase(BASE.arcaneHero.alliance)
        arcaneHero.addBase(BASE.arcaneHero.federation)
        arcaneHero.addUnit({ uFour: UnitFour.SupremeWizard, waves: [5], start: 7 })
        arcaneHero.addUnit({ uFour: UnitFour.SeigeGolem, waves: [4], start: 9 })
        SPAWN.names.push(arcaneHero.name)

        // Arcane Top Spawn
        export const arcaneTop = new Spawn("arcaneTop")
        arcaneTop.addBase(BASE.arcaneTop.alliance)
        arcaneTop.addBase(BASE.arcaneTop.federation)
        arcaneTop.addUnit({ uFour: UnitFour.BattleGolem, amount: 2, waves: [4, 5, 6] })
        arcaneTop.addUnit({ uFour: UnitFour.WaterElemental2, waves: [4, 6], start: 4 })
        arcaneTop.addUnit({ uFour: UnitFour.Summoner, waves: [4], start: 8 })
        SPAWN.names.push(arcaneTop.name)

        // Arcane Bottom Spawn
        export const arcaneBottom = new Spawn("arcaneBottom")
        arcaneBottom.addBase(BASE.arcaneBottom.alliance)
        arcaneBottom.addBase(BASE.arcaneBottom.federation)
        arcaneBottom.addUnit({ uFour: UnitFour.BattleGolem, amount: 2, waves: [1, 2, 3], start: 2 })
        arcaneBottom.addUnit({ uFour: UnitFour.WaterElemental2, waves: [1, 3], start: 4 })
        arcaneBottom.addUnit({ uFour: UnitFour.Summoner, waves: [1], start: 8 })
        SPAWN.names.push(arcaneBottom.name)

        // Blacksmith Creep Spawn
        export const highCity = new Spawn("highCity")
        highCity.addBase(BASE.arcaneBottom.alliance)
        highCity.addBase(BASE.arcaneBottom.federation)
        highCity.addUnit({ uFour: UnitFour.Militia1, amount: 2, waves: [1, 2, 3, 4], end: 6 })
        highCity.addUnit({ uFour: UnitFour.Arbalist, waves: [1, 2], start: 3 })
        highCity.addUnit({ uFour: UnitFour.BloodElfBreaker, waves: [3, 4], start: 5 })
        highCity.addUnit({ uFour: UnitFour.Footman2, waves: [1, 2, 3, 4, 5], start: 8 })
        highCity.addUnit({ uFour: UnitFour.Captian1, waves: [1, 2, 3, 4, 5] })
        SPAWN.names.push(highCity.name)

        // Castle Spawn
        export const castle = new Spawn("castle")
        castle.addBase(BASE.castle.alliance)
        castle.addBase(BASE.castle.federation)
        castle.addUnit({ uFour: UnitFour.Captian2, waves: [1, 2, 3], start: 8 })
        SPAWN.names.push(castle.name)

        // City Elves
        export const cityElves = new Spawn("cityElves")
        cityElves.addBase(BASE.cityElves.alliance)
        cityElves.addBase(BASE.cityElves.federation)
        cityElves.addUnit({ uFour: UnitFour.BloodElfArcher, waves: [1, 3, 5], end: 3 })
        cityElves.addUnit({ uFour: UnitFour.BloodElfArcher, waves: [1, 2, 3, 4, 5, 6], start: 4 })
        cityElves.addUnit({ uFour: UnitFour.BloodElfBreaker, waves: [1, 3, 4, 5, 6], start: 2, end: 3 })
        cityElves.addUnit({ uFour: UnitFour.BloodElfBreaker, waves: [1, 2, 3, 4, 5, 6, 7], start: 4, end: 5 })
        cityElves.addUnit({ uFour: UnitFour.BloodElfBreaker, amount: 2, waves: [1, 2, 3, 4, 5], start: 6 })
        cityElves.addUnit({ uFour: UnitFour.BloodElfMage, waves: [1, 4], start: 3, end: 6 })
        cityElves.addUnit({ uFour: UnitFour.BloodElfMage, waves: [1, 2, 3, 4, 5, 7], start: 7 })
        SPAWN.names.push(cityElves.name)

        // City Front Spawn
        export const cityFront = new Spawn("cityFront")
        cityFront.addBase(BASE.cityFront.alliance)
        cityFront.addBase(BASE.cityFront.federation)
        cityFront.addUnit({ uFour: UnitFour.Militia1, amount: 3, waves: [1, 2, 3, 4, 5, 6], end: 2 })
        cityFront.addUnit({ uFour: UnitFour.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6], start: 3, end: 4 })
        cityFront.addUnit({ uFour: UnitFour.Footman1, amount: 3, waves: [1, 2, 3, 4, 5, 6], start: 5 })
        cityFront.addUnit({ uFour: UnitFour.Captian1, amount: 2, waves: [3, 4, 6], start: 5 })
        cityFront.addUnit({ uFour: UnitFour.Knight, waves: [1, 3, 5], start: 6 })
        cityFront.addUnit({ uFour: UnitFour.Catapult, waves: [1, 4], start: 8 })
        cityFront.addUnit({ uFour: UnitFour.Commander, waves: [2], start: 10 })
        SPAWN.names.push(cityFront.name)

        // City Side Spawn
        export const citySide = new Spawn("citySide")
        citySide.addBase(BASE.citySide.alliance)
        citySide.addBase(BASE.citySide.federation)
        citySide.addUnit({ uFour: UnitFour.Militia1, waves: [6, 7, 8, 9, 10], end: 2 })
        citySide.addUnit({ uFour: UnitFour.Footman1, amount: 2, waves: [5, 6, 8, 9], start: 2, end: 3 })
        citySide.addUnit({ uFour: UnitFour.Footman1, amount: 3, waves: [5, 6, 8, 9], start: 4 })
        citySide.addUnit({ uFour: UnitFour.Knight, waves: [6, 8], start: 3, end: 4 })
        citySide.addUnit({ uFour: UnitFour.Knight, waves: [6, 7, 8, 9], start: 5 })
        citySide.addUnit({ uFour: UnitFour.Footman2, waves: [8, 10], start: 6 })
        citySide.addUnit({ uFour: UnitFour.Arbalist, waves: [4, 5, 6, 7, 8, 9], start: 3 })
        SPAWN.names.push(citySide.name)

        // Draenei Spawn
        export const draenei = new Spawn("draenei")
        draenei.addBase(BASE.draenei.alliance)
        draenei.addBase(BASE.draenei.federation)
        draenei.addUnit({ uFour: UnitFour.DraeneiGuardian, amount: 2, waves: [5, 6, 7, 8, 9, 10] })
        draenei.addUnit({ uFour: UnitFour.DraeneiGuardian, waves: [7, 8, 9], start: 5 })
        draenei.addUnit({ uFour: UnitFour.DraeneiDarkslayer, waves: [6, 7, 8, 9, 10], start: 3 })
        draenei.addUnit({ uFour: UnitFour.DraeneiSeer, waves: [7, 10], start: 4 })
        draenei.addUnit({ uFour: UnitFour.DraeneiVindicator, waves: [5, 6, 8], start: 7 })
        draenei.addUnit({ uFour: UnitFour.DraeneiDemolisher, waves: [6, 8, 10], start: 6 })
        SPAWN.names.push(draenei.name)

        // // High Elves
        export const highElves = new Spawn("highElves")
        highElves.addBase(BASE.highElves.alliance)
        highElves.addBase(BASE.highElves.federation)
        highElves.addUnit({ uFour: UnitFour.HighElfApprenticeSwordsman, waves: [1, 2, 3, 5], end: 3 })
        highElves.addUnit({ uFour: UnitFour.HighElfApprenticeSwordsman, waves: [1, 3], start: 4 })
        highElves.addUnit({ uFour: UnitFour.HighElfArcher, waves: [1, 3, 5], start: 2 })
        highElves.addUnit({ uFour: UnitFour.HighElfSwordsman, amount: 2, waves: [1, 2, 3, 4], start: 4 })
        highElves.addUnit({ uFour: UnitFour.HighElfHealer, waves: [1, 3, 5], start: 5 })
        highElves.addUnit({ uFour: UnitFour.DragonHawk, waves: [1, 2, 3, 5], start: 6 })
        highElves.addUnit({ uFour: UnitFour.HighElfKnight, waves: [1, 3, 5], start: 7 })
        SPAWN.names.push(highElves.name)

        // // High Elves Creep
        export const highElvesCreep = new Spawn("highElvesCreep")
        highElvesCreep.addBase(BASE.highElvesCreep.alliance)
        highElvesCreep.addBase(BASE.highElvesCreep.federation)
        highElvesCreep.addUnit({ uFour: UnitFour.HighElfSwordsman, waves: [1, 2, 3, 4], end: 2 })
        highElvesCreep.addUnit({ uFour: UnitFour.HighElfSwordsman, waves: [1, 2, 3, 4], start: 3 })
        highElvesCreep.addUnit({ uFour: UnitFour.HighElfArcher, waves: [1, 3, 5], start: 2 })
        highElvesCreep.addUnit({ uFour: UnitFour.HighElfHealer, waves: [1, 3], start: 4 })
        highElvesCreep.addUnit({ uFour: UnitFour.HighElfGuardian, amount: 2, waves: [1, 3, 5], start: 5 })
        SPAWN.names.push(highElvesCreep.name)

        // Merc Spawn
        export const merc = new Spawn("merc")
        merc.addBase(BASE.merc.alliance)
        merc.addBase(BASE.merc.federation)
        merc.addUnit({ uFour: UnitFour.Rogue, amount: 2, waves: [1, 2, 3, 4, 5, 6] })
        merc.addUnit({ uFour: UnitFour.BanditSpearman, waves: [2, 3, 4, 5, 6, 7, 8], start: 2 })
        merc.addUnit({ uFour: UnitFour.Bandit, amount: 2, waves: [1, 2, 3, 5, 6], start: 3 })
        merc.addUnit({ uFour: UnitFour.Enforcer, waves: [2, 5], start: 4 })
        merc.addUnit({ uFour: UnitFour.Assassin, waves: [3, 5, 7], start: 5 })
        merc.addUnit({ uFour: UnitFour.BanditLord, waves: [1, 5], start: 6 })
        SPAWN.names.push(merc.name)

        // Dwarf Spawn
        export const dwarf = new Spawn("dwarf")
        dwarf.addBase(BASE.dwarf.alliance)
        dwarf.addBase(BASE.dwarf.federation)
        dwarf.addUnit({ uFour: UnitFour.IronGuard, amount: 2, waves: [1, 2, 3, 5, 6], end: 1 })
        dwarf.addUnit({ uFour: UnitFour.IronGuard, amount: 3, waves: [1, 2, 3, 4, 5, 6, 7], start: 2 })
        dwarf.addUnit({ uFour: UnitFour.IronMorterTeam, waves: [2, 4, 6], start: 2 })
        dwarf.addUnit({ uFour: UnitFour.IronRifleman, waves: [1, 2, 3, 4, 5, 6], start: 3 })
        dwarf.addUnit({ uFour: UnitFour.IronCaptian, waves: [1, 2, 3, 4], start: 5 })
        dwarf.addUnit({ uFour: UnitFour.IronMagi, waves: [1, 2, 3, 4], start: 6 })
        dwarf.addUnit({ uFour: UnitFour.GryphonRider, waves: [1, 2, 3, 4], start: 8 })
        dwarf.addUnit({ uFour: UnitFour.SeigeEngine, waves: [2, 5], start: 6 })
        dwarf.addUnit({ uFour: UnitFour.Automation, waves: [1, 3, 6], start: 7 })
        SPAWN.names.push(dwarf.name)

        // Murloc Spawn
        export const murloc = new Spawn("murloc")
        murloc.addBase(BASE.murloc.alliance)
        murloc.addBase(BASE.murloc.federation)
        murloc.addUnit({ uFour: UnitFour.MurlocCliffrunner, amount: 3, waves: [5, 6, 7, 9, 10] })
        murloc.addUnit({ uFour: UnitFour.MurlocReaver, waves: [5, 7], start: 2 })
        murloc.addUnit({ uFour: UnitFour.MurlocSnarecaster, waves: [6, 8, 10], start: 3 })
        murloc.addUnit({ uFour: UnitFour.MurlocTidewarrior, waves: [4, 8], start: 6 })
        SPAWN.names.push(murloc.name)

        // Naga Spawn
        export const naga = new Spawn("naga")
        naga.addBase(BASE.murloc.alliance)
        naga.addBase(BASE.murloc.federation)
        naga.addUnit({ uFour: UnitFour.NagaMyrmidon, waves: [1, 3], end: 3 })
        naga.addUnit({ uFour: UnitFour.NagaMyrmidon, waves: [1, 2, 3, 4], start: 4, end: 5 })
        naga.addUnit({ uFour: UnitFour.NagaMyrmidon, waves: [1, 2, 3, 4, 5, 6], start: 6 })
        naga.addUnit({ uFour: UnitFour.NagaSiren, waves: [2, 4, 6], start: 3 })
        naga.addUnit({ uFour: UnitFour.NagaRoyalGuard, waves: [2, 5], start: 6 })
        naga.addUnit({ uFour: UnitFour.DragonTurtle, waves: [1, 4], start: 9 })
        SPAWN.names.push(naga.name)

        // Naga Creep Spawn
        export const nagaCreep = new Spawn("nagaCreep")
        nagaCreep.addBase(BASE.murloc.alliance)
        nagaCreep.addBase(BASE.murloc.federation)
        nagaCreep.addUnit({ uFour: UnitFour.NagaMyrmidon, waves: [1, 2, 3, 4], start: 2 })
        nagaCreep.addUnit({ uFour: UnitFour.NagaSiren, waves: [2, 4], start: 3 })
        nagaCreep.addUnit({ uFour: UnitFour.SnapDragon, waves: [2, 3, 4, 5, 6], start: 5 })
        SPAWN.names.push(nagaCreep.name)

        // Night Elves Spawn
        export const nightElves = new Spawn("nightElves")
        nightElves.addBase(BASE.nightElves.alliance)
        nightElves.addBase(BASE.nightElves.federation)
        nightElves.addUnit({ uFour: UnitFour.NightElfRanger, waves: [1, 2, 3, 4, 5] })
        nightElves.addUnit({ uFour: UnitFour.NightElfEliteRanger, waves: [1, 2, 3, 4, 5], start: 2 })
        nightElves.addUnit({ uFour: UnitFour.NightElfSentry, waves: [7, 8, 9, 10], start: 2 })
        nightElves.addUnit({ uFour: UnitFour.Dryad, waves: [7, 9, 10], start: 3 })
        nightElves.addUnit({ uFour: UnitFour.DruidOfTheClaw, waves: [6, 7, 8, 9, 10], start: 4 })
        nightElves.addUnit({ uFour: UnitFour.MountianGiant, waves: [5, 9], start: 5 })
        nightElves.addUnit({ uFour: UnitFour.AncientProtector, waves: [5], start: 10 })
        SPAWN.names.push(nightElves.name)

        // Orc Spawn
        export const orc = new Spawn("orc")
        orc.addBase(BASE.orc.alliance)
        orc.addBase(BASE.orc.federation)
        orc.addUnit({ uFour: UnitFour.Grunt, amount: 2, waves: [1, 3, 5, 6] })
        orc.addUnit({ uFour: UnitFour.Grunt, waves: [2, 4, 6, 7], start: 3 })
        orc.addUnit({ uFour: UnitFour.TrollAxethrower, waves: [2, 4, 6, 7], start: 2 })
        orc.addUnit({ uFour: UnitFour.Ogre, amount: 2, waves: [2, 4, 6, 7], start: 4 })
        orc.addUnit({ uFour: UnitFour.Warlock, waves: [3, 5, 7], start: 3 })
        orc.addUnit({ uFour: UnitFour.OrcWarchief, waves: [1, 7], start: 6 })
        SPAWN.names.push(orc.name)

        // Human Shipyard Spawn
        export const humanShipyard = new Spawn("humanShipyard")
        humanShipyard.addBase(BASE.humanShipyard.alliance)
        humanShipyard.addBase(BASE.humanShipyard.federation)
        humanShipyard.addUnit({ uFour: UnitFour.HumanFrigate, waves: [2], end: 2 })
        humanShipyard.addUnit({ uFour: UnitFour.HumanFrigate, waves: [2, 4], start: 3, end: 4 })
        humanShipyard.addUnit({ uFour: UnitFour.HumanFrigate, waves: [2, 4, 6], start: 5 })
        humanShipyard.addUnit({ uFour: UnitFour.HumanBattleship, waves: [3], start: 6 })
        SPAWN.names.push(humanShipyard.name)

        // Night Elf Shipyard Spawn
        export const nightElfShipyard = new Spawn("nightElfShipyard")
        nightElfShipyard.addBase(BASE.nightElfShipyard.alliance)
        nightElfShipyard.addBase(BASE.nightElfShipyard.federation)
        nightElfShipyard.addUnit({ uFour: UnitFour.NightElfFrigate, waves: [1], start: 2, end: 3 })
        nightElfShipyard.addUnit({ uFour: UnitFour.NightElfFrigate, waves: [1, 3], start: 4, end: 5 })
        nightElfShipyard.addUnit({ uFour: UnitFour.NightElfFrigate, waves: [1, 3, 6], start: 6 })
        nightElfShipyard.addUnit({ uFour: UnitFour.NightElfBattleship, waves: [3], start: 7 })
        SPAWN.names.push(nightElfShipyard.name)

        // Undead Spawn
        export const undead = new Spawn("undead")
        undead.addBase(BASE.undead.alliance)
        undead.addBase(BASE.undead.federation)
        undead.addUnit({ uFour: UnitFour.Ghoul, amount: 4, waves: [6, 7, 8, 9, 10] })
        undead.addUnit({ uFour: UnitFour.SkeletonMage, waves: [6, 7, 8, 9, 10], start: 2 })
        undead.addUnit({ uFour: UnitFour.Necromancer, waves: [5, 7, 9], start: 4 })
        undead.addUnit({ uFour: UnitFour.EredarWarlock, waves: [7], start: 6 })
        undead.addUnit({ uFour: UnitFour.GiantSkeleton, waves: [6, 9], start: 8 })
        undead.addUnit({ uFour: UnitFour.InfernalContraption, waves: [5, 7], start: 3, end: 5 })
        undead.addUnit({ uFour: UnitFour.InfernalMachine, waves: [5, 7], start: 6, end: 9 })
        undead.addUnit({ uFour: UnitFour.InfernalJuggernaut, waves: [5, 7], start: 10 })
        SPAWN.names.push(undead.name)
    }

    

}





// const maxLevel = 12
// export const maxWaves = 10
// export const unitDelay = 0.05
// export const baseDelay = 0.5
// export const waveDelay = 10
// export const cycleDelay = 1

// const spawnTimer = new Timer
// const levelTimer = new Timer

// const base = 0
// const unit = 0



// export function getSpawn(value: number) {
// 	return bases[names[value]]
// }

// export function start() {
// 	spawnTimer.start(2, false, iterateSpawn)
// 	levelTimer.start(60, false, upgradeLevel)
// }

// function iterateSpawn() {
// 	const curSpawn = getSpawn(base)

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

// function upgradeLevel() {
// 	Spawn.level++

// 	// Set Spawn level if too high
// 	if (Spawn.level < maxLevel) {
// 		levelTimer.start((50 + (10 * Spawn.level)), false, upgradeLevel)
// 	}


// }

