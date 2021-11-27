

import { DeathSpawn } from "./classes/abilities/deathSpawn"
import { Pathing } from "./systems/pathing"
import { Log } from "./systems/log"
import { Gate } from "classes/abilities/gate"
import { Cinematic } from "./classes/cinematics"
import { Ability } from "classes/ability"
import { NormalAbility } from "./classes/abilities/normalAbilities"
import { HeroAttribute } from "classes/attribute"
import { Army } from "classes/army"
import { Force, Rectangle, Region, Trigger, Unit } from "lib/w3ts/index"
import { Hero } from "app/classes/heroes/hero"
import { Aspect } from "classes/aspect"
import { Loc } from "classes/loc"
import { Faction } from "classes/faction"
import { Spawn } from "classes/spawn"
import { ItemType } from "app/classes/itemType"
import { TimeMageHeroType } from "classes/heroes/heroTypes/timeMageHeroType"
import { TacticianHeroType } from "classes/heroes/heroTypes/tacticianHeroType"
import { ShiftMasterHeroType } from "classes/heroes/heroTypes/shiftMasterHeroType"
import { ManaAddictHeroType } from "classes/heroes/heroTypes/manaAddictHeroType"
import { BrawlerHeroType } from "classes/heroes/heroTypes/brawlerHeroType"
import { Load } from "classes/preload"
import { ItemUpgrade } from "classes/heroes/itemUpgrade"
import { Banner } from "classes/banner"
import { AspectOfFireEvent } from "./classes/event"



export class Game {


    static mapInit = (): void => {

        Log.Verbose("Game Init Start")

        ItemType.define()
        ItemUpgrade.define()

        Force.define()
        Cinematic.onInit()

        Region.define()
        Rectangle.define()
        Unit.define()
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


        Log.Verbose("Game Init Finished")
    }

    static start = (): void => {
        FogEnableOff()
        FogMaskEnableOff()

        Log.Verbose("Game Map Start")

        
        Army.define()
        Loc.define()
        Faction.define()
        Spawn.define()
        Gate.define()
        NormalAbility.define()
        Aspect.define()
        Banner.define()
        AspectOfFireEvent.define()

        Gate.start(2, 700)

        Cinematic.setupCineCamera()
        Load.units()

        Cinematic.startHeroSelector()
        //Cinematic.setupGameCamera()

        Spawn.start()

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

