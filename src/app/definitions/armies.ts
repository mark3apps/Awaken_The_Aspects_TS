import { Army } from "classes/army"
import { Force, MapPlayer, Unit } from "lib/w3ts/index"

export namespace ARMY {
    export const alliance = new Army()
    export const federation = new Army()

    alliance.force = FORCE.alliance
    alliance.enemy = federation
    alliance.captial = Unit.fromHandle(gg_unit_h00E_0033)

    federation.force = FORCE.federation
    federation.enemy = alliance
    federation.captial = Unit.fromHandle(gg_unit_h00E_0081)
}

export namespace FORCE {
    export const alliance = new Force()
    export const federation = new Force()

    alliance.addPlayer(MapPlayer.fromIndex(18))
    alliance.addPlayer(MapPlayer.fromIndex(19))
    alliance.addPlayer(MapPlayer.fromIndex(20))
    federation.addPlayer(MapPlayer.fromIndex(21))
    federation.addPlayer(MapPlayer.fromIndex(22))
    federation.addPlayer(MapPlayer.fromIndex(23))

}
