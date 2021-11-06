import { Players } from "lib/w3ts/globals/index"
import { Force } from "lib/w3ts/index"

export namespace FORCE {
    export let Alliance: Force
    export let AlliancePlayers: Force
    export let AllianceAll: Force
    export let Federation: Force
    export let FederationPlayers: Force
    export let FederationAll: Force
    export let Computers: Force
    export let Humans: Force

    export const define = (): void => {

        Alliance = new Force()
        Alliance.addPlayers([18, 19, 20])

        Federation = new Force()
        Federation.addPlayers([21, 22, 23])

        Computers = new Force()
        Computers.addPlayers([18, 19, 20, 21, 22, 23])

        AlliancePlayers = new Force()
        AlliancePlayers.addPlayers([0, 1, 2, 3, 4, 5])

        FederationPlayers = new Force()
        FederationPlayers.addPlayers([6, 7, 8, 9, 10, 11])

        Humans = new Force()
        for (let i = 0; i < 11; i++) {
            const player = Players[i]

            if (player.slotState == PLAYER_SLOT_STATE_PLAYING) {
                Humans.addPlayer(Players[i])
            }
        }

        AllianceAll = new Force()
        AllianceAll.addPlayers([0, 1, 2, 3, 4, 5, 18, 19, 20])

        FederationAll = new Force()
        FederationAll.addPlayers([6, 7, 8, 9, 10, 11, 21, 22, 23])

    }


}