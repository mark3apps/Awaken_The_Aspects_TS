
import { Faction } from "app/classes/faction"
import { SpawnLoop, SpawnValues } from "lib/resources/spawnCheck"
import { SpawnUnit } from "lib/resources/spawnUnit"
import { OrderId } from "lib/w3ts/globals/order"
import { Timer, Unit } from "lib/w3ts/index"
import { Base } from "./base"
import { UnitType } from "./unitType"





export class Spawn {

    private _faction: Faction
    private units: SpawnUnit[]
    public name: string

    constructor(name: string) {
        this.name = name
        this.units = []
    }

    //
    // Instance Methods
    //

    public set faction(value: Faction) {
        this._faction = value
    }

    public get faction(): Faction {
        return this._faction
    }

    public addUnit(sUnit: SpawnUnit): void {
        if (sUnit.start == null) { sUnit.start = 1 }
        if (sUnit.end == null) { sUnit.end = 12 }
        if (sUnit.amount == null) { sUnit.amount = 1 }

        this.units.push(sUnit)

    }

    public unitInWave(check: SpawnValues): boolean {
        const sUnit = this.units[check.unit]
        return sUnit.waves.indexOf(check.wave) > -1
    }

    public unitInLevel(check: SpawnValues): boolean {
        const sUnit = this.units[check.unit]
        return sUnit.start <= check.level && sUnit.end >= check.level
    }

    public unitReady(check: SpawnValues): boolean {
        const sUnit = this.units[check.unit]
        return sUnit.start <= check.level && sUnit.end >= check.level && sUnit.waves.indexOf(check.wave) > -1
    }

    public get countOfUnits(): number {
        return this.units.length
    }

    public spawnUnits(check: SpawnValues): void {

        for (let i = 0; i < this.units.length; i++) {
            check.unit = i
            this.spawnUnit(check)
        }
    }

    public spawnUnit(check: SpawnValues): void {

        const unitElement = this.units[check.unit]

        if (this.unitReady(check)) {
            for (let b = 0; b < 2; b++) {

                const baseElement: Base = this._faction[["alliance", "federation"][b]]

                if (baseElement.isAlive()) {
                    for (let index = 0; index < unitElement.amount; index++) {

                        const start = baseElement.randomStartCoordinate()
                        const dest = baseElement.randomEndCoordinate()
                        const p = baseElement.army.randomPlayer
                        const unitType = unitElement.unitType

                        const u = new Unit(p, unitType.id, start.x, start.y, bj_UNIT_FACING)
                        u.issueOrderAtCoordinate(OrderId.Attack, dest)

                    }

                }
            }

        }
    }





    static maxLevel = 12
    static maxWaves = 10

    static spawnTimer: Timer
    static levelTimer: Timer
    static check: SpawnValues = { levels: 12, waves: 10, level: 1, wave: 1, base: 0, unit: 0 }
    static loop: SpawnLoop = { cycle: 1, wave: 10, base: 0.5, unit: 0.05 }
    static spawns: string[] = []

    static base: { [name: string]: Spawn } = {}


    static addSpawn = (value: string): void => {
        Spawn.spawns.push(value)
    }



    static iterate = (): void => {

        try {

            const spawnName = Spawn.spawns[Spawn.check.base]

            const curSpawn: Spawn = Spawn.base[spawnName]

            // Spawn Units
            curSpawn.spawnUnit(Spawn.check)

            Spawn.check.unit++

            // If unit is last unit in Base
            if (Spawn.check.unit > curSpawn.countOfUnits - 1) {
                Spawn.check.unit = 0
                Spawn.check.base++

                // Base is last Base in Wave
                if (Spawn.check.base >= Spawn.spawns.length) {
                    Spawn.check.base = 0
                    Spawn.check.wave++

                    // Wave is last Wave in Cycly
                    if (Spawn.check.wave > Spawn.check.waves) {
                        Spawn.check.wave = 1

                        // New Cycle Time
                        Spawn.spawnTimer.start(Spawn.loop.cycle, false, () => { Spawn.iterate() })
                    } else {

                        // New Wave Time
                        Spawn.spawnTimer.start(Spawn.loop.wave, false, () => { Spawn.iterate() })
                    }
                } else {

                    // New Base Time
                    Spawn.spawnTimer.start(Spawn.loop.base, false, () => { Spawn.iterate() })
                }
            } else {

                // New Unit Time
                Spawn.spawnTimer.start(Spawn.loop.unit, false, () => { Spawn.iterate() })
            }
        } catch (e) {
            print(e)
        }
    }

