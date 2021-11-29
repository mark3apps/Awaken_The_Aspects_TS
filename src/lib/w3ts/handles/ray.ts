import { Position } from "app/classes/position"
import { Effect } from "./effect"
import { Timer } from "./timer"
import { Unit } from "./unit"

export class Ray extends Position {

    private _startPosition: Position | Unit
    private _endPosition: Position | Unit
    private _angle: number
    private _modelPath = ""
    private _modelEffect: Effect
    private _tickTimer: Timer

    private _xHeight = 0
    private _yHeight = 0
    private _zHeight = 0

    rayUnit: Unit
    velocity: number
    increment = 0.02
    ticks = 0
    turnSpeed = 1
    destroyAtEnd = true


    // Static Values
    static xHeightMax = 800
    static yHeightMax = 800
    static zHeightMax = 500

    /**
     * 
     * @param startPos 
     * @param travelDistance 
     * @param angle 
     * @param velocity 
     * @param modelPath 
     * @param increment 
     */
    constructor(startPos: Position | Unit, travelDistance: number, angle: number, velocity: number, modelPath?: string, increment?: number)
    /**
     * 
     * @param startPos If set to a Unit, the ray's start position will be locked to the Unit
     * @param endPos If set to a unit, the ray's end position will be locked to the Unit. AKA Homing.
     * @param velocity Speed that the ray moves each tick
     * @param modelPath Model path for a special effect to show at the ray's location
     * @param increment how often the ray ticks forward.  Default is 0.02 seconds
     * @param blank INGORE
     */
    constructor(startPos: Position | Unit, endPos: Position | Unit, velocity: number, modelPath?: string, increment?: number, blank?: number)
    constructor(startPos: Position | Unit, a: number | Position | Unit, b: number, c?: number | string, d?: string | number, e?: number) {

        super(startPos.x, startPos.y, startPos.z)
        this._startPosition = startPos

        if (typeof a === "number") {
            const distance = a
            const angle = b

            this._endPosition = this._startPosition.polarProjection(distance, angle)
            this.velocity = c as number
            this._modelPath = d as string
            this.increment = e as number

        } else {
            this._endPosition = a
            this.velocity = b
            this._modelPath = c as string
            this.increment = d as number
        }

        this._angle = this.startPosition.angleTo(this.endPosition)

        if (this._modelPath) {
            this._modelEffect = new Effect(this._modelPath, this)
        }

        this._tickTimer = new Timer()
    }

    public startForward(): void {
        this._tickTimer.start(this.increment, true, () => { this.tick(1) })
    }

    public startBackward(): void {
        this._tickTimer.start(this.increment, true, () => { this.tick(-1) })
    }

    public pause(): void {
        this._tickTimer.pause()
    }

    public tick(newTicks = 1): void {
        
        // Update the Angle with the new tragectery
        this.angle = this.angleToEnd

        // Push the Ray forward
        this.x += (this.velocity * Cos(this.angle * bj_DEGTORAD)) * newTicks
        this.y += (this.velocity * Sin(this.angle * bj_DEGTORAD)) * newTicks
        this.z += (this.velocity * Tan(this.angle * bj_DEGTORAD)) * newTicks
        this.ticks + newTicks
        this.updateEffect()
        this.updateRayUnit()
    }

    public set xHeight(value: number) {
        this._xHeight = value > Ray.xHeightMax ? Ray.xHeightMax : value
    }

    public get xHeight(): number {
        return this.xHeight
    }

    public set yHeight(value: number) {
        this._yHeight = value > Ray.yHeightMax ? Ray.yHeightMax : value
    }

    public get yHeight(): number {
        return this._yHeight
    }

    public set zHeight(value: number) {
        this._zHeight = value > Ray.zHeightMax ? Ray.zHeightMax : value
    }

    public get zHeight(): number {
        return this._zHeight
    }

    public setHeight(x = 0, y = 0, z = 0): void {
        this.xHeight = x
        this.yHeight = y
        this.zHeight = z
    }

    public get xParabola(): number {
        return this.getParabola(this.distanceToStart, this.distanceStartToEnd, this._xHeight)
    }

    public get yParabola(): number {
        return this.getParabola(this.distanceToStart, this.distanceStartToEnd, this._yHeight)
    }

    public get zParabola(): number {
        return this.getParabola(this.distanceToStart, this.distanceStartToEnd, this._zHeight)
    }

    public get positionParabola(): Position {
        return new Position(this.xParabola, this.yParabola, this.zParabola)
    }

    public get angle(): number {
        return this._angle
    }

    /**
     * Only allows the angle to be changed by the max angle set in the turn rate field each call
     */
    public set angle(newAngle: number) {
        const angleChange = newAngle - this.angle

        if (math.abs(angleChange) > this.turnSpeed) {
            angleChange < 0 ? this._angle -= this.turnSpeed : this._angle += this.turnSpeed
        } else {
            this._angle + angleChange
        }
    }

    public get angleZToStart(): number {
        return this.angleZTo(this.startPosition)
    }

    public get angleZToEnd(): number {
        return this.angleZTo(this.endPosition)
    }

    public get angleToEnd(): number {
        return this.angleTo(this.endPosition)
    }

    public get angleToStart(): number {
        return this.angleTo(this.startPosition)
    }

    public get angleStartToEnd(): number {
        return this.startPosition.angleTo(this.endPosition)
    }

    public get distanceToStart(): number {
        return this.distanceTo(this.startPosition)
    }

    public set distanceToStart(value: number) {
        const newDistance = this.distanceToStart - value
        this.moveToPolarProjection(newDistance, this.angleToStart)
    }

    public get distanceToEnd(): number {
        return this.distanceTo(this.endPosition)
    }

    public set distanceToEnd(value: number) {
        const newDistance = this.distanceToEnd - value
        this.moveToPolarProjection(newDistance, this.angleToEnd)
    }

    public get endPosition(): Position {
        return this._endPosition instanceof Unit ? this._endPosition.position : this._endPosition
    }

    public set endPosition(pos: Position | Unit) {
        this._endPosition = pos
    }

    public get startPosition(): Position {
        return this._startPosition instanceof Unit ? this._startPosition.position : this._startPosition
    }

    public set startPosition(pos: Position) {
        this._startPosition = pos
    }



    public get distanceStartToEnd(): number {
        return this._startPosition.distanceTo(this._endPosition)
    }

    public set distanceStartToEnd(value: number) {

        this.endPosition
    }

    public set model(path: string) {

        // Check to see if the model path is different
        if (this.model != path) {

            // Destroy the Existing Effect
            if (this._modelPath != null) {
                this._modelEffect.destroy()
            }

            // Create the new Effect
            this._modelPath = path
            this._modelEffect = new Effect(this._modelPath, this)
            this._modelEffect.z = this.z
        }

    }

    public get model(): string {
        return this._modelPath
    }

    public updateEffect(): void {
        if (this.model != "") {
            this._modelEffect.position = this
        }
    }

    public updateRayUnit(): void {
        if (this.rayUnit != null) {
            this.rayUnit.position = this
        }
    }

    public destroyEffect(): void {
        this._modelEffect.destroy()
    }
}

