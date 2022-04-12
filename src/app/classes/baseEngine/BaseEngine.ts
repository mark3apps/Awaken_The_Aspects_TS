/** @format */

import { BaseGroups } from 'app/define/baseGroups/BaseGroups'
import { Logger } from 'app/log'
import { Order, Timer, Unit } from 'lib/w3ts'
import { BaseGroup } from '../baseGroup/BaseGroup'
import { Creep } from '../creep/Creep'
import { ICreepUnit } from '../creep/ICreepUnit'

export interface IBaseEngineDepend {
  baseGroups: BaseGroups
}

export interface IBaseEngine {
  waveInterval: number
  baseGroupInterval: number
  cycleInterval: number
  unitInterval: number
}

export class BaseEngine {
  private static instance?: BaseEngine

  static initInstance(depend: IBaseEngineDepend, baseEngine: IBaseEngine) {
    if (!BaseEngine.instance) BaseEngine.instance = new BaseEngine(depend, baseEngine)
    return BaseEngine.instance
  }

  static getInstance() {
    return BaseEngine.instance
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

  constructor(depend: IBaseEngineDepend, baseEngine: IBaseEngine) {
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

        if (this.unitNumber === 0) {
          base.currentFood += base.foodNormalized
          base.setCapitalStrength()

          Logger.Information('Food', base.food, base.maxFood, base.foodNormalized)
          Logger.Information('Food Needed', base.currentFood, base.foodNeeded)
          Logger.Information('')
        }

        const units = base.getUnits(this.waveNumber)
        const unitCreep = units[this.unitNumber]
        const coor = base.townLoc.randomCoordinate

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

      // Update Base Level

      // Iterate to next interval
      let interval = 0
      const curUnitCount = currentBaseGroup.bases[0].getUnits(this.waveNumber).length

      if (this.unitNumber < curUnitCount) {
        this.unitNumber += 1
        interval = this.unitInterval
        Logger.Information('Unit')
      } else if (this.baseNumber < this.baseGroups.count - 1) {
        this.baseNumber += 1
        this.unitNumber = 0
        interval = this.baseGroupInterval
        Logger.Information('Base', currentBaseGroup.bases[0].capital.name)
      } else if (this.waveNumber < this.totalWaves) {
        this.waveNumber += 1
        this.baseNumber = 0
        this.unitNumber = 0
        interval = this.waveInterval
        Logger.Information('Wave', this.waveNumber)
      } else {
        this.waveNumber = 1
        this.baseNumber = 0
        this.unitNumber = 0
        interval = this.cycleInterval
        Logger.Information('Cycle')
      }

      if (curUnitCount === 0 && this.baseNumber !== 0) {
        Logger.Information('Base Skip')
        this.iterate()
      } else {
        this.timer.start(interval, false, () => {
          this.iterate()
        })
      }
    } catch (error) {
      Logger.Error('Error', error)
    }
  }
}
