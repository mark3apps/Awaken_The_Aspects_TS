import { HeroMap } from 'app/classes/HeroTypeMap'
import { DamageEvent } from 'app/systems/damageEvent/damageEvent'
import { Trigger, Rectangle } from 'lib/w3ts'
import { ITriggers } from './interfaces/ITriggers'

export class Triggers implements ITriggers {
	UnitDies = new Trigger()
	UnitDying = new Trigger()
	unitOrdered = new Trigger()
	UnitAttacked = new Trigger()
	unitDamaged = new Trigger()
	unitCreated = new Trigger()
	unitEntersRegion = new Trigger()
	unitSummoned = new Trigger()
	unitTrained = new Trigger()
	UnitCasts = new Trigger()
	heroLevels = new Trigger()
	mapStart = new Trigger()

	protected static instance?: Triggers

	static getInstance () {
		if (!Triggers.instance) Triggers.instance = new Triggers()
		return Triggers.instance
	}

	private constructor () {
		this.mapStart.registerTimerEvent(0.5, false)
		this.unitCreated.registerEnterRect(Rectangle.getPlayableMap())

		this.UnitAttacked.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED)
		this.unitDamaged.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED)
		this.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_ORDER)
		this.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER)
		this.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER)
		this.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER)
		this.unitSummoned.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON)
		this.unitTrained.registerAnyUnitEvent(EVENT_PLAYER_UNIT_TRAIN_FINISH)
		this.UnitCasts.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT)
		this.heroLevels.registerAnyUnitEvent(EVENT_PLAYER_HERO_LEVEL)
		this.UnitDies.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH)
		this.UnitDying.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED)
		this.UnitDying.addCondition(() => {
			const damage = new DamageEvent()
			return damage.target.life - damage.damage <= 0
		})

		this.UnitDying.addAction(() => {
			const damageEvent = DamageEvent.getLast()
			damageEvent.source.kills += 1

			if (damageEvent.target.isHero) {
				const hero = HeroMap.get(damageEvent.target)
				if (hero) hero.heroType.onDeath(hero.unit)
				damageEvent.damage = 0
			}
		})
	};
}
