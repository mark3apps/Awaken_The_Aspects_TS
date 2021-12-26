import { AbilityFour, Order, Unit, Effect, AbilityModel, AttachPoint, Group, BuffFour } from 'lib/w3ts'
import { Ability, UnitType } from '.'
import { AbilityType, EffectType, TargetType } from './abilityType'


export class AbilityTypes {
	private static instance: AbilityTypes

	static getInstance () {
		if (!AbilityTypes.instance) {
			AbilityTypes.instance = new AbilityTypes()
		}

		return AbilityTypes.instance
	}


	aspectInferno
	shift1Dummy
	fallingStrikeDummy
	shadeStormDummy
	stormCrowForm
	footmanUpgrade
	felGrunt
	felOgre
	felWarlord
	felWarlock
	manaRepository
	manaShieldTower
	manaShardsTower
	chainLightningTower
	coneOfFireTower
	aspectOfDeathInfect


	private constructor () {

		print("Running Abilities")
		//
		// Unit Abilities
		//
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
				const caster = Unit.fromCaster()

				if (caster.manaPercent === 100) {
					caster.issueImmediateOrder(Order.Bearform)
					caster.lifePercent += 25
					new Effect(AbilityModel.spiritWalkerChange, caster, AttachPoint.chest).destroy()
				}
			}
		})

		// Fel Grunt
		this.felGrunt = new AbilityType({
			four: AbilityFour.FelGrunt,
			type: EffectType.Kill,
			onEffect: () => { Unit.fromKilling().addAbility(FourCC(AbilityFour.FelGruntTransformed)) }
		})

		// Fel Ogre
		this.felOgre = new AbilityType({
			four: AbilityFour.FelOgre,
			type: EffectType.Kill,
			onEffect: () => { Unit.fromKilling().addAbility(FourCC(AbilityFour.FelOgreTransformed)) }
		})

		// Fel Warlord
		this.felWarlord = new AbilityType({
			four: AbilityFour.FelWarlord,
			type: EffectType.Kill,
			onEffect: () => {
				const eventUnit = Unit.fromKilling()
				if (eventUnit.kills >= 4) {
					eventUnit.addAbility(AbilityFour.FelWarlordTransformed)
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
					eventUnit.addAbility(AbilityFour.FelWarlockTransformed)
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
			onEffect: () => { }
		})

		this.manaRepository.onEffect = () => {
			const ability = Ability.get(Unit.fromAttacker(), this.manaRepository)

			const g = new Group()
			g.enumUnitsInRange(ability.unit, 1300)

			g.firstLoop((u) => {
				if (u.isStructure &&
					u.typeId !== ability.unit.typeId &&
					u.isAlly(ability.unit) &&
					u.isAlive() &&
					u.manaPercent < 50 &&
					ability.cooldownRemaining === 0 &&
					ability.unit.mana > 200) {
					ability.castTarget(u)
				}
			})
			g.destroy()
		}



		this.manaShieldTower = new AbilityType({
			four: AbilityFour.ManaShieldTower,
			unitType: [UnitType.ArcaneFlameTower, UnitType.ArcaneManaTower, UnitType.ArcaneSorcerersTower],
			orderId: Order.Manashieldon,
			buffFour: BuffFour.ManaShield,
			type: EffectType.UnitTypeAttacking,
			target: TargetType.SupportSelf,
			onEffect: (): void => {
				const eventUnit = Unit.fromAttacker()
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
				const eventUnit = Unit.fromAttacker()
				const attackedUnit = Unit.fromEvent()
				const ability = Ability.get(eventUnit, this.manaShardsTower)

				if (ability.isCastable() &&
					attackedUnit.isGround) {
					ability.cast(attackedUnit.coordinate)
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
				const eventUnit = Unit.fromAttacker()
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
				const eventUnit = Unit.fromAttacker()
				const attackedUnit = Unit.fromAttacked()
				const unitAbility = Ability.get(eventUnit, this.coneOfFireTower)

				if (unitAbility.isCastable() &&
					attackedUnit.isGround) {
					unitAbility.cast(attackedUnit.coordinate)
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
				const attacker = Unit.fromAttacker()
				const unitCount = 3

				const g = new Group()
				g.enumUnitsInRange(attacker, 400)
				g.firstLoopCondition((u) => {
					return (u.isAlive() &&
						u.isEnemy(attacker) &&
						!u.isHero &&
						!u.isStructure &&
						!u.isIllusion &&
						!u.isMagicImmune &&
						!u.hasBuff(BuffFour.Infected))
				}, (u) => {
					const dummy = new Unit(attacker.owner, UnitType.Dummy, attacker.coordinate, attacker.facing)
					dummy.addAbility(AbilityFour.InfectAspectDummy)
					dummy.issueTargetOrder(Order.Parasite, u)
					dummy.applyTimedLife(BuffFour.TimedLifeGeneric, 1)
				}, unitCount)
				g.destroy()
			}
		})
	}

}
