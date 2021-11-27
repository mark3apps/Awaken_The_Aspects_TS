
import { ID } from "lib/w3ts/globals/ids"
import { Unit } from "lib/w3ts/index"



export class UnitType {
    public readonly four: string
    public readonly id: number
    public autoOrder: boolean
    public summonReplace: boolean
    public campSummon: boolean

    static preloader: UnitType[] = []
    static readonly map: Map<number, UnitType> = new Map()
    static autoOrder: Map<number, boolean> = new Map()
    static summonReplace: Map<number, boolean> = new Map()
    static campSummon: Map<number, boolean> = new Map()

    constructor(four: string, autoOrder = true, summonReplace = false, campSummon = false) {
        this.four = four
        this.id = FourCC(four)
        this.autoOrder = autoOrder
        this.summonReplace = summonReplace
        this.campSummon = campSummon

        UnitType.map.set(this.id, this)
        if (autoOrder) { UnitType.autoOrder.set(this.id, true) }
        if (summonReplace) { UnitType.summonReplace.set(this.id, true) }
        if (campSummon) { UnitType.campSummon.set(this.id, true) }

        //static preloader.push(this)
    }

    static get(unit: Unit): UnitType {
        return this.map.get(unit.typeId)
    }

    static Arbalist = new UnitType("n00X")
    static AncientOfWar = new UnitType("nwnr")
    static AncientOfLife = new UnitType(ID.Unit.AncientOfLife)
    static Assassin = new UnitType("nass")
    static Bandit = new UnitType("n002")
    static BanditSummon = new UnitType(ID.Unit.BanditSummon, true, false, true)
    static BanditLord = new UnitType("n005")
    static BanditSpearman = new UnitType("n003")
    static BattleGolem = new UnitType("narg")
    static BloodElfArcher = new UnitType("n00C")
    static BloodElfBreaker = new UnitType("hspt")
    static BloodElfMage = new UnitType("hmpr")
    static Captain1 = new UnitType("hcth")
    static Captain2 = new UnitType("h00S")
    static Catapult = new UnitType("hmtm")
    static Commander = new UnitType("h00D")
    static DraeneiDarkslayer = new UnitType("ndrd")
    static DraeneiDemolisher = new UnitType("ncat")
    static DraeneiGuardian = new UnitType("ndrf")
    static DraeneiSeer = new UnitType("ndrs")
    static DraeneiVindicator = new UnitType("n00I")
    static DragonHawk = new UnitType("nws1")
    static DragonTurtle = new UnitType("nhyc")
    static DruidOfTheClaw = new UnitType("edoc")
    static DruidOfTheClawBear = new UnitType("edcm")
    static Dryad = new UnitType("edry")
    static DwarfAxethrower = new UnitType("n006")
    static DwarfClansman = new UnitType("e00E")
    static DwarfElite = new UnitType("e00F")
    static Enforcer = new UnitType("n008")
    static EredarWarlock = new UnitType("nerw")
    static FelOrcWarlock = new UnitType("nchw")
    static Footman1 = new UnitType("hfoo")
    static Footman2 = new UnitType("h017")
    static Ghoul = new UnitType("ugho")
    static GiantSkeleton = new UnitType("nfgl")
    static Grunt = new UnitType("o002")
    static GryphonRider = new UnitType("hgry")
    static Gyrocopter = new UnitType("hgyr")
    static InfernalContraption = new UnitType("ninc")
    static InfernalJuggernaut = new UnitType("nina")
    static InfernalMachine = new UnitType("ninm")
    static HighElfApprenticeSwordsman = new UnitType("h00T")
    static HighElfArcher = new UnitType("nhea")
    static HighElfGuardian = new UnitType("h010")
    static HighElfHealer = new UnitType("nemi")
    static HighElfKnight = new UnitType("h005")
    static HighElfSwordsman = new UnitType("hhes")
    static HippogryphRider = new UnitType("ehpr")
    static HumanBattleship = new UnitType("hbsh")
    static HumanFrigate = new UnitType("hdes")
    static IronCaptain = new UnitType("h01P")
    static IronGuard = new UnitType("h01O")
    static IronMagi = new UnitType("h01E")
    static IronMortarTeam = new UnitType("h001")
    static IronRifleman = new UnitType("h008")
    static Knight = new UnitType("h00L")
    static Lich = new UnitType(ID.Unit.LichCustom)
    static MagiDefender = new UnitType("h00K")
    static Militia1 = new UnitType("h007")
    static Militia2 = new UnitType("h015")
    static MountainGiant = new UnitType("e005")
    static MurlocCliffRunner = new UnitType("nmcf")
    static MurlocReaver = new UnitType("nnmg")
    static MurlocSnareCaster = new UnitType("nmsn")
    static MurlocTideWarrior = new UnitType("nmtw")
    static NavyCaptain = new UnitType(ID.Unit.NavyCaptain, true, true)
    static NavyFootman = new UnitType(ID.Unit.NavyFootman, true)
    static NavyMarine = new UnitType(ID.Unit.NavyMarine, true)
    static Crossbowman = new UnitType(ID.Unit.Crossbowman)
    static NagaMyrmidon = new UnitType("nmyr")
    static NagaSiren = new UnitType("nnsw")
    static NagaRoyalGuard = new UnitType("nnrg")
    static Necromancer = new UnitType("unec")
    static NightElfBattleship = new UnitType("ebsh")
    static NightElfFrigate = new UnitType("edes")
    static NightElfRanger = new UnitType("earc")
    static NightElfEliteRanger = new UnitType("e000")
    static NightElfSentry = new UnitType("nwat")
    static Ogre = new UnitType("nogo")
    static OrcWarchief = new UnitType("owad")
    static Rogue = new UnitType("n00L")
    static SeigeEngine = new UnitType("h011")
    static SeigeEngineDamaged = new UnitType("hmtt")
    static SeigeGolem = new UnitType("nsgg")
    static SkeletonArcher = new UnitType("nsca")
    static SkeletonWarrior = new UnitType("nske")
    static SkeletonMage = new UnitType("uskm")
    static SnapDragon = new UnitType("nsnp")
    static Sorceress = new UnitType("h00C")
    static Summoner = new UnitType("n018")
    static SupremeWizard = new UnitType("n00A")
    static StormSummoner = new UnitType("nchp")
    static TrollAxethrower = new UnitType("nftr")
    static WarGolem = new UnitType("nwrg")
    static Warlock = new UnitType("nw2w")
    static WaterElemental1 = new UnitType("hwat")
    static WaterElemental2 = new UnitType("hwt2")
    static WaterElemental3 = new UnitType("hwt3")
    static NightElfWarden = new UnitType(ID.Unit.Nightelfassassin)
    static VillagerMale1 = new UnitType(ID.Unit.Villagerman, false)
    static VillagerMale2 = new UnitType(ID.Unit.Villagerman2, false)
    static VillagerFemale1 = new UnitType(ID.Unit.Villagerwoman, false)
    static VillagerChild1 = new UnitType(ID.Unit.Villagerkid, false)
    static VillagerChild2 = new UnitType(ID.Unit.Villagerkid2, false)

