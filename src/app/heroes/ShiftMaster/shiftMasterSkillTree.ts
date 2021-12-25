import { ShadestormAbility, ShiftAbility } from 'app/heroes/ShiftMaster/abilities'
import { Hero } from 'app/classes'
import { ITalentTreeBuilder } from 'lib/STK/UI/STK/Interfaces/ITalentTreeBuilder'
import { ActivationEvent } from 'lib/STK/UI/STK/Models/Talent'
import { TalentTree } from 'lib/STK/UI/STK/Models/TalentTree'
import { AbilityFour, Icon } from 'lib/w3ts'
import { FelFormAbility } from './abilities/felForm'

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

		builder.AddMultirankTalent(0, 7, 3, lvl => {
			const distance = [25, 50, 75]
			const shadeDamageTaken = ["-5%", "-10%", "-15%"]
			const shadeDamageDealt = ["5%", "10%", "15%"]
			return {
				Name: "Improved Shift",
				Icon: Icon.MirrorImage,
				Description: `Increases Shifts effectiveness.|n+${distance[lvl - 1]} Distance Travelled|n${shadeDamageTaken[lvl - 1]} Shade Damage Taken|n${shadeDamageDealt[lvl - 1]} Shade Damage Dealt`,
				Cost: 2,
				OnAllocate: (e) => this.ActivateImprovedShift(e)
			}
		})
		builder.AddMultirankTalent(0, 6, 1, lvl => {
			const shadeDamageTaken = ["-10%"]
			const shadeDamageDealt = ["+10%"]
			const shadeDuration = [3]
			return {
				Name: "Mastered Shift",
				Icon: Icon.MirrorImage,
				Description: `Increases Shifts effectiveness.|n${shadeDamageTaken[lvl - 1]} Shade Damage Taken|n${shadeDamageDealt[lvl - 1]} Shade Damage DealtShade Duration +${shadeDuration[lvl - 1]}`,
				Cost: 2,
				OnAllocate: (e) => this.ActivateMasteredShift(e),
				Dependency: { up: 3 }
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
		builder.AddMultirankTalent(2, 7, 5, lvl => {
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
		builder.AddMultirankTalent(1, 6, 5, lvl => {
			const shadeDamageDealt = ["8%", "16%", "24%", "32%", "40%"]
			return {
				Name: 'Shade Health',
				Description: `Decreases the damage dealt to shades by ${shadeDamageDealt[lvl - 1]}.`,
				Icon: Icon.ArcaniteArmor,
				OnAllocate: (e) => this.ActivateShadeHealth(e),
				Dependency: { left: 1 }
			}
		})

		//
		// Fel Form
		//

		// Learn <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		builder.AddTalent(3, 7, {
			Name: "Learn Fel Form",
			Description: "",
			Icon: Icon.ChaosGrom,
			OnAllocate: (e) => this.FelFormLearn(e),
			Requirements: (e) => {
				return [e.unit.heroLevel >= 8, "Level 8 Required"]
			}
		})

		builder.AddMultirankTalent(3, 6, 4, lvl => {
			const stats = [
				{ hp: 0, attack: 5, regen: 2, armor: 2, attSpeed: 1.5 },
				{ hp: 0, attack: 5, regen: 2, armor: 2, attSpeed: 1.5 },
				{ hp: 0, attack: 5, regen: 2, armor: 2, attSpeed: 1.5 },
				{ hp: 0, attack: 5, regen: 2, armor: 2, attSpeed: 1.5 }
			]
			return {
				Name: "Improved Fel Form",
				Description: "Here",
				Icon: Icon.ChaosGrom,
				OnAllocate: (e) => this.FelFormImproved(e),
				Dependency: { up: 1 },
				Cost: 2
			}
		})

		builder.AddTalent(2, 6, {
			Name: "Fel Stability",
			Description: "Increases the duration of Fel Form by 4 seconds.",
			Icon: Icon.ChaosGrom,
			OnAllocate: (e) => this.FelStability(e),
			Dependency: { right: 2 }
		})

		builder.AddTalent(3, 5, {
			Name: "Mastered Fel Form",
			Description: "",
			Icon: Icon.ChaosGrom,
			OnAllocate: (e) => this.FelFormMastered(e),
			Cost: 3,
			Dependency: { up: 4 }
		})

		builder.AddTalent(3, 0, {
			Name: "Learn Shade Storm",
			Description: "",
			Icon: Icon.Whirlwind,
			OnAllocate: (e) => this.LearnShiftstorm(e),
			Cost: 2,
			Requirements: (e) => {
				return [e.unit.heroLevel >= 15, "Level 15 Required"]
			}
		})
	}

	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// Can use these methods inside Activate/Deactivate/Allocate/Deallocate/Requirements functions

	//
	// Shift Storm
	//

	LearnShiftstorm (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.getAbility(AbilityFour.ShiftStorm) as ShadestormAbility
			ability.enable()
		}
	}

	//
	// Fel Form
	//

	FelFormLearn (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			try {
				const ability = hero.getAbility(AbilityFour.FelForm) as FelFormAbility
				ability.enable()
			} catch (error) {
				print(error)
			}
		}
	}

	FelFormImproved (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.getAbility(AbilityFour.FelForm) as FelFormAbility
			// ability.show()
		}
	}

	FelFormMastered (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.getAbility(AbilityFour.FelForm) as FelFormAbility
			// ability.show()
		}
	}

	FelStability (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.getAbility(AbilityFour.FelForm) as FelFormAbility
			// ability.show()
		}
	}

	//
	// Shift
	//

	ActivateImprovedShift (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.getAbility(AbilityFour.Shift) as ShiftAbility
			ability.distance += 50
			ability.shadeDamageTaken -= 0.05
			ability.shadeDamageDealt += 0.05
			ability.tooltipName = "Improved Shift"
			// ability.update()
			hero.updateAbilityTooltips()
		}
	}

	ActivateMasteredShift (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.getAbility(AbilityFour.Shift) as ShiftAbility
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
			const ability = hero.getAbility(AbilityFour.Shift) as ShiftAbility
			ability.distance += 50
			ability.update()
		}
	}

	ActivateShadeStrength (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.getAbility(AbilityFour.Shift) as ShiftAbility
			ability.shadeDamageDealt += 0.05
			ability.update()
		}
	}

	ActivateShadeHealth (e: ActivationEvent) {
		const hero = Hero.get(e.unit)
		if (hero) {
			const ability = hero.getAbility(AbilityFour.Shift) as ShiftAbility
			ability.shadeDamageTaken -= 0.08
			ability.update()
		}
	}
}
