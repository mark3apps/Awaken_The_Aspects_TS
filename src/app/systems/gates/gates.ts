import { UnitType } from 'app/classes/unitType'
import { Unit, Group, Rectangle, Anim } from 'lib/w3ts/index'
import { Triggers } from 'lib/w3ts/handles/triggers'
import { GateType } from './gateType'
import { Gate } from './gate'


export class Gates {
	public static define (): void {
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
		Triggers.unitDying.addAction(() => {
			if (Unit.fromDamageTarget().userData == 15) {
				const gate = Gate.fromUnit(Unit.fromDamageTarget())
				if (gate) gate.died()
			}
		})

		Triggers.unitDamaged.addAction(() => {

			if (Unit.fromDamageTarget().userData == 15 && GetEventDamage() > 5) {
				Unit.fromDamageTarget().setAnimation(Anim.Gate.standHit)
			}
		})
	}
}
