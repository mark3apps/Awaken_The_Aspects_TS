/** @noSelfInFile **/

import { Position } from "app/classes/position"
import { Handle } from "./handle"
import { Point } from "./point"

export class Rectangle extends Handle<rect> {

  constructor(minX: number, minY: number, maxX: number, maxY: number) {
    if (Handle.initFromHandle()) {
      super()
    } else {
      super(Rect(minX, minY, maxX, maxY))
    }
  }

  public get centerX(): number {
    return GetRectCenterX(this.handle)
  }

  public get centerY(): number {
    return GetRectCenterY(this.handle)
  }

  public get centerPosition(): Position {
    return new Position(this.centerX, this.centerY)
  }

  public get maxX(): number {
    return GetRectMaxX(this.handle)
  }

  public get maxY(): number {
    return GetRectMaxY(this.handle)
  }

  public get minX(): number {
    return GetRectMinX(this.handle)
  }

  public get minY(): number {
    return GetRectMinY(this.handle)
  }

  public get randomX(): number {
    return GetRandomReal(this.minX, this.maxX)
  }

  public get randomY(): number {
    return GetRandomReal(this.minY, this.maxY)
  }

  public get randomPosition(): Position {
    return new Position(this.randomX, this.randomY)
  }

  public destroy(): void {
    RemoveRect(this.handle)
  }

  public enumDestructables(filter: boolexpr | (() => boolean), actionFunc: () => void): void {
    EnumDestructablesInRect(this.handle, typeof filter === "function" ? Filter(filter) : filter, actionFunc)
  }

  public enumItems(filter: boolexpr | (() => boolean), actionFunc: () => void): void {
    EnumItemsInRect(this.handle, typeof filter === "function" ? Filter(filter) : filter, actionFunc)
  }

  public move(newCenterX: number, newCenterY: number): void {
    MoveRectTo(this.handle, newCenterX, newCenterY)
  }

  public movePoint(newCenterPoint: Point): void {
    MoveRectToLoc(this.handle, newCenterPoint.handle)
  }

  public setRect(minX: number, minY: number, maxX: number, maxY: number): void {
    SetRect(this.handle, minX, minY, maxX, maxY)
  }

  public setRectFromPoint(min: Point, max: Point): void {
    SetRectFromLoc(this.handle, min.handle, max.handle)
  }

  public static fromHandle(handle: rect): Rectangle {
    return this.getObject(handle)
  }

  public static fromPoint(min: Point, max: Point): Rectangle {
    return this.fromHandle(RectFromLoc(min.handle, max.handle))
  }

  // Returns full map bounds, including unplayable borders, in world coordinates
  public static getWorldBounds(): Rectangle {
    return Rectangle.fromHandle(GetWorldBounds())
  }

  public static getPlayableMap(): Rectangle {
    return Rectangle.fromHandle(GetPlayableMapRect())
  }

  static EventTL1: Rectangle
  static EventTL2: Rectangle
  static EventTL3: Rectangle

  static EventTR1: Rectangle
  static EventTR2: Rectangle
  static EventTR3: Rectangle

  static EventBL1: Rectangle
  static EventBL2: Rectangle
  static EventBL3: Rectangle

  static EventBR1: Rectangle
  static EventBR2: Rectangle
  static EventBR3: Rectangle
  static EventCenter: Rectangle

  static define(): void {
    Rectangle.EventTL1 = Rectangle.fromHandle(gg_rct_EventTL1)
    Rectangle.EventTL2 = Rectangle.fromHandle(gg_rct_EventTL2)
    Rectangle.EventTL3 = Rectangle.fromHandle(gg_rct_EventTL3)

    Rectangle.EventTR1 = Rectangle.fromHandle(gg_rct_EventTR1)
    Rectangle.EventTR2 = Rectangle.fromHandle(gg_rct_EventTR2)
    Rectangle.EventTR3 = Rectangle.fromHandle(gg_rct_EventTR3)

    Rectangle.EventBL1 = Rectangle.fromHandle(gg_rct_EventBL1)
    Rectangle.EventBL2 = Rectangle.fromHandle(gg_rct_EventBL2)
    Rectangle.EventBL3 = Rectangle.fromHandle(gg_rct_EventBL3)

    Rectangle.EventBR1 = Rectangle.fromHandle(gg_rct_EventBR1)
    Rectangle.EventBR2 = Rectangle.fromHandle(gg_rct_EventBR2)
    Rectangle.EventBR3 = Rectangle.fromHandle(gg_rct_EventBR3)

    Rectangle.EventCenter = Rectangle.fromHandle(gg_rct_EventCenter)
  }

}
