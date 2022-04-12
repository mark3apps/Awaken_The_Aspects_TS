/** @format */

import { Base } from '../base/Base'

export interface IBaseGroup {
  bases: Base[]
}

export class BaseGroup {
  bases: Base[]

  constructor(bases?: Base[]) {
    this.bases = bases ?? []
  }

  add(base: Base) {
    this.bases.push(base)
  }

  get count() {
    return this.bases.length
  }
}
