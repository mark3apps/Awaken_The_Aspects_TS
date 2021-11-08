import { Ability, EffectType, TargetType } from "classes/ability"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"
import { Unit } from "lib/w3ts/index"

export namespace UNIT_ABILITY {


    export const define = (): void => {

                // Orc Abilities
                new Ability({
                    four: ID.Ability.FelGrunt,
                    type: EffectType.Kill,
                }).onEffect = () => {
                    const eventUnit = Unit.fromHandle(GetKillingUnit())
                    eventUnit.addAbility(FourCC(ID.Ability.FelGruntTransformed))
                }
        
                // Fel Ogre
                new Ability({
                    four: ID.Ability.FelOgre,
                    type: EffectType.Kill,
                }).onEffect = () => {
                    const eventUnit = Unit.fromHandle(GetKillingUnit())
                    eventUnit.addAbility(FourCC(ID.Ability.FelOgreTransformed))
                }
        
                // Fel Warlord
                new Ability({
                    four: ID.Ability.FelWarlord,
                    type: EffectType.Kill,
                }).onEffect = () => {
                    const eventUnit = Unit.fromHandle(GetKillingUnit())
                    if (4 <= eventUnit.data.kills) {
                        eventUnit.addAbility(FourCC(ID.Ability.FelWarlordTransformed))
                    }
                }
        
                // Fel Warlock
                new Ability({
                    four: ID.Ability.FelWarlock,
                    type: EffectType.Kill,
                }).onEffect = () => {
                    const eventUnit = Unit.fromHandle(GetKillingUnit())
                    if (3 <= eventUnit.data.kills) {
                        eventUnit.addAbility(FourCC(ID.Ability.FelWarlockTransformed))
                        eventUnit.manaPercent = 100
                    }
                }
        
                // Footman Charge Ability
                new Ability({
                    four: ID.Ability.FootmanCharge,
                    type: EffectType.Instant,
                    target: TargetType.SupportSelf
                }).onEffect = () => {
                    const eventUnit = Unit.fromEvent()
                    if (eventUnit.manaPercent == 100) {
                        eventUnit.issueImmediateOrder(OrderId.Bearform)
                        eventUnit.lifePercent += 20
                    }
                }
    }
}