import { FallingStrikeAbility } from 'app/heroes/ShiftMaster/abilities/fallingstrike'
import { ShadestormAbility } from 'app/heroes/ShiftMaster/abilities/shadestorm'
import { SwitchAbility } from 'app/heroes/ShiftMaster/abilities/switch'
import { Hero } from 'app/classes'
import { AbilityType, EffectType, TargetType } from 'app/classes/abilityType'
import { HeroAttribute } from 'app/systems/attribute'
import { ShiftMasterSkillTree } from 'app/heroes/ShiftMaster/shiftMasterSkillTree'
import { Strategy } from 'lib/resources/strategy'
import { HeroType } from 'lib/w3ts/handles/herotype'
import { AbilityFour, Order, Unit } from 'lib/w3ts/index'
import { ShiftAbility } from 'app/heroes/ShiftMaster/abilities'
import { FelFormAbility } from 'app/heroes/ShiftMaster/abilities/felForm'
import { DefineBonusAbilities } from 'app/abilities/bonus/defineBonusAbilities'
import { DefineTreeAbilities } from 'app/abilities/bonus/defineTreeAbilities'

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
		this.addHeroAttribute(HeroAttribute.agility)
		this.addHeroAttribute(HeroAttribute.melee)
		this.addHeroAttribute(HeroAttribute.assassin)

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

		const shiftAbility = new AbilityType({
			four: AbilityFour.Shift,
			orderId: Order.Berserk,
			type: EffectType.Instant,
			target: TargetType.SupportSelf,
			onEffect: () => { ShiftAbility.fromCast().onEffect() }
		})
		shiftAbility.getAbility = (unit: Unit) => { return ShiftAbility.get(unit, shiftAbility) }

		const switchAbility = new AbilityType({
			four: AbilityFour.MirrorSwitch,
			orderId: Order.Reveal,
			type: EffectType.Instant,
			target: TargetType.Specific,
			onEffect: () => { SwitchAbility.fromCast().onEffect() }
		})
		switchAbility.getAbility = (unit: Unit) => { return SwitchAbility.get(unit, switchAbility) }

		const felFormAbility = new AbilityType({
			four: AbilityFour.FelForm,
			orderId: Order.Metamorphosis,
			type: EffectType.Instant,
			target: TargetType.SupportSelf
		})
		felFormAbility.getAbility = (unit: Unit) => { return FelFormAbility.get(unit, felFormAbility) }

		const fallingstrike = new AbilityType({
			four: AbilityFour.FallingStrike,
			orderId: Order.Thunderbolt,
			type: EffectType.Instant,
			target: TargetType.DamageAreaTarget,
			onEffect: () => { FallingStrikeAbility.fromCast().onEffect() }
		})
		fallingstrike.getAbility = (unit: Unit) => { return FallingStrikeAbility.get(unit, fallingstrike) }

		const shiftStormAbility = new AbilityType({
			four: AbilityFour.ShiftStorm,
			orderId: Order.Channel,
			type: EffectType.Instant,
			target: TargetType.Specific,
			onEffect: () => { ShadestormAbility.fromCast().onEffect() }
		})
		shiftStormAbility.getAbility = (unit: Unit) => { return ShadestormAbility.get(unit, shiftStormAbility) }

		//
		// Add Abilities
		//

		this.addHeroAbilityType({ type: shiftAbility, starting: true, ult: false })
		this.addHeroAbilityType({ type: switchAbility, starting: true, ult: false })
		this.addHeroAbilityType({ type: fallingstrike, starting: true, ult: false })
		this.addHeroAbilityType({ type: felFormAbility, starting: false, ult: false })
		this.addHeroAbilityType({ type: shiftStormAbility, starting: false, ult: true })

		// Set Default Abilities for all Heroes
		const bonus = DefineBonusAbilities.get()
		const tree = DefineTreeAbilities.get()
		this.addHeroAbilityType({ type: tree.collection, starting: true, ult: false })
		this.addHeroAbilityType({ type: tree.armor, starting: true, ult: false })
		this.addHeroAbilityType({ type: tree.skill, starting: true, ult: false })
		this.addHeroAbilityType({ type: tree.guard, starting: true, ult: false })

		// Default Bonus Abilities
		this.addHeroAbilityType({ type: bonus.collection, starting: true, ult: false, hidden: true })
		this.addHeroAbilityType({ type: bonus.stats, starting: true, ult: false, hidden: false })
	}
}
