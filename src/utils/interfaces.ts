import { UNIT_FOUR } from "./globals";

export interface SPAWN_UNIT {
    uFour: UNIT_FOUR,
    amount?: number,
    waves: Array<number>,
    start?: number,
    end?: number
}