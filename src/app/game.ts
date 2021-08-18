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
import { ABILITY } from "lib/resources/mapAbilities"


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

        ABILITY.define()
        FORCE.define()
        ARMY.define()
        LOC.define()
        FACTION.define()
        SPAWN.define()
        Gate.define()

        Gate.start(2, 700)
        SPAWN.start()

        Log.Information("Game Map Start Finished")


        
        if (Log.logLevel <= LogLevel.Information) {
            const hero = new Unit(Players[0], UNIT_TYPE.ShiftMaster.id, Rectangle.getPlayableMap().centerX, Rectangle.getPlayableMap().centerY, 0)
            hero.heroLevel = 100
            hero.attack1Base = 2500
            hero.strength = 1000
            hero.armor = 500
            hero.moveSpeed = 500
        }
    }



}

