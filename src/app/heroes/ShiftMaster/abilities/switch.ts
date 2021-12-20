import { Ability, AbilityType } from 'app/classes'
import { Logger } from 'app/log'
import { Position } from 'app/classes/position'
import { Unit, Group, Timer, Effect, AbilityModel } from 'lib/w3ts/index'

export class SwitchAbility extends Ability {
	override onEffect = (): void => {
		try {
			const spellTargetPos = Position.fromSpellTarget()
			const range = this.castRange
			const pickRange = this.heroDuration

			const g = new Group()
			g.enumUnitsInRange(spellTargetPos, pickRange, () => {
				const filter = Unit.fromFilter()
				return filter.isIllusion && filter.owner === this.unit.owner
			})

			const targetUnit = g.getClosestUnit(spellTargetPos)
			g.destroy()

			if (targetUnit == null || targetUnit.distanceTo(this.unit) > range) {
				const delay = new Timer()
				delay.start(0.1, false, () => {
					this.unit.mana += this.manaCost
					this.resetCooldown()
					delay.destroy()
				})
				return
			}

			targetUnit.setPathing(false)
			this.unit.setPathing(false)

			const targetStart = targetUnit.position
			const eventStart = this.unit.position

			new Effect(AbilityModel.feralspirittarget, targetStart.x, targetStart.y).destroy()
			new Effect(AbilityModel.feralspirittarget, eventStart.x, eventStart.y).destroy()

			this.unit.position = targetStart
			targetUnit.position = eventStart

			targetUnit.setPathing(true)
			this.unit.setPathing(true)
		} catch (error) {
			Logger.Error(error)
		}
	}

	static override fromCast (): SwitchAbility {
		return this.getAbility(Unit.fromEvent(), AbilityType.fromSpellEvent())
	}

	static override get (unit: Unit, abilityType: AbilityType): SwitchAbility {
		return this.getAbility(unit, abilityType)
	}
}
