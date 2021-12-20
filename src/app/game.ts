import { DeathSpawn, Gate } from 'app/abilities'
import { ItemType, AbilityType, Hero, EffectType } from 'app/classes'
import { BrawlerHeroType, ManaAddictHeroType, ShiftMasterHeroType, TacticianHeroType, TimeMageHeroType } from 'app/heroes/heroTypes'
import { ItemUpgrade, Cinematic, Pathing, HeroAttribute, Army, Loc, Faction, Spawn, Aspect, Banner, AspectOfFireEvent, Load } from 'app/systems'
import { Rectangle, Unit, CameraSetup, Trigger, Force, Region, Players } from 'lib/w3ts'
import { Logger } from './log'

export class Game {
	static mapInit = (): void => {
		Logger.Verbose('Game Init Start')

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

		DeathSpawn.define()
		Pathing.define()
		HeroAttribute.define()

		Hero.define()

		// new BrawlerHeroType()
		// new ManaAddictHeroType()
		new ShiftMasterHeroType()
		// new TacticianHeroType()
		// new TimeMageHeroType()

		AbilityType.initSpellEffects()

		Logger.Verbose('Game Init Finished')
	}

	static start = (): void => {
		FogEnableOff()
		FogMaskEnableOff()

		Logger.Verbose('Game Map Start')

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

		Players[0].lumber = 50

		Spawn.start()

		Logger.Verbose('Game Map Start Finished')

		Logger.Verbose('Start Hero Pick')

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
