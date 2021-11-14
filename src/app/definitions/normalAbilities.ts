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
            const eventUnit = Unit.fromKillingUnit()
            eventUnit.addAbility(FourCC(ID.Ability.FelGruntTransformed))
        }

        // Fel Ogre
        new Ability({
            four: ID.Ability.FelOgre,
            type: EffectType.Kill,
            addEffect: true
        }).onEffect = () => {
            const eventUnit = Unit.fromKillingUnit()
            eventUnit.addAbility(FourCC(ID.Ability.FelOgreTransformed))
        }

        // Fel Warlord
        new Ability({
            four: ID.Ability.FelWarlord,
            type: EffectType.Kill,
            addEffect: true
        }).onEffect = () => {
            const eventUnit = Unit.fromKillingUnit()
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
            const eventUnit = Unit.fromKillingUnit()
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
            type: EffectType.Attacking,
            target: TargetType.SupportSingle,
            orderId: OrderId.Recharge,
            addEffect: true
        })

        manaRepository.onEffect = () => {
            const eventUnit = Unit.fromAttackingUnit()
            const unitAbility = new UnitAbility(eventUnit, manaRepository)

            const g = new Group()
            g.enumUnitsInRangeOfUnit(eventUnit, 1300, null)

            g.firstLoop((u) => {

                if (u.isStructure &&
                    u.isAlly(eventUnit) &&
                    u.isAlive() &&
                    u.manaPercent < 50 &&
                    unitAbility.cooldownRemaining == 0 &&
                    eventUnit.mana > 200) {

                    unitAbility.castTargetAbility(u)
                }
            })
            g.destroy()
        }

        const manaShieldTower = new Ability({
            four: ID.Ability.ManaShieldTower,
            orderId: OrderId.Manashieldon,
            buffFour: ID.Buff.ManaShield,
            type: EffectType.Attacking,
            target: TargetType.SupportSelf,
            addEffect: true
        })

        manaShieldTower.onEffect = (): void => {
            const eventUnit = Unit.fromAttackingUnit()
            const unitAbility = new UnitAbility(eventUnit, manaShieldTower)

            if (unitAbility.isCastable() &&
                !unitAbility.hasBuff()) {

                unitAbility.castImmediateAbility()
            }
        }

        const manaShardsTower = new Ability({
            four: ID.Ability.ManaShardsTower,
            orderId: OrderId.Clusterrockets,
            type: EffectType.Attacking,
            target: TargetType.DamageArea,
            addEffect: true
        })

        manaShardsTower.onEffect = (): void => {
            const eventUnit = Unit.fromAttackingUnit()
            const attackedUnit = Unit.fromEvent()
            const unitAbility = new UnitAbility(eventUnit, manaShardsTower)

            if (unitAbility.isCastable() &&
                attackedUnit.isGround) {
                    unitAbility.castAbility(attackedUnit.coordinate)
                }
        }

        const chainLightningTower = new Ability({
            four: ID.Ability.ChainLightningTower,
            orderId: OrderId.Chainlightning,
            type: EffectType.Attacking,
            target: TargetType.DamageSingle,
            addEffect: true
        })

        chainLightningTower.onEffect = (): void => {
            const eventUnit = Unit.fromAttackingUnit()
            const attackedUnit = Unit.fromEvent()
            const unitAbility = new UnitAbility(eventUnit, chainLightningTower)

            if (unitAbility.isCastable() &&
                attackedUnit.isGround) {
                    unitAbility.castTargetAbility(attackedUnit)
                }
        }

        const coneOfFireTower = new Ability({
            four: ID.Ability.ConeOfFireTower,
            orderId: OrderId.Breathoffrost,
            type: EffectType.Attacking,
            target: TargetType.DamageAreaTarget,
            addEffect: true
        })

        coneOfFireTower.onEffect = (): void => {
            const eventUnit = Unit.fromAttackingUnit()
            const attackedUnit = Unit.fromEvent()
            const unitAbility = new UnitAbility(eventUnit, coneOfFireTower)

            if (unitAbility.isCastable() &&
                attackedUnit.isGround) {
                    unitAbility.castAbility(attackedUnit.coordinate)
                }
        }
    }
}