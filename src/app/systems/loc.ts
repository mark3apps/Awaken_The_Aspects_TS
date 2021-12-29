import { Position } from 'app/classes/position'
import { Rectangle, Region } from 'lib/w3ts/index'
import { Army } from './army'
import { ForwardMove } from './ForwardMove'
import { ILocDepend } from './ILocDepend'
import { ILoc } from './ILoc'

export class Loc {
	readonly rect: Rectangle
	readonly region: Region
	forward: ForwardMove[]
	forwardArmy?: Army

	public static map: Map<number, Loc> = new Map()

	constructor (depend: ILocDepend, loc: ILoc) {
		this.rect = loc.rect
		this.region = new Region()
		this.region.addRect(loc.rect)
		this.forward = loc.forward ?? []

		depend.triggers.unitEntersRegion.registerEnterRegion(this.region.handle, null)
		Loc.map.set(this.region.id, this)
	}

	public static get (region: Region) {
		return Loc.map.get(region.id)
	}

	public get randomX (): number {
		return this.rect.randomX
	}

	public get randomY (): number {
		return this.rect.randomY
	}

	public get randomPosition (): Position {
		return this.rect.randomPosition
	}
}
