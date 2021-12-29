import { Coordinate, Unit } from 'lib/w3ts/index'
import { AbilityType } from '..'
import { IAbility } from './interfaces/IAbility'
import { IAbilityCast } from './interfaces/IAbilityCast'

export class AbilityCast implements IAbilityCast {
	protected static instance: AbilityCast

	static getInstance () {
		if (!AbilityCast.instance) AbilityCast.instance = new this()
		return AbilityCast.instance
	}

	private constructor () { }

	get castingUnit () {
		return Unit.fromCaster()
	}

	get attackingUnit () {
		return Unit.fromAttacker()
	}

	get attackedUnit () {
		return Unit.fromAttacked()
	}

	get killingUnit () {
		return Unit.fromKilling()
	}

	get dyingUnit () {
		return Unit.fromDying()
	}

	get targetUnit () {
		return Unit.fromSpellTarget()
	}

	get abilType () {
		return AbilityType.fromSpellEvent()
	}

	get targetCoordinate (): Coordinate {
		return { x: GetSpellTargetX(), y: GetSpellTargetY() }
	}

	get ability (): IAbility {
		return { castingUnit: this.castingUnit, abilType: this.abilType }
	}
}
