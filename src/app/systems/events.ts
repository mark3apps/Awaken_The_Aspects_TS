import { Trigger } from "lib/w3ts/index"



export let unitDies: Trigger
export let unitOrdered: Trigger
export let unitAttacked: Trigger
export let unitEntersRegion: Trigger
export let unitSummoned: Trigger


export function define(): void {

    unitDies = new Trigger()
    unitDies.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH)

    unitAttacked = new Trigger()
    unitAttacked.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED)

    unitOrdered = new Trigger()
    unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_ORDER)
    unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER)
    unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER)
    unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER)

    unitEntersRegion = new Trigger()

    unitSummoned = new Trigger()
    unitSummoned.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON)
}

