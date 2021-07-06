import { OrderId } from "w3ts/globals/order";

declare let ItemTypeKey: Record<string, string>

export class ItemType {

    name: string
    four: string
    id: number
    abilityFour: string
    abilityId: number
    orderFour: string
    orderId: OrderId
    instant: boolean
    castTime: Array<number>

    constructor(name: string, four: string, abilityFour = "", orderFour = "", instant = true, castTime: Array<number> = []) {
		
        this.name = name
		this.four = four
		this.id = FourCC(four)
		this.abilityFour = abilityFour
		this.abilityId = FourCC(abilityFour)
		this.orderFour = orderFour
        this.orderId = FourCC(orderFour)
		this.instant = instant
		this.castTime = castTime

        ItemTypeKey[name] = name
        ItemTypeKey[four] = name
    }
}