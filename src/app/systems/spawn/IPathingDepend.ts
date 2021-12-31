import { ITriggers } from 'app/define/triggers/interfaces/ITriggers'
import { Forces } from 'app/define/forces'
import { Regions } from 'app/define/regions'
import { Locs } from '../loc/Locs'

export interface IPathingDepend {
	triggers: ITriggers
	locs: Locs,
	forces: Forces,
	regions: Regions
}
