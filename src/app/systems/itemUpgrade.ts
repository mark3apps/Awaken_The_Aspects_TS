import { ItemType } from 'app/classes/itemType'
import { ItemTypes } from 'app/classes/ItemTypes'
import { Unit } from 'lib/w3ts/index'

export interface ItemUpgradeStep {
	itemType: ItemType,
	upgradeCondition: (unit: Unit) => boolean,
	failText: string
}

export class ItemUpgrade {
	public itemTypes: ItemUpgradeStep[] = []

	public getNextItem (itemType: ItemType): ItemUpgradeStep {
		const index = this.itemTypes.findIndex(p => p.itemType === itemType)

		return this.itemTypes[index]
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public add (itemType: ItemType, failText = '', upgradeCondition = (unit: Unit) => { return true }): void {
		this.itemTypes.push({
			itemType: itemType,
			failText: failText,
			upgradeCondition: upgradeCondition
		})
	}

	// Define Item Upgrades
	static increasedStamina: ItemUpgrade
	static blink: ItemUpgrade
	static teleport: ItemUpgrade
	static toughenUp: ItemUpgrade
	static giveLife: ItemUpgrade
	static manaRenewal: ItemUpgrade
	static focus: ItemUpgrade

	static define = (): void => {
		ItemUpgrade.increasedStamina = new ItemUpgrade()
		ItemUpgrade.blink = new ItemUpgrade()
		ItemUpgrade.teleport = new ItemUpgrade()
		ItemUpgrade.toughenUp = new ItemUpgrade()
		ItemUpgrade.giveLife = new ItemUpgrade()
		ItemUpgrade.manaRenewal = new ItemUpgrade()
		ItemUpgrade.focus = new ItemUpgrade()

		// Strength Increased Stamina
		ItemUpgrade.increasedStamina.add(ItemTypes.increasedStamina1)
		ItemUpgrade.increasedStamina.add(
			ItemTypes.increasedStamina2,
			'Level 10 required',
			(unit) => { return unit.heroLevel >= 10 && unit.hasItemOfType(ItemTypes.increasedStamina1.id) })
		ItemUpgrade.increasedStamina.add(
			ItemTypes.increasedStamina3,
			'Level 20 required',
			(unit) => { return unit.heroLevel >= 20 && unit.hasItemOfType(ItemTypes.increasedStamina2.id) })

		// Agility Blink
		ItemUpgrade.blink.add(ItemTypes.blink1)
		ItemUpgrade.blink.add(
			ItemTypes.blink2,
			'Level 10 required',
			(unit) => { return unit.heroLevel >= 10 && unit.hasItemOfType(ItemTypes.blink1.id) })
		ItemUpgrade.blink.add(
			ItemTypes.blink3,
			'Level 20 required',
			(unit) => { return unit.heroLevel >= 20 && unit.hasItemOfType(ItemTypes.blink2.id) })

		// Intelligence Teleport
		ItemUpgrade.teleport.add(ItemTypes.teleport1)
		ItemUpgrade.teleport.add(
			ItemTypes.teleport2,
			'Level 10 required',
			(unit) => { return unit.heroLevel >= 10 && unit.hasItemOfType(ItemTypes.teleport1.id) })
		ItemUpgrade.teleport.add(
			ItemTypes.teleport3,
			'Level 20 required',
			(unit) => { return unit.heroLevel >= 20 && unit.hasItemOfType(ItemTypes.teleport2.id) })

		// Brawler Toughen Up
		ItemUpgrade.toughenUp.add(ItemTypes.toughenUp1)
		ItemUpgrade.toughenUp.add(
			ItemTypes.toughenUp2,
			'Level 12 required',
			(unit) => { return unit.heroLevel >= 12 && unit.hasItemOfType(ItemTypes.toughenUp1.id) })
		ItemUpgrade.toughenUp.add(
			ItemTypes.toughenUp3,
			'Level 25 required',
			(unit) => { return unit.heroLevel >= 25 && unit.hasItemOfType(ItemTypes.toughenUp2.id) })

		// Healer Give Life
		ItemUpgrade.giveLife.add(ItemTypes.giveLife1)
		ItemUpgrade.giveLife.add(
			ItemTypes.giveLife2,
			'Level 12 required',
			(unit) => { return unit.heroLevel >= 12 && unit.hasItemOfType(ItemTypes.giveLife1.id) })
		ItemUpgrade.giveLife.add(
			ItemTypes.giveLife3,
			'Level 25 required',
			(unit) => { return unit.heroLevel >= 25 && unit.hasItemOfType(ItemTypes.giveLife2.id) })

		// Mage Mana Renewal
		ItemUpgrade.manaRenewal.add(ItemTypes.manaRenewal1)
		ItemUpgrade.manaRenewal.add(
			ItemTypes.manaRenewal2,
			'Level 12 required',
			(unit) => { return unit.heroLevel >= 12 && unit.hasItemOfType(ItemTypes.manaRenewal1.id) })
		ItemUpgrade.manaRenewal.add(
			ItemTypes.manaRenewal3,
			'Level 25 required',
			(unit) => { return unit.heroLevel >= 25 && unit.hasItemOfType(ItemTypes.manaRenewal2.id) })

		// Assassin Focus
		ItemUpgrade.focus.add(ItemTypes.focus1)
		ItemUpgrade.focus.add(
			ItemTypes.focus2,
			'Level 12 required',
			(unit) => { return unit.heroLevel >= 12 && unit.hasItemOfType(ItemTypes.focus1.id) })
		ItemUpgrade.focus.add(
			ItemTypes.focus3,
			'Level 25 required',
			(unit) => { return unit.heroLevel >= 25 && unit.hasItemOfType(ItemTypes.focus2.id) })
	}
}
