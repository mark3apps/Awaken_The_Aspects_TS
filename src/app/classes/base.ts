import { Unit } from "w3ts/index"
import { Army } from "./army"
import { Loc } from "./loc"

export class Base {
    army: Army
    baseCondition: Unit
    startLoc: Loc
    endLoc: Loc
    importance: number
    dangerUpdate: boolean
    teleport: boolean
    healing: boolean

    constructor(baseUnit: Unit, army: Army, startLoc: Loc, endLoc: Loc, importance: number, dangerUpdate: boolean, teleport : boolean, healing: boolean) {
        this.army = army
        this.baseCondition = this.baseCondition
        this.startLoc = startLoc
        this.endLoc = endLoc
        this.importance = importance
        this.dangerUpdate = dangerUpdate
        this.teleport = teleport
        this.healing = healing
    }

    public isAlive() {
        return this.baseCondition.isAlive()
    }

    public randomStartXY(){
        let x = this.startLoc.rect.randomX
        let y = this.startLoc.rect.randomY
        return [x, y]
    }

    public randomEndXY() {
        let x = this.endLoc.rect.randomX
        let y = this.endLoc.rect.randomY
        return [x, y]
    }
}