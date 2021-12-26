import { Logger } from 'app/log'
import { Position } from 'app/classes/position'
import { UnitType } from 'app/classes/unitType'
import { Rectangle, Region, Unit, Order } from 'lib/w3ts/index'
import { Army } from './army'
import { Triggers } from 'lib/w3ts/handles/triggers'
import { Rectangles } from 'lib/w3ts/handles/Rectangles'

interface LocInterface {
	alliance: Loc,
	federation: Loc
}

interface LocKey {
	[name: number]: Loc
}

interface ForwardMove {
	loc: Loc,
	army: Army
}

export class Loc {
	readonly rect: Rectangle
	readonly region: Region
	forward: ForwardMove[]
	forwardArmy?: Army

	public static map: Map<number, Loc> = new Map()

	constructor (r: Rectangle, forward?: ForwardMove[]) {
		this.rect = r
		this.region = new Region()
		this.region.addRect(r)
		this.forward = forward ?? []

		Triggers.unitEntersRegion.registerEnterRegion(this.region.handle, null)
		Loc.map.set(this.region.id, this)
	}

	public static get (region: Region): Loc | undefined {
		return Loc.map.get(region.id)
	}

	public get randomX (): number {
		return this.rect.randomX
	}

	public get randomY (): number {
		return this.rect.randomY
	}

	public get randomPosition (): Position {
		return this.rect.randomPosition
	}

	static castle: LocInterface
	static arcane: LocInterface
	static start: LocInterface
	static elf: LocInterface
	static everything: LocInterface
	static bottom: LocInterface
	static middle: LocInterface
	static top: LocInterface
	static sArcane: LocInterface
	static sArcaneHero: LocInterface
	static sNightElf: LocInterface
	static sCamp: LocInterface
	static sHighCity: LocInterface
	static sCityElf: LocInterface
	static sCityFront: LocInterface
	static sElementalTop: LocInterface
	static sElementalBottom: LocInterface
	static sElf: LocInterface
	static sElfShipyard: LocInterface
	static sHero: LocInterface
	static sHumanShipyard: LocInterface
	static sKolbold: LocInterface
	static sMurloc: LocInterface
	static sNaga: LocInterface
	static sOrc: LocInterface
	static sTree: LocInterface
	static sDwarf: LocInterface
	static sUndead: LocInterface
	static cForest: LocInterface
	static cForestMid: LocInterface
	static cTides: LocInterface
	static cDeath: LocInterface
	static cStorm: LocInterface
	static cRock: LocInterface

