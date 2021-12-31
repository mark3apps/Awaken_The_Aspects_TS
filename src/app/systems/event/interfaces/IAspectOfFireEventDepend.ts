import { Banners } from 'app/define/banners'
import { Locs } from 'app/systems/loc/Locs'
import { Forces } from 'app/define/forces'
import { Rectangles } from 'app/define/rectangles'
import { Units } from 'app/define/units'

export interface IAspectOfFireEventDepend {
	units: Units,
	banners: Banners,
	locs: Locs,
	forces: Forces,
	rects: Rectangles
}
