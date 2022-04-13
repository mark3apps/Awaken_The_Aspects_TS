/** @format */

import { UnitAbility, UnitType } from 'app/classes'
import { IUnitAbilityParam } from 'app/classes/unitAbility/interfaces/IUnitAbilityParam'
import { IAbilityCast } from 'app/classes/abilityCast/interfaces/IAbilityCast'
import { AbilityModel, Attach, Effect, Order, Unit } from 'lib/w3ts'
import { UnitTypes } from 'app/define/UnitTypes'
import { AbilityTypes } from 'app/define/abilityTypes/abilityTypes'
import { Base } from 'app/classes/base/Base'
import { Logger } from 'app/log'

export interface ICapitalSummonUnit {
  unitType: UnitType
  amount: number
  level: number
}

export class CapitalSummon extends UnitAbility {
  unitTypes: UnitTypes
  summons: ICapitalSummonUnit[]
  base: Base

  constructor(unit: Unit, base: Base, summons: ICapitalSummonUnit[]) {
    super({ unit: unit, abilityType: AbilityTypes.getInstance().CapitalSummon })

    this.unitTypes = UnitTypes.getInstance()
    this.summons = summons
    this.base = base
  }

  override onEffect(cast: IAbilityCast): void {
    try {
      this.summons.forEach((element) => {
        if (element.level <= this.base.level) {
          for (let i = 0; i < element.amount; i++) {
            const u = new Unit({ type: element.unitType, owner: this.unit.owner, coor: this.unit.getRandomCoorWithin(300) })
            u.issueCoordinateOrder(Order.Attack, this.base.creepTarget.randomCoordinate)
            const effect = new Effect(AbilityModel.massTeleportTarget, u, Attach.origin)
            effect.destroy()
          }
        }
      })
    } catch (error) {
      Logger.Error('Error', error)
    }
  }

  static override fromHandle(ability: IUnitAbilityParam) {
    return this.getObject(ability) as CapitalSummon
  }
}
