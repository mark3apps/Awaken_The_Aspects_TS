import { ChainLightningTower } from 'app/abilities/ChainLightningTower'
import { ConeOfFireTower } from 'app/abilities/ConeOfFireTower'
import { FelGrunt, FelOgre, FelWarlock, FelWarlord } from 'app/abilities/Fel'
import { ManaShardsTower } from 'app/abilities/ManaShardsTower'
import { ManaShieldTower } from 'app/abilities/ManaShieldTower'
import { ManaTowerRestore } from 'app/abilities/ManaTowerRestore'
import { FootmanUpgrade } from 'app/abilities/footmanUpgrade'
import { AspectOfDeathInfect } from 'app/abilities/AspectOfDeathInfect'
import { Ability } from 'app/classes/ability/Ability'
import { Shift } from '../hero/shiftmaster/abilities'
import { IAbilitiesDepend } from './interfaces/IAbilitiesDepend'

export class Abilities {
	// Static
	protected static instance?: Abilities

	static getInstance (depend: IAbilitiesDepend) {
		if (!Abilities.instance) Abilities.instance = new Abilities(depend)
		return Abilities.instance
	}

	// Instance
	ShiftTrigger

	private constructor (depend: IAbilitiesDepend) {
		// Dependencies
		const abilTypes = depend.abilityTypes
		const abilCast = depend.abilityCast

		// Footman Upgrade
		new Ability(depend, {
			abilType: abilTypes.FootmanUpgrade,
			TriggerUnit: abilCast.CastingUnit,
			GetAblity: (unitAbil) => { return FootmanUpgrade.fromHandle(unitAbil) }
		})
		// Fel Grunt
		new Ability(depend, {
			abilType: abilTypes.FelGrunt,
			TriggerUnit: abilCast.KillingUnit,
			GetAblity: (unitAbil) => { return FelGrunt.fromHandle(unitAbil) }
		})
		// Fel Ogre
		new Ability(depend, {
			abilType: abilTypes.FelOgre,
			TriggerUnit: abilCast.KillingUnit,
			GetAblity: (unitAbil) => { return FelOgre.fromHandle(unitAbil) }
		})
		// Fel Warlord
		new Ability(depend, {
			abilType: abilTypes.FelWarlord,
			TriggerUnit: abilCast.KillingUnit,
			GetAblity: (unitAbil) => { return FelWarlord.fromHandle(unitAbil) }
		})
		// Fel Warlock
		new Ability(depend, {
			abilType: abilTypes.FelWarlock,
			TriggerUnit: abilCast.KillingUnit,
			GetAblity: (unitAbil) => { return FelWarlock.fromHandle(unitAbil) }
		})
		// Mana Tower Restore
		new Ability(depend, {
			abilType: abilTypes.ManaTowerRestore,
			TriggerUnit: abilCast.AttackingUnit,
			GetAblity: (unitAbil) => { return ManaTowerRestore.fromHandle(unitAbil) }
		})

		// Mana Shield Tower
		new Ability(depend, {
			abilType: abilTypes.ManaShieldTower,
			TriggerUnit: abilCast.AttackingUnit,
			GetAblity: (unitAbil) => { return ManaShieldTower.fromHandle(unitAbil) }
		})
		// Mana Shards Tower
		new Ability(depend, {
			abilType: abilTypes.ManaShardsTower,
			TriggerUnit: abilCast.AttackingUnit,
			GetAblity: (unitAbil) => { return ManaShardsTower.fromHandle(unitAbil) }
		})
		// Chain Lightning Tower
		new Ability(depend, {
			abilType: abilTypes.ChainLightningTower,
			TriggerUnit: abilCast.AttackingUnit,
			GetAblity: (unitAbil) => { return ChainLightningTower.fromHandle(unitAbil) }
		})
		// Cone of Fire
		new Ability(depend, {
			abilType: abilTypes.ConeOfFireTower,
			TriggerUnit: abilCast.AttackingUnit,
			GetAblity: (unitAbil) => { return ConeOfFireTower.fromHandle(unitAbil) }
		})
		// Aspect of Death Infect
		new Ability(depend, {
			abilType: abilTypes.AspectOfDeathInfect,
			TriggerUnit: abilCast.AttackingUnit,
			GetAblity: (unitAbil) => { return AspectOfDeathInfect.fromHandle(unitAbil) }
		})

		//
		// Hero Ability Triggers
		// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

		//
		// Shift Master
		//

		// Shift
		this.ShiftTrigger = new Ability(depend, {
			abilType: abilTypes.Shift,
			TriggerUnit: abilCast.CastingUnit,
			GetAblity: (unitAbil) => { return Shift.fromHandle(unitAbil) }
		})
	}
}
