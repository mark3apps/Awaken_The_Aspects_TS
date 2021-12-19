import { ShiftAbility } from 'app/heroes/ShiftMaster/abilities'
import { Hero } from 'app/classes'
import { ITalentTreeBuilder } from 'lib/STK/UI/STK/Interfaces/ITalentTreeBuilder'
import { ActivationEvent } from 'lib/STK/UI/STK/Models/Talent'
import { TalentTree } from 'lib/STK/UI/STK/Models/TalentTree'
import { AbilityFour, Icon } from 'lib/w3ts'

export class ShiftMasterSkillTree extends TalentTree {
	get talentPoints (): number {
		return this.ownerPlayer.getState(PLAYER_STATE_RESOURCE_LUMBER)
	}

	set talentPoints (value: number) {
		this.ownerPlayer.setState(PLAYER_STATE_RESOURCE_LUMBER, value)
	}

	// // Overriden stub methods ==================================================
	// GetTalentPoints(nothing returns integer
	//     return GetPlayerState(this.ownerPlayer, PLAYER_STATE_RESOURCE_LUMBER)
	// }

	// SetTalentPoints(integer points {
	//     SetPlayerState(this.ownerPlayer, PLAYER_STATE_RESOURCE_LUMBER, points)
	//     // STK_UpdateTalentViews(this.ownerPlayer)
	// }

	// GetTitle(nothing returns string
	//     return this.title
	// }
	// =========================================================================

