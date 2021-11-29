import { Ability } from "app/classes/ability"
import { Logger } from "app/classes/log"
import { Position } from "app/classes/position"
import { UnitType } from "app/classes/unitType"
import { AttachPoint } from "lib/w3ts/globals/attachmentPoints"
import { AbilityFour, Order, BuffFour, Unit, Group, Timer, Effect, AbilityModel } from "lib/w3ts/index"


export class AbilityMark extends Ability {

    constructor() {
        super({
            four: AbilityFour.Mark,
            orderId: Order.Clusterrockets,
            buffFour: BuffFour.ManaAddictSoulBind,
            type: EffectType.Instant,
            target: TargetType.ModifyArea,
            permanent: true,
            starting: true,
            addEffect: true,
            addBuffDeath: true
        })
    }

    public override onEffect = (): void => {
        
        Logger.Information("Working")

        try {

            const eventUnit = Unit.fromEvent()
            const unitAbility = this.getUnitAbility(eventUnit)
            const targetPos = Position.fromSpellTarget()

            const areaOfEffect = unitAbility.areaOfEffect
            const manaGiven = unitAbility.heroDuration

            const g = new Group()
            g.enumUnitsInRange(targetPos, areaOfEffect, () => {
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
            Logger.Error("Mark", error)
        }
    }

    public override onBuffDeath = (): void => {

        Logger.Information("Working")
        try {


            const eventUnit = Unit.fromEvent()

            const manaGiven = eventUnit.data.custom.get("markManaGiven") as number
            const caster = eventUnit.data.custom.get("markCaster") as Unit

            const u = new Unit(caster.owner, UnitType.DummyMarkForDeath, eventUnit.position, eventUnit.facing)

            u.issueTargetOrder(Order.Attack, caster)

            const timer = new Timer()

            timer.start(1, true, () => {

                if (u.distanceTo(caster) < 150) {
                    u.kill()
                    caster.mana += manaGiven
                    new Effect(AbilityModel.charmTarget, caster, AttachPoint.chest).destroy()
                    timer.destroy()
                } else {
                    u.issueTargetOrder(Order.Attack, caster)
                }
            })
        } catch (error) {
            Logger.Error("Mark Buff Death", error)
        }
    }
}