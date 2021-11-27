
import { Log } from "app/systems/log"
import { Pathing } from "app/systems/pathing"
import { Ability, EffectType, TargetType } from "app/classes/ability"
import { ATTACH } from "lib/w3ts/globals/attachmentPoints"
import { ID } from "lib/w3ts/globals/ids"
import { MODEL } from "lib/w3ts/globals/models"
import { OrderId } from "lib/w3ts/globals/order"
import { Effect, Force, Group, Unit } from "lib/w3ts/index"

export class BolsterAbility extends Ability {

    constructor() {
        super({
            four: ID.Ability.Bolster,
            orderId: OrderId.Tranquility,
            type: EffectType.Instant,
            target: TargetType.SupportAround,
            permanent: true,
            addEffect: true
        })
    }

    public override onEffect = (): void => {
        
        try {
            const eventUnit = Unit.fromEvent()
            const ability = this.getUnitAbility(eventUnit)

            const maxUnits = ability.normalDuration
            const maxCombinedLevel = ability.heroDuration
            const unitDuration = ability.castRange
            const areaOfEffect = ability.areaOfEffect

            const unitTypes: number[] = []

            const g = new Group()
            g.enumUnitsInRange(eventUnit, areaOfEffect, null)

            g.firstLoop((u) => {

                if (u.isAlly(eventUnit) &&
                    (u.inForce(Force.Computers) || u.owner == eventUnit.owner) &&
                    !u.isHero &&
                    !u.isIllusion &&
                    !u.isStructure &&
                    !u.invulnerable &&
                    u.moveSpeed > 0 &&
                    u.isAlive() &&
                    u.level < 9 &&
                    unitTypes.indexOf(u.typeId) == -1) {
                    unitTypes.push(u.typeId)
                }
            })
            g.destroy()

            let currentSummonLevel = 0
            let currentSummonAmount = 0
            while (currentSummonAmount < maxUnits && currentSummonLevel < maxCombinedLevel) {
                const coor = eventUnit.polarProjection(math.random(80, areaOfEffect), math.random(0, 359))
                const u = new Unit(eventUnit.owner, unitTypes[GetRandomInt(0, unitTypes.length - 1)], coor.x, coor.y, eventUnit.facing)
                new Effect(MODEL.Ability.charmTarget, u, ATTACH.Point.overhead).destroy()
                u.applyTimedLife(ID.Buff.TimedLifeGeneric, unitDuration)

                Pathing.newOrders(u)
                currentSummonLevel += u.level
                currentSummonAmount += 1
            }
        } catch (error) {
            Log.Error("Bolster", error)
        }


    }
}