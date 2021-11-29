import { Unit } from "lib/w3ts/index"


export class Position {
    x: number
    y: number
    z: number

    private static itemType = FourCC("I00M")

    constructor(x: number, y: number, z?: number) {
        this.x = x
        this.y = y
        this.z = z
    }

    static fromSpellTarget(): Position {
        return new Position(GetSpellTargetX(), GetSpellTargetY())
    }

    static fromOrder(): Position {

        return new Position(GetOrderPointX(), GetOrderPointY())
    }

    static fromCameraEye(): Position {
        return new Position(GetCameraEyePositionX(), GetCameraEyePositionY(), GetCameraEyePositionZ())
    }

    static fromCameraTarget(): Position {
        return new Position(GetCameraTargetPositionX(), GetCameraTargetPositionY(), GetCameraTargetPositionZ())
    }

    static fromXY(x: number, y: number, z?: number): Position {
        return new Position(x, y, z)
    }

    public isBlighted(): boolean {

        return IsPointBlighted(this.x, this.y)
    }

    /**
     * 
     * @param pathingType Default is WALKABILITY
     * @returns 
     */
    public isTerrianPathable(pathingType = PATHING_TYPE_WALKABILITY): boolean {
        return !IsTerrainPathable(this.x, this.y, pathingType)
    }

    public distanceTo(value: Position | Unit): number {
        return SquareRoot(((value.x - this.x) * (value.x - this.x)) + ((value.y - this.y) * (value.y - this.y)))
    }

    public angleTo(value: Position | Unit): number {
        return bj_RADTODEG * Atan2(value.y - this.y, value.x - this.x)
    }

    public angleZTo(value:Position): number {
        const distance = this.distanceTo(value)
        return bj_RADTODEG * Atan2(this.z - value.z, 0 - distance)
    }

    public polarProjection(dist: number, angle: number): Position {
        return new Position(this.x + dist * Cos(angle * bj_DEGTORAD), this.y + dist * Sin(angle * bj_DEGTORAD))
    }

    public moveToPolarProjection(dist: number, angle: number): void {
        this.x = this.x + dist * Cos(angle * bj_DEGTORAD)
        this.y = this.y + dist * Sin(angle * bj_DEGTORAD)
    }

    public getParabola(distanceTraveled: number, fullDistance: number, maximumHeight: number): number {
        return 4 * maximumHeight * distanceTraveled * (fullDistance - distanceTraveled) / (fullDistance * fullDistance)
    }

    public pingMinimap(duration: number, extraEffects = false, red = 0, green = 0, blue = 0,): void {
        PingMinimapEx(this.x, this.y, duration, red, green, blue, extraEffects)
    }

    public moveTo(pos: Position): void {
        this.x = pos.x
        this.y = pos.y
        if (pos.z) {this.z = pos.z}
    }

    /**
     * 
     * @param threshold default = 100
     * @param pathingType default = WALKABILITY
     * @returns 
     */
    public isGroundPathable(threshold = 100, pathingType = PATHING_TYPE_WALKABILITY): boolean {

        const item = CreateItem(Position.itemType, this.x, this.y)
        const x = GetItemX(item)
        const y = GetItemY(item)
        RemoveItem(item)

        const variance = (x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)

        return variance <= threshold && !this.isTerrianPathable(pathingType)
    }

    // Async command, use with caution, creates and destroys a Point Handle, not amazingly fast
    public get localZ(): number {
        const point = Location(this.x, this.y)
        const z = GetLocationZ(point)
        RemoveLocation(point)

        return z
    }
}