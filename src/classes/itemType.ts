import { OrderId } from "lib/w3ts/globals/order"

export class ItemType {

    name: string
    four: string
    id: number
    hid: string
    abilityFour: string
    abilityId: number
    orderFour: string
    orderId: OrderId
    instant: boolean
    castTime: number[]

    private static _key: { [name: string]: ItemType } = {}
    static readonly pre = "H"

    constructor(four: string, abilityFour = "", orderFour = "", instant = true, castTime: number[] = []) {

        this.four = four
        this.id = FourCC(four)
        this.hid = ItemType.pre + this.id
        this.abilityFour = abilityFour
        this.abilityId = FourCC(abilityFour)
        this.orderFour = orderFour
        this.orderId = FourCC(orderFour)
        this.instant = instant
        this.castTime = castTime

        //ItemType._key[this.hid] = this
    }

    public static get(id: number | string): ItemType {
        return typeof id === "number" ? ItemType._key[ItemType.pre + id] : ItemType._key[ItemType.pre + FourCC(id)]
    }


}