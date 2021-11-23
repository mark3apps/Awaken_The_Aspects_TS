



import { Loc } from "classes/loc"
import { UnitType } from "classes/unitType"
import { Coordinate } from "lib/resources/coordinate"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"
import { Force, Group, Rectangle, Region, Timer, Unit } from "lib/w3ts/index"
import { Event } from "../../classes/events"
import { Log } from "./log"




export class Pathing {

    static define = (): void => {

        const SpawnedTypes = [
            UnitType.Arbalist.id,
            UnitType.Assassin.id,
            UnitType.Bandit.id,
            UnitType.BanditLord.id,
            UnitType.BanditSpearman.id,
            UnitType.BattleGolem.id,
            UnitType.BloodElfArcher.id,
            UnitType.BloodElfBreaker.id,
            UnitType.BloodElfMage.id,
            UnitType.Captain1.id,
            UnitType.Captain2.id,
            UnitType.Catapult.id,
            UnitType.Commander.id,
            UnitType.DraeneiDarkslayer.id,
            UnitType.DraeneiDemolisher.id,
            UnitType.DraeneiGuardian.id,
            UnitType.DraeneiSeer.id,
            UnitType.DraeneiVindicator.id,
            UnitType.DragonHawk.id,
            UnitType.DragonTurtle.id,
            UnitType.DruidOfTheClaw.id,
            UnitType.Dryad.id,
            UnitType.DwarfAxethrower.id,
            UnitType.DwarfClansman.id,
            UnitType.DwarfElite.id,
            UnitType.Enforcer.id,
            UnitType.EredarWarlock.id,
            UnitType.Footman1.id,
            UnitType.Footman2.id,
            UnitType.Ghoul.id,
            UnitType.GiantSkeleton.id,
            UnitType.Grunt.id,
            UnitType.GryphonRider.id,
            UnitType.Gyrocopter.id,
            UnitType.InfernalContraption.id,
            UnitType.InfernalJuggernaut.id,
            UnitType.InfernalMachine.id,
            UnitType.HighElfApprenticeSwordsman.id,
            UnitType.HighElfArcher.id,
            UnitType.HighElfGuardian.id,
            UnitType.HighElfHealer.id,
            UnitType.HighElfKnight.id,
            UnitType.HighElfSwordsman.id,
            UnitType.HumanBattleship.id,
            UnitType.HumanFrigate.id,
            UnitType.IronCaptain.id,
            UnitType.IronGuard.id,
            UnitType.IronMagi.id,
            UnitType.IronMortarTeam.id,
            UnitType.IronRifleman.id,
            UnitType.Knight.id,
            UnitType.MagiDefender.id,
            UnitType.Militia1.id,
            UnitType.Militia2.id,
            UnitType.MountainGiant.id,
            UnitType.MurlocCliffRunner.id,
            UnitType.MurlocReaver.id,
            UnitType.MurlocSnareCaster.id,
            UnitType.MurlocTideWarrior.id,
            UnitType.NagaMyrmidon.id,
            UnitType.NagaSiren.id,
            UnitType.NagaRoyalGuard.id,
            UnitType.Necromancer.id,
            UnitType.NightElfBattleship.id,
            UnitType.NightElfFrigate.id,
            UnitType.NightElfRanger.id,
            UnitType.NightElfEliteRanger.id,
            UnitType.NightElfSentry.id,
            UnitType.NavyMarine.id,
            UnitType.NavyCaptain.id,
            UnitType.Crossbowman.id,
            UnitType.Ogre.id,
            UnitType.OrcWarchief.id,
            UnitType.Rogue.id,
            UnitType.SeigeEngine.id,
            UnitType.SeigeEngineDamaged.id,
            UnitType.SeigeGolem.id,
            UnitType.SkeletonMage.id,
            UnitType.SnapDragon.id,
            UnitType.Sorceress.id,
            UnitType.Summoner.id,
            UnitType.SupremeWizard.id,
            UnitType.StormSummoner.id,
            UnitType.TrollAxethrower.id,
            UnitType.WarGolem.id,
            UnitType.Warlock.id,
            UnitType.WaterElemental1.id,
            UnitType.WaterElemental2.id,
            UnitType.WaterElemental3.id,
            UnitType.AspectOfTheTides.id,
            UnitType.AspectOfDeath.id,
            UnitType.AspectOfTheEarth.id,
            UnitType.AspectOfTheForest.id,
            UnitType.AspectOfTheStorm.id
        ]
        
        const OrderIdIgnore = [
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
            OrderId.Firebolt,
            OrderId.Clusterrockets,
            OrderId.Creepthunderclap
        ]
        
        const BuffIdIgnore = [
            ID.Buff.AttackUnit
        ]
        
        const SummonReplace = [
            UnitType.NavyCaptain.id,
            UnitType.NavyFootman.id,
            UnitType.NavyMarine.id,
            UnitType.Crossbowman.id
        ]
        
        const OrderIdIgnoreWithDelay = [
            OrderId.Rainoffire,
            OrderId.Tranquility,
            OrderId.Stunned
        ]


        // Unit Enters a Loc Forwarding Region
        Event.unitEntersRegion.add(() => {
            const eventRegion = Region.fromEvent()
            const eventLoc = Loc.key[eventRegion.id]

            if (eventLoc != null) {
                const eventUnit = Unit.fromEvent()

                for (let i = 0; i < eventLoc.forward.length; i++) {
                    const element = eventLoc.forward[i]

                    if (eventUnit.inForce(element.army.force)) {
                        const dest = element.loc.randomCoordinate

                        eventUnit.issueOrderAtCoordinate(OrderId.Attack, dest)
                    }
                }

            }
        })

        // Units Ordered
        Event.unitOrdered.add(() => {

            const eventOrder = GetIssuedOrderId()
            const eventUnit = Unit.fromEvent()

            if (SpawnedTypes.indexOf(eventUnit.typeId) != -1) {

                if (OrderIdIgnore.indexOf(eventOrder) != -1 && !eventUnit.hasBuff(BuffIdIgnore[0])) {
                    const timer = new Timer()
                    timer.start(1, false, () => {
                        eventUnit.issueLastOrder()
                    }).destroy

                } else if (OrderIdIgnoreWithDelay.indexOf(eventOrder) != -1) {
                    const timer = new Timer()
                    timer.start(10, false, () => {
                        eventUnit.issueLastOrder()
                    }).destroy
                }
            }
        })

        // Unit is Summoned
        Event.unitSummoned.add(() => {
            const eventUnit = Unit.fromEvent()

            if (eventUnit.inForce(Force.Computers)) {
                if (SummonReplace.indexOf(eventUnit.typeId) != -1) {
                    Pathing.newOrders(eventUnit.replace(eventUnit.typeId))
                } else {
                    Pathing.newOrders(eventUnit)
                }

            }
        })

        // Unit is Spawned from Campsite
        Event.unitCreated.add(() => {
            const eventUnit = Unit.fromEvent()
            if (eventUnit.typeId == FourCC(ID.Unit.BanditSummon)) {

                if (eventUnit.inForce(Force.Computers)) {
                    Pathing.newOrders(eventUnit)
                }
            }
        })


        Event.mapStart.add(() => {

            const allUnits = new Group()
            allUnits.enumUnitsInRect(Rectangle.getWorldBounds(), null)

            let unit = allUnits.first
            while (unit != null) {
                if (unit.inForce(Force.Computers) && SpawnedTypes.indexOf(unit.typeId) != -1) { Pathing.newOrders(unit) }

                allUnits.removeUnit(unit)
                unit = allUnits.first
            }
            allUnits.destroy()
        })
    }


    // Namespace Functions
    static newOrders = (unit: Unit): void => {

        let dest: Coordinate

        if (unit.inRegion(Region.BigTop)) {
            Log.Verbose("top", unit.name)
            if (unit.inForce(Force.AllianceAll)) {
                dest = Loc.top.federation.randomCoordinate
            } else if (unit.inForce(Force.FederationAll)) {
                dest = Loc.top.alliance.randomCoordinate
            }

        } else if (unit.inRegion(Region.BigMiddle)) {
            Log.Verbose("middle", unit.name)
            if (unit.inForce(Force.AllianceAll)) {
                dest = Loc.middle.federation.randomCoordinate
            } else if (unit.inForce(Force.FederationAll)) {
                dest = Loc.middle.alliance.randomCoordinate
            }

        } else {
            Log.Verbose("bootom", unit.name)
            if (unit.inForce(Force.AllianceAll)) {
                dest = Loc.bottom.federation.randomCoordinate
            } else if (unit.inForce(Force.FederationAll)) {
                dest = Loc.bottom.alliance.randomCoordinate
            }
        }

        // If 
        if (dest != null) {
            Log.Verbose("Ordered")
            unit.issueOrderAtCoordinate(OrderId.Attack, dest)
        }

    }
}
