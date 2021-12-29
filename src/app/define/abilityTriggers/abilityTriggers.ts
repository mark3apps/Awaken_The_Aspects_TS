import { ChainLightningTower } from 'app/abilities/ChainLightningTower'
import { ConeOfFireTower } from 'app/abilities/ConeOfFireTower'
import { FelGrunt, FelOgre, FelWarlock } from 'app/abilities/Fel'
import { ManaShardsTower } from 'app/abilities/ManaShardsTower'
import { ManaShieldTower } from 'app/abilities/ManaShieldTower'
import { ManaTowerRestore } from 'app/abilities/ManaTowerRestore'
import { FootmanUpgrade } from 'app/abilities/footmanUpgrade'
import { AspectOfDeathInfect } from 'app/abilities/AspectOfDeathInfect'
import { AbilityTrigger } from 'app/classes/abilityEngine/AbilityTrigger'
import { Shift } from '../hero/shiftmaster/abilities'
import { IAbilityTriggersDepend } from './interfaces/IAbilityTriggersDependencies'

export class AbilityTriggers {
	protected static instance?: AbilityTriggers

	static getInstance (depend: IAbilityTriggersDepend) {
		if (!AbilityTriggers.instance) AbilityTriggers.instance = new AbilityTriggers(depend)
		return AbilityTriggers.instance
	}

	FootmanUpgradeTrigger
	FelGruntTrigger
	FelOgreTrigger
	FelWarlordTrigger
	FelWarlockTrigger
	ManaTowerRestoreTrigger
	ManaShieldTowerTrigger
	ManaShardsTowerTrigger
	ChainLightningTowerTrigger
	ConeOfFireTowerTrigger
	AspectOfDeathInfectTrigger
	ShiftTrigger

	private constructor (depend: IAbilityTriggersDepend) {
		// Dependencies
		const abilTypes = depend.abilityTypes
		const abilCast = depend.abilityCast
		const abilEngine = depend.abilityEngine

		this.FootmanUpgradeTrigger = new AbilityTrigger(depend,
			{
				abilityType: abilTypes.FootmanUpgrade,
				getAblity: () => {
					return FootmanUpgrade.fromHandle({ castingUnit: abilCast.castingUnit, abilType: abilTypes.FootmanUpgrade })
				}
			})
		this.FelGruntTrigger = new AbilityTrigger(depend,
			{
				abilityType: abilTypes.FelGrunt,
				getAblity: () => {
					return FelGrunt.fromHandle({ castingUnit: abilCast.killingUnit, abilType: abilTypes.FelGrunt })
				}
			})
		this.FelOgreTrigger = new AbilityTrigger(depend,
			{
				abilityType: abilTypes.FelOgre,
				getAblity: () => {
					return FelOgre.fromHandle({ castingUnit: abilCast.killingUnit, abilType: abilTypes.FelOgre })
				}
			})
		this.FelWarlordTrigger = new AbilityTrigger(depend,
			{
				abilityType: abilTypes.FelWarlock,
				getAblity: () => {
					return FelWarlock.fromHandle({ castingUnit: abilCast.killingUnit, abilType: abilTypes.FelWarlock })
				}
			})
		this.FelWarlockTrigger = new AbilityTrigger(depend,
			{
				abilityType: abilTypes.FelWarlock,
				getAblity: () => {
					return FelWarlock.fromHandle({ castingUnit: abilCast.killingUnit, abilType: abilTypes.FelWarlock })
				}
			})
		this.ManaTowerRestoreTrigger = new AbilityTrigger(depend,
			{
				abilityType: abilTypes.ManaTowerRestore,
				getAblity: () => {
					return ManaTowerRestore.fromHandle({ castingUnit: abilCast.attackingUnit, abilType: abilTypes.ManaTowerRestore })
				}
			})
		this.ManaShieldTowerTrigger = new AbilityTrigger(depend,
			{
				abilityType: abilTypes.ManaShieldTower,
				getAblity: () => {
					return ManaShieldTower.fromHandle({ castingUnit: abilCast.attackingUnit, abilType: abilTypes.ManaShieldTower })
				}
			})
		this.ManaShardsTowerTrigger = new AbilityTrigger(depend,
			{
				abilityType: abilTypes.ManaShardsTower,
				getAblity: () => {
					return ManaShardsTower.fromHandle({ castingUnit: abilCast.attackingUnit, abilType: abilTypes.ManaShardsTower })
				}
			})
		this.ChainLightningTowerTrigger = new AbilityTrigger(depend,
			{
				abilityType: abilTypes.ChainLightningTower,
				getAblity: () => {
					return ChainLightningTower.fromHandle({ castingUnit: abilCast.attackingUnit, abilType: abilTypes.ChainLightningTower })
				}
			})
		this.ConeOfFireTowerTrigger = new AbilityTrigger(depend,
			{
				abilityType: abilTypes.ConeOfFireTower,
				getAblity: () => {
					return ConeOfFireTower.fromHandle({ castingUnit: abilCast.attackingUnit, abilType: abilTypes.ConeOfFireTower })
				}
			})
		this.AspectOfDeathInfectTrigger = new AbilityTrigger(depend,
			{
				abilityType: abilTypes.AspectOfDeathInfect,
				getAblity: () => {
					return AspectOfDeathInfect.fromHandle({ castingUnit: abilCast.attackingUnit, abilType: abilTypes.AspectOfDeathInfect })
				}
			})

		//
		// Hero Ability Triggers
		// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

		//
		// Shift Master
		//
		this.ShiftTrigger = new AbilityTrigger(depend,
			{
				abilityType: abilTypes.Shift,
				getAblity: () => {
					return Shift.fromHandle({ castingUnit: abilCast.castingUnit, abilType: abilTypes.Shift })
				}
			})
	}
}
