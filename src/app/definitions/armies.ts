import { Army } from "classes/army"
import { Unit } from "lib/w3ts/index"
import { FORCE } from "./index"


    export let Alliance: Army
    export let Federation: Army

    export function define(): void {
        Alliance = new Army()
        Federation = new Army()

        Alliance.force = FORCE.Alliance
        Alliance.enemy = Federation
        Alliance.capital = Unit.fromHandle(gg_unit_h00E_0033)
        
        Federation.force = FORCE.Federation
        Federation.enemy = Alliance
        Federation.capital = Unit.fromHandle(gg_unit_h00E_0081)
    }

