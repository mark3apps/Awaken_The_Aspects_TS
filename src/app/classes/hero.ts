/* eslint-disable no-use-before-define */
import { StateMachine, IState } from 'app/heroes/stateMachine'
import { HeroType } from 'lib/w3ts/handles/herotype'
import { Unit, Timer, Group, MapPlayer, Order, Force, Trigger, Rectangle } from 'lib/w3ts/index'
import { Logger } from './log'
import { Position } from './position'
import { UnitAbility } from './unitAbility'

export class Hero extends Unit {
	unitAbilities: UnitAbility[] = []
	private stateMachine: StateMachine

	private AITickTimer = new Timer()
	private AITickIncrement = 1.2
	private AIActivated = false

	AIpowerBase = 0
	AIpowerHero = 0

	AIunitCount = 0
	AIunitCountAlly = 0
	AIUnitCoundEnemy = 0

	AImostPowerfulAlly = 0
	AImostPowerfulAllyUnit: Unit = null
	AImostPowerfulEnemy = 0
	AImostPowerfulEnemyUnit: Unit = null

	AIclumpAllyUnit: Unit
	AIclumpAllyCount = 0
	AIclumpAllyPower = 0
	AIclumpEnemyUnit: Unit
	AIclumpEnemyCount = 0
	AIclumpEnemyPower = 0
	AIclumpAllUnit: Unit
	AIclumpAllCount = 0
	AIclumpAllPower = 0

	AIheroesAlly = new Group()
	AIheroesEnemy = new Group()

	AIhealthHistory: number[] = []
	AIhealthHistoryAverageSingle = 0
	AIhealthHistoryAverageAll = 0

	AIweightedHealth = 0
	AIweightedHealthMax = 0
	AIweightedHealthPercent = 0

	static map: Map<Unit, Hero> = new Map<Unit, Hero>()
	static readonly all: Hero[] = []
	static human: Hero[] = []
	static ai: Hero[] = []
	static PickedPlayers: Force

	constructor (owner: MapPlayer | number, unitId: number, pos: Position, face: number, skinId?: number) {
		super(owner, unitId, pos, face, skinId)

		try {
			this.data.heroType = HeroType.get(this)
			this.setupHero()

			Hero.map.set(this as Unit, this)
			Hero.all.push(this)

			if (this.owner.controller === MAP_CONTROL_COMPUTER) {
				Hero.ai.push(this)
			} else {
				Hero.human.push(this)
			}

			this.AIstart()
		} catch (error) {
			Logger.Error('Hero Creation', error)
		}
	}

	public static get (unit: Unit): Hero {
		if (Hero.map.has(unit)) {
			return Hero.map.get(unit)
		} else {
			return null
		}
	}

	// AI Methods
	public AIstart (tick = this.AITickIncrement): void {
		Logger.Information('Starting AI for', this.nameProper)

		this.stateMachine = new StateMachine(this)
		this.AITickIncrement = tick

		// Add all of the Hero Type Specified States
		this.stateMachine.addState(this.STATEattack())
		this.stateMachine.addState(this.STATEheal())
		this.stateMachine.addState(this.STATEcast())
		this.stateMachine.addState(this.STATEdead())
		this.stateMachine.addState(this.STATEflee())

		// Set the starting State
		this.stateMachine.setState('attack')

		// Start the AI Loop Timer
		this.AITickTimer.start(tick, true, () => this.AIexecute())
	}

	public AIpause (): void {
		this.AITickTimer.pause()
	}

	public AIexecute (): void {
		this.AIintel()
		this.stateMachine.update()

		// Nothing at the moment
	}

	public AIintel (): void {
		//
	}

	public AIlevelup (): void {
		//
	}

	private STATEdead (): IState {
		return {
			name: 'dead',
			onEnter: () => {
				//
			},
			onUpdate: () => {
				//
			},
			onExit: () => {
				//
			}
		}
	}

	private STATEcast (): IState {
		return {
			name: 'cast',
			onEnter: () => {
				//
			},
			onUpdate: () => {
				//
			},
			onExit: () => {
				//
			}
		}
	}

	private STATEheal (): IState {
		return {
			name: 'heal',
			onEnter: () => {
				// Log.Information("Heal")
			},
			onUpdate: () => {
				// Log.Information("Healing")
			},
			onExit: () => {
				//
			}
		}
	}

	private STATEattack (): IState {
		return {
			name: 'attack',
			onEnter: () => {
				// Log.Information("Attack", this.nameProper)
				this.issueOrderAt(Order.Attack, 0, 0)
			},
			onUpdate: () => {
				// Log.Information("Attacking")
			},
			onExit: () => {
				// Log.Information("End Attack")
			}
		}
	}

