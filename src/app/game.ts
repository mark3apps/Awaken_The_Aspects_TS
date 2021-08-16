import { ARMY } from "./definitions/armies"
import { FACTION } from "./definitions/factions"
import { FORCE } from "./definitions/forces"
import { LOC } from "./definitions/locs"
import { SPAWN } from "./definitions/spawns"
import { EVENT } from "./systems/events"
import { DEATH_SPAWN } from "./abilities/unit/deathSpawn"
import { REGION } from "./definitions/regions"
import { PATHING } from "./systems/pathing"
import { Log, LogLevel } from "./systems/log"
import { Gate } from "classes/gate"
import { Rectangle, Unit } from "lib/w3ts/index"
import { Players } from "lib/w3ts/globals/index"
import { UNIT_TYPE } from "./definitions/unitTypes"


export namespace Game {


    export function mapInit(): void {

        Log.Information("Game Init Start")

        REGION.define()
        EVENT.define()
        DEATH_SPAWN.define()
        PATHING.define()

        Log.Information("Game Init Finished")
    }

    export function start(): void {
        FogEnableOff()
        FogMaskEnableOff()

        Log.Information("Game Map Start")

        FORCE.define()
        ARMY.define()
        LOC.define()
        FACTION.define()
        SPAWN.define()
        Gate.define()

        Gate.start(2, 700)
        SPAWN.start()

        Log.Information("Game Map Start Finished")


        
        if (Log.logLevel >= LogLevel.Information) {
            const hero = new Unit(Players[0], UNIT_TYPE.ShiftMaster.id, Rectangle.getPlayableMap().centerX, Rectangle.getPlayableMap().centerY, 0)
            hero.setHeroLevel(100, true)
            hero.setField(UNIT_WEAPON_IF_ATTACK_DAMAGE_BASE, 2500, 1)
            hero.setField(UNIT_IF_STRENGTH, 1500)
        }
    }



}

