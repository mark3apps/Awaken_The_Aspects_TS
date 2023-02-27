/** @format */

import { ILocsDepend } from './interfaces/ILocsDepend'
import { Loc } from './loc'
import { LocGroup } from './interfaces/ILocPair'
import { UnitType } from 'app/classes'
import { Region, Unit, Order } from 'lib/w3ts'

export class Locs {
  private static instance?: Locs

  static initInstance(depend: ILocsDepend) {
    if (!Locs.instance) Locs.instance = new Locs(depend)
    return Locs.instance
  }

  static getInstance() {
    return Locs.instance
  }

  castle: LocGroup
  arcane: LocGroup
  start: LocGroup
  elf: LocGroup
  everything: LocGroup
  bottom: LocGroup
  middle: LocGroup
  top: LocGroup

  sArcane: LocGroup
  sArcaneHero: LocGroup
  sNightElf: LocGroup
  sMerc: LocGroup
  sHighCity: LocGroup
  sCityElf: LocGroup
  sCityFront: LocGroup
  sElementalTop: LocGroup
  sElementalBottom: LocGroup
  sElf: LocGroup
  sWildhammer: LocGroup
  sElfShipyard: LocGroup
  sHero: LocGroup
  sHumanShipyard: LocGroup
  sDraenei: LocGroup
  sMurloc: LocGroup
  sNaga: LocGroup
  sOrc: LocGroup
  sTree: LocGroup
  sDwarf: LocGroup
  sUndead: LocGroup
  sVillage: LocGroup

  tArcane: LocGroup
  tArcaneHero: LocGroup
  tNightElf: LocGroup
  tMerc: LocGroup
  tHighCity: LocGroup
  tCityElf: LocGroup
  tCityFront: LocGroup
  tElementalTop: LocGroup
  tElementalBottom: LocGroup
  tElf: LocGroup
  tWildhammer: LocGroup
  tElfShipyard: LocGroup
  tHero: LocGroup
  tHumanShipyard: LocGroup
  tDraenei: LocGroup
  tMurloc: LocGroup
  tNaga: LocGroup
  tOrc: LocGroup
  tTree: LocGroup
  tDwarf: LocGroup
  tUndead: LocGroup
  tVillage: LocGroup

  cForest: LocGroup
  cForestMid: LocGroup
  cTides: LocGroup
  cDeath: LocGroup
  cStorm: LocGroup
  cRock: LocGroup

