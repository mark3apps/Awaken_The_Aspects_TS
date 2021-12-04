import { UnitType } from "app/classes/unitType"

export interface SpawnUnit {
    unitType: UnitType,
    amount?: number,
    waves: number[],
    start?: number,
    end?: number;
}
