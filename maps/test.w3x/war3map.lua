udg_unit = nil
udg_group = nil
gg_trg_Untitled_Trigger_001 = nil
gg_trg_Untitled_Trigger_002 = nil
gg_unit_Hpal_0000 = nil
gg_unit_Hpal_0002 = nil
function InitGlobals()
    udg_group = CreateGroup()
end

function CreateAllItems()
    local itemID
    BlzCreateItemWithSkin(FourCC("ckng"), -1373.6, 1057.1, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("ckng"), -1653.2, 988.3, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("ckng"), -1691.5, 1145.1, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("ckng"), -1869.7, 1294.2, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("ckng"), -1923.7, 1053.5, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("ckng"), -1910.0, 935.1, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("ckng"), -1898.3, 862.8, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("ckng"), -1722.5, 794.5, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("ckng"), -1614.4, 762.2, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("ckng"), -1514.0, 849.6, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("pghe"), -1580.1, 454.6, FourCC("pghe"))
    BlzCreateItemWithSkin(FourCC("pghe"), -1766.5, 475.9, FourCC("pghe"))
    BlzCreateItemWithSkin(FourCC("pghe"), -1720.9, 421.0, FourCC("pghe"))
    BlzCreateItemWithSkin(FourCC("pghe"), -1642.7, 556.5, FourCC("pghe"))
    BlzCreateItemWithSkin(FourCC("pghe"), -1745.3, 560.9, FourCC("pghe"))
    BlzCreateItemWithSkin(FourCC("pghe"), -1839.3, 573.3, FourCC("pghe"))
    BlzCreateItemWithSkin(FourCC("pghe"), -1879.7, 571.5, FourCC("pghe"))
    BlzCreateItemWithSkin(FourCC("pghe"), -1963.7, 581.2, FourCC("pghe"))
    BlzCreateItemWithSkin(FourCC("pghe"), -1923.3, 516.9, FourCC("pghe"))
    BlzCreateItemWithSkin(FourCC("pghe"), -1812.2, 440.9, FourCC("pghe"))
    BlzCreateItemWithSkin(FourCC("ratf"), -1341.4, 912.0, FourCC("ratf"))
    BlzCreateItemWithSkin(FourCC("ratf"), -1582.9, 1008.1, FourCC("ratf"))
    BlzCreateItemWithSkin(FourCC("ratf"), -1531.6, 1353.0, FourCC("ratf"))
end

function CreateBuildingsForPlayer0()
    local p = Player(0)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("hlum"), -1376.0, 1888.0, 270.000, FourCC("hlum"))
    u = BlzCreateUnitWithSkin(p, FourCC("hctw"), -1088.0, 1728.0, 270.000, FourCC("hctw"))
end

function CreateUnitsForPlayer0()
    local p = Player(0)
    local u
    local unitID
    local t
    local life
    gg_unit_Hpal_0000 = BlzCreateUnitWithSkin(p, FourCC("Hpal"), -1018.5, 1432.8, 271.821, FourCC("Hpal"))
    gg_unit_Hpal_0002 = BlzCreateUnitWithSkin(p, FourCC("Hpal"), -1328.1, 1359.8, 283.050, FourCC("Hpal"))
    SetHeroLevel(gg_unit_Hpal_0002, 10, false)
    SelectHeroSkill(gg_unit_Hpal_0002, FourCC("AHhb"))
    SelectHeroSkill(gg_unit_Hpal_0002, FourCC("AHds"))
    SelectHeroSkill(gg_unit_Hpal_0002, FourCC("AHad"))
    SelectHeroSkill(gg_unit_Hpal_0002, FourCC("AHre"))
    SelectHeroSkill(gg_unit_Hpal_0002, FourCC("ANab"))
    UnitAddItemToSlotById(gg_unit_Hpal_0002, FourCC("ckng"), 0)
    UnitAddItemToSlotById(gg_unit_Hpal_0002, FourCC("kygh"), 1)
    UnitAddItemToSlotById(gg_unit_Hpal_0002, FourCC("dphe"), 2)
    UnitAddItemToSlotById(gg_unit_Hpal_0002, FourCC("cnhn"), 3)
    UnitAddItemToSlotById(gg_unit_Hpal_0002, FourCC("fgbd"), 4)
    UnitAddItemToSlotById(gg_unit_Hpal_0002, FourCC("dphe"), 5)
    u = BlzCreateUnitWithSkin(p, FourCC("otau"), -1444.9, 1535.8, 267.020, FourCC("otau"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -1260.0, 1313.2, 124.841, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -1189.9, 1414.4, 312.263, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -1165.8, 1504.2, 129.939, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -1233.0, 1094.5, 305.385, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -1233.4, 1010.6, 25.676, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("otau"), -1588.0, 1531.0, 277.380, FourCC("otau"))
end

function CreateBuildingsForPlayer1()
    local p = Player(1)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("hbla"), -832.0, 1728.0, 270.000, FourCC("hbla"))
    u = BlzCreateUnitWithSkin(p, FourCC("hctw"), -1024.0, 2176.0, 270.000, FourCC("hctw"))
end

function CreateUnitsForPlayer1()
    local p = Player(1)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -1286.8, 689.0, 51.725, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -1124.9, 539.0, 272.239, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -953.4, 673.5, 327.677, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("Hamg"), -1310.0, 486.5, 193.618, FourCC("Hamg"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -1105.3, 675.9, 118.118, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -1198.6, 746.6, 180.412, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -1196.4, 881.2, 256.187, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -1179.4, 943.8, 34.201, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -895.1, 829.4, 327.106, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -820.6, 813.3, 132.642, FourCC("hrif"))
end

