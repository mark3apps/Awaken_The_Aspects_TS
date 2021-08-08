import { UNIT_TYPE } from "app/definitions/unitTypes"
import { ARMY } from "./definitions/armies"
import { FACTION } from "./definitions/bases"
import { FORCE } from "./definitions/forces"
import { LOC } from "./definitions/locs"
import { SPAWN } from "./definitions/spawns"
import { TRIGGER } from "./definitions/triggers"
import { UNIT_PATHING } from "./systems/unitPathing"
import { ABILITY } from "./abilities/abilities"

export namespace Game {


    export function mapInit() {
        TRIGGER.define()
        UNIT_TYPE.define()
        ABILITY.define()
        UNIT_PATHING.define()
    }

    export function start() {
        FogEnableOff()
        FogMaskEnableOff()

        print("Starting Define")
        
        FORCE.define()
        ARMY.define()
        LOC.define()
        FACTION.define()
        SPAWN.define()
        

        SPAWN.start()

        print("Worked")
    }



}

