import { AbilityField } from 'lib/resources/fields'
import { Coordinate, Unit, Widget } from 'lib/w3ts/index'
import { AbilityType } from './abilityType'
import { AbilityTypeMap } from "./abilityTypeMap"

export class Ability {
	public readonly unit!: Unit
	public readonly ability!: AbilityType

	constructor (unit: Unit, ability: AbilityType) {
		this.ability = ability
		this.unit = unit

		if (!unit.hasAbility(ability)) UnitAddAbility(this.unit.handle, this.ability.id)

		this.unit.data.abilities.set(this.ability.four, this)
		this.unit.data.abilityFours.push(this.ability.four)
		this.onCreate()
	}

	get handle () {
		return BlzGetUnitAbility(this.unit.handle, this.ability.id)
	}

	// Blank "On" Trigger
	onCreate = () => { }
	onEffect = () => { }
	onEffectEnd = () => { }

	public isCastable (): boolean {
		return (this.unit.isAlive() && this.unit.mana > this.manaCost && this.cooldownRemaining === 0 && this.level > 0)
	}

	public incLevel () {
		IncUnitAbilityLevel(this.unit.handle, this.ability.id)
	}

	public decLevel () {
		DecUnitAbilityLevel(this.unit.handle, this.ability.id)
	}

	public hasBuff (): boolean {
		return this.ability.buffFour ? this.unit.hasBuff(this.ability.buffFour) : false
	}

	public castImmediate (): void {
		if (this.ability.orderId) this.unit.issueImmediateOrder(this.ability.orderId)
	}

	public castTarget (targetWidget: Widget): void {
		if (this.ability.orderId) this.unit.issueTargetOrder(this.ability.orderId, targetWidget)
	}

	public cast (dest: Coordinate): void {
		if (this.ability.orderId) this.unit.issueOrderAtCoordinate(this.ability.orderId, dest)
	}

	public isCasting (): boolean {
		return this.unit.currentOrder === this.ability.orderId
	}

	public set permanent (value: boolean) {
		UnitMakeAbilityPermanent(this.unit.handle, value, this.ability.id)
	}

	// Easy getters from Ability Class
	public get activatedTooltip (): string {
		return BlzGetAbilityActivatedTooltip(this.ability.id, this.level - 1)
	}

	public set activatedTooltip (value: string) {
		BlzSetAbilityActivatedTooltip(this.ability.id, value, this.level - 1)
	}

	public get extendedTooltip (): string {
		return this.getLevelField(AbilityField.TOOLTIP_NORMAL_EXTENDED, this.level - 1) as string
	}

	public set extendedTooltip (value: string) {
		this.setLevelField(AbilityField.TOOLTIP_NORMAL_EXTENDED, value, this.level - 1)
	}

	public get tooltip (): string {
		return this.getLevelField(AbilityField.TOOLTIP_NORMAL, this.level - 1) as string
	}

	public set tooltip (value: string) {
		this.setLevelField(AbilityField.TOOLTIP_NORMAL, value, this.level - 1)
	}

	public get researchTooltip (): string {
		return BlzGetAbilityResearchTooltip(this.ability.id, this.level - 1)
	}

	public set researchTooltip (value: string) {
		BlzSetAbilityResearchTooltip(this.ability.id, value, this.level - 1)
	}

	public get researchExtendedTooltip (): string {
		return BlzGetAbilityResearchExtendedTooltip(this.ability.id, this.level - 1)
	}

	public set researchExtendedTooltip (value: string) {
		BlzSetAbilityResearchExtendedTooltip(this.ability.id, value, this.level - 1)
	}

	public get activatedExtendedTooltip (): string {
		return BlzGetAbilityActivatedExtendedTooltip(this.ability.id, this.level - 1)
	}

	public set activatedExtendedTooltip (value: string) {
		BlzSetAbilityActivatedExtendedTooltip(this.ability.id, value, this.level - 1)
	}

	// Getters and Setters unique

	public get areaOfEffect (): number {
		return this.getLevelField(ABILITY_RLF_AREA_OF_EFFECT) as number
	}

	public set areaOfEffect (value: number) {
		this.setLevelField(ABILITY_RLF_AREA_OF_EFFECT, value)
	}

	public get normalDuration (): number {
		return this.getLevelField(ABILITY_RLF_DURATION_NORMAL) as number
	}

	public set normalDuration (value: number) {
		this.setLevelField(AbilityField.DURATION_NORMAL, value)
	}

	public get heroDuration (): number {
		return this.getLevelField(ABILITY_RLF_DURATION_HERO) as number
	}

	public set heroDuration (value: number) {
		this.setLevelField(AbilityField.DURATION_HERO, value)
	}

	public get level (): number {
		return GetUnitAbilityLevel(this.unit.handle, this.ability.id)
	}

