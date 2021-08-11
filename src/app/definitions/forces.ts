import { Force, MapPlayer } from "lib/w3ts/index"

export namespace FORCE {
    export let alliance: Force
    export let federation: Force

    export function define(): void{
        alliance = new Force()
        alliance.addPlayer(MapPlayer.fromIndex(18))
        alliance.addPlayer(MapPlayer.fromIndex(19))
        alliance.addPlayer(MapPlayer.fromIndex(20))

        federation = new Force()
        federation.addPlayer(MapPlayer.fromIndex(21))
        federation.addPlayer(MapPlayer.fromIndex(22))
        federation.addPlayer(MapPlayer.fromIndex(23))
    }


}