import { DeathSpawn } from 'app/abilities'
import { BrawlerHeroType, ManaAddictHeroType, ShiftMasterHeroType, TacticianHeroType, TimeMageHeroType } from 'app/heroes/heroTypes'
import { ItemUpgrade, Cinematic, Pathing, Army, Loc, Faction, Spawn, Aspect, Load } from 'app/systems'
import { Players } from 'lib/w3ts'
import { CameraSetups } from 'lib/w3ts/handles/CameraSetups'
import { Forces } from 'lib/w3ts/handles/Forces'
import { Rectangles } from 'lib/w3ts/handles/Rectangles'
import { Regions } from 'lib/w3ts/handles/Regions'
import { Triggers } from 'lib/w3ts/handles/triggers'
import { Units } from 'lib/w3ts/handles/Units'
import { AbilityTypeMap } from './classes/abilityTypeMap'
import { AbilityTypes } from './classes/abilityTypes'
import { Heroes } from './classes/Heroes'
import { ItemTypes } from './classes/ItemTypes'
import { Logger } from './log'
import { Banners } from './systems/banner/banners'
import { Events } from './systems/event/Events'
import { Gates } from './systems/gates/gates'
import { HeroAttributes } from './systems/heroAttribute/heroAttributes'

export class Game {
	static mapInit = (): void => {
		Logger.Verbose('Game Init Start')

		// Define Map Globals
		Rectangles.defineGlobals()
		Units.defineGlobals()
		CameraSetups.defineGlobals()

		ItemTypes.define()
		ItemUpgrade.define()

		Forces.define()
		Cinematic.onInit()

		Regions.define()

		Triggers.define()

		DeathSpawn.define()
		Pathing.define()
		HeroAttributes.define()

		Heroes.define()


		// new BrawlerHeroType()
		// new ManaAddictHeroType()
		new ShiftMasterHeroType()
		// new TacticianHeroType()
		// new TimeMageHeroType()

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
		Gates.define()
		Aspect.define()
		Banners.define()
		Events.define()

		Cinematic.setupCineCamera()
		Load.units()

		AbilityTypes.getInstance()
		AbilityTypeMap.initSpellEffects()

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
