import { Logger } from 'app/classes/log'
import { Position } from 'app/classes/position'
import { UnitType } from 'app/classes/unitType'
import { Rectangle, Region, Trigger, Unit, Order } from 'lib/w3ts/index'
import { Army } from './army'

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

		Trigger.unitEntersRegion.registerEnterRegion(this.region.handle, null)
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
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Hero)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Hero))
		}
		Loc.arcane = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Mage_Base), [{ loc: Loc.castle.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Mage_Base), [{ loc: Loc.castle.federation, army: Army.Alliance }])
		}
		Loc.start = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Start), [{ loc: Loc.castle.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Start), [{ loc: Loc.castle.federation, army: Army.Alliance }])
		}
		Loc.elf = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Elf_Base_Left), [{ loc: Loc.castle.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Elf_Base_Right), [{ loc: Loc.castle.federation, army: Army.Alliance }])
		}

		// Pathing Rects
		Loc.everything = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Everything), [{ loc: Loc.castle.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Everything), [{ loc: Loc.castle.federation, army: Army.Alliance }])
		}
		Loc.bottom = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Bottom), [{ loc: Loc.arcane.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Bottom), [{ loc: Loc.elf.federation, army: Army.Alliance }])
		}
		Loc.middle = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Middle), [{ loc: Loc.start.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Middle), [{ loc: Loc.start.federation, army: Army.Alliance }])
		}
		Loc.top = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Start_Top), [{ loc: Loc.elf.alliance, army: Army.Federation }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Start_Top), [{ loc: Loc.arcane.federation, army: Army.Alliance }])
		}

		// Spawn Rects
		Loc.sArcane = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Arcane)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Arcane))
		}
		Loc.sArcaneHero = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Hero_Left)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Hero_Right))
		}
		Loc.sCamp = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Camp_Bottom)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Camp_Top))
		}
		Loc.sHighCity = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Blacksmith_Left)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Blacksmith_Right))
		}
		Loc.sCityElf = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_City_Elves_Left)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_City_Elves_Right))
		}
		Loc.sCityFront = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Front_Town_Left), [{ loc: Loc.middle.federation, army: Army.Alliance }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Front_City_Right), [{ loc: Loc.middle.alliance, army: Army.Federation }])
		}
		Loc.sElementalTop = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Left_Top)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Right_Top))
		}
		Loc.sElementalBottom = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Left_Bottom)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Arcane_Right_Bottom))
		}
		Loc.sElf = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_High_Elves)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_High_Elves))
		}
		Loc.sElfShipyard = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Shipyard)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Shipyard))
		}
		Loc.sHero = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Hero)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Hero))
		}
		Loc.sHumanShipyard = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Human_Shipyard_Left)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Human_Shipyard_Right))
		}
		Loc.sKolbold = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Furbolg_Left)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Furbolg_Right))
		}
		Loc.sMurloc = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Murloc_Spawn_Left)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Murloc_Spawn_Right))
		}
		Loc.sNaga = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Naga_Left)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Naga_Right))
		}
		Loc.sOrc = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Orc)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Orc))
		}
		Loc.sTree = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Tree)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Tree))
		}
		Loc.sNightElf = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Night_Elf_Left)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Night_Elf_Right))
		}
		Loc.sDwarf = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Workshop)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Workshop))
		}
		Loc.sUndead = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Undead_Left)),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Undead_Right))
		}

		// Creep Rects
		Loc.cForest = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left), [{ loc: Loc.top.federation, army: Army.Alliance }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right), [{ loc: Loc.bottom.alliance, army: Army.Federation }])
		}
		Loc.cForestMid = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left_Mid), [{ loc: Loc.cForest.alliance, army: Army.Alliance }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right_Mid), [{ loc: Loc.cForest.federation, army: Army.Federation }])
		}
		Loc.cTides = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Murloc_Left), [{ loc: Loc.top.federation, army: Army.Alliance }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Murloc_Right), [{ loc: Loc.bottom.alliance, army: Army.Federation }])
		}
		Loc.cDeath = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Zombie_End_Left), [{ loc: Loc.middle.federation, army: Army.Alliance }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Zombie_End_Right), [{ loc: Loc.middle.alliance, army: Army.Federation }])
		}
		Loc.cStorm = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Left_Elemental_Start), [{ loc: Loc.bottom.federation, army: Army.Alliance }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Right_Elemental_Start), [{ loc: Loc.top.alliance, army: Army.Federation }])
		}
		Loc.cRock = {
			alliance: new Loc(Rectangle.fromHandle(gg_rct_Rock_Left), [{ loc: Loc.bottom.federation, army: Army.Alliance }]),
			federation: new Loc(Rectangle.fromHandle(gg_rct_Rock_Right), [{ loc: Loc.top.alliance, army: Army.Federation }])
		}

		// Unit Enters a Loc Forwarding Region
		Trigger.unitEntersRegion.add(() => {
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

								eventUnit.issueOrderAtPosition(Order.Attack, dest)
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
