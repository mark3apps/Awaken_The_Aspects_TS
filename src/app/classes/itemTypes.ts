import { ItemType } from './itemType'

export class ItemTypes {
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
		ItemTypes.increasedStamina1 = new ItemType('I007', 'A05A')
		ItemTypes.increasedStamina2 = new ItemType('I00D', 'A05B')
		ItemTypes.increasedStamina3 = new ItemType('I00E', 'A05V')

		ItemTypes.blink1 = new ItemType('I00C', 'A03R', 'blink', false, [2])
		ItemTypes.blink2 = new ItemType('I00A', 'A03G', 'blink', false, [2])
		ItemTypes.blink3 = new ItemType('I00B', 'A044', 'blink', false, [2])

		ItemTypes.teleport1 = new ItemType('I000', 'A03H', undefined, false, [8])
		ItemTypes.teleport2 = new ItemType('I008', 'A03Q', undefined, false, [5])
		ItemTypes.teleport3 = new ItemType('I009', 'A01M', undefined, false, [3])

		ItemTypes.toughenUp1 = new ItemType('I002', 'A01A')
		ItemTypes.toughenUp2 = new ItemType('I003', 'A020')
		ItemTypes.toughenUp3 = new ItemType('I001', 'A055')

		ItemTypes.giveLife1 = new ItemType('I00G', 'A05P')
		ItemTypes.giveLife2 = new ItemType('I00H', 'A05C')
		ItemTypes.giveLife3 = new ItemType('I00I', 'A05O')

		ItemTypes.manaRenewal1 = new ItemType('I00F', 'A021')
		ItemTypes.manaRenewal2 = new ItemType('I005', 'A023')
		ItemTypes.manaRenewal3 = new ItemType('I004', 'A022')

		ItemTypes.focus1 = new ItemType('I00J', 'A05Q')
		ItemTypes.focus2 = new ItemType('I00K', 'A05R')
		ItemTypes.focus3 = new ItemType('I00L', 'A05S')

		ItemTypes.itemCheck = new ItemType('I00M')
	};
}
