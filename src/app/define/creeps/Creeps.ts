/** @format */

import { Creep } from 'app/classes/creep/Creep'
import { UnitTypes } from '../UnitTypes'

export interface ICreepsDepend {
  unitTypes: UnitTypes
}

export class Creeps {
  private static instance: Creeps

  static getInstance(depend: ICreepsDepend): Creeps {
    if (!Creeps.instance) Creeps.instance = new Creeps(depend)
    return Creeps.instance
  }

  arcane
  arcaneCreep
  arcaneHero
  arcaneTop
  arcaneBottom
  highCity
  castle
  cityElves
  cityFront
  draenei
  highElves
  highElvesCreep
  merc
  dwarf
  dwarfCreep
  murloc
  naga
  nagaCreep
  tree
  nightElf
  orc
  humanShipyard
  nightElfShipyard
  undead
  village
  wildhammer

  private constructor(depend: ICreepsDepend) {
    const unitTypes = depend.unitTypes

    // Arcane
    this.arcane = new Creep()
    this.arcane.addUnit({ unitType: unitTypes.Sorceress, waves: [6, 7, 8, 9, 10], start: 3 })
    this.arcane.addUnit({ unitType: unitTypes.StormSummoner, waves: [6, 7, 8, 9, 10], start: 5 })
    this.arcane.addUnit({ unitType: unitTypes.MagiDefender, waves: [6, 8], start: 7 })

    // Arcane Creep
    this.arcaneCreep = new Creep()
    this.arcaneCreep.addUnit({ unitType: unitTypes.BattleGolem, waves: [1, 2, 3, 4], start: 1 })
    this.arcaneCreep.addUnit({ unitType: unitTypes.WaterElemental2, waves: [1, 3], start: 3 })
    this.arcaneCreep.addUnit({ unitType: unitTypes.WaterElemental3, waves: [2, 3], start: 4 })
    this.arcaneCreep.addUnit({ unitType: unitTypes.MagiDefender, waves: [1, 2], start: 6 })

    // Arcane Hero
    this.arcaneHero = new Creep()
    this.arcaneHero.addUnit({ unitType: unitTypes.MagiDefender, waves: [1, 2, 3, 5], start: 6 })
    this.arcaneHero.addUnit({ unitType: unitTypes.SupremeWizard, waves: [5], start: 7 })
    this.arcaneHero.addUnit({ unitType: unitTypes.SeigeGolem, waves: [4], start: 9 })

    // Arcane Top
    this.arcaneTop = new Creep()
    this.arcaneTop.addUnit({ unitType: unitTypes.BattleGolem, amount: 2, waves: [4, 5, 6] })
    this.arcaneTop.addUnit({ unitType: unitTypes.WaterElemental2, waves: [4, 6], start: 4 })
    this.arcaneTop.addUnit({ unitType: unitTypes.Summoner, waves: [4], start: 8 })

    // Arcane Bottom
    this.arcaneBottom = new Creep()
    this.arcaneBottom.addUnit({ unitType: unitTypes.BattleGolem, amount: 2, waves: [1, 2, 3], start: 2 })
    this.arcaneBottom.addUnit({ unitType: unitTypes.WaterElemental2, waves: [1, 3], start: 4 })
    this.arcaneBottom.addUnit({ unitType: unitTypes.Summoner, waves: [1], start: 8 })

    // High City
    this.highCity = new Creep()
    this.highCity.addUnit({ unitType: unitTypes.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6], end: 7 })
    this.highCity.addUnit({ unitType: unitTypes.Arbalist, waves: [1, 2, 3, 4], start: 1, end: 4 })
    this.highCity.addUnit({ unitType: unitTypes.Arbalist, waves: [1, 2, 3, 4, 5, 6, 7], start: 5 })
    this.highCity.addUnit({ unitType: unitTypes.Footman1, waves: [1, 2, 3, 4], start: 4, end: 7 })
    this.highCity.addUnit({ unitType: unitTypes.Footman2, amount: 2, waves: [1, 2, 3, 4], start: 8 })
    this.highCity.addUnit({ unitType: unitTypes.Captain1, amount: 1, waves: [1, 3], start: 9 })

