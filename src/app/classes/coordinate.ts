import { Coordinate } from "lib/resources/coordinate"

export const GetSpellTargetCoor = (): Coordinate => {
    return {x: GetSpellTargetX(), y: GetSpellTargetY()}
}