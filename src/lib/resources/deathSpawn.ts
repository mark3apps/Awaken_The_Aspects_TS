import { AttachPoint } from "./attachPoints"
import { EffectPath } from "./effects"
import { UnitType } from "./unitType"

export interface DeathSpawn {
    amount: number,
    unitId: UnitType,
    chance?: number,
    animation?: string,
    effectPath?: EffectPath,
    effectAttach?: AttachPoint
}