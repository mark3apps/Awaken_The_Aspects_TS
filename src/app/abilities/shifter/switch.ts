import { Skill } from 'app/classes'
import { Ability, EffectType, TargetType } from 'app/classes/ability'
import { Logger } from 'app/classes/log'
import { Position } from 'app/classes/position'
import { AbilityFour, Order, Unit, Group, Timer, Effect, AbilityModel } from 'lib/w3ts/index'

export class SwitchAbility extends Ability {
	constructor () {
		super({
			four: AbilityFour.MirrorSwitch,
			orderId: Order.Reveal,
			type: EffectType.Instant,
			target: TargetType.Specific,
			permanent: true,
			starting: true,
			addEffect: true
		})
	}

	public override onEffect = (): void => {
		try {
			const eventUnit = Unit.fromEvent()
			const ability = Skill.get(eventUnit, this)

			const spellTargetPos = Position.fromSpellTarget()
			const range = ability.castRange
			const pickRange = ability.heroDuration

			const g = new Group()
			g.enumUnitsInRange(spellTargetPos, pickRange, () => {
				const filter = Unit.fromFilter()
				return filter.isIllusion && filter.owner === eventUnit.owner
			})

			const targetUnit = g.getClosestUnit(spellTargetPos)
			g.destroy()

			if (targetUnit == null || targetUnit.distanceTo(eventUnit) > range) {
				const delay = new Timer()
				delay.start(0.1, false, () => {
					eventUnit.mana += ability.manaCost
					ability.resetCooldown()
					delay.destroy()
				})
				return
			}

			targetUnit.setPathing(false)
			eventUnit.setPathing(false)

			const targetStart = targetUnit.position
			const eventStart = eventUnit.position

			new Effect(AbilityModel.feralspirittarget, targetStart.x, targetStart.y).destroy()
			new Effect(AbilityModel.feralspirittarget, eventStart.x, eventStart.y).destroy()

			eventUnit.position = targetStart
			targetUnit.position = eventStart

			targetUnit.setPathing(true)
			eventUnit.setPathing(true)
		} catch (error) {
			Logger.Error(error)
		}
	}
}
