import { Hero } from 'app/classes'
import { HeroAbilityType, iHeroAbilityType } from 'app/classes/heroAbility'
import { ItemType } from 'app/classes/itemType'
import { UnitType } from 'app/classes/unitType'
import { HeroAttribute } from 'app/systems/heroAttribute/heroAttribute'
import { Strategy } from 'lib/resources/strategy'
import { Unit } from './unit'

export class HeroType extends UnitType {
	static readonly map: Map<number, HeroType> = new Map()

	readonly name!: string

	public attributes: HeroAttribute[] = []
	public ultSpell?: HeroAbilityType
	public abilityTypes: HeroAbilityType[] = []

	public items: ItemType[] = []

	// AI Globals
	public lifeFactor = 1
	public manaFactor = 0.02
	public lifeHighPercent = 0.85
	public lifeLowPercent = 0.20
	public lifeLowNumber = 400
	public highDamageSingle = 0.17
	public highDamageAverage = 0.25
	public powerBase = 500
	public powerLevel = 200
	public unitClumpCheck = true
	public unitClumpRange = 100
	public intelRange = 1100
	public intelCloseRange = 500
	public talentTrees = (hero: Hero): void => { }

	public traitAgressive = 50
	public traitDefensive = 50
	public traitSupport = 0
	public traitAssassinate = 0

	public strategies: Strategy[] = []

	constructor (type: string, name: string) {
		super({ four: type, order: false })

		this.name = name

		HeroType.map.set(this.id, this)
		HeroSelector.addUnit(this.four)
	}

	static get (unit: Unit): HeroType | undefined {
		return HeroType.map.get(unit.typeId)
	}

	public addHeroAttribute (attribute: HeroAttribute): void {
		this.attributes.push(attribute)
	}

	public addHeroAbilityType (heroAbilityType: iHeroAbilityType): void {
		const heroAbility = new HeroAbilityType(heroAbilityType)

		this.abilityTypes.push(heroAbility)

		if (heroAbilityType.ult) { this.ultSpell = heroAbility }
	}

	public addItem (itemType: ItemType): void {
		this.items.push(itemType)
	}

	public addStrategy (strat: Strategy): void {
		this.strategies.push(strat)
	}
}
