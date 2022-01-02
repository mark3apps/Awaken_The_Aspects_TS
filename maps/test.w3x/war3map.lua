udg_unit = nil
udg_group = nil
gg_trg_Untitled_Trigger_001 = nil
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
    BlzCreateItemWithSkin(FourCC("ckng"), -1414.0, 787.6, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("ratf"), -1582.9, 1008.1, FourCC("ratf"))
    BlzCreateItemWithSkin(FourCC("ratf"), -1531.6, 1353.0, FourCC("ratf"))
    BlzCreateItemWithSkin(FourCC("ratf"), -1341.4, 912.0, FourCC("ratf"))
end

function CreateUnitsForPlayer0()
    local p = Player(0)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("Hpal"), 57.0, -8.7, 271.821, FourCC("Hpal"))
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
end

function CreatePlayerBuildings()
end

function CreatePlayerUnits()
    CreateUnitsForPlayer0()
end

function CreateAllUnits()
    CreatePlayerBuildings()
    CreatePlayerUnits()
end

function Trig_Untitled_Trigger_001_Actions()
    GroupAddUnitSimple(gg_unit_Hpal_0002, udg_group)
    SelectUnitForPlayerSingle(GetTriggerUnit(), Player(0))
end

function InitTrig_Untitled_Trigger_001()
    gg_trg_Untitled_Trigger_001 = CreateTrigger()
    TriggerAddAction(gg_trg_Untitled_Trigger_001, Trig_Untitled_Trigger_001_Actions)
end

function InitCustomTriggers()
    InitTrig_Untitled_Trigger_001()
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
end

function InitCustomTeams()
    SetPlayerTeam(Player(0), 0)
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
    SetPlayers(1)
    SetTeams(1)
    SetGamePlacement(MAP_PLACEMENT_USE_MAP_SETTINGS)
    DefineStartLocation(0, -1664.0, 1408.0)
    InitCustomPlayerSlots()
    SetPlayerSlotAvailable(Player(0), MAP_CONTROL_USER)
    InitGenericPlayerSlots()
end

