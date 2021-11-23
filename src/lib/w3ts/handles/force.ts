/** @noSelfInFile **/

import { Players } from "../globals/index"
import { Handle } from "./handle"
import { MapPlayer } from "./player"

export class Force extends Handle<force> {

	constructor() {
		if (Handle.initFromHandle()) {
			super()
		} else {
			super(CreateForce())
		}
	}

	public addPlayer(whichPlayer: MapPlayer): void {
		ForceAddPlayer(this.handle, whichPlayer.handle)
	}

	public addPlayers(whichPlayers: number[]): void {
		for (let index = 0; index < whichPlayers.length; index++) {
			const element = whichPlayers[index]

			ForceAddPlayer(this.handle, Players[element].handle)

		}
	}

	public pingMinimap(x: number, y: number, duration: number, flashy = false): void {
		this.pingMinimapEx(x, y, duration, flashy, 255, 255, 255)
	}

	public pingMinimapEx(x: number, y: number, duration: number, flashy: boolean, red: number, green: number, blue: number): void {

		if (this.hasPlayer(MapPlayer.fromLocal())) {

			//  Prevent 100% red simple and flashy pings, as they become "attack" pings.
			red == 255 && green == 0 && blue == 0 ? red = 254 : null
			PingMinimapEx(x, y, duration, red, green, blue, flashy)
		}
	}

	public clear(): void {
		ForceClear(this.handle)
	}

	public destroy(): void {
		DestroyForce(this.handle)
	}

	public displayTimedText(duration: number, message: string): void {
		DisplayTimedTextToForce(this.handle, duration, message)
	}

	public enumAllies(whichPlayer: MapPlayer, filter: boolexpr | (() => boolean)): void {
		ForceEnumAllies(this.handle, whichPlayer.handle, typeof filter === "function" ? Filter(filter) : filter)
	}

	public enumEnemies(whichPlayer: MapPlayer, filter: boolexpr | (() => boolean)): void {
		ForceEnumEnemies(this.handle, whichPlayer.handle, typeof filter === "function" ? Filter(filter) : filter)
	}

	public enumPlayers(filter: boolexpr | (() => boolean)): void {
		ForceEnumPlayers(this.handle, typeof filter === "function" ? Filter(filter) : filter)
	}

	public enumPlayersCounted(filter: boolexpr | (() => boolean), countLimit: number): void {
		ForceEnumPlayersCounted(this.handle, typeof filter === "function" ? Filter(filter) : filter, countLimit)
	}

	public for(callback: () => void): void {
		ForForce(this.handle, callback)
	}

	/**
	 * Returns all player handles belonging to this force
	 */
	public getPlayers(): MapPlayer[] {
		const players: MapPlayer[] = []

		ForForce(this.handle, () => players.push(MapPlayer.fromEnum()))

		return players
	}

	public getRandomPlayer(): MapPlayer {
		const players = this.getPlayers()
		return players[math.floor(math.random(0, players.length - 1))]
	}

	public hasPlayer(whichPlayer: MapPlayer): boolean {
		return IsPlayerInForce(whichPlayer.handle, this.handle)
	}

	public removePlayer(whichPlayer: MapPlayer): void {
		ForceRemovePlayer(this.handle, whichPlayer.handle)
	}

	public static fromHandle(handle: force): Force {
		return this.getObject(handle)
	}


	static Alliance: Force
	static AlliancePlayers: Force
	static AllianceAll: Force
	static Federation: Force
	static FederationPlayers: Force
	static FederationAll: Force
	static Computers: Force
	static Humans: Force

	static define = (): void => {

		Force.Alliance = new Force()
		Force.Alliance.addPlayers([18, 19, 20])

		Force.Federation = new Force()
		Force.Federation.addPlayers([21, 22, 23])

		Force.Computers = new Force()
		Force.Computers.addPlayers([18, 19, 20, 21, 22, 23])

		Force.AlliancePlayers = new Force()
		Force.AlliancePlayers.addPlayers([0, 1, 2, 3, 4, 5])

		Force.FederationPlayers = new Force()
		Force.FederationPlayers.addPlayers([6, 7, 8, 9, 10, 11])

		Force.Humans = new Force()
		for (let i = 0; i < 11; i++) {
			const player = Players[i]

			if (player.slotState == PLAYER_SLOT_STATE_PLAYING) {
				Force.Humans.addPlayer(Players[i])
			}
		}

		Force.AllianceAll = new Force()
		Force.AllianceAll.addPlayers([0, 1, 2, 3, 4, 5, 18, 19, 20])

		Force.FederationAll = new Force()
		Force.FederationAll.addPlayers([6, 7, 8, 9, 10, 11, 21, 22, 23])

	}

}