	private STATEflee (): IState {
		return {
			name: 'flee',
			onEnter: () => {
				//
			},
			onUpdate: () => {
				//
			},
			onExit: () => {
				//
			}
		}
	}

	// General Methods
	public setupHero (): void {
		if (this.data.heroType !== undefined) {
			this.addStartingAbilities()
			this.addStartingItems()
			this.resetUnitAbilities()
		}
	}

	public resetUnitAbilities (): void {
		this.unitAbilities = []
		for (let i = 0; i < this.data.heroType.spells.length; i++) {
			const element = this.data.heroType.spells[i]
			this.unitAbilities.push(new UnitAbility(this, element))
		}
	}

	public addStartingItems (): void {
		if (this.data.heroType !== undefined) {
			// Add Attribute Items
			for (let n = 0; n < this.data.heroType.attributes.length; n++) {
				const element = this.data.heroType.attributes[n]

				for (let i = 0; i < element.items.length; i++) {
					const item = element.items[i].id
					this.addItemById(item)
				}
			}

			// Add Specific Hero Type Items
			for (let i = 0; i < this.data.heroType.items.length; i++) {
				const item = this.data.heroType.items[i].id
				this.addItemById(item)
			}
		}
	}

	public addStartingAbilities (): void {
		if (this.data.heroType !== undefined) {
			for (let i = 0; i < this.data.heroType.startingSpells.length; i++) {
				this.skillPoints += 1
				this.selectSkill(this.data.heroType.startingSpells[i].id)
				this.skillPoints -= 1
			}
		}
	}

	// Static Trigger Overrides

	public static override fromEnum (): Hero {
		return this.fromHandle(GetEnumUnit())
	}

	public static override fromEvent (): Hero {
		return this.fromHandle(GetTriggerUnit())
	}

	public static override fromFilter (): Hero {
		return this.fromHandle(GetFilterUnit())
	}

	public static override fromAttacking (): Hero {
		return this.fromHandle(GetAttacker())
	}

	public static override fromAttacked (): Hero {
		return this.fromHandle(GetTriggerUnit())
	}

	public static override fromSpellTarget (): Hero {
		return this.fromHandle(GetSpellTargetUnit())
	}

	public static override fromHandle (handle: unit): Hero {
		const unit: Unit = this.getObject(handle)

		if (!unit.isHero) {
			return null
		} else {
			return unit as Hero
		}
	}

	static define = (): void => {
		Hero.PickedPlayers = new Force()

		// When a Hero Levels up
		Trigger.heroLevels.add(() => {
			const hero = Hero.get(Unit.fromEvent())

			const player = hero.owner

			Logger.Information('Hero Leveled Up:', hero.name)

			// Every Level increase Attack
			player.setTechResearched(FourCC('R005'), hero.level - 1)

			// Every other level increase Armor
			if (hero.heroLevel % 3 === 0) {
				player.setTechResearched(FourCC('R006'), hero.level - 1)
			}

			// Remove Ability Points
			if (hero.heroLevel < 15 && hero.heroLevel % 2 !== 0) {
				hero.skillPoints -= 1
			} else if (hero.heroLevel < 25 && hero.heroLevel >= 15 && hero.heroLevel % 3 !== 0) {
				hero.skillPoints -= 1
			} else if (hero.heroLevel >= 25 && hero.heroLevel % 4 !== 0) {
				hero.skillPoints -= 1
			}
		})

		// When a new hero is created add it to the index
		Trigger.unitCreated.add(() => {
			if (Unit.fromEvent().isHero) {
				const unit = Unit.fromEvent()

				// If Hero's Hero Type hasn't been defined yet (First time being created)
				// eslint-disable-next-line camelcase
				if (unit.handle === udg_unit_PickedHero) {
					try {
						let pos: Position

						if (unit.owner.inForce(Force.AlliancePlayers)) {
							pos = Rectangle.Left_Castle.centerPosition
						} else {
							pos = Rectangle.Right_Castle.centerPosition
						}

						const hero = new Hero(unit.owner, unit.typeId, pos, 180)
						unit.destroy()

						Hero.PickedPlayers.addPlayer(hero.owner)

						Logger.Information('Name', hero.name)
						Logger.Information('Hero Type', hero.data.heroType.name)
						unit.show = false
					} catch (error) {
						Logger.Error('Error', error)
					}
				}
			}
		})
	}
}
