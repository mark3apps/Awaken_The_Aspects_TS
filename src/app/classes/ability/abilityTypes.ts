import { AbilityFour, Order } from 'lib/w3ts'
import { UnitType } from '..'
import { AbilityType } from '../abilityType/abilityType'
import { TargetType } from "../abilityType/TargetType"
import { EffectType } from "../abilityType/EffectType"
import { AbilityTypeData } from './AbilityTypeData'

export class AbilityTypes {
	private static instance: AbilityTypes

	static getInstance () {
		if (!AbilityTypes.instance) {
			AbilityTypes.instance = new AbilityTypes()
		}

		return AbilityTypes.instance
	}

	aspectInferno
	shiftDummy
	fallingStrikeDummy
	shadeStormDummy
	stormCrowForm
	footmanUpgrade
	felGrunt
	felOgre
	felWarlord
	felWarlock
	manaRepository
	// manaShieldTower
	// manaShardsTower
	// chainLightningTower
	// coneOfFireTower
	// aspectOfDeathInfect

	private constructor () {
		//
		// Unit Abilities
		//
		this.aspectInferno = new AbilityType(AbilityTypeData.infernoAspect)
		this.shiftDummy = new AbilityType(AbilityTypeData.shiftDummy)
		this.fallingStrikeDummy = new AbilityType(AbilityTypeData.fallingStrikeDummy)
		this.fallingStrikeDummy = new AbilityType(AbilityTypeData.fallingStrikeDummy)
		this.shadeStormDummy = new AbilityType(AbilityTypeData.shadeStormDummy)
		this.stormCrowForm = new AbilityType(AbilityTypeData.stormCrowForm)

		// Footman Upgrade
		this.footmanUpgrade = new AbilityType(AbilityTypeData.footmanUpgrade)

		// Fel Grunt
		this.felGrunt = new AbilityType({
			four: AbilityFour.FelGrunt,
			effectType: EffectType.Kills
		})

		// Fel Ogre
		this.felOgre = new AbilityType({
			four: AbilityFour.FelOgre,
			effectType: EffectType.Kills
		})

		// Fel Warlord
		this.felWarlord = new AbilityType({
			four: AbilityFour.FelWarlord,
			effectType: EffectType.Kills
		})

		// Fel Warlock
		this.felWarlock = new AbilityType({
			four: AbilityFour.FelWarlock,
			effectType: EffectType.Kills
		})

		this.manaRepository = new AbilityType({
			four: AbilityFour.ManaRepository,
			unitTypes: [UnitType.ArcaneManaRepository],
			effectType: EffectType.UnitTypeAttacking,
			targetType: TargetType.SupportSingle,
			orderId: Order.Recharge
		})

		// this.manaShieldTower = new AbilityType({
		// 	four: AbilityFour.ManaShieldTower,
		// 	unitTypes: [UnitType.ArcaneFlameTower, UnitType.ArcaneManaTower, UnitType.ArcaneSorcerersTower],
		// 	orderId: Order.Manashieldon,
		// 	buffFour: BuffFour.ManaShield,
		// 	effectType: EffectType.UnitTypeAttacking,
		// 	targetType: TargetType.SupportSelf,
		// 	onEffect: (): void => {
		// 		const eventUnit = Unit.fromAttacker()
		// 		const unitAbility = Ability.fromHandle({ castingUnit: eventUnit, abilityType: this.manaShieldTower })

		// 		if (unitAbility.isCastable() &&
		// 			!unitAbility.hasBuff()) {
		// 			unitAbility.castImmediate()
		// 		}
		// 	}
		// })

		// this.manaShardsTower = new AbilityType({
		// 	four: AbilityFour.ManaShardsTower,
		// 	orderId: Order.Clusterrockets,
		// 	unitTypes: [UnitType.ArcaneSorcerersTower],
		// 	effectType: EffectType.UnitTypeAttacking,
		// 	targetType: TargetType.DamageArea,
		// 	onEffect: (): void => {
		// 		const eventUnit = Unit.fromAttacker()
		// 		const attackedUnit = Unit.fromEvent()
		// 		const ability = Ability.fromHandle({ castingUnit: eventUnit, abilityType: this.manaShardsTower })

		// 		if (ability.isCastable() &&
		// 			attackedUnit.isGround) {
		// 			ability.cast(attackedUnit.coordinate)
		// 		}
		// 	}
		// })

		// this.chainLightningTower = new AbilityType({
		// 	four: AbilityFour.ChainLightningTower,
		// 	orderId: Order.Chainlightning,
		// 	unitTypes: [UnitType.ArcaneSorcerersTower],
		// 	effectType: EffectType.UnitTypeAttacking,
		// 	targetType: TargetType.DamageSingle,
		// 	onEffect: (): void => {
		// 		const eventUnit = Unit.fromAttacker()
		// 		const attackedUnit = Unit.fromAttacked()
		// 		const unitAbility = Ability.fromHandle({ castingUnit: eventUnit, abilityType: this.chainLightningTower })

		// 		if (unitAbility.isCastable() &&
		// 			attackedUnit.isGround) {
		// 			unitAbility.castTarget(attackedUnit)
		// 		}
		// 	}
		// })

		// this.coneOfFireTower = new AbilityType({
		// 	four: AbilityFour.ConeOfFireTower,
		// 	orderId: Order.Breathoffrost,
		// 	unitTypes: [UnitType.ArcaneFlameTower],
		// 	effectType: EffectType.UnitTypeAttacking,
		// 	targetType: TargetType.DamageAreaTarget,
		// 	onEffect: (): void => {
		// 		const eventUnit = Unit.fromAttacker()
		// 		const attackedUnit = Unit.fromAttacked()
		// 		const unitAbility = Ability.fromHandle({ castingUnit: eventUnit, abilityType: this.coneOfFireTower })

		// 		if (unitAbility.isCastable() &&
		// 			attackedUnit.isGround) {
		// 			unitAbility.cast(attackedUnit.coordinate)
		// 		}
		// 	}
		// })

		// this.aspectOfDeathInfect = new AbilityType({
		// 	four: AbilityFour.InfectAspect,
		// 	orderId: Order.Parasite,
		// 	buffFour: BuffFour.Infected,
		// 	unitTypes: [UnitType.AspectOfDeath],
		// 	effectType: EffectType.UnitTypeAttacking,
		// 	targetType: TargetType.CrippleAround,
		// 	onEffect: (): void => {
		// 		const attacker = Unit.fromAttacker()
		// 		const unitCount = 3

		// 		const g = new Group()
		// 		g.enumUnitsInRange(attacker, 400)
		// 		g.firstLoopCondition((u) => {
		// 			return (u.isAlive() &&
		// 				u.isEnemy(attacker) &&
		// 				!u.isHero &&
		// 				!u.isStructure &&
		// 				!u.isIllusion &&
		// 				!u.isMagicImmune &&
		// 				!u.hasBuff(BuffFour.Infected))
		// 		}, (u) => {
		// 			const dummy = new Unit(attacker.owner, UnitType.Dummy, attacker.coordinate, attacker.facing)
		// 			dummy.addAbility(AbilityFour.InfectAspectDummy)
		// 			dummy.issueTargetOrder(Order.Parasite, u)
		// 			dummy.applyTimedLife(BuffFour.TimedLifeGeneric, 1)
		// 		}, unitCount)
		// 		g.destroy()
		// 	}
		// })
	}
}
