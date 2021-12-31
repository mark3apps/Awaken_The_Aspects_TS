import { ShadestormAbility, Shift } from 'app/define/hero/shiftmaster/abilities'
import { ITalentTreeBuilder } from 'lib/STK/UI/STK/Interfaces/ITalentTreeBuilder'
import { ActivationEvent } from 'lib/STK/UI/STK/Models/Talent'
import { TalentTree } from 'lib/STK/UI/STK/Models/TalentTree'
import { AbilityFour, Icon } from 'lib/w3ts'
import { FelForm } from './abilities/felForm'

interface IImprovedShift { distance: number, taken: number, dealt: number }
interface IMasteredShift { cooldown: number, distance: number, duration: number, taken: number, dealt: number }
interface IImprovedFelForm { hp: number, attack: number, regen: number, armor: number, attSpeed: number, moveSpeed: number, duration: number, cooldown: number }

export class ShiftMasterSkillTree extends TalentTree {
	get talentPoints (): number {
		return this.ownerPlayer.lumber
	}

	set talentPoints (value: number) {
		this.ownerPlayer.lumber = value
	}

	public Initialize (builder: ITalentTreeBuilder): void {
		builder.SetColumnsRows(4, 8)
		builder.title = 'Shift Master Skill Tree'

		// The tree should be built with talents here
		// ==============================================

		//
		// Shift <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		//

		// Improved Shift
		builder.AddMultirankTalent(0, 7, 3, lvl => {
			const stats: IImprovedShift[] = [
				{ distance: 0, taken: 0, dealt: 0 },
				{ distance: 25, taken: -0.05, dealt: 0.05 },
				{ distance: 50, taken: -0.10, dealt: 0.10 },
				{ distance: 75, taken: -0.15, dealt: 0.15 }]
			return {
				Name: "Improved Shift",
				Icon: Icon.MirrorImage,
				Description: `Increases Shifts effectiveness.|n+${stats[lvl].distance} Distance Travelled|n${stats[lvl].taken} Shade Damage Taken|n${stats[lvl].dealt} Shade Damage Dealt`,
				Tag: {
					distance: stats[lvl].distance - stats[lvl - 1].distance,
					taken: stats[lvl].taken - stats[lvl - 1].taken,
					dealt: stats[lvl].dealt - stats[lvl - 1].dealt
				},
				Cost: 2,
				OnAllocate: (e) => this.ImprovedShift(e)
			}
		})

		// Masterd Shift
		const masteredShiftStats: IMasteredShift = { cooldown: -1, distance: 50, duration: 3, taken: -0.1, dealt: 0.1 }
		builder.AddTalent(0, 6, {
			Name: "Mastered Shift",
			Icon: Icon.MirrorImage,
			Tag: masteredShiftStats,
			Description: `Increases Shifts effectiveness.|n+${masteredShiftStats.distance} Distance Travelled|n ${math.floor(masteredShiftStats.taken * 100)}% Shade Damage Taken, +${math.floor(masteredShiftStats.dealt * 100)}% Shade Damage Dealt|n+${math.floor(masteredShiftStats.duration)}Shade Duration|n ${masteredShiftStats.cooldown} second Cooldown`,
			Cost: 2,
			OnAllocate: (e) => this.MasteredShift(e),
			Dependency: { up: 3 }
		})

		// Shift Speed
		builder.AddMultirankTalent(1, 7, 4, lvl => {
			const distance = [0, 50, 100, 150, 200]
			return {
				Name: 'Shift Speed',
				Description: `Increases the distance travelled by ${distance[lvl]}.`,
				Tag: distance[lvl] - distance[lvl - 1],
				Icon: Icon.Berserk,
				OnAllocate: (e) => this.ShiftDistance(e),
				Dependency: { left: 1 }
			}
		})

		// Shade Strength
		builder.AddMultirankTalent(2, 7, 5, lvl => {
			const damageDealt = [0, 0.05, 0.10, 0.15, 0.20, 0.25]
			return {
				Name: 'Shade Strength',
				Description: `Increases the damage shades deal by ${math.floor(damageDealt[lvl] * 100)}%.`,
				Tag: damageDealt[lvl] - damageDealt[lvl - 1],
				Icon: Icon.ArcaniteMelee,
				OnAllocate: (e) => this.ShadeStrength(e),
				Dependency: { left: 1 }
			}
		})

		// Shade Health
		builder.AddMultirankTalent(1, 6, 5, lvl => {
			const damageTaken = [0, 0.08, 0.16, 0.24, 0.32, 0.40]
			return {
				Name: 'Shade Health',
				Description: `Decreases the damage shades take by ${math.floor(damageTaken[lvl] * 100)}%.`,
				Icon: Icon.ArcaniteArmor,
				OnAllocate: (e) => this.ShadeHealth(e),
				Tag: damageTaken[lvl] - damageTaken[lvl - 1],
				Dependency: { left: 1 }
			}
		})

		//
		// Fel Form  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		//

		// Learn
		builder.AddTalent(3, 7, {
			Name: "Learn Fel Form",
			Description: "",
			Icon: Icon.ChaosGrom,
			OnAllocate: (e) => this.FelFormLearn(e),
			// Requirements: (e) => {
			// 	return [e.unit.handle.heroLevel >= 8, "Level 8 Required"]
			// }
		})

		// Improved Fel Form
		builder.AddMultirankTalent(3, 6, 4, lvl => {
			const stats: IImprovedFelForm[] = [
				{ hp: 0, attack: 0, regen: 0, armor: 0, attSpeed: 0, moveSpeed: 0, duration: 0, cooldown: 0 },
				{ hp: 0, attack: 5, regen: 2, armor: 50, attSpeed: 1.5, moveSpeed: 10, duration: 0, cooldown: 0 },
				{ hp: 0, attack: 5, regen: 2, armor: 2, attSpeed: 1.5, moveSpeed: 10, duration: 0, cooldown: 0 },
				{ hp: 0, attack: 5, regen: 2, armor: 2, attSpeed: 1.5, moveSpeed: 10, duration: 0, cooldown: 0 },
				{ hp: 0, attack: 5, regen: 2, armor: 2, attSpeed: 1.5, moveSpeed: 10, duration: 0, cooldown: 0 }
			]
			return {
				Name: "Improved Fel Form",
				Description: "Here",
				Tag: {
					hp: stats[lvl].hp - stats[lvl - 1].hp,
					attack: stats[lvl].attack - stats[lvl - 1].attack,
					regen: stats[lvl].regen - stats[lvl - 1].regen,
					armor: stats[lvl].armor - stats[lvl - 1].armor,
					attSpeed: stats[lvl].attSpeed - stats[lvl - 1].attSpeed,
					moveSpeed: stats[lvl].moveSpeed - stats[lvl - 1].moveSpeed,
					duration: stats[lvl].duration - stats[lvl - 1].duration,
					cooldown: stats[lvl].cooldown - stats[lvl - 1].cooldown
				},
				Icon: Icon.ChaosGrom,
				OnAllocate: (e) => this.FelFormImproved(e),
				Dependency: { up: 1 },
				Cost: 2
			}
		})

		// Mastered Fel Form
		builder.AddTalent(3, 5, {
			Name: "Mastered Fel Form",
			Description: "",
			Icon: Icon.ChaosGrom,
			OnAllocate: (e) => this.FelFormMastered(e),
			Cost: 3,
			Dependency: { up: 4 }
		})

		// Fel Stability
		const felStability = 4
		builder.AddTalent(2, 6, {
			Name: "Fel Stability",
			Description: `Increases the duration of Fel Form by ${felStability} seconds.`,
			Tag: felStability,
			Icon: Icon.ChaosGrom,
			OnAllocate: (e) => this.FelStability(e),
			Dependency: { right: 2 }
		})

		//
		// Shade Storm  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		//

		// Learn
		builder.AddTalent(0, 0, {
			Name: "Learn Shade Storm",
			Description: "",
			Icon: Icon.Whirlwind,
			OnAllocate: (e) => this.LearnShiftstorm(e),
			Cost: 2,
			Requirements: (e) => {
				return [e.hero.heroLevel >= 15, "Level 15 Required"]
			}
		})
	}

	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// Can use these methods inside Activate/Deactivate/Allocate/Deallocate/Requirements functions

