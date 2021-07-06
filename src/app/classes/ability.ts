/** @noSelfInFile **/

import { OrderId } from "w3ts/globals/order";

export class Ability {

    public name: string
    public id: number
    public four: string
    public orderId: OrderId
    public instant: boolean
    public buff: string
    public buffId: number
    public castTime: any
    public properName: string

    constructor(name: string, four: string, orderId: OrderId = 0, instant = true, buff = "", castTime: Array<number> = []) {

        this.name = name
        this.four = four
        this.id = FourCC(four)
        this.orderId = orderId
        this.instant = instant
        this.buff = buff
        this.castTime = castTime
        this.properName = GetAbilityName(this.id)

        if (buff != "") { this.buffId = FourCC(buff) } else { this.buffId = 0 }
    }

    public get icon() {
        return BlzGetAbilityIcon(this.id)
    }

    public get iconActivated() {
        return BlzGetAbilityActivatedIcon(this.id)
    }
}