    // Castle
    this.castle = new Creep()
    this.castle.addUnit({ unitType: unitTypes.Captain2, waves: [1, 2, 3], start: 8 })

    // City Elves
    this.cityElves = new Creep()
    this.cityElves.addUnit({ unitType: unitTypes.BloodElfArcher, waves: [1, 3, 5], end: 1 })
    this.cityElves.addUnit({ unitType: unitTypes.BloodElfArcher, waves: [1, 2, 3, 4], start: 2 })
    this.cityElves.addUnit({ unitType: unitTypes.BloodElfArcher, waves: [3, 4, 5, 6], start: 4 })
    this.cityElves.addUnit({ unitType: unitTypes.BloodElfBreaker, waves: [1, 3, 4, 5, 6], start: 2, end: 3 })
    this.cityElves.addUnit({ unitType: unitTypes.BloodElfBreaker, waves: [1, 2, 3, 4, 5, 6, 7], start: 4, end: 5 })
    this.cityElves.addUnit({ unitType: unitTypes.BloodElfBreaker, amount: 2, waves: [1, 2, 3, 4, 5], start: 6 })
    this.cityElves.addUnit({ unitType: unitTypes.BloodElfMage, waves: [1, 4], start: 3, end: 6 })
    this.cityElves.addUnit({ unitType: unitTypes.BloodElfMage, waves: [1, 2, 3, 4, 5], start: 7 })

    // City Front
    this.cityFront = new Creep()
    this.cityFront.addUnit({ unitType: unitTypes.Militia2, amount: 2, waves: [1, 2, 3, 4, 5], end: 2 })
    this.cityFront.addUnit({ unitType: unitTypes.Militia2, amount: 2, waves: [1, 2, 3, 4, 5, 6, 7], start: 3, end: 4 })
    this.cityFront.addUnit({ unitType: unitTypes.Footman1, amount: 3, waves: [1, 2, 3, 5, 6, 7], start: 5 })
    this.cityFront.addUnit({ unitType: unitTypes.Captain1, amount: 2, waves: [3, 4, 7], start: 5 })
    this.cityFront.addUnit({ unitType: unitTypes.Knight, waves: [1, 3, 5, 7], start: 6 })
    this.cityFront.addUnit({ unitType: unitTypes.Cannon, waves: [1, 4], start: 6 })
    this.cityFront.addUnit({ unitType: unitTypes.Commander, waves: [2], start: 10 })

    // Draenei
    this.draenei = new Creep()
    this.draenei.addUnit({ unitType: unitTypes.DraeneiGuardian, amount: 2, waves: [5, 6, 7, 8, 9, 10] })
    this.draenei.addUnit({ unitType: unitTypes.DraeneiGuardian, waves: [7, 8, 9], start: 5 })
    this.draenei.addUnit({ unitType: unitTypes.DraeneiDarkslayer, waves: [6, 7, 8, 9, 10], start: 3 })
    this.draenei.addUnit({ unitType: unitTypes.DraeneiSeer, waves: [7, 10], start: 4 })
    this.draenei.addUnit({ unitType: unitTypes.DraeneiVindicator, waves: [5, 6, 8], start: 7 })
    this.draenei.addUnit({ unitType: unitTypes.DraeneiDemolisher, waves: [6, 8, 10], start: 6 })

    // High Elves
    this.highElves = new Creep()
    this.highElves.addUnit({ unitType: unitTypes.HighElfApprenticeSwordsman, waves: [1, 2, 3, 5], end: 3 })
    this.highElves.addUnit({ unitType: unitTypes.HighElfApprenticeSwordsman, waves: [1, 3], start: 4 })
    this.highElves.addUnit({ unitType: unitTypes.HighElfArcher, waves: [1, 3, 5], start: 2 })
    this.highElves.addUnit({ unitType: unitTypes.HighElfSwordsman, amount: 2, waves: [1, 2, 3, 4], start: 4 })
    this.highElves.addUnit({ unitType: unitTypes.HighElfHealer, waves: [1, 3, 5], start: 5 })
    this.highElves.addUnit({ unitType: unitTypes.DragonHawk, amount: 2, waves: [2, 3, 5], start: 6 })
    this.highElves.addUnit({ unitType: unitTypes.HighElfKnight, waves: [1, 3, 5], start: 7 })

