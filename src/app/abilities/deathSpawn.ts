import { Logger } from "app/classes/log"
import { UnitType } from "app/classes/unitType"
import { Pathing } from "app/systems/pathing"
import { Trigger, Unit, MapPlayer, AbilityFour, Timer, Effect } from "lib/w3ts/index"



interface DeathSpawnInterface {
    amount?: number,
    unitId?: UnitType,
    chance?: number,
    animation?: string,
    effectPath?: string,
    effectAttach?: AttachPoint,
    effectAttachMod?: AttachMod,
    effectAttachSpecial?: AttachSpecial
}

export class DeathSpawn {

    static id: { [id: string]: DeathSpawnInterface[] } = {}


    static define(): void {

        DeathSpawn.add(UnitType.Knight, { amount: 1, unitId: UnitType.Captain1 })
        DeathSpawn.add(UnitType.WaterElemental2, { amount: 1, unitId: UnitType.WaterElemental1 })
        DeathSpawn.add(UnitType.WaterElemental3, { amount: 1, unitId: UnitType.WaterElemental2 })
        DeathSpawn.add(UnitType.SeigeGolem, { amount: 2, unitId: UnitType.WarGolem })
        DeathSpawn.add(UnitType.WarGolem, { amount: 2, unitId: UnitType.BattleGolem })
        DeathSpawn.add(UnitType.HippogryphRider, { amount: 1, unitId: UnitType.NightElfRanger, chance: 0.6 })

        DeathSpawn.add(UnitType.SeigeEngine, { amount: 1, unitId: UnitType.Gyrocopter })
        DeathSpawn.add(UnitType.SeigeEngine, { amount: 1, unitId: UnitType.SeigeEngineDamaged })
        DeathSpawn.add(UnitType.SeigeEngineDamaged, { amount: 1, unitId: UnitType.Gyrocopter })

        DeathSpawn.add(UnitType.Nerubianziggurat, { amount: 7, unitId: UnitType.SkeletonWarrior, chance: 0.7 })
        DeathSpawn.add(UnitType.Nerubianziggurat, { amount: 5, unitId: UnitType.SkeletonArcher, chance: 0.7 })

        DeathSpawn.add(UnitType.MercTent, { amount: 5, unitId: UnitType.Bandit, chance: 0.4 })
        DeathSpawn.add(UnitType.MercTent, { amount: 3, unitId: UnitType.BanditSpearman, chance: 0.5 })
        DeathSpawn.add(UnitType.MercTent, { amount: 2, unitId: UnitType.Assassin, chance: 0.25 })

        DeathSpawn.add(UnitType.WildhammerCottage, { amount: 2, unitId: UnitType.DwarfClansman, chance: 0.3 })
        DeathSpawn.add(UnitType.WildhammerCottage, { amount: 2, unitId: UnitType.DwarfAxethrower, chance: 0.3 })
        DeathSpawn.add(UnitType.WildhammerCottage, { amount: 1, unitId: UnitType.DwarfElite, chance: 0.2 })
        DeathSpawn.add(UnitType.WildhammerFarm, { amount: 2, unitId: UnitType.DwarfClansman, chance: 0.2 })
        DeathSpawn.add(UnitType.WildhammerFarm, { amount: 2, unitId: UnitType.DwarfAxethrower, chance: 0.2 })
        DeathSpawn.add(UnitType.WildhammerFarm, { amount: 1, unitId: UnitType.DwarfElite, chance: 0.3 })
        DeathSpawn.add(UnitType.WildhammerFarmLarge, { amount: 2, unitId: UnitType.DwarfClansman, chance: 0.3 })
        DeathSpawn.add(UnitType.WildhammerFarmLarge, { amount: 2, unitId: UnitType.DwarfAxethrower, chance: 0.3 })
        DeathSpawn.add(UnitType.WildhammerFarmLarge, { amount: 1, unitId: UnitType.DwarfElite, chance: 0.3 })

        DeathSpawn.add(UnitType.GryphonRider, { amount: 1, unitId: UnitType.DwarfAxethrower })

        DeathSpawn.add(UnitType.CityBuilding03, { amount: 1, unitId: UnitType.VillagerMale1, chance: 0.1 })
        DeathSpawn.add(UnitType.CityBuilding03, { amount: 1, unitId: UnitType.VillagerMale2, chance: 0.1 })
        DeathSpawn.add(UnitType.CityBuilding03, { amount: 2, unitId: UnitType.VillagerFemale1, chance: 0.1 })
        DeathSpawn.add(UnitType.CityBuilding03, { amount: 1, unitId: UnitType.VillagerChild1, chance: 0.1 })
        DeathSpawn.add(UnitType.CityBuilding03, { amount: 1, unitId: UnitType.VillagerChild2, chance: 0.1 })

        DeathSpawn.add(UnitType.CityBuilding09, { amount: 1, unitId: UnitType.VillagerMale1, chance: 0.1 })
        DeathSpawn.add(UnitType.CityBuilding09, { amount: 1, unitId: UnitType.VillagerMale2, chance: 0.1 })
        DeathSpawn.add(UnitType.CityBuilding09, { amount: 2, unitId: UnitType.VillagerFemale1, chance: 0.1 })
        DeathSpawn.add(UnitType.CityBuilding09, { amount: 1, unitId: UnitType.VillagerChild1, chance: 0.1 })
        DeathSpawn.add(UnitType.CityBuilding09, { amount: 1, unitId: UnitType.VillagerChild2, chance: 0.1 })

        DeathSpawn.add(UnitType.HumanFrigate, { amount: 2, unitId: UnitType.Arbalist, chance: .4 })
        DeathSpawn.add(UnitType.HumanFrigate, { amount: 3, unitId: UnitType.NavyMarine, chance: 0.5 })
        DeathSpawn.add(UnitType.HumanBattleship, { amount: 1, unitId: UnitType.Arbalist, chance: 0.5 })
        DeathSpawn.add(UnitType.HumanBattleship, { amount: 4, unitId: UnitType.NavyMarine, chance: 0.5 })

        DeathSpawn.add(UnitType.NightElfFrigate, { amount: 2, unitId: UnitType.NightElfRanger, chance: 0.6 })
        DeathSpawn.add(UnitType.NightElfFrigate, { amount: 2, unitId: UnitType.NightElfSentry, chance: 0.7 })
        DeathSpawn.add(UnitType.NightElfBattleship, { amount: 2, unitId: UnitType.NightElfRanger, chance: 0.7 })
        DeathSpawn.add(UnitType.NightElfBattleship, { amount: 1, unitId: UnitType.NightElfEliteRanger, chance: 0.6 })
        DeathSpawn.add(UnitType.NightElfBattleship, { amount: 3, unitId: UnitType.NightElfSentry, chance: 0.8 })

        // Add Death Spawn trigger to Unit Dieing Trigger
        Trigger.unitDies.add(() => {
            try {
                const unit = Unit.fromEvent()

                if (DeathSpawn.id[unit.typeId] != null) {
                    for (let i = 0; i < DeathSpawn.id[unit.typeId].length; i++) {
                        const element = DeathSpawn.id[unit.typeId][i]
                        DeathSpawn.spawn(unit, element)
                    }

                }
            } catch (error) {
                Logger.Error("Death Spawn", error)
            }
        })

        // Set Buildings to Randomly Stay behind
        Trigger.unitDying.add(() => {
            const unit = Unit.fromEvent()

            if (unit.isStructure && UnitType.leaveCorpse.has(unit.typeId)) {
                if (0.4 > (math.random())) {

                    BlzSetEventDamage(0)
                    const origColor = unit.color
                    unit.owner = MapPlayer.fromIndex(PLAYER_NEUTRAL_PASSIVE)
                    unit.color = origColor
                    unit.invulnerable = true
                    unit.addAbility(FourCC(AbilityFour.Locust))
                    unit.setAnimation("death")
                    
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


    static spawn(unit: Unit, deathSpawn: DeathSpawnInterface): void {

        try {
            for (let i = 0; i < deathSpawn.amount; i++) {

                if (deathSpawn.chance >= math.random() && unit.isTerrainPathable(PATHING_TYPE_WALKABILITY)) {
                    const u = new Unit(unit.owner, deathSpawn.unitId.id, unit.position, unit.facing)

                    // if ()
                    Pathing.newOrders(u)

                    if (deathSpawn.effectPath != null) {
                        new Effect(deathSpawn.effectPath, unit, deathSpawn.effectAttach).destroy()
                    }
                }
            }
        } catch (error) {
            Logger.Error("Death Spawn", error)
        }
    }

    static add(unitId: UnitType, deathSpawn: DeathSpawnInterface): void {

        if (deathSpawn.chance == null) { deathSpawn.chance = 1 }

        if (DeathSpawn.id[unitId.id] == null) {
            DeathSpawn.id[unitId.id] = [deathSpawn]
        } else {
            DeathSpawn.id[unitId.id].push(deathSpawn)
        }
    }
}