import { Ability } from "app/classes/ability"
import { UnitType } from "app/classes/unitType"
import { Pathing } from "app/systems/pathing"
import { AttachPoint } from "lib/w3ts/globals/attachmentPoints"
import { AbilityFour, Order, Unit, Group, Timer, Effect, AbilityModel } from "lib/w3ts/index"

export class ShadestormAbility extends Ability {

    constructor() {
        super({
            four: AbilityFour.ShiftStorm,
            orderId: Order.Channel,
            type: EffectType.Instant,
            target: TargetType.Specific,
            permanent: true,
            ult: true,
            addEffect: true
        })
    }

    public override onEffect = (): void => {
        const eventUnit = Unit.fromEvent()
        const ability = this.getUnitAbility(eventUnit)

        const aoe = ability.areaOfEffect
        
        const g = new Group()

        g.enumUnitsInRange(eventUnit, aoe, () => {
            const u = Unit.fromFilter()
            return u.isIllusion && u.owner == eventUnit.owner
        })

        // Reset the Ability if no Shades are within the Area of Effect
        if (g.size == 0) {

            const reset = new Timer()
            reset.start(0.02, false, () => {
                ability.resetCooldown()
                eventUnit.mana += ability.manaCost
                reset.destroy()
            })

            // Cast the Spell!!!
        } else {
            
            new Effect(AbilityModel.howlCaster, eventUnit, AttachPoint.origin).destroy()

            g.firstLoop((u) => {
                const shade = u.replace(UnitType.DummyShiftstorm)
                shade.addAbility(Ability.shadeStormDummy)
                
                const shadeAbility = shade.getUnitAbility(Ability.shadeStormDummy)
                shadeAbility.level = ability.level
                shadeAbility.castImmediate()
                Pathing.newOrders(shade)

                const duration = shadeAbility.normalDuration
                const killTimer = new Timer()
                killTimer.start(duration, false, () => {
                    new Effect(AbilityModel.mirrorImageDeathCaster,shade.position).destroy()
                    shade.destroy()
                })

            })
            g.destroy()

        }
    }
}