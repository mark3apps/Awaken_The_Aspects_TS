/* eslint-disable no-use-before-define */
import { Unit, UnitFour } from 'lib/w3ts/index'

export type IUnitType = {
	four: string,
	order?: boolean,
	replaceOnSummon?: boolean,
	factorySummon?: boolean,
	leaveCorpse?: boolean,
	preload?: boolean
}

export class UnitType {
	public readonly four: string
	public readonly id: number
	public order: boolean = true
	public replaceOnSummon: boolean = false
	public factorySummon: boolean = false
	public leaveCorpse: boolean = false
	public preload: boolean = false

	static preloader: UnitType[] = []
	static readonly map: Map<number, UnitType> = new Map()
	static order: Map<number, boolean> = new Map()
	static replaceOnSummon: Map<number, boolean> = new Map()
	static factorySummon: Map<number, boolean> = new Map()
	static leaveCorpse: Map<number, boolean> = new Map()

	constructor (config: IUnitType) {
		this.four = config.four
		this.id = FourCC(config.four)

		// Default Booleans
		if (config.order !== undefined) this.order = config.order
		if (config.replaceOnSummon !== undefined) this.replaceOnSummon = config.replaceOnSummon
		if (config.factorySummon !== undefined) this.factorySummon = config.factorySummon
		if (config.leaveCorpse !== undefined) this.leaveCorpse = config.leaveCorpse
		if (config.preload !== undefined) this.preload = config.preload

		UnitType.map.set(this.id, this)
		if (this.order) { UnitType.order.set(this.id, true) }
		if (this.replaceOnSummon) { UnitType.replaceOnSummon.set(this.id, true) }
		if (this.factorySummon) { UnitType.factorySummon.set(this.id, true) }
		if (this.leaveCorpse) { UnitType.leaveCorpse.set(this.id, true) }
		if (this.preload) { UnitType.preloader.push(this) }
	}

	static get (unit: Unit | number): UnitType | undefined {
		return typeof unit === 'number' ? this.map.get(unit) : this.map.get(unit.typeId)
	}

