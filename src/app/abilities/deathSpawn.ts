import { UnitType } from 'app/classes'
import { Logger } from 'app/log'
import { Unit, MapPlayer, AbilityFour, Timer, Effect } from 'lib/w3ts'
import { IDeathSpawn } from './IDeathSpawn'
import { IDeathSpawnDepend } from './IDeathSpawnDepend'

export class DeathSpawn {
	protected static instance?: DeathSpawn

	static getInstance (depend: IDeathSpawnDepend) {
		if (!DeathSpawn.instance) DeathSpawn.instance = new DeathSpawn(depend)
		return DeathSpawn.instance
	}

	// Dependencies
	pathing

	id: { [id: string]: IDeathSpawn[] } = {}

	constructor (depend: IDeathSpawnDepend) {
		// Dependencies
		this.pathing = depend.pathing
		const triggers = depend.triggers

		this.add(UnitType.Knight, { amount: 1, unitId: UnitType.Captain1 })
		this.add(UnitType.WaterElemental2, { amount: 1, unitId: UnitType.WaterElemental1 })
		this.add(UnitType.WaterElemental3, { amount: 1, unitId: UnitType.WaterElemental2 })
		this.add(UnitType.SeigeGolem, { amount: 2, unitId: UnitType.WarGolem })
		this.add(UnitType.WarGolem, { amount: 2, unitId: UnitType.BattleGolem })
		this.add(UnitType.HippogryphRider, { amount: 1, unitId: UnitType.NightElfRanger, chance: 0.6 })

		this.add(UnitType.SeigeEngine, { amount: 1, unitId: UnitType.Gyrocopter })
		this.add(UnitType.SeigeEngine, { amount: 1, unitId: UnitType.SeigeEngineDamaged })
		this.add(UnitType.SeigeEngineDamaged, { amount: 1, unitId: UnitType.Gyrocopter })

		this.add(UnitType.Nerubianziggurat, { amount: 7, unitId: UnitType.SkeletonWarrior, chance: 0.7 })
		this.add(UnitType.Nerubianziggurat, { amount: 5, unitId: UnitType.SkeletonArcher, chance: 0.7 })

		this.add(UnitType.MercTent, { amount: 5, unitId: UnitType.Bandit, chance: 0.4 })
		this.add(UnitType.MercTent, { amount: 3, unitId: UnitType.BanditSpearman, chance: 0.5 })
		this.add(UnitType.MercTent, { amount: 2, unitId: UnitType.Assassin, chance: 0.25 })

		this.add(UnitType.WildhammerCottage, { amount: 2, unitId: UnitType.DwarfClansman, chance: 0.3 })
		this.add(UnitType.WildhammerCottage, { amount: 2, unitId: UnitType.DwarfAxethrower, chance: 0.3 })
		this.add(UnitType.WildhammerCottage, { amount: 1, unitId: UnitType.DwarfElite, chance: 0.2 })
		this.add(UnitType.WildhammerFarm, { amount: 2, unitId: UnitType.DwarfClansman, chance: 0.2 })
		this.add(UnitType.WildhammerFarm, { amount: 2, unitId: UnitType.DwarfAxethrower, chance: 0.2 })
		this.add(UnitType.WildhammerFarm, { amount: 1, unitId: UnitType.DwarfElite, chance: 0.3 })
		this.add(UnitType.WildhammerFarmLarge, { amount: 2, unitId: UnitType.DwarfClansman, chance: 0.3 })
		this.add(UnitType.WildhammerFarmLarge, { amount: 2, unitId: UnitType.DwarfAxethrower, chance: 0.3 })
		this.add(UnitType.WildhammerFarmLarge, { amount: 1, unitId: UnitType.DwarfElite, chance: 0.3 })

		this.add(UnitType.GryphonRider, { amount: 1, unitId: UnitType.DwarfAxethrower })

		this.add(UnitType.CityBuilding03, { amount: 1, unitId: UnitType.VillagerMale1, chance: 0.1 })
		this.add(UnitType.CityBuilding03, { amount: 1, unitId: UnitType.VillagerMale2, chance: 0.1 })
		this.add(UnitType.CityBuilding03, { amount: 2, unitId: UnitType.VillagerFemale1, chance: 0.1 })
		this.add(UnitType.CityBuilding03, { amount: 1, unitId: UnitType.VillagerChild1, chance: 0.1 })
		this.add(UnitType.CityBuilding03, { amount: 1, unitId: UnitType.VillagerChild2, chance: 0.1 })

		this.add(UnitType.CityBuilding09, { amount: 1, unitId: UnitType.VillagerMale1, chance: 0.1 })
		this.add(UnitType.CityBuilding09, { amount: 1, unitId: UnitType.VillagerMale2, chance: 0.1 })
		this.add(UnitType.CityBuilding09, { amount: 2, unitId: UnitType.VillagerFemale1, chance: 0.1 })
		this.add(UnitType.CityBuilding09, { amount: 1, unitId: UnitType.VillagerChild1, chance: 0.1 })
		this.add(UnitType.CityBuilding09, { amount: 1, unitId: UnitType.VillagerChild2, chance: 0.1 })

		this.add(UnitType.HumanFrigate, { amount: 2, unitId: UnitType.Arbalist, chance: 0.4 })
		this.add(UnitType.HumanFrigate, { amount: 3, unitId: UnitType.NavyMarine, chance: 0.5 })
		this.add(UnitType.HumanBattleship, { amount: 1, unitId: UnitType.Arbalist, chance: 0.5 })
		this.add(UnitType.HumanBattleship, { amount: 4, unitId: UnitType.NavyMarine, chance: 0.5 })

		this.add(UnitType.NightElfFrigate, { amount: 2, unitId: UnitType.NightElfRanger, chance: 0.6 })
		this.add(UnitType.NightElfFrigate, { amount: 2, unitId: UnitType.NightElfSentry, chance: 0.7 })
		this.add(UnitType.NightElfBattleship, { amount: 2, unitId: UnitType.NightElfRanger, chance: 0.7 })
		this.add(UnitType.NightElfBattleship, { amount: 1, unitId: UnitType.NightElfEliteRanger, chance: 0.6 })
		this.add(UnitType.NightElfBattleship, { amount: 3, unitId: UnitType.NightElfSentry, chance: 0.8 })

		// Add Death Spawn trigger to Unit Dieing Trigger
		triggers.UnitDies.addAction(() => {
			try {
				const unit = Unit.fromEvent()

				if (this.id[unit.typeId] != null) {
					for (let i = 0; i < this.id[unit.typeId].length; i++) {
						const element = this.id[unit.typeId][i]
						this.spawn(unit, element)
					}
				}
			} catch (error) {
				Logger.Error('Death Spawn', error)
			}
		})

		// Set Buildings to Randomly Stay behind
		triggers.UnitDying.addAction(() => {
			const unit = Unit.fromEvent()

			if (UnitType.leaveCorpse.has(unit.typeId)) {
				if ((math.random()) < 0.4) {
					BlzSetEventDamage(0)
					const origColor = unit.color
					unit.owner = MapPlayer.fromIndex(PLAYER_NEUTRAL_PASSIVE)
					unit.color = origColor
					unit.invulnerable = true
					unit.addAbility(FourCC(AbilityFour.Locust))
					unit.setAnimation('death')

					const time = new Timer()
					const loop = new Timer()
					time.start(1, true, () => {
						unit.lifePercent += 20
					})
					loop.start(5, false, () => {
						time.destroy()
						loop.destroy()
					})
				}
			}
		})
	}

	spawn (unit: Unit, deathSpawn: IDeathSpawn): void {
		try {
			for (let i = 0; i < deathSpawn.amount; i++) {
				if (deathSpawn.chance as number >= math.random() && unit.isTerrainPathable(PATHING_TYPE_WALKABILITY)) {
					const u = new Unit(unit.owner, deathSpawn.unitId.id, unit.coordinate, unit.facing)

					// if ()
					this.pathing.newOrders(u)

					if (deathSpawn.effectPath != null) {
						new Effect(deathSpawn.effectPath, unit, deathSpawn.effectAttach as string).destroy()
					}
				}
			}
		} catch (error) {
			Logger.Error('Death Spawn', error)
		}
	}

	add (unitId: UnitType, deathSpawn: IDeathSpawn): void {
		if (deathSpawn.chance === undefined) deathSpawn.chance = 1

		if (this.id[unitId.id] === null) {
			this.id[unitId.id] = [deathSpawn]
		} else {
			this.id[unitId.id].push(deathSpawn)
		}
	}
}
