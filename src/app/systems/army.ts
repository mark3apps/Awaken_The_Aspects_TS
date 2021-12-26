
import { Forces } from 'lib/w3ts/handles/Forces'
import { Units } from 'lib/w3ts/handles/Units'
import { Force, MapPlayer, Unit } from 'lib/w3ts/index'

export class Army {
	public force!: Force
	public name!: string
	public captial!: Unit
	public _enemy?: Army

	public get enemy (): Army | undefined {
		return this._enemy
	}

	public set enemy (army: Army | undefined) {
		this._enemy = army
	}

	public isCapitalAlive (): boolean {
		return this.captial.isAlive()
	}

	public get enemyForce (): Force | undefined {
		return this._enemy ? this._enemy.force : undefined
	}

	public get randomPlayer (): MapPlayer {
		return this.force.getPlayers()[Math.floor(Math.random() * this.force.getPlayers().length)]
	}

	static Alliance: Army
	static Federation: Army

	static define = (): void => {
		Army.Alliance = new Army()
		Army.Alliance.force = Forces.Alliance
		Army.Alliance.enemy = Army.Federation
		Army.Alliance.captial = Units.h00E_0033

		Army.Federation = new Army()
		Army.Federation.force = Forces.Federation
		Army.Federation.enemy = Army.Alliance
		Army.Federation.captial = Units.h00E_0081
	}
}