	static define = (): void => {
		Loc.castle = {
			alliance: new Loc(Rectangles.Left_Hero),
			federation: new Loc(Rectangles.Right_Hero)
		}
		Loc.arcane = {
			alliance: new Loc(Rectangles.Left_Mage_Base, [{ loc: Loc.castle.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangles.Right_Mage_Base, [{ loc: Loc.castle.federation, army: Army.Alliance }])
		}
		Loc.start = {
			alliance: new Loc(Rectangles.Left_Start, [{ loc: Loc.castle.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangles.Right_Start, [{ loc: Loc.castle.federation, army: Army.Alliance }])
		}
		Loc.elf = {
			alliance: new Loc(Rectangles.Elf_Base_Left, [{ loc: Loc.castle.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangles.Elf_Base_Right, [{ loc: Loc.castle.federation, army: Army.Alliance }])
		}

		// Pathing Rects
		Loc.everything = {
			alliance: new Loc(Rectangles.Left_Everything, [{ loc: Loc.castle.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangles.Right_Everything, [{ loc: Loc.castle.federation, army: Army.Alliance }])
		}
		Loc.bottom = {
			alliance: new Loc(Rectangles.Left_Start_Bottom, [{ loc: Loc.arcane.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangles.Right_Start_Bottom, [{ loc: Loc.elf.federation, army: Army.Alliance }])
		}
		Loc.middle = {
			alliance: new Loc(Rectangles.Left_Start_Middle, [{ loc: Loc.start.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangles.Right_Start_Middle, [{ loc: Loc.start.federation, army: Army.Alliance }])
		}
		Loc.top = {
			alliance: new Loc(Rectangles.Left_Start_Top, [{ loc: Loc.elf.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangles.Right_Start_Top, [{ loc: Loc.arcane.federation, army: Army.Alliance }])
		}

		// Spawn Rects
		Loc.sArcane = {
			alliance: new Loc(Rectangles.Left_Arcane),
			federation: new Loc(Rectangles.Right_Arcane)
		}
		Loc.sArcaneHero = {
			alliance: new Loc(Rectangles.Arcane_Hero_Left),
			federation: new Loc(Rectangles.Arcane_Hero_Right)
		}
		Loc.sCamp = {
			alliance: new Loc(Rectangles.Camp_Bottom),
			federation: new Loc(Rectangles.Camp_Top)
		}
		Loc.sHighCity = {
			alliance: new Loc(Rectangles.Blacksmith_Left),
			federation: new Loc(Rectangles.Blacksmith_Right)
		}
		Loc.sCityElf = {
			alliance: new Loc(Rectangles.City_Elves_Left),
			federation: new Loc(Rectangles.City_Elves_Right)
		}
		Loc.sCityFront = {
			alliance: new Loc(Rectangles.Front_Town_Left, [{ loc: Loc.middle.federation, army: Army.Alliance }]),
			federation: new Loc(Rectangles.Front_City_Right, [{ loc: Loc.middle.alliance, army: Army.Federation }])
		}
		Loc.sElementalTop = {
			alliance: new Loc(Rectangles.Arcane_Left_Top),
			federation: new Loc(Rectangles.Arcane_Right_Top)
		}
		Loc.sElementalBottom = {
			alliance: new Loc(Rectangles.Arcane_Left_Bottom),
			federation: new Loc(Rectangles.Arcane_Right_Bottom)
		}
		Loc.sElf = {
			alliance: new Loc(Rectangles.Left_High_Elves),
			federation: new Loc(Rectangles.Right_High_Elves)
		}
		Loc.sElfShipyard = {
			alliance: new Loc(Rectangles.Left_Shipyard),
			federation: new Loc(Rectangles.Right_Shipyard)
		}
		Loc.sHero = {
			alliance: new Loc(Rectangles.Left_Hero),
			federation: new Loc(Rectangles.Right_Hero)
		}
		Loc.sHumanShipyard = {
			alliance: new Loc(Rectangles.Human_Shipyard_Left),
			federation: new Loc(Rectangles.Human_Shipyard_Right)
		}
		Loc.sKolbold = {
			alliance: new Loc(Rectangles.Furbolg_Left),
			federation: new Loc(Rectangles.Furbolg_Right)
		}
		Loc.sMurloc = {
			alliance: new Loc(Rectangles.Murloc_Spawn_Left),
			federation: new Loc(Rectangles.Murloc_Spawn_Right)
		}
		Loc.sNaga = {
			alliance: new Loc(Rectangles.Naga_Left),
			federation: new Loc(Rectangles.Naga_Right)
		}
		Loc.sOrc = {
			alliance: new Loc(Rectangles.Left_Orc),
			federation: new Loc(Rectangles.Right_Orc)
		}
		Loc.sTree = {
			alliance: new Loc(Rectangles.Left_Tree),
			federation: new Loc(Rectangles.Right_Tree)
		}
		Loc.sNightElf = {
			alliance: new Loc(Rectangles.Night_Elf_Left),
			federation: new Loc(Rectangles.Night_Elf_Right)
		}
		Loc.sDwarf = {
			alliance: new Loc(Rectangles.Left_Workshop),
			federation: new Loc(Rectangles.Right_Workshop)
		}
		Loc.sUndead = {
			alliance: new Loc(Rectangles.Undead_Left),
			federation: new Loc(Rectangles.Undead_Right)
		}

		// Creep Rects
		Loc.cForest = {
			alliance: new Loc(Rectangles.Aspect_of_Forest_Left, [{ loc: Loc.top.federation, army: Army.Alliance }]),
			federation: new Loc(Rectangles.Aspect_of_Forest_Right, [{ loc: Loc.bottom.alliance, army: Army.Federation }])
		}
		Loc.cForestMid = {
			alliance: new Loc(Rectangles.Aspect_of_Forest_Left_Mid, [{ loc: Loc.cForest.alliance, army: Army.Alliance }]),
			federation: new Loc(Rectangles.Aspect_of_Forest_Right_Mid, [{ loc: Loc.cForest.federation, army: Army.Federation }])
		}
		Loc.cTides = {
			alliance: new Loc(Rectangles.Murloc_Left, [{ loc: Loc.top.federation, army: Army.Alliance }]),
			federation: new Loc(Rectangles.Murloc_Right, [{ loc: Loc.bottom.alliance, army: Army.Federation }])
		}
		Loc.cDeath = {
			alliance: new Loc(Rectangles.Zombie_End_Left, [{ loc: Loc.middle.federation, army: Army.Alliance }]),
			federation: new Loc(Rectangles.Zombie_End_Right, [{ loc: Loc.middle.alliance, army: Army.Federation }])
		}
		Loc.cStorm = {
			alliance: new Loc(Rectangles.Left_Elemental_Start, [{ loc: Loc.bottom.federation, army: Army.Alliance }]),
			federation: new Loc(Rectangles.Right_Elemental_Start, [{ loc: Loc.top.alliance, army: Army.Federation }])
		}
		Loc.cRock = {
			alliance: new Loc(Rectangles.Rock_Left, [{ loc: Loc.bottom.federation, army: Army.Alliance }]),
			federation: new Loc(Rectangles.Rock_Right, [{ loc: Loc.top.alliance, army: Army.Federation }])
		}

		// Unit Enters a Loc Forwarding Region
		Triggers.unitEntersRegion.addAction(() => {
			const eventRegion = Region.fromEvent()
			const eventLoc = Loc.map.get(eventRegion.id)

			try {
				if (eventLoc != null) {
					const eventUnit = Unit.fromEvent()
					if (UnitType.order.has(eventUnit.typeId)) {
						for (let i = 0; i < eventLoc.forward.length; i++) {
							const element = eventLoc.forward[i]

							if (eventUnit.inForce(element.army.force)) {
								const dest = element.loc.randomPosition

								eventUnit.issueOrderAtCoordinate(Order.Attack, dest)
							}
						}
					}
				}
			} catch (error) {
				Logger.Error(error)
			}
		})
	}
}
