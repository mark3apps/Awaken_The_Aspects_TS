/**
 * @format
 * @noSelfInFile *
 */

import { Coordinate } from 'app/classes/Coordinate'
import { Logger } from 'app/log'
import { Handle } from './handle'
import { MapPlayer } from './player'
import { Point } from './point'
import { Rectangle } from './rect'
import { Unit } from './unit'
import { Widget } from './widget'

export class Group extends Handle<group> {
  constructor() {
    if (Handle.initFromHandle()) {
      super()
    } else {
      super(CreateGroup())
    }
  }

  public addGroupFast(addGroup: Group) {
    return BlzGroupAddGroupFast(this.handle, addGroup.handle)
  }

  public addUnit(whichUnit: Unit) {
    return GroupAddUnit(this.handle, whichUnit.handle)
  }

  public clear(): void {
    GroupClear(this.handle)
  }

  public destroy(): void {
    DestroyGroup(this.handle)
  }

  public getClosestUnit(coor: Coordinate) {
    let pickedUnit: Unit | undefined
    let distance = 999999999999
    this.for(() => {
      const u = Unit.fromEnum()
      const newDistance = u.distanceTo(coor)
      if (newDistance < distance) {
        pickedUnit = u
        distance = newDistance
      }
    })

    return pickedUnit
  }

  public enumUnitsInRangeXY(x: number, y: number, radius: number, filter?: boolexpr | (() => boolean)) {
    let typedFiler
    if (filter === undefined) {
      typedFiler = null
    } else if (typeof filter === 'function') {
      typedFiler = Filter(filter)
    } else {
      typedFiler = filter
    }
    GroupEnumUnitsInRange(this.handle, x, y, radius, typedFiler)
  }

  public enumUnitsInRange(pos: Unit | Coordinate, radius: number, filter?: boolexpr | (() => boolean)) {
    let typedFiler
    if (filter === undefined) {
      typedFiler = null
    } else if (typeof filter === 'function') {
      typedFiler = Filter(filter)
    } else {
      typedFiler = filter
    }
    GroupEnumUnitsInRange(this.handle, pos.x, pos.y, radius, typedFiler)
  }

  /**
   * @bug Causes irregular behavior when used with large numbers
   */
  public enumUnitsInRangeCounted(x: number, y: number, radius: number, filter: boolexpr | (() => boolean), countLimit: number) {
    GroupEnumUnitsInRangeCounted(this.handle, x, y, radius, typeof filter === 'function' ? Filter(filter) : filter, countLimit)
  }

  public enumUnitsInRangeOfPoint(whichPoint: Point, radius: number, filter: boolexpr | (() => boolean)) {
    GroupEnumUnitsInRangeOfLoc(this.handle, whichPoint.handle, radius, typeof filter === 'function' ? Filter(filter) : filter)
  }

  /**
   * @bug Causes irregular behavior when used with large numbers
   */
  public enumUnitsInRangeOfPointCounted(whichPoint: Point, radius: number, filter: boolexpr | (() => boolean), countLimit: number) {
    GroupEnumUnitsInRangeOfLocCounted(this.handle, whichPoint.handle, radius, typeof filter === 'function' ? Filter(filter) : filter, countLimit)
  }

  public enumUnitsInRect(r: Rectangle, filter?: boolexpr | (() => boolean)) {
    let typedFiler
    if (filter === undefined) {
      typedFiler = null
    } else if (typeof filter === 'function') {
      typedFiler = Filter(filter)
    } else {
      typedFiler = filter
    }
    GroupEnumUnitsInRect(this.handle, r.handle, typedFiler)
  }

  /**
   * @bug Causes irregular behavior when used with large numbers
   */
  public enumUnitsInRectCounted(r: Rectangle, filter: boolexpr | (() => boolean), countLimit: number) {
    GroupEnumUnitsInRectCounted(this.handle, r.handle, typeof filter === 'function' ? Filter(filter) : filter, countLimit)
  }

  /**
   * @note In contrast to other Enum-functions this function enumarates units with locust.
   */
  public enumUnitsOfPlayer(whichPlayer: MapPlayer, filter: boolexpr | (() => boolean)) {
    GroupEnumUnitsOfPlayer(this.handle, whichPlayer.handle, typeof filter === 'function' ? Filter(filter) : filter)
  }

  public enumUnitsOfType(unitName: string, filter: boolexpr | (() => boolean)) {
    GroupEnumUnitsOfType(this.handle, unitName, typeof filter === 'function' ? Filter(filter) : filter)
  }

  /**
   * @bug Causes irregular behavior when used with large numbers
   */
  public enumUnitsOfTypeCounted(unitName: string, filter: boolexpr | (() => boolean), countLimit: number) {
    GroupEnumUnitsOfTypeCounted(this.handle, unitName, typeof filter === 'function' ? Filter(filter) : filter, countLimit)
  }

