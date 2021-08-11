import { Unit } from "lib/w3ts/index"

export function CC2Four(num: number) {
    return string.pack(">I4", num)
}

export function ValueFactor(level: number, base: number, previousFactor: number, levelFactor: number, constant: number) {

    let value = base

    if (level > 1) {
        for (let i = 2; i < level; i++) {
            value = (value * previousFactor) + (i * levelFactor) + (constant)
        }
    }

    return value
}

export function PolarProjectionCoordinates(x: number, y: number, dist: number, angle: number) {
    let newX = x + dist * Cos(angle * bj_DEGTORAD)
    let newY = y + dist * Sin(angle * bj_DEGTORAD)
    return [newX, newY]
}

export function DistanceBetweenCoordinates(x1: number, y1: number, x2: number, y2: number) {
    return SquareRoot(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))
}

export function DistanceBetweenUnits(unitA: Unit, unitB: Unit) {
    return DistanceBetweenCoordinates(unitA.x, unitA.y, unitB.x, unitB.y)
}

export function AngleBetweenCoordinates(x1: number, y1: number, x2: number, y2: number) {
    return bj_RADTODEG * Atan2(y2 - y1, x2 - x1)
}

export function AngleBetweenUnits(unitA: Unit, unitB: Unit) {
    return AngleBetweenCoordinates(unitA.x, unitA.y, unitB.x, unitB.y)
}