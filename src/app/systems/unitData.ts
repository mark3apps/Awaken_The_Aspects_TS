import { OrderType } from "lib/resources/orderType"
import { Order, Widget, Unit } from "lib/w3ts/index"
import { HeroType } from "../../lib/w3ts/handles/herotype"


export class UnitData {
    public startX: number
    public startY: number
    public destX?: number
    public destY?: number
    public order?: Order
    public orderType?: OrderType
    public targetWidget?: Widget
    public kills = 0
    public assists = 0
    public heroType?: HeroType
    public setAsFlying = false
    public custom = new Map<string, unknown>()


    constructor(unit: Unit) {
        this.startX = unit.x
        this.startY = unit.y
    }
}