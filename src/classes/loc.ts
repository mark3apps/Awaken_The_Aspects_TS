import { TRIGGER } from "app/definitions/triggers"
import { Rectangle, Region } from "lib/w3ts/index"
import { Army } from "./army"


interface LocKey {
    [name: number]: Loc  
}

export class Loc {
    readonly rect: Rectangle;
    readonly region: Region;
    forwardLoc: Loc;
    forwardArmy: Army;

    public static key: LocKey = []

    constructor(r: Rectangle, forwardLoc?: Loc, forwardArmy?: Army) {
        this.rect = r;
        this.region = new Region()
        this.region.addRect(r);
        this.forwardLoc = forwardLoc;
        this.forwardArmy = forwardArmy;

        TRIGGER.unitEntersRegion.registerEnterRegion(this.region.handle, null)
        Loc.key[this.region.id] = this
    }

    public static get(region: Region) {
        return Loc[region.id]
    }

    public setForward(loc: Loc, army: Army) {
        this.forwardLoc = loc;
        this.forwardArmy = army;
    }
}
