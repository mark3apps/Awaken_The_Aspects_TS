import { FallingStrikeAbility } from 'app/abilities/shifter/fallingstrike'
import { ShadestormAbility } from 'app/abilities/shifter/shadestorm'
import { SwitchAbility } from 'app/abilities/shifter/switch'
import { Hero } from 'app/classes'
import { Ability, EffectType, TargetType } from 'app/classes/ability'
import { ShiftSkill } from 'app/classes/heroAbility'
import { HeroAttribute } from 'app/systems/attribute'
import { DruidBalanceTree } from 'app/systems/talents/talentTrees/druidBalance'
import { Strategy } from 'lib/resources/strategy'
import { HeroType } from 'lib/w3ts/handles/herotype'
import { AbilityFour, Order } from 'lib/w3ts/index'

export class ShiftMasterHeroType extends HeroType {
	constructor () {
		super('E002', 'Shift Master')

		this.talentTrees = (u: Hero) => {
			const skill = new DruidBalanceTree(u)
			const guard = new DruidBalanceTree(u)
			const armor = new DruidBalanceTree(u)

			u.skillTree.SetTree(skill)
			u.guardTree.SetTree(skill)
			u.armorTree.SetTree(skill)
		}

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

		// Abilities

		// Shade Strength
		this.addAbility(new Ability({
			four: AbilityFour.ShadeStrength,
			permanent: true
		}))

		// Swift Moves
		this.addAbility(new Ability({
			four: AbilityFour.SwiftMoves,
			permanent: true
		}))

		// Swift Attacks
		this.addAbility(new Ability({
			four: AbilityFour.SwiftAttacks,
			permanent: true
		}))

		// Switch
		this.addAbility(new SwitchAbility())

		// Shift
		this.addAbility(new Ability({
			four: AbilityFour.Shift,
			orderId: Order.Berserk,
			type: EffectType.Instant,
			target: TargetType.SupportSelf,
			permanent: true,
			starting: true,
			addEffect: true,
			onEffect: () => { ShiftSkill.fromEvent().onEffect() }
		}))

		// Falling Strike
		this.addAbility(new FallingStrikeAbility())

		// Fel Form
		this.addAbility(new Ability({
			four: AbilityFour.FelForm,
			orderId: Order.Metamorphosis,
			type: EffectType.Instant,
			target: TargetType.SupportSelf,
			permanent: true
		}))

		// Shift Storm
		this.addAbility(new ShadestormAbility())
	}
}
