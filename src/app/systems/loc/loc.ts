/** @format */

import { Force, Rectangle, Region } from 'lib/w3ts/index'
import { ILocForward } from './interfaces/ILocForward'
import { ILocDepend } from './interfaces/ILocDepend'
import { ILoc } from './interfaces/ILoc'

export class Loc {
  readonly rects: Rectangle[]
  readonly region: Region
  thruOrder: ILocForward[]
  thruForce?: Force

  static map: Map<number, Loc> = new Map()

  constructor(depend: ILocDepend, loc: ILoc) {
    this.rects = loc.rects

    this.region = new Region()
    this.rects.forEach((element) => {
      this.region.addRect(element)
    })

    this.thruOrder = loc.thruOrder ?? []

    depend.triggers.unitEntersRegion.registerEnterRegion(this.region.handle, null)
    Loc.map.set(this.region.id, this)
  }

  static get(region: Region) {
    return Loc.map.get(region.id)
  }

  addRect = (rect: Rectangle) => {
    this.rects.push(rect)
    this.region.addRect(rect)
  }

  get randomRect() {
    return this.rects[math.floor(math.random() * this.rects.length)]
  }

  get randomX(): number {
    return this.randomRect.randomX
  }

  get randomY(): number {
    return this.randomRect.randomY
  }

  get randomCoordinate() {
    return this.randomRect.randomCoordinate
  }
}
