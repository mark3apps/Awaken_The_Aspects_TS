import { Unit } from "lib/w3ts/index"
import { UnitType } from "./unitType"

export class Load {

    static units(): void {
        for (let i = 0; i < UnitType.preloader.length; i++) {
            const element = UnitType.preloader[i]

            const u = new Unit(GetPlayerNeutralPassive(), element.id, 0, 0, 0)
            // element.name = u.name
            // element.pointValue = u.pointValue
            // element.level = u.level
            u.destroy()
        }
    }
}