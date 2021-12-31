import { Locs } from '../systems/loc/Locs'
import { Armies } from 'app/define/Armies'
import { Units } from 'app/define/units'

export interface IBasesDepend {
	locs: Locs
	armies: Armies
	units: Units
}
