import { AbilityFour, BuffFour, Order, Unit } from 'lib/w3ts'
import { UnitType } from '..'
import { AbilityType } from '../abilityType/abilityType'
import { TargetType } from "../abilityType/TargetType"
import { EffectType } from "../abilityType/EffectType"
import { SwitchAbility } from 'app/define/hero/shiftmaster/abilities'

export class AbilityTypes {
	private static instance?: AbilityTypes

	static getInstance () {
		if (!AbilityTypes.instance) AbilityTypes.instance = new AbilityTypes()
		return AbilityTypes.instance
	}

	static getInstanceNoCreate () {
		return AbilityTypes.instance
	}

	AspectInferno
	ShiftDummy
	FallingStrikeDummy
	ShadeStormDummy
	StormCrowForm
	FootmanUpgrade
	FelGrunt
	FelOgre
	FelWarlord
	FelWarlock
	ManaTowerRestore
	ManaShieldTower
	ManaShardsTower
	ChainLightningTower
	ConeOfFireTower
	AspectOfDeathInfect
	Shift
	Switch
	FelForm
	FallingStrike
	ShiftStorm

	private constructor () {
		//
		// Non Triggered Abilities
		//

		this.AspectInferno = new AbilityType({
			four: AbilityFour.InfernoAspect,
			orderId: Order.Dreadlordinferno
		})
		this.ShiftDummy = new AbilityType({
			four: AbilityFour.ItemIllusions,
			orderId: Order.Illusion
		})
		this.FallingStrikeDummy = new AbilityType({
			four: AbilityFour.FallingStrikeDummy,
			orderId: Order.Creepthunderclap
		})
		this.ShadeStormDummy = new AbilityType({
			four: 'A03O',
			orderId: Order.Whirlwind
		})
		this.StormCrowForm = new AbilityType({
			four: AbilityFour.StormCrowForm,
			orderId: Order.Ravenform
		})

		//
		// Triggered Unit Abilities
		//

		// Footman Upgrade
		this.FootmanUpgrade = new AbilityType({
			four: AbilityFour.FootmanCharge,
			effectType: EffectType.Casts,
			targetType: TargetType.SupportSelf,
			orderId: Order.Bearform
		})

		// Fel Grunt
		this.FelGrunt = new AbilityType({
			four: AbilityFour.FelGrunt,
			effectType: EffectType.Kills
		})

		// Fel Ogre
		this.FelOgre = new AbilityType({
			four: AbilityFour.FelOgre,
			effectType: EffectType.Kills
		})

		// Fel Warlord
		this.FelWarlord = new AbilityType({
			four: AbilityFour.FelWarlord,
			effectType: EffectType.Kills
		})

		// Fel Warlock
		this.FelWarlock = new AbilityType({
			four: AbilityFour.FelWarlock,
			effectType: EffectType.Kills
		})

		// Mana Repository
		this.ManaTowerRestore = new AbilityType({
			four: AbilityFour.ManaTowerRestore,
			unitTypes: [UnitType.ArcaneManaRepository],
			effectType: EffectType.UnitTypeAttacking,
			targetType: TargetType.SupportSingle,
			orderId: Order.Recharge
		})

		this.ManaShieldTower = new AbilityType({
			four: AbilityFour.ManaShieldTower,
			orderId: Order.Manashieldon,
			buffFour: BuffFour.ManaShield,
			effectType: EffectType.Attacks,
			targetType: TargetType.SupportSelf
		})

		this.ManaShardsTower = new AbilityType({
			four: AbilityFour.ManaShardsTower,
			orderId: Order.Clusterrockets,
			effectType: EffectType.Attacks,
			targetType: TargetType.DamageArea
		})

		this.ChainLightningTower = new AbilityType({
			four: AbilityFour.ChainLightningTower,
			orderId: Order.Chainlightning,
			effectType: EffectType.Attacks,
			targetType: TargetType.DamageSingle
		})

		this.ConeOfFireTower = new AbilityType({
			four: AbilityFour.ConeOfFireTower,
			orderId: Order.Breathoffrost,
			effectType: EffectType.Attacks,
			targetType: TargetType.DamageAreaTarget
		})

		this.AspectOfDeathInfect = new AbilityType({
			four: AbilityFour.InfectAspect,
			orderId: Order.Parasite,
			buffFour: BuffFour.Infected,
			effectType: EffectType.Attacks,
			targetType: TargetType.CrippleAround
		})

		//
		// Hero Ability Types
		// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

		//
		// Shift Master
		//
		this.Shift = new AbilityType({
			four: AbilityFour.Shift,
			orderId: Order.Berserk,
			effectType: EffectType.Casts,
			targetType: TargetType.SupportSelf
		})

		this.Switch = new AbilityType({
			four: AbilityFour.MirrorSwitch,
			orderId: Order.Reveal,
			effectType: EffectType.Casts,
			targetType: TargetType.Specific
		})

		this.FelForm = new AbilityType({
			four: AbilityFour.FelForm,
			orderId: Order.Metamorphosis,
			effectType: EffectType.Casts,
			targetType: TargetType.SupportSelf
		})

		this.FallingStrike = new AbilityType({
			four: AbilityFour.FallingStrike,
			orderId: Order.Thunderbolt,
			effectType: EffectType.Casts,
			targetType: TargetType.DamageAreaTarget
		})

		this.ShiftStorm = new AbilityType({
			four: AbilityFour.ShiftStorm,
			orderId: Order.Channel,
			effectType: EffectType.Casts,
			targetType: TargetType.Specific
		})
	}
}
