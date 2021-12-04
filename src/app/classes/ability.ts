/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable indent */
import { Logger } from 'app/classes/log'
import { CC2Four } from 'lib/resources/library'
import { AbilityFour, BuffFour, Order, AbilityModel, AttachPoint, Anim } from '../../lib/w3ts/index'
import { Effect } from '../../lib/w3ts/handles/effect'
import { Group } from '../../lib/w3ts/handles/group'
import { Timer } from '../../lib/w3ts/handles/timer'
import { Trigger } from '../../lib/w3ts/handles/trigger'
import { Unit } from '../../lib/w3ts/handles/unit'
import { UnitAbility } from './unitAbility'
import { UnitType } from './unitType'

export const enum EffectType {
	Channel,
	Instant,
	InstantDelayedEffect,
	ChannelInstantEffect,
	Passive,
	Death,
	Kill,
	Attacked,
	Attacking,
	UnitTypeAttacking,
	Aura,
	AutoCast,
	None
}

export const enum TargetType {
	DamageSingle,
	DamageArea,
	DamageAreaTarget,
	DamageAround,
	HealSingle,
	HealSelf,
	HealArea,
	HealTargetArea,
	HealAround,
	CrippleSingle,
	CrippleArea,
	CrippleAreaTarget,
	CrippleAround,
	SupportSelf,
	SupportSingle,
	SupportArea,
	SupportAreaTarget,
	SupportAround,
	ModifySingle,
	ModifyArea,
	ModifyAreaTarget,
	ModifyAround,
	Specific,
	None
}

export interface AbilityParameters {
	four: AbilityFour | string,
	addEffect?: boolean,
	addGroup?: boolean,
	addBuffDeath?: boolean,
	loopTick?: number,

	buffFour?: BuffFour,
	type?: EffectType,
	target?: TargetType,
	orderId?: number,
	orderIdAutoOn?: number,
	orderIdAutoOff?: number,
	orderIdOff?: number,
	unitType?: UnitType[],
	permanent?: boolean,
	starting?: boolean,
	ult?: boolean
}

export class Ability {
	readonly four: string
	readonly type: EffectType
	readonly target: TargetType

	readonly buffFour?: BuffFour
	readonly addBuffDeath?: boolean
	readonly orderId?: Order
	readonly orderIdAutoOn?: Order
	readonly orderIdAutoOff?: Order
	readonly orderIdOff?: Order
	readonly unitType?: { [name: number]: boolean } = {}
	readonly permanent?: boolean
	readonly starting?: boolean
	readonly ult?: boolean
	readonly addEvent?: boolean
	readonly addGroup?: boolean
	readonly loopTick?: number

	loopTimer: Timer
	group: Group

	onEffect: () => void = (): void => { return undefined }
	onBuffDeath: () => void = (): void => { return undefined }
	onLoop: () => void = (): void => { return undefined }

	private static map = new Map<string, Ability>()
	private static mapInstant = new Map<string, Ability>()
	static preload: Ability[] = []

	constructor (ability: AbilityParameters) {
		this.four = ability.four
		this.buffFour = ability.buffFour
		this.type = ability.type ?? EffectType.None
		this.target = ability.target ?? TargetType.None
		this.orderId = ability.orderId
		this.orderIdAutoOff = ability.orderIdAutoOff
		this.orderIdAutoOn = ability.orderIdAutoOn
		this.orderIdOff = ability.orderIdOff

		if (ability.unitType !== undefined) {
			for (let i = 0; i < ability.unitType.length; i++) {
				const element = ability.unitType[i]
				this.unitType[element.id] = true
			}
		}

		this.permanent = ability.permanent ?? false
		this.starting = ability.starting ?? false
		this.ult = ability.ult ?? false
		this.addEvent = ability.addEffect ?? false
		this.addBuffDeath = ability.addBuffDeath ?? false
		this.loopTick = ability.loopTick ?? 0

		Ability.preload.push(this)

		// If ability hasn't been definite before
		if (!Ability.map.has(this.four)) {
			Ability.map.set(this.four, this)

			// Start Ability loop
			if (this.loopTick > 0) {
				this.loopTimer = new Timer()
				this.loopTimer.start(this.loopTick, true, () => this.onLoop())
			}

			if (this.addBuffDeath) {
				Trigger.unitDying.add(() => {
					if (Unit.fromEvent().hasBuff(this.buffId)) {
						this.onBuffDeath()
					}
				})
			}

			// Add Trigger Trigger
			if (this.addEvent) {
				switch (this.type) {
					case EffectType.Kill:
						Trigger.unitDies.add(() => {
							if (Unit.fromHandle(GetKillingUnit()).hasAbility(this)) {
								this.onEffect()
							}
						})
						break

					case EffectType.Death:
						Trigger.unitDies.add(() => {
							if (Unit.fromEvent().hasAbility(this)) {
								this.onEffect()
							}
						})
						break

					case EffectType.Attacked:
						Trigger.unitAttacked.add(() => {
							if (Unit.fromEvent().hasAbility(this.id)) {
								this.onEffect()
							}
						})
						break

					case EffectType.Attacking:
						Trigger.unitAttacked.add(() => {
							if (Unit.fromAttacking().hasAbility(this.id)) {
								this.onEffect()
							}
						})
						break

					case EffectType.UnitTypeAttacking:
						Trigger.unitAttacked.add(() => {
							if (this.unitType[GetUnitTypeId(GetAttacker())]) {
								this.onEffect()
							}
						})
						break

					case EffectType.Instant:
						Ability.mapInstant.set(this.four, this)
						break
					default:
						break
				}
			}
		}
	}