	public Initialize (builder: ITalentTreeBuilder): void {
		builder.SetColumnsRows(4, 8)
		builder.title = 'Shift Master Skill Tree'
		// builder.backgroundImage = 'balancebg.blp'

		// The tree should be built with talents here
		// ==============================================

		builder.AddMultirankTalent(0, 7, 2, lvl => {
			const distance = [50, 100]
			const shadeDamageTaken = ["-5%", "-10%"]
			const shadeDamageDealt = ["5%", "10%"]
			return {
				Name: "Improved Shift",
				Icon: Icon.MirrorImage,
				Description: `Increases Shifts effectiveness.|n+${distance[lvl - 1]} Distance Travelled|n${shadeDamageTaken[lvl - 1]} Shade Damage Taken|n${shadeDamageDealt[lvl - 1]} Shade Damage Dealt`,
				Cost: 2,
				OnAllocate: (e) => this.ActivateImprovedShift(e)
			}
		})
		builder.AddMultirankTalent(0, 6, 2, lvl => {
			const distance = [50, 100]
			const shadeDamageTaken = ["-5%", "-10%"]
			const shadeDamageDealt = ["5%", "10%"]
			const shadeDuration = [3, 6]
			return {
				Name: "Mastered Shift",
				Icon: Icon.MirrorImage,
				Description: `Increases Shifts effectiveness.|n+${distance[lvl - 1]} Distance Travelled|n${shadeDamageTaken[lvl - 1]} Shade Damage Taken|n${shadeDamageDealt[lvl - 1]} Shade Damage DealtShade Duration +${shadeDuration[lvl - 1]}`,
				Cost: 2,
				OnAllocate: (e) => this.ActivateMasteredShift(e),
				Dependency: { up: 1 }
			}
		})

		// Improved Distance <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		builder.AddMultirankTalent(1, 7, 4, lvl => {
			const distance = [50, 100, 150, 200]
			return {
				Name: 'Shift Speed',
				Description: `Increases the distance travelled by ${distance[lvl - 1]}.`,
				Icon: Icon.Berserk,
				OnAllocate: (e) => this.ActivateShiftDistance(e),
				Dependency: { left: 1 }
			}
		})

		// Improved Shade Strength <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		builder.AddMultirankTalent(1, 6, 5, lvl => {
			const shadeDamageDealt = ["5%", "10%", "15%", "20%", "25%"]
			return {
				Name: 'Shade Strength',
				Description: `Increases the damage shades deal by ${shadeDamageDealt[lvl - 1]}.`,
				Icon: Icon.ArcaniteMelee,
				OnAllocate: (e) => this.ActivateShadeStrength(e),
				Dependency: { left: 1 }
			}
		})

		// Improved Shade Health <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		builder.AddMultirankTalent(2, 6, 5, lvl => {
			const shadeDamageDealt = ["8%", "16%", "24%", "32%", "40%"]
			return {
				Name: 'Shade Health',
				Description: `Decreases the damage dealt to shades by ${shadeDamageDealt[lvl - 1]}.`,
				Icon: Icon.ArcaniteArmor,
				OnAllocate: (e) => this.ActivateShadeHealth(e),
				Dependency: { left: 1 }
			}
		})

		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Nature's Grasp <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddTalent(1, 6, {

		// 	Name: "Nature's Grasp",
		// 	Description: 'While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1).  Only useable outdoors.  1 charge.  Lasts 45 sec.',
		// 	Icon: 'spell_nature_natureswrath',
		// 	OnActivate: (e) => this.ActivateCallFlyingSheep(e)
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Improved Nature's Grasp <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddMultirankTalent(2, 6, 4, lvl => {
		// 	const entangleChanceBonus = [15, 30, 45, 65]
		// 	return {
		// 		Name: "Improved Nature's Grasp",
		// 		Description: `Increases the chance for your Nature's Grasp to entangle an enemy by ${entangleChanceBonus[lvl - 1]}%.`,
		// 		Icon: 'spell_nature_natureswrath',
		// 		OnActivate: (e) => this.ActivateCallFlyingSheep(e),
		// 		Dependency: { left: 1 }
		// 	}
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Improved Entangling Roots <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddMultirankTalent(0, 5, 3, lvl => {
		// 	const chance = [40, 70, 100]
		// 	return {
		// 		Name: 'Improved Entangling Roots',
		// 		Description: `Gives you a ${chance[lvl - 1]}% chance to avoid interruption caused by damage while casting Entangling Roots.`,
		// 		Icon: 'EntanglingRoots',
		// 		OnActivate: (e) => this.ActivateCallFlyingSheep(e)
		// 	}
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Improved Moonfire <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddMultirankTalent(1, 5, 5, lvl => {
		// 	return {
		// 		Name: 'Improved Moonfire',
		// 		Description: `Increases the damage and critical strike chance of your Moonfire spell by ${lvl * 2}%.`,
		// 		Icon: 'Starfall',
		// 		OnActivate: (e) => this.ActivateCallFlyingSheep(e)
		// 	}
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Natural Weapons <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddMultirankTalent(2, 5, 5, lvl => {
		// 	return {
		// 		Name: 'Natural Weapons',
		// 		Description: `Increases the damage you deal with physical attacks in all forms by ${lvl * 2}%.`,
		// 		Icon: 'AdvancedStrengthOfTheMoon',
		// 		OnActivate: (e) => this.ActivateCallFlyingSheep(e)
		// 	}
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Natural Shapeshifter <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddMultirankTalent(3, 5, 3, lvl => {
		// 	return {
		// 		Name: 'Natural Shapeshifter',
		// 		Description: `Reduces the mana cost of all shapeshifting by ${lvl * 10}%.`,
		// 		Icon: 'WispSplode',
		// 		OnActivate: (e) => this.ActivateCallFlyingSheep(e)
		// 	}
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Improved Thorns <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddMultirankTalent(0, 4, 3, lvl => {
		// 	return {
		// 		Name: 'Improved Thorns',
		// 		Description: `Increases damage caused by your Thorns spell by ${lvl * 25}%.`,
		// 		Icon: 'Thorns',
		// 		OnActivate: (e) => this.ActivateCallFlyingSheep(e)
		// 	}
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

		// // Link >>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddTalent(1, 4, {
		// 	Name: 'Link',
		// 	Description: 'Links',
		// 	Dependency: { up: 5 },
		// 	IsLink: true
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

		// // Omen of Clarity <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddTalent(2, 4, {
		// 	Name: 'Omen of Clarity',
		// 	Description: "Imbues the Druid with natural energy.  Each of the Druid's melee attacks has a chance of causing the caster to enter a Clearcasting state.  The Clearcasting state reduces the Mana, Rage or Energy cost of your next damage or healing spell or offensive ability by 100%.  Lasts 10 min.",
		// 	Icon: 'CrystalBall',
		// 	OnActivate: (e) => this.ActivateCallFlyingSheep(e),
		// 	Dependency: { up: 5 }
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Nature's Reach <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddMultirankTalent(3, 4, 2, lvl => {
		// 	return {
		// 		Name: "Nature's Reach",
		// 		Description: `Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire, and Hurricane spells by ${lvl * 10}%.`,
		// 		Icon: 'spell_nature_naturetouchgrow',
		// 		OnActivate: (e) => this.ActivateCallFlyingSheep(e)
		// 	}
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Vengeance <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddMultirankTalent(1, 3, 5, lvl => {
		// 	return {
		// 		Name: 'Vengeance',
		// 		Description: `Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by ${lvl * 20}%.`,
		// 		Icon: 'Purge',
		// 		OnActivate: (e) => this.ActivateCallFlyingSheep(e),
		// 		Dependency: { up: 1 }
		// 	}
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Improved Starfire <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddMultirankTalent(2, 3, 5, lvl => {
		// 	return {
		// 		Name: 'Improved Starfire',
		// 		Description: `Reduces the cast time of Starfire by ${lvl * 0.1} sec and has a 3% chance to stun the target for 3 sec.`,
		// 		Icon: 'spell_arcane_starfire',
		// 		OnActivate: (e) => this.ActivateCallFlyingSheep(e)
		// 	}
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Nature's Grace <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddTalent(1, 2, {
		// 	Name: "Nature's Grace",
		// 	Description: 'All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec.',
		// 	Icon: 'NaturesBlessing',
		// 	OnActivate: (e) => this.ActivateCallFlyingSheep(e)
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Moonglow <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddMultirankTalent(2, 2, 3, lvl => {
		// 	return {
		// 		Name: 'Moonglow',
		// 		Description: `Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by ${lvl * 3}%.`,
		// 		Icon: 'Sentinel',
		// 		OnActivate: (e) => this.ActivateCallFlyingSheep(e)
		// 	}
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Moonfury <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddMultirankTalent(1, 1, 5, lvl => {
		// 	return {
		// 		Name: 'Moonfury',
		// 		Description: `Increases the damage done by your Starfire, Moonfire and Wrath spells by ${lvl * 2}%.`,
		// 		Icon: 'spell_nature_moonglow',
		// 		OnActivate: (e) => this.ActivateCallFlyingSheep(e),
		// 		Dependency: { up: 1 }
		// 	}
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// // Moonkin Form <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		// builder.AddTalent(1, 0, {
		// 	Name: 'Moonkin Form',
		// 	Description: 'Transforms the Druid into Moonkin Form.  While in this form the armor contribution from items is increased by 360% and all party members within 30 yards have their spell critical chance increased by 3%.  The Moonkin can only cast Balance spells while shapeshifted.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.',
		// 	Icon: 'spell_nature_forceofnature',
		// 	OnActivate: (e) => this.ActivateCallFlyingSheep(e)
		// })
		// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

		// Only need to this if some talents start with certain rank
		// this.SaveTalentRankState()
	}

	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// Can use these methods inside Activate/Deactivate/Allocate/Deallocate/Requirements functions

	ActivateCallFlyingSheep (e: ActivationEvent) {
		// local unit u = thistype.GetEventUnit()
		// CreateUnit(GetOwningPlayer(u), 'nshf', GetUnitX(u), GetUnitY(u), GetRandomDirectionDeg())
	}

	ActivateImprovedShift (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.abilities.get(AbilityFour.Shift) as ShiftAbility
			ability.distance += 50
			ability.shadeDamageTaken -= 0.05
			ability.shadeDamageDealt += 0.05
			ability.tooltipName = "Improved Shift"
			ability.update()
		}
	}

	ActivateMasteredShift (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.abilities.get(AbilityFour.Shift) as ShiftAbility
			ability.distance += 50
			ability.shadeDamageTaken -= 0.05
			ability.shadeDamageDealt += 0.05
			ability.shadeDuration += 3
			ability.cooldown -= 1
			ability.tooltipName = "Mastered Shift"
			ability.update()
		}
	}

	ActivateShiftDistance (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.abilities.get(AbilityFour.Shift) as ShiftAbility
			ability.distance += 50
			ability.update()
		}
	}

	ActivateShadeStrength (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.abilities.get(AbilityFour.Shift) as ShiftAbility
			ability.shadeDamageDealt += 0.05
			ability.update()
		}
	}

	ActivateShadeHealth (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.abilities.get(AbilityFour.Shift) as ShiftAbility
			ability.shadeDamageTaken -= 0.08
			ability.update()
		}
	}
}
