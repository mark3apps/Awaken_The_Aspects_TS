import { UNIT_TYPE, UnitType } from "../../app/definitions/unitTypes"

export interface SpawnUnit {
    unitId: UnitType,
    amount?: number,
    waves: Array<number>,
    start?: number,
    end?: number;
}