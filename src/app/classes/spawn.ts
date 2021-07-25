import { SPAWN_UNIT } from "lib/resources/interfaces/spawnUnit";
import { OrderId } from "w3ts/globals/order";
import { Timer } from "w3ts/handles/timer";
import { Unit } from "w3ts/handles/unit";
import { Base } from "./base";


export class Spawn {

    private static _level = 1
    private static _maxLevel = 12
    private static _totalWaves = 10
    private static timer: Timer

    private static _unit = 0
    private static _base = 0
    private static _wave = 1



    private bases: Array<Base>
    private units: Array<SPAWN_UNIT>
    public name: string

    constructor(name) {
        this.name = name
    }

    //
    // Static Methods
    //



    public static get level() {
        return this._level
    }

    public static set level(level: number) {
        this._level = level
    }

    public static get wave() {
        return this._wave
    }

    public static set wave(wave: number) {
        this._wave = wave
    }

    public get base() {
        return this.bases[Spawn._base]
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
    public addUnit(sUnit: SPAWN_UNIT) {
        if (sUnit.start == undefined) { sUnit.start = 1 }
        if (sUnit.end == undefined) { sUnit.end = 12 }
        if (sUnit.amount == undefined) { sUnit.amount = 1 }
        this.units.push(sUnit)
    }

    public unitInWave(sUnit: SPAWN_UNIT) {
        return sUnit.waves.indexOf(Spawn.wave) > -1
    }

    public unitInLevel(sUnit: SPAWN_UNIT) {
        return sUnit.start <= Spawn.level && sUnit.end >= Spawn.level
    }

    public get countOfUnits() {
        return this.units.length
    }

    public get countOfBases() {
        return this.bases.length
    }

    public spawnUnits() {

        for (let i = 0; i < this.units.length; i++) {
            this.spawnUnit(i)
        }
    }

    public spawnUnit(value: number) {

        const unitElement = this.units[value];

        if (this.unitInLevel(unitElement) && this.unitInWave(unitElement)) {
            for (let b = 0; b < this.bases.length; b++) {
                const baseElement = this.bases[b];

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