	static Arbalist = new UnitType({ four: 'n00X' })
	static AncientOfWar = new UnitType({ four: UnitFour.AncientOfWarCreep })
	static AncientOfLife = new UnitType({ four: 'n00F' })
	static Assassin = new UnitType({ four: UnitFour.Assassin })
	static Bandit = new UnitType({ four: 'n002' })
	static BanditSummon = new UnitType({ four: 'n00V', factorySummon: true })
	static BanditLord = new UnitType({ four: 'n005' })
	static BanditSpearman = new UnitType({ four: 'n003' })
	static BattleGolem = new UnitType({ four: UnitFour.Battlegolem })
	static BloodElfArcher = new UnitType({ four: 'n00C' })
	static BloodElfBreaker = new UnitType({ four: UnitFour.Spellbreaker })
	static BloodElfMage = new UnitType({ four: UnitFour.Priest })
	static Captain1 = new UnitType({ four: UnitFour.Thecaptain })
	static Captain2 = new UnitType({ four: 'h00S' })
	static Catapult = new UnitType({ four: UnitFour.Mortarteam })
	static Commander = new UnitType({ four: 'h00D' })
	static DraeneiDarkslayer = new UnitType({ four: UnitFour.Draeneidarkslayer })
	static DraeneiDemolisher = new UnitType({ four: UnitFour.DraeneiDemolisher })
	static DraeneiGuardian = new UnitType({ four: UnitFour.Draeneiguardian })
	static DraeneiSeer = new UnitType({ four: UnitFour.Draeneiseer })
	static DraeneiVindicator = new UnitType({ four: 'n00I' })
	static DragonHawk = new UnitType({ four: UnitFour.Windserpent })
	static DragonTurtle = new UnitType({ four: UnitFour.Dragonturtle })
	static DruidOfTheClaw = new UnitType({ four: UnitFour.Druidoftheclaw })
	static DruidOfTheClawBear = new UnitType({ four: UnitFour.Druidoftheclawmorphed })
	static Dryad = new UnitType({ four: UnitFour.Dryad })
	static DwarfAxethrower = new UnitType({ four: 'n006' })
	static DwarfClansman = new UnitType({ four: 'e00E' })
	static DwarfElite = new UnitType({ four: 'e00F' })
	static Enforcer = new UnitType({ four: 'n008' })
	static EredarWarlock = new UnitType({ four: UnitFour.Eredarwarlock })
	static FelOrcWarlock = new UnitType({ four: UnitFour.Chaoswarlock })
	static Footman1 = new UnitType({ four: UnitFour.Footman })
	static Footman2 = new UnitType({ four: 'h017' })
	static Ghoul = new UnitType({ four: UnitFour.Ghoul })
	static GiantSkeleton = new UnitType({ four: UnitFour.Fleshgolem })
	static Grunt = new UnitType({ four: 'o002' })
	static GryphonRider = new UnitType({ four: UnitFour.Gryphonrider })
	static Gyrocopter = new UnitType({ four: UnitFour.Flyingmachine })
	static InfernalContraption = new UnitType({ four: UnitFour.Infernalcontraption })
	static InfernalJuggernaut = new UnitType({ four: UnitFour.Infernaljuggernaut })
	static InfernalMachine = new UnitType({ four: UnitFour.Infernalmachine })
	static HighElfApprenticeSwordsman = new UnitType({ four: 'h00T' })
	static HighElfArcher = new UnitType({ four: UnitFour.Highelvenarcher })
	static HighElfGuardian = new UnitType({ four: 'h010' })
	static HighElfHealer = new UnitType({ four: UnitFour.Emissary })
	static HighElfKnight = new UnitType({ four: 'h005' })
	static HighElfSwordsman = new UnitType({ four: UnitFour.Highelvenswordsman })
	static HippogryphRider = new UnitType({ four: UnitFour.Riddenhippogryph })
	static HumanBattleship = new UnitType({ four: UnitFour.Humanbattleship })
	static HumanFrigate = new UnitType({ four: UnitFour.Humandestroyer })
	static IronCaptain = new UnitType({ four: 'h01P' })
	static IronGuard = new UnitType({ four: 'h01O' })
	static IronMagi = new UnitType({ four: 'h01E' })
	static IronMortarTeam = new UnitType({ four: 'h001' })
	static IronRifleman = new UnitType({ four: 'h008' })
	static Knight = new UnitType({ four: 'h00L' })
	static Lich = new UnitType({ four: 'u000' })
	static MagiDefender = new UnitType({ four: 'h00K' })
	static Militia1 = new UnitType({ four: 'h007' })
	static Militia2 = new UnitType({ four: 'h015' })
	static MountainGiant = new UnitType({ four: 'e005' })
	static MurlocCliffRunner = new UnitType({ four: UnitFour.Murgulcliffrunner })
	static MurlocReaver = new UnitType({ four: UnitFour.Murgulreaver })
	static MurlocSnareCaster = new UnitType({ four: UnitFour.Murgulsnarecaster })
	static MurlocTideWarrior = new UnitType({ four: UnitFour.Murgultidewarrior })
	static NavyCaptain = new UnitType({ four: 'h018', replaceOnSummon: true })
	static NavyFootman = new UnitType({ four: 'h013', replaceOnSummon: true })
	static NavyMarine = new UnitType({ four: 'h016', replaceOnSummon: true })
	static Crossbowman = new UnitType({ four: 'n00X', replaceOnSummon: true })
	static NagaMyrmidon = new UnitType({ four: UnitFour.Nagamyrmidon })
	static NagaSiren = new UnitType({ four: UnitFour.Siren })
	static NagaRoyalGuard = new UnitType({ four: UnitFour.Nagaroyalguard })
	static Necromancer = new UnitType({ four: UnitFour.Necromancer })
	static NightElfBattleship = new UnitType({ four: UnitFour.Nightelfbattleship })
	static NightElfFrigate = new UnitType({ four: UnitFour.Nightelfdestroyer })
	static NightElfRanger = new UnitType({ four: UnitFour.Archer })
	static NightElfEliteRanger = new UnitType({ four: 'e000' })
	static NightElfSentry = new UnitType({ four: UnitFour.Watcher })
	static Ogre = new UnitType({ four: UnitFour.Stonemaulogre })
	static OrcWarlord = new UnitType({ four: UnitFour.OrcWarlord })
	static Rogue = new UnitType({ four: 'n00L' })
	static SeigeEngine = new UnitType({ four: 'h011' })
	static SeigeEngineDamaged = new UnitType({ four: UnitFour.Siegeengine })
	static SeigeGolem = new UnitType({ four: UnitFour.Siegegolem })
	static SkeletonArcher = new UnitType({ four: UnitFour.Skeletalarchersummoned })
	static SkeletonWarrior = new UnitType({ four: UnitFour.Skeleton })
	static SkeletonMage = new UnitType({ four: UnitFour.Skeletalmage })
	static SnapDragon = new UnitType({ four: UnitFour.Snapdragon })
	static Sorceress = new UnitType({ four: 'h00C' })
	static Summoner = new UnitType({ four: 'n018' })
	static SupremeWizard = new UnitType({ four: 'n00A' })
	static StormSummoner = new UnitType({ four: UnitFour.Chaplain })
	static TrollAxethrower = new UnitType({ four: UnitFour.Foresttroll })
	static WarGolem = new UnitType({ four: UnitFour.Wargolem })
	static Warlock = new UnitType({ four: UnitFour.War2warlock })
	static WaterElemental1 = new UnitType({ four: UnitFour.Waterelemental1 })
	static WaterElemental2 = new UnitType({ four: UnitFour.Waterelemental2 })
	static WaterElemental3 = new UnitType({ four: UnitFour.Waterelemental3 })
	static NightElfWarden = new UnitType({ four: UnitFour.Nightelfassassin })
	static VillagerMale1 = new UnitType({ four: UnitFour.Villagerman, order: false })
	static VillagerMale2 = new UnitType({ four: UnitFour.Villagerman2, order: false })
	static VillagerFemale1 = new UnitType({ four: UnitFour.Villagerwoman, order: false })
	static VillagerChild1 = new UnitType({ four: UnitFour.Villagerkid, order: false })
	static VillagerChild2 = new UnitType({ four: UnitFour.Villagerkid2, order: false })
	static Treant = new UnitType({ four: 'e008' })
	static CorruptedTreant = new UnitType({ four: 'e008' })

