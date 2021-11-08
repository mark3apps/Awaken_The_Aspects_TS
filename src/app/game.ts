import { ARMY } from "./definitions/armies"
import { FACTION } from "./definitions/factions"
import { FORCE } from "./definitions/forces"
import { LOC } from "./definitions/locs"
import { SPAWN } from "./definitions/spawns"
import { EVENT } from "./systems/events"
import { DEATH_SPAWN } from "./abilities/unit/deathSpawn"
import { REGION } from "./definitions/regions"
import { PATHING } from "./systems/pathing"
import { Log } from "./systems/log"
import { Gate } from "classes/gate"
import { HERO_ABILITY } from "app/definitions/heroAbilities"
import { CINEMATIC } from "./definitions/cinematics"
import { HERO_TYPE } from "./definitions/heroTypes"
import { HERO } from "./definitions/heroes"
import { ATTRIBUTE } from "./definitions/attributes"
import { ITEM_UPGRADE } from "./definitions/itemUpgrades"
import { Ability } from "classes/ability"
import { UNIT_ABILITY } from "./definitions/unitAbilities"



export namespace Game {


    export const mapInit = (): void => {

        Log.Verbose("Game Init Start")
        
        REGION.define()
        EVENT.define()
        DEATH_SPAWN.define()
        PATHING.define()
        ATTRIBUTE.define()
        UNIT_ABILITY.define()
        HERO_ABILITY.define()
        ITEM_UPGRADE.define()
        HERO_TYPE.define()
        HERO.define()

        Ability.initSpellEffects()
        
        Log.Verbose("Game Init Finished")
    }

    export const start = (): void => {
        FogEnableOff()
        FogMaskEnableOff()

        Log.Verbose("Game Map Start")

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

        Log.Verbose("Game Map Start Finished")


        Log.Verbose("Start Hero Pick")

        
        
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


        // if (Log.logLevel <= LogLevel.Information) {
        //     const hero = new Unit(Players[0], UNIT_TYPE.ShiftMaster.id, Rectangle.getPlayableMap().centerX, Rectangle.getPlayableMap().centerY, 0)
        //     hero.heroLevel = 100
        //     hero.attack1Base = 2500
        //     hero.strength = 1000
        //     hero.armor = 500
        //     hero.moveSpeed = 500
        // }
    }



}

