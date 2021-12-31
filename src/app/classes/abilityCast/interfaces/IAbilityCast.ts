import { Coordinate } from 'app/classes/Coordinate'
import { Unit } from 'lib/w3ts/index'
import { AbilityType } from '../..'

export interface IAbilityCast {
	CastingUnit: () => Unit
	TargetUnit: () => Unit
	AttackingUnit: () => Unit,
	AttackedUnit: () => Unit,
	DamageSource: () => Unit,
	DamageTarget: () => Unit,
	KillingUnit: () => Unit,
	DyingUnit: () => Unit,
	AbilType: () => AbilityType
	Target: () => Coordinate
}
