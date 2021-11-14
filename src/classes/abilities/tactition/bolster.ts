import { FORCE } from "app/definitions/forces"
import { Log } from "app/systems/log"
import { PATHING } from "app/systems/pathing"
import { Ability, EffectType, TargetType } from "classes/ability"
import { UnitAbility } from "classes/unitAbility"
import { ATTACH } from "lib/w3ts/globals/attachmentPoints"
import { ID } from "lib/w3ts/globals/ids"
import { MODEL } from "lib/w3ts/globals/models"
import { OrderId } from "lib/w3ts/globals/order"
import { Effect, Group, Unit } from "lib/w3ts/index"

export class AbilityBolster extends Ability {

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
        //
        try {
            const eventUnit = Unit.fromEvent()
            const unitAbility = new UnitAbility(eventUnit, this)

            const maxUnits = unitAbility.normalDuration
            const maxCombinedLevel = unitAbility.heroDuration
            const unitDuration = unitAbility.castRange
            const areaOfEffect = unitAbility.areaOfEffect

            const unitTypes: number[] = []

            const g = new Group()
            g.enumUnitsInRangeOfUnit(eventUnit, areaOfEffect, null)

            g.firstLoop((u) => {

                if (u.isAlly(eventUnit) &&
                    (u.inForce(FORCE.Computers) || u.owner == eventUnit.owner) &&
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

            for (let index = 0; index < unitTypes.length; index++) {
                const element = unitTypes[index]
                Log.Information("Unit Types", element)
            }

            let currentSummonLevel = 0
            let currentSummonAmount = 0
            while (currentSummonAmount < maxUnits && currentSummonLevel < maxCombinedLevel) {
                const coor = eventUnit.polarOffset(math.random(80, areaOfEffect), math.random(0, 359))
                const u = new Unit(eventUnit.owner, unitTypes[GetRandomInt(0, unitTypes.length - 1)], coor.x, coor.y, eventUnit.facing)
                new Effect(MODEL.Ability.charmTarget, u, ATTACH.Point.overhead).destroy()
                u.applyTimedLife("BTLF", unitDuration)

                PATHING.newOrders(u)
                currentSummonLevel += u.level
                currentSummonAmount += 1
            }
        } catch (error) {
            Log.Error("Bolster", error)
        }


    }
}