	public static initSpellEffects (): void {
		try {
			Trigger.unitSpellEffect.add(() => {
				if (Ability.mapInstant.has(CC2Four(GetSpellAbilityId()))) {
					const ability = this.fromSpellEvent()
					ability.onEffect()
				}
			})
		} catch (error) {
			Logger.Error('Cast Spell', error)
		}
	}

	public static fromSpellEvent (): Ability {
		return Ability.fromId(GetSpellAbilityId())
	}

	public static fromId (id: string | number): Ability | undefined {
		let four: string
		typeof id === 'string' ? four = id : four = CC2Four(id)

		if (Ability.map.has(four)) {
			return Ability.map.get(four)
		} else {
			return undefined
		}
	}

	public getUnitAbility (unit: Unit): UnitAbility {
		return new UnitAbility(unit, this)
	}

	public get id (): number {
		return FourCC(this.four)
	}

	public get buffId (): number {
		return FourCC(this.buffFour)
	}

	public get icon (): string {
		return BlzGetAbilityIcon(this.id)
	}

	public get iconActivated (): string {
		return BlzGetAbilityActivatedIcon(this.id)
	}

	public get name (): string {
		return GetAbilityName(this.id)
	}

	public get activatedPosX (): number {
		return BlzGetAbilityActivatedPosX(this.id)
	}

	public get activatedPosY (): number {
		return BlzGetAbilityActivatedPosY(this.id)
	}

	public get posX (): number {
		return BlzGetAbilityPosX(this.id)
	}

	public get posY (): number {
		return BlzGetAbilityPosY(this.id)
	}

	public defaultManaCost (level: number): number {
		return BlzGetAbilityManaCost(this.id, level)
	}

	public getCooldown (level: number): number {
		return BlzGetAbilityCooldown(this.id, level)
	}

	public getEffect (t: effecttype, index: number): string {
		return GetAbilityEffectById(this.id, t, index)
	}

	public getSound (t: soundtype): string {
		return GetAbilitySoundById(this.id, t)
	}

	public getActivatedTooltip (level: number): string {
		return BlzGetAbilityActivatedTooltip(this.id, level)
	}

	public setActivatedTooltip (level: number, value: string): void {
		BlzSetAbilityActivatedTooltip(this.id, value, level)
	}

	public getExtendedTooltip (level: number): string {
		return BlzGetAbilityExtendedTooltip(this.id, level)
	}

	public setExtendedTooltip (level: number, value: string): void {
		BlzSetAbilityExtendedTooltip(this.id, value, level)
	}

	public getTooltip (level: number): string {
		return BlzGetAbilityTooltip(this.id, level)
	}

	public setTooltip (level: number, value: string): void {
		BlzSetAbilityTooltip(this.id, value, level)
	}

	public getResearchTooltip (level: number): string {
		return BlzGetAbilityResearchTooltip(this.id, level)
	}

	public setResearchTooltip (level: number, value: string): void {
		BlzSetAbilityResearchTooltip(this.id, value, level)
	}

	public getResearchExtendedTooltip (level: number): string {
		return BlzGetAbilityResearchExtendedTooltip(this.id, level)
	}

