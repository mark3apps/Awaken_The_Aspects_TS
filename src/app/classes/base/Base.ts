/** @format */

import { CapitalSummon, ICapitalSummonUnit } from 'app/abilities/CapitalSummon'
import { AbilityTypes } from 'app/define/abilityTypes/abilityTypes'
import { Logger } from 'app/log'
import { Loc } from 'app/systems'
import { Force, Group, Unit } from 'lib/w3ts'
import { Creep } from '../creep/Creep'
import { UnitAbility } from '../unitAbility/UnitAbility'

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
  summonUnits?: ICapitalSummonUnit[]
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

  healAbil?: UnitAbility
  summonAbil?: UnitAbility

  private _level = 1
  _currentFood = 0
  readonly maxFood: number

  healthModActive: boolean
  attackModActive: boolean
  armorModActive: boolean
  shieldModActive: boolean
  critModActive: boolean
  evadeModActive: boolean

  buildings = new Group()
  private _isAlive: boolean

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

  static bases: Base[] = []

  constructor(base: IBase) {
    this.creep = base.creep
    this.capital = base.capital
    this.townLoc = base.townLoc
    this.creepTarget = base.creepTarget
    this.teleportTarget = base.teleportTarget
    this.importance = base.importance
    this.force = base.force

    this._isAlive = this.capital.isAlive()

    this.upgrade = base.upgrade ?? { base: 550, factor: 0.05, constant: 20 }

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

    for (let i = 0; i < this.townLoc.rects.length; i++) {
      const rect = this.townLoc.rects[i]
      this.buildings.enumUnitsInRect(rect, () => {
        return Unit.fromFilter().isStructure && Unit.fromFilter().isAlly(this.capital)
      })
    }

    this.maxFood = this.food > 0 ? this.food : 1

    if (this.visible) {
      this.healAbil = new UnitAbility({ unit: this.capital, abilityType: AbilityTypes.getInstance().CapitalHeal })
      if (base.summonUnits) {
        this.summonAbil = new CapitalSummon(this.capital, this, base.summonUnits)
      }

      this.setCapitalMana()
      this.capital.manaPercent = 100
    }
  }

  get level() {
    return this._level
  }

  set level(value: number) {
    this._level = value
    if (this.visible) {
      this.capital.level = this.level
      if (this.healAbil) {
        this.healAbil.incLevel()
        this.healAbil.areaOfEffect = this.healRange
      }
    }
  }

  get foodNeeded() {
    return (
      this.upgrade.base +
      this.upgrade.base * this.upgrade.factor * (this.level - 1) +
      this.upgrade.constant * (this.level - 1)
    )
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
    return math.floor((this.food / this.maxFood) * 120)
  }

  get isAlive() {
    if (this._isAlive) {
      return this.capital.isAlive()
    } else {
      return false
    }
  }

  set isAlive(value: boolean) {
    value ? (this._isAlive = this.capital.isAlive()) : (this._isAlive = value)
  }

  setCapitalMana = () => {
    this.capital.maxMana = math.floor(((this.importance + 1) * 125 + 200) * (this.foodNormalized / 100))
  }

  get healRange() {
    return this.healAbil ? 500 + this.healAbil.level * 100 : 600
  }

  updateCapital = () => {
    try {
      if (this.isAlive) {
        this.setCapitalMana()

        // Cast Ability if needed
        if (this.healAbil?.isCastable()) {
          const g = new Group()
          g.enumUnitsInRange(this.capital, this.healRange)

          const enemyUnit = g.firstMatching((u) => {
            return u.isEnemy(this.capital) && u.isAlive()
          }, true)

          if (enemyUnit) this.summonAbil?.castImmediate()

          // Get the Buff ID
          const buffId = this.healAbil.abilityType.buffId
          if (!buffId) return

          let matchingUnit = g.firstMatching((u) => {
            return (
              !u.hasBuff(buffId) &&
              u.isOrganicAlly(this.capital) &&
              u.isHero &&
              (u.lifePercent <= 90 || u.manaPercent <= 80)
            )
          }, true)

          // If there is no matching Hero, get a random matching unit
          if (matchingUnit === undefined) {
            matchingUnit = g.firstMatching((u) => {
              return !u.hasBuff(buffId) && u.isOrganicAlly(this.capital) && u.lifePercent < 85
            })
          }
          g.destroy()

          if (matchingUnit) {
            this.healAbil.castTarget(matchingUnit)
          }
        }
      }
    } catch (error) {
      Logger.Error('Error', error)
    }
  }

  getUnits = (wave: number) => {
    return this.capital.isAlive() ? this.creep.getUnits({ level: this.level, wave: wave }) : []
  }
}
