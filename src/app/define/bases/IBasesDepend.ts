/** @format */

import { Locs } from '../../systems/loc/Locs'
import { Units } from 'app/define/units/Units'
import { Forces } from '../forces/Forces'
import { Creeps } from '../creeps/Creeps'
import { UnitTypes } from '../UnitTypes'

export interface IBasesDepend {
  locs: Locs
  units: Units
  forces: Forces
  creeps: Creeps
  unitTypes: UnitTypes
}
