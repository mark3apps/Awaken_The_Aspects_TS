import { EVENT } from "app/systems/events"
import { CC2Four } from "lib/resources/library"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"
import { Unit } from "lib/w3ts/index"
import { UnitType } from "./unitType"

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
    Aura,
    None
}

export const enum TargetType {
    Point,
    Target,
    None,
    AOE
}


export interface AbilityParameters {
    four: ID.Ability,
    buffFour?: ID.Buff,
    type?: EffectType,
    target?: TargetType,
    orderId?: number,
    orderIdAutoOn?: number,
    orderIdAutoOff?: number,
    orderIdOff?: number,
    unitType?: UnitType,
    permanent?: boolean,
    starting?: boolean,
    ult?: boolean
}

export class Ability {
    readonly four: ID.Ability
    readonly type: EffectType
    readonly target: TargetType

    readonly buffFour?: ID.Buff
    readonly orderId?: OrderId
    readonly orderIdAutoOn?: OrderId
    readonly orderIdAutoOff?: OrderId
    readonly orderIdOff?: OrderId
    readonly unitType?: UnitType
    readonly permanent?: boolean
    readonly starting?: boolean
    readonly ult?: boolean

    private static _key: { [four: string]: AbilityParameters } = {}

    constructor(ability: AbilityParameters) {

        if (ability.type == null) { ability.type = EffectType.None }
        if (ability.target == null) { ability.target = TargetType.None }

        this.four = ability.four
        this.buffFour = ability.buffFour
        this.type = ability.type
        this.target = ability.target
        this.orderId = ability.orderId
        this.orderIdAutoOff = ability.orderIdAutoOff
        this.orderIdAutoOn = ability.orderIdAutoOn
        this.orderIdOff = ability.orderIdOff
        this.unitType = ability.unitType
        this.permanent = ability.permanent
        this.starting = ability.starting
        this.ult= ability.ult
        this.permanent = ability.permanent
        this.starting = ability.starting
        this.ult = ability.ult

        // If ability hasn't been definited before
        if (Ability._key[ability.four] == null) {

            Ability._key[ability.four] = ability

            switch (this.type) {
                case EffectType.Kill:
                    EVENT.unitDies.add(() => {
                        if (Unit.fromHandle(GetKillingUnit()).hasAbility(this)) {
                            this.onEvent()
                        }
                    })
                    break
    
                case EffectType.Death:
                    EVENT.unitDies.add(() => {
                        if (Unit.fromEvent().hasAbility(this)) {
                            this.onEvent()
                        }
                    })
                    break
    
                case EffectType.Attacked:
                    EVENT.unitAttacked.add(() => {
                        if (Unit.fromEvent().hasAbility(this.id)) {
                            this.onEvent()
                        }
                    })
    
                    break
    
                case EffectType.Attacking:
                    EVENT.unitAttacked.add(() => {
                        if (Unit.fromAttackingUnit().hasAbility(this.id)) {
                            this.onEvent()
                        }
                    })
    
                    break
    
                case EffectType.Instant:
                    EVENT.unitSpellEffect.add(() => {
                        if (Ability.fromSpellEvent().id == this.id) {
                            this.onEffect()
                        }
                    })
    
                    break
                default:
                    break
            }
        }
    }

    public static fromSpellEvent(): Ability {
        return Ability.fromFour(CC2Four(GetSpellAbilityId()))
    }

    public static fromFour(four: string): Ability {
        return new Ability(Ability._key[four])
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
}