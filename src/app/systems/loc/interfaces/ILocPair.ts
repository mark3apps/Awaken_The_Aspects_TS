/** @format */

import { Loc } from '../loc'

export interface ILocGroup {
  alliance: Loc
  federation: Loc
}

export class LocGroup {
  alliance: Loc
  federation: Loc

  constructor(locGroup: ILocGroup) {
    this.alliance = locGroup.alliance
    this.federation = locGroup.federation
  }
}
