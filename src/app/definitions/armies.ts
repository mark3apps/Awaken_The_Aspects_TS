import { Army } from "classes/army"
import { Unit } from "lib/w3ts/index"
import { FORCE } from "./forces"

export namespace ARMY {
    export let Alliance: Army
    export let Federation: Army

    export function define(): void {
        Alliance = new Army()
        Alliance.force = FORCE.Alliance
        Alliance.enemy = Federation
        Alliance.captial = Unit.fromHandle(gg_unit_h00E_0033)
    
        Federation = new Army()
        Federation.force = FORCE.Federation
        Federation.enemy = Alliance
        Federation.captial = Unit.fromHandle(gg_unit_h00E_0081)
    }

}

