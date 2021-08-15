/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @noSelfInFile **/

import { UnitData } from "classes/unitData"
import { Coordinate } from "lib/resources/coordinate"
import { OrderType } from "lib/resources/orderType"
import { OrderId } from "../globals/order"
import { Destructable } from "./destructable"
import { Force } from "./force"
import { Group } from "./group"
import { Handle } from "./handle"
import { Item } from "./item"
import { MapPlayer } from "./player"
import { Point } from "./point"
import { Rectangle } from "./rect"
import { Region } from "./region"
import { Sound } from "./sound"
import { Widget } from "./widget"

export class Unit extends Widget {
	public readonly handle!: unit
	public data: UnitData

	private static data: UnitData[] = []
	
	/**
	 * Creates a unit.
	 * @param owner The owner of the unit.
	 * @param unitId The rawcode of the unit.
	 * @param x The x-coordinate of the unit.
	 * @param y The y-coordinate of the unit.
	 * @param face The direction that the unit will be facing in degrees.
	 * @param skinId The skin of the unit.
	 */
	constructor(owner: MapPlayer | number, unitId: number, x: number, y: number, face: number, skinId?: number) {
		if (Handle.initFromHandle()) {
			super()

			if (Unit.dataExists(this) != true) {
				this.data = Unit.addData(this)
			} else {
				this.data = Unit.getData(this)
			}

		} else {
			const p = typeof owner === "number" ? Player(owner) : owner.handle
			super(skinId ? BlzCreateUnitWithSkin(p, unitId, x, y, face, skinId) : CreateUnit(p, unitId, x, y, face))

			// Set default starting data
			this.data = Unit.addData(this)
		}
	}


	// STATIC METHODS



	private static addData(unit: Unit): UnitData {
		return Unit.data[unit.hid] = new UnitData(unit)
	}

	private static getData(unit: Unit): UnitData {
		return Unit.data[unit.hid]
	}

	private static removeData(unit: Unit): void {
		Unit.data[unit.hid] = null
	}

	private static dataExists(unit: Unit): boolean {
		return Unit.data[unit.hid] != null
	}


	// INSTANCE METHODS


	/**
	 * Sets a unit's acquire range.  This is the value that a unit uses to choose targets to
	 * engage with.  Note that this is not the attack range.  When acquisition range is
	 * greater than attack range, the unit will attempt to move towards acquired targets, and then attack.
	 * Setting acquisition range lower than attack range in the object editor limits the
	 * unit's attack range to the acquisition range, but changing a unit's acquisition range
	 * with this native does not change its attack range, nor the value displayed in the UI.
	 *
	 * @note It is a myth that reducing acquire range with this native can limit a unit's attack range.
	 */

	public get hid(): string {
		return "H" + this.id
	}

	public set acquireRange(value: number) {
		SetUnitAcquireRange(this.handle, value)
	}

	public get acquireRange(): number {
		return GetUnitAcquireRange(this.handle)
	}

	public get agility(): number {
		return GetHeroAgi(this.handle, false)
	}

	public set agility(value: number) {
		SetHeroAgi(this.handle, value, true)
	}

	public get armor(): number {
		return BlzGetUnitArmor(this.handle)
	}

	public set armor(armorAmount: number) {
		BlzSetUnitArmor(this.handle, armorAmount)
	}

	public set canSleep(flag: boolean) {
		UnitAddSleep(this.handle, flag)
	}

	public get canSleep(): boolean {
		return UnitCanSleep(this.handle)
	}

	public get collisionSize(): number {
		return BlzGetUnitCollisionSize(this.handle)
	}

	public set color(whichColor: playercolor) {
		SetUnitColor(this.handle, whichColor)
	}

	public get currentOrder(): OrderId {
		return GetUnitCurrentOrder(this.handle)
	}

	public get defaultAcquireRange(): number {
		return GetUnitDefaultAcquireRange(this.handle)
	}

	public get defaultFlyHeight(): number {
		return GetUnitDefaultFlyHeight(this.handle)
	}

	public get defaultMoveSpeed(): number {
		return GetUnitDefaultMoveSpeed(this.handle)
	}

	/**
	 * Returns a unit's default propulsion window angle in degrees.
	 * @note This function is the odd case in the asymmetric prop window API, since the
	 * other prop window natives use radians.
	 */
	public get defaultPropWindow(): number {
		return GetUnitDefaultPropWindow(this.handle)
	}

	public get defaultTurnSpeed(): number {
		return GetUnitDefaultTurnSpeed(this.handle)
	}

	public get experience(): number {
		return GetHeroXP(this.handle)
	}

	public set experience(newXpVal: number) {
		SetHeroXP(this.handle, newXpVal, true)
	}

	public set facing(value: number) {
		SetUnitFacing(this.handle, value)
	}

	/**
	 * @returns The units facing in degrees.
	 */
	public get facing(): number {
		return GetUnitFacing(this.handle)
	}

	public get foodMade(): number {
		return GetUnitFoodMade(this.handle)
	}

	public get foodUsed(): number {
		return GetUnitFoodUsed(this.handle)
	}

	public get ignoreAlarmToggled() {
		return UnitIgnoreAlarmToggled(this.handle)
	}

	public get intelligence(): number {
		return GetHeroInt(this.handle, false)
	}

	public set intelligence(value: number) {
		SetHeroInt(this.handle, value, true)
	}

	public get inventorySize(): number {
		return UnitInventorySize(this.handle)
	}

	/**
	 * Renders a unit invulnerable/lifts that specific invulnerability.
	 *
	 * @note The native seems to employ the `'Avul'` ability, which is defined in the default AbilityData.slk.
	 * If there is no `'Avul'` defined, this will crash the game.
	 */
	public set invulnerable(flag: boolean) {
		SetUnitInvulnerable(this.handle, flag)
	}

	public get invulnerable() {
		return BlzIsUnitInvulnerable(this.handle)
	}

