import { OrderType } from "lib/resources/orderType"
import { OrderId } from "lib/w3ts/globals/order"
import { Unit, Widget } from "lib/w3ts/index"
import { HeroType } from "./herotype"

export class UnitData {
    public startX: number
    public startY: number
    public destX?: number
    public destY?: number
    public order?: OrderId
    public orderType?: OrderType
    public targetWidget?: Widget
    public kills = 0
    public assists = 0
    public heroType?: HeroType
    public unitsAttackedBy?: Unit[] = []
    public custom = new Map<string, unknown>()


    constructor(unit: Unit) {
        this.startX = unit.x
        this.startY = unit.y
    }
}