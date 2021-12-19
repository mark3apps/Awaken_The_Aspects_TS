import { Ability, AbilityType, UnitType } from 'app/classes'
import { AbilityFour, BuffFour, Group, Order, Unit } from 'lib/w3ts'

export class AspectOfDeathInfectAbility extends Ability {
	override onEffect = () => {
		const unitCount = math.floor(this.normalDuration)

		const g = new Group()
		g.enumUnitsInRange(this.unit, 400)
		g.firstLoopCondition((u) => {
			return (u.isAlive() &&
				u.isEnemy(this.unit) &&
				!u.isHero &&
				!u.isStructure &&
				!u.isIllusion &&
				!u.isMagicImmune &&
				!u.hasBuff(BuffFour.Infected))
		}, (u) => {
			const dummy = new Unit(this.unit.owner, UnitType.Dummy, this.unit.position, this.unit.facing)
			dummy.addAbility(AbilityFour.InfectAspectDummy)
			dummy.issueTargetOrder(Order.Parasite, u)
			dummy.applyTimedLife(BuffFour.TimedLifeGeneric, 2)
		}, unitCount)
		g.destroy()
	}

	static override fromCast (): AspectOfDeathInfectAbility {
		return this.getAbility(Unit.fromAttacker(), AbilityType.fromSpellEvent())
	}

	static override get (unit: Unit, ability: AbilityType): AspectOfDeathInfectAbility {
		return this.getAbility(unit, ability)
	}
}