	public get level(): number {
		return GetUnitLevel(this.handle)
	}

	public get localZ(): number {
		return BlzGetLocalUnitZ(this.handle)
	}

	public get mana(): number {
		return this.getState(UNIT_STATE_MANA)
	}

	public set mana(value: number) {
		this.setState(UNIT_STATE_MANA, value)
	}

	public get maxLife(): number {
		return BlzGetUnitMaxHP(this.handle)
	}

	public set maxLife(value: number) {
		BlzSetUnitMaxHP(this.handle, value)
	}

	public get maxMana(): number {
		return BlzGetUnitMaxMana(this.handle)
	}

	public set maxMana(value: number) {
		BlzSetUnitMaxMana(this.handle, value)
	}

	public set moveSpeed(value: number) {
		SetUnitMoveSpeed(this.handle, value)
	}

	public get moveSpeed(): number {
		return GetUnitMoveSpeed(this.handle)
	}

	/**
	 * @async
	 */
	get name() {
		return GetUnitName(this.handle)
	}

	set name(value: string) {
		BlzSetUnitName(this.handle, value)
	}

	public set nameProper(value: string) {
		BlzSetHeroProperName(this.handle, value)
	}

	/**
	 * Returns the hero's "Proper Name", which is the name displayed above the level bar.
	 *
	 * @note Will return 'null' on non-hero units.
	 */
	public get nameProper() {
		return GetHeroProperName(this.handle)
	}

	public set owner(whichPlayer: MapPlayer) {
		SetUnitOwner(this.handle, whichPlayer.handle, true)
	}

	public get owner(): MapPlayer {
		return MapPlayer.fromHandle(GetOwningPlayer(this.handle))
	}

	/**
	 * Pauses a unit. A paused unit has the following properties:
	 * 1. Buffs/effects are suspended
	 * 2. Orders are stored when paused and fired on unpause
	 * 3. The paused unit does not accept powerups. `addItem` returns true but the item is not picked up
	 */
	public set paused(flag: boolean) {
		PauseUnit(this.handle, flag)
	}

	/**
	 * @returns true if the unit is paused
	 */
	public get paused() {
		return IsUnitPaused(this.handle)
	}

	/**
	 * @bug If the unit is loaded into a zeppelin this will not return the position
	 * of the zeppelin but the last position of the unit before it was loaded into
	 * the zeppelin.
	 */
	public get point(): Point {
		return Point.fromHandle(GetUnitLoc(this.handle))
	}

	public set point(whichPoint: Point) {
		SetUnitPositionLoc(this.handle, whichPoint.handle)
	}

	public get pointValue(): number {
		return GetUnitPointValue(this.handle)
	}

	/**
	 * Sets a unit's propulsion window to the specified angle (in radians). 
	 * The propulsion window determines at which facing angle difference to the target 
	 * command's location (move, attack, patrol, smart) a unit will begin to move if 
	 * movement is required to fulfil the command, or if it will turn without movement. 
	 * A propulsion window of 0 makes the unit unable to move at all. 
	 * A propulsion window of 180 will force it to start moving as soon as the command 
	 * is given (if movement is required). In practice, this means that setting a 
	 * unit's prop window to 0 will prevent it from attacking. 
	 * 
	 * http://www.hiveworkshop.com/forums/2391397-post20.html
  
	 * @param newPropWindowAngle The propulsion window angle to assign. Should be in radians.
	 */
	public set propWindow(newPropWindowAngle: number) {
		SetUnitPropWindow(this.handle, newPropWindowAngle)
	}

	/**
	 * Returns a unit's propulsion window angle in radians.
	 */
	public get propWindow(): number {
		return GetUnitPropWindow(this.handle)
	}

	public get race(): race {
		return GetUnitRace(this.handle)
	}

	public get rallyDestructable(): Destructable {
		return Destructable.fromHandle(GetUnitRallyDestructable(this.handle))
	}

	public get rallyPoint(): Point {
		return Point.fromHandle(GetUnitRallyPoint(this.handle))
	}

	public get rallyUnit(): Unit {
		return Unit.fromHandle(GetUnitRallyUnit(this.handle))
	}

	public set resourceAmount(amount: number) {
		SetResourceAmount(this.handle, amount)
	}

	public get resourceAmount(): number {
		return GetResourceAmount(this.handle)
	}

	public get selectable() {
		return BlzIsUnitSelectable(this.handle)
	}

	public set selectionScale(scale: number) {
		this.setField(UNIT_RF_SELECTION_SCALE, scale)
	}

	public get selectionScale(): number {
		const result = this.getField(UNIT_RF_SELECTION_SCALE)
		return typeof result === "number" ? result : 0
	}

	public set show(flag: boolean) {
		ShowUnit(this.handle, flag)
	}

	public get show() {
		return !IsUnitHidden(this.handle)
	}

	public get skin() {
		return BlzGetUnitSkin(this.handle)
	}

	public set skin(skinId: number) {
		BlzSetUnitSkin(this.handle, skinId)
	}

	/**
	 * Returns the units available skill points.
	 */
	public get skillPoints(): number {
		return GetHeroSkillPoints(this.handle)
	}

	/**
	 * Adds the amount to the units available skill points. Calling with a negative
	 * number reduces the skill points by that amount.
	 * Returns false if the amount of available skill points is already zero and
	 * if it's called with any non-positive number.
	 * Returns true in any other case.
	 * @note If `skillPointDelta` is greater than the amount of skillpoints the hero
	 * actually can spend (like 9 for three 3-level abilities) only that amount will
	 * be added. Negative `skillPointDelta` works as expected.
	 */
	public set skillPoints(skillPointDelta: number) {
		UnitModifySkillPoints(this.handle, skillPointDelta)
	}

	public get sleeping() {
		return UnitIsSleeping(this.handle)
	}

	public get strength(): number {
		return GetHeroStr(this.handle, false)
	}

