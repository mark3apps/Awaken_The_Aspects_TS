import { Ability, EffectType, TargetType } from "app/classes/ability"
import { GetSpellTargetCoor } from "app/classes/coordinate"
import { Log } from "app/systems/log"
import { ID } from "lib/w3ts/globals/ids"
import { MODEL } from "lib/w3ts/globals/models"
import { OrderId } from "lib/w3ts/globals/order"
import { Effect, Group, Timer, Unit } from "lib/w3ts/index"
import { UnitAbility } from "../unitAbility"

export class SwitchAbility extends Ability {

    constructor() {
        super({
            four: ID.Ability.MirrorSwitch,
            orderId: OrderId.Reveal,
            type: EffectType.Instant,
            target: TargetType.Specific,
            permanent: true,
            starting: true,
            addEffect: true
        })
    }

    public override onEffect = (): void => {
        try {


            const eventUnit = Unit.fromEvent()
            const ability = new UnitAbility(eventUnit, this)

            const coor = GetSpellTargetCoor()
            const range = ability.castRange
            const pickRange = ability.heroDuration

            const g = new Group()
            g.enumUnitsInRangeOfCoor(coor, pickRange, () => {
                const filter = Unit.fromFilter()
                return filter.isIllusion && filter.owner == eventUnit.owner
            })

            const targetUnit = g.getClosestUnit(coor)

            if (targetUnit == null || targetUnit.distanceFrom(eventUnit) > range) {
                const delay = new Timer()
                delay.start(0.1, false, () => {
                    eventUnit.mana += ability.manaCost
                    ability.resetCooldown()
                    delay.destroy()
                   
                })
                return
            }



            targetUnit.setPathing(false)
            eventUnit.setPathing(false)

            const targetStart = targetUnit.coordinate
            const eventStart = eventUnit.coordinate

            new Effect(MODEL.Ability.feralspirittarget, targetStart.x, targetStart.y).destroy()
            new Effect(MODEL.Ability.feralspirittarget, eventStart.x, eventStart.y).destroy()

            eventUnit.coordinate = targetStart
            targetUnit.coordinate = eventStart

            targetUnit.setPathing(true)
            eventUnit.setPathing(true)

        } catch (error) {
            Log.Error(error)
        }
    }

}