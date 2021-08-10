import { DEATH_SPAWN } from "./abilities/unit/index"
import { ABILITY, ARMY, BASE, FACTION, FORCE, LOC, SPAWN, UNIT_TYPE } from "./definitions/index"
import { EVENT, PATHING } from "./systems/index"


export function mapInit(): void {
    
    // Systems
    EVENT.define()
    PATHING.define()

    UNIT_TYPE.define()
    ABILITY.define()
    DEATH_SPAWN.define()
    
}


export function start(): void {
    FogEnableOff()
    FogMaskEnableOff()

    print("Starting Define")

    FORCE.define()
    ARMY.define()
    LOC.define()
    FACTION.define()
    BASE.define()
    SPAWN.define()
    

    SPAWN.start()

    print("Worked")
}





