import { SPAWN_UNIT } from "lib/resources/interfaces/spawnUnit";
import { OrderId } from "w3ts/globals/order";
import { Unit } from "w3ts/index";
import { Base } from "./base";

export class Spawn {

    private static _level = 1
    private static _maxLevel = 12
    private static _wave = 1
    private static _totalWaves = 10
    private bases : Array<Base>
    private units : Array<SPAWN_UNIT>


    constructor() {

    }

    //
    // Static Methods
    //


    public static get maxLevel() {
        return this._maxLevel
    }

    public static set maxLevel(maxLevel: number) {
        this._maxLevel = maxLevel
    }
    
    public static get level() {
        return this._level
    }

    public static set level(level: number) {
        if (level > this.maxLevel) { level = this.maxLevel }
        this._level = level
    }

    public static get wave() {
        return this._wave
    }

    public static set wave(wave: number) {
        if (wave > this._totalWaves) {
            this._wave = 1
        } else if (wave < 0) {
            this._wave = this._totalWaves
        }
    }

    public static get totalWaves() {
        return this._totalWaves
    }

    public static set totalWaves(totalWaves: number) {
        if (totalWaves < 1) { totalWaves = 1 }
        this._totalWaves = totalWaves
    }

    //
    // Instance Methods
    //

    public addBase(sBase : Base) {
        this.bases.push(sBase)
    }

    /**
     * 
     * @param sUnit Start = 1, End = 12, Amount = 1
     */
    public addUnit(sUnit: SPAWN_UNIT) {
        if (sUnit.start == undefined) {sUnit.start = 1}
        if (sUnit.end == undefined) {sUnit.end = 12}
        if (sUnit.amount == undefined) {sUnit.amount = 1}
        this.units.push(sUnit)
    }

    public unitInWave(sUnit: SPAWN_UNIT) {
        return sUnit.waves.indexOf(Spawn.wave) > -1
    }

    public unitInLevel(sUnit: SPAWN_UNIT) {
        return sUnit.start <= Spawn.level && sUnit.end >= Spawn.level
    }


    public spawnUnits() {

        for (let i = 0; i < this.units.length; i++) {
            const unitElement = this.units[i];
            
            
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
}