	public set level (level: number) {
		SetUnitAbilityLevel(this.unit.handle, this.ability.id, level)
	}

	public set name (value: string) {
		this.setField(ABILITY_SF_NAME, value)
	}

	public get name (): string {
		return this.getField(ABILITY_SF_NAME) as string
	}

	public get levels (): number {
		return this.getField(ABILITY_IF_LEVELS) as number
	}

	public get levelSkip (): number {
		return this.getField(ABILITY_IF_LEVEL_SKIP_REQUIREMENT) as number
	}

	public set levelSkip (value: number) {
		this.setField(ABILITY_IF_LEVEL_SKIP_REQUIREMENT, value)
	}

	public get requiredLevel (): number {
		return this.getField(ABILITY_IF_REQUIRED_LEVEL) as number
	}

	public set requiredLevel (value: number) {
		this.setField(ABILITY_IF_REQUIRED_LEVEL, value)
	}

	public get isHeroAbility (): boolean {
		return this.getField(ABILITY_BF_HERO_ABILITY) as boolean
	}

	public get isItemAbility (): boolean {
		return this.getField(ABILITY_BF_ITEM_ABILITY) as boolean
	}

	public get cooldown (): number {
		return BlzGetUnitAbilityCooldown(this.unit.handle, this.ability.id, this.level - 1)
	}

	public set cooldown (value: number) {
		BlzSetUnitAbilityCooldown(this.unit.handle, this.ability.id, this.level - 1, value)
	}

	public get cooldownRemaining (): number {
		return BlzGetUnitAbilityCooldownRemaining(this.unit.handle, this.ability.id)
	}

	public set cooldownRemaining (value: number) {
		BlzStartUnitAbilityCooldown(this.unit.handle, this.ability.id, value)
	}

	public resetCooldown (): void {
		BlzEndUnitAbilityCooldown(this.unit.handle, this.ability.id)
	}

	public get manaCost (): number {
		return this.getLevelField(ABILITY_ILF_MANA_COST) as number
	}

	public set manaCost (value: number) {
		this.setLevelField(ABILITY_ILF_MANA_COST, value)
	}

	public get manaCostAllLevels (): number[] {
		return this.getLevelFieldArray(ABILITY_ILF_MANA_COST) as number[]
	}

	public set manaCostAllLevels (value: number[]) {
		this.setLevelFieldArray(ABILITY_ILF_MANA_COST, value)
	}

	public get castTime (): number {
		return this.getLevelField(ABILITY_RLF_CASTING_TIME) as number
	}

	public set castTime (value: number) {
		this.setLevelField(ABILITY_RLF_CASTING_TIME, value)
	}

	public get castRange (): number {
		return this.getLevelField(ABILITY_RLF_CAST_RANGE) as number
	}

	public get castTimeAllLevels (): number[] {
		return this.getLevelFieldArray(ABILITY_RLF_CASTING_TIME) as number[]
	}

	public set castTimeAllLevels (value: number[]) {
		this.setLevelFieldArray(ABILITY_RLF_CASTING_TIME, value)
	}

	public hide () {
		BlzUnitHideAbility(this.unit.handle, this.ability.id, true)
	}

	public show () {
		BlzUnitHideAbility(this.unit.handle, this.ability.id, false)
	}

	public enable (hideUI: boolean = false) {
		BlzUnitDisableAbility(this.unit.handle, this.ability.id, false, hideUI)
	}

	public disable (hideUI: boolean = true) {
		BlzUnitDisableAbility(this.unit.handle, this.ability.id, true, hideUI)
	}

	/**
	 * Runs an function through all of the levels of a abilitylevelfield item
	 * @param field
	 * @param expression this will be run on every level of the abilitylevelfield item
	 */
	public forEachLevelField (field: abilitybooleanlevelfield | abilitystringlevelfield | abilityreallevelfield | abilityintegerlevelfield, expression: (value: string | number | boolean) => string | number | boolean): void {
		for (let i = 0; i < this.levels; i++) {
			this.setLevelField(field, expression(this.getLevelField(field, i)), i)
		}
	}

	public setLevelFieldArray (field: abilitybooleanlevelfield | abilitystringlevelfield | abilityreallevelfield | abilityintegerlevelfield, value: string[] | number[] | boolean[]): void {
		for (let i = 0; i < this.levels; i++) {
			this.setLevelField(field, value[i])
		}
	}

	/**
	 * Returns all levels of an abilitylevelfield as an array
	 * @param field
	 * @returns an array of items from the abilitylevelfield for all levels
	 */
	public getLevelFieldArray (field: abilitybooleanlevelfield | abilitystringlevelfield | abilityreallevelfield | abilityintegerlevelfield): (string | number | boolean)[] {
		const fields = []

		for (let i = 0; i < this.levels; i++) {
			fields.push(this.getLevelField(field, i))
		}

		return fields
	}

