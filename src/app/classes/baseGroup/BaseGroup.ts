/** @format */

import { Base } from '../base/Base'
import { BaseUpdateEngine } from '../baseUpdateEngine/BaseUpdateEngine'

export interface IBaseGroup {
  bases: Base[]
}

export class BaseGroup {
  bases: Base[]

  constructor(bases?: Base[]) {
    this.bases = bases ?? []

    BaseUpdateEngine.getInstance().add(this)
  }

  add(base: Base) {
    this.bases.push(base)
  }

  get count() {
    return this.bases.length
  }
}