function CreateBuildingsForPlayer2()
    local p = Player(2)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("hkee"), 320.0, 0.0, 270.000, FourCC("hkee"))
    u = BlzCreateUnitWithSkin(p, FourCC("hatw"), 256.0, -640.0, 270.000, FourCC("hatw"))
end

function CreateUnitsForPlayer2()
    local p = Player(2)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), -20.1, -312.8, 17.711, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 196.3, -537.6, 220.612, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 390.1, -408.7, 49.473, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 437.5, -283.5, 323.678, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 203.9, -396.9, 261.999, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("Hpal"), 27.4, -521.0, 171.359, FourCC("Hpal"))
    u = BlzCreateUnitWithSkin(p, FourCC("Hmkg"), -73.5, -500.1, 209.219, FourCC("Hmkg"))
end

function CreatePlayerBuildings()
    CreateBuildingsForPlayer0()
    CreateBuildingsForPlayer1()
    CreateBuildingsForPlayer2()
end

function CreatePlayerUnits()
    CreateUnitsForPlayer0()
    CreateUnitsForPlayer1()
    CreateUnitsForPlayer2()
end

function CreateAllUnits()
    CreatePlayerBuildings()
    CreatePlayerUnits()
end

function Trig_Untitled_Trigger_001_Actions()
    GroupAddUnitSimple(gg_unit_Hpal_0002, udg_group)
    GroupAddUnitSimple(gg_unit_Hpal_0000, udg_group)
    SelectUnitForPlayerSingle(GetTriggerUnit(), Player(0))
end

function InitTrig_Untitled_Trigger_001()
    gg_trg_Untitled_Trigger_001 = CreateTrigger()
    TriggerAddAction(gg_trg_Untitled_Trigger_001, Trig_Untitled_Trigger_001_Actions)
end

function Trig_Untitled_Trigger_002_Func001A()
    AddHeroXPSwapped(75, GetEnumUnit(), false)
end

function Trig_Untitled_Trigger_002_Actions()
    ForGroupBJ(udg_group, Trig_Untitled_Trigger_002_Func001A)
end

function InitTrig_Untitled_Trigger_002()
    gg_trg_Untitled_Trigger_002 = CreateTrigger()
    TriggerRegisterPlayerChatEvent(gg_trg_Untitled_Trigger_002, Player(0), "-xp", true)
    TriggerAddAction(gg_trg_Untitled_Trigger_002, Trig_Untitled_Trigger_002_Actions)
end

function InitCustomTriggers()
    InitTrig_Untitled_Trigger_001()
    InitTrig_Untitled_Trigger_002()
end

function RunInitializationTriggers()
    ConditionalTriggerExecute(gg_trg_Untitled_Trigger_001)
end

function InitCustomPlayerSlots()
    SetPlayerStartLocation(Player(0), 0)
    SetPlayerColor(Player(0), ConvertPlayerColor(0))
    SetPlayerRacePreference(Player(0), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(0), true)
    SetPlayerController(Player(0), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(1), 1)
    SetPlayerColor(Player(1), ConvertPlayerColor(1))
    SetPlayerRacePreference(Player(1), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(1), true)
    SetPlayerController(Player(1), MAP_CONTROL_USER)
    SetPlayerStartLocation(Player(2), 2)
    SetPlayerColor(Player(2), ConvertPlayerColor(2))
    SetPlayerRacePreference(Player(2), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(2), true)
    SetPlayerController(Player(2), MAP_CONTROL_USER)
end

function InitCustomTeams()
    SetPlayerTeam(Player(0), 0)
    SetPlayerState(Player(0), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerTeam(Player(1), 0)
    SetPlayerState(Player(1), PLAYER_STATE_ALLIED_VICTORY, 1)
    SetPlayerAllianceStateAllyBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateAllyBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateVisionBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateVisionBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateControlBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateControlBJ(Player(1), Player(0), true)
    SetPlayerAllianceStateFullControlBJ(Player(0), Player(1), true)
    SetPlayerAllianceStateFullControlBJ(Player(1), Player(0), true)
    SetPlayerTeam(Player(2), 1)
    SetPlayerState(Player(2), PLAYER_STATE_ALLIED_VICTORY, 1)
end

function InitAllyPriorities()
    SetStartLocPrioCount(0, 2)
    SetStartLocPrio(0, 0, 1, MAP_LOC_PRIO_HIGH)
    SetStartLocPrio(0, 1, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(1, 1)
    SetStartLocPrio(1, 0, 2, MAP_LOC_PRIO_HIGH)
    SetStartLocPrioCount(2, 1)
    SetStartLocPrio(2, 0, 1, MAP_LOC_PRIO_HIGH)
end

function main()
    SetCameraBounds(-3328.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -3584.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 3328.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 3072.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -3328.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 3072.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 3328.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -3584.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
    SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
    NewSoundEnvironment("Default")
    SetAmbientDaySound("LordaeronSummerDay")
    SetAmbientNightSound("LordaeronSummerNight")
    SetMapMusic("Music", true, 0)
    CreateAllItems()
    CreateAllUnits()
    InitBlizzard()
    InitGlobals()
    InitCustomTriggers()
    RunInitializationTriggers()
end

function config()
    SetMapName("TRIGSTR_003")
    SetMapDescription("TRIGSTR_005")
    SetPlayers(3)
    SetTeams(3)
    SetGamePlacement(MAP_PLACEMENT_TEAMS_TOGETHER)
    DefineStartLocation(0, -1152.0, 1216.0)
    DefineStartLocation(1, -960.0, 1152.0)
    DefineStartLocation(2, 2304.0, -2496.0)
    InitCustomPlayerSlots()
    InitCustomTeams()
    InitAllyPriorities()
end

