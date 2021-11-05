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

    export const define = (): void => {

        Alliance = new Force()
        Alliance.addPlayer(Players[18])
        Alliance.addPlayer(Players[19])
        Alliance.addPlayer(Players[20])

        Federation = new Force()
        Federation.addPlayer(Players[21])
        Federation.addPlayer(Players[22])
        Federation.addPlayer(Players[23])

        Computers = new Force()
        Computers.addPlayer(Players[18])
        Computers.addPlayer(Players[19])
        Computers.addPlayer(Players[20])
        Computers.addPlayer(Players[21])
        Computers.addPlayer(Players[22])
        Computers.addPlayer(Players[23])

        AlliancePlayers = new Force()
        AlliancePlayers.addPlayer(Players[0])
        AlliancePlayers.addPlayer(Players[1])
        AlliancePlayers.addPlayer(Players[2])
        AlliancePlayers.addPlayer(Players[3])
        AlliancePlayers.addPlayer(Players[4])
        AlliancePlayers.addPlayer(Players[5])

        FederationPlayers = new Force()
        FederationPlayers.addPlayer(Players[6])
        FederationPlayers.addPlayer(Players[7])
        FederationPlayers.addPlayer(Players[8])
        FederationPlayers.addPlayer(Players[9])
        FederationPlayers.addPlayer(Players[10])
        FederationPlayers.addPlayer(Players[11])

        AllianceAll = new Force()
        AllianceAll.addPlayer(Players[0])
        AllianceAll.addPlayer(Players[1])
        AllianceAll.addPlayer(Players[2])
        AllianceAll.addPlayer(Players[3])
        AllianceAll.addPlayer(Players[4])
        AllianceAll.addPlayer(Players[5])
        AllianceAll.addPlayer(Players[18])
        AllianceAll.addPlayer(Players[19])
        AllianceAll.addPlayer(Players[20])

        FederationAll = new Force()
        FederationAll.addPlayer(Players[6])
        FederationAll.addPlayer(Players[7])
        FederationAll.addPlayer(Players[8])
        FederationAll.addPlayer(Players[9])
        FederationAll.addPlayer(Players[10])
        FederationAll.addPlayer(Players[11])
        FederationAll.addPlayer(Players[21])
        FederationAll.addPlayer(Players[22])
        FederationAll.addPlayer(Players[23])
    }


}