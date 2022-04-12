/** @format */

import { DeathSpawn } from 'app/abilities'
import { Cinematic, Pathing } from 'app/systems'
import { Players } from 'lib/w3ts'
import { CameraSetups } from 'app/define/cameraSetups/CameraSetups'
import { Forces } from 'app/define/forces/Forces'
import { Rectangles } from 'app/define/rectangles/Rectangles'
import { Regions } from 'app/define/regions/Regions'
import { Triggers } from 'app/define/triggers/triggers'
import { Units } from 'app/define/units/Units'
import { AbilityTypes } from './define/abilityTypes/abilityTypes'
import { Heroes } from './define/heroes/Heroes'
import { ItemTypes } from './define/itemTypes'
import { Banners } from './define/banners/Banners'
import { Events } from './systems/event/Events'
import { Gates } from './systems/gates/gates'
import { HeroAttributes } from './systems/heroAttribute/heroAttributes'
import { Abilities } from './define/abilities/Abilities'
import { AbilityEngine } from './classes/abilityEngine/AbilityEngine'
import { AbilityCast } from './classes/abilityCast/AbilityCast'
import { ArcTagEngine } from './systems/arcTag/ArcTagEngine'
import { Armies } from './define/armies/Armies'
import { Locs } from './systems/loc/Locs'
import { Aspects } from './define/aspects/Aspects'
import { ShiftMasterHeroType } from './heroes/heroTypes'
import { DamageEngine } from './systems/damageEvent/DamageEngine'
import { Bases } from './define/bases/Bases'
import { Logger } from './log'
import { HeroAbilities } from './define/heroAbilities/HeroAbilities'
import { UnitTypes } from './define/UnitTypes'
import { UI } from './ui/UI'
import { Creeps } from './define/creeps/Creeps'
import { BaseGroups } from './define/baseGroups/BaseGroups'
import { BaseSpawnEngine } from './classes/baseSpawnEngine/BaseSpawnEngine'

export class Game {
  static init = (): void => {}

  static start = (): void => {
    FogEnableOff()
    FogMaskEnableOff()

    Logger.Information('Game Init Start')

    // Globals with no upstream Dependencies
    Logger.Information('No Up Dependencies')
    const unitTypes = UnitTypes.getInstance()
    const rects = Rectangles.getInstance()
    const camSetups = CameraSetups.getInstance()
    const itemTypes = ItemTypes.getInstance()
    const forces = Forces.getInstance()
    const abilCast = AbilityCast.getInstance()
    const units = Units.getInstance()
    const abilTypes = AbilityTypes.initInstance()
    const regions = Regions.getInstance()
    const arcTagEngine = ArcTagEngine.getInstance()
    const triggers = Triggers.getInstance({})

    // Globals with upstream and downstream dependencies
    Logger.Information('Up and Down Dependencies')
    const armies = Armies.getInstance({ units: units, forces: forces })
    const locs = Locs.initInstance({ triggers: triggers, armies: armies, rects: rects })
    const banners = Banners.initInstance({ units: units, forces: forces })
    const heroAttr = HeroAttributes.getInstance({ itemTypes: itemTypes })
    const creeps = Creeps.getInstance({ unitTypes: unitTypes })
    Logger.Information('Bases')
    const bases = Bases.getInstance({ locs: locs, forces: forces, creeps: creeps, units: units })
    Logger.Information('Base Groups')
    const baseGroups = BaseGroups.initInstance({ bases: bases })
    Logger.Information('Base Spawn Engine')
    const baseEngine = BaseSpawnEngine.initInstance({ baseGroups: baseGroups }, { waveInterval: 11, baseGroupInterval: 0.05, cycleInterval: 25, unitInterval: 0.03 })
    const abilEngine = AbilityEngine.getInstance({ triggers: triggers, abilityCast: abilCast })
    const pathing = Pathing.getInstance({ triggers: triggers, locs: locs, forces: forces, regions: regions, unitTypes: unitTypes })
    const abils = Abilities.getInstance({ abilityEngine: abilEngine, abilityTypes: abilTypes, abilityCast: abilCast })
    const heroAbils = HeroAbilities.getInstance({ abilityTypes: abilTypes, abilityCast: abilCast, abilityEngine: abilEngine })

    // Globals with Upstream Dependencies
    Logger.Information('Up Dependencies')
    const ui = UI.getInstance({ unitTypes: unitTypes })
    const damageEngine = DamageEngine.getInstance({ arcTagEngine: arcTagEngine, triggers: triggers })
    const heroes = Heroes.getInstance({ triggers: triggers, forces: forces, rects: rects, abils: abils })
    const deathSpawn = DeathSpawn.getInstance({ triggers: triggers, pathing: pathing, unitTypes: unitTypes })
    const aspects = Aspects.getInstance({ locs: locs, units: units, forces: forces, rects: rects })
    const shiftMasterHeroType = ShiftMasterHeroType.getInstance({ heroAbils: heroAbils, heroAttr: heroAttr })
    const gates = Gates.getInstance({ triggers: triggers, unitTypes: unitTypes })

    // Globals with Init Functions
    const cinematic = Cinematic.getInstance({ forces: forces, camSetups: camSetups, unitTypes: unitTypes })
    const events = Events.getInstance({ units: units, banners: banners, locs: locs, forces: forces, rects: rects, unitTypes: unitTypes })

    Logger.Debug('Game Init Finished')

    // Start Functions
    Logger.Debug('Running Init Functions')
    cinematic.onInit()
    cinematic.setupCineCamera()
    cinematic.startHeroSelector()
    // spawns.start()
    events.start()
    baseEngine.start()

    Players[0].lumber = 50
  }
}
