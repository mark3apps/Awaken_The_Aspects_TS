import { Faction } from "lib/resources/baseInterface"
import { SpawnValues } from "lib/resources/spawnCheck"
import { SpawnUnit } from "lib/resources/spawnUnit"
import { OrderId } from "lib/w3ts/globals/order"
import { Unit } from "lib/w3ts/index"
import { Base } from "./base"





export class Spawn {

    private _faction: Faction
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
        this._faction = value
    }

    public get faction(): Faction {
        return this._faction
    }

    public addUnit(sUnit: SpawnUnit): void {
        if (sUnit.start == null) { sUnit.start = 1 }
        if (sUnit.end == null) { sUnit.end = 12 }
        if (sUnit.amount == null) { sUnit.amount = 1 }

        this.units.push(sUnit)

    }

    public unitInWave(check: SpawnValues): boolean {
        const sUnit = this.units[check.unit]
        return sUnit.waves.indexOf(check.wave) > -1
    }

    public unitInLevel(check: SpawnValues): boolean {
        const sUnit = this.units[check.unit]
        return sUnit.start <= check.level && sUnit.end >= check.level
    }

    public unitReady(check: SpawnValues): boolean {
        const sUnit = this.units[check.unit]
        return sUnit.start <= check.level && sUnit.end >= check.level && sUnit.waves.indexOf(check.wave) > -1
    }

    public get countOfUnits(): number {
        return this.units.length
    }

    public spawnUnits(check: SpawnValues):void {

        for (let i = 0; i < this.units.length; i++) {
            check.unit = i
            this.spawnUnit(check)
        }
    }

    public spawnUnit(check: SpawnValues): void {

        const unitElement = this.units[check.unit]
        
        if (this.unitReady(check)) {
            for (let b = 0; b < 2; b++) {

                const baseElement: Base = this._faction[["alliance","federation"][b]]

                if (baseElement.isAlive()) {
                    for (let index = 0; index < unitElement.amount; index++) {

                        const start = baseElement.randomStartCoordinate()
                        const dest = baseElement.randomEndCoordinate()
                        const p = baseElement.army.randomPlayer
                        const unitType = unitElement.unitType

                        const u = new Unit(p, unitType.id, start.x, start.y, bj_UNIT_FACING)
                        u.issueOrderAtCoordinate(OrderId.Attack, dest)

                    }

                }
            }

        }
    }
}