import { Ability, AbilityType } from 'app/classes'
import { Logger } from 'app/log'
import { Position } from 'app/classes/position'
import { Unit, Group, Effect, AbilityModel, Order } from 'lib/w3ts/index'
import { AbilityTypeMap } from 'app/classes/abilityTypeMap'

export class SwitchAbility extends Ability {

	pickRange = 300
	augments = 0

	constructor (unit: Unit, abilityType: AbilityType) {
		super(unit, abilityType)
		this.updateTooltips()
	}

	override updateTooltip (): void {
		this.tooltip = `Switch - [|cffffcc00${this.augments} Augments|r]`
	}

	override updateExtendedTooltop (): void {
		this.extendedTooltip = `The Shifter switches positions with a nearby friendly shade within |cff00ffff${math.floor(this.castRange)}|r of the Shift Master.  If no shade exists, this spell is cancelled.

|cff00ffff${math.floor(this.cooldown)}|r second cooldown.`
	}

	override onEffect = (): void => {
		try {
			const spellTargetPos = Position.fromSpellTarget()

			const g = new Group()
			g.enumUnitsInRange(spellTargetPos, this.pickRange, () => {
				const filter = Unit.fromFilter()
				return filter.isIllusion && filter.owner === this.unit.owner
			})

			const targetUnit = g.getClosestUnit(spellTargetPos)
			g.destroy()

			if (targetUnit == null || targetUnit.distanceTo(this.unit) > this.castRange) {
				this.unit.issueImmediateOrder(Order.Stop)
				this.unit.mana += this.manaCost
				this.resetCooldown()
				return
			}

			targetUnit.setPathing(false)
			this.unit.setPathing(false)

			const targetStart = targetUnit.coordinate
			const eventStart = this.unit.coordinate

			new Effect(AbilityModel.feralspirittarget, targetStart.x, targetStart.y).destroy()
			new Effect(AbilityModel.feralspirittarget, eventStart.x, eventStart.y).destroy()

			this.unit.coordinate = targetStart
			targetUnit.coordinate = eventStart

			targetUnit.setPathing(true)
			this.unit.setPathing(true)
		} catch (error) {
			Logger.Error(error)
		}
	}

	static override fromCast (): SwitchAbility {
		return this.getAbility(Unit.fromEvent(), AbilityTypeMap.fromSpellEvent())
	}

	static override get (unit: Unit, abilityType: AbilityType): SwitchAbility {
		return this.getAbility(unit, abilityType)
	}
}
