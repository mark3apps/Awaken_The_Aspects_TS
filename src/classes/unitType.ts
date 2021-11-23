import { ID } from "lib/w3ts/globals/ids"


export class UnitType {
    public readonly four!: string
    public readonly id!: number
    public name: string
    public pointValue: number
    public level: number

    static preloader: UnitType[] = []

    constructor(four: string) {
        this.four = four
        this.id = FourCC(four)
        UnitType.preloader.push(this)
    }

    static Arbalist: UnitType
    static AncientOfWar: UnitType
    static AncientOfLife: UnitType
    static Assassin: UnitType
    static Brawler: UnitType
    static BrawlerAlter: UnitType
    static Bandit: UnitType
    static BanditLord: UnitType
    static BanditSpearman: UnitType
    static BattleGolem: UnitType
    static BloodElfArcher: UnitType
    static BloodElfBreaker: UnitType
    static BloodElfMage: UnitType
    static Captain1: UnitType
    static Captain2: UnitType
    static Catapult: UnitType
    static Commander: UnitType
    static DraeneiDarkslayer: UnitType
    static DraeneiDemolisher: UnitType
    static DraeneiGuardian: UnitType
    static DraeneiSeer: UnitType
    static DraeneiVindicator: UnitType
    static DragonHawk: UnitType
    static DragonTurtle: UnitType
    static DruidOfTheClaw: UnitType
    static DruidOfTheClawBear: UnitType
    static Dryad: UnitType
    static DwarfAxethrower: UnitType
    static DwarfClansman: UnitType
    static DwarfElite: UnitType
    static Enforcer: UnitType
    static EredarWarlock: UnitType
    static FelOrcWarlock: UnitType
    static Footman1: UnitType
    static Footman2: UnitType
    static Ghoul: UnitType
    static GiantSkeleton: UnitType
    static Grunt: UnitType
    static GryphonRider: UnitType
    static Gyrocopter: UnitType
    static InfernalContraption: UnitType
    static InfernalJuggernaut: UnitType
    static InfernalMachine: UnitType
    static HighElfApprenticeSwordsman: UnitType
    static HighElfArcher: UnitType
    static HighElfGuardian: UnitType
    static HighElfHealer: UnitType
    static HighElfKnight: UnitType
    static HighElfSwordsman: UnitType
    static HippogryphRider: UnitType
    static HumanBattleship: UnitType
    static HumanFrigate: UnitType
    static IronCaptain: UnitType
    static IronGuard: UnitType
    static IronMagi: UnitType
    static IronMortarTeam: UnitType
    static IronRifleman: UnitType
    static Knight: UnitType
    static Lich: UnitType
    static MagiDefender: UnitType
    static ManaAddict: UnitType
    static ManaAddictAlter: UnitType
    static Militia1: UnitType
    static Militia2: UnitType
    static MountainGiant: UnitType
    static MurlocCliffRunner: UnitType
    static MurlocReaver: UnitType
    static MurlocSnareCaster: UnitType
    static MurlocTideWarrior: UnitType
    static NavyCaptain: UnitType
    static NavyFootman: UnitType
    static NavyMarine: UnitType
    static Crossbowman: UnitType
    static NagaMyrmidon: UnitType
    static NagaSiren: UnitType
    static NagaRoyalGuard: UnitType
    static Necromancer: UnitType
    static NightElfBattleship: UnitType
    static NightElfFrigate: UnitType
    static NightElfRanger: UnitType
    static NightElfEliteRanger: UnitType
    static NightElfSentry: UnitType
    static Ogre: UnitType
    static OrcWarchief: UnitType
    static Rogue: UnitType
    static SeigeEngine: UnitType
    static SeigeEngineDamaged: UnitType
    static SeigeGolem: UnitType
    static ShiftMaster: UnitType
    static ShiftMasterAlter: UnitType
    static SkeletonArcher: UnitType
    static SkeletonWarrior: UnitType
    static SkeletonMage: UnitType
    static SnapDragon: UnitType
    static Sorceress: UnitType
    static Summoner: UnitType
    static SupremeWizard: UnitType
    static StormSummoner: UnitType
    static Tactician: UnitType
    static TacticianAlter: UnitType
    static TimeMage: UnitType
    static TimeMageAlter: UnitType
    static TrollAxethrower: UnitType
    static WarGolem: UnitType
    static Warlock: UnitType
    static WaterElemental1: UnitType
    static WaterElemental2: UnitType
    static WaterElemental3: UnitType
    static NightElfWarden: UnitType
    static VillagerMale1: UnitType
    static VillagerMale2: UnitType
    static VillagerFemale1: UnitType
    static VillagerChild1: UnitType
    static VillagerChild2: UnitType

    // Aspects
    static AspectOfTheTides: UnitType
    static AspectOfTheStorm: UnitType
    static AspectOfTheEarth: UnitType
    static AspectOfTheForest: UnitType
    static AspectOfDeath: UnitType

