import { Logger } from 'app/log'
import { Position } from 'app/classes/position'
import { Unit, MapPlayer, Timer, Group, Anim } from 'lib/w3ts/index'
import { GateType } from './gateType'

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

export class Gate {
	public unit: Unit
	public gateType: GateType | undefined
	public player: MapPlayer
	public facing: number
	public position: Position
	public state: GateState

	static timeout = 2.5
	private static checkTimer = new Timer()
	static gates: Gate[] = []
	private static radius = 600

	constructor (unit: Unit) {
		this.unit = unit
		this.player = unit.owner
		this.gateType = GateType.get(unit)
		this.facing = unit.facing
		this.position = new Position(unit.coordinate)
		this.state = GateState.open

		Gate.gates.push(this)

		this.open()

		if (Gate.gates.length === 1) { Gate.checkTimer.start(Gate.timeout, true, (): void => { Gate.update() }) }
	}

	public static pause (): void {
		Gate.checkTimer.pause()
	}

	public static update (): void {
		let check: GateCheck

		for (let i = 0; i < Gate.gates.length; i++) {
			const element = Gate.gates[i]

			if (element.state !== GateState.died) {
				check = element.checkGate()

				if (element.state === GateState.open && check.enemies > 0 && check.friendlyHeroes === 0) {
					element.close()
				} else if (element.state === GateState.closed && (check.enemies === 0 || check.friendlyHeroes > 0)) {
					element.open()
				}
			}
		}
	}

	public checkGate (range = Gate.radius): GateCheck {
		const g = new Group()
		const check: GateCheck = { enemies: 0, allies: 0, friendlyHeroes: 0 }

		g.enumUnitsInRangeXY(this.unit.x, this.unit.y, range)
		g.firstLoop((u) => {
			if (u.isAlive()) {
				if (u.isAlly(this.unit)) {
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

	public static fromUnit (unit: Unit) {
		for (let i = 0; i < Gate.gates.length; i++) {
			const element = Gate.gates[i]

			if (element.unit === unit) {
				return element as Gate
			}
		}
	}

	public open (): void {
		Logger.Debug('Opening Gate', this.unit.owner)
		if (this.gateType) this.unit = this.unit.replace(this.gateType.openGate)
		this.unit.userData = 15

		this.unit.setAnimation(Anim.Gate.deathAlternate)
		this.state = GateState.open
	}

	public close (): void {
		Logger.Debug('Closing Gate', this.unit.owner)

		if (this.gateType) { this.unit = this.unit.replace(this.gateType.closedGate) }
		this.unit.userData = 15

		this.state = GateState.closed
	}

	public died (): void {
		if (this.gateType) this.unit = new Unit(MapPlayer.fromHandle(Player(PLAYER_NEUTRAL_PASSIVE)), this.gateType.openGate.id, this.unit.coordinate, this.unit.facing)
		this.unit.setAnimation(Anim.Gate.death)
		this.state = GateState.died
		const index = Gate.gates.indexOf(this)
		if (index > -1) Gate.gates.splice(index, 1)
		if (Gate.gates.length == 0) Gate.checkTimer.pause()
	}

	public hit (): void {
		this.unit.setAnimation(Anim.Gate.standHit)
	}
}
