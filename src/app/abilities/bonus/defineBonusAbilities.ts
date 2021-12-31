import { UnitAbility, AbilityType } from 'app/classes'
import { AbilityFour } from 'lib/w3ts'

export class DefineBonusAbilities {
	private static instance: DefineBonusAbilities

	collection
	stats
	damage
	armor
	attackSpeed
	moveSpeed

	static get () {
		if (!DefineBonusAbilities.instance) DefineBonusAbilities.instance = new DefineBonusAbilities()
		return DefineBonusAbilities.instance
	}

	private constructor () {
		this.collection = new AbilityType({ four: AbilityFour.BonusSpellBook })
		this.stats = new AbilityType({ four: AbilityFour.BonusStats })
		this.damage = new AbilityType({ four: AbilityFour.BonusDamage })
		this.armor = new AbilityType({ four: AbilityFour.BonusArmor })
		this.attackSpeed = new AbilityType({ four: AbilityFour.BonusAttackSpeed })
		this.moveSpeed = new AbilityType({ four: AbilityFour.BonusMovementSpeed })
	}
}
