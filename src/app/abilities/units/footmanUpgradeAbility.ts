import { Ability, AbilityType } from 'app/classes'
import { AbilityTypeMap } from 'app/classes/abilityTypeMap'
import { AbilityModel, Anim, AttachPoint, Effect, Timer, Unit } from 'lib/w3ts'

export class FootmanUpgradeAbility extends Ability {
	override onEffect = () => {
		if (this.unit.manaPercent === 100) {
			this.castImmediate()
			this.unit.lifePercent += 25
			const upgrade = new Timer()
			upgrade.start(0.05, false, () => {
				new Effect(AbilityModel.spiritWalkerChange, this.unit, AttachPoint.chest).destroy()
				this.unit.setAnimation(Anim.Footman.standVictory)
			})
		}
	}

	static override fromCast (): FootmanUpgradeAbility {
		return this.getAbility(Unit.fromCaster(), AbilityTypeMap.fromSpellEvent())
	}

	static override get (unit: Unit, ability: AbilityType): FootmanUpgradeAbility {
		return this.getAbility(unit, ability)
	}
}
