import { BonusStatsAbility } from 'app/abilities/bonus/bonusStats'
import { IState, StateMachine } from 'app/heroes/stateMachine'
import { TalentConfig } from 'app/systems/talents/talentConfig'
import { GoldTalentViewModel } from 'app/systems/talents/viewModels/GoldTalentViewModel'
import { SkillTalentViewModel } from 'app/systems/talents/viewModels/SkillTalentViewModel'
import { GenerateNoButtonTalentTreeView } from 'app/systems/talents/views/NoButtonTalentTreeView'
import { GenerateNoButtonTalentView } from 'app/systems/talents/views/NoButtonTalentView'
import { BasicTalentTreeViewModel } from 'lib/STK/UI/STK/ViewModels/BasicTalentTreeViewModel'
import { HeroType } from 'lib/w3ts/handles/herotype'
import { AbilityFour, Force, Frame, Group, MapPlayer, Order, Rectangle, Timer, Trigger, Unit } from 'lib/w3ts/index'
import { Ability } from '.'
import { Logger } from '../log'
import { Position } from './position'

export class Hero {
	private stateMachine: StateMachine | undefined

	private AITickTimer = new Timer()
	private AITickIncrement = 1.2
	private AIActivated = false

	readonly unit: Unit
	readonly heroType: HeroType
	public skillTree: BasicTalentTreeViewModel
	public guardTree: BasicTalentTreeViewModel
	public armorTree: BasicTalentTreeViewModel

	AIpowerBase = 0
	AIpowerHero = 0

	AIunitCount = 0
	AIunitCountAlly = 0
	AIUnitCoundEnemy = 0

	AImostPowerfulAlly = 0
	AImostPowerfulAllyUnit: Unit | undefined
	AImostPowerfulEnemy = 0
	AImostPowerfulEnemyUnit: Unit | undefined

	AIclumpAllyUnit: Unit | undefined
	AIclumpAllyCount = 0
	AIclumpAllyPower = 0
	AIclumpEnemyUnit: Unit | undefined
	AIclumpEnemyCount = 0
	AIclumpEnemyPower = 0
	AIclumpAllUnit: Unit | undefined
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

	static map: WeakMap<handle, Hero> = new Map<handle, Hero>()
	static readonly all: Hero[] = []
	static human: Hero[] = []
	static ai: Hero[] = []
	static PickedPlayers: Force

	constructor (owner: MapPlayer | number, unitId: number, pos: Position, face: number, skinId?: number) {
		this.unit = new Unit(owner, unitId, pos, face, skinId)

		this.heroType = HeroType.get(this.unit) as HeroType

		if (this.heroType) {
			// this.setupHero()

			// Define Skill Trees
			const config = new TalentConfig()
			const treeUi = GenerateNoButtonTalentTreeView(config.talentTreeView, Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0))

			this.skillTree = new BasicTalentTreeViewModel(
				config.talentTreeViewModel,
				this.unit.owner,
				treeUi,
				(i) =>
					new SkillTalentViewModel(
						config.talentViewModel,
						GenerateNoButtonTalentView(
							config.talentView,
							treeUi.talentTreeContainer,
							i.toString())))

			this.guardTree = new BasicTalentTreeViewModel(
				config.talentTreeViewModel,
				this.unit.owner,
				treeUi,
				(i) =>
					new GoldTalentViewModel(
						config.talentViewModel,
						GenerateNoButtonTalentView(
							config.talentView,
							treeUi.talentTreeContainer,
							i.toString())))

			this.armorTree = new BasicTalentTreeViewModel(
				config.talentTreeViewModel,
				this.unit.owner,
				treeUi,
				(i) =>
					new GoldTalentViewModel(
						config.talentViewModel,
						GenerateNoButtonTalentView(
							config.talentView,
							treeUi.talentTreeContainer,
							i.toString())))

			this.heroType.talentTrees(this)

			// Add to Hero Map
			Hero.map.set(this.unit.handle, this)
			Hero.all.push(this)

			if (this.unit.owner.controller === MAP_CONTROL_COMPUTER) {
				Hero.ai.push(this)
			} else {
				Hero.human.push(this)
			}
		} else {
			error('Unit is not defined in HeroTypes')
		}
	}

	public static get (unit: Unit) {
		return (Hero.map.has(unit.handle)) ? Hero.map.get(unit.handle) : undefined
	}

	public static fromEvent () {
		return this.get(Unit.fromEvent())
	}

	// AI Methods
	public AIstart (tick = this.AITickIncrement) {
		Logger.Information('Starting AI for', this.unit.nameProper)

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

	public AIpause () {
		this.AITickTimer.pause()
	}

	public AIexecute () {
		if (this.stateMachine) {
			this.AIintel()
			this.stateMachine.update()
		}
		// Nothing at the moment
	}

	public AIintel () {
		//
	}

	public AIlevelup () {
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
				this.unit.issueOrderAt(Order.Attack, 0, 0)
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

	get abilities () {
		return this.unit.data.abilities
	}

	set abilities (value) {
		this.unit.data.abilities = value
	}

	protected setupHero (): void {
		this.addStartingAbilities()
		this.addStartingItems()
	}

	addStartingAbilities = () => {
		try {
			if (this.heroType !== undefined) {
				for (let i = 0; i < this.heroType.abilityTypes.length; i++) {
					const heroAbilityType = this.heroType.abilityTypes[i]
					const ability = heroAbilityType.type.getAbility(this.unit) as Ability
					ability.permanent = true
					if (!heroAbilityType.starting) ability.disable()
					if (heroAbilityType.hidden) ability.hide()
				}
			}
		} catch (error) {
			Logger.Error("Hero.addStartingAbilities", error)
		}
	}

	get strengthBonus () {
		return this.getStatBonus().strength
	}

	set strengthBonus (value) {
		this.getStatBonus().strength = value
	}

	get agilityBonus () {
		return this.getStatBonus().agility
	}

	set agilityBonus (value) {
		this.getStatBonus().agility = value
	}

	get intelligenceBonus () {
		return this.getStatBonus().intelligence
	}

	set intelligenceBonus (value) {
		this.getStatBonus().intelligence = value
	}

	private getStatBonus () {
		return this.abilities.get(AbilityFour.BonusStats) as BonusStatsAbility
	}

	public addStartingItems (): void {
		if (this.heroType !== undefined) {
			// Add Attribute Items
			for (let n = 0; n < this.heroType.attributes.length; n++) {
				const element = this.heroType.attributes[n]

				for (let i = 0; i < element.items.length; i++) {
					const item = element.items[i].id
					this.unit.addItemById(item)
				}
			}

			// Add Specific Hero Type Items
			for (let i = 0; i < this.heroType.items.length; i++) {
				const item = this.heroType.items[i].id
				this.unit.addItemById(item)
			}
		}
	}

	static define = (): void => {
		Hero.PickedPlayers = new Force()

		// When a Hero Levels up
		Trigger.heroLevels.add(() => {
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

				// Remove Ability Points
				if (hero.unit.heroLevel < 15 && hero.unit.heroLevel % 2 !== 0) {
					hero.unit.skillPoints -= 1
				} else if (hero.unit.heroLevel < 25 && hero.unit.heroLevel >= 15 && hero.unit.heroLevel % 3 !== 0) {
					hero.unit.skillPoints -= 1
				} else if (hero.unit.heroLevel >= 25 && hero.unit.heroLevel % 4 !== 0) {
					hero.unit.skillPoints -= 1
				}
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
						hero.setupHero()
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
	}
}
