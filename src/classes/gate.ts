import { UNIT_TYPE } from "app/definitions/unitTypes"
import { EVENT } from "app/systems/events"
import { Log } from "app/systems/log"
import { Coordinate } from "lib/resources/coordinate"
import { ANIMATION } from "lib/w3ts/globals/unitAnimations"
import { Group, MapPlayer, Rectangle, Timer, Unit } from "lib/w3ts/index"
import { UnitType } from "./unitType"

export interface GateCheck {
    enemies: number,
    allies: number,
    friendlyHeroes: number
}

export const enum GateState {
    open,
    closed,
    died
}


export class GateType {
    public openGate: UnitType
    public closedGate: UnitType

    private static _key: GateType[] = []
    public static typeIds: number[] = []

    constructor(openGate: UnitType, closedGate: UnitType) {
        this.openGate = openGate
        this.closedGate = closedGate
        GateType._key.push(this)
        GateType.typeIds.push(this.openGate.id)
        GateType.typeIds.push(this.closedGate.id)
    }

    public static get(unit: Unit): GateType {
        for (let i = 0; i < GateType._key.length; i++) {
            const element = GateType._key[i]

            if (element.closedGate.id == unit.typeId || element.openGate.id == unit.typeId) {
                return element
            }
        }
    }
}



export class Gate {
    public unit: Unit
    public gateType: GateType
    public player: MapPlayer
    public facing: number
    public coordinate: Coordinate
    public state: GateState

    private static checkTimer: Timer
    private static all: Gate[] = []
    private static unitGroup = new Group()
    private static radius: number

    constructor(unit: Unit) {
        this.unit = unit
        this.player = unit.owner
        this.gateType = GateType.get(unit)
        this.facing = unit.facing
        this.coordinate = unit.coordinates
        this.state = GateState.open

        Gate.all.push(this)
        Gate.unitGroup.addUnit(this.unit)

        this.open()
    }

    public static define(): void {
        Log.Information("Defining Gate Types")
        new GateType(UNIT_TYPE.DwarvenGateOpen, UNIT_TYPE.DwarvenGateClosed)
        new GateType(UNIT_TYPE.CastleGateOpen, UNIT_TYPE.CastleGateClosed)
        Log.Information("Finished Defining Gate Types")

        Log.Information("Defining Gates")

        const g = new Group()
        g.enumUnitsInRect(Rectangle.getPlayableMap(), null)

        let u = g.first
        while (u != null) {

            if (GateType.typeIds.indexOf(u.typeId) != -1 && u != null) {
                Log.Debug("Unit", u.name, u.owner.name)
                new Gate(u)
            }


            g.removeUnit(u)
            u = g.first
        }
        g.destroy()

        EVENT.unitDies.add(() => {
            if (Unit.fromEvent().inGroup(Gate.unitGroup)) {
                const gate = Gate.fromUnit(Unit.fromEvent())
                gate.died()
            }
        })

        Log.Information("Finished Defining Gates")
    }

    public static start(timeout: number, radius = 500): void {
        Gate.radius = radius
        Gate.checkTimer = new Timer()
        Gate.checkTimer.start(timeout, true, (): void => { Gate.checkGates() })
    }

    public static pause(): void {
        Gate.checkTimer.pause()
    }

    public static checkGates(): void {
        Log.Verbose("Checking Gates")
        let check: GateCheck

        for (let i = 0; i < Gate.all.length; i++) {
            const element = Gate.all[i]

            if (element.state != GateState.died) {
                check = Gate.checkGate(element, Gate.radius)

                if (element.state == GateState.open && check.enemies > 0 && check.friendlyHeroes == 0) {
                    element.close()
                } else if (element.state == GateState.closed && (check.enemies == 0 || check.friendlyHeroes > 0)) {
                    element.open()
                }
            }
        }

        Log.Verbose("Finished Checking the Gates")
    }


    public static checkGate(gate: Gate, range: number): GateCheck {
        const g = new Group()
        const check: GateCheck = { enemies: 0, allies: 0, friendlyHeroes: 0 }

        g.enumUnitsInRange(gate.unit.x, gate.unit.y, range, null)

        let u = g.first
        while (u != null) {

            if (u.isAlive()) {
                if (u.isAlly(gate.unit)) {
                    check.allies += 1

                    if (u.isHero) {
                        check.friendlyHeroes += 1
                    }
                } else {
                    check.enemies += 1
                }
            }

            g.removeUnit(u)
            u = g.first
        }
        g.destroy()

        return check
    }

    public static fromUnit(unit: Unit): Gate {

        for (let i = 0; i < Gate.all.length; i++) {
            const element = Gate.all[i]

            if (element.unit == unit) {
                return element
            }
        }
    }

    public open(): void {
        Gate.unitGroup.removeUnit(this.unit)
        Log.Debug("Opening Gate", this.unit.owner)
        this.unit = this.unit.replace(this.gateType.openGate)
        Gate.unitGroup.addUnit(this.unit)

        this.unit.setAnimation(ANIMATION.Gate.deathAlternate)
        this.state = GateState.open
    }

    public close(): void {
        Log.Debug("Closing Gate", this.unit.owner)

        Gate.unitGroup.removeUnit(this.unit)
        this.unit = this.unit.replace(this.gateType.closedGate)
        Gate.unitGroup.addUnit(this.unit)

        this.state = GateState.closed
        Log.Debug("Gate Closed", this.unit.owner)
    }

    public died(): void {
        Gate.unitGroup.removeUnit(this.unit)

        this.unit = new Unit(MapPlayer.fromHandle(Player(PLAYER_NEUTRAL_PASSIVE)), this.gateType.openGate.id, this.unit.x, this.unit.y, this.unit.facing)
        this.unit.setAnimation(ANIMATION.Gate.death)
        this.state = GateState.died
    }

    public hit(): void {
        this.unit.setAnimation(ANIMATION.Gate.standHit)
    }
}