import { UnitType } from "classes/unitType"
import { ATTACH } from "lib/w3ts/globals/attachmentPoints"

export interface DeathSpawn {
    amount: number,
    unitId: UnitType,
    chance?: number,
    animation?: string,
    effectPath?: string,
    effectAttach?: ATTACH.Point,
    effectAttachMod?: ATTACH.Mod,
    effectAttachSpecial?: ATTACH.Special
}