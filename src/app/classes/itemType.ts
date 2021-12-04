/* eslint-disable no-use-before-define */
import { Order } from 'lib/w3ts/index'

export class ItemType {
	name: string
	four: string
	id: number
	abilityFour: string
	abilityId: number
	orderFour: string
	orderId: Order
	instant: boolean
	castTime: number[]

	static readonly map: Map<number, ItemType> = new Map()

	constructor (four: string, abilityFour = null, orderFour = null, instant = true, castTime: number[] = []) {
		this.four = four
		this.id = FourCC(four)
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

		ItemType.map.set(this.id, this)
	}

	public static get (id: number | string): ItemType {
		return typeof id === 'number' ? ItemType.map.get(id) : ItemType.map.get(FourCC(id))
	}

	static increasedStamina1: ItemType
	static increasedStamina2: ItemType
	static increasedStamina3: ItemType

	static blink1: ItemType
	static blink2: ItemType
	static blink3: ItemType

	static teleport1: ItemType
	static teleport2: ItemType
	static teleport3: ItemType

	static toughenUp1: ItemType
	static toughenUp2: ItemType
	static toughenUp3: ItemType

	static giveLife1: ItemType
	static giveLife2: ItemType
	static giveLife3: ItemType

	static manaRenewal1: ItemType
	static manaRenewal2: ItemType
	static manaRenewal3: ItemType

	static focus1: ItemType
	static focus2: ItemType
	static focus3: ItemType

	static itemCheck: ItemType

	static define = (): void => {
		ItemType.increasedStamina1 = new ItemType('I007', 'A05A')
		ItemType.increasedStamina2 = new ItemType('I00D', 'A05B')
		ItemType.increasedStamina3 = new ItemType('I00E', 'A05V')

		ItemType.blink1 = new ItemType('I00C', 'A03R', 'blink', false, [2])
		ItemType.blink2 = new ItemType('I00A', 'A03G', 'blink', false, [2])
		ItemType.blink3 = new ItemType('I00B', 'A044', 'blink', false, [2])

		ItemType.teleport1 = new ItemType('I000', 'A03H', null, false, [8])
		ItemType.teleport2 = new ItemType('I008', 'A03Q', null, false, [5])
		ItemType.teleport3 = new ItemType('I009', 'A01M', null, false, [3])

		ItemType.toughenUp1 = new ItemType('I002', 'A01A')
		ItemType.toughenUp2 = new ItemType('I003', 'A020')
		ItemType.toughenUp3 = new ItemType('I001', 'A055')

		ItemType.giveLife1 = new ItemType('I00G', 'A05P')
		ItemType.giveLife2 = new ItemType('I00H', 'A05C')
		ItemType.giveLife3 = new ItemType('I00I', 'A05O')

		ItemType.manaRenewal1 = new ItemType('I00F', 'A021')
		ItemType.manaRenewal2 = new ItemType('I005', 'A023')
		ItemType.manaRenewal3 = new ItemType('I004', 'A022')

		ItemType.focus1 = new ItemType('I00J', 'A05Q')
		ItemType.focus2 = new ItemType('I00K', 'A05R')
		ItemType.focus3 = new ItemType('I00L', 'A05S')

		ItemType.itemCheck = new ItemType('I00M')
	}
}
