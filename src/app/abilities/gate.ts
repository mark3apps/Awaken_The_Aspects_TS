import { Logger } from 'app/log'
import { Position } from 'app/classes/position'
import { UnitType } from 'app/classes/unitType'
import { Unit, MapPlayer, Timer, Group, Rectangle, Trigger, Anim } from 'lib/w3ts/index'

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

	constructor (openGate: UnitType, closedGate: UnitType) {
		this.openGate = openGate
		this.closedGate = closedGate
		GateType._key.push(this)
		GateType.typeIds.push(this.openGate.id)
		GateType.typeIds.push(this.closedGate.id)
	}

	public static get (unit: Unit): GateType | undefined {
		for (let i = 0; i < GateType._key.length; i++) {
			const element = GateType._key[i]

			if (element.closedGate.id === unit.typeId || element.openGate.id === unit.typeId) {
				return element
			}
		}
	}
}

export class Gate {
	public unit: Unit
	public gateType: GateType | undefined
	public player: MapPlayer
	public facing: number
	public coordinate: Position
	public state: GateState

	private static checkTimer: Timer
	private static all: Gate[] = []
	private static unitGroup = new Group()
	private static radius: number

	constructor (unit: Unit) {
		this.unit = unit
		this.player = unit.owner
		this.gateType = GateType.get(unit)
		this.facing = unit.facing
		this.coordinate = unit.position
		this.state = GateState.open

		Gate.all.push(this)
		Gate.unitGroup.addUnit(this.unit)

		this.open()
	}

	public static define (): void {
		Logger.Information('Defining Gate Types')
		new GateType(UnitType.DwarvenGateOpen, UnitType.DwarvenGateClosed)
		new GateType(UnitType.CastleGateOpen, UnitType.CastleGateClosed)
		Logger.Information('Finished Defining Gate Types')

		Logger.Information('Defining Gates')

		const g = new Group()
		g.enumUnitsInRect(Rectangle.getPlayableMap())

		g.firstLoop((u) => {
			if (GateType.typeIds.indexOf(u.typeId) !== -1 && u != null) {
				Logger.Debug('Unit', u.name, u.owner.name)
				new Gate(u)
			}
		})
		g.destroy()

		// Trigger Setup
		Trigger.unitDies.add(() => {
			if (Unit.fromEvent().inGroup(Gate.unitGroup)) {
				const gate = Gate.fromUnit(Unit.fromEvent())
				if (gate) gate.died()
			}
		})

		Trigger.unitAttacked.add(() => {
			if (Unit.fromEvent().inGroup(Gate.unitGroup)) {
				Unit.fromEvent().setAnimation(Anim.Gate.standHit)
			}
		})

		Logger.Information('Finished Defining Gates')
	}

	public static start (timeout: number, radius = 500): void {
		Gate.radius = radius
		Gate.checkTimer = new Timer()
		Gate.checkTimer.start(timeout, true, (): void => { Gate.checkGates() })
	}

	public static pause (): void {
		Gate.checkTimer.pause()
	}

	public static checkGates (): void {
		Logger.Verbose('Checking Gates')
		let check: GateCheck

		for (let i = 0; i < Gate.all.length; i++) {
			const element = Gate.all[i]

			if (element.state !== GateState.died) {
				check = Gate.checkGate(element, Gate.radius)

				if (element.state === GateState.open && check.enemies > 0 && check.friendlyHeroes === 0) {
					element.close()
				} else if (element.state === GateState.closed && (check.enemies === 0 || check.friendlyHeroes > 0)) {
					element.open()
				}
			}
		}

		Logger.Verbose('Finished Checking the Gates')
	}

	public static checkGate (gate: Gate, range: number): GateCheck {
		const g = new Group()
		const check: GateCheck = { enemies: 0, allies: 0, friendlyHeroes: 0 }

		g.enumUnitsInRangeXY(gate.unit.x, gate.unit.y, range)
		g.firstLoop((u) => {
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
		})
		g.destroy()

		return check
	}

	public static fromUnit (unit: Unit): Gate | undefined {
		for (let i = 0; i < Gate.all.length; i++) {
			const element = Gate.all[i]

			if (element.unit === unit) {
				return element as Gate
			}
		}
	}

	public open (): void {
		Gate.unitGroup.removeUnit(this.unit)
		Logger.Debug('Opening Gate', this.unit.owner)
		if (this.gateType) this.unit = this.unit.replace(this.gateType.openGate)
		Gate.unitGroup.addUnit(this.unit)

		this.unit.setAnimation(Anim.Gate.deathAlternate)
		this.state = GateState.open
	}

	public close (): void {
		Logger.Debug('Closing Gate', this.unit.owner)

		Gate.unitGroup.removeUnit(this.unit)
		if (this.gateType) this.unit = this.unit.replace(this.gateType.closedGate)
		Gate.unitGroup.addUnit(this.unit)

		this.state = GateState.closed
		Logger.Debug('Gate Closed', this.unit.owner)
	}

	public died (): void {
		Gate.unitGroup.removeUnit(this.unit)

		if (this.gateType) this.unit = new Unit(MapPlayer.fromHandle(Player(PLAYER_NEUTRAL_PASSIVE)), this.gateType.openGate.id, this.unit.position, this.unit.facing)
		this.unit.setAnimation(Anim.Gate.death)
		this.state = GateState.died
	}

	public hit (): void {
		this.unit.setAnimation(Anim.Gate.standHit)
	}
}
