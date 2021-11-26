import { Coordinate } from "lib/resources/coordinate"
import { Unit } from "lib/w3ts/index"
import { Army } from "./army"
import { Loc } from "./loc"



export class Base {
    army: Army
    baseUnit: Unit
    startLoc: Loc
    endLoc: Loc
    importance: number
    dangerUpdate: boolean
    teleport: boolean
    healing: boolean

    constructor(baseUnit: Unit, army: Army, startLoc: Loc, endLoc: Loc, importance: number, dangerUpdate: boolean, teleport: boolean, healing: boolean) {
        this.army = army
        this.baseUnit = baseUnit
        this.startLoc = startLoc
        this.endLoc = endLoc
        this.importance = importance
        this.dangerUpdate = dangerUpdate
        this.teleport = teleport
        this.healing = healing
    }

    public isAlive(): boolean {
        return this.baseUnit.isAlive()
    }

    public randomStartCoordinate(): Coordinate {
        return this.startLoc.rect.randomCoordinate
    }

    public randomEndCoordinate(): Coordinate {
        return this.endLoc.rect.randomCoordinate
    }



}

