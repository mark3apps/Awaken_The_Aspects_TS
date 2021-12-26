import { Units } from 'lib/w3ts/handles/Units'
import { Army } from './army'
import { Base } from './base'
import { Loc } from './loc'

interface FactionInterface {
	alliance: Base,
	federation: Base
}

export class Faction {
	alliance: Base
	federation: Base

	constructor (faction: FactionInterface) {
		this.alliance = faction.alliance
		this.federation = faction.federation
	}

	static arcane: Faction
	static arcaneCreep: Faction
	static arcaneHero: Faction
	static arcaneTop: Faction
	static arcaneBottom: Faction
	static castle: Faction
	static highCity: Faction
	static cityElves: Faction
	static cityFront: Faction
	static humanShipyard: Faction
	static highElves: Faction
	static highElvesCreep: Faction
	static tree: Faction
	static nightElf: Faction
	static nightElfShipyard: Faction
	static merc: Faction
	static dwarf: Faction
	static dwarfCreep: Faction
	static naga: Faction
	static nagaCreep: Faction
	static murloc: Faction
	static orc: Faction
	static draenei: Faction
	static undead: Faction

	static define = (): void => {
		Faction.arcane = new Faction({
			alliance: new Base(Units.h003_0015, Army.Alliance, Loc.arcane.alliance, Loc.bottom.federation, 4, true, true, true),
			federation: new Base(Units.h003_0007, Army.Federation, Loc.arcane.federation, Loc.top.alliance, 4, true, true, true)
		})
		Faction.arcaneCreep = new Faction({
			alliance: new Base(Units.h003_0015, Army.Alliance, Loc.sArcane.alliance, Loc.cStorm.alliance, 1, false, false, false),
			federation: new Base(Units.h003_0007, Army.Federation, Loc.sArcane.federation, Loc.cStorm.federation, 1, false, false, false)
		})
		Faction.arcaneHero = new Faction({
			alliance: new Base(Units.h014_0017, Army.Alliance, Loc.sArcaneHero.alliance, Loc.bottom.federation, 2, true, true, false),
			federation: new Base(Units.h014_0158, Army.Federation, Loc.sArcaneHero.federation, Loc.top.alliance, 2, true, true, false)
		})
		Faction.arcaneTop = new Faction({
			alliance: new Base(Units.hars_0355, Army.Alliance, Loc.sElementalTop.alliance, Loc.bottom.federation, 2, true, true, false),
			federation: new Base(Units.hars_0293, Army.Federation, Loc.sElementalTop.federation, Loc.top.alliance, 2, true, true, false)
		})
		Faction.arcaneBottom = new Faction({
			alliance: new Base(Units.hars_0292, Army.Alliance, Loc.sElementalBottom.alliance, Loc.bottom.federation, 2, true, true, true),
			federation: new Base(Units.hars_0303, Army.Federation, Loc.sElementalBottom.federation, Loc.top.alliance, 2, true, true, true)
		})
		Faction.castle = new Faction({
			alliance: new Base(Units.h00E_0033, Army.Alliance, Loc.sHero.alliance, Loc.everything.federation, 6, true, true, true),
			federation: new Base(Units.h00E_0081, Army.Federation, Loc.sHero.federation, Loc.everything.alliance, 6, true, true, true)
		})
		Faction.highCity = new Faction({
			alliance: new Base(Units.n00K_0802, Army.Alliance, Loc.sHighCity.alliance, Loc.cDeath.alliance, 2, true, true, true),
			federation: new Base(Units.n00K_0477, Army.Federation, Loc.sHighCity.federation, Loc.cDeath.federation, 2, true, true, true)
		})
		Faction.cityElves = new Faction({
			alliance: new Base(Units.hvlt_0207, Army.Alliance, Loc.sCityElf.alliance, Loc.everything.federation, 2, true, true, true),
			federation: new Base(Units.hvlt_0406, Army.Federation, Loc.sCityElf.federation, Loc.everything.alliance, 2, true, true, true)
		})
		Faction.cityFront = new Faction({
			alliance: new Base(Units.h01S_0553, Army.Alliance, Loc.sCityFront.alliance, Loc.middle.federation, 3, true, true, true),
			federation: new Base(Units.h01S_0352, Army.Federation, Loc.sCityFront.federation, Loc.middle.alliance, 3, true, true, true)
		})
		Faction.humanShipyard = new Faction({
			alliance: new Base(Units.hshy_0011, Army.Alliance, Loc.sHumanShipyard.alliance, Loc.sHumanShipyard.federation, 1, true, true, true),
			federation: new Base(Units.hshy_0212, Army.Federation, Loc.sHumanShipyard.federation, Loc.sHumanShipyard.alliance, 1, true, true, true)
		})
		Faction.highElves = new Faction({
			alliance: new Base(Units.nheb_0109, Army.Alliance, Loc.sElf.alliance, Loc.top.federation, 4, true, true, true),
			federation: new Base(Units.nheb_0036, Army.Federation, Loc.sElf.federation, Loc.bottom.alliance, 4, true, true, true)
		})
		Faction.highElvesCreep = new Faction({
			alliance: new Base(Units.nheb_0109, Army.Alliance, Loc.sElf.alliance, Loc.cForestMid.alliance, 1, false, false, false),
			federation: new Base(Units.nheb_0036, Army.Federation, Loc.sElf.federation, Loc.cForestMid.federation, 1, false, false, false)
		})
		Faction.tree = new Faction({
			alliance: new Base(Units.e003_0058, Army.Alliance, Loc.sTree.alliance, Loc.top.federation, 1, true, true, false),
			federation: new Base(Units.e003_0014, Army.Federation, Loc.sTree.federation, Loc.bottom.alliance, 1, true, true, false)
		})
		Faction.nightElf = new Faction({
			alliance: new Base(Units.edob_0315, Army.Alliance, Loc.sNightElf.alliance, Loc.top.federation, 1, true, true, false),
			federation: new Base(Units.edob_0304, Army.Federation, Loc.sNightElf.federation, Loc.bottom.alliance, 1, true, true, false)
		})
		Faction.nightElfShipyard = new Faction({
			alliance: new Base(Units.eshy_0120, Army.Alliance, Loc.sElfShipyard.alliance, Loc.sHumanShipyard.federation, 1, true, true, true),
			federation: new Base(Units.eshy_0047, Army.Federation, Loc.sElfShipyard.federation, Loc.sHumanShipyard.alliance, 1, true, true, true)
		})
		Faction.merc = new Faction({
			alliance: new Base(Units.n001_0048, Army.Alliance, Loc.sCamp.alliance, Loc.bottom.federation, 2, true, true, false),
			federation: new Base(Units.n001_0049, Army.Federation, Loc.sCamp.federation, Loc.top.alliance, 2, true, true, false)
		})
		Faction.dwarf = new Faction({
			alliance: new Base(Units.h006_0074, Army.Alliance, Loc.sDwarf.alliance, Loc.bottom.federation, 3, true, true, true),
			federation: new Base(Units.h006_0055, Army.Federation, Loc.sDwarf.federation, Loc.top.alliance, 3, true, true, true)
		})
		Faction.dwarfCreep = new Faction({
			alliance: new Base(Units.h006_0074, Army.Alliance, Loc.sDwarf.alliance, Loc.cRock.alliance, 1, false, false, false),
			federation: new Base(Units.h006_0055, Army.Federation, Loc.sDwarf.federation, Loc.cRock.federation, 1, false, false, false)
		})
		Faction.naga = new Faction({
			alliance: new Base(Units.nntt_0135, Army.Alliance, Loc.sNaga.alliance, Loc.top.federation, 3, true, true, true),
			federation: new Base(Units.nntt_0132, Army.Federation, Loc.sNaga.federation, Loc.bottom.alliance, 3, true, true, true)
		})
		Faction.nagaCreep = new Faction({
			alliance: new Base(Units.nntt_0135, Army.Alliance, Loc.sNaga.alliance, Loc.cTides.alliance, 1, false, false, false),
			federation: new Base(Units.nntt_0132, Army.Federation, Loc.sNaga.federation, Loc.cTides.federation, 1, false, false, false)
		})
		Faction.murloc = new Faction({
			alliance: new Base(Units.nmh1_0735, Army.Alliance, Loc.sMurloc.alliance, Loc.top.federation, 2, true, true, true),
			federation: new Base(Units.nmh1_0783, Army.Federation, Loc.sMurloc.federation, Loc.bottom.alliance, 2, true, true, true)
		})
		Faction.orc = new Faction({
			alliance: new Base(Units.o001_0075, Army.Alliance, Loc.sOrc.alliance, Loc.top.federation, 1, true, true, true),
			federation: new Base(Units.o001_0078, Army.Federation, Loc.sOrc.federation, Loc.bottom.alliance, 1, true, true, true)
		})
		Faction.draenei = new Faction({
			alliance: new Base(Units.ndh2_0359, Army.Alliance, Loc.sKolbold.alliance, Loc.top.federation, 2, true, true, true),
			federation: new Base(Units.ndh2_0876, Army.Federation, Loc.sKolbold.federation, Loc.bottom.alliance, 2, true, true, true)
		})
		Faction.undead = new Faction({
			alliance: new Base(Units.u001_0097, Army.Alliance, Loc.sUndead.alliance, Loc.middle.federation, 1, true, true, true),
			federation: new Base(Units.u001_0098, Army.Federation, Loc.sUndead.federation, Loc.middle.alliance, 1, true, true, true)
		})
	}
}
