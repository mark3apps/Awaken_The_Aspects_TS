import { Log } from "app/systems/log"
import { Ability, EffectType, TargetType } from "app/classes/ability"
import { UnitAbility } from "app/classes/abilities/unitAbility"
import { ATTACH } from "lib/w3ts/globals/attachmentPoints"
import { ID } from "lib/w3ts/globals/ids"
import { MODEL } from "lib/w3ts/globals/models"
import { OrderId } from "lib/w3ts/globals/order"
import { Effect, Group, Timer, Unit } from "lib/w3ts/index"

export class AbilityMark extends Ability {

    constructor() {
        super({
            four: ID.Ability.Mark,
            orderId: OrderId.Clusterrockets,
            buffFour: ID.Buff.ManaAddictSoulBind,
            type: EffectType.Instant,
            target: TargetType.ModifyArea,
            permanent: true,
            starting: true,
            addEffect: true,
            addBuffDeath: true
        })
    }

    public override onEffect = (): void => {
        
        Log.Information("Working")

        try {

            const eventUnit = Unit.fromEvent()
            const unitAbility = new UnitAbility(eventUnit, this)
            const targetX = GetSpellTargetX()
            const targetY = GetSpellTargetY()

            const areaOfEffect = unitAbility.areaOfEffect
            const manaGiven = unitAbility.heroDuration

            const g = new Group()
            g.enumUnitsInRange(targetX, targetY, areaOfEffect, () => {
                const u = Unit.fromFilter()

                return u.isAlive() &&
                    !u.isStructure &&
                    !u.isHero &&
                    u.isEnemy(eventUnit) &&
                    !u.isMagicImmune &&
                    u.moveSpeed != 0 &&
                    !u.hasBuff(this.buffId)
            })

            g.firstLoop((u) => {

                u.data.custom.set("markManaGiven", manaGiven)
                u.data.custom.set("markCaster", eventUnit)


            })
            g.destroy()
        } catch (error) {
            Log.Error("Mark", error)
        }
    }

    public override onBuffDeath = (): void => {

        Log.Information("Working")
        try {


            const eventUnit = Unit.fromEvent()

            const manaGiven = eventUnit.data.custom.get("markManaGiven") as number
            const caster = eventUnit.data.custom.get("markCaster") as Unit

            const u = new Unit(caster.owner, ID.Unit.Soul, eventUnit.x, eventUnit.y, eventUnit.facing)

            u.issueTargetOrder(OrderId.Attack, caster)

            const timer = new Timer()

            timer.start(1, true, () => {

                if (u.distanceFrom(caster) < 150) {
                    u.kill()
                    caster.mana += manaGiven
                    new Effect(MODEL.Ability.charmTarget, caster, ATTACH.Point.chest).destroy()
                    timer.destroy()
                } else {
                    u.issueTargetOrder(OrderId.Attack, caster)
                }
            })
        } catch (error) {
            Log.Error("Mark Buff Death", error)
        }
    }
}