	// Aspects
	static AspectOfTheTides = new UnitType({ four: UnitFour.Murgulshadowcaster, preload: false })
	static AspectOfTheStorm = new UnitType({ four: UnitFour.Bereserkelemental, preload: false })
	static AspectOfTheEarth = new UnitType({ four: 'n01A', preload: false })
	static AspectOfTheForest = new UnitType({ four: 'n00N', preload: false })
	static AspectOfDeath = new UnitType({ four: UnitFour.Abomination, preload: false })
	static AspectOfFire = new UnitType({ four: 'n00H', preload: true })

	// Buildings
	static CastleGateOpen = new UnitType({ four: 'h020' })
	static CastleGateClosed = new UnitType({ four: 'h021' })
	static CityBuilding03 = new UnitType({ four: UnitFour.CitybuildingSmall2, order: false, leaveCorpse: true })
	static CityBuilding04 = new UnitType({ four: UnitFour.CitybuildingSmall5, order: false, leaveCorpse: true })
	static CityBuilding09 = new UnitType({ four: UnitFour.CitybuildingSmall9, order: false, leaveCorpse: true })
	static CityBuilding10 = new UnitType({ four: UnitFour.CitybuildingSmall10, order: false, leaveCorpse: true })
	static CityBuilding11 = new UnitType({ four: UnitFour.CitybuildingSmall11, order: false, leaveCorpse: true })
	static DwarvenGateClosed = new UnitType({ four: 'h01G' })
	static DwarvenGateOpen = new UnitType({ four: 'h01C' })
	static MercTent = new UnitType({ four: 'n00m', order: false, leaveCorpse: true })
	static MercLookout = new UnitType({ four: 'o004', order: false, leaveCorpse: true })
	static Nerubianziggurat = new UnitType({ four: UnitFour.Nerubianziggurat, order: false, leaveCorpse: true })
	static WildhammerCottage = new UnitType({ four: 'h01W', order: false, leaveCorpse: true })
	static WildhammerFarmLarge = new UnitType({ four: 'h01F', order: false, leaveCorpse: true })
	static WildhammerFarm = new UnitType({ four: 'h01U', order: false, leaveCorpse: true })
	static WildhammerMound = new UnitType({ four: 'h01X', order: false, leaveCorpse: true })
	static ArcaneManaTower = new UnitType({ four: 'h00G' })
	static ArcaneFlameTower = new UnitType({ four: 'nft2' })
	static ArcaneSorcerersTower = new UnitType({ four: 'n007' })
	static ArcaneManaRepository = new UnitType({ four: 'h024', order: false, leaveCorpse: true })

	// Extras
	static Dummy = new UnitType({ four: 'h00U', order: false })
	static DummyManaStorm = new UnitType({ four: 'h01H' })
	static DummyMarkForDeath = new UnitType({ four: 'e00D' })
	static DummySeer = new UnitType({ four: 'h00H', order: false })
	static DummyCenterEvent = new UnitType({ four: 'n01U', order: false })
	static DummyShiftstorm = new UnitType({ four: 'o006' })

	static FelShifter1 = new UnitType({ four: "E004", order: false })
	static FelShifter2 = new UnitType({ four: "E009", order: false })
	static FelShifter3 = new UnitType({ four: "E006", order: false })
	static FelShifter4 = new UnitType({ four: "E00A", order: false })
	static FelShifter5 = new UnitType({ four: "E00B", order: false })
	static FelShifter6 = new UnitType({ four: "E00C", order: false })

	// Heroes
	static Brawler = new UnitType({ four: 'E001', order: false })
	static ManaAddict = new UnitType({ four: 'H00R', order: false })
	static ShiftMaster = new UnitType({ four: 'E002', order: false })
	static Tactician = new UnitType({ four: 'H009', order: false })
	static TimeMage = new UnitType({ four: 'H00J', order: false })
}
