import { AbilityFour, Order, Unit, Timer, Effect, AbilityModel, AttachPoint, Anim, Group, BuffFour } from 'lib/w3ts'
import { Ability, AbilityType, EffectType, TargetType, UnitType } from './classes'

// Base Thing
export class Globals {
	abilityType: DefineAbilityTypes
	unit: DefineUnits

	private static instance: Globals

	private constructor () {
		this.abilityType = DefineAbilityTypes.getInstance()
		this.unit = DefineUnits.getInstance()
	}

	static getInstance () {
		if (!Globals.instance) {
			Globals.instance = new Globals()
		}

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

class DefineAbilityTypes {
	private static instance: DefineAbilityTypes

	aspectInferno?: AbilityType
	shift1Dummy?: AbilityType
	fallingStrikeDummy?: AbilityType
	shadeStormDummy?: AbilityType
	stormCrowForm?: AbilityType
	footmanUpgrade?: AbilityType
	felGrunt?: AbilityType
	felOgre?: AbilityType
	felWarlord?: AbilityType
	felWarlock?: AbilityType
	manaRepository?: AbilityType
	manaShieldTower?: AbilityType
	manaShardsTower?: AbilityType
	chainLightningTower?: AbilityType
	coneOfFireTower?: AbilityType
	aspectOfDeathInfect?: AbilityType

	static getInstance () {
		if (!DefineAbilityTypes.instance) {
			DefineAbilityTypes.instance = new DefineAbilityTypes()
		}

		return DefineAbilityTypes.instance
	}

	private constructor () {
		this.aspectInferno = new AbilityType({ four: AbilityFour.InfernoAspect, orderId: Order.Dreadlordinferno })
		this.shift1Dummy = new AbilityType({ four: AbilityFour.ItemIllusions, orderId: Order.Illusion })
		this.fallingStrikeDummy = new AbilityType({ four: AbilityFour.FallingStrikeDummy, orderId: Order.Creepthunderclap })
		this.shadeStormDummy = new AbilityType({ four: 'A03O', orderId: Order.Whirlwind })
		this.stormCrowForm = new AbilityType({ four: AbilityFour.StormCrowForm, orderId: Order.Ravenform })

		// Footman Upgrade
		this.footmanUpgrade = new AbilityType({
			four: AbilityFour.FootmanCharge,
			orderId: Order.Bearform,
			type: EffectType.Instant,
			target: TargetType.SupportSelf,
			onEffect: () => {
				const eventUnit = Unit.fromEvent()
				if (eventUnit.manaPercent === 100) {
					Ability.get(eventUnit, this.footmanUpgrade).castImmediate()
					eventUnit.lifePercent += 25
					const upgrade = new Timer()
					upgrade.start(0.05, false, () => {
						new Effect(AbilityModel.spiritWalkerChange, eventUnit, AttachPoint.chest).destroy()
						eventUnit.setAnimation(Anim.Footman.standVictory)
					})
				}
			}
		})

		// Fel Grunt
		this.felGrunt = new AbilityType({
			four: AbilityFour.FelGrunt,
			type: EffectType.Kill,
			onEffect: () => {
				const eventUnit = Unit.fromKilling()
				eventUnit.addAbility(FourCC(AbilityFour.FelGruntTransformed))
			}
		})

		// Fel Ogre
		this.felOgre = new AbilityType({
			four: AbilityFour.FelOgre,
			type: EffectType.Kill,
			onEffect: () => {
				const eventUnit = Unit.fromKilling()
				eventUnit.addAbility(FourCC(AbilityFour.FelOgreTransformed))
			}
		})

		// Fel Warlord
		this.felWarlord = new AbilityType({
			four: AbilityFour.FelWarlord,
			type: EffectType.Kill,
			onEffect: () => {
				const eventUnit = Unit.fromKilling()
				if (eventUnit.kills >= 4) {
					eventUnit.addAbility(FourCC(AbilityFour.FelWarlordTransformed))
				}
			}
		})

		// Fel Warlock
		this.felWarlock = new AbilityType({
			four: AbilityFour.FelWarlock,
			type: EffectType.Kill,
			onEffect: () => {
				const eventUnit = Unit.fromKilling()
				if (eventUnit.kills >= 3) {
					eventUnit.addAbility(FourCC(AbilityFour.FelWarlockTransformed))
					eventUnit.manaPercent = 100
				}
			}
		})

		this.manaRepository = new AbilityType({
			four: AbilityFour.ManaRepository,
			unitType: [UnitType.ArcaneManaRepository],
			type: EffectType.UnitTypeAttacking,
			target: TargetType.SupportSingle,
			orderId: Order.Recharge,
			onEffect: () => {
				const eventUnit = Unit.fromAttacking()
				const ability = Ability.get(eventUnit, this.manaRepository)

				if (ability) {
					const g = new Group()
					g.enumUnitsInRange(eventUnit, 1300)

					g.firstLoop((u) => {
						if (u.isStructure &&
							u.typeId !== eventUnit.typeId &&
							u.isAlly(eventUnit) &&
							u.isAlive() &&
							u.manaPercent < 50 &&
							ability.cooldownRemaining === 0 &&
							eventUnit.mana > 200) {
							ability.castTarget(u)
						}
					})
					g.destroy()
				}
			}
		})

		this.manaShieldTower = new AbilityType({
			four: AbilityFour.ManaShieldTower,
			unitType: [UnitType.ArcaneFlameTower, UnitType.ArcaneManaTower, UnitType.ArcaneSorcerersTower],
			orderId: Order.Manashieldon,
			buffFour: BuffFour.ManaShield,
			type: EffectType.UnitTypeAttacking,
			target: TargetType.SupportSelf,
			onEffect: (): void => {
				const eventUnit = Unit.fromAttacking()
				const unitAbility = Ability.get(eventUnit, this.manaShieldTower)

				if (unitAbility.isCastable() &&
					!unitAbility.hasBuff()) {
					unitAbility.castImmediate()
				}
			}
		})

		this.manaShardsTower = new AbilityType({
			four: AbilityFour.ManaShardsTower,
			orderId: Order.Clusterrockets,
			unitType: [UnitType.ArcaneSorcerersTower],
			type: EffectType.UnitTypeAttacking,
			target: TargetType.DamageArea,
			onEffect: (): void => {
				const eventUnit = Unit.fromAttacking()
				const attackedUnit = Unit.fromEvent()
				const ability = Ability.get(eventUnit, this.manaShardsTower)

				if (ability.isCastable() &&
					attackedUnit.isGround) {
					ability.cast(attackedUnit.position)
				}
			}
		})

		this.chainLightningTower = new AbilityType({
			four: AbilityFour.ChainLightningTower,
			orderId: Order.Chainlightning,
			unitType: [UnitType.ArcaneSorcerersTower],
			type: EffectType.UnitTypeAttacking,
			target: TargetType.DamageSingle,
			onEffect: (): void => {
				const eventUnit = Unit.fromAttacking()
				const attackedUnit = Unit.fromAttacked()
				const unitAbility = Ability.get(eventUnit, this.chainLightningTower)

				if (unitAbility.isCastable() &&
					attackedUnit.isGround) {
					unitAbility.castTarget(attackedUnit)
				}
			}
		})

		this.coneOfFireTower = new AbilityType({
			four: AbilityFour.ConeOfFireTower,
			orderId: Order.Breathoffrost,
			unitType: [UnitType.ArcaneFlameTower],
			type: EffectType.UnitTypeAttacking,
			target: TargetType.DamageAreaTarget,
			onEffect: (): void => {
				const eventUnit = Unit.fromAttacking()
				const attackedUnit = Unit.fromAttacked()
				const unitAbility = Ability.get(eventUnit, this.coneOfFireTower)

				if (unitAbility.isCastable() &&
					attackedUnit.isGround) {
					unitAbility.cast(attackedUnit.position)
				}
			}
		})

		this.aspectOfDeathInfect = new AbilityType({
			four: AbilityFour.InfectAspect,
			orderId: Order.Parasite,
			buffFour: BuffFour.Infected,
			unitType: [UnitType.AspectOfDeath],
			type: EffectType.UnitTypeAttacking,
			target: TargetType.CrippleAround,
			onEffect: (): void => {
				const eventUnit = Unit.fromAttacking()
				const unitAbility = Ability.get(eventUnit, this.aspectOfDeathInfect)
				const unitCount = math.floor(unitAbility.normalDuration)

				const g = new Group()
				g.enumUnitsInRange(eventUnit, 400)
				g.firstLoopCondition((u) => {
					return (u.isAlive() &&
						u.isEnemy(eventUnit) &&
						!u.isHero &&
						!u.isStructure &&
						!u.isIllusion &&
						!u.isMagicImmune &&
						!u.hasBuff(BuffFour.Infected))
				}, (u) => {
					const dummy = new Unit(eventUnit.owner, UnitType.Dummy, eventUnit.position, eventUnit.facing)
					dummy.addAbility(AbilityFour.InfectAspectDummy)
					dummy.issueTargetOrder(Order.Parasite, u)
					dummy.applyTimedLife(BuffFour.TimedLifeGeneric, 2)
				}, unitCount)
				g.destroy()
			}
		})
	}
}
