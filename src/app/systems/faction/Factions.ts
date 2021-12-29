import { Base } from '../base'
import { IFactionsDepend } from './IFactionsDepend'
import { Loc } from '../loc'
import { Faction } from './faction'

export class Factions {
	private static instance?: Factions

	static getInstance (depend: IFactionsDepend) {
		if (!Factions.instance) Factions.instance = new Factions(depend)
		return Factions.instance
	}

	arcane: Faction
	arcaneCreep: Faction
	arcaneHero: Faction
	arcaneTop: Faction
	arcaneBottom: Faction
	castle: Faction
	highCity: Faction
	cityElves: Faction
	cityFront: Faction
	humanShipyard: Faction
	highElves: Faction
	highElvesCreep: Faction
	tree: Faction
	nightElf: Faction
	nightElfShipyard: Faction
	merc: Faction
	dwarf: Faction
	dwarfCreep: Faction
	naga: Faction
	nagaCreep: Faction
	murloc: Faction
	orc: Faction
	draenei: Faction
	undead: Faction

	constructor (depend: IFactionsDepend) {
		const units = depend.units
		const armies = depend.armies
		const locs = depend.locs

		this.arcane = new Faction({
			alliance: new Base(units.h003_0015, armies.Alliance, locs.arcane.alliance, locs.bottom.federation, 4, true, true, true),
			federation: new Base(units.h003_0007, armies.Federation, locs.arcane.federation, locs.top.alliance, 4, true, true, true)
		})
		this.arcaneCreep = new Faction({
			alliance: new Base(units.h003_0015, armies.Alliance, locs.sArcane.alliance, locs.cStorm.alliance, 1, false, false, false),
			federation: new Base(units.h003_0007, armies.Federation, locs.sArcane.federation, locs.cStorm.federation, 1, false, false, false)
		})
		this.arcaneHero = new Faction({
			alliance: new Base(units.h014_0017, armies.Alliance, locs.sArcaneHero.alliance, locs.bottom.federation, 2, true, true, false),
			federation: new Base(units.h014_0158, armies.Federation, locs.sArcaneHero.federation, locs.top.alliance, 2, true, true, false)
		})
		this.arcaneTop = new Faction({
			alliance: new Base(units.hars_0355, armies.Alliance, locs.sElementalTop.alliance, locs.bottom.federation, 2, true, true, false),
			federation: new Base(units.hars_0293, armies.Federation, locs.sElementalTop.federation, locs.top.alliance, 2, true, true, false)
		})
		this.arcaneBottom = new Faction({
			alliance: new Base(units.hars_0292, armies.Alliance, locs.sElementalBottom.alliance, locs.bottom.federation, 2, true, true, true),
			federation: new Base(units.hars_0303, armies.Federation, locs.sElementalBottom.federation, locs.top.alliance, 2, true, true, true)
		})
		this.castle = new Faction({
			alliance: new Base(units.h00E_0033, armies.Alliance, locs.sHero.alliance, locs.everything.federation, 6, true, true, true),
			federation: new Base(units.h00E_0081, armies.Federation, locs.sHero.federation, locs.everything.alliance, 6, true, true, true)
		})
		this.highCity = new Faction({
			alliance: new Base(units.n00K_0802, armies.Alliance, locs.sHighCity.alliance, locs.cDeath.alliance, 2, true, true, true),
			federation: new Base(units.n00K_0477, armies.Federation, locs.sHighCity.federation, locs.cDeath.federation, 2, true, true, true)
		})
		this.cityElves = new Faction({
			alliance: new Base(units.hvlt_0207, armies.Alliance, locs.sCityElf.alliance, locs.everything.federation, 2, true, true, true),
			federation: new Base(units.hvlt_0406, armies.Federation, locs.sCityElf.federation, locs.everything.alliance, 2, true, true, true)
		})
		this.cityFront = new Faction({
			alliance: new Base(units.h01S_0553, armies.Alliance, locs.sCityFront.alliance, locs.middle.federation, 3, true, true, true),
			federation: new Base(units.h01S_0352, armies.Federation, locs.sCityFront.federation, locs.middle.alliance, 3, true, true, true)
		})
		this.humanShipyard = new Faction({
			alliance: new Base(units.hshy_0011, armies.Alliance, locs.sHumanShipyard.alliance, locs.sHumanShipyard.federation, 1, true, true, true),
			federation: new Base(units.hshy_0212, armies.Federation, locs.sHumanShipyard.federation, locs.sHumanShipyard.alliance, 1, true, true, true)
		})
		this.highElves = new Faction({
			alliance: new Base(units.nheb_0109, armies.Alliance, locs.sElf.alliance, locs.top.federation, 4, true, true, true),
			federation: new Base(units.nheb_0036, armies.Federation, locs.sElf.federation, locs.bottom.alliance, 4, true, true, true)
		})
		this.highElvesCreep = new Faction({
			alliance: new Base(units.nheb_0109, armies.Alliance, locs.sElf.alliance, locs.cForestMid.alliance, 1, false, false, false),
			federation: new Base(units.nheb_0036, armies.Federation, locs.sElf.federation, locs.cForestMid.federation, 1, false, false, false)
		})
		this.tree = new Faction({
			alliance: new Base(units.e003_0058, armies.Alliance, locs.sTree.alliance, locs.top.federation, 1, true, true, false),
			federation: new Base(units.e003_0014, armies.Federation, locs.sTree.federation, locs.bottom.alliance, 1, true, true, false)
		})
		this.nightElf = new Faction({
			alliance: new Base(units.edob_0315, armies.Alliance, locs.sNightElf.alliance, locs.top.federation, 1, true, true, false),
			federation: new Base(units.edob_0304, armies.Federation, locs.sNightElf.federation, locs.bottom.alliance, 1, true, true, false)
		})
		this.nightElfShipyard = new Faction({
			alliance: new Base(units.eshy_0120, armies.Alliance, locs.sElfShipyard.alliance, locs.sHumanShipyard.federation, 1, true, true, true),
			federation: new Base(units.eshy_0047, armies.Federation, locs.sElfShipyard.federation, locs.sHumanShipyard.alliance, 1, true, true, true)
		})
		this.merc = new Faction({
			alliance: new Base(units.n001_0048, armies.Alliance, locs.sCamp.alliance, locs.bottom.federation, 2, true, true, false),
			federation: new Base(units.n001_0049, armies.Federation, locs.sCamp.federation, locs.top.alliance, 2, true, true, false)
		})
		this.dwarf = new Faction({
			alliance: new Base(units.h006_0074, armies.Alliance, locs.sDwarf.alliance, locs.bottom.federation, 3, true, true, true),
			federation: new Base(units.h006_0055, armies.Federation, locs.sDwarf.federation, locs.top.alliance, 3, true, true, true)
		})
		this.dwarfCreep = new Faction({
			alliance: new Base(units.h006_0074, armies.Alliance, locs.sDwarf.alliance, locs.cRock.alliance, 1, false, false, false),
			federation: new Base(units.h006_0055, armies.Federation, locs.sDwarf.federation, locs.cRock.federation, 1, false, false, false)
		})
		this.naga = new Faction({
			alliance: new Base(units.nntt_0135, armies.Alliance, locs.sNaga.alliance, locs.top.federation, 3, true, true, true),
			federation: new Base(units.nntt_0132, armies.Federation, locs.sNaga.federation, locs.bottom.alliance, 3, true, true, true)
		})
		this.nagaCreep = new Faction({
			alliance: new Base(units.nntt_0135, armies.Alliance, locs.sNaga.alliance, locs.cTides.alliance, 1, false, false, false),
			federation: new Base(units.nntt_0132, armies.Federation, locs.sNaga.federation, locs.cTides.federation, 1, false, false, false)
		})
		this.murloc = new Faction({
			alliance: new Base(units.nmh1_0735, armies.Alliance, locs.sMurloc.alliance, locs.top.federation, 2, true, true, true),
			federation: new Base(units.nmh1_0783, armies.Federation, locs.sMurloc.federation, locs.bottom.alliance, 2, true, true, true)
		})
		this.orc = new Faction({
			alliance: new Base(units.o001_0075, armies.Alliance, locs.sOrc.alliance, locs.top.federation, 1, true, true, true),
			federation: new Base(units.o001_0078, armies.Federation, locs.sOrc.federation, locs.bottom.alliance, 1, true, true, true)
		})
		this.draenei = new Faction({
			alliance: new Base(units.ndh2_0359, armies.Alliance, locs.sKolbold.alliance, locs.top.federation, 2, true, true, true),
			federation: new Base(units.ndh2_0876, armies.Federation, locs.sKolbold.federation, locs.bottom.alliance, 2, true, true, true)
		})
		this.undead = new Faction({
			alliance: new Base(units.u001_0097, armies.Alliance, locs.sUndead.alliance, locs.middle.federation, 1, true, true, true),
			federation: new Base(units.u001_0098, armies.Federation, locs.sUndead.federation, locs.middle.alliance, 1, true, true, true)
		})
	}
}
