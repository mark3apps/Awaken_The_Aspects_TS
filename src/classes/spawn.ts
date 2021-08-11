import { Faction } from "lib/resources/baseInterface"
import { SpawnValues } from "lib/resources/spawnCheck"
import { SpawnUnit } from "lib/resources/spawnUnit"
import { OrderId } from "lib/w3ts/globals/order"
import { Unit } from "lib/w3ts/index"





export class Spawn {

    private factions: Faction
    private units: SpawnUnit[]
    public name: string

    constructor(name: string) {
        this.name = name
        this.units = []
    }

    //
    // Instance Methods
    //

    public set faction(value: Faction) {
        this.factions = value
    }

    public get faction() {
        return this.factions
    }

    public addUnit(sUnit: SpawnUnit) {
        if (sUnit.start == null) { sUnit.start = 1 }
        if (sUnit.end == null) { sUnit.end = 12 }
        if (sUnit.amount == null) { sUnit.amount = 1 }

        this.units.push(sUnit)

    }

    public unitInWave(check: SpawnValues) {
        let sUnit = this.units[check.unit]
        return sUnit.waves.indexOf(check.wave) > -1
    }

    public unitInLevel(check: SpawnValues) {
        let sUnit = this.units[check.unit]
        return sUnit.start <= check.level && sUnit.end >= check.level
    }

    public unitReady(check: SpawnValues) {
        let sUnit = this.units[check.unit]
        return sUnit.start <= check.level && sUnit.end >= check.level && sUnit.waves.indexOf(check.wave) > -1
    }

    public get countOfUnits() {
        return this.units.length
    }

    public spawnUnits(check: SpawnValues) {

        for (let i = 0; i < this.units.length; i++) {
            check.unit = i
            this.spawnUnit(check)
        }
    }

    public spawnUnit(check: SpawnValues) {

        const unitElement = this.units[check.unit]
        
        if (this.unitReady(check)) {
            for (let b = 0; b < 2; b++) {

                const baseElement = this.factions[["alliance","federation"][b]]

                if (baseElement.isAlive()) {
                    for (let index = 0; index < unitElement.amount; index++) {

                        let [x, y] = baseElement.randomStartXY()
                        let [xDest, yDest] = baseElement.randomEndXY()
                        let p = baseElement.army.randomPlayer
                        let unitId = unitElement.unitId

                        let u = new Unit(p, unitId.id, x, y, bj_UNIT_FACING)
                        u.issueOrderAt(OrderId.Attack, xDest, yDest)

                    }

                }
            }

        }
    }
}