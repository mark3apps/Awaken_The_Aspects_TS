import { Group, BuffFour, Unit, AbilityFour, Order } from 'lib/w3ts'
import { Ability, UnitType } from '..'
import { IAbility } from './interfaces/IAbility'
import { IAbilityCast } from './interfaces/IAbilityCast'

export class AspectOfDeathInfect extends Ability {
	override onEffect (cast: IAbilityCast): void {
		const unitCount = this.normalDuration

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
			const dummy = new Unit(this.unit.owner, UnitType.Dummy, this.unit.coordinate, this.unit.facing)
			dummy.addAbility(AbilityFour.InfectAspectDummy)
			dummy.issueTargetOrder(Order.Parasite, u)
			dummy.applyTimedLife(BuffFour.TimedLifeGeneric, 1)
		}, unitCount)
		g.destroy()
	}

	static override fromHandle (ability: IAbility) {
		return this.getObject(ability) as AspectOfDeathInfect
	}
}
