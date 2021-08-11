import { Players } from "lib/w3ts/globals/index"
import { Force } from "lib/w3ts/index"

export namespace FORCE {
    export let Alliance: Force
    export let Federation: Force
    export let Computers: Force

    export function define(): void{
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

        
    }


}