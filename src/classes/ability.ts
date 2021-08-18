import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"
import { Unit } from "lib/w3ts/index"

export const enum EffectType {
    Channel,
    Instant,
    InstantDelayedEffect,
    ChannelInstantEffect,
    Passive,
    Death,
    Attack,
    Aura,
    None
}

export const enum TargetType {
    Point,
    Target,
    None,
    AOE
}


export interface MapAbility {
    four: ID.Ability,
    buffFour?: ID.Buff,
    type?: EffectType,
    target?: TargetType,
    orderId?: number,
    orderIdAutoOn?: number,
    orderIdAutoOff?: number,
    orderIdOff?: number,
}

export class Ability {
    readonly four: ID.Ability
    readonly baseFour: string
    readonly buffFour: ID.Buff
    readonly type: EffectType
    readonly target: TargetType
    readonly orderId: OrderId
    readonly orderIdAutoOn: OrderId
    readonly orderIdAutoOff: OrderId
    readonly orderIdOff: OrderId

    private static _key: { [four: string]: Ability } = {}

    constructor(ability: MapAbility) {

        if (ability.type == null) { ability.type = EffectType.Instant }
        if (ability.target == null) { ability.target = TargetType.None }

        this.four = ability.four
        this.buffFour = ability.buffFour
        this.type = ability.type
        this.target = ability.target
        this.orderId = ability.orderId
        this.orderIdAutoOff = ability.orderIdAutoOff
        this.orderIdAutoOn = ability.orderIdAutoOn
        this.orderIdOff = ability.orderIdOff

        Ability._key[ability.four] = this


    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public aiCheck(unit: Unit): void {
        // Empty
    }

    public onEffect(): void {
        // Empty
    }

    public onEvent(): void {
        // Empty
    }

    public onChannel(): void {
        // Empty
    }

    public onLoop(): void {
        // Empty
    }

    public onFinish(): void {
        // Empty
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static fromFour(four: string, unit?: never): Ability {
        return Ability._key[four]
    }

    public get id(): number {
        return FourCC(this.four)
    }

    public get buffId(): number {
        return FourCC(this.buffFour)
    }

    public get properName(): string {
        return GetAbilityName(this.id)
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
}