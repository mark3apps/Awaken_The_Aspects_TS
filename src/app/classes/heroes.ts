import { Triggers } from 'lib/w3ts/handles/triggers'
import { Force, Unit } from 'lib/w3ts/index'
import { Logger } from '../log'
import { Position } from './position'
import { Hero } from './hero'
import { Rectangles } from 'lib/w3ts/handles/Rectangles'
import { Forces } from 'lib/w3ts/handles/Forces'

export class Heroes {
	static define = (): void => {
		Hero.PickedPlayers = new Force()

		// When a Hero Levels up
		Triggers.heroLevels.addAction(() => {
			const hero = Hero.get(Unit.fromEvent())

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
		Triggers.unitCreated.addAction(() => {
			if (Unit.fromEvent().isHero) {
				const unit = Unit.fromEvent()

				// If Hero's Hero Type hasn't been defined yet (First time being created)
				// eslint-disable-next-line camelcase
				if (unit.handle === udg_unit_PickedHero) {
					try {
						let pos: Position

						if (unit.owner.inForce(Forces.AlliancePlayers)) {
							pos = Rectangles.Left_Castle.centerPosition
						} else {
							pos = Rectangles.Right_Castle.centerPosition
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
