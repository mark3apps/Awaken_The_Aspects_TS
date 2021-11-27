
import { Ability, EffectType, TargetType } from "app/classes/ability"
import { ID } from "lib/w3ts/globals/ids"
import { Players } from "lib/w3ts/globals/index"
import { OrderId } from "lib/w3ts/globals/order"
import { Force, Group, Timer, Unit } from "lib/w3ts/index"

        
        export class AttackAbility extends Ability {
        
            constructor() {
                super({
                    four: ID.Ability.TactitionAttack,
                    orderId: OrderId.Fingerofdeath,
                    type: EffectType.Instant,
                    target: TargetType.Specific,
                    permanent: true,
                    starting: true,
                    addEffect: true
                })
            }

        // Attack

        public override onEffect = (): void => {

            const eventUnit = Unit.fromEvent()
            const targetUnit = Unit.fromSpellTarget()
            const ability = this.getUnitAbility(eventUnit)
            const g = new Group()
            const pickedUnits = new Group()
            const endTimer = new Timer()

            // Get Variable Info
            const unitCount = math.floor(ability.heroDuration)
            const aoe = ability.areaOfEffect
            const level = ability.level
            const duration = ability.normalDuration


            g.enumUnitsInRange(eventUnit, aoe, null)

            let unitsPicked = 0

            let u = g.first
            while (u != null && unitsPicked < unitCount) {

                if (u.isAlive() &&
                    (u.inForce(Force.Computers) || u.owner == eventUnit.owner) &&
                    u.isAlly(eventUnit) &&
                    !u.isHero &&
                    !u.isIllusion &&
                    !u.isStructure &&
                    u.level <= 9 &&
                    u.moveSpeed > 0) {

                    pickedUnits.addUnit(u)

                    u.data.custom.set("attackOriginalOwner", u.owner.id)
                    u.data.custom.set("attackOrigDestX", u.data.destX)
                    u.data.custom.set("attackOrigDestY", u.data.destY)

                    u.addAbility(ID.Ability.AttackSpellBook)
                    u.setAbilityLevel(ID.Ability.AttackDamage, level)
                    u.setAbilityLevel(ID.Ability.AttackFocus, level)
                    u.setAbilityLevel(ID.Ability.AttackRage, level)
                    u.setAbilityLevel(ID.Ability.AttackLoyalty, level)
                    u.setOwner(eventUnit.owner, false)
                    u.issueTargetOrder(OrderId.Attack, targetUnit)
                    unitsPicked += 1
                }

                g.removeUnit(u)
                u = g.first
            }
            g.destroy()

            endTimer.start(duration, false, () => {

                pickedUnits.for(() => {
                    const u = Unit.fromEnum()

                    u.removeAbility(ID.Ability.AttackSpellBook)

                    u.setOwner(Players[u.data.custom.get("attackOriginalOwner") as number], false)
                    const x = u.data.custom.get("attackOrigDestX") as number
                    const y = u.data.custom.get("attackOrigDestY") as number
                    u.issueOrderAt(OrderId.Attack, x, y)

                    // Clean up Custom Data
                    u.data.custom.delete("attackOriginalOwner")
                    u.data.custom.delete("attackOrigDestX")
                    u.data.custom.delete("attackOrigDestY")
                })

                // Clean Up Handles
                pickedUnits.destroy()
                endTimer.destroy()
            })
        }
    }