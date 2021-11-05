/* eslint-disable @typescript-eslint/ban-ts-comment */
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
import { ABILITY } from "app/definitions/abilities"
import { CINEMATIC } from "./definitions/cinematics"
import { HERO_TYPE } from "./definitions/heroTypes"
import { HEROES } from "./definitions/heroes"



export namespace Game {


    export const mapInit = (): void => {

        Log.Information("Game Init Start")

        
        
        REGION.define()
        EVENT.define()
        DEATH_SPAWN.define()
        PATHING.define()
        ABILITY.define()
        HERO_TYPE.define()
        HEROES.define()
        
        Log.Information("Game Init Finished")
    }

    export const start = (): void => {
        FogEnableOff()
        FogMaskEnableOff()
        FogMaskEnableOn()
        FogEnableOn()

        Log.Information("Game Map Start")

        FORCE.define()
        ARMY.define()
        LOC.define()
        FACTION.define()
        SPAWN.define()
        Gate.define()
        
        CINEMATIC.setupCineCamera()
        CINEMATIC.startHeroSelector()

        Gate.start(2, 700)
        SPAWN.start()

        Log.Information("Game Map Start Finished")


        Log.Information("Start Hero Pick")

        
        
        // HeroSelector.addUnit('Hamg')
        // HeroSelector.addUnit('Hblm')
        // HeroSelector.addUnit('Hmkg')
        // HeroSelector.addUnit("Obla", true) //this unit can only be randomed
        // HeroSelector.addUnit("Ofar")
        // HeroSelector.addUnit("Otch", 1) //this unit can only be randomed
        // HeroSelector.addUnit("") //this is an empty box. It still takes a slot.
        // HeroSelector.addUnit("") //this is an empty box. It still takes a slot.
        // HeroSelector.addUnit("Oshd")
        // HeroSelector.addUnit("Edem")
        // HeroSelector.addUnit("") //this is an empty box. It still takes a slot.
        // HeroSelector.addUnit("") //this is an empty box. It still takes a slot.
        // HeroSelector.addUnit("Ekee")
        // HeroSelector.addUnit("Emoo")
        // HeroSelector.addUnit("Ewar",true)
        // HeroSelector.addUnit("Udea")
        // HeroSelector.addUnit("Ulic")
        // HeroSelector.addUnit("Udre")
        // HeroSelector.addUnit("Ucrl",1)


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

