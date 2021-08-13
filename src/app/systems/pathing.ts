import { FORCE } from "app/definitions/forces"
import { LOC } from "app/definitions/locs"
import { REGION } from "app/definitions/regions"
import { UNIT_TYPE } from "app/definitions/unitTypes"
import { Loc } from "classes/loc"
import { Coordinate } from "lib/resources/coordinate"
import { OrderId } from "lib/w3ts/globals/order"
import { Group, Rectangle, Region, Timer, Unit } from "lib/w3ts/index"
import { EVENT } from "./events"


export namespace PATHING {

    let SpawnedTypes: number[]
    let OrderIdIgnore: OrderId[]
    let OrderIdIgnoreWithDelay: OrderId[]

    export function define(): void {


        SpawnedTypes = [
            UNIT_TYPE.Arbalist.id,
            UNIT_TYPE.Assassin.id,
            UNIT_TYPE.Automation.id,
            UNIT_TYPE.Bandit.id,
            UNIT_TYPE.BanditLord.id,
            UNIT_TYPE.BanditSpearman.id,
            UNIT_TYPE.BattleGolem.id,
            UNIT_TYPE.BloodElfArcher.id,
            UNIT_TYPE.BloodElfBreaker.id,
            UNIT_TYPE.BloodElfMage.id,
            UNIT_TYPE.Captain1.id,
            UNIT_TYPE.Captain2.id,
            UNIT_TYPE.Catapult.id,
            UNIT_TYPE.Clockwerk.id,
            UNIT_TYPE.Commander.id,
            UNIT_TYPE.DraeneiDarkslayer.id,
            UNIT_TYPE.DraeneiDemolisher.id,
            UNIT_TYPE.DraeneiGuardian.id,
            UNIT_TYPE.DraeneiSeer.id,
            UNIT_TYPE.DraeneiVindicator.id,
            UNIT_TYPE.DragonHawk.id,
            UNIT_TYPE.DragonTurtle.id,
            UNIT_TYPE.DruidOfTheClaw.id,
            UNIT_TYPE.Dryad.id,
            UNIT_TYPE.DwarfAxethrower.id,
            UNIT_TYPE.DwarfClansman.id,
            UNIT_TYPE.DwarfElite.id,
            UNIT_TYPE.Enforcer.id,
            UNIT_TYPE.EredarWarlock.id,
            UNIT_TYPE.Footman1.id,
            UNIT_TYPE.Footman2.id,
            UNIT_TYPE.Ghoul.id,
            UNIT_TYPE.GiantSkeleton.id,
            UNIT_TYPE.Grunt.id,
            UNIT_TYPE.GryphonRider.id,
            UNIT_TYPE.Gyrocopter.id,
            UNIT_TYPE.InfernalContraption.id,
            UNIT_TYPE.InfernalJuggernaut.id,
            UNIT_TYPE.InfernalMachine.id,
            UNIT_TYPE.HighElfApprenticeSwordsman.id,
            UNIT_TYPE.HighElfArcher.id,
            UNIT_TYPE.HighElfGuardian.id,
            UNIT_TYPE.HighElfHealer.id,
            UNIT_TYPE.HighElfKnight.id,
            UNIT_TYPE.HighElfSwordsman.id,
            UNIT_TYPE.HumanBattleship.id,
            UNIT_TYPE.HumanFrigate.id,
            UNIT_TYPE.IronCaptain.id,
            UNIT_TYPE.IronGuard.id,
            UNIT_TYPE.IronMagi.id,
            UNIT_TYPE.IronMortarTeam.id,
            UNIT_TYPE.IronRifleman.id,
            UNIT_TYPE.Knight.id,
            UNIT_TYPE.MagiDefender.id,
            UNIT_TYPE.Militia1.id,
            UNIT_TYPE.Militia2.id,
            UNIT_TYPE.MountainGiant.id,
            UNIT_TYPE.MurlocCliffRunner.id,
            UNIT_TYPE.MurlocReaver.id,
            UNIT_TYPE.MurlocSnareCaster.id,
            UNIT_TYPE.MurlocTideWarrior.id,
            UNIT_TYPE.NagaMyrmidon.id,
            UNIT_TYPE.NagaSiren.id,
            UNIT_TYPE.NagaRoyalGuard.id,
            UNIT_TYPE.Necromancer.id,
            UNIT_TYPE.NightElfBattleship.id,
            UNIT_TYPE.NightElfFrigate.id,
            UNIT_TYPE.NightElfRanger.id,
            UNIT_TYPE.NightElfEliteRanger.id,
            UNIT_TYPE.NightElfSentry.id,
            UNIT_TYPE.Ogre.id,
            UNIT_TYPE.OrcWarchief.id,
            UNIT_TYPE.Rogue.id,
            UNIT_TYPE.SeigeEngine.id,
            UNIT_TYPE.SeigeEngineDamaged.id,
            UNIT_TYPE.SeigeGolem.id,
            UNIT_TYPE.SkeletonMage.id,
            UNIT_TYPE.SnapDragon.id,
            UNIT_TYPE.Sorceress.id,
            UNIT_TYPE.Summoner.id,
            UNIT_TYPE.SupremeWizard.id,
            UNIT_TYPE.StormSummoner.id,
            UNIT_TYPE.TrollAxethrower.id,
            UNIT_TYPE.WarGolem.id,
            UNIT_TYPE.Warlock.id,
            UNIT_TYPE.WaterElemental1.id,
            UNIT_TYPE.WaterElemental2.id,
            UNIT_TYPE.WaterElemental3.id,
        ]

        OrderIdIgnore = [
            OrderId.Move,
            OrderId.Bearform,
            OrderId.Rejuvination,
            OrderId.Waterelemental,
            OrderId.Fingerofdeath,
            OrderId.Holybolt,
            OrderId.Spiritlink,
            OrderId.Raisedead,
            OrderId.Carrionscarabs,
            OrderId.Breathoffire,
            OrderId.Forkedlightning,
            OrderId.Parasite,
            OrderId.Carrionswarm,
            OrderId.Thunderbolt,
            OrderId.Spiritwolf,
            OrderId.Summongrizzly,
            OrderId.Wateryminion,
            OrderId.Healingwave,
            OrderId.Roar,
            OrderId.Inferno,
            OrderId.Creepthunderbolt,
            OrderId.Cripple,
            OrderId.Recharge,
            OrderId.Replenish,
            OrderId.Summonfactory,
            OrderId.Chainlightning,
            OrderId.Polymorph,
            OrderId.Shockwave,
            OrderId.Dispel,
            OrderId.Innerfire,
            OrderId.Firebolt
        ]

        OrderIdIgnoreWithDelay = [
            OrderId.Rainoffire,
            OrderId.Tranquility,
            OrderId.Stunned
        ]

        // Unit Enters a Loc Forwarding Region
        EVENT.unitEntersRegion.add(() => {
            const eventRegion = Region.fromEvent()
            const eventLoc = Loc.key[eventRegion.id]

            if (eventLoc != null) {
                const eventUnit = Unit.fromEvent()

                if (eventUnit.inForce(eventLoc.forwardArmy.force)) {
                    const dest = eventLoc.forwardLoc.randomCoordinate

                    eventUnit.issueOrderAtCoordinate(OrderId.Attack, dest)


                }
            }
        })

        // Units Ordered
        EVENT.unitOrdered.add(() => {

            const eventOrder = GetIssuedOrderId()
            const eventUnit = Unit.fromEvent()

            if (SpawnedTypes.indexOf(eventUnit.typeId) != -1) {

                const timer = new Timer()

                if (OrderIdIgnore.indexOf(eventOrder) != -1) {

                    timer.start(1, false, () => {
                        eventUnit.issueLastOrder()
                    }).destroy

                } else if (OrderIdIgnoreWithDelay.indexOf(eventOrder) != -1) {

                    timer.start(6, false, () => {
                        eventUnit.issueLastOrder()
                    }).destroy
                }
            }
        })

        // Unit is Summoned
        EVENT.unitSummoned.add(() => {
            const eventUnit = Unit.fromEvent()

            print("Summon: " + eventUnit.name)

            if (eventUnit.inForce(FORCE.Computers)) {
                print("Ordered")
                newOrders(eventUnit)
            }
        })

        // Unit is Trained
        EVENT.unitTrained.add(() => {
            const eventUnit = Unit.fromHandle(GetTrainedUnit())

            print("Summon: " + eventUnit.name)

            if (eventUnit.inForce(FORCE.Computers)) {
                print("Ordered")
                newOrders(eventUnit)
            }
        })

        EVENT.mapStart.add(() => {

            const allUnits = new Group()

            allUnits.enumUnitsInRect(Rectangle.getWorldBounds(), null)

            let unit = allUnits.first
            while (unit != null) {
                if (unit.inForce(FORCE.Computers) && SpawnedTypes.indexOf(unit.typeId) != -1) { newOrders(unit) }

                allUnits.removeUnit(unit)
                unit = allUnits.first
            }
            allUnits.destroy()
        })
    }


    export function newOrders(unit: Unit): void {

        let dest: Coordinate


        if (unit.inRegion(REGION.BigTop)) {

            if (unit.inForce(FORCE.AllianceAll)) {
                dest = LOC.top.federation.randomCoordinate
            } else if (unit.inForce(FORCE.FederationAll)) {
                dest = LOC.top.alliance.randomCoordinate
            }

        } else if (unit.inRegion(REGION.BigMiddle)) {

            if (unit.inForce(FORCE.AllianceAll)) {
                dest = LOC.middle.federation.randomCoordinate
            } else if (unit.inForce(FORCE.FederationAll)) {
                dest = LOC.middle.alliance.randomCoordinate
            }

        } else {

            if (unit.inForce(FORCE.AllianceAll)) {
                dest = LOC.bottom.federation.randomCoordinate
            } else if (unit.inForce(FORCE.FederationAll)) {
                dest = LOC.bottom.alliance.randomCoordinate
            }
        }

        // If 
        if (dest != null) {
            unit.issueOrderAtCoordinate(OrderId.Attack, dest)
        }

    }

}