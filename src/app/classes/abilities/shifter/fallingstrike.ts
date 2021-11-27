import { Ability, EffectType, TargetType } from "app/classes/ability"
import { Position } from "app/classes/position"
import { Log } from "app/systems/log"
import { ID } from "lib/w3ts/globals/ids"
import { MODEL } from "lib/w3ts/globals/models"
import { OrderId } from "lib/w3ts/globals/order"
import { ANIMATION } from "lib/w3ts/globals/unitAnimations"
import { Effect, Group, Timer, Unit } from "lib/w3ts/index"

export class FallingStrikeAbility extends Ability {

    constructor() {

        super({
            four: ID.Ability.FallingStrike,
            orderId: OrderId.Thunderbolt,
            type: EffectType.Instant,
            target: TargetType.DamageAreaTarget,
            permanent: true,
            starting: true,
            addEffect: true
        })
    }

    public override onEffect = (): void => {
        try {
            const eventUnit = Unit.fromEvent()
            const ability = this.getUnitAbility(eventUnit)


            // Get Attributes
            const startPos = eventUnit.position
            const spellTarget = Position.fromSpellTarget()
            const damage = ability.normalDuration

            const aoe = ability.areaOfEffect
            const speed = 32

            // Calculate so vars
            let distanceTravelled = 0
            const angle = startPos.angleTo(spellTarget)
            const fullDistance = startPos.distanceTo(spellTarget)
            const maximumHeight = fullDistance * 0.5

            if (spellTarget.isTerrianPathable()) {
                eventUnit.setPathing(false)
                eventUnit.invulnerable = true
                eventUnit.addAbility(ID.Ability.StormCrowForm)
                eventUnit.removeAbility(ID.Ability.StormCrowForm)

                // Queue the Proper Animation
                const animTimer = new Timer()
                animTimer.start(0.1, false, () => {
                    eventUnit.setAnimation(ANIMATION.Hellscream.attackSlam)
                })

                // Start the Jump
                const loop = new Timer()
                loop.start(0.02, true, () => {
                    distanceTravelled += speed
                    eventUnit.moveToPolarProjection(speed, angle)
                    eventUnit.flyHeight = eventUnit.getParabolaZ(distanceTravelled, fullDistance, maximumHeight)

                    if (distanceTravelled >= fullDistance) {
                        new Effect(MODEL.Ability.warStompCaster, eventUnit.position).destroy()
                        eventUnit.invulnerable = false
                        eventUnit.setPathing(true)
                        eventUnit.flyHeight = eventUnit.defaultFlyHeight

                        const u = new Unit(eventUnit.owner, ID.Unit.Dummy, eventUnit.x, eventUnit.y, 0)
                        u.addAbility(Ability.fallingStrikeDummy)
                        u.getUnitAbility(Ability.fallingStrikeDummy).castImmediate()
                        u.applyTimedLifeGeneric(1)
                        const g = new Group()
                        g.enumUnitsInRange(spellTarget, aoe, () => {
                            const u = Unit.fromFilter()
                            return u.isAlive() && u.isEnemy(eventUnit) && !u.isMagicImmune && !u.isStructure && u.isGround
                        })

                        g.firstLoop((u) => {
                          eventUnit.damageTarget(u, damage, false, false, ATTACK_TYPE_MAGIC, DAMAGE_TYPE_MAGIC, null)
                        })
                        g.destroy()
                        
                        loop.destroy()
                    }
                })

            } else {
                const reset = new Timer()
                reset.start(0.1, false, () => {
                    eventUnit.mana += ability.manaCost
                    ability.resetCooldown()
                    reset.destroy()
                })
            }
        } catch (error) {
            Log.Error(error)
        }
    }
}
