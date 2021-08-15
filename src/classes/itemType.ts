import { OrderId } from "lib/w3ts/globals/order"

export interface ItemTypeKey {
    [name: string]: ItemType
}

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

    private static _key: ItemTypeKey = {}
    static readonly pre = "H"

    constructor(four: string, abilityFour = null, orderFour = null, instant = true, castTime: number[] = []) {

        this.four = four
        this.id = FourCC(four)
        this.hid = ItemType.pre + this.id
        this.abilityFour = abilityFour

        if (abilityFour != null) {
            this.abilityId = FourCC(abilityFour)
        } else { 
            this.abilityId = null
        }
        
        this.orderFour = orderFour

        if (orderFour != null) {
            this.orderId = FourCC(orderFour)
        } else {
            this.orderFour = null
        }
        
        this.instant = instant
        this.castTime = castTime

        ItemType._key[this.hid] = this
    }

    public static get key(): ItemTypeKey {
        return ItemType._key
    }

    public static get(id: number | string): ItemType {
        return typeof id === "number" ? ItemType._key[ItemType.pre + id] : ItemType._key[ItemType.pre + FourCC(id)]
    }


}