    // Aspects
    static AspectOfTheTides = new UnitType(ID.Unit.AspectOfTheTides)
    static AspectOfTheStorm = new UnitType(ID.Unit.AspectOfTheStorm)
    static AspectOfTheEarth = new UnitType(ID.Unit.AspectOfTheEarth)
    static AspectOfTheForest = new UnitType(ID.Unit.AspectOfTheForest)
    static AspectOfDeath = new UnitType(ID.Unit.AspectOfDeath)
    static AspectOfFire = new UnitType(ID.Unit.AspectOfFire)

    // Buildings
    static CastleGateOpen = new UnitType(ID.Unit.CastleGateOpen)
    static CastleGateClosed = new UnitType(ID.Unit.CastleGateClosed)
    static CityBuilding03 = new UnitType(ID.Unit.CitybuildingSmall3)
    static CityBuilding04 = new UnitType(ID.Unit.CitybuildingSmall4)
    static CityBuilding05 = new UnitType(ID.Unit.CitybuildingSmall5)
    static CityBuilding09 = new UnitType(ID.Unit.CitybuildingSmall9)
    static CityBuilding10 = new UnitType(ID.Unit.CitybuildingSmalla)
    static CityBuilding11 = new UnitType(ID.Unit.CitybuildingSmallb)
    static CityBuilding15 = new UnitType(ID.Unit.CityBuildingLarge3)
    static DwarvenGateClosed = new UnitType(ID.Unit.DwarvenGateClosed)
    static DwarvenGateOpen = new UnitType(ID.Unit.DwarvenGateOpen)
    static MercTent = new UnitType(ID.Unit.MercTent)
    static MercLookout = new UnitType(ID.Unit.MercLookout)
    static Nerubianziggurat = new UnitType(ID.Unit.Nerubianziggurat)
    static WildhammerCottage = new UnitType("h01W")
    static WildhammerFarmLarge = new UnitType("h01F")
    static WildhammerFarm = new UnitType("h01U")
    static WildhammerMound = new UnitType("h01X")

    // Extras
    static Dummy = new UnitType(ID.Unit.Dummy, false, false, false)
    static DummySeer = new UnitType("h00H", false, false, false)
    static DummyCenterEvent = new UnitType("n01U", false, false, false)

    // Heroes
    static Brawler = new UnitType("E001", false, false, false)
    static ManaAddict = new UnitType("H00R", false, false, false)
    static ShiftMaster = new UnitType("E002", false, false, false)
    static Tactician = new UnitType("H009", false, false, false)
    static TimeMage = new UnitType("H00J", false, false, false)

    static BrawlerAlter = new UnitType("h00I", false, false, false)
    static ManaAddictAlter = new UnitType("h00B", false, false, false)
    static ShiftMasterAlter = new UnitType("h00Q", false, false, false)
    static TacticianAlter = new UnitType("h00Y", false, false, false)
    static TimeMageAlter = new UnitType("h00Z", false, false, false)
}

