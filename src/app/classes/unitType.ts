/* eslint-disable no-use-before-define */
import { Unit, UnitFour } from 'lib/w3ts/index'

export class UnitType {
	public readonly four: string
	public readonly id: number
	public order: boolean
	public replaceOnSummon: boolean
	public factorySummon: boolean
	public leaveCorpse: boolean

	static preloader: UnitType[] = []
	static readonly map: Map<number, UnitType> = new Map()
	static order: Map<number, boolean> = new Map()
	static replaceOnSummon: Map<number, boolean> = new Map()
	static factorySummon: Map<number, boolean> = new Map()
	static leaveCorpse: Map<number, boolean> = new Map()

	constructor (four: string, order = true, replaceOnSummon = false, factorySummon = false, leaveCorpse = false, preload = false) {
		this.four = four
		this.id = FourCC(four)
		this.order = order
		this.replaceOnSummon = replaceOnSummon
		this.factorySummon = factorySummon
		this.leaveCorpse = leaveCorpse

		UnitType.map.set(this.id, this)
		if (order) { UnitType.order.set(this.id, true) }
		if (replaceOnSummon) { UnitType.replaceOnSummon.set(this.id, true) }
		if (factorySummon) { UnitType.factorySummon.set(this.id, true) }
		if (leaveCorpse) { UnitType.leaveCorpse.set(this.id, true) }
		if (preload) { UnitType.preloader.push(this) }
	}

	static get (unit: Unit | string): UnitType {
		return typeof unit === 'string' ? this.map.get(FourCC(unit)) : this.map.get(unit.typeId)
	}

