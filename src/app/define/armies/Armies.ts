/** @format */

import { Army } from '../../systems/army/army'
import { IArmiesDepend } from './interfaces/IArmiesDepend'

export class Armies {
  private static instance?: Armies

  static getInstance(depend: IArmiesDepend) {
    if (!Armies.instance) Armies.instance = new Armies(depend)
    return Armies.instance
  }

  Alliance
  Federation

  constructor(depend: IArmiesDepend) {
    const units = depend.units
    const forces = depend.forces

    this.Alliance = new Army()
    this.Federation = new Army()

    this.Alliance.force = forces.AllianceComps
    this.Alliance.enemy = this.Federation
    this.Alliance.capital = units.h00E_0033
    this.Federation.force = forces.FederationComps
    this.Federation.enemy = this.Alliance
    this.Federation.capital = units.h00E_0081
  }
}
