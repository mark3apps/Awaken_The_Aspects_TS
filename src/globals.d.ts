import { Ability } from "app/classes/ability";
import { Army } from "app/classes/army";
import { Base } from "app/classes/base";
import { HeroType } from "app/classes/herotype";
import { ItemType } from "app/classes/itemType";
import { Loc } from "app/classes/loc";
import { Spawn } from "app/classes/spawn";
import { Force } from "w3ts/index";

declare var Allied: Army
declare var Federation: Army
declare var AlliedForce: Force
declare var FederationForce: Force

declare var L : { [name: string]: Loc }
declare var BSA: { [name: string]: Base }
declare var BSF: { [name: string]: Base }
declare var HT: { [name: string]: HeroType }
declare var ABL: { [name: string]: Ability }
declare var IT: { [name: string]: ItemType }
declare var SP: { [name: string]: Spawn }

declare const enum OrderType {
    Point = 0,
    Target = 1,
    Immediate = 2
}

declare const enum UnitFour {
    Arbalist = "n00X",
    AncientProtector = "nwnr",
    Assassin = "nass",
    Automation = "n00F",
    Brawler = "E001",
    BrawlerAlter = "h00I",
    Bandit = "n002",
    BanditLord = "n005",
    BanditSpearman = "n003",
    BattleGolem = "narg",
    BloodElfArcher = "n00C",
    BloodElfBreaker = "hspt",
    BloodElfMage = "hmpr",
    Captian1 = "hcth",
    Captian2 = "h00S",
    Catapult = "hmtm",
    Commander = "h00D",
    DraeneiDarkslayer = "ndrd",
    DraeneiDemolisher = "ncat",
    DraeneiGuardian = "ndrf",
    DraeneiSeer = "ndrs",
    DraeneiVindicator = "n00I",
    DragonHawk = "nws1",
    DragonTurtle = "nhyc",
    DruidOfTheClaw = "edoc",
    Dryad = "edry",
    Enforcer = "n008",
    EredarWarlock = "nerw",
    Footman1 = "hfoo",
    Footman2 = "h017",
    Ghoul = "ugho",
    GiantSkeleton = "nfgl",
    Grunt = "o002",
    GryphonRider = "hgry",
    InfernalContraption = "ninc",
    InfernalJuggernaut = "nina",
    InfernalMachine = "ninm",
    HighElfApprenticeSwordsman = "h00T",
    HighElfArcher = "nhea",
    HighElfGuardian = "h010",
    HighElfHealer = "nemi",
    HighElfKnight = "h005",
    HighElfSwordsman = "hhes",
    HumanBattleship = "hbsh",
    HumanFrigate = "hdes",
    IronCaptian = "h01P",
    IronGuard = "h01O",
    IronMagi = "h01E",
    IronMorterTeam = "h001",
    IronRifleman = "h008",
    Knight = "h00L",
    MagiDefender = "h00K",
    ManaAddict = "H00R",
    ManaAddictAlter = "h00B",
    Militia1 = "h007",
    Militia2 = "h015",
    MountianGiant = "e005",
    MurlocCliffrunner = "nmcf",
    MurlocReaver = "nnmg",
    MurlocSnarecaster = "nmsn",
    MurlocTidewarrior = "nmtw",
    NagaMyrmidon = "nmyr",
    NagaSiren = "nnsw",
    NagaRoyalGuard = "nnrg",
    Necromancer = "unec",
    NightElfBattleship = "ebsh",
    NightElfFrigate = "edes",
    NightElfRanger = "earc",
    NightElfEliteRanger = "e000",
    NightElfSentry = "nwat",
    Ogre = "nogo",
    OrcWarchief = "owad",
    Rogue = "n00L",
    SeigeEngine = "hmtt",
    SeigeGolem = "nsgg",
    ShiftMaster = "E002",
    ShiftMasterAlter = "h00Q",
    SkeletonMage = "uskm",
    SnapDragon = "nsnp",
    Sorcress = "h00C",
    Summoner = "n018",
    SupremeWizard = "n00A",
    StormSummoner = "nchp",
    Tactition = "H009",
    TactitionAlter = "h00Y",
    TimeMage = "H00J",
    TimeMageAlter = "h00Z",
    TrollAxethrower = "nftr",
    Warlock = "nw2w",
    WaterElemental1 = "hwat",
    WaterElemental2 = "hwt2",
    WaterElemental3 = "hwt3"
}