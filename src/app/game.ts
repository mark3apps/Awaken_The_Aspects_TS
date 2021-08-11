import { UNIT_TYPE } from "app/definitions/unitTypes"
import { ARMY } from "./definitions/armies"
import { FACTION } from "./definitions/factions"
import { FORCE } from "./definitions/forces"
import { LOC } from "./definitions/locs"
import { SPAWN } from "./definitions/spawns"
import { EVENT } from "./systems/events"
import { PATHING } from "./systems/unitPathing"
import { ABILITY } from "./definitions/abilities"
import { DEATH_SPAWN } from "./abilities/unit/deathSpawn"
import { REGION } from "./definitions/regions"

export namespace Game {


    export function mapInit(): void {
        
        REGION.define()
        UNIT_TYPE.define()
        EVENT.define()
        ABILITY.define()
        DEATH_SPAWN.define()
        PATHING.define()
    }

    export function start(): void {
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

