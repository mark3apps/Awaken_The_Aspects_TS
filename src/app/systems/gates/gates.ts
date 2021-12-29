import { UnitType } from 'app/classes/unitType'
import { Group, Rectangle, Anim } from 'lib/w3ts/index'
import { GateType } from './gateType'
import { Gate } from './gate'
import { ITriggers } from 'app/define/triggers/interfaces/ITriggers'
import { DamageEvent } from '../damageEvent/damageEvent'

export class Gates {
	public static define (triggers: ITriggers): void {
		new GateType(UnitType.DwarvenGateOpen, UnitType.DwarvenGateClosed)
		new GateType(UnitType.CastleGateOpen, UnitType.CastleGateClosed)

		const g = new Group()
		g.enumUnitsInRect(Rectangle.getPlayableMap())

		g.firstLoop((u) => {
			if (u && GateType.get(u)) {
				new Gate(u)
			}
		})
		g.destroy()

		// Trigger Setup
		triggers.UnitDying.addAction(() => {
			const unit = DamageEvent.getLast().target
			if (unit.userData === 15) {
				const gate = Gate.fromUnit(unit)
				if (gate) gate.died()
			}
		})

		triggers.unitDamaged.addAction(() => {
			const event = DamageEvent.getLast()
			if (event.target.userData === 15 && event.damage > 5) {
				event.target.setAnimation(Anim.Gate.standHit)
			}
		})
	}
}
