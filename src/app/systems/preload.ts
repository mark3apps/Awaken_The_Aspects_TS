import { Position } from 'app/classes/position'
import { UnitType } from 'app/classes/unitType'
import { Unit } from 'lib/w3ts/index'

export class Load {
	static units (): void {
		for (let i = 0; i < UnitType.preloader.length; i++) {
			const element = UnitType.preloader[i]

			const u = new Unit(GetPlayerNeutralPassive(), element.id, new Position(0, 0), 0)
			// element.name = u.name
			// element.pointValue = u.pointValue
			// element.level = u.level
			u.destroy()
		}
	}
}
