import { ARMY } from "./definitions/armies"
import { FACTION } from "./definitions/bases"
import { FORCE } from "./definitions/forces"
import { LOC } from "./definitions/locs"
import { SPAWN } from "./definitions/spawns"



export namespace Game {


    export function mapInit(){

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
        SPAWN.base.define()
        SPAWN.start()
        print("Worked")
    }



}

