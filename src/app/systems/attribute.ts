import { Ability } from 'app/classes/ability'
import { ItemType } from 'app/classes/itemType'

export class HeroAttribute {
	public items: ItemType[] = []
	public abilities: Ability[] = []

	public addItem (itemType: ItemType): void {
		this.items.push(itemType)
	}

	public addAbility (ability: Ability): void {
		this.abilities.push(ability)
	}

	static strength: HeroAttribute
	static agility: HeroAttribute
	static intelligence: HeroAttribute

	static melee: HeroAttribute
	static ranged: HeroAttribute

	static brawler: HeroAttribute
	static healer: HeroAttribute
	static mage: HeroAttribute
	static assassin: HeroAttribute

	static define = (): void => {
		HeroAttribute.strength = new HeroAttribute()
		HeroAttribute.strength.addItem(ItemType.increasedStamina1)

		HeroAttribute.agility = new HeroAttribute()
		HeroAttribute.agility.addItem(ItemType.blink1)

		HeroAttribute.intelligence = new HeroAttribute()
		HeroAttribute.intelligence.addItem(ItemType.teleport1)

		HeroAttribute.melee = new HeroAttribute()

		HeroAttribute.ranged = new HeroAttribute()

		HeroAttribute.brawler = new HeroAttribute()
		HeroAttribute.brawler.addItem(ItemType.toughenUp1)

		HeroAttribute.healer = new HeroAttribute()
		HeroAttribute.healer.addItem(ItemType.giveLife1)

		HeroAttribute.mage = new HeroAttribute()
		HeroAttribute.mage.addItem(ItemType.manaRenewal1)

		HeroAttribute.assassin = new HeroAttribute()
		HeroAttribute.assassin.addItem(ItemType.focus1)
	}
}
