import { Ability, AbilityType } from 'app/classes'
import { AbilityFour } from 'lib/w3ts'

export class DefineBonusAbilities {
	private static instance: DefineBonusAbilities

	// collection
	// stats
	// damage
	// armor
	// attackSpeed
	// moveSpeed

	static get () {
		if (!DefineBonusAbilities.instance) DefineBonusAbilities.instance = new DefineBonusAbilities()
		return DefineBonusAbilities.instance
	}

	private constructor () {
		// this.collection = new AbilityType({ four: AbilityFour.BonusSpellBook })
		// this.collection.getAbility = (unit) => { return Ability.fromHandle(unit, this.collection) }

		// this.stats = new AbilityType({ four: AbilityFour.BonusStats })
		// this.stats.getAbility = (unit) => { return BonusStatsAbility.get(unit, this.stats) }

		// this.damage = new AbilityType({ four: AbilityFour.BonusDamage })
		// this.damage.getAbility = (unit) => { return BonusDamageAbility.get(unit, this.stats) }

		// this.armor = new AbilityType({ four: AbilityFour.BonusArmor })
		// this.armor.getAbility = (unit) => { return BonusArmorAbility.get(unit, this.stats) }

		// this.attackSpeed = new AbilityType({ four: AbilityFour.BonusAttackSpeed })
		// this.attackSpeed.getAbility = (unit) => { return BonusAttackSpeedAbility.get(unit, this.stats) }

		// this.moveSpeed = new AbilityType({ four: AbilityFour.BonusMovementSpeed })
		// this.moveSpeed.getAbility = (unit) => { return BonusMoveSpeedAbility.get(unit, this.stats) }
	}
}
