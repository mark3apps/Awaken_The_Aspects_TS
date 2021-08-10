import { Spawn } from "classes/spawn"
import { FACTION, UNIT_TYPE, SPAWN } from "./index"


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

    export function define(): void {
        arcane = new Spawn("arcane")
        arcane.faction = FACTION.arcane
        arcane.addUnit({ unitId: UNIT_TYPE.Sorceress, waves: [6, 7, 8, 9, 10], start: 3 })
        arcane.addUnit({ unitId: UNIT_TYPE.StormSummoner, waves: [6, 7, 8, 9, 10], start: 5 })
        SPAWN.addSpawn(arcane.name)

        arcaneCreep = new Spawn("arcaneCreep")
        arcaneCreep.faction = FACTION.arcane
        arcaneCreep.addUnit({ unitId: UNIT_TYPE.BattleGolem, waves: [1, 2, 3, 4], start: 2 })
        arcaneCreep.addUnit({ unitId: UNIT_TYPE.WaterElemental2, waves: [1, 3], start: 3 })
        arcaneCreep.addUnit({ unitId: UNIT_TYPE.WaterElemental3, waves: [2, 3], start: 4 })
        arcaneCreep.addUnit({ unitId: UNIT_TYPE.MagiDefender, waves: [1, 2, 3, 5], start: 6 })
        SPAWN.addSpawn(arcaneCreep.name)

        // Arcane Hero Spawn
        arcaneHero = new Spawn("arcaneHero")
        arcaneHero.faction = FACTION.arcaneHero
        arcaneHero.addUnit({ unitId: UNIT_TYPE.SupremeWizard, waves: [5], start: 7 })
        arcaneHero.addUnit({ unitId: UNIT_TYPE.SeigeGolem, waves: [4], start: 9 })
        SPAWN.addSpawn(arcaneHero.name)

        // Arcane Top Spawn
        arcaneTop = new Spawn("arcaneTop")
        arcaneTop.faction = FACTION.arcaneTop
        arcaneTop.addUnit({ unitId: UNIT_TYPE.BattleGolem, amount: 2, waves: [4, 5, 6] })
        arcaneTop.addUnit({ unitId: UNIT_TYPE.WaterElemental2, waves: [4, 6], start: 4 })
        arcaneTop.addUnit({ unitId: UNIT_TYPE.Summoner, waves: [4], start: 8 })
        SPAWN.addSpawn(arcaneTop.name)

        // Arcane Bottom Spawn
        arcaneBottom = new Spawn("arcaneBottom")
        arcaneBottom.faction = FACTION.arcaneBottom
        arcaneBottom.addUnit({ unitId: UNIT_TYPE.BattleGolem, amount: 2, waves: [1, 2, 3], start: 2 })
        arcaneBottom.addUnit({ unitId: UNIT_TYPE.WaterElemental2, waves: [1, 3], start: 4 })
        arcaneBottom.addUnit({ unitId: UNIT_TYPE.Summoner, waves: [1], start: 8 })
        SPAWN.addSpawn(arcaneBottom.name)

        // High City Spawn
        highCity = new Spawn("highCity")
        highCity.faction = FACTION.highCity
        highCity.addUnit({ unitId: UNIT_TYPE.Militia1, amount: 2, waves: [1, 2, 3, 4], end: 6 })
        highCity.addUnit({ unitId: UNIT_TYPE.Arbalist, waves: [1, 2], start: 3 })
        highCity.addUnit({ unitId: UNIT_TYPE.BloodElfBreaker, waves: [3, 4], start: 5 })
        highCity.addUnit({ unitId: UNIT_TYPE.Footman2, waves: [1, 2, 3, 4, 5], start: 8 })
        highCity.addUnit({ unitId: UNIT_TYPE.Captain1, waves: [1, 2, 3, 4, 5], start: 11 })
        SPAWN.addSpawn(highCity.name)

        // Castle Spawn
        castle = new Spawn("castle")
        castle.faction = FACTION.castle
        castle.addUnit({ unitId: UNIT_TYPE.Captain2, waves: [1, 2, 3], start: 8 })
        SPAWN.addSpawn(castle.name)

        // City Elves
        cityElves = new Spawn("cityElves")
        cityElves.faction = FACTION.cityElves
        cityElves.addUnit({ unitId: UNIT_TYPE.BloodElfArcher, waves: [1, 3, 5], end: 3 })
        cityElves.addUnit({ unitId: UNIT_TYPE.BloodElfArcher, waves: [1, 2, 3, 4, 5, 6], start: 4 })
        cityElves.addUnit({ unitId: UNIT_TYPE.BloodElfBreaker, waves: [1, 3, 4, 5, 6], start: 2, end: 3 })
        cityElves.addUnit({ unitId: UNIT_TYPE.BloodElfBreaker, waves: [1, 2, 3, 4, 5, 6, 7], start: 4, end: 5 })
        cityElves.addUnit({ unitId: UNIT_TYPE.BloodElfBreaker, amount: 2, waves: [1, 2, 3, 4, 5], start: 6 })
        cityElves.addUnit({ unitId: UNIT_TYPE.BloodElfMage, waves: [1, 4], start: 3, end: 6 })
        cityElves.addUnit({ unitId: UNIT_TYPE.BloodElfMage, waves: [1, 2, 3, 4, 5, 7], start: 7 })
        SPAWN.addSpawn(cityElves.name)

        // City Front Spawn
        cityFront = new Spawn("cityFront")
        cityFront.faction = FACTION.cityFront
        cityFront.addUnit({ unitId: UNIT_TYPE.Militia1, amount: 3, waves: [1, 2, 3, 4, 5, 6], end: 2 })
        cityFront.addUnit({ unitId: UNIT_TYPE.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6], start: 3, end: 4 })
        cityFront.addUnit({ unitId: UNIT_TYPE.Footman1, amount: 3, waves: [1, 2, 3, 4, 5, 6], start: 5 })
        cityFront.addUnit({ unitId: UNIT_TYPE.Captain1, amount: 2, waves: [3, 4, 6], start: 5 })
        cityFront.addUnit({ unitId: UNIT_TYPE.Knight, waves: [1, 3, 5], start: 6 })
        cityFront.addUnit({ unitId: UNIT_TYPE.Catapult, waves: [1, 4], start: 8 })
        cityFront.addUnit({ unitId: UNIT_TYPE.Commander, waves: [2], start: 10 })
        SPAWN.addSpawn(cityFront.name)

        // City Side Spawn
        citySide = new Spawn("citySide")
        citySide.faction = FACTION.citySide
        citySide.addUnit({ unitId: UNIT_TYPE.Militia1, waves: [6, 7, 8, 9, 10], end: 2 })
        citySide.addUnit({ unitId: UNIT_TYPE.Footman1, amount: 2, waves: [5, 6, 8, 9], start: 2, end: 3 })
        citySide.addUnit({ unitId: UNIT_TYPE.Footman1, amount: 3, waves: [5, 6, 8, 9], start: 4 })
        citySide.addUnit({ unitId: UNIT_TYPE.Knight, waves: [6, 8], start: 3, end: 4 })
        citySide.addUnit({ unitId: UNIT_TYPE.Knight, waves: [6, 7, 8, 9], start: 5 })
        citySide.addUnit({ unitId: UNIT_TYPE.Footman2, waves: [8, 10], start: 6 })
        citySide.addUnit({ unitId: UNIT_TYPE.Arbalist, waves: [4, 5, 6, 7, 8, 9], start: 3 })
        SPAWN.addSpawn(citySide.name)

        // Draenei Spawn
        draenei = new Spawn("draenei")
        draenei.faction = FACTION.draenei
        draenei.addUnit({ unitId: UNIT_TYPE.DraeneiGuardian, amount: 2, waves: [5, 6, 7, 8, 9, 10] })
        draenei.addUnit({ unitId: UNIT_TYPE.DraeneiGuardian, waves: [7, 8, 9], start: 5 })
        draenei.addUnit({ unitId: UNIT_TYPE.DraeneiDarkslayer, waves: [6, 7, 8, 9, 10], start: 3 })
        draenei.addUnit({ unitId: UNIT_TYPE.DraeneiSeer, waves: [7, 10], start: 4 })
        draenei.addUnit({ unitId: UNIT_TYPE.DraeneiVindicator, waves: [5, 6, 8], start: 7 })
        draenei.addUnit({ unitId: UNIT_TYPE.DraeneiDemolisher, waves: [6, 8, 10], start: 6 })
        SPAWN.addSpawn(draenei.name)

        // // High Elves
        highElves = new Spawn("highElves")
        highElves.faction = FACTION.highElves
        highElves.addUnit({ unitId: UNIT_TYPE.HighElfApprenticeSwordsman, waves: [1, 2, 3, 5], end: 3 })
        highElves.addUnit({ unitId: UNIT_TYPE.HighElfApprenticeSwordsman, waves: [1, 3], start: 4 })
        highElves.addUnit({ unitId: UNIT_TYPE.HighElfArcher, waves: [1, 3, 5], start: 2 })
        highElves.addUnit({ unitId: UNIT_TYPE.HighElfSwordsman, amount: 2, waves: [1, 2, 3, 4], start: 4 })
        highElves.addUnit({ unitId: UNIT_TYPE.HighElfHealer, waves: [1, 3, 5], start: 5 })
        highElves.addUnit({ unitId: UNIT_TYPE.DragonHawk, waves: [1, 2, 3, 5], start: 6 })
        highElves.addUnit({ unitId: UNIT_TYPE.HighElfKnight, waves: [1, 3, 5], start: 7 })
        SPAWN.addSpawn(highElves.name)

        // // High Elves Creep
        highElvesCreep = new Spawn("highElvesCreep")
        highElvesCreep.faction = FACTION.highElvesCreep
        highElvesCreep.addUnit({ unitId: UNIT_TYPE.HighElfSwordsman, waves: [1, 2, 3, 4], end: 2 })
        highElvesCreep.addUnit({ unitId: UNIT_TYPE.HighElfSwordsman, waves: [1, 2, 3, 4], start: 3 })
        highElvesCreep.addUnit({ unitId: UNIT_TYPE.HighElfArcher, waves: [1, 3, 5], start: 2 })
        highElvesCreep.addUnit({ unitId: UNIT_TYPE.HighElfHealer, waves: [1, 3], start: 4 })
        highElvesCreep.addUnit({ unitId: UNIT_TYPE.HighElfGuardian, amount: 2, waves: [1, 3, 5], start: 5 })
        SPAWN.addSpawn(highElvesCreep.name)

        // Merc Spawn
        merc = new Spawn("merc")
        merc.faction = FACTION.merc
        merc.addUnit({ unitId: UNIT_TYPE.Rogue, amount: 2, waves: [1, 2, 3, 4, 5, 6] })
        merc.addUnit({ unitId: UNIT_TYPE.BanditSpearman, waves: [2, 3, 4, 5, 6, 7, 8], start: 2 })
        merc.addUnit({ unitId: UNIT_TYPE.Bandit, amount: 2, waves: [1, 2, 3, 5, 6], start: 3 })
        merc.addUnit({ unitId: UNIT_TYPE.Enforcer, waves: [2, 5], start: 4 })
        merc.addUnit({ unitId: UNIT_TYPE.Assassin, waves: [3, 5, 7], start: 5 })
        merc.addUnit({ unitId: UNIT_TYPE.BanditLord, waves: [1, 5], start: 6 })
        SPAWN.addSpawn(merc.name)

        // Dwarf Spawn
        dwarf = new Spawn("dwarf")
        dwarf.faction = FACTION.dwarf
        dwarf.addUnit({ unitId: UNIT_TYPE.IronGuard, amount: 2, waves: [1, 2, 3, 5, 6], end: 1 })
        dwarf.addUnit({ unitId: UNIT_TYPE.IronGuard, amount: 3, waves: [1, 2, 3, 4, 5, 6, 7], start: 2 })
        dwarf.addUnit({ unitId: UNIT_TYPE.IronMortarTeam, waves: [2, 4, 6], start: 2 })
        dwarf.addUnit({ unitId: UNIT_TYPE.IronRifleman, waves: [1, 2, 3, 4, 5, 6], start: 3 })
        dwarf.addUnit({ unitId: UNIT_TYPE.IronCaptain, waves: [1, 2, 3, 4], start: 5 })
        dwarf.addUnit({ unitId: UNIT_TYPE.IronMagi, waves: [1, 2, 3, 4], start: 6 })
        dwarf.addUnit({ unitId: UNIT_TYPE.GryphonRider, waves: [1, 2, 3, 4], start: 8 })
        dwarf.addUnit({ unitId: UNIT_TYPE.SeigeEngine, waves: [2, 5], start: 6 })
        dwarf.addUnit({ unitId: UNIT_TYPE.Automation, waves: [1, 3, 6], start: 7 })
        SPAWN.addSpawn(dwarf.name)

        // Murloc Spawn
        murloc = new Spawn("murloc")
        murloc.faction = FACTION.murloc
        murloc.addUnit({ unitId: UNIT_TYPE.MurlocCliffRunner, amount: 3, waves: [5, 6, 7, 9, 10] })
        murloc.addUnit({ unitId: UNIT_TYPE.MurlocReaver, waves: [5, 7], start: 2 })
        murloc.addUnit({ unitId: UNIT_TYPE.MurlocSnareCaster, waves: [6, 8, 10], start: 3 })
        murloc.addUnit({ unitId: UNIT_TYPE.MurlocTideWarrior, waves: [4, 8], start: 6 })
        SPAWN.addSpawn(murloc.name)

        // Naga Spawn
        naga = new Spawn("naga")
        naga.faction = FACTION.murloc
        naga.addUnit({ unitId: UNIT_TYPE.NagaMyrmidon, waves: [1, 3], end: 3 })
        naga.addUnit({ unitId: UNIT_TYPE.NagaMyrmidon, waves: [1, 2, 3, 4], start: 4, end: 5 })
        naga.addUnit({ unitId: UNIT_TYPE.NagaMyrmidon, waves: [1, 2, 3, 4, 5, 6], start: 6 })
        naga.addUnit({ unitId: UNIT_TYPE.NagaSiren, waves: [2, 4, 6], start: 3 })
        naga.addUnit({ unitId: UNIT_TYPE.NagaRoyalGuard, waves: [2, 5], start: 6 })
        naga.addUnit({ unitId: UNIT_TYPE.DragonTurtle, waves: [1, 4], start: 9 })
        SPAWN.addSpawn(naga.name)

        // Naga Creep Spawn
        nagaCreep = new Spawn("nagaCreep")
        nagaCreep.faction = FACTION.murloc
        nagaCreep.addUnit({ unitId: UNIT_TYPE.NagaMyrmidon, waves: [1, 2, 3, 4], start: 2 })
        nagaCreep.addUnit({ unitId: UNIT_TYPE.NagaSiren, waves: [2, 4], start: 3 })
        nagaCreep.addUnit({ unitId: UNIT_TYPE.SnapDragon, waves: [2, 3, 4, 5, 6], start: 5 })
        SPAWN.addSpawn(nagaCreep.name)

        // Night Elves Spawn
        nightElves = new Spawn("nightElves")
        nightElves.faction = FACTION.nightElves
        nightElves.addUnit({ unitId: UNIT_TYPE.NightElfRanger, waves: [1, 2, 3, 4, 5] })
        nightElves.addUnit({ unitId: UNIT_TYPE.NightElfEliteRanger, waves: [1, 2, 3, 4, 5], start: 2 })
        nightElves.addUnit({ unitId: UNIT_TYPE.NightElfSentry, waves: [7, 8, 9, 10], start: 2 })
        nightElves.addUnit({ unitId: UNIT_TYPE.Dryad, waves: [7, 9, 10], start: 3 })
        nightElves.addUnit({ unitId: UNIT_TYPE.HippogryphRider, waves: [4, 6, 7], start: 3 })
        nightElves.addUnit({ unitId: UNIT_TYPE.DruidOfTheClaw, waves: [6, 7, 8, 9, 10], start: 4 })
        nightElves.addUnit({ unitId: UNIT_TYPE.MountainGiant, waves: [5, 9], start: 5 })
        nightElves.addUnit({ unitId: UNIT_TYPE.AncientProtector, waves: [5], start: 10 })
        SPAWN.addSpawn(nightElves.name)

        // Orc Spawn
        orc = new Spawn("orc")
        orc.faction = FACTION.orc
        orc.addUnit({ unitId: UNIT_TYPE.Grunt, amount: 2, waves: [1, 3, 5, 6] })
        orc.addUnit({ unitId: UNIT_TYPE.Grunt, waves: [2, 4, 6, 7], start: 3 })
        orc.addUnit({ unitId: UNIT_TYPE.TrollAxethrower, waves: [2, 4, 6, 7], start: 2 })
        orc.addUnit({ unitId: UNIT_TYPE.Ogre, amount: 2, waves: [2, 4, 6, 7], start: 4 })
        orc.addUnit({ unitId: UNIT_TYPE.Warlock, waves: [3, 5, 7], start: 3 })
        orc.addUnit({ unitId: UNIT_TYPE.OrcWarchief, waves: [1, 7], start: 6 })
        SPAWN.addSpawn(orc.name)

        // Human Shipyard Spawn
        humanShipyard = new Spawn("humanShipyard")
        humanShipyard.faction = FACTION.humanShipyard
        humanShipyard.addUnit({ unitId: UNIT_TYPE.HumanFrigate, waves: [2], end: 2 })
        humanShipyard.addUnit({ unitId: UNIT_TYPE.HumanFrigate, waves: [2, 4], start: 3, end: 4 })
        humanShipyard.addUnit({ unitId: UNIT_TYPE.HumanFrigate, waves: [2, 4, 6], start: 5 })
        humanShipyard.addUnit({ unitId: UNIT_TYPE.HumanBattleship, waves: [3], start: 6 })
        SPAWN.addSpawn(humanShipyard.name)

        // Night Elf Shipyard Spawn
        nightElfShipyard = new Spawn("nightElfShipyard")
        nightElfShipyard.faction = FACTION.nightElfShipyard
        nightElfShipyard.addUnit({ unitId: UNIT_TYPE.NightElfFrigate, waves: [1], start: 2, end: 3 })
        nightElfShipyard.addUnit({ unitId: UNIT_TYPE.NightElfFrigate, waves: [1, 3], start: 4, end: 5 })
        nightElfShipyard.addUnit({ unitId: UNIT_TYPE.NightElfFrigate, waves: [1, 3, 6], start: 6 })
        nightElfShipyard.addUnit({ unitId: UNIT_TYPE.NightElfBattleship, waves: [3], start: 7 })
        SPAWN.addSpawn(nightElfShipyard.name)

        // Undead Spawn
        undead = new Spawn("undead")
        undead.faction = FACTION.undead
        undead.addUnit({ unitId: UNIT_TYPE.Ghoul, amount: 4, waves: [6, 7, 8, 9, 10] })
        undead.addUnit({ unitId: UNIT_TYPE.SkeletonMage, waves: [6, 7, 8, 9, 10], start: 2 })
        undead.addUnit({ unitId: UNIT_TYPE.Necromancer, waves: [5, 7, 9], start: 4 })
        undead.addUnit({ unitId: UNIT_TYPE.EredarWarlock, waves: [7], start: 6 })
        undead.addUnit({ unitId: UNIT_TYPE.GiantSkeleton, waves: [6, 9], start: 8 })
        undead.addUnit({ unitId: UNIT_TYPE.InfernalContraption, waves: [5, 7], start: 3, end: 5 })
        undead.addUnit({ unitId: UNIT_TYPE.InfernalMachine, waves: [5, 7], start: 6, end: 9 })
        undead.addUnit({ unitId: UNIT_TYPE.InfernalJuggernaut, waves: [5, 7], start: 10 })
        SPAWN.addSpawn(undead.name)
    }
