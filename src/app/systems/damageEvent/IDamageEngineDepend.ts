import { Triggers } from 'app/define/triggers/triggers'
import { ArcTagEngine } from '../arcTag/ArcTagEngine'

export interface IDamageEngineDepend {
	triggers: Triggers
	arcTagEngine: ArcTagEngine
}
