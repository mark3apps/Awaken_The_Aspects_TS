import { Banners } from 'app/define/banners'
import { Locs } from 'app/systems/loc/Locs'
import { Forces } from 'lib/w3ts/handles/Forces'
import { Rectangles } from 'lib/w3ts/handles/Rectangles'
import { Units } from 'lib/w3ts/handles/Units'

export interface IAspectOfFireEventDepend {
	units: Units,
	banners: Banners,
	locs: Locs,
	forces: Forces,
	rects: Rectangles
}