    // High Elves Creep
    this.highElvesCreep = new Creep()
    this.highElvesCreep.addUnit({ unitType: unitTypes.HighElfSwordsman, waves: [1, 2, 3, 4] })
    this.highElvesCreep.addUnit({ unitType: unitTypes.HighElfArcher, waves: [1, 3, 5], start: 2 })
    this.highElvesCreep.addUnit({ unitType: unitTypes.HighElfHealer, waves: [1, 3], start: 4 })
    this.highElvesCreep.addUnit({ unitType: unitTypes.HighElfGuardian, amount: 2, waves: [3], start: 5 })

    // Merc
    this.merc = new Creep()
    this.merc.addUnit({ unitType: unitTypes.Rogue, amount: 2, waves: [4, 5, 6, 7] })
    this.merc.addUnit({ unitType: unitTypes.BanditSpearman, waves: [3, 4, 5, 6, 7, 8, 9], start: 2 })
    this.merc.addUnit({ unitType: unitTypes.Bandit, amount: 2, waves: [3, 5, 6, 7], start: 3 })
    this.merc.addUnit({ unitType: unitTypes.Enforcer, waves: [3, 5], start: 4 })
    this.merc.addUnit({ unitType: unitTypes.Assassin, waves: [5, 6, 7], start: 5 })
    this.merc.addUnit({ unitType: unitTypes.BanditLord, waves: [3, 5], start: 6 })

    // Dwarf
    this.dwarf = new Creep()
    this.dwarf.addUnit({ unitType: unitTypes.IronGuard, amount: 2, waves: [1, 2, 3, 5, 6], end: 1 })
    this.dwarf.addUnit({ unitType: unitTypes.IronGuard, amount: 3, waves: [1, 2, 3, 4, 5, 6, 7], start: 2 })
    this.dwarf.addUnit({ unitType: unitTypes.IronRifleman, waves: [1, 2, 3, 4, 5, 6], start: 2 })
    this.dwarf.addUnit({ unitType: unitTypes.IronMortarTeam, waves: [2, 3, 4, 6], start: 3 })
    this.dwarf.addUnit({ unitType: unitTypes.IronCaptain, waves: [1, 2, 3, 4, 5, 6], start: 4 })
    this.dwarf.addUnit({ unitType: unitTypes.IronMagi, waves: [1, 2, 3, 4], start: 5 })
    this.dwarf.addUnit({ unitType: unitTypes.SeigeEngine, waves: [1, 2, 5], start: 6 })
    this.dwarf.addUnit({ unitType: unitTypes.GryphonRider, waves: [1, 2, 3, 4, 5], start: 8 })

    // Dwarf Creep
    this.dwarfCreep = new Creep()
    this.dwarfCreep.addUnit({ unitType: unitTypes.IronGuard, amount: 2, waves: [5, 6, 7, 8] })
    this.dwarfCreep.addUnit({ unitType: unitTypes.IronRifleman, waves: [5, 7], start: 3 })
    this.dwarfCreep.addUnit({ unitType: unitTypes.IronCaptain, waves: [5, 7, 8], start: 4 })
    this.dwarfCreep.addUnit({ unitType: unitTypes.IronMagi, waves: [6], start: 5 })

