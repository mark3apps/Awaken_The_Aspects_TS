/** @format */

import { BaseGroups } from 'app/define/baseGroups/BaseGroups'
import { Logger } from 'app/log'
import { Order, Timer, Unit } from 'lib/w3ts'

export interface IBaseSpawnEngineDepend {
  baseGroups: BaseGroups
}

export interface IBaseSpawnEngine {
  waveInterval: number
  baseGroupInterval: number
  cycleInterval: number
  unitInterval: number
}

export class BaseSpawnEngine {
  private static instance?: BaseSpawnEngine

  static initInstance(depend: IBaseSpawnEngineDepend, baseEngine: IBaseSpawnEngine) {
    if (!BaseSpawnEngine.instance) BaseSpawnEngine.instance = new BaseSpawnEngine(depend, baseEngine)
    return BaseSpawnEngine.instance
  }

  static getInstance() {
    return BaseSpawnEngine.instance
  }

  // Define Dependencies
  baseGroups

  // Define Values
  waveInterval: number
  baseGroupInterval: number
  cycleInterval: number
  unitInterval: number
  totalWaves = 10

  private timer: Timer
  private waveNumber = 1 // Indexed to 1
  private baseNumber = 0 // Indexed to 0 since it pulls from Arrays
  private unitNumber = 0 // Indexed to 0 since it pulls from Arrays

  constructor(depend: IBaseSpawnEngineDepend, baseEngine: IBaseSpawnEngine) {
    this.baseGroups = depend.baseGroups

    this.waveInterval = baseEngine.waveInterval
    this.baseGroupInterval = baseEngine.baseGroupInterval
    this.cycleInterval = baseEngine.cycleInterval
    this.unitInterval = baseEngine.unitInterval

    this.timer = new Timer()
  }

  start = () => {
    this.timer.start(1, false, () => {
      this.iterate()
    })
  }

  stop = () => {
    this.timer.pause()
  }

  iterate = () => {
    try {
      // Spawn the units
      const currentBaseGroup = this.baseGroups.groups[this.baseNumber]

      for (let i = 0; i < currentBaseGroup.bases.length; i++) {
        const base = currentBaseGroup.bases[i]

        if (base.capital.isAlive()) {
          if (this.unitNumber === 0) {
            base.currentFood += base.foodNormalized

            // Logger.Information('Food', base.currentFood, base.foodNeeded, 'Calc', base.food, base.maxFood, base.foodNormalized)
          }

          const units = base.getUnits(this.waveNumber)
          const unitCreep = units[this.unitNumber]
          const coor = base.spawnLoc.randomCoordinate

          if (unitCreep) {
            const unit = new Unit({ type: unitCreep.unitType, coor: coor, owner: base.force.getRandomPlayer() })
            if (base.attackModActive) unit.weapon1Base += base.attackMod
            if (base.healthModActive) unit.maxLife += base.healthMod
            if (base.armorModActive) unit.armor += base.armorMod
            if (base.shieldModActive) unit.shield += base.shieldMod
            if (base.critModActive) unit.critical += base.critMod
            if (base.evadeModActive) unit.evade += base.evadeMod

            const dest = base.creepTarget.randomCoordinate
            unit.issueCoordinateOrder(Order.Attack, dest)
            unit.custom.set('base', base)
          }
        }
      }

      // Update Base Level

      // Iterate to next interval
      let interval = 0
      const curUnitCount = currentBaseGroup.bases[0].getUnits(this.waveNumber).length

      if (this.unitNumber < curUnitCount) {
        this.unitNumber += 1
        interval = this.unitInterval
      } else if (this.baseNumber < this.baseGroups.count - 1) {
        this.baseNumber += 1
        this.unitNumber = 0
        interval = this.baseGroupInterval
        // Logger.Information('Base', currentBaseGroup.bases[0].capital.name)
      } else if (this.waveNumber < this.totalWaves) {
        this.waveNumber += 1
        this.baseNumber = 0
        this.unitNumber = 0
        interval = this.waveInterval
        // Logger.Information('Wave', this.waveNumber)
        // Logger.Information('Base', currentBaseGroup.bases[0].capital.name)
      } else {
        this.waveNumber = 1
        this.baseNumber = 0
        this.unitNumber = 0
        interval = this.cycleInterval
        // Logger.Information('Cycle')
        // Logger.Information('Wave', this.waveNumber)
        // Logger.Information('Base', currentBaseGroup.bases[0].capital.name)
      }

      this.timer.start(interval, false, () => {
        this.iterate()
      })
    } catch (error) {
      Logger.Error('Error', error)
    }
  }
}
