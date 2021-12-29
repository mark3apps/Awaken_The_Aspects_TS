import { Pathing } from 'app/systems'
import { ITriggers } from 'app/define/triggers/interfaces/ITriggers'


export interface IDeathSpawnDepend {
	triggers: ITriggers
	pathing: Pathing
}
