/** @format */

import { ICreepUnit, ICreepUnitProp } from 'app/classes/creep/ICreepUnit'

export class Creep {
  units: ICreepUnit[] = []

  constructor() {}

  addUnit = (creep: ICreepUnitProp) => {
    if (!creep.amount) creep.amount = 1
    if (!creep.start) creep.start = 1
    if (!creep.end) creep.end = 5000

    const creepDefined = creep as ICreepUnit
    this.units.push(creepDefined)
  }

  get count() {
    return this.units.length
  }

  getUnits = (unitCheck: { level: number; wave: number }): ICreepUnit[] => {
    const units: ICreepUnit[] = []

    for (let i = 0; i < this.units.length; i++) {
      const element = this.units[i]

      if (element.waves.indexOf(unitCheck.wave) !== -1 && element.start <= unitCheck.level && element.end >= unitCheck.level) {
        units.push(element)
      }
    }

    return units
  }
}
