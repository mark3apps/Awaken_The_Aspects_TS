
import { Event } from "../classes/events"
import { DeathSpawn } from "./abilities/unit/deathSpawn"
import { Pathing } from "./systems/pathing"
import { Log } from "./systems/log"
import { Gate } from "classes/gate"
import { Cinematic } from "../classes/cinematics"
import { Ability } from "classes/ability"
import { NormalAbility } from "../classes/normalAbilities"
import { HeroAttribute } from "classes/attribute"
import { Army } from "classes/army"
import { Force, Region } from "lib/w3ts/index"
import { Hero } from "classes/hero"
import { Aspect } from "classes/aspect"
import { Loc } from "classes/loc"
import { Faction } from "classes/faction"
import { ItemUpgrade } from "classes/itemUpgrade"
import { Spawn } from "classes/spawn"
import { ItemType } from "classes/itemType"
import { TimeMageHeroType } from "classes/heroTypes/timeMageHeroType"
import { TacticianHeroType } from "classes/heroTypes/tacticianHeroType"
import { ShiftMasterHeroType } from "classes/heroTypes/shiftMasterHeroType"
import { ManaAddictHeroType } from "classes/heroTypes/manaAddictHeroType"
import { BrawlerHeroType } from "classes/heroTypes/brawlerHeroType"
import { UnitType } from "classes/unitType"
import { Load } from "classes/preload"



export class Game {


    static mapInit = (): void => {

        Log.Verbose("Game Init Start")

        UnitType.define()
        Region.define()
        Event.define()
        
        DeathSpawn.define()
        Pathing.define()
        HeroAttribute.define()

        ItemType.define()
        ItemUpgrade.define()
        

        new BrawlerHeroType()
        new ManaAddictHeroType()
        new ShiftMasterHeroType()
        new TacticianHeroType()
        new TimeMageHeroType()

        Hero.define()

        Ability.initSpellEffects()

        Log.Verbose("Game Init Finished")
    }

    static start = (): void => {
        FogEnableOff()
        FogMaskEnableOff()

        Log.Verbose("Game Map Start")

        Force.define()
        Army.define()
        Loc.define()
        Faction.define()
        Spawn.define()
        Gate.define()
        NormalAbility.define()
        Aspect.define()

        Load.units()

        Cinematic.setupCineCamera()
        Cinematic.startHeroSelector()

        Gate.start(2, 700)
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

