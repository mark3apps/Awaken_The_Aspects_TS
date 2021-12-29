import { Forces } from 'lib/w3ts/handles/Forces'
import { Rectangles } from 'lib/w3ts/handles/Rectangles'
import { Units } from 'lib/w3ts/handles/Units'
import { Locs } from '../systems/loc/Locs'

export interface IAspectsDepend {
	locs: Locs,
	units: Units,
	forces: Forces,
	rects: Rectangles
}
