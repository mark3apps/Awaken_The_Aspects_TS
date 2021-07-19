import { Army } from "app/classes/army";
import { Allied, AlliedForce, Federation, FederationForce } from "globals";
import { Players } from "w3ts/globals/index";
import { MapPlayer, Unit } from "w3ts/index";

export function defineArmies() {
    AlliedForce.addPlayer(MapPlayer.fromIndex(18))
    AlliedForce.addPlayer(MapPlayer.fromIndex(19))
    AlliedForce.addPlayer(MapPlayer.fromIndex(20))
    FederationForce.addPlayer(MapPlayer.fromIndex(21))
    FederationForce.addPlayer(MapPlayer.fromIndex(22))
    FederationForce.addPlayer(MapPlayer.fromIndex(23))

    Allied.force = AlliedForce
    Allied.enemy = Federation
    Allied.captial = Unit.fromHandle(gg_unit_h00E_0033)

    Federation.force = FederationForce
    Federation.enemy = Allied
    Federation.captial = Unit.fromHandle(gg_unit_h00E_0081)
}