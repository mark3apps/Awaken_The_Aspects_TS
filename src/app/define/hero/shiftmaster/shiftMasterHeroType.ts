import { Hero } from 'app/classes'
import { ShiftMasterSkillTree } from 'app/define/hero/shiftmaster/shiftMasterSkillTree'
import { Strategy } from 'lib/resources/strategy'
import { HeroType } from 'lib/w3ts/handles/herotype'
import { AbilityFour, Unit } from 'lib/w3ts/index'
import { HeroAttributes } from 'app/systems/heroAttribute/heroAttributes'

export class ShiftMasterHeroType extends HeroType {
	constructor () {
		super('E002', 'Shift Master')

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
		this.addHeroAttribute(HeroAttributes.agility)
		this.addHeroAttribute(HeroAttributes.melee)
		this.addHeroAttribute(HeroAttributes.assassin)

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

		//
		// Define Ability Types
		//

		// const shiftAbility = new AbilityType({
		// 	four: AbilityFour.Shift,
		// 	orderId: Order.Berserk,
		// 	effectType: EffectType.Casts,
		// 	targetType: TargetType.SupportSelf,
		// 	onEffect: () => { ShiftAbility.fromCast().onEffect() }
		// })
		// shiftAbility.getAbility = (unit: Unit) => { return ShiftAbility.get(unit, shiftAbility) }

		// const switchAbility = new AbilityType({
		// 	four: AbilityFour.MirrorSwitch,
		// 	orderId: Order.Reveal,
		// 	effectType: EffectType.Casts,
		// 	targetType: TargetType.Specific,
		// 	onEffect: () => { SwitchAbility.fromCast().onEffect() }
		// })
		// switchAbility.getAbility = (unit: Unit) => { return SwitchAbility.get(unit, switchAbility) }

		// const felFormAbility = new AbilityType({
		// 	four: AbilityFour.FelForm,
		// 	orderId: Order.Metamorphosis,
		// 	effectType: EffectType.Casts,
		// 	targetType: TargetType.SupportSelf,
		// 	onEffect: () => { FelFormAbility.fromCast().onEffect() }
		// })
		// felFormAbility.getAbility = (unit: Unit) => { return FelFormAbility.get(unit, felFormAbility) }

		// const fallingstrike = new AbilityType({
		// 	four: AbilityFour.FallingStrike,
		// 	orderId: Order.Thunderbolt,
		// 	effectType: EffectType.Casts,
		// 	targetType: TargetType.DamageAreaTarget,
		// 	onEffect: () => { FallingStrike.fromCast().onEffect() }
		// })
		// fallingstrike.getAbility = (unit: Unit) => { return FallingStrike.get(unit, fallingstrike) }

		// const shiftStormAbility = new AbilityType({
		// 	four: AbilityFour.ShiftStorm,
		// 	orderId: Order.Channel,
		// 	effectType: EffectType.Casts,
		// 	targetType: TargetType.Specific,
		// 	onEffect: () => { ShadestormAbility.fromCast().onEffect() }
		// })
		// shiftStormAbility.getAbility = (unit: Unit) => { return ShadestormAbility.get(unit, shiftStormAbility) }

		// //
		// // Add Abilities
		// //

		// this.addHeroAbilityType({ type: shiftAbility, starting: true, ult: false })
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