    // Murloc
    this.murloc = new Creep()
    this.murloc.addUnit({ unitType: unitTypes.MurlocCliffRunner, amount: 3, waves: [5, 6, 7, 8, 9, 10] })
    this.murloc.addUnit({ unitType: unitTypes.MurlocCliffRunner, amount: 1, waves: [5, 6, 7, 8, 9, 10], start: 2 })
    this.murloc.addUnit({ unitType: unitTypes.MurlocCliffRunner, amount: 2, waves: [5, 6, 7, 8], start: 6 })
    this.murloc.addUnit({ unitType: unitTypes.MurlocReaver, waves: [5, 6, 7, 9], start: 4 })
    this.murloc.addUnit({ unitType: unitTypes.MurlocSnareCaster, amount: 2, waves: [6, 7, 8, 10], start: 5 })
    this.murloc.addUnit({ unitType: unitTypes.MurlocTideWarrior, waves: [4, 8], start: 7 })

    // Naga
    this.naga = new Creep()
    this.naga.addUnit({ unitType: unitTypes.NagaMyrmidon, waves: [1, 3], end: 3 })
    this.naga.addUnit({ unitType: unitTypes.NagaMyrmidon, waves: [1, 2, 3, 4], start: 4, end: 6 })
    this.naga.addUnit({ unitType: unitTypes.NagaMyrmidon, waves: [1, 3, 5], start: 7 })
    this.naga.addUnit({ unitType: unitTypes.NagaMyrmidon, waves: [1, 2, 3, 4, 5, 6], start: 7 })
    this.naga.addUnit({ unitType: unitTypes.NagaSiren, waves: [2, 4, 6], start: 3 })
    this.naga.addUnit({ unitType: unitTypes.SnapDragon, waves: [2, 3, 4], start: 5 })
    this.naga.addUnit({ unitType: unitTypes.NagaRoyalGuard, waves: [2, 5], start: 6 })
    this.naga.addUnit({ unitType: unitTypes.DragonTurtle, waves: [1, 4], start: 9 })

    // Naga Creep
    this.nagaCreep = new Creep()
    this.nagaCreep.addUnit({ unitType: unitTypes.NagaMyrmidon, waves: [1, 2], start: 2 })
    this.nagaCreep.addUnit({ unitType: unitTypes.NagaSiren, waves: [2, 4], start: 3 })
    this.nagaCreep.addUnit({ unitType: unitTypes.SnapDragon, waves: [2, 3, 4], start: 5 })

    // Tree
    this.tree = new Creep()
    this.tree.addUnit({ unitType: unitTypes.Dryad, waves: [7, 8, 9, 10], start: 3 })
    this.tree.addUnit({ unitType: unitTypes.DruidOfTheClaw, waves: [6, 7, 8, 9, 10], start: 4 })
    this.tree.addUnit({ unitType: unitTypes.MountainGiant, waves: [5, 9], start: 5 })
    this.tree.addUnit({ unitType: unitTypes.AncientOfLife, waves: [5, 8], start: 6 })
    this.tree.addUnit({ unitType: unitTypes.AncientOfWar, waves: [3], start: 10 })

    // Night Elves
    this.nightElf = new Creep()
    this.nightElf.addUnit({ unitType: unitTypes.NightElfRanger, waves: [5, 6, 7, 8, 9, 10] })
    this.nightElf.addUnit({ unitType: unitTypes.NightElfEliteRanger, waves: [6, 7, 8, 9, 10], start: 2 })
    this.nightElf.addUnit({ unitType: unitTypes.NightElfSentry, waves: [6, 7, 8, 9, 10], start: 2 })
    this.nightElf.addUnit({ unitType: unitTypes.NightElfSentry, waves: [7, 8, 9], start: 4 })
    this.nightElf.addUnit({ unitType: unitTypes.NightElfWarden, waves: [6, 7, 8, 9, 10], start: 5 })
    this.nightElf.addUnit({ unitType: unitTypes.HippogryphRider, amount: 2, waves: [4, 6, 7], start: 6 })

    // Orc
    this.orc = new Creep()
    this.orc.addUnit({ unitType: unitTypes.Grunt, amount: 2, waves: [1, 3, 5, 6] })
    this.orc.addUnit({ unitType: unitTypes.Grunt, waves: [2, 4, 6, 7], start: 3 })
    this.orc.addUnit({ unitType: unitTypes.TrollAxethrower, waves: [2, 4, 6, 7], start: 2 })
    this.orc.addUnit({ unitType: unitTypes.Ogre, amount: 2, waves: [2, 4, 6, 7], start: 4 })
    this.orc.addUnit({ unitType: unitTypes.Warlock, waves: [3, 5, 7], start: 3 })
    this.orc.addUnit({ unitType: unitTypes.OrcWarlord, waves: [1, 7], start: 6 })

