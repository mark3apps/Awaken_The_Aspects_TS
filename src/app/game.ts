import { UNIT_TYPE } from "app/definitions/unitTypes"
import { ARMY } from "./definitions/armies"
import { FACTION } from "./definitions/factions"
import { FORCE } from "./definitions/forces"
import { LOC } from "./definitions/locs"
import { SPAWN } from "./definitions/spawns"
import { EVENT } from "./systems/events"
import { PATHING } from "./systems/pathing"
import { ABILITY } from "./definitions/abilities"
import { DEATH_SPAWN } from "./abilities/unit/deathSpawn"
import { REGION } from "./definitions/regions"
import { ITEM_TYPE } from "./definitions/itemTypes"
import { HERO_TYPE } from "./definitions/heroes"

export namespace Game {


    export function mapInit(): void {
        
        print("Init Start")
        REGION.define()
        UNIT_TYPE.define()
        EVENT.define()
        ABILITY.define()
        DEATH_SPAWN.define()
        PATHING.define()
        print("Item Define")
        ITEM_TYPE.define()
        print("Init Finished")
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

        HERO_TYPE.define()
        
        SPAWN.start()

        print("Worked")
    }



}

