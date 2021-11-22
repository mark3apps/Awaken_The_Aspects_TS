import { EVENT } from "app/systems/events"
import { Ability, EffectType, TargetType } from "classes/ability"
import { UnitAbility } from "classes/unitAbility"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"
import { Group, Unit } from "lib/w3ts/index"

export namespace NORMAL_ABILITY {

    export const define = (): void => {

        // Orc Abilities
        new Ability({
            four: ID.Ability.FelGrunt,
            type: EffectType.Kill,
            addEffect: true
        }).onEffect = () => {
            const eventUnit = Unit.fromKilling()
            eventUnit.addAbility(FourCC(ID.Ability.FelGruntTransformed))
        }

        // Fel Ogre
        new Ability({
            four: ID.Ability.FelOgre,
            type: EffectType.Kill,
            addEffect: true
        }).onEffect = () => {
            const eventUnit = Unit.fromKilling()
            eventUnit.addAbility(FourCC(ID.Ability.FelOgreTransformed))
        }

        // Fel Warlord
        new Ability({
            four: ID.Ability.FelWarlord,
            type: EffectType.Kill,
            addEffect: true
        }).onEffect = () => {
            const eventUnit = Unit.fromKilling()
            if (4 <= eventUnit.data.kills) {
                eventUnit.addAbility(FourCC(ID.Ability.FelWarlordTransformed))
            }
        }

        // Fel Warlock
        new Ability({
            four: ID.Ability.FelWarlock,
            type: EffectType.Kill,
            addEffect: true
        }).onEffect = () => {
            const eventUnit = Unit.fromKilling()
            if (3 <= eventUnit.data.kills) {
                eventUnit.addAbility(FourCC(ID.Ability.FelWarlockTransformed))
                eventUnit.manaPercent = 100
            }
        }

        // Footman Charge Ability
        new Ability({
            four: ID.Ability.FootmanCharge,
            orderId: OrderId.Bearform,
            type: EffectType.Instant,
            target: TargetType.SupportSelf,
            addEffect: true
        }).onEffect = () => {
            const eventUnit = Unit.fromEvent()
            if (eventUnit.manaPercent == 100) {
                eventUnit.issueImmediateOrder(OrderId.Bearform)
                eventUnit.lifePercent += 20
            }
        }

        const manaRepository = new Ability({
            four: ID.Ability.ManaRepository,
            unitType: [ID.Unit.ArcaneManaRepository],
            type: EffectType.UnitTypeAttacking,
            target: TargetType.SupportSingle,
            orderId: OrderId.Recharge,
            addEffect: true
        })

        manaRepository.onEffect = () => {
            const eventUnit = Unit.fromAttacking()
            const unitAbility = new UnitAbility(eventUnit, manaRepository)

            const g = new Group()
            g.enumUnitsInRangeOfUnit(eventUnit, 1300, null)

            g.firstLoop((u) => {

                if (u.isStructure &&
                    u.typeId != eventUnit.typeId &&
                    u.isAlly(eventUnit) &&
                    u.isAlive() &&
                    u.manaPercent < 50 &&
                    unitAbility.cooldownRemaining == 0 &&
                    eventUnit.mana > 200) {

                    unitAbility.castTarget(u)
                }
            })
            g.destroy()
        }

        const manaShieldTower = new Ability({
            four: ID.Ability.ManaShieldTower,
            unitType: [ID.Unit.ArcaneFlameTower, ID.Unit.ArcaneManaTower, ID.Unit.ArcaneSorcerersTower],
            orderId: OrderId.Manashieldon,
            buffFour: ID.Buff.ManaShield,
            type: EffectType.UnitTypeAttacking,
            target: TargetType.SupportSelf,
            addEffect: true
        })

        manaShieldTower.onEffect = (): void => {
            const eventUnit = Unit.fromAttacking()
            const unitAbility = new UnitAbility(eventUnit, manaShieldTower)

            if (unitAbility.isCastable() &&
                !unitAbility.hasBuff()) {

                unitAbility.castImmediate()
            }
        }

        const manaShardsTower = new Ability({
            four: ID.Ability.ManaShardsTower,
            orderId: OrderId.Clusterrockets,
            unitType: [ID.Unit.ArcaneSorcerersTower],
            type: EffectType.UnitTypeAttacking,
            target: TargetType.DamageArea,
            addEffect: true
        })

        manaShardsTower.onEffect = (): void => {
            const eventUnit = Unit.fromAttacking()
            const attackedUnit = Unit.fromEvent()
            const unitAbility = new UnitAbility(eventUnit, manaShardsTower)

            if (unitAbility.isCastable() &&
                attackedUnit.isGround) {
                unitAbility.cast(attackedUnit.coordinate)
            }
        }

        const chainLightningTower = new Ability({
            four: ID.Ability.ChainLightningTower,
            orderId: OrderId.Chainlightning,
            unitType: [ID.Unit.ArcaneSorcerersTower],
            type: EffectType.UnitTypeAttacking,
            target: TargetType.DamageSingle,
            addEffect: true
        })

        chainLightningTower.onEffect = (): void => {
            const eventUnit = Unit.fromAttacking()
            const attackedUnit = Unit.fromAttacked()
            const unitAbility = new UnitAbility(eventUnit, chainLightningTower)

            if (unitAbility.isCastable() &&
                attackedUnit.isGround) {
                unitAbility.castTarget(attackedUnit)
            }
        }

        const coneOfFireTower = new Ability({
            four: ID.Ability.ConeOfFireTower,
            orderId: OrderId.Breathoffrost,
            unitType: [ID.Unit.ArcaneFlameTower],
            type: EffectType.UnitTypeAttacking,
            target: TargetType.DamageAreaTarget,
            addEffect: true
        })

        coneOfFireTower.onEffect = (): void => {
            const eventUnit = Unit.fromAttacking()
            const attackedUnit = Unit.fromAttacked()
            const unitAbility = new UnitAbility(eventUnit, coneOfFireTower)

            if (unitAbility.isCastable() &&
                attackedUnit.isGround) {
                unitAbility.cast(attackedUnit.coordinate)
            }
        }


        const aspectOfDeathInfect = new Ability({
            four: ID.Ability.InfectAspect,
            orderId: OrderId.Parasite,
            buffFour: ID.Buff.Infected,
            unitType: [ID.Unit.AspectOfDeath],
            type: EffectType.UnitTypeAttacking,
            target: TargetType.CrippleAround,
            addEffect: true
        })

        aspectOfDeathInfect.onEffect = (): void => {
            const eventUnit = Unit.fromAttacking()
            const g = new Group()

            const unitAbility = new UnitAbility(eventUnit, aspectOfDeathInfect)
            const unitCount = math.floor(unitAbility.normalDuration)

            g.enumUnitsInRangeOfUnit(eventUnit, 400, null)

            g.firstLoopCondition((u) => {
                return (u.isAlive() &&
                    u.isEnemy(eventUnit) &&
                    !u.isHero &&
                    !u.isStructure &&
                    !u.isIllusion &&
                    !u.isMagicImmune &&
                    !u.hasBuff(ID.Buff.Infected))

            }, (u) => {
                const dummy = new Unit(eventUnit.owner, ID.Unit.Dummy, eventUnit.x, eventUnit.y, eventUnit.facing)
                dummy.addAbility(ID.Ability.InfectAspectDummy)
                dummy.issueTargetOrder(OrderId.Parasite, u)
                dummy.applyTimedLife(ID.Buff.TimedLifeGeneric, 2)

            },
                unitCount)
            g.destroy()

        }

        // Turn off Elder Ent Movement Pathing
        EVENT.unitCreated.add(() => {
            const eventUnit = Unit.fromEvent()
            if (eventUnit.typeFour == ID.Unit.AncientOfWarCreep) {
                eventUnit.setPathing(false)
            }
        })
    }
}