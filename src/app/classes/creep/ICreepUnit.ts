/** @format */

import { UnitType } from 'app/classes'

export interface ICreepUnitProp {
  unitType: UnitType
  amount?: number
  waves: number[]
  start?: number
  end?: number
}

export interface ICreepUnit {
  unitType: UnitType
  amount: number
  waves: number[]
  start: number
  end: number
}