	public setField (field: abilitybooleanfield | abilitystringfield | abilityrealfield | abilityintegerfield, value: boolean | number | string): boolean {
		const fieldType = field.toString().substr(0, field.toString().indexOf(':'))

		if (fieldType === 'abilitybooleanfield' && typeof value === 'boolean') {
			return BlzSetAbilityBooleanField(this.handle, field as abilitybooleanfield, value)
		} else if (fieldType === 'abilityintegerfield' && typeof value === 'number') {
			return BlzSetAbilityIntegerField(this.handle, field as abilityintegerfield, value)
		} else if (fieldType === 'abilityrealfield' && typeof value === 'number') {
			return BlzSetAbilityRealField(this.handle, field as abilityrealfield, value)
		} else if (fieldType === 'abilitystringfield' && typeof value === 'string') {
			return BlzSetAbilityStringField(this.handle, field as abilitystringfield, value)
		}

		return false
	}

	public setLevelField (field: abilitybooleanlevelfield | abilitystringlevelfield | abilityreallevelfield | abilityintegerlevelfield, value: boolean | number | string, level: number = this.level): boolean {
		const fieldType = field.toString().substr(0, field.toString().indexOf(':'))

		if (fieldType === 'abilitybooleanlevelfield' && typeof value === 'boolean') {
			return BlzSetAbilityBooleanLevelField(this.handle, field as abilitybooleanlevelfield, level, value)
		} else if (fieldType === 'abilityintegerlevelfield' && typeof value === 'number') {
			return BlzSetAbilityIntegerLevelField(this.handle, field as abilityintegerlevelfield, level, value)
		} else if (fieldType === 'abilityreallevelfield' && typeof value === 'number') {
			return BlzSetAbilityRealLevelField(this.handle, field as abilityreallevelfield, level, value)
		} else if (fieldType === 'abilitystringlevelfield' && typeof value === 'string') {
			return BlzSetAbilityStringLevelField(this.handle, field as abilitystringlevelfield, level, value)
		}

		return false
	}

	public getField (field: abilitybooleanfield | abilitystringfield | abilityrealfield | abilityintegerfield): (boolean | number | string) {
		const fieldType = field.toString().substr(0, field.toString().indexOf(':'))

		switch (fieldType) {
			case 'abilitybooleanfield': {
				const fieldBool = field as abilitybooleanfield

				return BlzGetAbilityBooleanField(this.handle, fieldBool) as boolean
			}
			case 'abilityintegerfield': {
				const fieldInt = field as abilityintegerfield

				return BlzGetAbilityIntegerField(this.handle, fieldInt) as number
			}
			case 'abilityrealfield': {
				const fieldReal = field as abilityrealfield

				return BlzGetAbilityRealField(this.handle, fieldReal) as number
			}
			case 'abilitystringfield': {
				const fieldString = field as abilitystringfield

				return BlzGetAbilityStringField(this.handle, fieldString) as string
			}
			default:
				return 0
		}
	}

	public getLevelField (field: abilitybooleanlevelfield | abilitystringlevelfield | abilityreallevelfield | abilityintegerlevelfield, level: number = this.level): (boolean | number | string) {
		const fieldType = field.toString().substr(0, field.toString().indexOf(':'))
		level -= 1

		switch (fieldType) {
			case 'abilitybooleanlevelfield': {
				const fieldBool = field as abilitybooleanlevelfield

				return BlzGetAbilityBooleanLevelField(this.handle, fieldBool, level) as boolean
			}
			case 'abilityintegerlevelfield': {
				const fieldInt = field as abilityintegerlevelfield

				return BlzGetAbilityIntegerLevelField(this.handle, fieldInt, level) as number
			}
			case 'abilityreallevelfield': {
				const fieldReal = field as abilityreallevelfield

				return BlzGetAbilityRealLevelField(this.handle, fieldReal, level) as number
			}
			case 'abilitystringlevelfield': {
				const fieldString = field as abilitystringlevelfield

				return BlzGetAbilityStringLevelField(this.handle, fieldString, level) as string
			}
			default:
				return 0
		}
	}

	updateTooltip () {
		//
	}

	updateExtendedTooltop () {
		//
	}

	updateTooltips () {
		this.updateTooltip()
		this.updateExtendedTooltop()
	}

	// Static Methods

	static fromCast (): Ability {
		return this.getAbility(Unit.fromCaster(), AbilityTypeMap.fromSpellEvent())
	}

	static get (unit: Unit, abilityType: AbilityType): Ability {
		return this.getAbility(unit, abilityType)
	}

	protected static getAbility (unit: Unit, abilityType?: AbilityType) {
		if (abilityType) {
			const ability = unit.data.abilities.get(abilityType.four)
			return ability ?? new this(unit, abilityType)
		}
		return undefined
	}
}
