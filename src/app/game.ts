import { Rectangle, Unit, CameraSetup, Trigger, Force, Region } from "lib/w3ts/index"
import { DeathSpawn } from "./abilities/deathSpawn"
import { Gate } from "./abilities/gate"
import { Ability } from "./classes/ability"
import { Hero } from "./classes/hero"
import { ItemType } from "./classes/itemType"
import { Logger } from "./classes/log"
import { BrawlerHeroType } from "./heroes/heroTypes/brawlerHeroType"
import { ManaAddictHeroType } from "./heroes/heroTypes/manaAddictHeroType"
import { ShiftMasterHeroType } from "./heroes/heroTypes/shiftMasterHeroType"
import { TacticianHeroType } from "./heroes/heroTypes/tacticianHeroType"
import { TimeMageHeroType } from "./heroes/heroTypes/timeMageHeroType"
import { Army } from "./systems/army"
import { Aspect } from "./systems/aspect"
import { HeroAttribute } from "./systems/attribute"
import { Banner } from "./systems/banner"
import { Cinematic } from "./systems/cinematics"
import { AspectOfFireEvent } from "./systems/event"
import { Faction } from "./systems/faction"
import { ItemUpgrade } from "./systems/itemUpgrade"
import { Loc } from "./systems/loc"
import { Pathing } from "./systems/pathing"
import { Load } from "./systems/preload"
import { Spawn } from "./systems/spawn"


export class Game {


    static mapInit = (): void => {

        Logger.Verbose("Game Init Start")

        // Define Map Globals
        Rectangle.defineGlobals()
        Unit.defineGlobals()
        CameraSetup.defineGlobals()
        Trigger.defineGlobals()

        ItemType.define()
        ItemUpgrade.define()

        Force.define()
        Cinematic.onInit()

        Region.define()

        Trigger.define()
        Ability.define()
        
        
        DeathSpawn.define()
        Pathing.define()
        HeroAttribute.define()


        Hero.define()
        
        new BrawlerHeroType()
        new ManaAddictHeroType()
        new ShiftMasterHeroType()
        new TacticianHeroType()
        new TimeMageHeroType()


        Ability.initSpellEffects()


        Logger.Verbose("Game Init Finished")
    }

    static start = (): void => {
        FogEnableOff()
        FogMaskEnableOff()

        Logger.Verbose("Game Map Start")

        
        Army.define()
        Loc.define()
        Faction.define()
        Spawn.define()
        Gate.define()
        Aspect.define()
        Banner.define()
        AspectOfFireEvent.define()

        Gate.start(2, 700)

        Cinematic.setupCineCamera()
        Load.units()

        Cinematic.startHeroSelector()
        Cinematic.setupGameCamera()

        Spawn.start()

        Logger.Verbose("Game Map Start Finished")


        Logger.Verbose("Start Hero Pick")



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

