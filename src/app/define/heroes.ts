import { Force, Unit } from 'lib/w3ts/index'
import { Position } from '../classes/position'
import { Hero } from '../classes/hero'
import { HeroMap } from '../classes/HeroTypeMap'
import { IHeroesDepend } from './IHeroesDepend'
import { Logger } from 'app/log'

export class Heroes {
	protected static instance: Heroes

	static getInstance (depend: IHeroesDepend) {
		if (!Heroes.instance) Heroes.instance = new Heroes(depend)
		return Heroes.instance
	}

	constructor (depend: IHeroesDepend) {
		const triggers = depend.triggers
		const rects = depend.rects
		const forces = depend.forces

		Hero.PickedPlayers = new Force()

		// When a Hero Levels up
		triggers.heroLevels.addAction(() => {
			const hero = HeroMap.get(Unit.fromEvent())

			if (hero) {
				const player = hero.unit.owner

				Logger.Information('Hero Leveled Up:', hero.unit.name)

				// Every Level increase Attack
				player.setTechResearched(FourCC('R005'), hero.unit.level - 1)

				// Every other level increase Armor
				if (hero.unit.heroLevel % 3 === 0) {
					player.setTechResearched(FourCC('R006'), hero.unit.level - 1)
				}

				// Add Ability Points
				hero.unit.owner.lumber += 2
			}
		})

		// When a new hero is created add it to the index
		triggers.unitCreated.addAction(() => {
			if (Unit.fromEvent().isHero) {
				const unit = Unit.fromEvent()

				// If Hero's Hero Type hasn't been defined yet (First time being created)
				// eslint-disable-next-line camelcase
				if (unit.handle === udg_unit_PickedHero) {
					try {
						let pos: Position

						if (unit.owner.inForce(forces.AlliancePlayers)) {
							pos = rects.Left_Castle.centerPosition
						} else {
							pos = rects.Right_Castle.centerPosition
						}

						const hero = new Hero(unit.owner, unit.typeId, pos, 180)
						// hero.setupHero()
						unit.destroy()

						Hero.PickedPlayers.addPlayer(hero.unit.owner)

						Logger.Information('Name', hero.unit.name)

						unit.show = false
					} catch (error) {
						Logger.Error('Error', error)
					}
				}
			}
		})
	};
}
