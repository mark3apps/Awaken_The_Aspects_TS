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
      importance: Importance.Medium,
    })
    this.arcaneFederation = new Base({
      creep: creeps.arcane,
      capital: units.h003_0007,
      force: forces.FederationComps,
      townLoc: locs.arcane.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.arcaneCreepAlliance = new Base({
      creep: creeps.arcaneCreep,
      capital: units.h003_0015,
      force: forces.AllianceComps,
      townLoc: locs.sArcane.alliance,
      creepTarget: locs.cStorm.alliance,
      teleportTarget: false,
      importance: Importance.Medium,
      visible: false,
    })
    this.arcaneCreepFederation = new Base({
      creep: creeps.arcaneCreep,
      capital: units.h003_0007,
      force: forces.FederationComps,
      townLoc: locs.sArcane.federation,
      creepTarget: locs.cStorm.federation,
      teleportTarget: false,
      importance: Importance.Medium,
      visible: false,
    })

    this.arcaneHeroAlliance = new Base({
      creep: creeps.arcaneHero,
      capital: units.h014_0017,
      force: forces.AllianceComps,
      townLoc: locs.sArcaneHero.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.arcaneHeroFederation = new Base({
      creep: creeps.arcaneHero,
      capital: units.h014_0158,
      force: forces.FederationComps,
      townLoc: locs.sArcaneHero.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.arcaneTopAlliance = new Base({
      creep: creeps.arcaneTop,
      capital: units.hars_0355,
      force: forces.AllianceComps,
      townLoc: locs.sElementalTop.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.arcaneTopFederation = new Base({
      creep: creeps.arcaneTop,
      capital: units.hars_0293,
      force: forces.FederationComps,
      townLoc: locs.sElementalTop.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.arcaneBottomAlliance = new Base({
      creep: creeps.arcaneBottom,
      capital: units.hars_0292,
      force: forces.AllianceComps,
      townLoc: locs.sElementalBottom.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.arcaneBottomFederation = new Base({
      creep: creeps.arcaneBottom,
      capital: units.hars_0303,
      force: forces.FederationComps,
      townLoc: locs.sElementalBottom.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.castleAlliance = new Base({
      creep: creeps.castle,
      capital: units.h00E_0033,
      force: forces.AllianceComps,
      townLoc: locs.sHero.alliance,
      creepTarget: locs.everything.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.castleFederation = new Base({
      creep: creeps.castle,
      capital: units.h00E_0081,
      force: forces.FederationComps,
      townLoc: locs.sHero.federation,
      creepTarget: locs.everything.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.highCityAlliance = new Base({
      creep: creeps.highCity,
      capital: units.n00K_0802,
      force: forces.AllianceComps,
      townLoc: locs.sHighCity.alliance,
      creepTarget: locs.cDeath.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.highCityFederation = new Base({
      creep: creeps.highCity,
      capital: units.n00K_0477,
      force: forces.FederationComps,
      townLoc: locs.sHighCity.federation,
      creepTarget: locs.cDeath.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.cityElvesAlliance = new Base({
      creep: creeps.cityElves,
      capital: units.hvlt_0207,
      force: forces.AllianceComps,
      townLoc: locs.sCityElf.alliance,
      creepTarget: locs.everything.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.cityElvesFederation = new Base({
      creep: creeps.cityElves,
      capital: units.hvlt_0406,
      force: forces.FederationComps,
      townLoc: locs.sCityElf.federation,
      creepTarget: locs.everything.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.cityFrontAlliance = new Base({
      creep: creeps.cityFront,
      capital: units.h01S_0553,
      force: forces.AllianceComps,
      townLoc: locs.sCityFront.alliance,
      creepTarget: locs.middle.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.cityFrontFederation = new Base({
      creep: creeps.cityFront,
      capital: units.h01S_0352,
      force: forces.FederationComps,
      townLoc: locs.sCityFront.federation,
      creepTarget: locs.middle.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.humanShipyardAlliance = new Base({
      creep: creeps.humanShipyard,
      capital: units.hshy_0011,
      force: forces.AllianceComps,
      townLoc: locs.sHumanShipyard.alliance,
      creepTarget: locs.sHumanShipyard.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.humanShipyardFederation = new Base({
      creep: creeps.humanShipyard,
      capital: units.hshy_0212,
      force: forces.FederationComps,
      townLoc: locs.sHumanShipyard.federation,
      creepTarget: locs.sHumanShipyard.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.highElvesAlliance = new Base({
      creep: creeps.highElves,
      capital: units.nheb_0109,
      force: forces.AllianceComps,
      townLoc: locs.sElf.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.highElvesFederation = new Base({
      creep: creeps.highElves,
      capital: units.nheb_0036,
      force: forces.FederationComps,
      townLoc: locs.sElf.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.highElvesCreepAlliance = new Base({
      creep: creeps.highElvesCreep,
      capital: units.nheb_0109,
      force: forces.AllianceComps,
      townLoc: locs.sElf.alliance,
      creepTarget: locs.cForestMid.alliance,
      teleportTarget: false,
      importance: Importance.Medium,
      visible: false,
    })
    this.highElvesCreepFederation = new Base({
      creep: creeps.highElvesCreep,
      capital: units.nheb_0036,
      force: forces.FederationComps,
      townLoc: locs.sElf.federation,
      creepTarget: locs.cForestMid.federation,
      teleportTarget: false,
      importance: Importance.Medium,
      visible: false,
    })

    this.treeAlliance = new Base({
      creep: creeps.tree,
      capital: units.e003_0058,
      force: forces.AllianceComps,
      townLoc: locs.sTree.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.treeFederation = new Base({
      creep: creeps.tree,
      capital: units.e003_0014,
      force: forces.FederationComps,
      townLoc: locs.sTree.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.nightElfAlliance = new Base({
      creep: creeps.nightElf,
      capital: units.edob_0315,
      force: forces.AllianceComps,
      townLoc: locs.sNightElf.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.nightElfFederation = new Base({
      creep: creeps.nightElf,
      capital: units.edob_0304,
      force: forces.FederationComps,
      townLoc: locs.sNightElf.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.nightElfShipyardAlliance = new Base({
      creep: creeps.nightElfShipyard,
      capital: units.eshy_0120,
      force: forces.AllianceComps,
      townLoc: locs.sElfShipyard.alliance,
      creepTarget: locs.sHumanShipyard.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.nightElfShipyardFederation = new Base({
      creep: creeps.nightElfShipyard,
      capital: units.eshy_0047,
      force: forces.FederationComps,
      townLoc: locs.sElfShipyard.federation,
      creepTarget: locs.sHumanShipyard.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.mercAlliance = new Base({
      creep: creeps.merc,
      capital: units.n001_0048,
      force: forces.AllianceComps,
      townLoc: locs.sCamp.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.mercFederation = new Base({
      creep: creeps.merc,
      capital: units.n001_0049,
      force: forces.FederationComps,
      townLoc: locs.sCamp.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.dwarfAlliance = new Base({
      creep: creeps.dwarf,
      capital: units.h006_0074,
      force: forces.AllianceComps,
      townLoc: locs.sDwarf.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.dwarfFederation = new Base({
      creep: creeps.dwarf,
      capital: units.h006_0055,
      force: forces.FederationComps,
      townLoc: locs.sDwarf.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.dwarfCreepAlliance = new Base({
      creep: creeps.dwarfCreep,
      capital: units.h006_0074,
      force: forces.AllianceComps,
      townLoc: locs.sDwarf.alliance,
      creepTarget: locs.cRock.alliance,
      teleportTarget: false,
      importance: Importance.Medium,
      visible: false,
    })
    this.dwarfCreepFederation = new Base({
      creep: creeps.dwarfCreep,
      capital: units.h006_0055,
      force: forces.FederationComps,
      townLoc: locs.sDwarf.federation,
      creepTarget: locs.cRock.federation,
      teleportTarget: false,
      importance: Importance.Medium,
      visible: false,
    })

    this.nagaAlliance = new Base({
      creep: creeps.naga,
      capital: units.nntt_0135,
      force: forces.AllianceComps,
      townLoc: locs.sNaga.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.nagaFederation = new Base({
      creep: creeps.naga,
      capital: units.nntt_0132,
      force: forces.FederationComps,
      townLoc: locs.sNaga.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.nagaCreepAlliance = new Base({
      creep: creeps.nagaCreep,
      capital: units.nntt_0135,
      force: forces.AllianceComps,
      townLoc: locs.sNaga.alliance,
      creepTarget: locs.cTides.alliance,
      teleportTarget: false,
      importance: Importance.Medium,
      visible: false,
    })
    this.nagaCreepFederation = new Base({
      creep: creeps.nagaCreep,
      capital: units.nntt_0132,
      force: forces.FederationComps,
      townLoc: locs.sNaga.federation,
      creepTarget: locs.cTides.federation,
      teleportTarget: false,
      importance: Importance.Medium,
      visible: false,
    })

    this.murlocAlliance = new Base({
      creep: creeps.murloc,
      capital: units.nmh1_0735,
      force: forces.AllianceComps,
      townLoc: locs.sMurloc.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.murlocFederation = new Base({
      creep: creeps.murloc,
      capital: units.nmh1_0783,
      force: forces.FederationComps,
      townLoc: locs.sMurloc.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.orcAlliance = new Base({
      creep: creeps.orc,
      capital: units.o001_0075,
      force: forces.AllianceComps,
      townLoc: locs.sOrc.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.orcFederation = new Base({
      creep: creeps.orc,
      capital: units.o001_0078,
      force: forces.FederationComps,
      townLoc: locs.sOrc.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.draeneiAlliance = new Base({
      creep: creeps.draenei,
      capital: units.ndh2_0359,
      force: forces.AllianceComps,
      townLoc: locs.sDraenei.alliance,
      creepTarget: locs.top.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.draeneiFederation = new Base({
      creep: creeps.draenei,
      capital: units.ndh2_0876,
      force: forces.FederationComps,
      townLoc: locs.sDraenei.federation,
      creepTarget: locs.bottom.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.undeadAlliance = new Base({
      creep: creeps.undead,
      capital: units.u001_0097,
      force: forces.AllianceComps,
      townLoc: locs.sUndead.alliance,
      creepTarget: locs.middle.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.undeadFederation = new Base({
      creep: creeps.undead,
      capital: units.u001_0098,
      force: forces.FederationComps,
      townLoc: locs.sUndead.federation,
      creepTarget: locs.middle.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })

    this.wildhammerAlliance = new Base({
      creep: creeps.wildhammer,
      capital: units.h01X_0707,
      force: forces.AllianceComps,
      townLoc: locs.sWildhammer.alliance,
      creepTarget: locs.bottom.federation,
      teleportTarget: true,
      importance: Importance.Medium,
    })
    this.wildhammerFederation = new Base({
      creep: creeps.wildhammer,
      capital: units.h01X_0750,
      force: forces.FederationComps,
      townLoc: locs.sWildhammer.federation,
      creepTarget: locs.top.alliance,
      teleportTarget: true,
      importance: Importance.Medium,
    })
  }
}