	public set strength(value: number) {
		SetHeroStr(this.handle, value, true)
	}

	public set turnSpeed(value: number) {
		SetUnitTurnSpeed(this.handle, value)
	}

	public get turnSpeed(): number {
		return GetUnitTurnSpeed(this.handle)
	}

	public get typeId(): number {
		return GetUnitTypeId(this.handle)
	}

	public get userData(): number {
		return GetUnitUserData(this.handle)
	}

	/**
	 * Sets a single custom integer for a unit.
	 *
	 * @note This value is not used by any standard mechanisms in Warcraft III.
	 */
	public set userData(value: number) {
		SetUnitUserData(this.handle, value)
	}

	public set waygateActive(flag: boolean) {
		WaygateActivate(this.handle, flag)
	}

	public get waygateActive() {
		return WaygateIsActive(this.handle)
	}

	/**
	 * @bug If the unit is loaded into a zeppelin this will not return the position
	 * of the zeppelin but the last position of the unit before it was loaded into
	 * the zeppelin.
	 */
	public get x(): number {
		return GetUnitX(this.handle)
	}

	/**
	 * @note If the unit has movementspeed of zero the unit will be moved but the model of the unit will not move.
	 * @note This does not cancel orders of the unit. `setPosition` does cancel orders.
	 */
	public set x(value: number) {
		SetUnitX(this.handle, value)
	}

	public get y(): number {
		return GetUnitY(this.handle)
	}

	/**
	 * @note If the unit has movementspeed of zero the unit will be moved but the model of the unit will not move.
	 * @note This does not cancel orders of the unit. `setPosition` does cancel orders.
	 */
	public set y(value: number) {
		SetUnitY(this.handle, value)
	}

	public get z(): number {
		return BlzGetUnitZ(this.handle)
	}

	public addAbility(abilityId: number) {
		return UnitAddAbility(this.handle, abilityId)
	}

	public addAnimationProps(animProperties: string, add: boolean) {
		AddUnitAnimationProperties(this.handle, animProperties, add)
	}

	/**
	 * Adds the input value of experience to the hero unit specified.
	 *
	 * If the experience added exceeds the amount required for the hero to gain a level,
	 * then it will force the unit to gain a level and the remaining experience will spill over for the next level.
	 *
	 * @bug Adding negative value to experience will decrease it
	 * by the stated value, but won't lower the level even if the experience value
	 * after deduction is lower than the lower bound of the experience required to get
	 * the stated level.
	 * @bug If the value will become lower than zero, the experience won't be negative, instead of it it'll be equal
	 * to `4294967296+(supposed_negative_experience_value)`.
	 * @param xpToAdd The amount of experience to add to the hero unit.
	 * @param showEyeCandy If the boolean input is true, then the hero-level-gain
	 * effect will be shown if the hero gains a level from the added experience.
	 */
	public addExperience(xpToAdd: number, showEyeCandy: boolean): void {
		AddHeroXP(this.handle, xpToAdd, showEyeCandy)
	}

	public addIndicator(red: number, blue: number, green: number, alpha: number): void {
		UnitAddIndicator(this.handle, red, blue, green, alpha)
	}

	public addItem(whichItem: Item): boolean {
		return UnitAddItem(this.handle, whichItem.handle)
	}

	public addItemById(itemId: number): Item {
		return Item.fromHandle(UnitAddItemById(this.handle, itemId))
	}

	public addItemToSlotById(itemId: number, itemSlot: number): boolean {
		return UnitAddItemToSlotById(this.handle, itemId, itemSlot)
	}

	public addItemToStock(itemId: number, currentStock: number, stockMax: number): void {
		AddItemToStock(this.handle, itemId, currentStock, stockMax)
	}

	/**
	 * Adds the amount more gold to the whichUnit gold mine.
	 *
	 * @bug If the value after adding negative amount will be less than zero, then it
	 * will display negative resource amount, but if some peasant or peon will try to
	 * gather resources from such a mine, he will bring back 0 gold and the mine will
	 * be auto-destroyed.
	 * @param amount The amount of resources to add to the unit.
	 */
	public addResourceAmount(amount: number): void {
		AddResourceAmount(this.handle, amount)
	}

	public addSleepPerm(add: boolean): void {
		UnitAddSleepPerm(this.handle, add)
	}

	public addType(whichUnitType: unittype): boolean {
		return UnitAddType(this.handle, whichUnitType)
	}

	public addUnitToStock(unitId: number, currentStock: number, stockMax: number): void {
		AddUnitToStock(this.handle, unitId, currentStock, stockMax)
	}

	public applyTimedLife(buffId: number, duration: number): void {
		UnitApplyTimedLife(this.handle, buffId, duration)
	}

	public attachSound(sound: Sound): void {
		AttachSoundToUnit(sound.handle, this.handle)
	}

	public cancelTimedLife(): void {
		BlzUnitCancelTimedLife(this.handle)
	}

	public canSleepPerm(): boolean {
		return UnitCanSleepPerm(this.handle)
	}

	public countBuffs(removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): number {
		return UnitCountBuffsEx(this.handle, removePositive, removeNegative, magic, physical, timedLife, aura, autoDispel)
	}

	public damageAt(
		delay: number,
		radius: number,
		x: number,
		y: number,
		amount: number,
		attack: boolean,
		ranged: boolean,
		attackType: attacktype,
		damageType: damagetype,
		weaponType: weapontype
	): boolean {
		return UnitDamagePoint(this.handle, delay, radius, x, y, amount, attack, ranged, attackType, damageType, weaponType)
	}

