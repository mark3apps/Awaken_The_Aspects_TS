/** @format */

import { BaseGroup } from 'app/classes/baseGroup/BaseGroup'
import { Bases } from '../bases/Bases'

export interface IBaseGroupsDepend {
  bases: Bases
}

export class BaseGroups {
  private static instance?: BaseGroups

  static initInstance(depend: IBaseGroupsDepend) {
    if (!BaseGroups.instance) BaseGroups.instance = new BaseGroups(depend)
    return BaseGroups.instance
  }

  static getInstance() {
    return BaseGroups.instance
  }

  groups: BaseGroup[] = []

  constructor(depend: IBaseGroupsDepend) {
    const bases = depend.bases

    this.groups.push(new BaseGroup([bases.arcaneAlliance, bases.arcaneFederation]))
    this.groups.push(new BaseGroup([bases.arcaneCreepAlliance, bases.arcaneCreepFederation]))
    this.groups.push(new BaseGroup([bases.arcaneHeroAlliance, bases.arcaneHeroFederation]))
    this.groups.push(new BaseGroup([bases.arcaneTopAlliance, bases.arcaneTopFederation]))
    this.groups.push(new BaseGroup([bases.arcaneBottomAlliance, bases.arcaneBottomFederation]))
    this.groups.push(new BaseGroup([bases.castleAlliance, bases.castleFederation]))
    this.groups.push(new BaseGroup([bases.highCityAlliance, bases.highCityFederation]))
    this.groups.push(new BaseGroup([bases.cityElvesAlliance, bases.cityElvesFederation]))
    this.groups.push(new BaseGroup([bases.cityFrontAlliance, bases.cityFrontFederation]))
    this.groups.push(new BaseGroup([bases.humanShipyardAlliance, bases.humanShipyardFederation]))
    this.groups.push(new BaseGroup([bases.highElvesAlliance, bases.highElvesFederation]))
    this.groups.push(new BaseGroup([bases.highElvesCreepAlliance, bases.highElvesCreepFederation]))
    this.groups.push(new BaseGroup([bases.treeAlliance, bases.treeFederation]))
    this.groups.push(new BaseGroup([bases.nightElfAlliance, bases.nightElfFederation]))
    this.groups.push(new BaseGroup([bases.nightElfShipyardAlliance, bases.nightElfShipyardFederation]))
    this.groups.push(new BaseGroup([bases.mercAlliance, bases.mercFederation]))
    this.groups.push(new BaseGroup([bases.dwarfAlliance, bases.dwarfFederation]))
    this.groups.push(new BaseGroup([bases.dwarfCreepAlliance, bases.dwarfCreepFederation]))
    this.groups.push(new BaseGroup([bases.nagaAlliance, bases.nagaFederation]))
    this.groups.push(new BaseGroup([bases.nagaCreepAlliance, bases.nagaCreepFederation]))
    this.groups.push(new BaseGroup([bases.murlocAlliance, bases.murlocFederation]))
    this.groups.push(new BaseGroup([bases.orcAlliance, bases.orcFederation]))
    this.groups.push(new BaseGroup([bases.draeneiAlliance, bases.draeneiFederation]))
    this.groups.push(new BaseGroup([bases.undeadAlliance, bases.undeadFederation]))
    this.groups.push(new BaseGroup([bases.wildhammerAlliance, bases.wildhammerFederation]))
  }

  get count() {
    return this.groups.length
  }
}
