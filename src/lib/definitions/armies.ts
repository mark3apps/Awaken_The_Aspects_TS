import { ALLIANCE, ALLIANCE_FORCE, FEDERATION, FEDERATION_FORCE } from "lib/globals";
import { MapPlayer, Unit } from "w3ts/index";

export function defineArmies() {
    ALLIANCE_FORCE.addPlayer(MapPlayer.fromIndex(18))
    ALLIANCE_FORCE.addPlayer(MapPlayer.fromIndex(19))
    ALLIANCE_FORCE.addPlayer(MapPlayer.fromIndex(20))
    FEDERATION_FORCE.addPlayer(MapPlayer.fromIndex(21))
    FEDERATION_FORCE.addPlayer(MapPlayer.fromIndex(22))
    FEDERATION_FORCE.addPlayer(MapPlayer.fromIndex(23))

    ALLIANCE.force = ALLIANCE_FORCE
    ALLIANCE.enemy = FEDERATION
    ALLIANCE.captial = Unit.fromHandle(gg_unit_h00E_0033)

    FEDERATION.force = FEDERATION_FORCE
    FEDERATION.enemy = ALLIANCE
    FEDERATION.captial = Unit.fromHandle(gg_unit_h00E_0081)
}