	//
	// Shift Storm
	//

	LearnShiftstorm (e: ActivationEvent) {
		const ability = e.hero.getUnitAbility(AbilityFour.ShiftStorm) as ShadestormAbility
		ability.enable()
	}

	//
	// Fel Form
	//

	FelFormLearn (e: ActivationEvent) {
		try {
			const ability = e.hero.getUnitAbility(AbilityFour.FelForm) as FelForm
			ability.enable()
		} catch (error) {
			print(error)
		}
	}

	FelFormImproved (e: ActivationEvent) {
		const ability = e.hero.getUnitAbility(AbilityFour.FelForm) as FelForm
		// ability.show()
	}

	FelFormMastered (e: ActivationEvent) {
		const ability = e.hero.getUnitAbility(AbilityFour.FelForm) as FelForm
		// ability.show()
	}

	FelStability (e: ActivationEvent) {
		const ability = e.hero.getUnitAbility(AbilityFour.FelForm) as FelForm
		ability.heroDuration += e.talent.tag
	}

	//
	// Shift
	//

	ImprovedShift (e: ActivationEvent) {
		const ability = e.hero.getUnitAbility(AbilityFour.Shift) as Shift
		const stats: IImprovedShift = e.talent.tag
		ability.distance += stats.distance
		ability.shadeDamageTaken += stats.taken
		ability.shadeDamageDealt += stats.dealt
		ability.tooltipName = e.talent.name
		e.hero.damageBonus += 5
		print(e.hero.damageBonus)
		// ability.update()
		e.hero.updateAbilityTooltips()
	}

	MasteredShift (e: ActivationEvent) {
		const ability = e.hero.getUnitAbility(AbilityFour.Shift) as Shift
		const stats: IMasteredShift = e.talent.tag

		ability.distance += stats.distance
		ability.shadeDamageTaken += stats.taken
		ability.shadeDamageDealt += stats.dealt
		ability.shadeDuration += stats.duration
		ability.cooldown += stats.cooldown
		ability.tooltipName = e.talent.name
		ability.update()
	}

	ShiftDistance (e: ActivationEvent) {
		const ability = e.hero.getUnitAbility(AbilityFour.Shift) as Shift
		ability.distance += e.talent.tag as number
		ability.update()
	}

	ShadeStrength (e: ActivationEvent) {
		const ability = e.hero.getUnitAbility(AbilityFour.Shift) as Shift
		ability.shadeDamageDealt += e.talent.tag as number
		ability.update()
	}

	ShadeHealth (e: ActivationEvent) {
		const ability = e.hero.getUnitAbility(AbilityFour.Shift) as Shift
		ability.shadeDamageTaken -= e.talent.tag as number
		ability.update()
	}
}
