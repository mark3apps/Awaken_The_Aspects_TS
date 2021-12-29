import { UnitType } from 'app/classes'
import { AttachPoint, AttachMod, AttachSpecial } from 'lib/w3ts'

export interface IDeathSpawn {
	amount: number
	unitId: UnitType
	chance?: number
	animation?: string
	effectPath?: string
	effectAttach?: AttachPoint
	effectAttachMod?: AttachMod
	effectAttachSpecial?: AttachSpecial
}
