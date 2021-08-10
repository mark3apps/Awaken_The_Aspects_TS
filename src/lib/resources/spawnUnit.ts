import { UnitType } from "./unitType"


export interface SpawnUnit {
    unitId: UnitType,
    amount?: number,
    waves: Array<number>,
    start?: number,
    end?: number;
}