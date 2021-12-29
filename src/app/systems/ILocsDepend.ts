import type { ITriggers } from 'app/define/triggers/interfaces/ITriggers'
import type { Rectangles } from 'lib/w3ts/handles/Rectangles'
import type { Armies } from './Armies'

export interface ILocsDepend {
	triggers: ITriggers
	armies: Armies,
	rects: Rectangles
}
