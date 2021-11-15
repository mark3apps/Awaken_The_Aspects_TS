import { Log } from "app/systems/log"
import { Ability, EffectType, TargetType } from "classes/ability"
import { UnitAbility } from "classes/unitAbility"
import { ID } from "lib/w3ts/globals/ids"
import { MODEL } from "lib/w3ts/globals/models"
import { OrderId } from "lib/w3ts/globals/order"
import { Effect, Group, Unit } from "lib/w3ts/index"

export class AbilityManaStorm extends Ability {

    constructor() {

        super({
            four: ID.Ability.ManaStorm,
            type: EffectType.Instant,
            orderId: OrderId.Starfall,
            target: TargetType.DamageAround,
            permanent: true,
            ult: true,
            addEffect: true
        })
    }

    public override onEffect = (): void => {
        try {


            const eventUnit = Unit.fromEvent()
            const unitAbility = new UnitAbility(eventUnit, this)

            // Ability Defined Values
            const areaOfEffect = unitAbility.areaOfEffect
            const duration = unitAbility.getLevelField(ABILITY_RLF_FOLLOW_THROUGH_TIME) as number
            const bolts = unitAbility.castRange
            const manaCostPerBolt = unitAbility.normalDuration
            const damage = unitAbility.heroDuration

            // Static Values
            const tick = 0.15
            const dummyId = ID.Unit.DummyManaStorm

            // Get the total Ticks
            const durationTick = duration / tick

            // Set up Visuals
            const sfxHero = new Effect(MODEL.Custom.manaStorm, eventUnit.x, eventUnit.y)
            sfxHero.scale = 0.75

            // Temp Vars
            let pickedAmount: number

            for (let i = 0; i < durationTick; i++) {
                //Log.Information("Working")

                const g = new Group()
                g.enumUnitsInRangeOfUnit(eventUnit, areaOfEffect, () => {
                    const u = Unit.fromFilter()
                    return u.isEnemy(eventUnit) &&
                        u.isAlive() &&
                        !u.isMagicImmune &&
                        !u.isStructure &&
                        u.moveSpeed != 0
                })

                if (g.size > 0) {
                    
                    g.size < bolts ? pickedAmount = g.size : pickedAmount = bolts

                    // Pick the amount of Units and Attack
                    for (let i = 0; i < pickedAmount; i++) {

                        const u = g.getRandomUnit()
                        g.removeUnit(u)

                        const dummy = new Unit(eventUnit.owner, dummyId, eventUnit.x, eventUnit.y, eventUnit.angleBetweenUnit(u))
                        dummy.weapon1Base = damage - 1
                        dummy.issueTargetOrder(OrderId.Attack, u)
                        dummy.applyTimedLife(ID.Buff.TimedLifeGeneric, 1.5)
                        dummy.setAbilityLevel(ID.Ability.ManaStormFeedback, unitAbility.level)
                        eventUnit.mana -= manaCostPerBolt
                    }
                }
                g.destroy()

                // Stop casting if unit is no longer channelling
                if (!unitAbility.isCasting()) {
                    sfxHero.destroy()
                    break
                }

                PolledWait(tick)
            }
        } catch (error) {
            Log.Error("Mana Storm", error)
        }
    }
}