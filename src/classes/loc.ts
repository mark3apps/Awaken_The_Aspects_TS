import { Rectangle, Region } from "lib/w3ts/index"
import { Army } from "./army"

export class Loc {
    readonly rect: Rectangle;
    readonly region: Region;
    forwardLoc: Loc;
    forwardArmy: Army;


    constructor(r: Rectangle, forwardLoc?: Loc, forwardArmy?: Army) {
        this.rect = r;
        this.region.addRect(r);
        this.forwardLoc = forwardLoc;
        this.forwardArmy = forwardArmy;
    }

    public setForward(loc: Loc, army: Army) {
        this.forwardLoc = loc;
        this.forwardArmy = army;
    }
}