	/**
	 * Deals damage to target widget from a source unit.
	 *
	 * @note For some insight about the different configurations of the different types see [this post](http://www.wc3c.net/showpost.php?p=1030046&postcount=19).
	 * @param target The target being damaged.
	 * @param amount How much damage is being dealt.
	 * @param attack Consider the damage dealt as being an attack.
	 * @param ranged Consider the damage dealt as being from a ranged source.
	 * @param attackType
	 * @param damageType
	 * @param weaponType
	 */
	public damageTarget(target: widget, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean {
		return UnitDamageTarget(this.handle, target, amount, attack, ranged, attackType, damageType, weaponType)
	}

	/**
	 * Decreases the level of a unit's ability by 1. The level will not go below 1.
	 * @param abilCode The four digit rawcode representation of the ability.
	 * @returns The new ability level.
	 */
	public decAbilityLevel(abilCode: number): number {
		return DecUnitAbilityLevel(this.handle, abilCode)
	}

	/**
	 * Instantly removes the unit from the game.
	 */
	public destroy(): void {
		RemoveUnit(this.handle)
	}

	public disableAbility(abilId: number | string, flag: boolean, hideUI: boolean): void {
		typeof abilId === "string" ? BlzUnitDisableAbility(this.handle, FourCC(abilId), flag, hideUI) : BlzUnitDisableAbility(this.handle, abilId, flag, hideUI)
	}

	public dropItem(whichItem: Item, x: number, y: number): boolean {
		return UnitDropItemPoint(this.handle, whichItem.handle, x, y)
	}

	public dropItemFromSlot(whichItem: Item, slot: number): boolean {
		return UnitDropItemSlot(this.handle, whichItem.handle, slot)
	}

	public dropItemTarget(whichItem: Item, target: Widget /* | Unit | Item | Destructable*/): boolean {
		return UnitDropItemTarget(this.handle, whichItem.handle, target.handle)
	}

	public endAbilityCooldown(abilCode: number | string): void {
		typeof abilCode === "string" ? BlzEndUnitAbilityCooldown(this.handle, FourCC(abilCode)) : BlzEndUnitAbilityCooldown(this.handle, abilCode)
	}

	public getAbility(abilId: number | string): ability {
		return typeof abilId === "string" ? BlzGetUnitAbility(this.handle, FourCC(abilId)) : BlzGetUnitAbility(this.handle, abilId)
	}

	public getAbilityByIndex(index: number): ability {
		return BlzGetUnitAbilityByIndex(this.handle, index)
	}

	public getAbilityCooldown(abilId: number, level: number): number {
		return BlzGetUnitAbilityCooldown(this.handle, abilId, level)
	}

	public getAbilityCooldownRemaining(abilId: number): number {
		return BlzGetUnitAbilityCooldownRemaining(this.handle, abilId)
	}

	/**
	 * Returns the level of the ability for the unit.
	 * @note This function is **not** zero indexed.
	 */
	public getAbilityLevel(abilCode: number): number {
		return GetUnitAbilityLevel(this.handle, abilCode)
	}

	public getAbilityManaCost(abilId: number, level: number): number {
		return BlzGetUnitAbilityManaCost(this.handle, abilId, level)
	}

	public getAgility(includeBonuses: boolean): number {
		return GetHeroAgi(this.handle, includeBonuses)
	}

	public getAttackCooldown(weaponIndex: number): number {
		return BlzGetUnitAttackCooldown(this.handle, weaponIndex)
	}

	public getBaseDamage(weaponIndex: number): number {
		return BlzGetUnitBaseDamage(this.handle, weaponIndex)
	}

	public getDiceNumber(weaponIndex: number) {
		return BlzGetUnitDiceNumber(this.handle, weaponIndex)
	}

	public getDiceSides(weaponIndex: number) {
		return BlzGetUnitDiceSides(this.handle, weaponIndex)
	}

	public getField(field: unitbooleanfield | unitintegerfield | unitrealfield | unitstringfield): (boolean | number | string) {
		const fieldType = field.toString().substr(0, field.toString().indexOf(":"))

		switch (fieldType) {
			case "unitbooleanfield": {
				const fieldBool: unitbooleanfield = field as unitbooleanfield

				return BlzGetUnitBooleanField(this.handle, fieldBool)
			}
			case "unitintegerfield": {
				const fieldInt: unitintegerfield = field as unitintegerfield

				return BlzGetUnitIntegerField(this.handle, fieldInt)
			}
			case "unitrealfield": {
				const fieldReal: unitrealfield = field as unitrealfield

				return BlzGetUnitRealField(this.handle, fieldReal)
			}
			case "unitstringfield": {
				const fieldString: unitstringfield = field as unitstringfield

				return BlzGetUnitStringField(this.handle, fieldString)
			}
			default:
				return 0
		}
	}

	public getflyHeight() {
		return GetUnitFlyHeight(this.handle)
	}

	public getHeroLevel() {
		return GetHeroLevel(this.handle)
	}

	public getIgnoreAlarm(flag: boolean) {
		return UnitIgnoreAlarm(this.handle, flag)
	}

	public getIntelligence(includeBonuses: boolean) {
		return GetHeroInt(this.handle, includeBonuses)
	}

	public getItemInSlot(slot: number) {
		return Item.fromHandle(UnitItemInSlot(this.handle, slot))
	}

	public getState(whichUnitState: unitstate) {
		return GetUnitState(this.handle, whichUnitState)
	}

	public getStrength(includeBonuses: boolean) {
		return GetHeroStr(this.handle, includeBonuses)
	}

	public hasBuffs(removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean) {
		return UnitHasBuffsEx(this.handle, removePositive, removeNegative, magic, physical, timedLife, aura, autoDispel)
	}

	public hasItem(whichItem: Item) {
		return UnitHasItem(this.handle, whichItem.handle)
	}

	public hideAbility(abilId: number) {
		BlzUnitHideAbility(this.handle, abilId, true)
	}

	public showAbility(abilId: number) {
		BlzUnitHideAbility(this.handle, abilId, false)
	}

	/**
	 * Increases the level of a unit's ability by 1.
	 * @param abilCode The four digit rawcode representation of the ability.
	 * @returns The new ability level.
	 *
	 * @note `incAbilityLevel` can increase an abilities level to maxlevel+1. On maxlevel+1 all ability fields are 0.
	 *
	 * http://www.wc3c.net/showthread.php?p=1029039#post1029039
	 * http://www.hiveworkshop.com/forums/lab-715/silenceex-everything-you-dont-know-about-silence-274351/.
	 */
	public incAbilityLevel(abilCode: number) {
		return IncUnitAbilityLevel(this.handle, abilCode)
	}

	public inForce(whichForce: Force) {
		return IsUnitInForce(this.handle, whichForce.handle)
	}

	public inGroup(whichGroup: Group) {
		return IsUnitInGroup(this.handle, whichGroup.handle)
	}

	public inRegion(whichRegion: Region): boolean {
		return IsUnitInRegion(whichRegion.handle, this.handle)
	}

	public inRect(whichRect: Rectangle): boolean {
		return RectContainsUnit(whichRect.handle, this.handle)
	}

	/**
	 * Check if a unit is within range of a point. Collision size is taken into account.
	 */
	public inRange(x: number, y: number, distance: number) {
		return IsUnitInRangeXY(this.handle, x, y, distance)
	}

	/**
	 * Check if a unit is within range of a point. Collision size is taken into account.
	 */
	public inRangeOfPoint(whichPoint: Point, distance: number) {
		return IsUnitInRangeLoc(this.handle, whichPoint.handle, distance)
	}

	/**
	 * Check if a unit is within range of a another unit. Collision size is taken into account.
	 */
	public inRangeOfUnit(otherUnit: Unit, distance: number) {
		return IsUnitInRange(this.handle, otherUnit.handle, distance)
	}

	public interruptAttack() {
		BlzUnitInterruptAttack(this.handle)
	}

	public inTransport(whichTransport: Unit) {
		return IsUnitInTransport(this.handle, whichTransport.handle)
	}

	public isAlive(): boolean {
		return UnitAlive(this.handle)
	}

	public isAlly(whichHandle: MapPlayer | Unit) {
		return whichHandle instanceof MapPlayer ? IsUnitAlly(this.handle, whichHandle.handle) : IsUnitAlly(this.handle, whichHandle.owner.handle)
	}

	public isEnemy(whichHandle: MapPlayer | Unit) {
		return whichHandle instanceof MapPlayer ? IsUnitEnemy(this.handle, whichHandle.handle) : IsUnitEnemy(this.handle, whichHandle.owner.handle)
	}

	public get isExperienceSuspended() {
		return IsSuspendedXP(this.handle)
	}

	public isFogged(whichPlayer: MapPlayer) {
		return IsUnitFogged(this.handle, whichPlayer.handle)
	}

	public get isHero() {
		return IsHeroUnitId(this.typeId)
	}

	public get isIllusion() {
		return IsUnitIllusion(this.handle)
	}

	public get isLoaded() {
		return IsUnitLoaded(this.handle)
	}

	public isMasked(whichPlayer: MapPlayer) {
		return IsUnitMasked(this.handle, whichPlayer.handle)
	}

	public isSelected(whichPlayer: MapPlayer) {
		return IsUnitSelected(this.handle, whichPlayer.handle)
	}

	public issueBuildOrder(unit: string | number, x: number, y: number) {
		return typeof unit === "string" ? IssueBuildOrder(this.handle, unit, x, y) : IssueBuildOrderById(this.handle, unit, x, y)
	}

	public issueImmediateOrder(order: string | OrderId) {
		return typeof order === "string" ? IssueImmediateOrder(this.handle, order) : IssueImmediateOrderById(this.handle, order)
	}

	public issueInstantOrderAt(order: string | OrderId, x: number, y: number, instantTargetWidget: Widget) {
		return typeof order === "string"
			? IssueInstantPointOrder(this.handle, order, x, y, instantTargetWidget.handle)
			: IssueInstantPointOrderById(this.handle, order, x, y, instantTargetWidget.handle)
	}

	public issueInstantTargetOrder(order: string | OrderId, targetWidget: Widget, instantTargetWidget: Widget) {
		return typeof order === "string"
			? IssueInstantTargetOrder(this.handle, order, targetWidget.handle, instantTargetWidget.handle)
			: IssueInstantTargetOrderById(this.handle, order, targetWidget.handle, instantTargetWidget.handle)
	}

	public issueOrderAt(order: string | OrderId, x: number, y: number) {
		this.data.destX = x
		this.data.destY = y
		this.data.orderType = OrderType.Point
		this.data.order = typeof order === "string" ? String2OrderIdBJ(order) : order
		return typeof order === "string" ? IssuePointOrder(this.handle, order, x, y) : IssuePointOrderById(this.handle, order, x, y)
	}

	public issueOrderAtCoordinate(order: string | OrderId, dest: Coordinate) {
		this.data.destX = dest.x
		this.data.destY = dest.y
		this.data.orderType = OrderType.Point
		this.data.order = typeof order === "string" ? String2OrderIdBJ(order) : order
		return typeof order === "string" ? IssuePointOrder(this.handle, order, dest.x, dest.y) : IssuePointOrderById(this.handle, order, dest.x, dest.y)
	}

	public issuePointOrder(order: string | OrderId, whichPoint: Point) {
		return typeof order === "string" ? IssuePointOrderLoc(this.handle, order, whichPoint.handle) : IssuePointOrderByIdLoc(this.handle, order, whichPoint.handle)
	}

	public issueTargetOrder(order: string | OrderId, targetWidget: Widget) {
		this.data.orderType = OrderType.Target
		this.data.order = typeof order === "string" ? String2OrderIdBJ(order) : order
		this.data.targetWidget = targetWidget
		return typeof order === "string" ? IssueTargetOrder(this.handle, order, targetWidget.handle) : IssueTargetOrderById(this.handle, order, targetWidget.handle)
	}

	public issueLastOrder() {
		if (this.data.orderType == OrderType.Point) {
			this.issueOrderAt(this.data.order, this.data.destX, this.data.destY)
			return true
		} else if (this.data.orderType == OrderType.Target) {
			this.issueTargetOrder(this.data.order, this.data.targetWidget)
			return true
		} else {
			return false
		}
	}

	/**
	 * @note Useless. Use operator == instead.
	 */
	public isUnit(whichSpecifiedUnit: Unit) {
		return IsUnit(this.handle, whichSpecifiedUnit.handle)
	}

	/**
	 * @note This native returns a boolean, which when typecasted to integer might be greater than 1. It's probably implemented via a bitset.
	 * @note In past patches this native bugged when used in conditionfuncs.
	 * The fix back then was to compare with true (`==true`).
	 * I cannot reproduce the faulty behaviour in patch 1.27 so this is only a note.
	 * @param whichUnitType
	 */
	public isUnitType(whichUnitType: unittype) {
		return IsUnitType(this.handle, whichUnitType)
	}

	public get isDead() {
		return IsUnitType(this.handle, UNIT_TYPE_DEAD)
	}

	public get isStructure() {
		return IsUnitType(this.handle, UNIT_TYPE_STRUCTURE)
	}

	public get isFlying() {
		return IsUnitType(this.handle, UNIT_TYPE_FLYING)
	}

	public get isGround() {
		return IsUnitType(this.handle, UNIT_TYPE_GROUND)
	}

	public get isAttacksFlying() {
		return IsUnitType(this.handle, UNIT_TYPE_ATTACKS_FLYING)
	}

	public get isAttacksGround() {
		return IsUnitType(this.handle, UNIT_TYPE_ATTACKS_GROUND)
	}

	public get isMeleeAttacker() {
		return IsUnitType(this.handle, UNIT_TYPE_MELEE_ATTACKER)
	}

	public get isRangedAttacker() {
		return IsUnitType(this.handle, UNIT_TYPE_RANGED_ATTACKER)
	}

	public get isGiant() {
		return IsUnitType(this.handle, UNIT_TYPE_GIANT)
	}

	public get isSummoned() {
		return IsUnitType(this.handle, UNIT_TYPE_SUMMONED)
	}

	public get isStunned() {
		return IsUnitType(this.handle, UNIT_TYPE_STUNNED)
	}

	public get isPlagued() {
		return IsUnitType(this.handle, UNIT_TYPE_PLAGUED)
	}

	public get isSnared() {
		return IsUnitType(this.handle, UNIT_TYPE_SNARED)
	}

	public get isUndead() {
		return IsUnitType(this.handle, UNIT_TYPE_UNDEAD)
	}

	public get isMechanical() {
		return IsUnitType(this.handle, UNIT_TYPE_MECHANICAL)
	}

	public get isPeon() {
		return IsUnitType(this.handle, UNIT_TYPE_PEON)
	}

	public get isSapper() {
		return IsUnitType(this.handle, UNIT_TYPE_SAPPER)
	}

	public get isAncient() {
		return IsUnitType(this.handle, UNIT_TYPE_ANCIENT)
	}

	public get isTauren() {
		return IsUnitType(this.handle, UNIT_TYPE_TAUREN)
	}

	public get isPoisoned() {
		return IsUnitType(this.handle, UNIT_TYPE_POISONED)
	}

	public get isPolymorphed() {
		return IsUnitType(this.handle, UNIT_TYPE_POLYMORPHED)
	}

	public get isSleeping() {
		return IsUnitType(this.handle, UNIT_TYPE_SLEEPING)
	}

	public get isResistant() {
		return IsUnitType(this.handle, UNIT_TYPE_RESISTANT)
	}

	public get isEthereal() {
		return IsUnitType(this.handle, UNIT_TYPE_ETHEREAL)
	}

	public get isMagicImmune() {
		return IsUnitType(this.handle, UNIT_TYPE_MAGIC_IMMUNE)
	}

	public isVisible(whichPlayer: MapPlayer) {
		return IsUnitVisible(this.handle, whichPlayer.handle)
	}



	/**
	 * Kills the unit.
	 */
	public kill() {
		KillUnit(this.handle)
	}

	/**
	 * Locks a unit's bone to face the target until ResetUnitLookAt is called.
	 *
	 * The offset coordinates ( X, Y, Z ) are taken from the target's origin.
	 * The bones will lock to the lookAtTarget, offset by those coordinates. You can't
	 * have both the head and the chest locked to the target at the same time.
	 * @param whichBone The bone to lock onto the target. The engine only supports
	 * locking the head and the chest. To lock the head, you can put in any input
	 * except a null string. To lock the chest, the string must start with `"bone_chest"`.
	 * All leading spaces are ignored, it is case insensitive, and anything after the
	 * first non-leading space will be ignored.
	 * @param lookAtTargetThe bone will be locked to face this unit.
	 * @param offsetX The x-offset from lookAtTarget's origin point.
	 * @param offsetY The y-offset from lookAtTarget's origin point.
	 * @param offsetZ The z-offset from lookAtTarget's origin point (this already factors in the terrain Z).
	 * @note The parameter `whichBone` can only move the head bones and the chest bones.
	 * All other input will default to the head bone. However, the function only looks
	 * for the helper named `"Bone_Head"` (or `"Bone_Chest"`) in the MDL, so you can just
	 * rename a helper so that it will move that set of bones instead.
	 * @note SetUnitLookAt is affected by animation speed and blend time.
	 * @note [How to instantly set a unit's facing](http://www.wc3c.net/showthread.php?t=105830)
	 */
	public lookAt(whichBone: string, lookAtTarget: Unit, offsetX: number, offsetY: number, offsetZ: number) {
		SetUnitLookAt(this.handle, whichBone, lookAtTarget.handle, offsetX, offsetY, offsetZ)
	}

	/**
	 * This native is used to keep abilities when morphing units
	 */
	public makeAbilityPermanent(permanent: boolean, abilityId: number) {
		UnitMakeAbilityPermanent(this.handle, permanent, abilityId)
	}

	public modifySkillPoints(skillPointDelta: number) {
		return UnitModifySkillPoints(this.handle, skillPointDelta)
	}

	public pauseEx(flag: boolean) {
		BlzPauseUnitEx(this.handle, flag)
	}

	public pauseTimedLife(flag: boolean) {
		UnitPauseTimedLife(this.handle, flag)
	}

	public queueAnimation(whichAnimation: string) {
		QueueUnitAnimation(this.handle, whichAnimation)
	}

	public recycleGuardPosition() {
		RecycleGuardPosition(this.handle)
	}

	public removeAbility(abilityId: number) {
		return UnitRemoveAbility(this.handle, abilityId)
	}

	public removeBuffs(removePositive: boolean, removeNegative: boolean) {
		UnitRemoveBuffs(this.handle, removePositive, removeNegative)
	}

	public removeBuffsEx(removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean) {
		UnitRemoveBuffsEx(this.handle, removePositive, removeNegative, magic, physical, timedLife, aura, autoDispel)
	}

	public removeGuardPosition() {
		RemoveGuardPosition(this.handle)
	}

	/**
	 * The item is removed from the Hero and placed on the ground at the Hero's feet.
	 * @param whichItem The item to remove.
	 */
	public removeItem(whichItem: Item) {
		UnitRemoveItem(this.handle, whichItem.handle)
	}

	/**
	 * If an item exists in the given slot, it is removed from the Hero and placed on
	 * the ground at the Hero's feed
	 * @param itemSlot
	 */
	public removeItemFromSlot(itemSlot: number) {
		return Item.fromHandle(UnitRemoveItemFromSlot(this.handle, itemSlot))
	}

	public removeItemFromStock(itemId: number) {
		RemoveItemFromStock(this.handle, itemId)
	}

	public removeType(whichUnitType: unittype) {
		return UnitAddType(this.handle, whichUnitType)
	}

	public removeUnitFromStock(itemId: number) {
		RemoveUnitFromStock(this.handle, itemId)
	}

	public resetCooldown() {
		UnitResetCooldown(this.handle)
	}

	/**
	 * Unlocks the bone oriented by `lookAt`, allowing it to move in accordance to the unit's regular animations.
	 */
	public resetLookAt() {
		ResetUnitLookAt(this.handle)
	}

	public revive(x: number, y: number, doEyecandy: boolean) {
		return ReviveHero(this.handle, x, y, doEyecandy)
	}

	public reviveAtPoint(whichPoint: Point, doEyecandy: boolean) {
		return ReviveHeroLoc(this.handle, whichPoint.handle, doEyecandy)
	}

	public select(flag: boolean) {
		SelectUnit(this.handle, flag)
	}

	public selectSkill(abilCode: number) {
		SelectHeroSkill(this.handle, abilCode)
	}

	public setAbilityCooldown(abilId: number, level: number, cooldown: number) {
		BlzSetUnitAbilityCooldown(this.handle, abilId, level, cooldown)
	}

	public setAbilityLevel(abilCode: number, level: number) {
		return SetUnitAbilityLevel(this.handle, abilCode, level)
	}

	public setAbilityManaCost(abilId: number, level: number, manaCost: number) {
		BlzSetUnitAbilityManaCost(this.handle, abilId, level, manaCost)
	}

	public setAgility(value: number, permanent: boolean) {
		SetHeroAgi(this.handle, value, permanent)
	}

	public setAnimation(whichAnimation: string | number) {
		if (typeof whichAnimation === "string") {
			SetUnitAnimation(this.handle, whichAnimation)
		} else {
			SetUnitAnimationByIndex(this.handle, whichAnimation)
		}
	}

	public setAnimationWithRarity(whichAnimation: string, rarity: raritycontrol) {
		SetUnitAnimationWithRarity(this.handle, whichAnimation, rarity)
	}

	public setAttackCooldown(cooldown: number, weaponIndex: number) {
		BlzSetUnitAttackCooldown(this.handle, cooldown, weaponIndex)
	}

	public setBaseDamage(baseDamage: number, weaponIndex: number) {
		BlzSetUnitBaseDamage(this.handle, baseDamage, weaponIndex)
	}

	public setBlendTime(timeScale: number) {
		SetUnitBlendTime(this.handle, timeScale)
	}

	public setConstructionProgress(constructionPercentage: number) {
		UnitSetConstructionProgress(this.handle, constructionPercentage)
	}

	public setCreepGuard(creepGuard: boolean) {
		SetUnitCreepGuard(this.handle, creepGuard)
	}

	public setDiceNumber(diceNumber: number, weaponIndex: number) {
		BlzSetUnitDiceNumber(this.handle, diceNumber, weaponIndex)
	}

	public setDiceSides(diceSides: number, weaponIndex: number) {
		BlzSetUnitDiceSides(this.handle, diceSides, weaponIndex)
	}

	public setExperience(newXpVal: number, showEyeCandy: boolean) {
		SetHeroXP(this.handle, newXpVal, showEyeCandy)
	}

	public setExploded(exploded: boolean) {
		SetUnitExploded(this.handle, exploded)
	}

	public setFacingEx(facingAngle: number) {
		BlzSetUnitFacingEx(this.handle, facingAngle)
	}

	public setField(field: unitbooleanfield | unitintegerfield | unitrealfield | unitstringfield, value: boolean | number | string) {
		const fieldType = field.toString().substr(0, field.toString().indexOf(":"))

		if (fieldType === "unitbooleanfield" && typeof value === "boolean") {
			return BlzSetUnitBooleanField(this.handle, field as unitbooleanfield, value)
		} else if (fieldType === "unitintegerfield" && typeof value === "number") {
			return BlzSetUnitIntegerField(this.handle, field as unitintegerfield, value)
		} else if (fieldType === "unitrealfield" && typeof value === "number") {
			return BlzSetUnitRealField(this.handle, field as unitrealfield, value)
		} else if (fieldType === "unitstringfield" && typeof value === "string") {
			return BlzSetUnitStringField(this.handle, field as unitstringfield, value)
		}

		return false
	}

	public setflyHeight(value: number, rate: number) {
		SetUnitFlyHeight(this.handle, value, rate)
	}

	public setHeroLevel(level: number, showEyeCandy: boolean) {
		SetHeroLevel(this.handle, level, showEyeCandy)
	}

	public setIntelligence(value: number, permanent: boolean) {
		SetHeroInt(this.handle, value, permanent)
	}

	public setItemTypeSlots(slots: number) {
		SetItemTypeSlots(this.handle, slots)
	}

	public setOwner(whichPlayer: MapPlayer, changeColor: boolean) {
		SetUnitOwner(this.handle, whichPlayer.handle, changeColor)
	}

	public setPathing(flag: boolean) {
		SetUnitPathing(this.handle, flag)
	}

	/**
	 * @note This cancels the orders of the unit. If you want to move a unit without canceling its orders set `x`/`y`.
	 */
	public setPosition(x: number, y: number) {
		SetUnitPosition(this.handle, x, y)
	}

	public setRescuable(byWhichPlayer: MapPlayer, flag: boolean) {
		SetUnitRescuable(this.handle, byWhichPlayer.handle, flag)
	}

	public setRescueRange(range: number) {
		SetUnitRescueRange(this.handle, range)
	}

	/**
	 * @bug Only takes scaleX into account and uses scaleX for all three dimensions.
	 * @param scaleX This is actually the scale for *all* dimensions
	 * @param scaleY This parameter is not taken into account
	 * @param scaleZ This parameter is not taken into account
	 */
	public setScale(scaleX: number, scaleY: number, scaleZ: number) {
		SetUnitScale(this.handle, scaleX, scaleY, scaleZ)
	}

	public setState(whichUnitState: unitstate, newVal: number) {
		SetUnitState(this.handle, whichUnitState, newVal)
	}

	public setStrength(value: number, permanent: boolean) {
		SetHeroStr(this.handle, value, permanent)
	}

	public setTimeScale(timeScale: number) {
		SetUnitTimeScale(this.handle, timeScale)
	}

	public setUnitAttackCooldown(cooldown: number, weaponIndex: number) {
		BlzSetUnitAttackCooldown(this.handle, cooldown, weaponIndex)
	}

	public setUnitTypeSlots(slots: number) {
		SetUnitTypeSlots(this.handle, slots)
	}

	public setUpgradeProgress(upgradePercentage: number) {
		UnitSetUpgradeProgress(this.handle, upgradePercentage)
	}

	public setUseAltIcon(flag: boolean) {
		UnitSetUsesAltIcon(this.handle, flag)
	}

	public setUseFood(useFood: boolean) {
		SetUnitUseFood(this.handle, useFood)
	}

	/**
	 * Sets the unit's color to the color defined by (red,green,blue,alpha).
	 * @param red An integer from 0-255 determining the amount of red color.
	 * @param green An integer from 0-255 determining the amount of green color.
	 * @param blue An integer from 0-255 determining the amount of blue color.
	 * @param alpha An integer from 0-255 determining the amount of alpha color.
	 */
	public setVertexColor(red: number, green: number, blue: number, alpha: number) {
		SetUnitVertexColor(this.handle, red, green, blue, alpha)
	}

	public shareVision(whichPlayer: MapPlayer, share: boolean) {
		UnitShareVision(this.handle, whichPlayer.handle, share)
	}

	public showTeamGlow(show: boolean) {
		BlzShowUnitTeamGlow(this.handle, show)
	}

	public startAbilityCooldown(abilCode: number, cooldown: number) {
		BlzStartUnitAbilityCooldown(this.handle, abilCode, cooldown)
	}

	public stripLevels(howManyLevels: number) {
		return UnitStripHeroLevel(this.handle, howManyLevels)
	}

	public suspendDecay(suspend: boolean) {
		UnitSuspendDecay(this.handle, suspend)
	}

	public suspendExperience(flag: boolean) {
		SuspendHeroXP(this.handle, flag)
	}

	public useItem(whichItem: Item) {
		return UnitUseItem(this.handle, whichItem.handle)
	}

	public useItemAt(whichItem: Item, x: number, y: number) {
		return UnitUseItemPoint(this.handle, whichItem.handle, x, y)
	}

	public useItemTarget(whichItem: Item, target: Widget) {
		return UnitUseItemTarget(this.handle, whichItem.handle, target.handle)
	}

	public wakeUp() {
		UnitWakeUp(this.handle)
	}

	public waygateGetDestinationX() {
		return WaygateGetDestinationX(this.handle)
	}

	public waygateGetDestinationY() {
		return WaygateGetDestinationY(this.handle)
	}

	public waygateSetDestination(x: number, y: number) {
		WaygateSetDestination(this.handle, x, y)
	}

	public static foodMadeByType(unitId: number) {
		return GetFoodMade(unitId)
	}

	public static foodUsedByType(unitId: number) {
		return GetFoodUsed(unitId)
	}

	public static fromEnum() {
		return this.fromHandle(GetEnumUnit())
	}

	public static fromEvent() {
		return this.fromHandle(GetTriggerUnit())
	}

	public static fromFilter() {
		return this.fromHandle(GetFilterUnit())
	}

	public static fromAttackingUnit() {
		return this.fromHandle(GetAttacker())
	}

	public static fromHandle(handle: unit): Unit {
		return this.getObject(handle)
	}

	public static getPointValueByType(unitType: number) {
		return GetUnitPointValueByType(unitType)
	}

	public static isUnitIdHero(unitId: number) {
		return IsHeroUnitId(unitId)
	}

	public static isUnitIdType(unitId: number, whichUnitType: unittype) {
		return IsUnitIdType(unitId, whichUnitType)
	}
}
