import { ITriggers } from 'app/define/triggers/interfaces/ITriggers'
import { Forces } from 'lib/w3ts/handles/Forces'
import { Regions } from 'lib/w3ts/handles/Regions'
import { Locs } from './Locs'

export interface IPathingDepend {
	triggers: ITriggers
	locs: Locs,
	forces: Forces,
	regions: Regions
}
