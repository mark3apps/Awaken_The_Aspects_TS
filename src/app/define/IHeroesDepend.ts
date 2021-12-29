import { Rectangles } from 'lib/w3ts/handles/Rectangles'
import { Forces } from 'lib/w3ts/handles/Forces'
import { ITriggers } from 'app/define/triggers/interfaces/ITriggers'

export interface IHeroesDepend {
	triggers: ITriggers
	rects: Rectangles
	forces: Forces
}
