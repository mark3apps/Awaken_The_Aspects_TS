import { Players } from "lib/w3ts/globals/index"
import { Force } from "lib/w3ts/index"

export namespace FORCE {
    export const Alliance = new Force()
    export const AlliancePlayers = new Force()
    export const AllianceAll = new Force()
    export const Federation = new Force()
    export const FederationPlayers = new Force()
    export const FederationAll = new Force()
    export const Computers = new Force()

    export function define(): void{

        Alliance.addPlayer(Players[18])
        Alliance.addPlayer(Players[19])
        Alliance.addPlayer(Players[20])

        Federation.addPlayer(Players[21])
        Federation.addPlayer(Players[22])
        Federation.addPlayer(Players[23])

        Computers.addPlayer(Players[18])
        Computers.addPlayer(Players[19])
        Computers.addPlayer(Players[20])
        Computers.addPlayer(Players[21])
        Computers.addPlayer(Players[22])
        Computers.addPlayer(Players[23])

        AlliancePlayers.addPlayer(Players[0])       
        AlliancePlayers.addPlayer(Players[1])  
        AlliancePlayers.addPlayer(Players[2])  
        AlliancePlayers.addPlayer(Players[3])  
        AlliancePlayers.addPlayer(Players[4])  
        AlliancePlayers.addPlayer(Players[5])
        
        FederationPlayers.addPlayer(Players[6])       
        FederationPlayers.addPlayer(Players[7])  
        FederationPlayers.addPlayer(Players[8])  
        FederationPlayers.addPlayer(Players[9])  
        FederationPlayers.addPlayer(Players[10])  
        FederationPlayers.addPlayer(Players[11])

        AllianceAll.addPlayer(Players[0])       
        AllianceAll.addPlayer(Players[1])  
        AllianceAll.addPlayer(Players[2])  
        AllianceAll.addPlayer(Players[3])  
        AllianceAll.addPlayer(Players[4])  
        AllianceAll.addPlayer(Players[5])
        AllianceAll.addPlayer(Players[18])
        AllianceAll.addPlayer(Players[19])
        AllianceAll.addPlayer(Players[20])

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