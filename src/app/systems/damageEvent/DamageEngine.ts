import { HeroMap } from 'app/classes/HeroTypeMap'
import { IDamageEngineDepend } from './IDamageEngineDepend'
import { DamageEvent } from './damageEvent'

export class DamageEngine {
	protected static instance?: DamageEngine

	static getInstance (depend: IDamageEngineDepend) {
		if (!DamageEngine.instance) DamageEngine.instance = new DamageEngine(depend)
		return DamageEngine.instance
	}

	constructor (depend: IDamageEngineDepend) {
		depend.triggers.UnitDying.addCondition(() => {
			const damage = new DamageEvent(depend)
			return damage.target.life - damage.damage <= 0
		})

		depend.triggers.UnitDying.addAction(() => {
			const damageEvent = DamageEvent.getLast()
			damageEvent.source.kills += 1

			if (damageEvent.target.isHero) {
				const hero = HeroMap.get(damageEvent.target)
				if (hero) hero.heroType.onDeath(hero.unit)
				damageEvent.damage = 0
			}
		})
	}
}
