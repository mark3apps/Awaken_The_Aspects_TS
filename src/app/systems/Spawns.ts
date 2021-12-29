import { UnitType } from 'app/classes/unitType'
import { SpawnValues, SpawnLoop } from 'lib/resources/spawnCheck'
import { Timer } from 'lib/w3ts/index'
import { ISpawnsDepend } from './ISpawnsDepend'
import { Spawn } from './spawn'

export class Spawns {
	protected static instance: Spawns

	static getInstance (depend: ISpawnsDepend) {
		if (!Spawns.instance) Spawns.instance = new Spawns(depend)
		return Spawns.instance
	}

	maxLevel = 12;
	maxWaves = 10;

	spawnTimer: Timer
	levelTimer: Timer
	check: SpawnValues = { levels: 12, waves: 10, level: 1, wave: 1, base: 0, unit: 0 };
	loop: SpawnLoop = { cycle: 1, wave: 10, base: 0.5, unit: 0.05 };
	spawns: string[] = [];

	base: { [name: string]: Spawn } = {};

	constructor (depend: ISpawnsDepend) {
		const factions = depend.factions

		this.spawnTimer = new Timer()
		this.levelTimer = new Timer()

		// Arcane
		this.base.arcane = new Spawn('arcane', factions.arcane)
		this.base.arcane.addUnit({ unitType: UnitType.Sorceress, waves: [6, 7, 8, 9, 10], start: 3 })
		this.base.arcane.addUnit({ unitType: UnitType.StormSummoner, waves: [6, 7, 8, 9, 10], start: 5 })
		this.base.arcane.addUnit({ unitType: UnitType.MagiDefender, waves: [6, 8], start: 7 })
		this.addSpawn(this.base.arcane.name)

		// Arcane Creep
		this.base.arcaneCreep = new Spawn('arcaneCreep', factions.arcaneCreep)
		this.base.arcaneCreep.addUnit({ unitType: UnitType.BattleGolem, waves: [1, 2, 3, 4], start: 1 })
		this.base.arcaneCreep.addUnit({ unitType: UnitType.WaterElemental2, waves: [1, 3], start: 3 })
		this.base.arcaneCreep.addUnit({ unitType: UnitType.WaterElemental3, waves: [2, 3], start: 4 })
		this.base.arcaneCreep.addUnit({ unitType: UnitType.MagiDefender, waves: [1, 2], start: 6 })
		this.addSpawn(this.base.arcaneCreep.name)

		// Arcane Hero this
		this.base.arcaneHero = new Spawn('arcaneHero', factions.arcaneHero)
		this.base.arcaneHero.addUnit({ unitType: UnitType.MagiDefender, waves: [1, 2, 3, 5], start: 6 })
		this.base.arcaneHero.addUnit({ unitType: UnitType.SupremeWizard, waves: [5], start: 7 })
		this.base.arcaneHero.addUnit({ unitType: UnitType.SeigeGolem, waves: [4], start: 9 })
		this.addSpawn(this.base.arcaneHero.name)

		// Arcane Top this
		this.base.arcaneTop = new Spawn('arcaneTop', factions.arcaneTop)
		this.base.arcaneTop.addUnit({ unitType: UnitType.BattleGolem, amount: 2, waves: [4, 5, 6] })
		this.base.arcaneTop.addUnit({ unitType: UnitType.WaterElemental2, waves: [4, 6], start: 4 })
		this.base.arcaneTop.addUnit({ unitType: UnitType.Summoner, waves: [4], start: 8 })
		this.addSpawn(this.base.arcaneTop.name)

		// Arcane Bottom this
		this.base.arcaneBottom = new Spawn('arcaneBottom', factions.arcaneBottom)
		this.base.arcaneBottom.addUnit({ unitType: UnitType.BattleGolem, amount: 2, waves: [1, 2, 3], start: 2 })
		this.base.arcaneBottom.addUnit({ unitType: UnitType.WaterElemental2, waves: [1, 3], start: 4 })
		this.base.arcaneBottom.addUnit({ unitType: UnitType.Summoner, waves: [1], start: 8 })
		this.addSpawn(this.base.arcaneBottom.name)

		// High City this
		this.base.highCity = new Spawn('highCity', factions.highCity)
		this.base.highCity.addUnit({ unitType: UnitType.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6], end: 7 })
		this.base.highCity.addUnit({ unitType: UnitType.Arbalist, waves: [1, 2, 3, 4], start: 1, end: 4 })
		this.base.highCity.addUnit({ unitType: UnitType.Arbalist, waves: [1, 2, 3, 4, 5, 6, 7], start: 5 })
		this.base.highCity.addUnit({ unitType: UnitType.Footman1, waves: [1, 2, 3, 4], start: 4, end: 7 })
		this.base.highCity.addUnit({ unitType: UnitType.Footman2, amount: 2, waves: [1, 2, 3, 4], start: 8 })
		this.base.highCity.addUnit({ unitType: UnitType.Captain1, amount: 1, waves: [1, 3], start: 9 })
		this.addSpawn(this.base.highCity.name)

