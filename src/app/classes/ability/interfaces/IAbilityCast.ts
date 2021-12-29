import { Coordinate, Unit } from 'lib/w3ts/index'
import { AbilityType } from '../..'
import { IAbility } from './IAbility'

export interface IAbilityCast extends IAbility {
	castingUnit: Unit
	targetUnit: Unit
	attackingUnit: Unit,
	attackedUnit: Unit,
	damageSource: Unit,
	damageTarget: Unit,
	killingUnit: Unit,
	dyingUnit: Unit,
	abilType: AbilityType
	targetCoordinate: Coordinate
}
