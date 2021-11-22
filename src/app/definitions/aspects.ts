import { Aspect } from "classes/aspect"
import { ID } from "lib/w3ts/globals/ids"
import { FORCE } from "./forces"
import { LOC } from "./locs"

export namespace ASPECTS {

    export const define = (): void => {

        // Aspect of the Tides
        new Aspect(50, gg_unit_nmsc_0644, gg_unit_nntt_0135, FORCE.Alliance, LOC.top.federation, gg_rct_Murloc_Gate_Left, ID.Destructible.MassiveRuinedGateVertical)
        new Aspect(50, gg_unit_nmsc_0450, gg_unit_nntt_0132, FORCE.Federation, LOC.bottom.alliance, gg_rct_Murloc_Gate_Right, ID.Destructible.MassiveRuinedGateVertical)

        // Aspect of the Earth
        new Aspect(50, gg_unit_nggg_0968, gg_unit_h006_0074, FORCE.Alliance, LOC.sCityFront.federation, gg_rct_Rock_Gate_Left, ID.Destructible.IcyGate)
        new Aspect(50, gg_unit_nggg_0600, gg_unit_h006_0055, FORCE.Federation, LOC.sCityFront.alliance, gg_rct_Rock_Gate_Right, ID.Destructible.IcyGate)

        // Aspect of the Storm
        new Aspect(50, gg_unit_nelb_0697, gg_unit_h003_0015, FORCE.Alliance, LOC.bottom.federation)
        new Aspect(50, gg_unit_nelb_0194, gg_unit_h003_0007, FORCE.Federation, LOC.top.alliance)

        // Aspect of the Forest
        new Aspect(50, gg_unit_n00N_0939, gg_unit_nheb_0109, FORCE.Alliance, LOC.top.federation, gg_rct_Aspect_of_Forest_Left_Gate, ID.Destructible.ElvenGate)
        new Aspect(50, gg_unit_n00N_0769, gg_unit_nheb_0036, FORCE.Federation, LOC.bottom.alliance, gg_rct_Aspect_of_Forest_Right_Gate, ID.Destructible.ElvenGate)

        // Aspect of Death
        new Aspect(50, gg_unit_uabo_0493, gg_unit_n00K_0802, FORCE.Alliance, LOC.middle.federation)
        new Aspect(50, gg_unit_uabo_0263, gg_unit_n00K_0477, FORCE.Federation, LOC.middle.alliance)
    }
}