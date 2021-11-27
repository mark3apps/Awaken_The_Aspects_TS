import { Loc } from "app/classes/loc"
import { Position } from "app/classes/position"
import { UnitType } from "app/classes/unitType"
import { ID } from "lib/w3ts/globals/ids"
import { OrderId } from "lib/w3ts/globals/order"
import { Force, Group, Rectangle, Region, Timer, Trigger, Unit } from "lib/w3ts/index"
import { Log } from "./log"


export const OrderIdIgnore = [
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
    OrderId.Creepthunderclap,
    OrderId.Darkportal,
    OrderId.Breathoffire
]

export const BuffIdIgnore = [
    ID.Buff.AttackUnit
]

export const OrderIdIgnoreWithDelay = [
    OrderId.Rainoffire,
    OrderId.Tranquility,
    OrderId.Stunned
]

export class Pathing {

    static define = (): void => {


        // Units Ordered
        Trigger.unitOrdered.add(() => {
            try {
                const eventOrder = GetIssuedOrderId()
                const eventUnit = Unit.fromOrdered()

                if (UnitType.autoOrder.get(eventUnit.typeId)) {
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
            } catch (error) {
                Log.Error(error)
            }
        })

        // Unit is Summoned
        Trigger.unitSummoned.add(() => {
            try {
                const eventUnit = Unit.fromEvent()

                if (eventUnit.inForce(Force.Computers)) {


                    if (UnitType.summonReplace.has(eventUnit.typeId)) {
                        Pathing.newOrders(eventUnit.replace(eventUnit.typeId))
                    } else {
                        Pathing.newOrders(eventUnit)
                    }

                }
            } catch (error) {
                Log.Error(error)
            }
        })

        // Unit is Spawned from Campsite
        Trigger.unitCreated.add(() => {
            const eventUnit = Unit.fromEvent()

            try {

                if (UnitType.campSummon.has(eventUnit.typeId)) {

                    if (eventUnit.inForce(Force.Computers)) {
                        Pathing.newOrders(eventUnit)
                    }
                }
            } catch (error) {
                Log.Error(error)
            }
        })


        Trigger.mapStart.add(() => {

            const allUnits = new Group()
            allUnits.enumUnitsInRect(Rectangle.getWorldBounds(), null)

            let unit = allUnits.first
            while (unit != null) {
                if (unit.inForce(Force.Computers) && UnitType.autoOrder.has(unit.typeId)) { Pathing.newOrders(unit) }

                allUnits.removeUnit(unit)
                unit = allUnits.first
            }
            allUnits.destroy()
        })
    }


    // Namespace Functions
    static newOrders = (unit: Unit): void => {
        try {

            let dest: Position

            if (unit.inRegion(Region.BigTop)) {
                Log.Verbose("top", unit.name)
                if (unit.inForce(Force.AllianceAll)) {
                    dest = Loc.top.federation.randomPosition
                } else if (unit.inForce(Force.FederationAll)) {
                    dest = Loc.top.alliance.randomPosition
                }

            } else if (unit.inRegion(Region.BigMiddle)) {
                Log.Verbose("middle", unit.name)
                if (unit.inForce(Force.AllianceAll)) {
                    dest = Loc.middle.federation.randomPosition
                } else if (unit.inForce(Force.FederationAll)) {
                    dest = Loc.middle.alliance.randomPosition
                }

            } else {
                Log.Verbose("bootom", unit.name)
                if (unit.inForce(Force.AllianceAll)) {
                    dest = Loc.bottom.federation.randomPosition
                } else if (unit.inForce(Force.FederationAll)) {
                    dest = Loc.bottom.alliance.randomPosition
                }
            }

            // If 
            if (dest != null) {
                Log.Verbose("Ordered")
                unit.issueOrderAtPosition(OrderId.Attack, dest)
            }
        } catch (error) {
            Log.Error(error)
        }
    }
}
