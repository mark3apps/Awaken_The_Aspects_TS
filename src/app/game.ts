import { DeathSpawn } from 'app/abilities'
import { Cinematic, Pathing } from 'app/systems'
import { Players } from 'lib/w3ts'
import { CameraSetups } from 'lib/w3ts/handles/CameraSetups'
import { Forces } from 'lib/w3ts/handles/Forces'
import { Rectangles } from 'lib/w3ts/handles/Rectangles'
import { Regions } from 'lib/w3ts/handles/Regions'
import { Triggers } from 'app/define/triggers/triggers'
import { Units } from 'lib/w3ts/handles/Units'
import { AbilityTypes } from './define/abilityTypes/abilityTypes'
import { Heroes } from './define/heroes'
import { ItemTypes } from './define/itemTypes'
import { Banners } from './define/banners'
import { Events } from './systems/event/Events'
import { Gates } from './systems/gates/gates'
import { HeroAttributes } from './systems/heroAttribute/heroAttributes'
import { AbilityTriggers } from './define/abilityTriggers/abilityTriggers'
import { AbilityEngine } from './classes/abilityEngine/AbilityEngine'
import { AbilityCast } from './classes/abilityCast'
import { ArcTagEngine } from './systems/arcTag/ArcTagEngine'
import { Armies } from './define/Armies'
import { Factions } from './define/Factions'
import { Locs } from './systems/loc/Locs'
import { Aspects } from './define/Aspects'
import { Spawns } from './systems/spawn/Spawns'
import { ShiftMasterHeroType } from './heroes/heroTypes'
import { DamageEngine } from './systems/damageEvent/DamageEngine'
import { Bases } from './define/Bases'
import { Logger } from './log'

export class Game {
	static init = (): void => {
	}

	static start = (): void => {
		FogEnableOff()
		FogMaskEnableOff()

		Logger.Information('Game Init Start')

		// Globals with no Dependencies
		Logger.Information('No Dependencies')
		const rects = Rectangles.getInstance()
		const camSetups = CameraSetups.getInstance()
		const itemTypes = ItemTypes.getInstance()
		const forces = Forces.getInstance()
		const abilCast = AbilityCast.getInstance()
		const units = Units.getInstance()
		const abilTypes = AbilityTypes.getInstance()
		const regions = Regions.getInstance()
		const arcTagEngine = ArcTagEngine.getInstance()
		const triggers = Triggers.getInstance({})

		// Globals with upstream and downstream dependencies
		Logger.Information('Up and Down Dependencies')
		const armies = Armies.getInstance({ units: units, forces: forces })
		const locs = Locs.getInstance({ triggers: triggers, armies: armies, rects: rects })
		const banners = Banners.getInstance({ units: units, forces: forces })
		const heroAttr = HeroAttributes.getInstance({ itemTypes: itemTypes })
		const bases = Bases.getInstance({ locs: locs, armies: armies, units: units })
		const factions = Factions.getInstance({ bases: bases })
		const abilEngine = AbilityEngine.getInstance({ triggers: triggers, abilityCast: abilCast })
		const pathing = Pathing.getInstance({ triggers: triggers, locs: locs, forces: forces, regions: regions })

		// // // Globals with Upstream Dependencies
		Logger.Information('Up Dependencies')
		const damageEngine = DamageEngine.getInstance({ arcTagEngine: arcTagEngine, triggers: triggers })
		const heroes = Heroes.getInstance({ triggers: triggers, forces: forces, rects: rects })
		const deathSpwan = DeathSpawn.getInstance({ triggers: triggers, pathing: pathing })
		const aspects = Aspects.getInstance({ locs: locs, units: units, forces: forces, rects: rects })
		const shiftMasterHeroType = ShiftMasterHeroType.getInstance({ abilityTypes: abilTypes, heroAttr: heroAttr })
		const abilTrigs = AbilityTriggers.getInstance({ abilityEngine: abilEngine, abilityTypes: abilTypes, abilityCast: abilCast })
		const gates = Gates.getInstance({ triggers: triggers })

		// // // Globals with Init Functions
		const cinematic = Cinematic.getInstance({ forces: forces, camSetups: camSetups })
		const spawns = Spawns.getInstance({ factions: factions })
		const events = Events.getInstance({ units: units, banners: banners, locs: locs, forces: forces, rects: rects })

		Logger.Verbose('Game Init Finished')

		Logger.Verbose('Running Init Functions')
		// Start Functions
		cinematic.onInit()
		cinematic.setupCineCamera()
		cinematic.startHeroSelector()
		spawns.start()
		events.start()

		Players[0].lumber = 50
	}
}
