import { Logger } from 'app/log'
import { Position } from 'app/classes/position'
import { UnitType } from 'app/classes/unitType'
import { Order, BuffFour, Unit, Timer, Group, Rectangle } from 'lib/w3ts/index'
import { Loc } from './loc'
import { Forces } from 'lib/w3ts/handles/Forces'
import { Regions } from 'lib/w3ts/handles/Regions'
import { ITriggers } from 'app/define/triggers/interfaces/ITriggers'

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
	static define = (triggers: ITriggers): void => {
		// Turn off Elder Ent Movement Pathing
		triggers.unitCreated.addAction(() => {
			const eventUnit = Unit.fromEvent()
			if (eventUnit.typeId === UnitType.AncientOfWar.id) {
				eventUnit.setPathing(false)
			}
		})

		// Units Ordered
		triggers.unitOrdered.addAction(() => {
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
		triggers.unitSummoned.addAction(() => {
			try {
				const eventUnit = Unit.fromEvent()

				if (eventUnit.inForce(Forces.Computers)) {
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
		triggers.unitCreated.addAction(() => {
			const eventUnit = Unit.fromEvent()

			try {
				if (UnitType.factorySummon.has(eventUnit.typeId)) {
					if (eventUnit.inForce(Forces.Computers)) {
						Pathing.newOrders(eventUnit)
					}
				}
			} catch (error) {
				Logger.Error(error)
			}
		})

		triggers.mapStart.addAction(() => {
			const allUnits = new Group()
			allUnits.enumUnitsInRect(Rectangle.getWorldBounds())

			let unit = allUnits.first
			while (unit != null) {
				if (unit.inForce(Forces.Computers) && UnitType.order.has(unit.typeId)) { Pathing.newOrders(unit) }

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

			if (unit.inRegion(Regions.BigTop)) {
				Logger.Verbose('top', unit.name)
				if (unit.inForce(Forces.AllianceAll)) {
					dest = Loc.top.federation.randomPosition
				} else if (unit.inForce(Forces.FederationAll)) {
					dest = Loc.top.alliance.randomPosition
				}
			} else if (unit.inRegion(Regions.BigMiddle)) {
				Logger.Verbose('middle', unit.name)
				if (unit.inForce(Forces.AllianceAll)) {
					dest = Loc.middle.federation.randomPosition
				} else if (unit.inForce(Forces.FederationAll)) {
					dest = Loc.middle.alliance.randomPosition
				}
			} else {
				Logger.Verbose('bottom', unit.name)
				if (unit.inForce(Forces.AllianceAll)) {
					dest = Loc.bottom.federation.randomPosition
				} else if (unit.inForce(Forces.FederationAll)) {
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
