/** @format */

import { Base, Importance } from 'app/classes/base/Base'
import { IBasesDepend } from './IBasesDepend'

export class Bases {
  private static instance?: Bases

  static getInstance(depend: IBasesDepend) {
    if (!Bases.instance) Bases.instance = new Bases(depend)
    return Bases.instance
  }

  arcaneAlliance
  arcaneFederation
  arcaneCreepAlliance
  arcaneCreepFederation
  arcaneHeroAlliance
  arcaneHeroFederation
  arcaneTopAlliance
  arcaneTopFederation
  arcaneBottomAlliance
  arcaneBottomFederation
  castleAlliance
  castleFederation
  highCityAlliance
  highCityFederation
  cityElvesAlliance
  cityElvesFederation
  cityFrontAlliance
  cityFrontFederation
  humanShipyardAlliance
  humanShipyardFederation
  highElvesAlliance
  highElvesFederation
  highElvesCreepAlliance
  highElvesCreepFederation
  treeAlliance
  treeFederation
  nightElfAlliance
  nightElfFederation
  nightElfShipyardAlliance
  nightElfShipyardFederation
  mercAlliance
  mercFederation
  dwarfAlliance
  dwarfFederation
  dwarfCreepAlliance
  dwarfCreepFederation
  nagaAlliance
  nagaFederation
  nagaCreepAlliance
  nagaCreepFederation
  murlocAlliance
  murlocFederation
  orcAlliance
  orcFederation
  draeneiAlliance
  draeneiFederation
  undeadAlliance
  undeadFederation
  wildhammerAlliance
  wildhammerFederation

