import { Players } from '../globals/index'
import { Force } from './force'


export class Forces {
	static Alliance: Force
	static AlliancePlayers: Force
	static AllianceAll: Force
	static Federation: Force
	static FederationPlayers: Force
	static FederationAll: Force
	static Computers: Force
	static Humans: Force

	static define = (): void => {
		Forces.Alliance = new Force()
		Forces.Alliance.addPlayers([18, 19, 20])

		Forces.Federation = new Force()
		Forces.Federation.addPlayers([21, 22, 23])

		Forces.Computers = new Force()
		Forces.Computers.addPlayers([18, 19, 20, 21, 22, 23])

		Forces.AlliancePlayers = new Force()
		Forces.AlliancePlayers.addPlayers([0, 1, 2, 3, 4, 5])

		Forces.FederationPlayers = new Force()
		Forces.FederationPlayers.addPlayers([6, 7, 8, 9, 10, 11])

		Forces.Humans = new Force()
		for (let i = 0; i < 11; i++) {
			const player = Players[i]

			if (player.slotState === PLAYER_SLOT_STATE_PLAYING) {
				Forces.Humans.addPlayer(Players[i])
			}
		}

		Forces.AllianceAll = new Force()
		Forces.AllianceAll.addPlayers([0, 1, 2, 3, 4, 5, 18, 19, 20])

		Forces.FederationAll = new Force()
		Forces.FederationAll.addPlayers([6, 7, 8, 9, 10, 11, 21, 22, 23])
	};
}
