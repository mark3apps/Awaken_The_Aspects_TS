import { Units } from 'lib/w3ts/handles/Units'
import { Armies } from '../Armies'
import { Locs } from '../Locs'

export interface IFactionsDepend {
	units: Units,
	armies: Armies,
	locs: Locs
}
