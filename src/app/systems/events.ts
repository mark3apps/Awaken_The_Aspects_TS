import { Rectangle, Timer, Trigger, Unit } from "lib/w3ts/index"

export namespace EVENT {

    export const unitDies = new Trigger()
    export const unitDying = new Trigger()
    export const unitOrdered = new Trigger()
    export const unitAttacked = new Trigger()
    export const unitDamaged = new Trigger()
    export const unitCreated = new Trigger()
    export const unitEntersRegion = new Trigger()
    export const unitSummoned = new Trigger()
    export const unitTrained = new Trigger()
    export const unitSpellEffect = new Trigger()
    export const heroLevels = new Trigger()
    export const mapStart = new Trigger()



    export const define = (): void => {
        mapStart.registerTimerEvent(0.5, false)
        unitCreated.registerEnterRect(Rectangle.getPlayableMap())

        unitAttacked.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED)
        unitDamaged.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED)
        unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_ORDER)
        unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER)
        unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER)
        unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER)
        unitSummoned.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON)
        unitTrained.registerAnyUnitEvent(EVENT_PLAYER_UNIT_TRAIN_FINISH)
        unitSpellEffect.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT)
        heroLevels.registerAnyUnitEvent(EVENT_PLAYER_HERO_LEVEL)
        unitDies.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH)
        unitDying.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED)
        unitDying.addCondition(() => { return Unit.fromEvent().life - GetEventDamage() <= 0 })


        // When a Unit dies clear it out
        unitDies.add(() => {
            const eventUnit = Unit.fromKilled()
            const killingUnit = Unit.fromKilling()

            killingUnit.data.kills += 1

            if (!eventUnit.isHero) {
                const timer = new Timer()
                timer.start(30, false, () => {
                    eventUnit.data.custom.clear()
                    Unit.dataMap.delete(eventUnit)
                })

            }
        })
    }


}
