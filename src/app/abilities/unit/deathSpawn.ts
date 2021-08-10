
import { UNIT_TYPE } from "app/definitions/index"
import { EVENT } from "app/systems/index"
import { AttachPoint } from "lib/resources/attachPoints"
import { DeathSpawn } from "lib/resources/deathSpawn"
import { EffectPath } from "lib/resources/effects"
import { UnitType } from "lib/resources/unitType"
import { Effect, Unit } from "lib/w3ts/index"


export let id: { [id: string]: DeathSpawn[] }


export function define(): void {
    
    id = {}

    add(UNIT_TYPE.Knight, { amount: 1, unitId: UNIT_TYPE.Captain1 })
    add(UNIT_TYPE.WaterElemental2, { amount: 1, unitId: UNIT_TYPE.WaterElemental1, effectPath: EffectPath.corporealForm, effectAttach: AttachPoint.chest })
    add(UNIT_TYPE.WaterElemental3, { amount: 1, unitId: UNIT_TYPE.WaterElemental2, effectPath: EffectPath.corporealForm, effectAttach: AttachPoint.chest })
    add(UNIT_TYPE.Automation, { amount: 2, unitId: UNIT_TYPE.Clockwerk })
    add(UNIT_TYPE.SeigeGolem, { amount: 2, unitId: UNIT_TYPE.WarGolem })
    add(UNIT_TYPE.WarGolem, { amount: 2, unitId: UNIT_TYPE.BattleGolem })
    add(UNIT_TYPE.HippogryphRider, { amount: 1, unitId: UNIT_TYPE.NightElfRanger, chance: 0.6 })

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

    add(UNIT_TYPE.HumanFrigate, { amount: 2, unitId: UNIT_TYPE.Arbalist, chance: .7 })
    add(UNIT_TYPE.HumanFrigate, { amount: 1, unitId: UNIT_TYPE.Footman2, chance: 0.5 })
    add(UNIT_TYPE.HumanBattleship, { amount: 2, unitId: UNIT_TYPE.Arbalist, chance: 1 })
    add(UNIT_TYPE.HumanBattleship, { amount: 1, unitId: UNIT_TYPE.Footman2, chance: 0.75 })

    add(UNIT_TYPE.NightElfFrigate, { amount: 2, unitId: UNIT_TYPE.NightElfRanger, chance: 0.6 })
    add(UNIT_TYPE.NightElfFrigate, { amount: 2, unitId: UNIT_TYPE.NightElfSentry, chance: 0.7 })
    add(UNIT_TYPE.NightElfBattleship, { amount: 2, unitId: UNIT_TYPE.NightElfRanger, chance: 0.7 })
    add(UNIT_TYPE.NightElfBattleship, { amount: 1, unitId: UNIT_TYPE.NightElfEliteRanger, chance: 0.6 })
    add(UNIT_TYPE.NightElfBattleship, { amount: 2, unitId: UNIT_TYPE.NightElfSentry, chance: 0.8 })

    eventInit()
}


function spawn(unit: Unit, deathSpawn: DeathSpawn) {

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


function add(unitId: UnitType, deathSpawn: DeathSpawn) {
    if (id[unitId.id] == null) {
        id[unitId.id] = [deathSpawn]
    } else {
        id[unitId.id].push(deathSpawn)
    }
}


// Event Setup
function eventInit() {

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