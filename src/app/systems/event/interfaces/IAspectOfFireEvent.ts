import { UnitType } from 'app/classes/unitType'
import { Banner } from '../../banner/banner'

export interface IAspectOfFireEvent {
	summonUnitType: UnitType; banners: Banner[]; eventInterval?: number; eventTime?: number
}