    // Buildings
    static CastleGateOpen: UnitType
    static CastleGateClosed: UnitType
    static CityBuilding03: UnitType
    static CityBuilding04: UnitType
    static CityBuilding05: UnitType
    static CityBuilding09: UnitType
    static CityBuilding10: UnitType
    static CityBuilding11: UnitType
    static CityBuilding15: UnitType
    static DwarvenGateClosed: UnitType
    static DwarvenGateOpen: UnitType
    static MercTent: UnitType
    static MercLookout: UnitType
    static Nerubianziggurat: UnitType
    static WildhammerCottage: UnitType
    static WildhammerFarmLarge: UnitType
    static WildhammerFarm: UnitType
    static WildhammerMound: UnitType


    static define = (): void => {
        UnitType.Arbalist = new UnitType("n00X")
        UnitType.AncientOfWar = new UnitType("nwnr")
        UnitType.AncientOfLife = new UnitType(ID.Unit.AncientOfLife)
        UnitType.Assassin = new UnitType("nass")
        UnitType.Brawler = new UnitType("E001")
        UnitType.BrawlerAlter = new UnitType("h00I")
        UnitType.Bandit = new UnitType("n002")
        UnitType.BanditLord = new UnitType("n005")
        UnitType.BanditSpearman = new UnitType("n003")
        UnitType.BattleGolem = new UnitType("narg")
        UnitType.BloodElfArcher = new UnitType("n00C")
        UnitType.BloodElfBreaker = new UnitType("hspt")
        UnitType.BloodElfMage = new UnitType("hmpr")
        UnitType.Captain1 = new UnitType("hcth")
        UnitType.Captain2 = new UnitType("h00S")
        UnitType.Catapult = new UnitType("hmtm")
        UnitType.Commander = new UnitType("h00D")
        UnitType.DraeneiDarkslayer = new UnitType("ndrd")
        UnitType.DraeneiDemolisher = new UnitType("ncat")
        UnitType.DraeneiGuardian = new UnitType("ndrf")
        UnitType.DraeneiSeer = new UnitType("ndrs")
        UnitType.DraeneiVindicator = new UnitType("n00I")
        UnitType.DragonHawk = new UnitType("nws1")
        UnitType.DragonTurtle = new UnitType("nhyc")
        UnitType.DruidOfTheClaw = new UnitType("edoc")
        UnitType.DruidOfTheClawBear = new UnitType("edcm")
        UnitType.Dryad = new UnitType("edry")
        UnitType.DwarfAxethrower = new UnitType("n006")
        UnitType.DwarfClansman = new UnitType("e00E")
        UnitType.DwarfElite = new UnitType("e00F")
        UnitType.Enforcer = new UnitType("n008")
        UnitType.EredarWarlock = new UnitType("nerw")
        UnitType.FelOrcWarlock = new UnitType("nchw")
        UnitType.Footman1 = new UnitType("hfoo")
        UnitType.Footman2 = new UnitType("h017")
        UnitType.Ghoul = new UnitType("ugho")
        UnitType.GiantSkeleton = new UnitType("nfgl")
        UnitType.Grunt = new UnitType("o002")
        UnitType.GryphonRider = new UnitType("hgry")
        UnitType.Gyrocopter = new UnitType("hgyr")
        UnitType.InfernalContraption = new UnitType("ninc")
        UnitType.InfernalJuggernaut = new UnitType("nina")
        UnitType.InfernalMachine = new UnitType("ninm")
        UnitType.HighElfApprenticeSwordsman = new UnitType("h00T")
        UnitType.HighElfArcher = new UnitType("nhea")
        UnitType.HighElfGuardian = new UnitType("h010")
        UnitType.HighElfHealer = new UnitType("nemi")
        UnitType.HighElfKnight = new UnitType("h005")
        UnitType.HighElfSwordsman = new UnitType("hhes")
        UnitType.HippogryphRider = new UnitType("ehpr")
        UnitType.HumanBattleship = new UnitType("hbsh")
        UnitType.HumanFrigate = new UnitType("hdes")
        UnitType.IronCaptain = new UnitType("h01P")
        UnitType.IronGuard = new UnitType("h01O")
        UnitType.IronMagi = new UnitType("h01E")
        UnitType.IronMortarTeam = new UnitType("h001")
        UnitType.IronRifleman = new UnitType("h008")
        UnitType.Knight = new UnitType("h00L")
        UnitType.Lich = new UnitType(ID.Unit.LichCustom)
        UnitType.MagiDefender = new UnitType("h00K")
        UnitType.ManaAddict = new UnitType("H00R")
        UnitType.ManaAddictAlter = new UnitType("h00B")
        UnitType.Militia1 = new UnitType("h007")
        UnitType.Militia2 = new UnitType("h015")
        UnitType.MountainGiant = new UnitType("e005")
        UnitType.MurlocCliffRunner = new UnitType("nmcf")
        UnitType.MurlocReaver = new UnitType("nnmg")
        UnitType.MurlocSnareCaster = new UnitType("nmsn")
        UnitType.MurlocTideWarrior = new UnitType("nmtw")
        UnitType.NavyCaptain = new UnitType(ID.Unit.NavyCaptain)
        UnitType.NavyFootman = new UnitType(ID.Unit.NavyFootman)
        UnitType.NavyMarine = new UnitType(ID.Unit.NavyMarine)
        UnitType.Crossbowman = new UnitType(ID.Unit.Crossbowman)
        UnitType.NagaMyrmidon = new UnitType("nmyr")
        UnitType.NagaSiren = new UnitType("nnsw")
        UnitType.NagaRoyalGuard = new UnitType("nnrg")
        UnitType.Necromancer = new UnitType("unec")
        UnitType.NightElfBattleship = new UnitType("ebsh")
        UnitType.NightElfFrigate = new UnitType("edes")
        UnitType.NightElfRanger = new UnitType("earc")
        UnitType.NightElfEliteRanger = new UnitType("e000")
        UnitType.NightElfSentry = new UnitType("nwat")
        UnitType.Ogre = new UnitType("nogo")
        UnitType.OrcWarchief = new UnitType("owad")
        UnitType.Rogue = new UnitType("n00L")
        UnitType.SeigeEngine = new UnitType("h011")
        UnitType.SeigeEngineDamaged = new UnitType("hmtt")
        UnitType.SeigeGolem = new UnitType("nsgg")
        UnitType.ShiftMaster = new UnitType("E002")
        UnitType.ShiftMasterAlter = new UnitType("h00Q")
        UnitType.SkeletonArcher = new UnitType("nsca")
        UnitType.SkeletonWarrior = new UnitType("nske")
        UnitType.SkeletonMage = new UnitType("uskm")
        UnitType.SnapDragon = new UnitType("nsnp")
        UnitType.Sorceress = new UnitType("h00C")
        UnitType.Summoner = new UnitType("n018")
        UnitType.SupremeWizard = new UnitType("n00A")
        UnitType.StormSummoner = new UnitType("nchp")
        UnitType.Tactician = new UnitType("H009")
        UnitType.TacticianAlter = new UnitType("h00Y")
        UnitType.TimeMage = new UnitType("H00J")
        UnitType.TimeMageAlter = new UnitType("h00Z")
        UnitType.TrollAxethrower = new UnitType("nftr")
        UnitType.WarGolem = new UnitType("nwrg")
        UnitType.Warlock = new UnitType("nw2w")
        UnitType.WaterElemental1 = new UnitType("hwat")
        UnitType.WaterElemental2 = new UnitType("hwt2")
        UnitType.WaterElemental3 = new UnitType("hwt3")
        UnitType.NightElfWarden = new UnitType(ID.Unit.Nightelfassassin)
        UnitType.VillagerMale1 = new UnitType(ID.Unit.Villagerman)
        UnitType.VillagerMale2 = new UnitType(ID.Unit.Villagerman2)
        UnitType.VillagerFemale1 = new UnitType(ID.Unit.Villagerwoman)
        UnitType.VillagerChild1 = new UnitType(ID.Unit.Villagerkid)
        UnitType.VillagerChild2 = new UnitType(ID.Unit.Villagerkid2)

        // Aspects
        UnitType.AspectOfTheTides = new UnitType(ID.Unit.AspectOfTheTides)
        UnitType.AspectOfTheStorm = new UnitType(ID.Unit.AspectOfTheStorm)
        UnitType.AspectOfTheEarth = new UnitType(ID.Unit.AspectOfTheEarth)
        UnitType.AspectOfTheForest = new UnitType(ID.Unit.AspectOfTheForest)
        UnitType.AspectOfDeath = new UnitType(ID.Unit.AspectOfDeath)

        // Buildings
        UnitType.CastleGateOpen = new UnitType(ID.Unit.CastleGateOpen)
        UnitType.CastleGateClosed = new UnitType(ID.Unit.CastleGateClosed)
        UnitType.CityBuilding03 = new UnitType(ID.Unit.CitybuildingSmall3)
        UnitType.CityBuilding04 = new UnitType(ID.Unit.CitybuildingSmall4)
        UnitType.CityBuilding05 = new UnitType(ID.Unit.CitybuildingSmall5)
        UnitType.CityBuilding09 = new UnitType(ID.Unit.CitybuildingSmall9)
        UnitType.CityBuilding10 = new UnitType(ID.Unit.CitybuildingSmalla)
        UnitType.CityBuilding11 = new UnitType(ID.Unit.CitybuildingSmallb)
        UnitType.CityBuilding15 = new UnitType(ID.Unit.CityBuildingLarge3)
        UnitType.DwarvenGateClosed = new UnitType(ID.Unit.DwarvenGateClosed)
        UnitType.DwarvenGateOpen = new UnitType(ID.Unit.DwarvenGateOpen)
        UnitType.MercTent = new UnitType(ID.Unit.MercTent)
        UnitType.MercLookout = new UnitType(ID.Unit.MercLookout)
        UnitType.Nerubianziggurat = new UnitType(ID.Unit.Nerubianziggurat)
        UnitType.WildhammerCottage = new UnitType("h01W")
        UnitType.WildhammerFarmLarge = new UnitType("h01F")
        UnitType.WildhammerFarm = new UnitType("h01U")
        UnitType.WildhammerMound = new UnitType("h01X")
    }
}