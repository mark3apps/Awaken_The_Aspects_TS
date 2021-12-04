import { Ability, EffectType, TargetType } from 'app/classes/ability'
import { UnitType } from 'app/classes/unitType'
import { AbilityFour, Order, Unit, Effect, AbilityModel, Timer } from 'lib/w3ts/index'

export class ShiftAbility extends Ability {
	constructor () {
		super({
			four: AbilityFour.Shift,
			orderId: Order.Berserk,
			type: EffectType.Instant,
			target: TargetType.SupportSelf,
			permanent: true,
			starting: true,
			addEffect: true
		})
	}

	public override onEffect = (): void => {
		const eventUnit = Unit.fromEvent()
		const ability = this.getUnitAbility(eventUnit)

		// Get Unit Constants
		const facing = eventUnit.facing
		const startPostion = eventUnit.position

		// Get Ability Constants
		const distance = ability.normalDuration
		const speed = ability.heroDuration
		const tick = 0.01

		const tickDistance = distance / (speed / tick)

		// Add Start Abilitys
		eventUnit.addAbility(AbilityFour.Ghost)
		eventUnit.setPathing(false)

		// SFX
		const startEffect = new Effect(AbilityModel.feralspirittarget, eventUnit.x, eventUnit.y)
		startEffect.scale = 2
		startEffect.z = 10
		startEffect.destroy()

		// Cast Illusion on Hero
		const dummy = new Unit(eventUnit.owner, UnitType.Dummy, eventUnit.position, 0)
		dummy.addAbility(Ability.shift1Dummy)
		dummy.applyTimedLifeGeneric(1)

		const shiftDummyAbil = dummy.getUnitAbility(Ability.shift1Dummy)
		shiftDummyAbil.castTarget(eventUnit)

		const loop = new Timer()

		loop.start(tick, true, () => {
			const pos = eventUnit.polarProjection(tickDistance, facing)

			if (pos.isTerrianPathable() && (eventUnit.distanceTo(startPostion) < distance)) {
				eventUnit.position = pos
			} else {
				eventUnit.removeAbility(AbilityFour.Ghost)
				eventUnit.setPathing(true)
				loop.destroy()
			}
		})
	}
}
