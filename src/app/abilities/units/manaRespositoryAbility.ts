import { Ability, AbilityType } from 'app/classes'
import { AbilityTypeMap } from 'app/classes/abilityTypeMap'
import { Group, Unit } from 'lib/w3ts'

export class ManaRepositoryAbility extends Ability {
	override onEffect = () => {
		const g = new Group()
		g.enumUnitsInRange(this.unit, 1300)

		g.firstLoop((u) => {
			if (u.isStructure &&
				u.typeId !== this.unit.typeId &&
				u.isAlly(this.unit) &&
				u.isAlive() &&
				u.manaPercent < 50 &&
				this.cooldownRemaining === 0 &&
				this.unit.mana > 200) {
				this.castTarget(u)
			}
		})
		g.destroy()
	}

	static override fromCast (): ManaRepositoryAbility {
		return this.getAbility(Unit.fromAttacker(), AbilityTypeMap.fromSpellEvent())
	}

	static override get (unit: Unit, ability: AbilityType): ManaRepositoryAbility {
		return this.getAbility(unit, ability)
	}
}