    static levelUp = (): number => {
        Spawn.check.level++
        if (Spawn.check.level > Spawn.check.levels) {
            Spawn.check.level = Spawn.check.levels
        } else {
            print("Level Up")

            Spawn.levelTimer.start((50 + (15 * Spawn.check.level)), false, () => { Spawn.levelUp() })
        }
        return Spawn.check.level
    }


    static start = (): void => {

        Spawn.spawnTimer = new Timer()
        Spawn.spawnTimer.start(1, false, () => { Spawn.iterate() })

        Spawn.levelTimer = new Timer()
        Spawn.levelTimer.start((50 + (10 * Spawn.check.level)), false, () => { Spawn.levelUp() })
    }



    static define = (): void => {

        // Arcane
        Spawn.base.arcane = new Spawn("arcane")
        Spawn.base.arcane.faction = Faction.arcane
        Spawn.base.arcane.addUnit({ unitType: UnitType.Sorceress, waves: [6, 7, 8, 9, 10], start: 3 })
        Spawn.base.arcane.addUnit({ unitType: UnitType.StormSummoner, waves: [6, 7, 8, 9, 10], start: 5 })
        Spawn.base.arcane.addUnit({ unitType: UnitType.MagiDefender, waves: [6, 8], start: 7 })
        Spawn.addSpawn(Spawn.base.arcane.name)

        //Arcane Creep
        Spawn.base.arcaneCreep = new Spawn("arcaneCreep")
        Spawn.base.arcaneCreep.faction = Faction.arcaneCreep
        Spawn.base.arcaneCreep.addUnit({ unitType: UnitType.BattleGolem, waves: [1, 2, 3, 4], start: 1 })
        Spawn.base.arcaneCreep.addUnit({ unitType: UnitType.WaterElemental2, waves: [1, 3], start: 3 })
        Spawn.base.arcaneCreep.addUnit({ unitType: UnitType.WaterElemental3, waves: [2, 3], start: 4 })
        Spawn.base.arcaneCreep.addUnit({ unitType: UnitType.MagiDefender, waves: [1, 2], start: 6 })
        Spawn.addSpawn(Spawn.base.arcaneCreep.name)

        // Arcane Hero Spawn
        Spawn.base.arcaneHero = new Spawn("arcaneHero")
        Spawn.base.arcaneHero.faction = Faction.arcaneHero
        Spawn.base.arcaneHero.addUnit({ unitType: UnitType.MagiDefender, waves: [1, 2, 3, 5], start: 6 })
        Spawn.base.arcaneHero.addUnit({ unitType: UnitType.SupremeWizard, waves: [5], start: 7 })
        Spawn.base.arcaneHero.addUnit({ unitType: UnitType.SeigeGolem, waves: [4], start: 9 })
        Spawn.addSpawn(Spawn.base.arcaneHero.name)

        // Arcane Top Spawn
        Spawn.base.arcaneTop = new Spawn("arcaneTop")
        Spawn.base.arcaneTop.faction = Faction.arcaneTop
        Spawn.base.arcaneTop.addUnit({ unitType: UnitType.BattleGolem, amount: 2, waves: [4, 5, 6] })
        Spawn.base.arcaneTop.addUnit({ unitType: UnitType.WaterElemental2, waves: [4, 6], start: 4 })
        Spawn.base.arcaneTop.addUnit({ unitType: UnitType.Summoner, waves: [4], start: 8 })
        Spawn.addSpawn(Spawn.base.arcaneTop.name)

        // Arcane Bottom Spawn
        Spawn.base.arcaneBottom = new Spawn("arcaneBottom")
        Spawn.base.arcaneBottom.faction = Faction.arcaneBottom
        Spawn.base.arcaneBottom.addUnit({ unitType: UnitType.BattleGolem, amount: 2, waves: [1, 2, 3], start: 2 })
        Spawn.base.arcaneBottom.addUnit({ unitType: UnitType.WaterElemental2, waves: [1, 3], start: 4 })
        Spawn.base.arcaneBottom.addUnit({ unitType: UnitType.Summoner, waves: [1], start: 8 })
        Spawn.addSpawn(Spawn.base.arcaneBottom.name)

        // High City Spawn
        Spawn.base.highCity = new Spawn("highCity")
        Spawn.base.highCity.faction = Faction.highCity
        Spawn.base.highCity.addUnit({ unitType: UnitType.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6], end: 7 })
        Spawn.base.highCity.addUnit({ unitType: UnitType.Arbalist, waves: [1, 2, 3, 4], start: 1, end: 4 })
        Spawn.base.highCity.addUnit({ unitType: UnitType.Arbalist, waves: [1, 2, 3, 4, 5, 6, 7], start: 5 })
        Spawn.base.highCity.addUnit({ unitType: UnitType.Footman1, waves: [1, 2, 3, 4], start: 4, end: 7 })
        Spawn.base.highCity.addUnit({ unitType: UnitType.Footman2, amount: 2, waves: [1, 2, 3, 4], start: 8 })
        Spawn.base.highCity.addUnit({ unitType: UnitType.Captain1, amount: 1, waves: [1, 3], start: 9 })
        Spawn.addSpawn(Spawn.base.highCity.name)

