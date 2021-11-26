
import { Log } from "app/systems/log"
import { Ability, EffectType, TargetType } from "app/classes/ability"
import { UnitAbility } from "app/classes/abilities/unitAbility"
import { ATTACH } from "lib/w3ts/globals/attachmentPoints"
import { ID } from "lib/w3ts/globals/ids"
import { Players } from "lib/w3ts/globals/index"
import { MODEL } from "lib/w3ts/globals/models"
import { OrderId } from "lib/w3ts/globals/order"
import { Effect, Force, Group, Unit } from "lib/w3ts/index"

export class AbilityInspire extends Ability {

    static group = new Group()

    constructor() {
        super({
            four: ID.Ability.Inspire,
            orderId: OrderId.Channel,
            type: EffectType.Instant,
            target: TargetType.SupportAround,
            permanent: true,
            ult: true,
            addEffect: true,
            addGroup: true,
            loopTick: 1
        })
    }

    public override onEffect = (): void => {
        const eventUnit = Unit.fromEvent()
        const unitAbility = new UnitAbility(eventUnit, this)
        const unitsInspired = math.floor(unitAbility.castRange)
        const spreadNumber = math.floor(unitAbility.heroDuration)
        const duration = unitAbility.normalDuration
        const areaOfEffect = unitAbility.areaOfEffect

        try {
            let pickedUnits = 0

            const g = new Group()
            g.enumUnitsInRangeOfUnit(eventUnit, areaOfEffect, null)
            let u = g.first
            while (u != null && pickedUnits < unitsInspired) {

                if (u.isAlly(eventUnit) &&
                    (u.inForce(Force.Computers) || u.owner == eventUnit.owner) &&
                    !u.isHero &&
                    !u.isIllusion &&
                    !u.isStructure &&
                    !u.invulnerable &&
                    u.moveSpeed > 0 &&
                    !u.hasBuff(ID.Buff.Inspired) &&
                    u.isAlive() &&
                    u.level < 9) {

                    u.addAbility(ID.Ability.InspireSpellBook)
                    u.makeAbilityPermanent(true, ID.Ability.InspireSpellBook)
                    u.makeAbilityPermanent(true, ID.Ability.InspireAttack)
                    u.makeAbilityPermanent(true, ID.Ability.InspireDefence)
                    u.makeAbilityPermanent(true, ID.Ability.InspireHealth)
                    u.lifePercent = 100
                    new Effect(MODEL.Ability.resurrecttarget, u, ATTACH.Point.overhead).destroy()

                    AbilityInspire.group.addUnit(u)
                    u.data.custom.set("inspireCastingPlayer", eventUnit.owner.id)
                    u.data.custom.set("inspireSpreadNumber", spreadNumber)
                    u.data.custom.set("inspireDuration", duration)
                    u.data.custom.set("inspireCounter", 0)

                    pickedUnits += 1
                    if (AbilityInspire.group.size == 1) {
                        this.loopTimer.resume()
                    }
                }

                g.removeUnit(u)
                u = g.first
            }
            g.destroy()

        } catch (error) {
            Log.Error("Loop", error)
        }
    }

    public override onLoop = (): void => {
        if (AbilityInspire.group.size == 0) {
            this.loopTimer.pause()
        } else {
            AbilityInspire.group.for(() => {
                const u = Unit.fromEnum()
                const duration = u.data.custom.get("inspireDuration") as number
                const counter = u.data.custom.get("inspireCounter") as number + 1

                if (counter > duration) {
                    u.makeAbilityPermanent(false, ID.Ability.InspireSpellBook)
                    u.makeAbilityPermanent(false, ID.Ability.InspireAttack)
                    u.makeAbilityPermanent(false, ID.Ability.InspireDefence)
                    u.makeAbilityPermanent(false, ID.Ability.InspireHealth)
                    u.removeAbility(ID.Ability.InspireSpellBook)
                    u.data.custom.delete("inspireCastingPlayer")
                    u.data.custom.delete("inspireSpreadNumber")
                    u.data.custom.delete("inspireDuration")
                    u.data.custom.delete("inspireCounter")
                    u.data.custom.delete("inspireGroup")
                    AbilityInspire.group.removeUnit(u)
                } else {
                    u.data.custom.set("inspireDuration", counter)
                }
            })
        }
    }
}


export class AbilityInspireDeath extends Ability {

    constructor() {
        super({
            four: ID.Ability.InspireSpellBook,
            type: EffectType.Death,
            addEffect: true
        })
    }

    public override onEffect = (): void => {
        const eventUnit = Unit.fromEvent()

        Log.Information("Inspire", eventUnit.name)

        try {

            // Get Event Unit Custom Data
            const spreadNumber = eventUnit.data.custom.get("inspireSpreadNumber") as number
            const duration = eventUnit.data.custom.get("inspireDuration") as number
            const owningPlayer = Players[eventUnit.data.custom.get("inspireCastingPlayer") as number]

            AbilityInspire.group.removeUnit(eventUnit)

            // Clean Event Unit Custom Data
            eventUnit.makeAbilityPermanent(false, ID.Ability.InspireSpellBook)
            eventUnit.makeAbilityPermanent(false, ID.Ability.InspireAttack)
            eventUnit.makeAbilityPermanent(false, ID.Ability.InspireDefence)
            eventUnit.makeAbilityPermanent(false, ID.Ability.InspireHealth)
            eventUnit.removeAbility(ID.Ability.InspireSpellBook)
            eventUnit.data.custom.delete("inspireCastingPlayer")
            eventUnit.data.custom.delete("inspireSpreadNumber")
            eventUnit.data.custom.delete("inspireDuration")
            eventUnit.data.custom.delete("inspireCounter")

            Log.Information("Attributes", spreadNumber, duration, owningPlayer.name)

            // Find Units around dieing unit
            const g = new Group()
            g.enumUnitsInRangeOfUnit(eventUnit, 300, null)

            let pickedUnits = 0
            let u = g.first
            while (u != null && pickedUnits < spreadNumber) {

                if (u.isAlly(eventUnit) &&
                    (u.inForce(Force.Computers) || u.owner == eventUnit.owner) &&
                    !u.isHero &&
                    !u.isIllusion &&
                    !u.isStructure &&
                    !u.invulnerable &&
                    u.moveSpeed > 0 &&
                    !u.hasBuff(ID.Buff.Inspired) &&
                    u.isAlive() &&
                    u.level < 9) {

                    // Inspire Unit
                    u.addAbility(ID.Ability.InspireSpellBook)
                    u.makeAbilityPermanent(true, ID.Ability.InspireSpellBook)
                    u.lifePercent = 100
                    new Effect(MODEL.Ability.resurrecttarget, u, ATTACH.Point.overhead).destroy()

                    AbilityInspire.group.addUnit(u)
                    u.data.custom.set("inspireCastingPlayer", owningPlayer.id)
                    u.data.custom.set("inspireSpreadNumber", spreadNumber)
                    u.data.custom.set("inspireDuration", duration)
                    u.data.custom.set("inspireCounter", 0)

                    pickedUnits += 1
                }

                g.removeUnit(u)
                u = g.first
            }
            g.destroy()

        } catch (error) {
            Log.Information("Inspiration Die", error)
        }

    }


}