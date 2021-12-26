import { ItemTypes } from 'app/classes/ItemTypes'
import { HeroAttribute } from './heroAttribute'

export class HeroAttributes {
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
		HeroAttributes.strength = new HeroAttribute()
		HeroAttributes.strength.addItem(ItemTypes.increasedStamina1)

		HeroAttributes.agility = new HeroAttribute()
		HeroAttributes.agility.addItem(ItemTypes.blink1)

		HeroAttributes.intelligence = new HeroAttribute()
		HeroAttributes.intelligence.addItem(ItemTypes.teleport1)

		HeroAttributes.melee = new HeroAttribute()

		HeroAttributes.ranged = new HeroAttribute()

		HeroAttributes.brawler = new HeroAttribute()
		HeroAttributes.brawler.addItem(ItemTypes.toughenUp1)

		HeroAttributes.healer = new HeroAttribute()
		HeroAttributes.healer.addItem(ItemTypes.giveLife1)

		HeroAttributes.mage = new HeroAttribute()
		HeroAttributes.mage.addItem(ItemTypes.manaRenewal1)

		HeroAttributes.assassin = new HeroAttribute()
		HeroAttributes.assassin.addItem(ItemTypes.focus1)
	};
}
