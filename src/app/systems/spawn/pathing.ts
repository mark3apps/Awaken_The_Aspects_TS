import { UnitType, Position } from 'app/classes'
import { Logger } from 'app/log'
import { Order, BuffFour, Unit, Timer, Group, Rectangle } from 'lib/w3ts'
import { IPathingDepend } from './IPathingDepend'

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
	protected static instance?: Pathing

	static getInstance (depend: IPathingDepend) {
		if (!Pathing.instance) Pathing.instance = new Pathing(depend)
		return Pathing.instance
	}

	static getInstanceNoCreate () {
		return Pathing.instance
	}

	// Dependencies
	locs
	forces
	regions

	constructor (depend: IPathingDepend) {
		const triggers = depend.triggers
		this.locs = depend.locs
		this.forces = depend.forces
		this.regions = depend.regions

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
				Logger.Error("unitOrdered", error)
			}
		})

		// Unit is Summoned
		triggers.unitSummoned.addAction(() => {
			try {
				const eventUnit = Unit.fromEvent()

				if (eventUnit.inForce(this.forces.Computers)) {
					if (UnitType.replaceOnSummon.has(eventUnit.typeId)) {
						this.newOrders(eventUnit.replace(eventUnit.typeId))
					} else {
						this.newOrders(eventUnit)
					}
				}
			} catch (error) {
				Logger.Error("unitSummoned", error)
			}
		})

		// Unit is Spawned from Campsite
		triggers.unitCreated.addAction(() => {
			const eventUnit = Unit.fromEvent()

			try {
				if (UnitType.factorySummon.has(eventUnit.typeId)) {
					if (eventUnit.inForce(this.forces.Computers)) {
						this.newOrders(eventUnit)
					}
				}
			} catch (error) {
				Logger.Error("unitCreated", error)
			}
		})

		triggers.mapStart.addAction(() => {
			const allUnits = new Group()
			allUnits.enumUnitsInRect(Rectangle.getWorldBounds())

			let unit = allUnits.first
			while (unit != null) {
				if (unit.inForce(this.forces.Computers) && UnitType.order.has(unit.typeId)) { this.newOrders(unit) }

				allUnits.removeUnit(unit)
				unit = allUnits.first
			}
			allUnits.destroy()
		})
	}

	// Namespace Functions
	newOrders (unit: Unit) {
		try {
			let dest: Position | undefined

			if (unit.inRegion(this.regions.BigTop)) {
				Logger.Verbose('top', unit.name)
				if (unit.inForce(this.forces.AllianceAll)) {
					dest = this.locs.top.federation.randomPosition
				} else if (unit.inForce(this.forces.FederationAll)) {
					dest = this.locs.top.alliance.randomPosition
				}
			} else if (unit.inRegion(this.regions.BigMiddle)) {
				Logger.Verbose('middle', unit.name)
				if (unit.inForce(this.forces.AllianceAll)) {
					dest = this.locs.middle.federation.randomPosition
				} else if (unit.inForce(this.forces.FederationAll)) {
					dest = this.locs.middle.alliance.randomPosition
				}
			} else {
				Logger.Verbose('bottom', unit.name)
				if (unit.inForce(this.forces.AllianceAll)) {
					dest = this.locs.bottom.federation.randomPosition
				} else if (unit.inForce(this.forces.FederationAll)) {
					dest = this.locs.bottom.alliance.randomPosition
				}
			}

			// If
			if (dest) unit.issueOrderAtCoordinate(Order.Attack, dest)
		} catch (error) {
			Logger.Error("newOrders", error)
		}
	}
}
