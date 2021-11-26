import { Log } from "app/systems/log"
import { CC2Four } from "lib/resources/library"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"
import { Group, Timer, Trigger, Unit } from "lib/w3ts/index"

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
    four: ID.Ability,
    addEffect?: boolean,
    addGroup?: boolean,
    addBuffDeath?: boolean,
    loopTick?: number,

    buffFour?: ID.Buff,
    type?: EffectType,
    target?: TargetType,
    orderId?: number,
    orderIdAutoOn?: number,
    orderIdAutoOff?: number,
    orderIdOff?: number,
    unitType?: ID.Unit[],
    permanent?: boolean,
    starting?: boolean,
    ult?: boolean
}

export class Ability {
    readonly four: ID.Ability
    readonly type: EffectType
    readonly target: TargetType

    readonly buffFour?: ID.Buff
    readonly addBuffDeath?: boolean
    readonly orderId?: OrderId
    readonly orderIdAutoOn?: OrderId
    readonly orderIdAutoOff?: OrderId
    readonly orderIdOff?: OrderId
    readonly unitType?: { [name: number]: boolean } = {}
    readonly permanent?: boolean
    readonly starting?: boolean
    readonly ult?: boolean
    readonly addEvent?: boolean
    readonly addGroup?: boolean
    readonly loopTick?: number

    loopTimer: Timer
    group: Group

    onEffect: (ability?: Ability) => void = (): void => { return undefined }
    onBuffDeath: (ability?: Ability) => void = (): void => { return undefined }
    onLoop: () => void = (): void => { return undefined }

    private static map = new Map<string, Ability>()
    private static mapInstant = new Map<string, Ability>()
    static preload: Ability[] = []

    constructor(ability: AbilityParameters) {

        this.four = ability.four
        this.buffFour = ability.buffFour
        this.type = ability.type ?? EffectType.None
        this.target = ability.target ?? TargetType.None
        this.orderId = ability.orderId
        this.orderIdAutoOff = ability.orderIdAutoOff
        this.orderIdAutoOn = ability.orderIdAutoOn
        this.orderIdOff = ability.orderIdOff

        if (ability.unitType != undefined) {
            for (let i = 0; i < ability.unitType.length; i++) {
                const element = ability.unitType[i]
                this.unitType[FourCC(element)] = true
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
                        this.onBuffDeath(this)
                    }
                })
            }

            // Add Trigger Trigger
            if (this.addEvent) {
                switch (this.type) {
                    case EffectType.Kill:
                        Trigger.unitDies.add(() => {
                            if (Unit.fromHandle(GetKillingUnit()).hasAbility(this)) {
                                this.onEffect(this)
                            }
                        })
                        break

                    case EffectType.Death:
                        Trigger.unitDies.add(() => {
                            if (Unit.fromEvent().hasAbility(this)) {
                                this.onEffect(this)
                            }
                        })
                        break

                    case EffectType.Attacked:
                        Trigger.unitAttacked.add(() => {
                            if (Unit.fromEvent().hasAbility(this.id)) {
                                this.onEffect(this)
                            }
                        })
                        break

                    case EffectType.Attacking:
                        Trigger.unitAttacked.add(() => {
                            if (Unit.fromAttacking().hasAbility(this.id)) {
                                this.onEffect(this)
                            }
                        })
                        break

                    case EffectType.UnitTypeAttacking:
                        Trigger.unitAttacked.add(() => {
                            if (this.unitType[GetUnitTypeId(GetAttacker())]) {
                                this.onEffect(this)
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

    public static initSpellEffects(): void {
        try {
            Trigger.unitSpellEffect.add(() => {

                if (Ability.mapInstant.has(CC2Four(GetSpellAbilityId()))) {

                    const ability = this.fromSpellEvent()
                    ability.onEffect(ability)
                }
            })
        } catch (error) {
            Log.Error("Cast Spell", error)
        }

    }

    public static fromSpellEvent(): Ability {
        return Ability.fromId(GetSpellAbilityId())
    }

    public static fromId(id: string | number): Ability | undefined {

        let four: string
        typeof id === "string" ? four = id : four = CC2Four(id)

        if (Ability.map.has(four)) {
            return Ability.map.get(four)
        } else {
            return undefined
        }

    }

    public get id(): number {
        return FourCC(this.four)
    }

    public get buffId(): number {
        return FourCC(this.buffFour)
    }

    public get icon(): string {
        return BlzGetAbilityIcon(this.id)
    }

    public get iconActivated(): string {
        return BlzGetAbilityActivatedIcon(this.id)
    }

    public get name(): string {
        return GetAbilityName(this.id)
    }

    public get activatedPosX(): number {
        return BlzGetAbilityActivatedPosX(this.id)
    }

    public get activatedPosY(): number {
        return BlzGetAbilityActivatedPosY(this.id)
    }

    public get posX(): number {
        return BlzGetAbilityPosX(this.id)
    }

    public get posY(): number {
        return BlzGetAbilityPosY(this.id)
    }

    public defaultManaCost(level: number): number {
        return BlzGetAbilityManaCost(this.id, level)
    }

    public getCooldown(level: number): number {
        return BlzGetAbilityCooldown(this.id, level)
    }

    public getEffect(t: effecttype, index: number): string {
        return GetAbilityEffectById(this.id, t, index)
    }

    public getSound(t: soundtype): string {
        return GetAbilitySoundById(this.id, t)
    }

    public getActivatedTooltip(level: number): string {
        return BlzGetAbilityActivatedTooltip(this.id, level)
    }

    public setActivatedTooltip(level: number, value: string): void {
        BlzSetAbilityActivatedTooltip(this.id, value, level)
    }

    public getExtendedTooltip(level: number): string {
        return BlzGetAbilityExtendedTooltip(this.id, level)
    }

    public setExtendedTooltip(level: number, value: string): void {
        BlzSetAbilityExtendedTooltip(this.id, value, level)
    }

    public getTooltip(level: number): string {
        return BlzGetAbilityTooltip(this.id, level)
    }

    public setTooltip(level: number, value: string): void {
        BlzSetAbilityTooltip(this.id, value, level)
    }

    public getResearchTooltip(level: number): string {
        return BlzGetAbilityResearchTooltip(this.id, level)
    }

    public setResearchTooltip(level: number, value: string): void {
        BlzSetAbilityResearchTooltip(this.id, value, level)
    }

    public getResearchExtendedTooltip(level: number): string {
        return BlzGetAbilityResearchExtendedTooltip(this.id, level)
    }

    public setResearchExtendedTooltip(level: number, value: string): void {
        BlzSetAbilityResearchExtendedTooltip(this.id, value, level)
    }

    public getActivatedExtendedTooltip(level: number): string {
        return BlzGetAbilityActivatedExtendedTooltip(this.id, level)
    }

    public setActivatedExtendedTooltip(level: number, value: string): void {
        BlzSetAbilityActivatedExtendedTooltip(this.id, value, level)
    }

    static aspectInferno: Ability
    static shift1Dummy: Ability
    static shift2Dummy: Ability
    static shift3Dummy: Ability
    static shift4Dummy: Ability

    static define(): void {
    
        this.aspectInferno = new Ability({
            four: ID.Ability.InfernoAspect,
            orderId: OrderId.Dreadlordinferno
        })

        this.shift1Dummy = new Ability({
            four: ID.Ability.ItemIllusions,
            orderId: OrderId.Illusion
        })
    }
}