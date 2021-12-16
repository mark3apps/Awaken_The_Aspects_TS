import { Logger } from 'app/classes/log'
import { CC2Four } from 'lib/resources/library'
import { AbilityFour, BuffFour, Order } from '../../lib/w3ts/index'
import { Group } from '../../lib/w3ts/handles/group'
import { Timer } from '../../lib/w3ts/handles/timer'
import { Trigger } from '../../lib/w3ts/handles/trigger'
import { Unit } from '../../lib/w3ts/handles/unit'
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

export interface iAbilityType {
	four: AbilityFour | string,
	addEffect?: boolean,
	addGroup?: boolean,
	addBuffDeath?: boolean,
	loopTick?: number,
	onEffect?: () => void,
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

const map = new Map<string, AbilityType>()
const mapInstant = new Map<string, AbilityType>()
const preload: AbilityType[] = []

export class AbilityType {
	readonly four!: string
	readonly type: EffectType = EffectType.None
	readonly target: TargetType = TargetType.None

	readonly buffFour?: BuffFour
	readonly addBuffDeath: boolean = false
	readonly orderId?: Order
	readonly orderIdAutoOn?: Order
	readonly orderIdAutoOff?: Order
	readonly orderIdOff?: Order
	readonly unitType: { [name: number]: boolean } = {}
	readonly permanent?: boolean
	readonly starting?: boolean
	readonly ult?: boolean
	readonly addGroup?: boolean
	readonly loopTick?: number

	loopTimer: Timer | undefined
	group: Group | undefined

	onEffect: () => void = () => { }
	onBuffDeath: () => void = () => { }
	onLoop: () => void = () => { }

	constructor (ability: iAbilityType) {
		//
		// Required Vars
		this.four = ability.four
		this.buffFour = ability.buffFour

		// Optional Vars
		this.orderId = ability.orderId
		this.orderIdAutoOff = ability.orderIdAutoOff
		this.orderIdAutoOn = ability.orderIdAutoOn
		this.orderIdOff = ability.orderIdOff

		// Defined Vars
		if (ability.type) this.type = ability.type
		if (ability.target) this.target = ability.target
		if (ability.onEffect) this.onEffect = ability.onEffect

		if (ability.unitType !== undefined) {
			for (let i = 0; i < ability.unitType.length; i++) {
				const element = ability.unitType[i]
				this.unitType[element.id] = true
			}
		}

		this.permanent = ability.permanent ?? false
		this.starting = ability.starting ?? false
		this.ult = ability.ult ?? false
		if (ability.addBuffDeath !== undefined) this.addBuffDeath = ability.addBuffDeath
		this.loopTick = ability.loopTick ?? 0

		preload.push(this)

		// If ability hasn't been definite before
		if (!map.has(this.four)) {
			map.set(this.four, this)

			// Start Ability loop
			if (this.loopTick > 0) {
				this.loopTimer = new Timer()
				this.loopTimer.start(this.loopTick, true, () => this.onLoop())
			}

			if (this.addBuffDeath) {
				Trigger.unitDying.add(() => {
					if (Unit.fromEvent().hasBuff(this.buffId as number)) {
						this.onBuffDeath()
					}
				})
			}

			// Add Trigger Trigger
			if (this.onEffect !== (() => { })) {
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
						mapInstant.set(this.four, this)
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
				if (mapInstant.has(CC2Four(GetSpellAbilityId()))) {
					const ability = this.fromSpellEvent()
					if (ability) ability.onEffect()
				}
			})
		} catch (error) {
			Logger.Error('Cast Spell', error)
		}
	}

	public static fromSpellEvent () {
		return AbilityType.fromId(GetSpellAbilityId())
	}

	public static fromId (id: string | number): AbilityType {
		let four: string
		typeof id === 'string' ? four = id : four = CC2Four(id)

		return map.get(four) ?? new AbilityType({ four: four })
	}

	public get id (): number {
		return FourCC(this.four)
	}

	public get buffId (): number | undefined {
		return this.buffFour ? FourCC(this.buffFour) : undefined
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
}
