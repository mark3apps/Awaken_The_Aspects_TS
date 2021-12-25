import { Logger } from 'app/log'
import { Position } from 'app/classes/position'
import { UnitType } from 'app/classes/unitType'
import { Order, BuffFour, Unit, Timer, Force, Group, Rectangle, Region } from 'lib/w3ts/index'
import { Loc } from './loc'
import { Triggers } from 'lib/w3ts/handles/TriggerMap'

export const OrderIdIgnore = [
	Order.Move,
	Order.Rejuvination,
	Order.Waterelemental,
	Order.Fingerofdeath,
	Order.Holybolt,
	Order.Spiritlink,
	Order.Raisedead,
	Order.Carrionscarabs,
	Order.Breathoffire,
	Order.Forkedlightning,
	Order.Parasite,
	Order.Carrionswarm,
	Order.Thunderbolt,
	Order.Spiritwolf,
	Order.Summongrizzly,
	Order.Wateryminion,
	Order.Healingwave,
	Order.Roar,
	Order.Inferno,
	Order.Creepthunderbolt,
	Order.Cripple,
	Order.Recharge,
	Order.Replenish,
	Order.Summonfactory,
	Order.Chainlightning,
	Order.Polymorph,
	Order.Shockwave,
	Order.Dispel,
	Order.Innerfire,
	Order.Firebolt,
	Order.Clusterrockets,
	Order.Creepthunderclap,
	Order.Darkportal,
	Order.Breathoffire,
	Order.Bearform
]

export const BuffIdIgnore = [
	BuffFour.AttackUnit
]

export const OrderIdIgnoreWithDelay = [
	Order.Rainoffire,
	Order.Tranquility,
	Order.Stunned
]

export class Pathing {
	static define = (): void => {
		// Turn off Elder Ent Movement Pathing
		Triggers.unitCreated.add(() => {
			const eventUnit = Unit.fromEvent()
			if (eventUnit.typeId === UnitType.AncientOfWar.id) {
				eventUnit.setPathing(false)
			}
		})

		// Units Ordered
		Triggers.unitOrdered.add(() => {
			try {
				const eventOrder = GetIssuedOrderId()
				const eventUnit = Unit.fromOrdered()

				if (UnitType.order.get(eventUnit.typeId) === true) {
					if (OrderIdIgnore.indexOf(eventOrder) !== -1 && !eventUnit.hasBuff(BuffIdIgnore[0])) {
						const timer = new Timer()
						timer.start(1, false, () => {
							eventUnit.issueLastOrder()
						})
					} else if (OrderIdIgnoreWithDelay.indexOf(eventOrder) !== -1) {
						const timer = new Timer()
						timer.start(10, false, () => {
							eventUnit.issueLastOrder()
						})
					}
				}
			} catch (error) {
				Logger.Error(error)
			}
		})

		// Unit is Summoned
		Triggers.unitSummoned.add(() => {
			try {
				const eventUnit = Unit.fromEvent()

				if (eventUnit.inForce(Force.Computers)) {
					if (UnitType.replaceOnSummon.has(eventUnit.typeId)) {
						Pathing.newOrders(eventUnit.replace(eventUnit.typeId))
					} else {
						Pathing.newOrders(eventUnit)
					}
				}
			} catch (error) {
				Logger.Error(error)
			}
		})

		// Unit is Spawned from Campsite
		Triggers.unitCreated.add(() => {
			const eventUnit = Unit.fromEvent()

			try {
				if (UnitType.factorySummon.has(eventUnit.typeId)) {
					if (eventUnit.inForce(Force.Computers)) {
						Pathing.newOrders(eventUnit)
					}
				}
			} catch (error) {
				Logger.Error(error)
			}
		})

		Triggers.mapStart.add(() => {
			const allUnits = new Group()
			allUnits.enumUnitsInRect(Rectangle.getWorldBounds())

			let unit = allUnits.first
			while (unit != null) {
				if (unit.inForce(Force.Computers) && UnitType.order.has(unit.typeId)) { Pathing.newOrders(unit) }

				allUnits.removeUnit(unit)
				unit = allUnits.first
			}
			allUnits.destroy()
		})
	}

	// Namespace Functions
	static newOrders = (unit: Unit): void => {
		try {
			let dest: Position | undefined

			if (unit.inRegion(Region.BigTop)) {
				Logger.Verbose('top', unit.name)
				if (unit.inForce(Force.AllianceAll)) {
					dest = Loc.top.federation.randomPosition
				} else if (unit.inForce(Force.FederationAll)) {
					dest = Loc.top.alliance.randomPosition
				}
			} else if (unit.inRegion(Region.BigMiddle)) {
				Logger.Verbose('middle', unit.name)
				if (unit.inForce(Force.AllianceAll)) {
					dest = Loc.middle.federation.randomPosition
				} else if (unit.inForce(Force.FederationAll)) {
					dest = Loc.middle.alliance.randomPosition
				}
			} else {
				Logger.Verbose('bottom', unit.name)
				if (unit.inForce(Force.AllianceAll)) {
					dest = Loc.bottom.federation.randomPosition
				} else if (unit.inForce(Force.FederationAll)) {
					dest = Loc.bottom.alliance.randomPosition
				}
			}

			// If
			if (dest) unit.issueOrderAtCoordinate(Order.Attack, dest)
		} catch (error) {
			Logger.Error(error)
		}
	}
}
