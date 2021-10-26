import { Rectangle, Trigger, Unit } from "lib/w3ts/index"

export namespace EVENT {

    export const unitDies = new Trigger()
    export const unitOrdered = new Trigger()
    export const unitAttacked = new Trigger()
    export const unitCreated = new Trigger()
    export const unitEntersRegion = new Trigger()
    export const unitSummoned = new Trigger()
    export const unitTrained = new Trigger()
    export const unitSpellEffect = new Trigger()
    export const mapStart = new Trigger()


    export function define(): void {
        mapStart.registerTimerEvent(1, false)
        unitCreated.registerEnterRect(Rectangle.getPlayableMap())
        unitDies.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH)
        unitAttacked.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED)
        unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_ORDER)
        unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER)
        unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER)
        unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER)
        unitSummoned.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON)
        unitTrained.registerAnyUnitEvent(EVENT_PLAYER_UNIT_TRAIN_FINISH)
        unitSpellEffect.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT)


        // When a Unit dies clear it out
        unitDies.add(() => {
            const eventUnit = Unit.fromEvent()
            const killingUnit = Unit.fromHandle(GetKillingUnit())

            if (!eventUnit.isHero) {
                Unit.removeData(eventUnit)
            }

            killingUnit.data.kills += 1
        })
    }


}
