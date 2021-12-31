import { StateMachine, IState } from 'app/heroes/stateMachine'
import { Logger } from 'app/log'
import { TalentConfig } from 'app/systems/talents/talentConfig'
import { GoldTalentViewModel } from 'app/systems/talents/viewModels/GoldTalentViewModel'
import { SkillTalentViewModel } from 'app/systems/talents/viewModels/SkillTalentViewModel'
import { GenerateNoButtonTalentTreeView } from 'app/systems/talents/views/NoButtonTalentTreeView'
import { GenerateNoButtonTalentView } from 'app/systems/talents/views/NoButtonTalentView'
import { BasicTalentTreeViewModel } from 'lib/STK/UI/STK/ViewModels/BasicTalentTreeViewModel'
import { Timer, Unit, HeroType, Group, Force, MapPlayer, Frame, Order } from 'lib/w3ts'
import { UnitType } from '.'
import { HeroMap } from './HeroTypeMap'
import { Coordinate } from "./Coordinate"

export interface IHeroParam {
	owner: MapPlayer,
	unitType: UnitType,
	coor: Coordinate,
	face?: number,
}

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

	static readonly all: Hero[] = []
	static human: Hero[] = []
	static ai: Hero[] = []
	static PickedPlayers: Force

	constructor (hero: IHeroParam) {
		this.unit = new Unit(hero.owner, hero.unitType, hero.coor, hero.face)

		this.heroType = HeroType.get(this.unit) as HeroType

		if (this.heroType) {
			this.setupHero()

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
			HeroMap.map.set(this.unit.handle, this)
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
		return this.unit.abilities
	}

	set abilities (value) {
		this.unit.abilities = value
	}

	protected setupHero (): void {
		this.addStartingAbilities()
		this.addStartingItems()
	}

	addStartingAbilities = () => {
		try {
			if (this.heroType !== undefined) {
				for (let i = 0; i < this.heroType.abilityTypes.length; i++) {
					// const heroAbilityType = this.heroType.abilityTypes[i]
					// const ability = heroAbilityType.type
					// ability.permanent = true
					// if (!heroAbilityType.starting) ability.disable()
					// if (heroAbilityType.hidden) ability.hide()
				}
			}
		} catch (error) {
			Logger.Error("Hero.addStartingAbilities", error)
		}
	}

	getAbility = (typeFour: string) => {
		return this.unit.abilities.get(typeFour)
	}

	updateAbilityTooltips = () => {
		// for (let i = 0; i < this.unit.abilityFours.length; i++) {
		// 	const abilityType = AbilityTypeHandle.getObject(this.unit.abilityFours[i])
		// 	if (abilityType) {
		// 		const ability = abilityType.getAbility(this.unit)
		// 		ability.updateTooltips()
		// 	}
		// }
	}

	// private getDamageBonus () {
	// 	return this.getAbility(AbilityFour.BonusDamage) as BonusDamageAbility
	// }

	// get damageBonus () {
	// 	return this.getDamageBonus().damage
	// }

	// set damageBonus (value) {
	// 	this.getDamageBonus().damage = value
	// }

	// private getArmorBonus () {
	// 	return this.getAbility(AbilityFour.BonusArmor) as BonusArmorAbility
	// }

	// get armorBonus () {
	// 	return this.getArmorBonus().armor
	// }

	// set armorBonus (value) {
	// 	this.getArmorBonus().armor = value
	// }

	// private getAttackSpeedBonus () {
	// 	return this.getAbility(AbilityFour.BonusAttackSpeed) as BonusAttackSpeedAbility
	// }

	// get moveSpeedBonus () {
	// 	return this.getMoveSpeedBonus().moveSpeed
	// }

	// set moveSpeedBonus (value) {
	// 	this.getMoveSpeedBonus().moveSpeed = value
	// }

	// private getMoveSpeedBonus () {
	// 	return this.getAbility(AbilityFour.BonusMovementSpeed) as BonusMoveSpeedAbility
	// }

	// get attackSpeedBonus () {
	// 	return this.getAttackSpeedBonus().attackSpeed
	// }

	// set attackSpeedBonus (value) {
	// 	this.getAttackSpeedBonus().attackSpeed = value
	// }

	// get strengthBonus () {
	// 	return this.getStatBonus().strength
	// }

	// set strengthBonus (value) {
	// 	this.getStatBonus().strength = value
	// }

	// get agilityBonus () {
	// 	return this.getStatBonus().agility
	// }

	// set agilityBonus (value) {
	// 	this.getStatBonus().agility = value
	// }

	// get intelligenceBonus () {
	// 	return this.getStatBonus().intelligence
	// }

	// set intelligenceBonus (value) {
	// 	this.getStatBonus().intelligence = value
	// }

	// private getStatBonus () {
	// 	return this.getAbility(AbilityFour.BonusStats) as BonusStatsAbility
	// }

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
}
