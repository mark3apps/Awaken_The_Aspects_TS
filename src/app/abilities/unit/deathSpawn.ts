import { UNIT_TYPE } from "app/definitions/unitTypes"
import { PATHING } from "app/systems/pathing"
import { UnitType } from "classes/unitType"
import { ATTACH } from "lib/w3ts/globals/attachmentPoints"
import { ID } from "lib/w3ts/globals/ids"
import { Effect, MapPlayer, Timer, Unit } from "lib/w3ts/index"
import { EVENT } from "../../systems/events"

export interface DeathSpawn {
    amount?: number,
    unitId?: UnitType,
    chance?: number,
    animation?: string,
    effectPath?: string,
    effectAttach?: ATTACH.Point,
    effectAttachMod?: ATTACH.Mod,
    effectAttachSpecial?: ATTACH.Special
}

export namespace DEATH_SPAWN {

    export const id: { [id: string]: DeathSpawn[] } = {}


    export function define(): void {

        
        const ignoreBuildingId: number[] = [
            UNIT_TYPE.DwarvenGateClosed.id,
            UNIT_TYPE.DwarvenGateOpen.id,
            UNIT_TYPE.CastleGateClosed.id,
            UNIT_TYPE.CastleGateOpen.id,
            UNIT_TYPE.MercLookout.id
        ]

        add(UNIT_TYPE.Knight, { amount: 1, unitId: UNIT_TYPE.Captain1 })
        add(UNIT_TYPE.WaterElemental2, { amount: 1, unitId: UNIT_TYPE.WaterElemental1 })
        add(UNIT_TYPE.WaterElemental3, { amount: 1, unitId: UNIT_TYPE.WaterElemental2 })
        add(UNIT_TYPE.SeigeGolem, { amount: 2, unitId: UNIT_TYPE.WarGolem })
        add(UNIT_TYPE.WarGolem, { amount: 2, unitId: UNIT_TYPE.BattleGolem })
        add(UNIT_TYPE.HippogryphRider, { amount: 1, unitId: UNIT_TYPE.NightElfRanger, chance: 0.6 })

        add(UNIT_TYPE.SeigeEngine, { amount: 1, unitId: UNIT_TYPE.Gyrocopter })
        add(UNIT_TYPE.SeigeEngine, { amount: 1, unitId: UNIT_TYPE.SeigeEngineDamaged })
        add(UNIT_TYPE.SeigeEngineDamaged, { amount: 1, unitId: UNIT_TYPE.Gyrocopter })

        add(UNIT_TYPE.Nerubianziggurat, { amount: 7, unitId: UNIT_TYPE.SkeletonWarrior, chance: 0.7 })
        add(UNIT_TYPE.Nerubianziggurat, { amount: 5, unitId: UNIT_TYPE.SkeletonArcher, chance: 0.7 })

        add(UNIT_TYPE.MercTent, { amount: 5, unitId: UNIT_TYPE.Bandit, chance: 0.4 })
        add(UNIT_TYPE.MercTent, { amount: 3, unitId: UNIT_TYPE.BanditSpearman, chance: 0.5 })
        add(UNIT_TYPE.MercTent, { amount: 2, unitId: UNIT_TYPE.Assassin, chance: 0.25 })

        add(UNIT_TYPE.WildhammerCottage, { amount: 2, unitId: UNIT_TYPE.DwarfClansman, chance: 0.3 })
        add(UNIT_TYPE.WildhammerCottage, { amount: 2, unitId: UNIT_TYPE.DwarfAxethrower, chance: 0.3 })
        add(UNIT_TYPE.WildhammerCottage, { amount: 1, unitId: UNIT_TYPE.DwarfElite, chance: 0.2 })
        add(UNIT_TYPE.WildhammerFarm, { amount: 2, unitId: UNIT_TYPE.DwarfClansman, chance: 0.2 })
        add(UNIT_TYPE.WildhammerFarm, { amount: 2, unitId: UNIT_TYPE.DwarfAxethrower, chance: 0.2 })
        add(UNIT_TYPE.WildhammerFarm, { amount: 1, unitId: UNIT_TYPE.DwarfElite, chance: 0.3 })
        add(UNIT_TYPE.WildhammerFarmLarge, { amount: 2, unitId: UNIT_TYPE.DwarfClansman, chance: 0.3 })
        add(UNIT_TYPE.WildhammerFarmLarge, { amount: 2, unitId: UNIT_TYPE.DwarfAxethrower, chance: 0.3 })
        add(UNIT_TYPE.WildhammerFarmLarge, { amount: 1, unitId: UNIT_TYPE.DwarfElite, chance: 0.3 })

        add(UNIT_TYPE.GryphonRider, { amount: 1, unitId: UNIT_TYPE.DwarfAxethrower })

        add(UNIT_TYPE.HumanFrigate, { amount: 2, unitId: UNIT_TYPE.Arbalist, chance: .4 })
        add(UNIT_TYPE.HumanFrigate, { amount: 3, unitId: UNIT_TYPE.NavyMarine, chance: 0.5 })
        add(UNIT_TYPE.HumanBattleship, { amount: 1, unitId: UNIT_TYPE.Arbalist, chance: 0.5 })
        add(UNIT_TYPE.HumanBattleship, { amount: 4, unitId: UNIT_TYPE.NavyMarine, chance: 0.5 })

        add(UNIT_TYPE.NightElfFrigate, { amount: 2, unitId: UNIT_TYPE.NightElfRanger, chance: 0.6 })
        add(UNIT_TYPE.NightElfFrigate, { amount: 2, unitId: UNIT_TYPE.NightElfSentry, chance: 0.7 })
        add(UNIT_TYPE.NightElfBattleship, { amount: 2, unitId: UNIT_TYPE.NightElfRanger, chance: 0.7 })
        add(UNIT_TYPE.NightElfBattleship, { amount: 1, unitId: UNIT_TYPE.NightElfEliteRanger, chance: 0.6 })
        add(UNIT_TYPE.NightElfBattleship, { amount: 2, unitId: UNIT_TYPE.NightElfSentry, chance: 0.8 })

        // Add Death Spawn trigger to Unit Dieing Trigger
        EVENT.unitDies.add(() => {
            try {
                const unit = Unit.fromEvent()

                if (id[unit.typeId] != null) {
                    for (let i = 0; i < id[unit.typeId].length; i++) {
                        const element = id[unit.typeId][i]
                        spawn(unit, element)
                    }

                }
            } catch (e) {
                print(e)
            }
        })

        // Set Buildings to Randomly Stay behind
        EVENT.unitDies.add(() => {
            const unit = Unit.fromEvent()

            if (unit.isStructure && ignoreBuildingId.indexOf(unit.typeId) == -1 ) {
                if (0 > (math.random() + 0.000001)) {

                    const uBuilding = new Unit(MapPlayer.fromHandle(Player(PLAYER_NEUTRAL_PASSIVE)), unit.typeId, unit.x, unit.y, unit.facing)
                    uBuilding.color = unit.color
                    uBuilding.addAbility(FourCC(ID.Ability.Invulnerable))
                    uBuilding.addAbility(FourCC(ID.Ability.Locust))
                    uBuilding.setAnimation("death")
                    unit.destroy()

                    const switchUnits = new Timer()
                    const removeOrigUnit = new Timer()
                    switchUnits.start(0.5, false, () => {
                        
                        switchUnits.destroy()
                    })

                    removeOrigUnit.start(6, false, () => {
                        //unit.destroy()
                        uBuilding.setTimeScale(0)
                        removeOrigUnit.destroy()
                    })
                }
            }
        })
    }


    export function spawn(unit: Unit, deathSpawn: DeathSpawn): void {

            for (let i = 0; i < deathSpawn.amount; i++) {

                if (deathSpawn.chance >= math.random()) {
                    const u = new Unit(unit.owner, deathSpawn.unitId.id, unit.x, unit.y, unit.facing)

                    PATHING.newOrders(u)

                    if (deathSpawn.effectPath != null) {
                        new Effect(deathSpawn.effectPath, unit, deathSpawn.effectAttach).destroy()
                    }
                }
            }
    }

    export function add(unitId: UnitType, deathSpawn: DeathSpawn): void {

        if (deathSpawn.chance == null) { deathSpawn.chance = 1 }

        if (id[unitId.id] == null) {
            id[unitId.id] = [deathSpawn]
        } else {
            id[unitId.id].push(deathSpawn)
        }
    }
}