import { DeathSpawn, Gate } from 'app/abilities'
import { Logger, ItemType, AbilityType, Hero, EffectType } from 'app/classes'
import { BrawlerHeroType, ManaAddictHeroType, ShiftMasterHeroType, TacticianHeroType, TimeMageHeroType } from 'app/heroes/heroTypes'
import { ItemUpgrade, Cinematic, Pathing, HeroAttribute, Army, Loc, Faction, Spawn, Aspect, Banner, AspectOfFireEvent, Load } from 'app/systems'
import { Rectangle, Unit, CameraSetup, Trigger, Force, Region, Players } from 'lib/w3ts'

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

		// Skill Tree Open & Close
		new AbilityType({
			four: 'A024',
			type: EffectType.Instant,
			onEffect: () => {
				const hero = Hero.fromEvent()
				if (hero) {
					if (hero.guardTree.IsWatched()) hero.guardTree.Hide()
					if (hero.armorTree.IsWatched()) hero.armorTree.Hide()
					hero.skillTree.IsWatched() ? hero.skillTree.Hide() : hero.skillTree.Show()
				}
			}
		})

		// Guard Tree Open & Close
		new AbilityType({
			four: 'A03Y',
			type: EffectType.Instant,
			onEffect: () => {
				const hero = Hero.fromEvent()
				if (hero) {
					if (hero.skillTree.IsWatched()) hero.skillTree.Hide()
					if (hero.armorTree.IsWatched()) hero.armorTree.Hide()
					hero.guardTree.IsWatched() ? hero.guardTree.Hide() : hero.guardTree.Show()
				}
			}
		})

		// Armor Tree Open & Close
		new AbilityType({
			four: 'A03W',
			type: EffectType.Instant,
			onEffect: () => {
				const hero = Hero.fromEvent()
				if (hero) {
					if (hero.guardTree.IsWatched()) hero.guardTree.Hide()
					if (hero.skillTree.IsWatched()) hero.skillTree.Hide()
					hero.armorTree.IsWatched() ? hero.armorTree.Hide() : hero.armorTree.Show()
				}
			}
		})

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