  constructor(depend: ILocsDepend) {
    const triggers = depend.triggers
    const armies = depend.armies
    const rects = depend.rects

    this.castle = {
      alliance: new Loc(depend, { rects: [rects.Left_Hero] }),
      federation: new Loc(depend, { rects: [rects.Right_Hero] }),
    }
    this.arcane = {
      alliance: new Loc(depend, {
        rects: [rects.Left_Mage_Base],
        thruOrder: [{ loc: this.castle.alliance, army: armies.Federation }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Right_Mage_Base],
        thruOrder: [{ loc: this.castle.federation, army: armies.Alliance }],
      }),
    }
    this.start = {
      alliance: new Loc(depend, {
        rects: [rects.Left_Start],
        thruOrder: [{ loc: this.castle.alliance, army: armies.Federation }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Right_Start],
        thruOrder: [{ loc: this.castle.federation, army: armies.Alliance }],
      }),
    }
    this.elf = {
      alliance: new Loc(depend, {
        rects: [rects.Elf_Base_Left],
        thruOrder: [{ loc: this.castle.alliance, army: armies.Federation }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Elf_Base_Right],
        thruOrder: [{ loc: this.castle.federation, army: armies.Alliance }],
      }),
    }

    // Pathing Rects
    this.everything = {
      alliance: new Loc(depend, {
        rects: [rects.Left_Everything],
        thruOrder: [{ loc: this.castle.alliance, army: armies.Federation }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Right_Everything],
        thruOrder: [{ loc: this.castle.federation, army: armies.Alliance }],
      }),
    }
    this.bottom = {
      alliance: new Loc(depend, {
        rects: [rects.Left_Start_Bottom],
        thruOrder: [{ loc: this.arcane.alliance, army: armies.Federation }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Right_Start_Bottom],
        thruOrder: [{ loc: this.elf.federation, army: armies.Alliance }],
      }),
    }
    this.middle = {
      alliance: new Loc(depend, {
        rects: [rects.Left_Start_Middle],
        thruOrder: [{ loc: this.start.alliance, army: armies.Federation }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Right_Start_Middle],
        thruOrder: [{ loc: this.start.federation, army: armies.Alliance }],
      }),
    }
    this.top = {
      alliance: new Loc(depend, {
        rects: [rects.Left_Start_Top],
        thruOrder: [{ loc: this.elf.alliance, army: armies.Federation }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Right_Start_Top],
        thruOrder: [{ loc: this.arcane.federation, army: armies.Alliance }],
      }),
    }

    // Spawn Rects
    this.sArcane = {
      alliance: new Loc(depend, { rects: [rects.Left_Arcane] }),
      federation: new Loc(depend, { rects: [rects.Right_Arcane] }),
    }
    this.sArcaneHero = {
      alliance: new Loc(depend, { rects: [rects.Arcane_Hero_Left] }),
      federation: new Loc(depend, { rects: [rects.Arcane_Hero_Right] }),
    }
    this.sMerc = {
      alliance: new Loc(depend, { rects: [rects.Camp_Bottom] }),
      federation: new Loc(depend, { rects: [rects.Camp_Top] }),
    }
    this.sHighCity = {
      alliance: new Loc(depend, { rects: [rects.Blacksmith_Left] }),
      federation: new Loc(depend, { rects: [rects.Blacksmith_Right] }),
    }
    this.sCityElf = {
      alliance: new Loc(depend, { rects: [rects.City_Elves_Left] }),
      federation: new Loc(depend, { rects: [rects.City_Elves_Right] }),
    }
    this.sCityFront = {
      alliance: new Loc(depend, {
        rects: [rects.Front_Town_Left],
        thruOrder: [{ loc: this.middle.federation, army: armies.Alliance }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Front_City_Right],
        thruOrder: [{ loc: this.middle.alliance, army: armies.Federation }],
      }),
    }
    this.sElementalTop = {
      alliance: new Loc(depend, { rects: [rects.Arcane_Left_Top] }),
      federation: new Loc(depend, { rects: [rects.Arcane_Right_Top] }),
    }
    this.sElementalBottom = {
      alliance: new Loc(depend, { rects: [rects.Arcane_Left_Bottom] }),
      federation: new Loc(depend, { rects: [rects.Arcane_Right_Bottom] }),
    }
    this.sElf = {
      alliance: new Loc(depend, { rects: [rects.Left_High_Elves] }),
      federation: new Loc(depend, { rects: [rects.Right_High_Elves] }),
    }
    this.sElfShipyard = {
      alliance: new Loc(depend, { rects: [rects.Left_Shipyard] }),
      federation: new Loc(depend, { rects: [rects.Right_Shipyard] }),
    }
    this.sHero = {
      alliance: new Loc(depend, { rects: [rects.Left_Hero] }),
      federation: new Loc(depend, { rects: [rects.Right_Hero] }),
    }
    this.sHumanShipyard = {
      alliance: new Loc(depend, { rects: [rects.Human_Shipyard_Left] }),
      federation: new Loc(depend, { rects: [rects.Human_Shipyard_Right] }),
    }
    this.sDraenei = {
      alliance: new Loc(depend, { rects: [rects.Draenei_Left] }),
      federation: new Loc(depend, { rects: [rects.Draenei_Right] }),
    }
    this.sMurloc = {
      alliance: new Loc(depend, { rects: [rects.Murloc_Spawn_Left] }),
      federation: new Loc(depend, { rects: [rects.Murloc_Spawn_Right] }),
    }
    this.sNaga = {
      alliance: new Loc(depend, { rects: [rects.Naga_Left] }),
      federation: new Loc(depend, { rects: [rects.Naga_Right] }),
    }
    this.sOrc = {
      alliance: new Loc(depend, { rects: [rects.Left_Orc] }),
      federation: new Loc(depend, { rects: [rects.Right_Orc] }),
    }
    this.sTree = {
      alliance: new Loc(depend, { rects: [rects.Left_Tree] }),
      federation: new Loc(depend, { rects: [rects.Right_Tree] }),
    }
    this.sNightElf = {
      alliance: new Loc(depend, { rects: [rects.Night_Elf_Left] }),
      federation: new Loc(depend, { rects: [rects.Night_Elf_Right] }),
    }
    this.sDwarf = {
      alliance: new Loc(depend, { rects: [rects.Left_Workshop] }),
      federation: new Loc(depend, { rects: [rects.Right_Workshop] }),
    }
    this.sUndead = {
      alliance: new Loc(depend, { rects: [rects.Undead_Left] }),
      federation: new Loc(depend, { rects: [rects.Undead_Right] }),
    }
    this.sVillage = {
      alliance: new Loc(depend, { rects: [rects.VillageSpawnLeft] }),
      federation: new Loc(depend, { rects: [rects.VillageSpawnRight] }),
    }
    this.sWildhammer = {
      alliance: new Loc(depend, { rects: [rects.wildhammerLeft] }),
      federation: new Loc(depend, { rects: [rects.wildhammerRight] }),
    }

    // Creep Rects
    this.cForest = {
      alliance: new Loc(depend, {
        rects: [rects.Aspect_of_Forest_Left],
        thruOrder: [{ loc: this.top.federation, army: armies.Alliance }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Aspect_of_Forest_Right],
        thruOrder: [{ loc: this.bottom.alliance, army: armies.Federation }],
      }),
    }
    this.cForestMid = {
      alliance: new Loc(depend, {
        rects: [rects.Aspect_of_Forest_Left_Mid],
        thruOrder: [{ loc: this.cForest.alliance, army: armies.Alliance }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Aspect_of_Forest_Right_Mid],
        thruOrder: [{ loc: this.cForest.federation, army: armies.Federation }],
      }),
    }
    this.cTides = {
      alliance: new Loc(depend, {
        rects: [rects.Murloc_Left],
        thruOrder: [{ loc: this.top.federation, army: armies.Alliance }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Murloc_Right],
        thruOrder: [{ loc: this.bottom.alliance, army: armies.Federation }],
      }),
    }
    this.cStorm = {
      alliance: new Loc(depend, {
        rects: [rects.Left_Elemental_Start],
        thruOrder: [{ loc: this.bottom.federation, army: armies.Alliance }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Right_Elemental_Start],
        thruOrder: [{ loc: this.top.alliance, army: armies.Federation }],
      }),
    }
    this.cRock = {
      alliance: new Loc(depend, {
        rects: [rects.Rock_Left],
        thruOrder: [{ loc: this.bottom.federation, army: armies.Alliance }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Rock_Right],
        thruOrder: [{ loc: this.top.alliance, army: armies.Federation }],
      }),
    }

    // Town Locs
    this.tArcane = {
      alliance: new Loc(depend, { rects: [rects.Left_Arcane] }),
      federation: new Loc(depend, { rects: [rects.Right_Arcane] }),
    }
    this.tArcaneHero = {
      alliance: new Loc(depend, { rects: [rects.ArcaneHeroTownLeft] }),
      federation: new Loc(depend, { rects: [rects.ArcaneHeroTownRight] }),
    }
    this.tMerc = {
      alliance: new Loc(depend, { rects: [rects.MercTownLeft] }),
      federation: new Loc(depend, { rects: [rects.MercTownRight] }),
    }
    this.tHighCity = {
      alliance: new Loc(depend, { rects: [rects.BackCityTownLeft] }),
      federation: new Loc(depend, { rects: [rects.BackCityTownRight] }),
    }
    this.tCityElf = {
      alliance: new Loc(depend, { rects: [rects.City_Elves_Left] }),
      federation: new Loc(depend, { rects: [rects.City_Elves_Right] }),
    }
    this.tCityFront = {
      alliance: new Loc(depend, {
        rects: [rects.Front_Town_Left],
        thruOrder: [{ loc: this.middle.federation, army: armies.Alliance }],
      }),
      federation: new Loc(depend, {
        rects: [rects.Front_City_Right],
        thruOrder: [{ loc: this.middle.alliance, army: armies.Federation }],
      }),
    }
    this.tElementalTop = {
      alliance: new Loc(depend, { rects: [rects.ArcaneTopTownLeft] }),
      federation: new Loc(depend, { rects: [rects.ArcaneTopTownRight] }),
    }
    this.tElementalBottom = {
      alliance: new Loc(depend, { rects: [rects.ArcaneBottomTownLeft] }),
      federation: new Loc(depend, { rects: [rects.ArcaneBottomTownRight] }),
    }
    this.tElf = {
      alliance: new Loc(depend, { rects: [rects.HighElfTownLeft] }),
      federation: new Loc(depend, { rects: [rects.HighElfTownRight] }),
    }
    this.tElfShipyard = {
      alliance: new Loc(depend, { rects: [rects.ElfShipyardTownLeft] }),
      federation: new Loc(depend, { rects: [rects.ElfShipyardTownRight] }),
    }
    this.tHero = {
      alliance: new Loc(depend, { rects: [rects.Left_Hero] }),
      federation: new Loc(depend, { rects: [rects.Right_Hero] }),
    }
    this.tHumanShipyard = {
      alliance: new Loc(depend, { rects: [rects.HumanShipyardTownLeft] }),
      federation: new Loc(depend, { rects: [rects.HumanShipyardTownRight] }),
    }
    this.tDraenei = {
      alliance: new Loc(depend, { rects: [rects.DraeneiTownLeft] }),
      federation: new Loc(depend, { rects: [rects.DraeneiTownRight] }),
    }
    this.tMurloc = {
      alliance: new Loc(depend, { rects: [rects.MurlocTownLeft] }),
      federation: new Loc(depend, { rects: [rects.MurlocTownRight] }),
    }
    this.tNaga = {
      alliance: new Loc(depend, { rects: [rects.NagaTownLeft] }),
      federation: new Loc(depend, { rects: [rects.NagaTownRight] }),
    }
    this.tOrc = {
      alliance: new Loc(depend, { rects: [rects.OrcTownLeft] }),
      federation: new Loc(depend, { rects: [rects.OrcTownRight] }),
    }
    this.tTree = {
      alliance: new Loc(depend, { rects: [rects.Left_Tree] }),
      federation: new Loc(depend, { rects: [rects.Right_Tree] }),
    }
    this.tNightElf = {
      alliance: new Loc(depend, { rects: [rects.Night_Elf_Left] }),
      federation: new Loc(depend, { rects: [rects.Night_Elf_Right] }),
    }
    this.tDwarf = {
      alliance: new Loc(depend, { rects: [rects.DwarfTownLeft] }),
      federation: new Loc(depend, { rects: [rects.DwarfTownRight] }),
    }
    this.tUndead = {
      alliance: new Loc(depend, { rects: [rects.UndeadTownLeft] }),
      federation: new Loc(depend, { rects: [rects.UndeadTownRight] }),
    }
    this.tVillage = {
      alliance: new Loc(depend, { rects: [rects.VillageTownLeft1, rects.VillageTownLeft2] }),
      federation: new Loc(depend, { rects: [rects.VillageTownRight1, rects.VillageTownRight2] }),
    }
    this.tWildhammer = {
      alliance: new Loc(depend, { rects: [rects.WildhammerTownLeft] }),
      federation: new Loc(depend, { rects: [rects.WildhammerTownRight] }),
    }

    // Unit Enters a Loc Forwarding Region
    triggers.unitEntersRegion.addAction(() => {
      const eventRegion = Region.fromEvent()
      const eventLoc = Loc.get(eventRegion)

      if (eventLoc != null) {
        const eventUnit = Unit.fromEvent()
        if (UnitType.order.has(eventUnit.typeId)) {
          for (let i = 0; i < eventLoc.thruOrder.length; i++) {
            const element = eventLoc.thruOrder[i]

            if (eventUnit.inForce(element.army.force)) {
              const dest = element.loc.randomCoordinate

              eventUnit.issueCoordinateOrder(Order.Attack, dest)
            }
          }
        }
      }
    })
  }
}