	static Arbalist = new UnitType('n00X')
	static AncientOfWar = new UnitType(UnitFour.AncientOfWarCreep)
	static AncientOfLife = new UnitType('n00F')
	static Assassin = new UnitType(UnitFour.Assassin)
	static Bandit = new UnitType('n002')
	static BanditSummon = new UnitType('n00V', true, false, true)
	static BanditLord = new UnitType('n005')
	static BanditSpearman = new UnitType('n003')
	static BattleGolem = new UnitType(UnitFour.Battlegolem)
	static BloodElfArcher = new UnitType('n00C')
	static BloodElfBreaker = new UnitType(UnitFour.Spellbreaker)
	static BloodElfMage = new UnitType(UnitFour.Priest)
	static Captain1 = new UnitType(UnitFour.Thecaptain)
	static Captain2 = new UnitType('h00S')
	static Catapult = new UnitType(UnitFour.Mortarteam)
	static Commander = new UnitType('h00D')
	static DraeneiDarkslayer = new UnitType(UnitFour.Draeneidarkslayer)
	static DraeneiDemolisher = new UnitType(UnitFour.DraeneiDemolisher)
	static DraeneiGuardian = new UnitType(UnitFour.Draeneiguardian)
	static DraeneiSeer = new UnitType(UnitFour.Draeneiseer)
	static DraeneiVindicator = new UnitType('n00I')
	static DragonHawk = new UnitType(UnitFour.Windserpent)
	static DragonTurtle = new UnitType(UnitFour.Dragonturtle)
	static DruidOfTheClaw = new UnitType(UnitFour.Druidoftheclaw)
	static DruidOfTheClawBear = new UnitType(UnitFour.Druidoftheclawmorphed)
	static Dryad = new UnitType(UnitFour.Dryad)
	static DwarfAxethrower = new UnitType('n006')
	static DwarfClansman = new UnitType('e00E')
	static DwarfElite = new UnitType('e00F')
	static Enforcer = new UnitType('n008')
	static EredarWarlock = new UnitType(UnitFour.Eredarwarlock)
	static FelOrcWarlock = new UnitType(UnitFour.Chaoswarlock)
	static Footman1 = new UnitType(UnitFour.Footman, true, false, false, false)
	static Footman2 = new UnitType('h017')
	static Ghoul = new UnitType(UnitFour.Ghoul)
	static GiantSkeleton = new UnitType(UnitFour.Fleshgolem)
	static Grunt = new UnitType('o002')
	static GryphonRider = new UnitType(UnitFour.Gryphonrider)
	static Gyrocopter = new UnitType(UnitFour.Flyingmachine)
	static InfernalContraption = new UnitType(UnitFour.Infernalcontraption)
	static InfernalJuggernaut = new UnitType(UnitFour.Infernaljuggernaut)
	static InfernalMachine = new UnitType(UnitFour.Infernalmachine)
	static HighElfApprenticeSwordsman = new UnitType('h00T')
	static HighElfArcher = new UnitType(UnitFour.Highelvenarcher)
	static HighElfGuardian = new UnitType('h010')
	static HighElfHealer = new UnitType(UnitFour.Emissary)
	static HighElfKnight = new UnitType('h005')
	static HighElfSwordsman = new UnitType(UnitFour.Highelvenswordsman)
	static HippogryphRider = new UnitType(UnitFour.Riddenhippogryph)
	static HumanBattleship = new UnitType(UnitFour.Humanbattleship)
	static HumanFrigate = new UnitType(UnitFour.Humandestroyer)
	static IronCaptain = new UnitType('h01P')
	static IronGuard = new UnitType('h01O')
	static IronMagi = new UnitType('h01E')
	static IronMortarTeam = new UnitType('h001')
	static IronRifleman = new UnitType('h008')
	static Knight = new UnitType('h00L')
	static Lich = new UnitType('u000')
	static MagiDefender = new UnitType('h00K')
	static Militia1 = new UnitType('h007')
	static Militia2 = new UnitType('h015')
	static MountainGiant = new UnitType('e005')
	static MurlocCliffRunner = new UnitType(UnitFour.Murgulcliffrunner)
	static MurlocReaver = new UnitType(UnitFour.Murgulreaver)
	static MurlocSnareCaster = new UnitType(UnitFour.Murgulsnarecaster)
	static MurlocTideWarrior = new UnitType(UnitFour.Murgultidewarrior)
	static NavyCaptain = new UnitType('h018', true, true)
	static NavyFootman = new UnitType('h013', true, true)
	static NavyMarine = new UnitType('h016', true, true)
	static Crossbowman = new UnitType('n00X', true, true)
	static NagaMyrmidon = new UnitType(UnitFour.Nagamyrmidon)
	static NagaSiren = new UnitType(UnitFour.Siren)
	static NagaRoyalGuard = new UnitType(UnitFour.Nagaroyalguard)
	static Necromancer = new UnitType(UnitFour.Necromancer)
	static NightElfBattleship = new UnitType(UnitFour.Nightelfbattleship)
	static NightElfFrigate = new UnitType(UnitFour.Nightelfdestroyer)
	static NightElfRanger = new UnitType(UnitFour.Archer)
	static NightElfEliteRanger = new UnitType('e000')
	static NightElfSentry = new UnitType(UnitFour.Watcher)
	static Ogre = new UnitType(UnitFour.Stonemaulogre)
	static OrcWarlord = new UnitType(UnitFour.OrcWarlord)
	static Rogue = new UnitType('n00L')
	static SeigeEngine = new UnitType('h011')
	static SeigeEngineDamaged = new UnitType(UnitFour.Siegeengine)
	static SeigeGolem = new UnitType(UnitFour.Siegegolem)
	static SkeletonArcher = new UnitType(UnitFour.Skeletalarchersummoned)
	static SkeletonWarrior = new UnitType(UnitFour.Skeleton)
	static SkeletonMage = new UnitType(UnitFour.Skeletalmage)
	static SnapDragon = new UnitType(UnitFour.Snapdragon)
	static Sorceress = new UnitType('h00C')
	static Summoner = new UnitType('n018')
	static SupremeWizard = new UnitType('n00A')
	static StormSummoner = new UnitType(UnitFour.Chaplain)
	static TrollAxethrower = new UnitType(UnitFour.Foresttroll)
	static WarGolem = new UnitType(UnitFour.Wargolem)
	static Warlock = new UnitType(UnitFour.War2warlock)
	static WaterElemental1 = new UnitType(UnitFour.Waterelemental1)
	static WaterElemental2 = new UnitType(UnitFour.Waterelemental2)
	static WaterElemental3 = new UnitType(UnitFour.Waterelemental3)
	static NightElfWarden = new UnitType(UnitFour.Nightelfassassin)
	static VillagerMale1 = new UnitType(UnitFour.Villagerman, false)
	static VillagerMale2 = new UnitType(UnitFour.Villagerman2, false)
	static VillagerFemale1 = new UnitType(UnitFour.Villagerwoman, false)
	static VillagerChild1 = new UnitType(UnitFour.Villagerkid, false)
	static VillagerChild2 = new UnitType(UnitFour.Villagerkid2, false)
	static Treant = new UnitType('e008')
	static CorruptedTreant = new UnitType('e008')