		// Castle this
		this.base.castle = new Spawn('castle', factions.castle)
		this.base.castle.addUnit({ unitType: UnitType.Captain2, waves: [1, 2, 3], start: 8 })
		this.addSpawn(this.base.castle.name)

		// City Elves
		this.base.cityElves = new Spawn('cityElves', factions.cityElves)
		this.base.cityElves.addUnit({ unitType: UnitType.BloodElfArcher, waves: [1, 3, 5], end: 1 })
		this.base.cityElves.addUnit({ unitType: UnitType.BloodElfArcher, waves: [1, 2, 3, 4, 5, 6], start: 2 })
		this.base.cityElves.addUnit({ unitType: UnitType.BloodElfArcher, waves: [2, 3, 4, 5], start: 4 })
		this.base.cityElves.addUnit({ unitType: UnitType.BloodElfBreaker, waves: [1, 3, 4, 5, 6], start: 2, end: 3 })
		this.base.cityElves.addUnit({ unitType: UnitType.BloodElfBreaker, waves: [1, 2, 3, 4, 5, 6, 7], start: 4, end: 5 })
		this.base.cityElves.addUnit({ unitType: UnitType.BloodElfBreaker, amount: 2, waves: [1, 2, 3, 4, 5], start: 6 })
		this.base.cityElves.addUnit({ unitType: UnitType.BloodElfMage, waves: [1, 4], start: 3, end: 6 })
		this.base.cityElves.addUnit({ unitType: UnitType.BloodElfMage, waves: [1, 2, 3, 4, 5, 7], start: 7 })
		this.addSpawn(this.base.cityElves.name)

