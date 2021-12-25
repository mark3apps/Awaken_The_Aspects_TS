import { AbilityFour, Order, Unit, BuffFour, AbilityModel, Anim, AttachPoint, Effect, Timer, Group } from 'lib/w3ts'
import { Ability, AbilityType, EffectType, TargetType, UnitType } from './classes'

// Base Thing
export class Globals {
	//abilityType: AbilityTypes
	unit: DefineUnits

	private static instance: Globals

	private constructor () {
		//this.abilityType = AbilityTypes.getInstance()
		this.unit = DefineUnits.getInstance()
	}

	static get () {
		if (!Globals.instance) Globals.instance = new Globals()
		return Globals.instance
	}
}

class DefineUnits {
	private static instance: DefineUnits
	A009: Unit

	private constructor () {
		this.A009 = Unit.fromEvent()
	}

	static getInstance () {
		if (!DefineUnits.instance) {
			DefineUnits.instance = new DefineUnits()
		}

		return DefineUnits.instance
	}
}