	// Aspects
	static AspectOfTheTides = new UnitType(UnitFour.Murgulshadowcaster, true, false, false, false, true)
	static AspectOfTheStorm = new UnitType(UnitFour.Bereserkelemental, true, false, false, false, true)
	static AspectOfTheEarth = new UnitType('n01A', true, false, false, false, true)
	static AspectOfTheForest = new UnitType('n00N', true, false, false, false, true)
	static AspectOfDeath = new UnitType(UnitFour.Abomination, true, false, false, false, true)
	static AspectOfFire = new UnitType('n00H', true, false, false, false, true)

	// Buildings
	static CastleGateOpen = new UnitType('h020')
	static CastleGateClosed = new UnitType('h021')
	static CityBuilding03 = new UnitType(UnitFour.CitybuildingSmall2, false, false, false, true)
	static CityBuilding04 = new UnitType(UnitFour.CitybuildingSmall5, false, false, false, true)
	static CityBuilding09 = new UnitType(UnitFour.CitybuildingSmall9, false, false, false, true)
	static CityBuilding10 = new UnitType(UnitFour.CitybuildingSmall10, false, false, false, true)
	static CityBuilding11 = new UnitType(UnitFour.CitybuildingSmall11, false, false, false, true)
	static DwarvenGateClosed = new UnitType('h01G')
	static DwarvenGateOpen = new UnitType('h01C')
	static MercTent = new UnitType('n00m', false, false, false, true)
	static MercLookout = new UnitType('o004', false, false, false, true)
	static Nerubianziggurat = new UnitType(UnitFour.Nerubianziggurat, false, false, false, true)
	static WildhammerCottage = new UnitType('h01W', false, false, false, true)
	static WildhammerFarmLarge = new UnitType('h01F', false, false, false, true)
	static WildhammerFarm = new UnitType('h01U', false, false, false, true)
	static WildhammerMound = new UnitType('h01X', false, false, false, true)
	static ArcaneManaTower = new UnitType('h00G')
	static ArcaneFlameTower = new UnitType('nft2')
	static ArcaneSorcerersTower = new UnitType('n007')
	static ArcaneManaRepository = new UnitType('h024', false, false, false, true)

	// Extras
	static Dummy = new UnitType('h00U', false, false, false)
	static DummyManaStorm = new UnitType('h01H')
	static DummyMarkForDeath = new UnitType('e00D')
	static DummySeer = new UnitType('h00H', false, false, false)
	static DummyCenterEvent = new UnitType('n01U', false, false, false)
	static DummyShiftstorm = new UnitType('o006', true, false, false)

	// Heroes
	static Brawler = new UnitType('E001', false, false, false)
	static ManaAddict = new UnitType('H00R', false, false, false)
	static ShiftMaster = new UnitType('E002', false, false, false)
	static Tactician = new UnitType('H009', false, false, false)
	static TimeMage = new UnitType('H00J', false, false, false)
}
