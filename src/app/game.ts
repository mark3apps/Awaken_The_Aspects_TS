import { ARMY } from "./definitions/armies"
import { FACTION } from "./definitions/factions"
import { FORCE } from "./definitions/forces"
import { LOC } from "./definitions/locs"
import { SPAWN } from "./definitions/spawns"
import { EVENT } from "./systems/events"
import { DEATH_SPAWN } from "./abilities/unit/deathSpawn"
import { REGION } from "./definitions/regions"


export namespace Game {


    export function mapInit(): void {
        
        print("Init Start")
        EVENT.define()        
        DEATH_SPAWN.define()
        REGION.define()
        FORCE.define()
        ARMY.define()
        LOC.define()
        FACTION.define()
        SPAWN.define()
        print("Init Finished")
    }

    export function start(): void {
        FogEnableOff()
        FogMaskEnableOff()

        print("Starting Define")

        

        
        SPAWN.start()

        print("Worked")
    }



}

