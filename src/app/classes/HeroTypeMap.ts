import { Unit } from 'lib/w3ts'
import { Hero } from './hero'

export class HeroMap {
	static map: WeakMap<handle, Hero> = new Map<handle, Hero>()

	static get (unit: Unit) {
		return (HeroMap.map.has(unit.handle)) ? HeroMap.map.get(unit.handle) : undefined
	}

	static fromEvent () {
		return this.get(Unit.fromEvent())
	}
}