	public setResearchExtendedTooltip (level: number, value: string): void {
		BlzSetAbilityResearchExtendedTooltip(this.id, value, level)
	}

	public getActivatedExtendedTooltip (level: number): string {
		return BlzGetAbilityActivatedExtendedTooltip(this.id, level)
	}

	public setActivatedExtendedTooltip (level: number, value: string): void {
		BlzSetAbilityActivatedExtendedTooltip(this.id, value, level)
	}

	static aspectInferno: Ability
	static shift1Dummy: Ability
	static shift2Dummy: Ability
	static shift3Dummy: Ability
	static shift4Dummy: Ability
	static fallingStrikeDummy: Ability
	static shadeStormDummy: Ability

	static footmanUpgrade: Ability
	static felGrunt: Ability
	static felOgre: Ability
	static felWarlord: Ability
	static felWarlock: Ability

	static manaRepository: Ability
	static manaShieldTower: Ability
	static manaShardsTower: Ability
	static chainLightningTower: Ability
	static coneOfFireTower: Ability
	static aspectOfDeathInfect: Ability
	static stormCrowForm: Ability

	static define (): void {
		Ability.aspectInferno = new Ability({ four: AbilityFour.InfernoAspect, orderId: Order.Dreadlordinferno })
		Ability.shift1Dummy = new Ability({ four: AbilityFour.ItemIllusions, orderId: Order.Illusion })
		Ability.fallingStrikeDummy = new Ability({ four: AbilityFour.FallingStrikeDummy, orderId: Order.Creepthunderclap })
		Ability.shadeStormDummy = new Ability({ four: 'A03O', orderId: Order.Whirlwind })
		Ability.stormCrowForm = new Ability({ four: AbilityFour.StormCrowForm, orderId: Order.Ravenform })

		// Footman Upgrade
		Ability.footmanUpgrade = new Ability({ four: AbilityFour.FootmanCharge, orderId: Order.Bearform, type: EffectType.Instant, target: TargetType.SupportSelf, addEffect: true })
		Ability.footmanUpgrade.onEffect = () => {
			const eventUnit = Unit.fromEvent()
			if (eventUnit.manaPercent === 100) {
				eventUnit.getUnitAbility(Ability.footmanUpgrade).castImmediate()
				eventUnit.lifePercent += 25
				const upgrade = new Timer()
				upgrade.start(0.05, false, () => {
					new Effect(AbilityModel.spiritWalkerChange, eventUnit, AttachPoint.chest).destroy()
					eventUnit.setAnimation(Anim.Footman.standVictory)
				})
			}
		}

		// Fel Grunt
		Ability.felGrunt = new Ability({ four: AbilityFour.FelGrunt, type: EffectType.Kill, addEffect: true })
		Ability.felGrunt.onEffect = () => {
			const eventUnit = Unit.fromKilling()
			eventUnit.addAbility(FourCC(AbilityFour.FelGruntTransformed))
		}

		// Fel Ogre
		Ability.felOgre = new Ability({ four: AbilityFour.FelOgre, type: EffectType.Kill, addEffect: true })
		Ability.felOgre.onEffect = () => {
			const eventUnit = Unit.fromKilling()
			eventUnit.addAbility(FourCC(AbilityFour.FelOgreTransformed))
		}

		// Fel Warlord
		Ability.felWarlord = new Ability({ four: AbilityFour.FelWarlord, type: EffectType.Kill, addEffect: true })
		Ability.felWarlord.onEffect = () => {
			const eventUnit = Unit.fromKilling()
			if (eventUnit.kills >= 4) {
				eventUnit.addAbility(FourCC(AbilityFour.FelWarlordTransformed))
			}
		}

		// Fel Warlock
		Ability.felWarlock = new Ability({ four: AbilityFour.FelWarlock, type: EffectType.Kill, addEffect: true })
		Ability.felWarlock.onEffect = () => {
			const eventUnit = Unit.fromKilling()
			if (eventUnit.kills >= 3) {
				eventUnit.addAbility(FourCC(AbilityFour.FelWarlockTransformed))
				eventUnit.manaPercent = 100
			}
		}

		Ability.manaRepository = new Ability({
			four: AbilityFour.ManaRepository,
			unitType: [UnitType.ArcaneManaRepository],
			type: EffectType.UnitTypeAttacking,
			target: TargetType.SupportSingle,
			orderId: Order.Recharge,
			addEffect: true
		}
		)

		Ability.manaRepository.onEffect = () => {
			const eventUnit = Unit.fromAttacking()
			const unitAbility = eventUnit.getUnitAbility(Ability.manaRepository)

			const g = new Group()
			g.enumUnitsInRange(eventUnit, 1300, null)

			g.firstLoop((u) => {
				if (u.isStructure &&
					u.typeId !== eventUnit.typeId &&
					u.isAlly(eventUnit) &&
					u.isAlive() &&
					u.manaPercent < 50 &&
					unitAbility.cooldownRemaining === 0 &&
					eventUnit.mana > 200) {
					unitAbility.castTarget(u)
				}
			})
			g.destroy()
		}

		Ability.manaShieldTower = new Ability({
			four: AbilityFour.ManaShieldTower,
			unitType: [UnitType.ArcaneFlameTower, UnitType.ArcaneManaTower, UnitType.ArcaneSorcerersTower],
			orderId: Order.Manashieldon,
			buffFour: BuffFour.ManaShield,
			type: EffectType.UnitTypeAttacking,
			target: TargetType.SupportSelf,
			addEffect: true
		})

		Ability.manaShieldTower.onEffect = (): void => {
			const eventUnit = Unit.fromAttacking()
			const unitAbility = new UnitAbility(eventUnit, Ability.manaShieldTower)

			if (unitAbility.isCastable() &&
				!unitAbility.hasBuff()) {
				unitAbility.castImmediate()
			}
		}

		Ability.manaShardsTower = new Ability({
			four: AbilityFour.ManaShardsTower,
			orderId: Order.Clusterrockets,
			unitType: [UnitType.ArcaneSorcerersTower],
			type: EffectType.UnitTypeAttacking,
			target: TargetType.DamageArea,
			addEffect: true
		})

		Ability.manaShardsTower.onEffect = (): void => {
			const eventUnit = Unit.fromAttacking()
			const attackedUnit = Unit.fromEvent()
			const unitAbility = eventUnit.getUnitAbility(Ability.manaShardsTower)

			if (unitAbility.isCastable() &&
				attackedUnit.isGround) {
				unitAbility.cast(attackedUnit.position)
			}
		}

		Ability.chainLightningTower = new Ability({
			four: AbilityFour.ChainLightningTower,
			orderId: Order.Chainlightning,
			unitType: [UnitType.ArcaneSorcerersTower],
			type: EffectType.UnitTypeAttacking,
			target: TargetType.DamageSingle,
			addEffect: true
		})

		Ability.chainLightningTower.onEffect = (): void => {
			const eventUnit = Unit.fromAttacking()
			const attackedUnit = Unit.fromAttacked()
			const unitAbility = new UnitAbility(eventUnit, Ability.chainLightningTower)

			if (unitAbility.isCastable() &&
				attackedUnit.isGround) {
				unitAbility.castTarget(attackedUnit)
			}
		}

		Ability.coneOfFireTower = new Ability({
			four: AbilityFour.ConeOfFireTower,
			orderId: Order.Breathoffrost,
			unitType: [UnitType.ArcaneFlameTower],
			type: EffectType.UnitTypeAttacking,
			target: TargetType.DamageAreaTarget,
			addEffect: true
		})

		Ability.coneOfFireTower.onEffect = (): void => {
			const eventUnit = Unit.fromAttacking()
			const attackedUnit = Unit.fromAttacked()
			const unitAbility = new UnitAbility(eventUnit, Ability.coneOfFireTower)

			if (unitAbility.isCastable() &&
				attackedUnit.isGround) {
				unitAbility.cast(attackedUnit.position)
			}
		}

		Ability.aspectOfDeathInfect = new Ability({
			four: AbilityFour.InfectAspect,
			orderId: Order.Parasite,
			buffFour: BuffFour.Infected,
			unitType: [UnitType.AspectOfDeath],
			type: EffectType.UnitTypeAttacking,
			target: TargetType.CrippleAround,
			addEffect: true
		})

		Ability.aspectOfDeathInfect.onEffect = (): void => {
			const eventUnit = Unit.fromAttacking()
			const unitAbility = new UnitAbility(eventUnit, Ability.aspectOfDeathInfect)
			const unitCount = math.floor(unitAbility.normalDuration)

			const g = new Group()
			g.enumUnitsInRange(eventUnit, 400, null)
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
			},
				unitCount)
			g.destroy()
		}
	}
}