  constructor(depend: IBasesDepend) {
    const units = depend.units
    const forces = depend.forces
    const locs = depend.locs
    const creeps = depend.creeps

    this.arcaneAlliance = new Base({
      creep: creeps.arcane,
      capital: units.h003_0015,
      force: forces.AllianceComps,
      townLoc: locs.arcane.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.High,
    })
    this.arcaneFederation = new Base({
      creep: creeps.arcane,
      capital: units.h003_0007,
      force: forces.FederationComps,
      townLoc: locs.arcane.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.High,
    })

    this.arcaneCreepAlliance = new Base({
      creep: creeps.arcaneCreep,
      capital: units.h003_0015,
      force: forces.AllianceComps,
      townLoc: locs.tArcane.alliance,
      spawnLoc: locs.sArcane.alliance,
      creepTarget: locs.cStorm.alliance,
      teleportTarget: false,
      importance: Importance.Low,
      visible: false,
    })
    this.arcaneCreepFederation = new Base({
      creep: creeps.arcaneCreep,
      capital: units.h003_0007,
      force: forces.FederationComps,
      townLoc: locs.tArcane.federation,
      spawnLoc: locs.sArcane.federation,
      creepTarget: locs.cStorm.federation,
      teleportTarget: false,
      importance: Importance.Low,
      visible: false,
    })

    this.arcaneHeroAlliance = new Base({
      creep: creeps.arcaneHero,
      capital: units.h014_0017,
      force: forces.AllianceComps,
      townLoc: locs.tArcaneHero.alliance,
      spawnLoc: locs.sArcaneHero.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.arcaneHeroFederation = new Base({
      creep: creeps.arcaneHero,
      capital: units.h014_0158,
      force: forces.FederationComps,
      townLoc: locs.tArcaneHero.federation,
      spawnLoc: locs.sArcaneHero.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.arcaneTopAlliance = new Base({
      creep: creeps.arcaneTop,
      capital: units.hars_0355,
      force: forces.AllianceComps,
      townLoc: locs.tElementalTop.alliance,
      spawnLoc: locs.sElementalTop.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.Low,
    })
    this.arcaneTopFederation = new Base({
      creep: creeps.arcaneTop,
      capital: units.hars_0293,
      force: forces.FederationComps,
      townLoc: locs.tElementalTop.federation,
      spawnLoc: locs.sElementalTop.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.Low,
    })

    this.arcaneBottomAlliance = new Base({
      creep: creeps.arcaneBottom,
      capital: units.hars_0292,
      force: forces.AllianceComps,
      townLoc: locs.tElementalBottom.alliance,
      spawnLoc: locs.sElementalBottom.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.Low,
    })
    this.arcaneBottomFederation = new Base({
      creep: creeps.arcaneBottom,
      capital: units.hars_0303,
      force: forces.FederationComps,
      townLoc: locs.tElementalBottom.federation,
      spawnLoc: locs.sElementalBottom.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.Low,
    })

    this.castleAlliance = new Base({
      creep: creeps.castle,
      capital: units.h00E_0033,
      force: forces.AllianceComps,
      townLoc: locs.tHero.alliance,
      spawnLoc: locs.sHero.alliance,
      creepTarget: locs.everything.federation,
      teleportTarget: true,
      importance: Importance.Highest,
    })
    this.castleFederation = new Base({
      creep: creeps.castle,
      capital: units.h00E_0081,
      force: forces.FederationComps,
      townLoc: locs.tHero.federation,
      spawnLoc: locs.sHero.federation,
      creepTarget: locs.everything.alliance,
      teleportTarget: true,
      importance: Importance.Highest,
    })

    this.highCityAlliance = new Base({
      creep: creeps.highCity,
      capital: units.n00K_0802,
      force: forces.AllianceComps,
      townLoc: locs.tBackCity.alliance,
      spawnLoc: locs.sBackCity.alliance,
      creepTarget: locs.cDeath.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.highCityFederation = new Base({
      creep: creeps.highCity,
      capital: units.n00K_0477,
      force: forces.FederationComps,
      townLoc: locs.tBackCity.federation,
      spawnLoc: locs.sBackCity.federation,
      creepTarget: locs.cDeath.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.cityElvesAlliance = new Base({
      creep: creeps.cityElves,
      capital: units.hvlt_0207,
      force: forces.AllianceComps,
      townLoc: locs.tCityElf.alliance,
      spawnLoc: locs.sCityElf.alliance,
      creepTarget: locs.everything.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.cityElvesFederation = new Base({
      creep: creeps.cityElves,
      capital: units.hvlt_0406,
      force: forces.FederationComps,
      townLoc: locs.tCityElf.federation,
      spawnLoc: locs.sCityElf.federation,
      creepTarget: locs.everything.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.cityFrontAlliance = new Base({
      creep: creeps.cityFront,
      capital: units.h01S_0553,
      force: forces.AllianceComps,
      townLoc: locs.tCityFront.alliance,
      spawnLoc: locs.sCityFront.alliance,
      creepTarget: locs.middle.federation,
      teleportTarget: true,
      importance: Importance.High,
    })
    this.cityFrontFederation = new Base({
      creep: creeps.cityFront,
      capital: units.h01S_0352,
      force: forces.FederationComps,
      townLoc: locs.tCityFront.federation,
      spawnLoc: locs.sCityFront.federation,
      creepTarget: locs.middle.alliance,
      teleportTarget: true,
      importance: Importance.High,
    })

    this.humanShipyardAlliance = new Base({
      creep: creeps.humanShipyard,
      capital: units.hshy_0011,
      force: forces.AllianceComps,
      townLoc: locs.tHumanShipyard.alliance,
      spawnLoc: locs.sHumanShipyard.alliance,
      creepTarget: locs.sHumanShipyard.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.humanShipyardFederation = new Base({
      creep: creeps.humanShipyard,
      capital: units.hshy_0212,
      force: forces.FederationComps,
      townLoc: locs.tHumanShipyard.federation,
      spawnLoc: locs.sHumanShipyard.federation,
      creepTarget: locs.sHumanShipyard.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.highElvesAlliance = new Base({
      creep: creeps.highElves,
      capital: units.nheb_0109,
      force: forces.AllianceComps,
      townLoc: locs.tElf.alliance,
      spawnLoc: locs.sElf.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.High,
    })
    this.highElvesFederation = new Base({
      creep: creeps.highElves,
      capital: units.nheb_0036,
      force: forces.FederationComps,
      townLoc: locs.tElf.federation,
      spawnLoc: locs.sElf.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.High,
    })

    this.highElvesCreepAlliance = new Base({
      creep: creeps.highElvesCreep,
      capital: units.nheb_0109,
      force: forces.AllianceComps,
      townLoc: locs.tElf.alliance,
      spawnLoc: locs.sElf.alliance,
      creepTarget: locs.cForestMid.alliance,
      teleportTarget: false,
      importance: Importance.Low,
      visible: false,
    })
    this.highElvesCreepFederation = new Base({
      creep: creeps.highElvesCreep,
      capital: units.nheb_0036,
      force: forces.FederationComps,
      townLoc: locs.tElf.federation,
      spawnLoc: locs.sElf.federation,
      creepTarget: locs.cForestMid.federation,
      teleportTarget: false,
      importance: Importance.Low,
      visible: false,
    })

    this.treeAlliance = new Base({
      creep: creeps.tree,
      capital: units.e003_0058,
      force: forces.AllianceComps,
      townLoc: locs.tTree.alliance,
      spawnLoc: locs.sTree.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.treeFederation = new Base({
      creep: creeps.tree,
      capital: units.e003_0014,
      force: forces.FederationComps,
      townLoc: locs.tTree.federation,
      spawnLoc: locs.sTree.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.nightElfAlliance = new Base({
      creep: creeps.nightElf,
      capital: units.edob_0315,
      force: forces.AllianceComps,
      townLoc: locs.tNightElf.alliance,
      spawnLoc: locs.sNightElf.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.nightElfFederation = new Base({
      creep: creeps.nightElf,
      capital: units.edob_0304,
      force: forces.FederationComps,
      townLoc: locs.tNightElf.federation,
      spawnLoc: locs.sNightElf.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.nightElfShipyardAlliance = new Base({
      creep: creeps.nightElfShipyard,
      capital: units.eshy_0120,
      force: forces.AllianceComps,
      townLoc: locs.tElfShipyard.alliance,
      spawnLoc: locs.sElfShipyard.alliance,
      creepTarget: locs.sHumanShipyard.federation,
      teleportTarget: true,
      importance: Importance.Low,
    })
    this.nightElfShipyardFederation = new Base({
      creep: creeps.nightElfShipyard,
      capital: units.eshy_0047,
      force: forces.FederationComps,
      townLoc: locs.tElfShipyard.federation,
      spawnLoc: locs.sElfShipyard.federation,
      creepTarget: locs.sHumanShipyard.alliance,
      teleportTarget: true,
      importance: Importance.Low,
    })

    this.mercAlliance = new Base({
      creep: creeps.merc,
      capital: units.n001_0048,
      force: forces.AllianceComps,
      townLoc: locs.tMerc.alliance,
      spawnLoc: locs.sMerc.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.Low,
    })
    this.mercFederation = new Base({
      creep: creeps.merc,
      capital: units.n001_0049,
      force: forces.FederationComps,
      townLoc: locs.tMerc.federation,
      spawnLoc: locs.sMerc.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.Low,
    })

    this.dwarfAlliance = new Base({
      creep: creeps.dwarf,
      capital: units.h006_0074,
      force: forces.AllianceComps,
      townLoc: locs.tDwarf.alliance,
      spawnLoc: locs.sDwarf.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.High,
    })
    this.dwarfFederation = new Base({
      creep: creeps.dwarf,
      capital: units.h006_0055,
      force: forces.FederationComps,
      townLoc: locs.tDwarf.federation,
      spawnLoc: locs.sDwarf.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.High,
    })

    this.dwarfCreepAlliance = new Base({
      creep: creeps.dwarfCreep,
      capital: units.h006_0074,
      force: forces.AllianceComps,
      townLoc: locs.tDwarf.alliance,
      spawnLoc: locs.sDwarf.alliance,
      creepTarget: locs.cRock.alliance,
      teleportTarget: false,
      importance: Importance.Low,
      visible: false,
    })
    this.dwarfCreepFederation = new Base({
      creep: creeps.dwarfCreep,
      capital: units.h006_0055,
      force: forces.FederationComps,
      townLoc: locs.tDwarf.federation,
      spawnLoc: locs.sDwarf.federation,
      creepTarget: locs.cRock.federation,
      teleportTarget: false,
      importance: Importance.Low,
      visible: false,
    })

    this.nagaAlliance = new Base({
      creep: creeps.naga,
      capital: units.nntt_0135,
      force: forces.AllianceComps,
      townLoc: locs.tNaga.alliance,
      spawnLoc: locs.sNaga.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.nagaFederation = new Base({
      creep: creeps.naga,
      capital: units.nntt_0132,
      force: forces.FederationComps,
      townLoc: locs.tNaga.federation,
      spawnLoc: locs.sNaga.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.nagaCreepAlliance = new Base({
      creep: creeps.nagaCreep,
      capital: units.nntt_0135,
      force: forces.AllianceComps,
      townLoc: locs.tNaga.alliance,
      spawnLoc: locs.sNaga.alliance,
      creepTarget: locs.cTides.alliance,
      teleportTarget: false,
      importance: Importance.Low,
      visible: false,
    })
    this.nagaCreepFederation = new Base({
      creep: creeps.nagaCreep,
      capital: units.nntt_0132,
      force: forces.FederationComps,
      townLoc: locs.tNaga.federation,
      spawnLoc: locs.sNaga.federation,
      creepTarget: locs.cTides.federation,
      teleportTarget: false,
      importance: Importance.Low,
      visible: false,
    })

    this.murlocAlliance = new Base({
      creep: creeps.murloc,
      capital: units.nmh1_0735,
      force: forces.AllianceComps,
      townLoc: locs.tMurloc.alliance,
      spawnLoc: locs.sMurloc.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.Low,
    })
    this.murlocFederation = new Base({
      creep: creeps.murloc,
      capital: units.nmh1_0783,
      force: forces.FederationComps,
      townLoc: locs.tMurloc.federation,
      spawnLoc: locs.sMurloc.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.Low,
    })

    this.orcAlliance = new Base({
      creep: creeps.orc,
      capital: units.o001_0075,
      force: forces.AllianceComps,
      townLoc: locs.tOrc.alliance,
      spawnLoc: locs.sOrc.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.High,
    })
    this.orcFederation = new Base({
      creep: creeps.orc,
      capital: units.o001_0078,
      force: forces.FederationComps,
      townLoc: locs.tOrc.federation,
      spawnLoc: locs.sOrc.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.High,
    })

    this.draeneiAlliance = new Base({
      creep: creeps.draenei,
      capital: units.ndh2_0359,
      force: forces.AllianceComps,
      townLoc: locs.tDraenei.alliance,
      spawnLoc: locs.sDraenei.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.Low,
    })
    this.draeneiFederation = new Base({
      creep: creeps.draenei,
      capital: units.ndh2_0876,
      force: forces.FederationComps,
      townLoc: locs.tDraenei.federation,
      spawnLoc: locs.sDraenei.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.Low,
    })

    this.undeadAlliance = new Base({
      creep: creeps.undead,
      capital: units.u001_0097,
      force: forces.AllianceComps,
      townLoc: locs.tUndead.alliance,
      spawnLoc: locs.sUndead.alliance,
      creepTarget: locs.middle.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.undeadFederation = new Base({
      creep: creeps.undead,
      capital: units.u001_0098,
      force: forces.FederationComps,
      townLoc: locs.tUndead.federation,
      spawnLoc: locs.sUndead.federation,
      creepTarget: locs.middle.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.wildhammerAlliance = new Base({
      creep: creeps.wildhammer,
      capital: units.h01X_0707,
      force: forces.AllianceComps,
      townLoc: locs.tWildhammer.alliance,
      spawnLoc: locs.sWildhammer.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.Low,
    })
    this.wildhammerFederation = new Base({
      creep: creeps.wildhammer,
      capital: units.h01X_0750,
      force: forces.FederationComps,
      townLoc: locs.tWildhammer.federation,
      spawnLoc: locs.sWildhammer.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.Low,
    })
  }
}
