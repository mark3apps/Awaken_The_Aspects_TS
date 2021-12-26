import { Rectangle } from './rect'
import { Trigger } from './trigger'
import { DamageEvent } from 'app/systems/damageEvent/damageEvent'

export class Triggers {
	static unitDies = new Trigger();
	static unitDying = new Trigger();
	static unitOrdered = new Trigger();
	static unitAttacked = new Trigger();
	static unitDamaged = new Trigger();
	static unitCreated = new Trigger();
	static unitEntersRegion = new Trigger();
	static unitSummoned = new Trigger();
	static unitTrained = new Trigger();
	static unitSpellEffect = new Trigger();
	static heroLevels = new Trigger();
	static mapStart = new Trigger();

	static define = (): void => {
		Triggers.mapStart.registerTimerEvent(0.5, false)
		Triggers.unitCreated.registerEnterRect(Rectangle.getPlayableMap())

		Triggers.unitAttacked.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED)
		Triggers.unitDamaged.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED)
		Triggers.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_ORDER)
		Triggers.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER)
		Triggers.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER)
		Triggers.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER)
		Triggers.unitSummoned.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON)
		Triggers.unitTrained.registerAnyUnitEvent(EVENT_PLAYER_UNIT_TRAIN_FINISH)
		Triggers.unitSpellEffect.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT)
		Triggers.heroLevels.registerAnyUnitEvent(EVENT_PLAYER_HERO_LEVEL)
		Triggers.unitDies.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH)
		Triggers.unitDying.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED)
		Triggers.unitDying.addCondition(() => {
			const damage = new DamageEvent()
			return damage.target.life - damage.damage <= 0
		})

		Triggers.unitDying.addAction(() => { DamageEvent.get().source.kills += 1 })
	};
}