		// City Front this
		this.base.cityFront = new Spawn('cityFront', factions.cityFront)
		this.base.cityFront.addUnit({ unitType: UnitType.Militia1, amount: 3, waves: [1, 2, 3, 4, 5, 6], end: 2 })
		this.base.cityFront.addUnit({ unitType: UnitType.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6, 7], start: 3, end: 4 })
		this.base.cityFront.addUnit({ unitType: UnitType.Footman1, amount: 3, waves: [1, 2, 3, 5, 6, 7], start: 5 })
		this.base.cityFront.addUnit({ unitType: UnitType.Captain1, amount: 2, waves: [3, 4, 7], start: 5 })
		this.base.cityFront.addUnit({ unitType: UnitType.Knight, waves: [1, 3, 5, 7], start: 6 })
		this.base.cityFront.addUnit({ unitType: UnitType.Catapult, waves: [1, 4], start: 6 })
		this.base.cityFront.addUnit({ unitType: UnitType.Commander, waves: [2], start: 10 })
		this.addSpawn(this.base.cityFront.name)

		// Draenei this
		this.base.draenei = new Spawn('draenei', factions.draenei)
		this.base.draenei.addUnit({ unitType: UnitType.DraeneiGuardian, amount: 2, waves: [5, 6, 7, 8, 9, 10] })
		this.base.draenei.addUnit({ unitType: UnitType.DraeneiGuardian, waves: [7, 8, 9], start: 5 })
		this.base.draenei.addUnit({ unitType: UnitType.DraeneiDarkslayer, waves: [6, 7, 8, 9, 10], start: 3 })
		this.base.draenei.addUnit({ unitType: UnitType.DraeneiSeer, waves: [7, 10], start: 4 })
		this.base.draenei.addUnit({ unitType: UnitType.DraeneiVindicator, waves: [5, 6, 8], start: 7 })
		this.base.draenei.addUnit({ unitType: UnitType.DraeneiDemolisher, waves: [6, 8, 10], start: 6 })
		this.addSpawn(this.base.draenei.name)

		// High Elves
		this.base.highElves = new Spawn('highElves', factions.highElves)
		this.base.highElves.addUnit({ unitType: UnitType.HighElfApprenticeSwordsman, waves: [1, 2, 3, 5], end: 3 })
		this.base.highElves.addUnit({ unitType: UnitType.HighElfApprenticeSwordsman, waves: [1, 3], start: 4 })
		this.base.highElves.addUnit({ unitType: UnitType.HighElfArcher, waves: [1, 3, 5], start: 2 })
		this.base.highElves.addUnit({ unitType: UnitType.HighElfSwordsman, amount: 2, waves: [1, 2, 3, 4], start: 4 })
		this.base.highElves.addUnit({ unitType: UnitType.HighElfHealer, waves: [1, 3, 5], start: 5 })
		this.base.highElves.addUnit({ unitType: UnitType.DragonHawk, amount: 2, waves: [2, 3, 5], start: 6 })
		this.base.highElves.addUnit({ unitType: UnitType.HighElfKnight, waves: [1, 3, 5], start: 7 })
		this.addSpawn(this.base.highElves.name)

		// High Elves Creep
		this.base.highElvesCreep = new Spawn('highElvesCreep', factions.highElvesCreep)
		this.base.highElvesCreep.addUnit({ unitType: UnitType.HighElfSwordsman, waves: [1, 2, 3, 4] })
		this.base.highElvesCreep.addUnit({ unitType: UnitType.HighElfArcher, waves: [1, 3, 5], start: 2 })
		this.base.highElvesCreep.addUnit({ unitType: UnitType.HighElfHealer, waves: [1, 3], start: 4 })
		this.base.highElvesCreep.addUnit({ unitType: UnitType.HighElfGuardian, amount: 2, waves: [3], start: 5 })
		this.addSpawn(this.base.highElvesCreep.name)

		// Merc this
		this.base.merc = new Spawn('merc', factions.merc)
		this.base.merc.addUnit({ unitType: UnitType.Rogue, amount: 2, waves: [4, 5, 6, 7] })
		this.base.merc.addUnit({ unitType: UnitType.BanditSpearman, waves: [3, 4, 5, 6, 7, 8, 9], start: 2 })
		this.base.merc.addUnit({ unitType: UnitType.Bandit, amount: 2, waves: [3, 5, 6, 7], start: 3 })
		this.base.merc.addUnit({ unitType: UnitType.Enforcer, waves: [3, 5], start: 4 })
		this.base.merc.addUnit({ unitType: UnitType.Assassin, waves: [5, 6, 7], start: 5 })
		this.base.merc.addUnit({ unitType: UnitType.BanditLord, waves: [3, 5], start: 6 })
		this.addSpawn(this.base.merc.name)

		// Dwarf this
		this.base.dwarf = new Spawn('dwarf', factions.dwarf)
		this.base.dwarf.addUnit({ unitType: UnitType.IronGuard, amount: 2, waves: [1, 2, 3, 5, 6], end: 1 })
		this.base.dwarf.addUnit({ unitType: UnitType.IronGuard, amount: 3, waves: [1, 2, 3, 4, 5, 6, 7], start: 2 })
		this.base.dwarf.addUnit({ unitType: UnitType.IronRifleman, waves: [1, 2, 3, 4, 5, 6], start: 2 })
		this.base.dwarf.addUnit({ unitType: UnitType.IronMortarTeam, waves: [2, 3, 4, 6], start: 3 })
		this.base.dwarf.addUnit({ unitType: UnitType.IronCaptain, waves: [1, 2, 3, 4, 5, 6], start: 4 })
		this.base.dwarf.addUnit({ unitType: UnitType.IronMagi, waves: [1, 2, 3, 4], start: 5 })
		this.base.dwarf.addUnit({ unitType: UnitType.SeigeEngine, waves: [1, 2, 5], start: 6 })
		this.base.dwarf.addUnit({ unitType: UnitType.GryphonRider, waves: [1, 2, 3, 4, 5], start: 8 })
		this.addSpawn(this.base.dwarf.name)

		// Dwarf Creep this
		this.base.dwarfCreep = new Spawn('dwarfCreep', factions.dwarfCreep)
		this.base.dwarfCreep.addUnit({ unitType: UnitType.IronGuard, amount: 2, waves: [5, 6, 7, 8] })
		this.base.dwarfCreep.addUnit({ unitType: UnitType.IronRifleman, waves: [5, 7], start: 3 })
		this.base.dwarfCreep.addUnit({ unitType: UnitType.IronCaptain, waves: [5, 7, 8], start: 4 })
		this.base.dwarfCreep.addUnit({ unitType: UnitType.IronMagi, waves: [6], start: 5 })
		this.addSpawn(this.base.dwarfCreep.name)

		// Murloc this
		this.base.murloc = new Spawn('murloc', factions.murloc)
		this.base.murloc.addUnit({ unitType: UnitType.MurlocCliffRunner, amount: 3, waves: [5, 6, 7, 8, 9, 10] })
		this.base.murloc.addUnit({ unitType: UnitType.MurlocCliffRunner, amount: 2, waves: [5, 6, 7, 8], start: 5 })
		this.base.murloc.addUnit({ unitType: UnitType.MurlocReaver, waves: [5, 7, 9], start: 3 })
		this.base.murloc.addUnit({ unitType: UnitType.MurlocSnareCaster, waves: [6, 7, 8, 10], start: 4 })
		this.base.murloc.addUnit({ unitType: UnitType.MurlocTideWarrior, waves: [4, 8], start: 7 })
		this.addSpawn(this.base.murloc.name)

		// Naga this
		this.base.naga = new Spawn('naga', factions.naga)
		this.base.naga.addUnit({ unitType: UnitType.NagaMyrmidon, waves: [1, 3], end: 3 })
		this.base.naga.addUnit({ unitType: UnitType.NagaMyrmidon, waves: [1, 2, 3, 4], start: 4, end: 6 })
		this.base.naga.addUnit({ unitType: UnitType.NagaMyrmidon, waves: [1, 3, 5], start: 7 })
		this.base.naga.addUnit({ unitType: UnitType.NagaMyrmidon, waves: [1, 2, 3, 4, 5, 6], start: 7 })
		this.base.naga.addUnit({ unitType: UnitType.NagaSiren, waves: [2, 4, 6], start: 3 })
		this.base.naga.addUnit({ unitType: UnitType.NagaRoyalGuard, waves: [2, 5], start: 6 })
		this.base.naga.addUnit({ unitType: UnitType.DragonTurtle, waves: [1, 4], start: 9 })
		this.addSpawn(this.base.naga.name)

		// Naga Creep this
		this.base.nagaCreep = new Spawn('nagaCreep', factions.nagaCreep)
		this.base.nagaCreep.addUnit({ unitType: UnitType.NagaMyrmidon, waves: [1, 2], start: 2 })
		this.base.nagaCreep.addUnit({ unitType: UnitType.NagaSiren, waves: [2, 4], start: 3 })
		this.base.nagaCreep.addUnit({ unitType: UnitType.SnapDragon, waves: [2, 3, 4], start: 5 })
		this.addSpawn(this.base.nagaCreep.name)

		// Tree this
		this.base.tree = new Spawn('tree', factions.tree)
		this.base.tree.addUnit({ unitType: UnitType.Dryad, waves: [7, 8, 9, 10], start: 3 })
		this.base.tree.addUnit({ unitType: UnitType.DruidOfTheClaw, waves: [6, 7, 8, 9, 10], start: 4 })
		this.base.tree.addUnit({ unitType: UnitType.MountainGiant, waves: [5, 9], start: 5 })
		this.base.tree.addUnit({ unitType: UnitType.AncientOfLife, waves: [5, 8], start: 6 })
		this.base.tree.addUnit({ unitType: UnitType.AncientOfWar, waves: [3], start: 10 })
		this.addSpawn(this.base.tree.name)

		// Night Elves this
		this.base.nightElf = new Spawn('nightElf', factions.nightElf)
		this.base.nightElf.addUnit({ unitType: UnitType.NightElfRanger, waves: [5, 6, 7, 8, 9, 10] })
		this.base.nightElf.addUnit({ unitType: UnitType.NightElfEliteRanger, waves: [6, 7, 8, 9, 10], start: 2 })
		this.base.nightElf.addUnit({ unitType: UnitType.NightElfSentry, waves: [6, 7, 8, 9, 10], start: 2 })
		this.base.nightElf.addUnit({ unitType: UnitType.NightElfSentry, waves: [7, 8, 9], start: 4 })
		this.base.nightElf.addUnit({ unitType: UnitType.NightElfWarden, waves: [6, 7, 8, 9, 10], start: 5 })
		this.base.nightElf.addUnit({ unitType: UnitType.HippogryphRider, amount: 2, waves: [4, 6, 7], start: 6 })
		this.addSpawn(this.base.nightElf.name)

		// Orc this
		this.base.orc = new Spawn('orc', factions.orc)
		this.base.orc.addUnit({ unitType: UnitType.Grunt, amount: 2, waves: [1, 3, 5, 6] })
		this.base.orc.addUnit({ unitType: UnitType.Grunt, waves: [2, 4, 6, 7], start: 3 })
		this.base.orc.addUnit({ unitType: UnitType.TrollAxethrower, waves: [2, 4, 6, 7], start: 2 })
		this.base.orc.addUnit({ unitType: UnitType.Ogre, amount: 2, waves: [2, 4, 6, 7], start: 4 })
		this.base.orc.addUnit({ unitType: UnitType.Warlock, waves: [3, 5, 7], start: 3 })
		this.base.orc.addUnit({ unitType: UnitType.OrcWarlord, waves: [1, 7], start: 6 })
		this.addSpawn(this.base.orc.name)

		// Human Shipyard this
		this.base.humanShipyard = new Spawn('humanShipyard', factions.humanShipyard)
		this.base.humanShipyard.addUnit({ unitType: UnitType.HumanFrigate, waves: [2], end: 2 })
		this.base.humanShipyard.addUnit({ unitType: UnitType.HumanFrigate, waves: [2, 6], start: 3, end: 5 })
		this.base.humanShipyard.addUnit({ unitType: UnitType.HumanFrigate, waves: [2, 4, 7], start: 6, end: 8 })
		this.base.humanShipyard.addUnit({ unitType: UnitType.HumanFrigate, waves: [2, 4, 6, 7], start: 9 })
		this.base.humanShipyard.addUnit({ unitType: UnitType.HumanBattleship, waves: [3], start: 5, end: 7 })
		this.base.humanShipyard.addUnit({ unitType: UnitType.HumanBattleship, waves: [3, 5], start: 8 })
		this.addSpawn(this.base.humanShipyard.name)

		// Night Elf Shipyard this
		this.base.nightElfShipyard = new Spawn('nightElfShipyard', factions.nightElfShipyard)
		this.base.nightElfShipyard.addUnit({ unitType: UnitType.NightElfFrigate, waves: [3], end: 3 })
		this.base.nightElfShipyard.addUnit({ unitType: UnitType.NightElfFrigate, waves: [1, 3], start: 4, end: 5 })
		this.base.nightElfShipyard.addUnit({ unitType: UnitType.NightElfFrigate, waves: [1, 3, 6], start: 6 })
		this.base.nightElfShipyard.addUnit({ unitType: UnitType.NightElfBattleship, waves: [3], start: 7 })
		this.addSpawn(this.base.nightElfShipyard.name)

		// Undead this
		this.base.undead = new Spawn('undead', factions.undead)
		this.base.undead.addUnit({ unitType: UnitType.Ghoul, amount: 4, waves: [4, 5, 6, 7, 8] })
		this.base.undead.addUnit({ unitType: UnitType.Necromancer, waves: [4, 6, 8], start: 2 })
		this.base.undead.addUnit({ unitType: UnitType.Lich, waves: [5, 7, 9], start: 4 })
		this.base.undead.addUnit({ unitType: UnitType.EredarWarlock, waves: [6], start: 6 })
		this.base.undead.addUnit({ unitType: UnitType.GiantSkeleton, waves: [4, 6], start: 8 })
		this.base.undead.addUnit({ unitType: UnitType.InfernalContraption, waves: [5, 7], start: 3, end: 5 })
		this.base.undead.addUnit({ unitType: UnitType.InfernalMachine, waves: [5, 7], start: 6, end: 9 })
		this.base.undead.addUnit({ unitType: UnitType.InfernalJuggernaut, waves: [5, 7], start: 10 })
		this.addSpawn(this.base.undead.name)
	}

	addSpawn = (value: string): void => {
		this.spawns.push(value)
	};

	iterate = (): void => {
		try {
			const spawnName = this.spawns[this.check.base]

			const curSpawn: Spawn = this.base[spawnName]

			// this Units
			curSpawn.spawnUnit(this.check)

			this.check.unit++

			// If unit is last unit in Base
			if (this.check.unit > curSpawn.countOfUnits - 1) {
				this.check.unit = 0
				this.check.base++

				// Base is last Base in Wave
				if (this.check.base >= this.spawns.length) {
					this.check.base = 0
					this.check.wave++

					// Wave is last Wave in Cycly
					if (this.check.wave > this.check.waves) {
						this.check.wave = 1

						// New Cycle Time
						this.spawnTimer.start(this.loop.cycle, false, () => { this.iterate() })
					} else {
						// New Wave Time
						this.spawnTimer.start(this.loop.wave, false, () => { this.iterate() })
					}
				} else {
					// New Base Time
					this.spawnTimer.start(this.loop.base, false, () => { this.iterate() })
				}
			} else {
				// New Unit Time
				this.spawnTimer.start(this.loop.unit, false, () => { this.iterate() })
			}
		} catch (e) {
			print(e)
		}
	};

	levelUp = (): number => {
		this.check.level++
		if (this.check.level > this.check.levels) {
			this.check.level = this.check.levels
		} else {
			print('Level Up')

			this.levelTimer.start((50 + (15 * this.check.level)), false, () => { this.levelUp() })
		}
		return this.check.level
	};

	start = (): void => {
		this.spawnTimer = new Timer()
		this.spawnTimer.start(1, false, () => { this.iterate() })

		this.levelTimer = new Timer()
		this.levelTimer.start((50 + (10 * this.check.level)), false, () => { this.levelUp() })
	};
}
