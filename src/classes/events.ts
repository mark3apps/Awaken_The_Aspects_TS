import { Rectangle, Timer, Trigger, Unit } from "lib/w3ts/index"

export class Event {

    static unitDies = new Trigger()
    static unitDying = new Trigger()
    static unitOrdered = new Trigger()
    static unitAttacked = new Trigger()
    static unitDamaged = new Trigger()
    static unitCreated = new Trigger()
    static unitEntersRegion = new Trigger()
    static unitSummoned = new Trigger()
    static unitTrained = new Trigger()
    static unitSpellEffect = new Trigger()
    static heroLevels = new Trigger()
    static mapStart = new Trigger()



    static define = (): void => {
        Event.mapStart.registerTimerEvent(0.5, false)
        Event.unitCreated.registerEnterRect(Rectangle.getPlayableMap())

        Event.unitAttacked.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED)
        Event.unitDamaged.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED)
        Event.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_ORDER)
        Event.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER)
        Event.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER)
        Event.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER)
        Event.unitSummoned.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON)
        Event.unitTrained.registerAnyUnitEvent(EVENT_PLAYER_UNIT_TRAIN_FINISH)
        Event.unitSpellEffect.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT)
        Event.heroLevels.registerAnyUnitEvent(EVENT_PLAYER_HERO_LEVEL)
        Event.unitDies.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH)
        Event.unitDying.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED)
        Event.unitDying.addCondition(() => { return Unit.fromEvent().life - GetEventDamage() <= 0 })


        // When a Unit dies clear it out
        Event.unitDies.add(() => {
            const eventUnit = Unit.fromKilled()
            const killingUnit = Unit.fromKilling()

            killingUnit.kills += 1

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
