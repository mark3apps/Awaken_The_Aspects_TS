
import { Unit } from "lib/w3ts/index"
import { Coordinate } from "./coordinate"

export function CC2Four(num: number): string {
    return string.pack(">I4", num)
}

export function ValueFactor(level: number, base: number, previousFactor: number, levelFactor: number, constant: number): number {

    let value = base

    if (level > 1) {
        for (let i = 2; i < level; i++) {
            value = (value * previousFactor) + (i * levelFactor) + (constant)
        }
    }

    return value
}

export function PolarProjectionCoordinates(x: number, y: number, dist: number, angle: number): Coordinate {
    const newX = x + dist * Cos(angle * bj_DEGTORAD)
    const newY = y + dist * Sin(angle * bj_DEGTORAD)
    return { x: newX, y: newY }
}

export function DistanceBetweenCoordinates(c1: Coordinate, c2: Coordinate): number {
    return SquareRoot(((c2.x - c1.x) * (c2.x - c1.x)) + ((c2.y - c1.y) * (c2.y - c1.y)))
}

export function AngleBetweenCoordinates(x1: number, y1: number, x2: number, y2: number): number {
    return bj_RADTODEG * Atan2(y2 - y1, x2 - x1)
}

export function AngleBetweenUnits(unitA: Unit, unitB: Unit): number {
    return AngleBetweenCoordinates(unitA.x, unitA.y, unitB.x, unitB.y)
}