  public enumUnitsSelected(whichPlayer: MapPlayer, filter?: boolexpr | (() => boolean)) {
    let typedFiler
    if (filter === undefined) {
      typedFiler = null
    } else if (typeof filter === 'function') {
      typedFiler = Filter(filter)
    } else {
      typedFiler = filter
    }

    GroupEnumUnitsSelected(this.handle, whichPlayer.handle, typedFiler)
  }

  public enumUnitsOfTypeID(unitId: string | number) {
    this.enumUnitsInRect(Rectangle.getWorldBounds(), () => {
      return (typeof unitId === 'string' ? FourCC(unitId) : unitId) === Unit.fromFilter().typeId
    })
  }

  public for(callback: () => void) {
    ForGroup(this.handle, callback)
  }

  /**
   * @bug May return `null` even if there are still units in the group.
   * This happens when a unit in the group dies and decays since the group still
   * holds a reference to that unit but that unit is pretty much null.
   * See http://wc3c.net/showthread.php?t=104464.
   */
  public get first() {
    const unit = FirstOfGroup(this.handle)

    return unit === undefined ? undefined : Unit.fromHandle(unit)
  }

  /**
   * This Function removes the Units from the unit group just like a typical
   * first loop would.  Use only if that's what's intended.  The group will
   * still exist afterwards, so if you're finished with the group, be sure to
   * add .destroy() after this runs to clean up the handle.
   * @param callback The function that will be run for ever unit of the group
   */
  public firstLoop(callback: (u: Unit) => void) {
    let u = this.first
    while (u !== undefined) {
      callback(u)

      this.removeUnit(u)
      u = this.first
    }
  }

  public firstLoopCondition(condition: (u: Unit) => boolean, callback: (u: Unit) => void, maxUnits = 99999) {
    let u = this.first
    let units = 0
    while (u != null && units < maxUnits) {
      if (condition(u)) {
        callback(u)
        units += 1
      }

      this.removeUnit(u)
      u = this.first
    }
  }

  public firstMatching(condition: (u: Unit) => boolean, perserve = false) {
    if (perserve) {
      const units = this.getUnits()

      let u = units.pop()
      while (u !== undefined) {
        if (condition(u)) return u
        u = units.pop()
      }
    } else {
      let u = this.first

      while (u != null) {
        if (condition(u)) return u

        this.removeUnit(u)
        u = this.first
      }
    }

    return undefined
  }

  public getRandomUnit(): Unit {
    return Unit.fromHandle(GroupPickRandomUnit(this.handle))
  }

  public get size(): number {
    return BlzGroupGetSize(this.handle)
  }

  public getUnits(): Unit[] {
    const units: Unit[] = []
    this.for(() => units.push(Unit.fromEnum()))
    return units
  }

  public getUnitAt(index: number): Unit {
    return Unit.fromHandle(BlzGroupUnitAt(this.handle, index))
  }

  public hasUnit(whichUnit: Unit): boolean {
    return IsUnitInGroup(whichUnit.handle, this.handle)
  }

  public orderCoords(order: string | number, x: number, y: number): void {
    if (typeof order === 'string') {
      GroupPointOrder(this.handle, order, x, y)
    } else {
      GroupPointOrderById(this.handle, order, x, y)
    }
  }

  public orderImmediate(order: string | number): void {
    if (typeof order === 'string') {
      GroupImmediateOrder(this.handle, order)
    } else {
      GroupImmediateOrderById(this.handle, order)
    }
  }

  public orderPoint(order: string | number, whichPoint: Point): void {
    if (typeof order === 'string') {
      GroupPointOrderLoc(this.handle, order, whichPoint.handle)
    } else {
      GroupPointOrderByIdLoc(this.handle, order, whichPoint.handle)
    }
  }

  public orderTarget(order: string | number, targetWidget: Widget | Unit): void {
    if (typeof order === 'string') {
      GroupTargetOrder(this.handle, order, targetWidget.handle)
    } else {
      GroupTargetOrderById(this.handle, order, targetWidget.handle)
    }
  }

  public removeGroupFast(removeGroup: Group): number {
    return BlzGroupRemoveGroupFast(this.handle, removeGroup.handle)
  }

  public removeUnit(whichUnit: Unit): boolean {
    return GroupRemoveUnit(this.handle, whichUnit.handle)
  }

  public static fromHandle(handle: group): Group {
    return this.getObject(handle)
  }

  public static getEnumUnit(): Unit {
    return Unit.fromHandle(GetEnumUnit())
  }

  public static getFilterUnit(): Unit {
    return Unit.fromHandle(GetFilterUnit())
  }
}
