import { Triggers } from 'app/define/triggers/triggers'
import { ArcTagEngine } from '../arcTags/ArcTagEngine'

export interface IDamageEngineDepend {
	triggers: Triggers
	arcTagEngine: ArcTagEngine
}
