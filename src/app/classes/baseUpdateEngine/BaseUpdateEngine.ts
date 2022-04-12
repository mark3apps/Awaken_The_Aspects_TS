/** @format */

import { Timer } from 'lib/w3ts'
import { BaseGroup } from '../baseGroup/BaseGroup'

export class BaseUpdateEngine {
  private static instance: BaseUpdateEngine

  static getInstance() {
    if (!BaseUpdateEngine.instance) BaseUpdateEngine.instance = new BaseUpdateEngine()
    return BaseUpdateEngine.instance
  }

  baseGroups: BaseGroup[]
  baseGroupsPing: BaseGroup[]
  iteratePing: boolean

  timer: Timer
  private _interval: number

  constructor() {
    this._interval = 0.1
    this.baseGroups = []
    this.baseGroupsPing = []
    this.iteratePing = false

    this.timer = new Timer()
    this.start()
  }

  get interval() {
    return this._interval
  }

  set interval(value: number) {
    this._interval = value

    this.timer.pause()
    this.timer.start(this._interval, true, () => {
      this.iterate()
    })
  }

  add = (baseGroup: BaseGroup) => {
    this.baseGroups.push(baseGroup)
  }

  start = () => {
    this.timer.start(this.interval, true, () => {
      this.iterate()
    })
  }

  iterate = () => {
    let main
    let backup

    if (this.iteratePing) {
      main = this.baseGroups
      backup = this.baseGroupsPing
    } else {
      main = this.baseGroupsPing
      backup = this.baseGroups
    }

    const baseGroup = main.pop()

    if (baseGroup) {
      backup.unshift(baseGroup)

      baseGroup.bases.forEach((base) => {
        if (base.visible && base) base.updateCapital()
      })
    } else {
      this.iteratePing = !this.iteratePing
    }
  }
}
