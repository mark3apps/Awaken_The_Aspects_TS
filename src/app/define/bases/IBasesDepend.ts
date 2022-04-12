/** @format */

import { Locs } from '../../systems/loc/Locs'
import { Units } from 'app/define/units'
import { Forces } from '../forces/Forces'
import { Creeps } from '../creeps/Creeps'

export interface IBasesDepend {
  locs: Locs
  units: Units
  forces: Forces
  creeps: Creeps
}
