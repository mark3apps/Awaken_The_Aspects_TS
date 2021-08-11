import { OrderId } from "lib/w3ts/globals/order"
import { Unit, Widget } from "lib/w3ts/index"


export namespace UNIT {
    
    const data: UnitData[] = []

    
    export function add(unit: Unit) {
        return data[unit.hid] = new UnitData(unit)
    }

    export function get(unit: Unit) {
        return data[unit.hid]
    }

    export function remove(unit: Unit) {
        data[unit.hid] = null
    }

    export function exists(unit: Unit) {
        return data[unit.hid] != null
    }
}

export class UnitData {
    public startX: number
    public startY: number
    public destX?: number
    public destY?: number
    public order?: OrderId
    public orderType?: OrderType
    public targetWidget?: Widget
    public kills: number
    public assists: number
    public unitsAttackedBy?: Unit[]


    constructor(unit: Unit) {
        this.startX = unit.x
        this.startY = unit.y
        this.kills = 0
        this.assists = 0
        this.unitsAttackedBy = []

    }
}