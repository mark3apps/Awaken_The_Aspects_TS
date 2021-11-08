import { ATTRIBUTE } from "app/definitions/attributes"
import { Strategy } from "lib/resources/strategy"
import { UNIT_TYPE } from "../../app/definitions/unitTypes"
import { HeroType } from "../herotype"
import { Ability, EffectType, TargetType } from "classes/ability"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"
import { Group, MapPlayer, Timer, Unit } from "lib/w3ts/index"
import { UnitAbility } from "classes/unitAbility"
import { Log } from "app/systems/log"
import { FORCE } from "app/definitions/forces"




export class TacticianHeroType extends HeroType {

    constructor() {
        super(UNIT_TYPE.Tactician, UNIT_TYPE.TacticianAlter, "Tactician")

        this.defineAbilities()
        this.defineAttributes()
        this.defineItems()
        this.defineAI()

    }


    public override defineAttributes(): void {
        this.addHeroAttribute(ATTRIBUTE.strength)
        this.addHeroAttribute(ATTRIBUTE.melee)
        this.addHeroAttribute(ATTRIBUTE.brawler)
    }


    public override defineItems(): void {
        // Empty
    }


    public override defineAI(): void {
        this.lifeFactor = 1
        this.manaFactor = 0.02
        this.lifeHighPercent = 65
        this.lifeLowPercent = 20
        this.lifeLowNumber = 400
        this.highDamageSingle = 17
        this.highDamageAverage = 25
        this.powerBase = 500
        this.powerLevel = 200
        this.unitClumpCheck = true
        this.unitClumpRange = 100
        this.intelRange = 1100
        this.intelCloseRange = 500

        this.traitAgressive = 60
        this.traitDefensive = 30
        this.traitSupport = 60
        this.traitAssassinate = 0

        this.addStrategy(Strategy.Agressive)
        this.addStrategy(Strategy.Neutral)
        this.addStrategy(Strategy.Defensive)
    }


    public override defineAbilities(): void {
        // Iron Defense
        this.addAbility(new Ability({
            four: ID.Ability.IronDefense,
            orderId: OrderId.Roar,
            type: EffectType.Instant,
            target: TargetType.SupportSelf,
            permanent: true,
            starting: true,
        }))

        // Raise Banner
        this.addAbility(new Ability({
            four: ID.Ability.RaiseBanner,
            orderId: OrderId.Healingward,
            type: EffectType.Instant,
            target: TargetType.SupportArea,
            permanent: true,
            starting: true,
        }))

        // Attack
        const attack = new Ability({
            four: ID.Ability.TactitionAttack,
            orderId: OrderId.Fingerofdeath,
            type: EffectType.Instant,
            target: TargetType.Specific,
            permanent: true,
            starting: true,
            addEffect: true
        })
        attack.onEffect = (ability) => {

            const eventUnit = Unit.fromEvent()
            const targetUnit = Unit.fromSpellTarget()
            const unitAbility = new UnitAbility(eventUnit, ability)
            const g = new Group()
            const pickedUnits = new Group()
            const endTimer = new Timer()

            // Get Variable Info
            const unitCount = math.floor(unitAbility.heroDuration)
            const aoe = unitAbility.areaOfEffect
            const level = unitAbility.level
            const duration = unitAbility.normalDuration

            // Log.Information("Target Unit", targetUnit.name)
            // Log.Information("Attack Count", unitCount)
            // Log.Information("AOE", aoe)
            // Log.Information("Level", level)
            // Log.Information("Duration", duration)

            g.enumUnitsInRangeOfUnit(eventUnit, aoe, null)

            let unitsPicked = 0

            let u = g.first
            while (u != null && unitsPicked < unitCount) {

                if (u.isAlive() &&
                    (u.inForce(FORCE.Computers) || u.owner == eventUnit.owner) &&
                    u.isAlly(eventUnit) &&
                    !u.isHero &&
                    !u.isIllusion &&
                    !u.isStructure &&
                    u.level <= 9 &&
                    u.moveSpeed > 0) {

                    pickedUnits.addUnit(u)

                    u.data.custom.set("attackOriginalOwner", u.owner)
                    u.data.custom.set("attackOrigDestX", u.data.destX)
                    u.data.custom.set("attackOrigDestY", u.data.destY)

                    u.addAbility(ID.Ability.AttackSpellBook)
                    u.setAbilityLevel(ID.Ability.AttackDamage, level)
                    u.setAbilityLevel(ID.Ability.AttackFocus, level)
                    u.setAbilityLevel(ID.Ability.AttackRage, level)
                    u.setAbilityLevel(ID.Ability.AttackLoyalty, level)

                    Log.Information("Target Unit", targetUnit.name)
                    u.setOwner(eventUnit.owner, false)
                    u.issueTargetOrder(OrderId.Attack, targetUnit)



                    unitsPicked += 1
                }

                g.removeUnit(u)
                u = g.first
            }
            g.destroy()

            endTimer.start(duration, false, () => {
                Log.Information("Returning", pickedUnits.size)

                pickedUnits.for(() => {
                    const u = Unit.fromEnum()

                    u.removeAbility(ID.Ability.AttackSpellBook)
                    u.setOwner(u.data.custom.get("attackOriginalOwner") as MapPlayer, false)

                    const x = u.data.custom.get("attackOrigDestX") as number
                    const y = u.data.custom.get("attackOrigDestY") as number
                    u.issueOrderAt(OrderId.Attack, x, y)
                    Log.Information("Returning", u.name)
                })
                pickedUnits.destroy()
                endTimer.destroy()
            })
        }
        this.addAbility(attack)


        // Bolster
        this.addAbility(new Ability({
            four: ID.Ability.Bolster,
            orderId: OrderId.Tranquility,
            type: EffectType.Instant,
            target: TargetType.SupportAround,
            permanent: true,
        }))

        // Inspire
        this.addAbility(new Ability({
            four: ID.Ability.Inspire,
            orderId: OrderId.Channel,
            type: EffectType.Instant,
            target: TargetType.SupportAround,
            permanent: true,
            ult: true
        }))
    }
}