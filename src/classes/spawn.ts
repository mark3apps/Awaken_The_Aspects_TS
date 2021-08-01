import { SpawnCheck } from "lib/resources/spawnCheck"
import { SpawnUnit } from "lib/resources/spawnUnit"
import { OrderId } from "lib/w3ts/globals/order"
import { Timer, Unit } from "lib/w3ts/index"
import { Base } from "./base"




export class Spawn {

    private bases: Base[]
    private units: SpawnUnit[]
    public name: string

    constructor(name) {
        this.name = name
    }

    //
    // Instance Methods
    //

    public addBase(sBase: Base) {
        this.bases.push(sBase)
    }

    /**
     * 
     * @param sUnit Start = 1, End = 12, Amount = 1
     */
    public addUnit(sUnit: SpawnUnit) {
        if (sUnit.start == undefined) { sUnit.start = 1 }
        if (sUnit.end == undefined) { sUnit.end = 12 }
        if (sUnit.amount == undefined) { sUnit.amount = 1 }
        this.units.push(sUnit)
    }

    public unitInWave(check: SpawnCheck) {
        let sUnit = this.units[check.unit]
        return sUnit.waves.indexOf(check.wave) > -1
    }

    public unitInLevel(check: SpawnCheck) {
        let sUnit = this.units[check.unit]
        return sUnit.start <= check.level && sUnit.end >= check.level
    }

    public unitReady(check: SpawnCheck) {
        let sUnit = this.units[check.unit]
        return sUnit.start <= check.level && sUnit.end >= check.level && sUnit.waves.indexOf(check.wave) > -1
    }

    public get countOfUnits() {
        return this.units.length
    }

    public get countOfBases() {
        return this.bases.length
    }


    /**
     * Goes through all of the Units and spawns the units
     * if the check comes through.  Ignores the Unit value.
     * @param check 
     */
    public spawnUnits(check: SpawnCheck) {

        for (let i = 0; i < this.units.length; i++) {
            check.unit = i
            this.spawnUnit(check)
        }
    }

    
    public spawnUnit(check: SpawnCheck) {

        const unitElement = this.units[check.unit]

        if (this.unitReady(check)) {
            for (let b = 0; b < this.bases.length; b++) {
                const baseElement = this.bases[b]

                if (baseElement.isAlive()) {
                    for (let index = 1; index < unitElement.amount; index++) {

                        let [x, y] = baseElement.randomStartXY()
                        let [xDest, yDest] = baseElement.randomEndXY()
                        let p = baseElement.army.randomPlayer
                        let unitId = FourCC(unitElement.uFour)

                        let u = new Unit(p, unitId, x, y, bj_UNIT_FACING)
                        u.issueOrderAt(OrderId.Attack, xDest, yDest)

                    }

                }
            }

        }
    }
}