    // Human Shipyard
    this.humanShipyard = new Creep()
    this.humanShipyard.addUnit({ unitType: unitTypes.HumanFrigate, waves: [2], end: 2 })
    this.humanShipyard.addUnit({ unitType: unitTypes.HumanFrigate, waves: [2, 6], start: 3, end: 5 })
    this.humanShipyard.addUnit({ unitType: unitTypes.HumanFrigate, waves: [2, 4, 7], start: 6, end: 8 })
    this.humanShipyard.addUnit({ unitType: unitTypes.HumanFrigate, waves: [2, 4, 6, 7], start: 9 })
    this.humanShipyard.addUnit({ unitType: unitTypes.HumanBattleship, waves: [3], start: 5, end: 7 })
    this.humanShipyard.addUnit({ unitType: unitTypes.HumanBattleship, waves: [3, 5], start: 8 })

    // Night Elf Shipyard
    this.nightElfShipyard = new Creep()
    this.nightElfShipyard.addUnit({ unitType: unitTypes.NightElfFrigate, waves: [3], end: 3 })
    this.nightElfShipyard.addUnit({ unitType: unitTypes.NightElfFrigate, waves: [1, 3], start: 4, end: 5 })
    this.nightElfShipyard.addUnit({ unitType: unitTypes.NightElfFrigate, waves: [1, 3, 6], start: 6 })
    this.nightElfShipyard.addUnit({ unitType: unitTypes.NightElfBattleship, waves: [3], start: 7 })

    // Undead
    this.undead = new Creep()
    this.undead.addUnit({ unitType: unitTypes.Ghoul, amount: 4, waves: [4, 5, 6, 7, 8] })
    this.undead.addUnit({ unitType: unitTypes.Necromancer, waves: [4, 6, 8], start: 2 })
    this.undead.addUnit({ unitType: unitTypes.Lich, waves: [5, 7, 9], start: 4 })
    this.undead.addUnit({ unitType: unitTypes.EredarWarlock, waves: [6], start: 6 })
    this.undead.addUnit({ unitType: unitTypes.GiantSkeleton, waves: [4, 6], start: 8 })
    this.undead.addUnit({ unitType: unitTypes.InfernalContraption, waves: [5, 7], start: 3, end: 5 })
    this.undead.addUnit({ unitType: unitTypes.InfernalMachine, waves: [5, 7], start: 6, end: 9 })
    this.undead.addUnit({ unitType: unitTypes.InfernalJuggernaut, waves: [5, 7], start: 10 })

    // Village
    this.village = new Creep()
    this.village.addUnit({ unitType: unitTypes.Militia1, amount: 2, waves: [4, 5, 6, 7, 8] })
    this.village.addUnit({ unitType: unitTypes.Militia2, amount: 1, waves: [4, 5, 6, 7, 8], start: 5 })
    this.village.addUnit({ unitType: unitTypes.BanditSpearman, amount: 1, waves: [4, 5, 6, 7, 8], start: 3 })
    this.village.addUnit({ unitType: unitTypes.Hunter, amount: 1, waves: [1, 5, 7, 9], start: 1 })

    // Wildhammer
    this.wildhammer = new Creep()
    this.wildhammer.addUnit({ unitType: unitTypes.DwarfClansman, amount: 3, waves: [4, 5, 6, 7, 8] })
    this.wildhammer.addUnit({ unitType: unitTypes.DwarfAxethrower, amount: 2, waves: [4, 5, 6, 7], start: 3 })
    this.wildhammer.addUnit({ unitType: unitTypes.DwarfElite, amount: 1, waves: [4, 5, 6, 7], start: 5 })
  }
}