        // Castle Spawn
        Spawn.base.castle = new Spawn("castle")
        Spawn.base.castle.faction = Faction.castle
        Spawn.base.castle.addUnit({ unitType: UnitType.Captain2, waves: [1, 2, 3], start: 8 })
        Spawn.addSpawn(Spawn.base.castle.name)

        // City Elves
        Spawn.base.cityElves = new Spawn("cityElves")
        Spawn.base.cityElves.faction = Faction.cityElves
        Spawn.base.cityElves.addUnit({ unitType: UnitType.BloodElfArcher, waves: [1, 3, 5], end: 1 })
        Spawn.base.cityElves.addUnit({ unitType: UnitType.BloodElfArcher, waves: [1, 2, 3, 4, 5, 6], start: 2 })
        Spawn.base.cityElves.addUnit({ unitType: UnitType.BloodElfArcher, waves: [2, 3, 4, 5], start: 4 })
        Spawn.base.cityElves.addUnit({ unitType: UnitType.BloodElfBreaker, waves: [1, 3, 4, 5, 6], start: 2, end: 3 })
        Spawn.base.cityElves.addUnit({ unitType: UnitType.BloodElfBreaker, waves: [1, 2, 3, 4, 5, 6, 7], start: 4, end: 5 })
        Spawn.base.cityElves.addUnit({ unitType: UnitType.BloodElfBreaker, amount: 2, waves: [1, 2, 3, 4, 5], start: 6 })
        Spawn.base.cityElves.addUnit({ unitType: UnitType.BloodElfMage, waves: [1, 4], start: 3, end: 6 })
        Spawn.base.cityElves.addUnit({ unitType: UnitType.BloodElfMage, waves: [1, 2, 3, 4, 5, 7], start: 7 })
        Spawn.addSpawn(Spawn.base.cityElves.name)

