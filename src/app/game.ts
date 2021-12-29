import { DeathSpawn } from 'app/abilities'
import { BrawlerHeroType, ManaAddictHeroType, ShiftMasterHeroType, TacticianHeroType, TimeMageHeroType } from 'app/heroes/heroTypes'
import { ItemUpgrade, Cinematic, Pathing, Army, Loc, Faction, Spawn, Aspect, Load } from 'app/systems'
import { Players } from 'lib/w3ts'
import { CameraSetups } from 'lib/w3ts/handles/CameraSetups'
import { Forces } from 'lib/w3ts/handles/Forces'
import { Rectangles } from 'lib/w3ts/handles/Rectangles'
import { Regions } from 'lib/w3ts/handles/Regions'
import { Triggers } from 'app/define/triggers/triggers'
import { Units } from 'lib/w3ts/handles/Units'
import { AbilityTypes } from './classes/ability/abilityTypes'
import { Heroes } from './classes/Heroes'
import { ItemTypes } from './classes/ItemTypes'
import { Logger } from './log'
import { Banners } from './systems/banner/banners'
import { Events } from './systems/event/Events'
import { Gates } from './systems/gates/gates'
import { HeroAttributes } from './systems/heroAttribute/heroAttributes'
import { AbilityTriggers } from './define/abilityTriggers/abilityTriggers'
import { AbilityEngine } from './classes/abilityEngine/AbilityEngine'
import { AbilityCast } from './classes/ability/abilityCast'

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

		const triggers = Triggers.getInstance()
		DeathSpawn.getInstance(triggers)
		Pathing.define(triggers)
		HeroAttributes.define()

		Heroes.define({ triggers: triggers })

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

		const abilTypes = AbilityTypes.getInstance()
		const abilEngine = AbilityEngine.getInstance()
		const triggers = Triggers.getInstance()
		const cast = AbilityCast.getInstance()

		Army.define()
		Loc.define(triggers)
		Faction.define()
		Spawn.define()
		Gates.define(triggers)
		Aspect.define()
		Banners.define()
		Events.define()

		Cinematic.setupCineCamera()
		Load.units()

		const abilTrigsDepend = { abilityEngine: abilEngine, abilityTypes: abilTypes, cast: cast, triggers: triggers }
		const abilTrigs = AbilityTriggers.getInstance(abilTrigsDepend)

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
