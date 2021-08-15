import { MapAbility } from "lib/resources/mapAbilities"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"


export class Ability {

    public readonly mapAbility!: MapAbility

    private static _key: { [four: string]: Ability } = {}

    constructor(ability: MapAbility) {

        this.mapAbility = ability
        Ability._key[ability.four] = this
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static fromFour(four: string, unit?: never): Ability {
        return Ability._key[four]
    }

    public get id(): number {
        return FourCC(this.mapAbility.four)
    }

    public get four(): string {
        return this.mapAbility.four
    }

    public get orderId(): OrderId {
        return this.mapAbility.orderId
    }

    public get instant(): boolean {
        return this.mapAbility.instant
    }

    public get baseId(): ID.Ability | null {
        return this.mapAbility.baseFour
    }

    public get orderIdOff(): OrderId | null {
        return this.mapAbility.orderIdOff
    }

    public get orderIdAutoOff(): OrderId | null {
        return this.mapAbility.orderIdAutoOff
    }

    public get orderIdAutoOn(): OrderId | null {
        return this.mapAbility.orderIdAutoOn
    }

    public get buffFour(): string {
        return this.mapAbility.buffFour
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