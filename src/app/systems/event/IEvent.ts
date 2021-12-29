import { Position } from 'app/classes/position'
import { UnitType } from 'app/classes/unitType'
import { Banner } from '../banner/banner'

export interface IEvent {
	summonUnitType: UnitType
	banners: Banner[]
	spawnPos: Position
	eventInterval?: number
	eventTime?: number
}
