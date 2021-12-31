import { Rectangles } from 'app/define/rectangles'
import { Forces } from 'app/define/forces'
import { ITriggers } from 'app/define/triggers/interfaces/ITriggers'

export interface IHeroesDepend {
	triggers: ITriggers
	rects: Rectangles
	forces: Forces
}
