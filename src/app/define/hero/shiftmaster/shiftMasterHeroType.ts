import { Hero } from 'app/classes'
import { ShiftMasterSkillTree } from 'app/define/hero/shiftmaster/shiftMasterSkillTree'
import { Strategy } from 'lib/resources/strategy'
import { HeroType } from 'lib/w3ts/handles/herotype'
import { AbilityFour, Unit } from 'lib/w3ts/index'
import { HeroAttributes } from 'app/systems/heroAttribute/heroAttributes'
import { IHeroTypeDepend } from 'app/classes/IHeroTypeDepend'

export class ShiftMasterHeroType extends HeroType {
	protected static instance?: ShiftMasterHeroType

	static getInstance (depend: IHeroTypeDepend) {
		if (!ShiftMasterHeroType.instance) ShiftMasterHeroType.instance = new ShiftMasterHeroType(depend)
		return ShiftMasterHeroType.instance
	}

	private constructor (depend: IHeroTypeDepend) {
		super('E002', 'Shift Master')

		// Dependencies
		const abilTypes = depend.abilityTypes
		const heroAttr = depend.heroAttr

		this.talentTrees = (u: Hero) => {
			const skill = new ShiftMasterSkillTree(u.unit)
			const guard = new ShiftMasterSkillTree(u.unit)
			const armor = new ShiftMasterSkillTree(u.unit)

			u.skillTree.SetTree(skill)
			u.guardTree.SetTree(guard)
			u.armorTree.SetTree(armor)
		}

		// const G = Globals.get()

		// Attributes
		this.addHeroAttribute(heroAttr.agility)
		this.addHeroAttribute(heroAttr.melee)
		this.addHeroAttribute(heroAttr.assassin)

		// Items

		// AI Setup
		this.lifeFactor = 1
		this.manaFactor = 0.02
		this.lifeHighPercent = 65
		this.lifeLowPercent = 20
		this.lifeLowNumber = 400
		this.highDamageSingle = 17
		this.highDamageAverage = 25
		this.powerBase = 500
		this.powerLevel = 200
		this.unitClumpCheck = true
		this.unitClumpRange = 100
		this.intelRange = 1100
		this.intelCloseRange = 500

		this.traitAgressive = 60
		this.traitDefensive = 30
		this.traitSupport = 20
		this.traitAssassinate = 80

		this.addStrategy(Strategy.Agressive)
		this.addStrategy(Strategy.Neutral)
		this.addStrategy(Strategy.Defensive)

		// //
		// // Add Abilities
		// //

		this.addHeroAbilityType({ type: abilTypes.Shift, starting: true, ult: false })
		// this.addHeroAbilityType({ type: switchAbility, starting: true, ult: false })
		// this.addHeroAbilityType({ type: fallingstrike, starting: true, ult: false })
		// this.addHeroAbilityType({ type: felFormAbility, starting: false, ult: false })
		// this.addHeroAbilityType({ type: shiftStormAbility, starting: false, ult: true })

		// // Set Default Abilities for all Heroes
		// const tree = DefineTreeAbilities.get()
		// // this.addHeroAbilityType({ type: tree.collection, starting: true, ult: false })
		// // this.addHeroAbilityType({ type: tree.armor, starting: true, ult: false })
		// this.addHeroAbilityType({ type: tree.skill, starting: true })
		// // this.addHeroAbilityType({ type: tree.guard, starting: true, ult: false })

		// // Default Bonus Abilities
		// const bonus = DefineBonusAbilities.get()
		// this.addHeroAbilityType({ type: bonus.collection, starting: true, hidden: false })
		// this.addHeroAbilityType({ type: bonus.stats, starting: true })
		// this.addHeroAbilityType({ type: bonus.damage, starting: true })
		// this.addHeroAbilityType({ type: bonus.armor, starting: true })
		// this.addHeroAbilityType({ type: bonus.moveSpeed, starting: true })
		// this.addHeroAbilityType({ type: bonus.attackSpeed, starting: true })
	}

	override onDeath = (u: Unit) => {
		if (u.custom.has("felForm")) {
			const ability = u.abilities.get(AbilityFour.FelForm)
			ability.resetValues()
		}
	}
}
