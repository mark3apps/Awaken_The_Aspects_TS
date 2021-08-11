import { Army } from "classes/army"
import { Unit } from "lib/w3ts/index"
import { FORCE } from "./forces"

export namespace ARMY {
    export let alliance: Army
    export let federation: Army

    export function define(){
        alliance = new Army()
        alliance.force = FORCE.alliance
        alliance.enemy = federation
        alliance.captial = Unit.fromHandle(gg_unit_h00E_0033)
    
        federation = new Army()
        federation.force = FORCE.federation
        federation.enemy = alliance
        federation.captial = Unit.fromHandle(gg_unit_h00E_0081)
    }

}

