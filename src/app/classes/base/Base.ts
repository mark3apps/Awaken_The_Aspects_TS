/** @format */

import { Logger } from 'app/log'
import { Loc } from 'app/systems'
import { Force, Group, Unit } from 'lib/w3ts'
import { Creep } from '../creep/Creep'

export enum Importance {
  Low,
  Medium,
  High,
  Highest,
}

export interface IBase {
  creep: Creep
  capital: Unit
  townLoc: Loc
  spawnLoc?: Loc
  force: Force
  creepTarget: Loc
  teleportTarget: boolean
  importance: Importance
  visible?: boolean
  upgrade?: { base: number; factor: number; constant: number }
  healthModActive?: boolean
  attackModActive?: boolean
  armorModActive?: boolean
  shieldModActive?: boolean
  critModActive?: boolean
  evadeModActive?: boolean
}

export class Base {
  creep: Creep
  capital: Unit
  townLoc: Loc
  spawnLoc: Loc
  creepTarget: Loc
  teleportTarget: boolean
  importance: Importance
  force: Force

  private _level = 1
  _currentFood = 0
  readonly maxFood: number

  healthModActive: boolean
  attackModActive: boolean
  armorModActive: boolean
  shieldModActive: boolean
  critModActive: boolean
  evadeModActive: boolean

  buildings: Group

  upgrade: { base: number; factor: number; constant: number }
  visible: boolean

  healthMod = 0
  attackMod = 0
  armorMod = 0
  shieldMod = 0
  critMod = 0
  evadeMod = 0

  modifierDuration = 30

  private capitalBaseName: string

  constructor(base: IBase) {
    this.creep = base.creep
    this.capital = base.capital
    this.townLoc = base.townLoc
    this.creepTarget = base.creepTarget
    this.teleportTarget = base.teleportTarget
    this.importance = base.importance
    this.force = base.force

    this.upgrade = base.upgrade ?? { base: 900, factor: 1.2, constant: 100 }

    this.spawnLoc = base.spawnLoc ?? base.townLoc
    this.visible = base.visible ?? true
    this.armorModActive = base.armorModActive ?? true
    this.attackModActive = base.attackModActive ?? true
    this.healthModActive = base.healthModActive ?? true
    this.shieldModActive = base.shieldModActive ?? true
    this.critModActive = base.critModActive ?? true
    this.evadeModActive = base.evadeModActive ?? true

    this.capitalBaseName = this.capital.name

    this.level = 1

    this.buildings = new Group()
    for (let i = 0; i < this.townLoc.rects.length; i++) {
      const rect = this.townLoc.rects[i]
      this.buildings.enumUnitsInRect(rect, () => {
        return Unit.fromFilter().isStructure && Unit.fromFilter().isAlly(this.capital)
      })
    }

    this.maxFood = this.food > 0 ? this.food : 1
  }

  get level() {
    return this._level
  }

  set level(value: number) {
    this._level = value
    if (this.visible) {
      this.capital.name = `${this.capitalBaseName} (Level ${this._level})`
    }
  }

  get foodNeeded() {
    return (this.upgrade.base + this.upgrade.base) ^ (this.upgrade.factor * (this.level - 1) + this.upgrade.constant * (this.level - 1))
  }

  get currentFood() {
    return this._currentFood
  }

  set currentFood(value: number) {
    this._currentFood = value
    if (this._currentFood >= this.foodNeeded) {
      this._currentFood -= this.foodNeeded
      this.level += 1
    }
  }

  get food() {
    let food = 0
    this.buildings.for(() => {
      const unit = Unit.fromEnum()
      unit.isAlive() ? (food += unit.foodMade) : this.buildings.removeUnit(unit)
    })
    return food
  }

  get foodNormalized() {
    return math.floor((this.food / this.maxFood) * 100)
  }

  setCapitalStrength = () => {
    this.capital.maxMana = 25 + 625 / (this.foodNormalized / 100)
  }

  getUnits = (wave: number) => {
    return this.capital.isAlive() ? this.creep.getUnits({ level: this.level, wave: wave }) : []
  }
}
