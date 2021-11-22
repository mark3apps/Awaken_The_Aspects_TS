import { EVENT } from "app/systems/events"
import { Coordinate } from "lib/resources/coordinate"
import { Rectangle, Region } from "lib/w3ts/index"
import { Army } from "./army"


interface LocKey {
    [name: number]: Loc
}

interface ForwardMove {
    loc: Loc,
    army: Army
}

export class Loc {
    readonly rect: Rectangle
    readonly region: Region
    forward: ForwardMove[]
    forwardArmy: Army

    public static key: LocKey = []

    constructor(r: Rectangle, forward?: ForwardMove[]) {
        this.rect = r
        this.region = new Region()
        this.region.addRect(r)
        this.forward = forward

        EVENT.unitEntersRegion.registerEnterRegion(this.region.handle, null)
        Loc.key[this.region.id] = this
    }

    public static get(region: Region): LocKey {
        return Loc[region.id]
    }

    public get randomX(): number {
        return this.rect.randomX
    }

    public get randomY(): number {
        return this.rect.randomY
    }

    public get randomCoordinate(): Coordinate {
        return this.rect.randomCoordinate
    }
}
