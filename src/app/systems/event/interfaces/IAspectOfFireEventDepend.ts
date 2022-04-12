/** @format */

import { Banners } from 'app/define/banners/Banners'
import { Locs } from 'app/systems/loc/Locs'
import { Forces } from 'app/define/forces/Forces'
import { Rectangles } from 'app/define/rectangles/Rectangles'
import { Units } from 'app/define/units/Units'
import { UnitTypes } from 'app/define/UnitTypes'

export interface IAspectOfFireEventDepend {
  units: Units
  banners: Banners
  locs: Locs
  forces: Forces
  rects: Rectangles
  unitTypes: UnitTypes
}
