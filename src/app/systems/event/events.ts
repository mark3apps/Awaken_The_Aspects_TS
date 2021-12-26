import { UnitType } from 'app/classes/unitType'
import { Timer } from 'lib/w3ts/index'
import { Banners } from "../banner/banners"
import { AspectOfFireEvent } from './AspectOfFireEvent'

export class Events {
	static define (): void {
		const time = new Timer()
		time.start(60, false, () => {
			new AspectOfFireEvent(UnitType.AspectOfFire, [Banners.center1, Banners.center2, Banners.center3, Banners.center4], 220, 50)
			time.destroy()
		})
	}
}
