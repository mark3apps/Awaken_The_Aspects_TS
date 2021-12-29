import { Locs } from '../systems/loc/Locs'
import { Armies } from 'app/define/Armies'
import { Units } from 'lib/w3ts/handles/Units'

export interface IBasesDepend {
	locs: Locs
	armies: Armies
	units: Units
}