        // City Front Spawn
        Spawn.base.cityFront = new Spawn("cityFront")
        Spawn.base.cityFront.faction = Faction.cityFront
        Spawn.base.cityFront.addUnit({ unitType: UnitType.Militia1, amount: 3, waves: [1, 2, 3, 4, 5, 6], end: 2 })
        Spawn.base.cityFront.addUnit({ unitType: UnitType.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6, 7], start: 3, end: 4 })
        Spawn.base.cityFront.addUnit({ unitType: UnitType.Footman1, amount: 3, waves: [1, 2, 3, 5, 6, 7], start: 5 })
        Spawn.base.cityFront.addUnit({ unitType: UnitType.Captain1, amount: 2, waves: [3, 4, 7], start: 5 })
        Spawn.base.cityFront.addUnit({ unitType: UnitType.Knight, waves: [1, 3, 5, 7], start: 6 })
        Spawn.base.cityFront.addUnit({ unitType: UnitType.Catapult, waves: [1, 4], start: 6 })
        Spawn.base.cityFront.addUnit({ unitType: UnitType.Commander, waves: [2], start: 10 })
        Spawn.addSpawn(Spawn.base.cityFront.name)

        // Draenei Spawn
        Spawn.base.draenei = new Spawn("draenei")
        Spawn.base.draenei.faction = Faction.draenei
        Spawn.base.draenei.addUnit({ unitType: UnitType.DraeneiGuardian, amount: 2, waves: [5, 6, 7, 8, 9, 10] })
        Spawn.base.draenei.addUnit({ unitType: UnitType.DraeneiGuardian, waves: [7, 8, 9], start: 5 })
        Spawn.base.draenei.addUnit({ unitType: UnitType.DraeneiDarkslayer, waves: [6, 7, 8, 9, 10], start: 3 })
        Spawn.base.draenei.addUnit({ unitType: UnitType.DraeneiSeer, waves: [7, 10], start: 4 })
        Spawn.base.draenei.addUnit({ unitType: UnitType.DraeneiVindicator, waves: [5, 6, 8], start: 7 })
        Spawn.base.draenei.addUnit({ unitType: UnitType.DraeneiDemolisher, waves: [6, 8, 10], start: 6 })
        Spawn.addSpawn(Spawn.base.draenei.name)

        // High Elves
        Spawn.base.highElves = new Spawn("highElves")
        Spawn.base.highElves.faction = Faction.highElves
        Spawn.base.highElves.addUnit({ unitType: UnitType.HighElfApprenticeSwordsman, waves: [1, 2, 3, 5], end: 3 })
        Spawn.base.highElves.addUnit({ unitType: UnitType.HighElfApprenticeSwordsman, waves: [1, 3], start: 4 })
        Spawn.base.highElves.addUnit({ unitType: UnitType.HighElfArcher, waves: [1, 3, 5], start: 2 })
        Spawn.base.highElves.addUnit({ unitType: UnitType.HighElfSwordsman, amount: 2, waves: [1, 2, 3, 4], start: 4 })
        Spawn.base.highElves.addUnit({ unitType: UnitType.HighElfHealer, waves: [1, 3, 5], start: 5 })
        Spawn.base.highElves.addUnit({ unitType: UnitType.DragonHawk, amount: 2, waves: [2, 3, 5], start: 6 })
        Spawn.base.highElves.addUnit({ unitType: UnitType.HighElfKnight, waves: [1, 3, 5], start: 7 })
        Spawn.addSpawn(Spawn.base.highElves.name)

        // High Elves Creep
        Spawn.base.highElvesCreep = new Spawn("highElvesCreep")
        Spawn.base.highElvesCreep.faction = Faction.highElvesCreep
        Spawn.base.highElvesCreep.addUnit({ unitType: UnitType.HighElfSwordsman, waves: [1, 2, 3, 4] })
        Spawn.base.highElvesCreep.addUnit({ unitType: UnitType.HighElfArcher, waves: [1, 3, 5], start: 2 })
        Spawn.base.highElvesCreep.addUnit({ unitType: UnitType.HighElfHealer, waves: [1, 3], start: 4 })
        Spawn.base.highElvesCreep.addUnit({ unitType: UnitType.HighElfGuardian, amount: 2, waves: [3], start: 5 })
        Spawn.addSpawn(Spawn.base.highElvesCreep.name)

        // Merc Spawn
        Spawn.base.merc = new Spawn("merc")
        Spawn.base.merc.faction = Faction.merc
        Spawn.base.merc.addUnit({ unitType: UnitType.Rogue, amount: 2, waves: [4, 5, 6, 7] })
        Spawn.base.merc.addUnit({ unitType: UnitType.BanditSpearman, waves: [3, 4, 5, 6, 7, 8, 9], start: 2 })
        Spawn.base.merc.addUnit({ unitType: UnitType.Bandit, amount: 2, waves: [3, 5, 6, 7], start: 3 })
        Spawn.base.merc.addUnit({ unitType: UnitType.Enforcer, waves: [3, 5], start: 4 })
        Spawn.base.merc.addUnit({ unitType: UnitType.Assassin, waves: [5, 6, 7], start: 5 })
        Spawn.base.merc.addUnit({ unitType: UnitType.BanditLord, waves: [3, 5], start: 6 })
        Spawn.addSpawn(Spawn.base.merc.name)

        // Dwarf Spawn
        Spawn.base.dwarf = new Spawn("dwarf")
        Spawn.base.dwarf.faction = Faction.dwarf
        Spawn.base.dwarf.addUnit({ unitType: UnitType.IronGuard, amount: 2, waves: [1, 2, 3, 5, 6], end: 1 })
        Spawn.base.dwarf.addUnit({ unitType: UnitType.IronGuard, amount: 3, waves: [1, 2, 3, 4, 5, 6, 7], start: 2 })
        Spawn.base.dwarf.addUnit({ unitType: UnitType.IronRifleman, waves: [1, 2, 3, 4, 5, 6], start: 2 })
        Spawn.base.dwarf.addUnit({ unitType: UnitType.IronMortarTeam, waves: [2, 3, 4, 6], start: 3 })
        Spawn.base.dwarf.addUnit({ unitType: UnitType.IronCaptain, waves: [1, 2, 3, 4, 5, 6], start: 4 })
        Spawn.base.dwarf.addUnit({ unitType: UnitType.IronMagi, waves: [1, 2, 3, 4], start: 5 })
        Spawn.base.dwarf.addUnit({ unitType: UnitType.SeigeEngine, waves: [1, 2, 5], start: 6 })
        Spawn.base.dwarf.addUnit({ unitType: UnitType.GryphonRider, waves: [1, 2, 3, 4, 5], start: 8 })
        Spawn.addSpawn(Spawn.base.dwarf.name)

        // Dwarf Creep Spawn
        Spawn.base.dwarfCreep = new Spawn("dwarfCreep")
        Spawn.base.dwarfCreep.faction = Faction.dwarfCreep
        Spawn.base.dwarfCreep.addUnit({ unitType: UnitType.IronGuard, amount: 2, waves: [5, 6, 7, 8] })
        Spawn.base.dwarfCreep.addUnit({ unitType: UnitType.IronRifleman, waves: [5, 7], start: 3 })
        Spawn.base.dwarfCreep.addUnit({ unitType: UnitType.IronCaptain, waves: [5, 7, 8], start: 4 })
        Spawn.base.dwarfCreep.addUnit({ unitType: UnitType.IronMagi, waves: [6], start: 5 })
        Spawn.addSpawn(Spawn.base.dwarfCreep.name)

        // Murloc Spawn
        Spawn.base.murloc = new Spawn("murloc")
        Spawn.base.murloc.faction = Faction.murloc
        Spawn.base.murloc.addUnit({ unitType: UnitType.MurlocCliffRunner, amount: 3, waves: [5, 6, 7, 8, 9, 10] })
        Spawn.base.murloc.addUnit({ unitType: UnitType.MurlocCliffRunner, amount: 2, waves: [5, 6, 7, 8], start: 5 })
        Spawn.base.murloc.addUnit({ unitType: UnitType.MurlocReaver, waves: [5, 7, 9], start: 3 })
        Spawn.base.murloc.addUnit({ unitType: UnitType.MurlocSnareCaster, waves: [6, 7, 8, 10], start: 4 })
        Spawn.base.murloc.addUnit({ unitType: UnitType.MurlocTideWarrior, waves: [4, 8], start: 7 })
        Spawn.addSpawn(Spawn.base.murloc.name)

        // Naga Spawn
        Spawn.base.naga = new Spawn("naga")
        Spawn.base.naga.faction = Faction.naga
        Spawn.base.naga.addUnit({ unitType: UnitType.NagaMyrmidon, waves: [1, 3], end: 3 })
        Spawn.base.naga.addUnit({ unitType: UnitType.NagaMyrmidon, waves: [1, 2, 3, 4], start: 4, end: 6 })
        Spawn.base.naga.addUnit({ unitType: UnitType.NagaMyrmidon, waves: [1, 3, 5], start: 7 })
        Spawn.base.naga.addUnit({ unitType: UnitType.NagaMyrmidon, waves: [1, 2, 3, 4, 5, 6], start: 7 })
        Spawn.base.naga.addUnit({ unitType: UnitType.NagaSiren, waves: [2, 4, 6], start: 3 })
        Spawn.base.naga.addUnit({ unitType: UnitType.NagaRoyalGuard, waves: [2, 5], start: 6 })
        Spawn.base.naga.addUnit({ unitType: UnitType.DragonTurtle, waves: [1, 4], start: 9 })
        Spawn.addSpawn(Spawn.base.naga.name)

        // Naga Creep Spawn
        Spawn.base.nagaCreep = new Spawn("nagaCreep")
        Spawn.base.nagaCreep.faction = Faction.nagaCreep
        Spawn.base.nagaCreep.addUnit({ unitType: UnitType.NagaMyrmidon, waves: [1, 2], start: 2 })
        Spawn.base.nagaCreep.addUnit({ unitType: UnitType.NagaSiren, waves: [2, 4], start: 3 })
        Spawn.base.nagaCreep.addUnit({ unitType: UnitType.SnapDragon, waves: [2, 3, 4], start: 5 })
        Spawn.addSpawn(Spawn.base.nagaCreep.name)

        // Tree Spawn
        Spawn.base.tree = new Spawn("tree")
        Spawn.base.tree.faction = Faction.tree
        Spawn.base.tree.addUnit({ unitType: UnitType.Dryad, waves: [7, 8, 9, 10], start: 3 })
        Spawn.base.tree.addUnit({ unitType: UnitType.DruidOfTheClaw, waves: [6, 7, 8, 9, 10], start: 4 })
        Spawn.base.tree.addUnit({ unitType: UnitType.MountainGiant, waves: [5, 9], start: 5 })
        Spawn.base.tree.addUnit({ unitType: UnitType.AncientOfLife, waves: [5, 8], start: 6 })
        Spawn.base.tree.addUnit({ unitType: UnitType.AncientOfWar, waves: [3], start: 10 })
        Spawn.addSpawn(Spawn.base.tree.name)

        // Night Elves Spawn
        Spawn.base.nightElf = new Spawn("nightElf")
        Spawn.base.nightElf.faction = Faction.nightElf
        Spawn.base.nightElf.addUnit({ unitType: UnitType.NightElfRanger, waves: [5, 6, 7, 8, 9, 10] })
        Spawn.base.nightElf.addUnit({ unitType: UnitType.NightElfEliteRanger, waves: [6, 7, 8, 9, 10], start: 2 })
        Spawn.base.nightElf.addUnit({ unitType: UnitType.NightElfSentry, waves: [6, 7, 8, 9, 10], start: 2 })
        Spawn.base.nightElf.addUnit({ unitType: UnitType.NightElfSentry, waves: [7, 8, 9], start: 4 })
        Spawn.base.nightElf.addUnit({ unitType: UnitType.NightElfWarden, waves: [6, 7, 8, 9, 10], start: 5 })
        Spawn.base.nightElf.addUnit({ unitType: UnitType.HippogryphRider, amount: 2, waves: [4, 6, 7], start: 6 })
        Spawn.addSpawn(Spawn.base.nightElf.name)

        // Orc Spawn
        Spawn.base.orc = new Spawn("orc")
        Spawn.base.orc.faction = Faction.orc
        Spawn.base.orc.addUnit({ unitType: UnitType.Grunt, amount: 2, waves: [1, 3, 5, 6] })
        Spawn.base.orc.addUnit({ unitType: UnitType.Grunt, waves: [2, 4, 6, 7], start: 3 })
        Spawn.base.orc.addUnit({ unitType: UnitType.TrollAxethrower, waves: [2, 4, 6, 7], start: 2 })
        Spawn.base.orc.addUnit({ unitType: UnitType.Ogre, amount: 2, waves: [2, 4, 6, 7], start: 4 })
        Spawn.base.orc.addUnit({ unitType: UnitType.Warlock, waves: [3, 5, 7], start: 3 })
        Spawn.base.orc.addUnit({ unitType: UnitType.OrcWarchief, waves: [1, 7], start: 6 })
        Spawn.addSpawn(Spawn.base.orc.name)

        // Human Shipyard Spawn
        Spawn.base.humanShipyard = new Spawn("humanShipyard")
        Spawn.base.humanShipyard.faction = Faction.humanShipyard
        Spawn.base.humanShipyard.addUnit({ unitType: UnitType.HumanFrigate, waves: [2], end: 2 })
        Spawn.base.humanShipyard.addUnit({ unitType: UnitType.HumanFrigate, waves: [2, 6], start: 3, end: 5 })
        Spawn.base.humanShipyard.addUnit({ unitType: UnitType.HumanFrigate, waves: [2, 4, 7], start: 6, end: 8 })
        Spawn.base.humanShipyard.addUnit({ unitType: UnitType.HumanFrigate, waves: [2, 4, 6, 7], start: 9 })
        Spawn.base.humanShipyard.addUnit({ unitType: UnitType.HumanBattleship, waves: [3], start: 5, end: 7 })
        Spawn.base.humanShipyard.addUnit({ unitType: UnitType.HumanBattleship, waves: [3, 5], start: 8 })
        Spawn.addSpawn(Spawn.base.humanShipyard.name)

        // Night Elf Shipyard Spawn
        Spawn.base.nightElfShipyard = new Spawn("nightElfShipyard")
        Spawn.base.nightElfShipyard.faction = Faction.nightElfShipyard
        Spawn.base.nightElfShipyard.addUnit({ unitType: UnitType.NightElfFrigate, waves: [3], end: 3 })
        Spawn.base.nightElfShipyard.addUnit({ unitType: UnitType.NightElfFrigate, waves: [1, 3], start: 4, end: 5 })
        Spawn.base.nightElfShipyard.addUnit({ unitType: UnitType.NightElfFrigate, waves: [1, 3, 6], start: 6 })
        Spawn.base.nightElfShipyard.addUnit({ unitType: UnitType.NightElfBattleship, waves: [3], start: 7 })
        Spawn.addSpawn(Spawn.base.nightElfShipyard.name)

        // Undead Spawn
        Spawn.base.undead = new Spawn("undead")
        Spawn.base.undead.faction = Faction.undead
        Spawn.base.undead.addUnit({ unitType: UnitType.Ghoul, amount: 4, waves: [4, 5, 6, 7, 8] })
        Spawn.base.undead.addUnit({ unitType: UnitType.Necromancer, waves: [4, 6, 8], start: 2 })
        Spawn.base.undead.addUnit({ unitType: UnitType.Lich, waves: [5, 7, 9], start: 4 })
        Spawn.base.undead.addUnit({ unitType: UnitType.EredarWarlock, waves: [6], start: 6 })
        Spawn.base.undead.addUnit({ unitType: UnitType.GiantSkeleton, waves: [4, 6], start: 8 })
        Spawn.base.undead.addUnit({ unitType: UnitType.InfernalContraption, waves: [5, 7], start: 3, end: 5 })
        Spawn.base.undead.addUnit({ unitType: UnitType.InfernalMachine, waves: [5, 7], start: 6, end: 9 })
        Spawn.base.undead.addUnit({ unitType: UnitType.InfernalJuggernaut, waves: [5, 7], start: 10 })
        Spawn.addSpawn(Spawn.base.undead.name)
    }
}