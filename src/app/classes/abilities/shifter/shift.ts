import { Ability, EffectType, TargetType } from "app/classes/ability"
import { UnitType } from "app/classes/unitType"
import { ID } from "lib/w3ts/globals/ids"
import { MODEL } from "lib/w3ts/globals/models"
import { OrderId } from "lib/w3ts/globals/order"
import { Effect, Timer, Unit } from "lib/w3ts/index"

export class ShiftAbility extends Ability {

    constructor() {
        super({
            four: ID.Ability.Shift,
            orderId: OrderId.Berserk,
            type: EffectType.Instant,
            target: TargetType.SupportSelf,
            permanent: true,
            starting: true,
            addEffect: true
        })
    }    

    public override onEffect = (): void => {
        const eventUnit = Unit.fromEvent()
        const ability = this.getUnitAbility(eventUnit)

        // Get Unit Constants
        const facing = eventUnit.facing
        const startPostion = eventUnit.position
        

        // Get Ability Constants
        const distance = ability.normalDuration
        const speed = ability.heroDuration
        const tick = 0.01
        
        const tickDistance = distance / (speed / tick) 
        

        // Add Start Abilitys
        eventUnit.addAbility(ID.Ability.Ghost)
        eventUnit.setPathing(false)

        // SFX
        const startEffect = new Effect(MODEL.Ability.feralspirittarget, eventUnit.x, eventUnit.y)
        startEffect.scale = 2
        startEffect.z = 10
        startEffect.destroy()

        // Cast Illusion on Hero
        const dummy = new Unit(eventUnit.owner, UnitType.Dummy, eventUnit.x, eventUnit.y, 0)
        dummy.addAbility(Ability.shift1Dummy)
        dummy.applyTimedLifeGeneric(1)

        const shiftDummyAbil = dummy.getUnitAbility(Ability.shift1Dummy)
        shiftDummyAbil.castTarget(eventUnit)


        const loop = new Timer()

        loop.start(tick, true, () => {
            const pos = eventUnit.polarOffset(tickDistance, facing)
            
            if (pos.isTerrianPathable() && (eventUnit.distanceTo(startPostion) < distance)) {
                eventUnit.position = pos
            } else {
                eventUnit.removeAbility(ID.Ability.Ghost)
                eventUnit.setPathing(true)
                loop.destroy()
            }
        })

    }
}