import { UNIT_TYPE, UnitType } from "app/definitions/unitTypes"
import { AttachPoint } from "lib/resources/attachPoints"
import { EffectPath } from "lib/resources/effects"
import { Effect, Unit } from "lib/w3ts/index"
import { EVENT } from "../../definitions/events"

export interface DeathSpawn {
    amount: number,
    unitId: UnitType,
    chance?: number,
    animation?: string,
    effectPath?: EffectPath,
    effectAttach?: AttachPoint
}

export namespace DEATH_SPAWN {

    export const id: { [id: string]: DeathSpawn[] } = {}


    export function define(): void {

        add(UNIT_TYPE.Knight, { amount: 1, unitId: UNIT_TYPE.Captian1 })
        add(UNIT_TYPE.WaterElemental2, { amount: 1, unitId: UNIT_TYPE.WaterElemental1, effectPath: EffectPath.corporealForm, effectAttach: AttachPoint.chest })
        add(UNIT_TYPE.WaterElemental3, { amount: 1, unitId: UNIT_TYPE.WaterElemental2, effectPath: EffectPath.corporealForm, effectAttach: AttachPoint.chest })
        add(UNIT_TYPE.Automation, { amount: 2, unitId: UNIT_TYPE.Clockwerk })
        add(UNIT_TYPE.SeigeGolem, { amount: 2, unitId: UNIT_TYPE.WarGolem })
        add(UNIT_TYPE.WarGolem, { amount: 2, unitId: UNIT_TYPE.BattleGolem })

        add(UNIT_TYPE.SeigeEngine, { amount: 1, unitId: UNIT_TYPE.Gyrocopter })
        add(UNIT_TYPE.SeigeEngine, { amount: 1, unitId: UNIT_TYPE.SeigeEngineDamaged })
        add(UNIT_TYPE.SeigeEngineDamaged, { amount: 1, unitId: UNIT_TYPE.Gyrocopter })

        add(UNIT_TYPE.WildhammerCottage, { amount: 3, unitId: UNIT_TYPE.DwarfClansman, chance: 0.6 })
        add(UNIT_TYPE.WildhammerCottage, { amount: 3, unitId: UNIT_TYPE.DwarfAxethrower, chance: 0.6 })
        add(UNIT_TYPE.WildhammerCottage, { amount: 1, unitId: UNIT_TYPE.DwarfElite, chance: 0.6 })
        add(UNIT_TYPE.WildhammerFarm, { amount: 2, unitId: UNIT_TYPE.DwarfClansman, chance: 0.4 })
        add(UNIT_TYPE.WildhammerFarm, { amount: 2, unitId: UNIT_TYPE.DwarfAxethrower, chance: 0.4 })
        add(UNIT_TYPE.WildhammerFarm, { amount: 1, unitId: UNIT_TYPE.DwarfElite, chance: 0.4 })
        add(UNIT_TYPE.WildhammerFarmLarge, { amount: 3, unitId: UNIT_TYPE.DwarfClansman, chance: 0.4 })
        add(UNIT_TYPE.WildhammerFarmLarge, { amount: 3, unitId: UNIT_TYPE.DwarfAxethrower, chance: 0.4 })
        add(UNIT_TYPE.WildhammerFarmLarge, { amount: 1, unitId: UNIT_TYPE.DwarfElite, chance: 0.4 })
        add(UNIT_TYPE.WildhammerMound, { amount: 3, unitId: UNIT_TYPE.DwarfClansman, chance: 0.4 })
        add(UNIT_TYPE.WildhammerMound, { amount: 3, unitId: UNIT_TYPE.DwarfAxethrower, chance: 0.4 })
        add(UNIT_TYPE.WildhammerMound, { amount: 1, unitId: UNIT_TYPE.DwarfElite, chance: 1 })

        eventInit()
    }



    export function eventInit(): void {

        // Add Death Spawn trigger to Unit Dieing Trigger
        EVENT.unitDies.addCondition(() => {
            try {
                const unit = Unit.fromEvent()

                if (id[unit.typeId] != null) {
                    for (let i = 0; i < id[unit.typeId].length; i++) {
                        const element = id[unit.typeId][i]
                        spawn(unit, element)
                    }

                }

                return false
            } catch (e) {
                print(e)
            }
        })
    }

    export function spawn(unit: Unit, deathSpawn: DeathSpawn): void {

        if (deathSpawn.chance == null) { deathSpawn.chance = 1 }

        for (let i = 0; i < deathSpawn.amount; i++) {

            if (deathSpawn.chance >= math.random()) {
                new Unit(unit.owner, deathSpawn.unitId.id, unit.x, unit.y, unit.facing)

                if (deathSpawn.effectPath != null) {
                    new Effect(deathSpawn.effectPath, unit, deathSpawn.effectAttach).destroy()
                }
            }
        }


    }

    export function add(unitId: UnitType, deathSpawn: DeathSpawn): void {
        if (id[unitId.id] == null) {
            id[unitId.id] = [deathSpawn]
        } else {
            id[unitId.id].push(deathSpawn)
        }
    }
}