import { Force, MapPlayer } from "lib/w3ts/index"

export namespace FORCE {
    export let Alliance: Force
    export let Federation: Force

    export function define(): void{
        Alliance = new Force()
        Alliance.addPlayer(MapPlayer.fromIndex(18))
        Alliance.addPlayer(MapPlayer.fromIndex(19))
        Alliance.addPlayer(MapPlayer.fromIndex(20))

        Federation = new Force()
        Federation.addPlayer(MapPlayer.fromIndex(21))
        Federation.addPlayer(MapPlayer.fromIndex(22))
        Federation.addPlayer(MapPlayer.fromIndex(23))
    }


}