globals
//globals from FrameLoader:
constant boolean LIBRARY_FrameLoader=true
trigger FrameLoader__eventTrigger= CreateTrigger()
trigger FrameLoader__actionTrigger= CreateTrigger()
timer FrameLoader__t= CreateTimer()
//endglobals from FrameLoader
//globals from CustomConsoleUI:
constant boolean LIBRARY_CustomConsoleUI=true
framehandle CustomConsoleUI__idleWorkerButton
framehandle CustomConsoleUI__idleWorkerButtonOverlay
framehandle CustomConsoleUI__idleWorkerButtonOverlayParent
framehandle CustomConsoleUI__customInventoryCover
framehandle CustomConsoleUI__customInventoryCoverParent
string array CustomConsoleUI_data
integer array CustomConsoleUI_dataCount
integer CustomConsoleUI__dataPageSize= 11
real array CustomConsoleUI_x
real array CustomConsoleUI_y
        // workerFace = true can only be used when you save the map in 1.32.6+
constant boolean CustomConsoleUI__workerFace= false
//endglobals from CustomConsoleUI
    // Generated
trigger gg_trg_Demo= null
trigger gg_trg_Demo_Message= null
trigger gg_trg_DemoFreeze_DayTime= null

trigger l__library_init

//JASSHelper struct globals:

endglobals


//library FrameLoader:
// in 1.31 and upto 1.32.9 PTR (when I wrote this). Frames are not correctly saved and loaded, breaking the game.
// This library runs all functions added to it with a 0s delay after the game was loaded.
// function FrameLoaderAdd takes code func returns nothing
    // func runs when the game is loaded.
    function FrameLoaderAdd takes code func returns nothing
        call TriggerAddAction(FrameLoader__actionTrigger, func)
    endfunction

    function FrameLoader__timerAction takes nothing returns nothing
        call TriggerExecute(FrameLoader__actionTrigger)
    endfunction
    function FrameLoader__eventAction takes nothing returns nothing
        call TimerStart(FrameLoader__t, 0, false, function FrameLoader__timerAction)
    endfunction
    function FrameLoader__init_function takes nothing returns nothing
        call TriggerRegisterGameEvent(FrameLoader__eventTrigger, EVENT_GAME_LOADED)
        call TriggerAddAction(FrameLoader__eventTrigger, function FrameLoader__eventAction)
    endfunction

//library FrameLoader ends
//library CustomConsoleUI:

// CustomConsoleUI by Tasyen
// CustomConsoleUI allows to change the UI during the game, when setuped correctly. This excludes the mouse cursor and the UI sounds.
// In non reforged it can also not change the Idle worker Button nor the no inventory cover.
// How to setup this: First you have to make the default Console Textures be hidden that is done in Game Interface.
//    Set ConsoleTexture01 to ConsoleTexture06 to UI\Widgets\EscMenu\Human\blank-background.blp
//    The Day of Time clock has hardcoded textures therefore you need to swap it out. That also should be done in Gameinterface.
//    TimeOfDayIndicator to the model included in this system.
//    Now export and Import war3mapImported\CustomConsoleUI.toc & war3mapImported\CustomConsoleUI.fdf
//    Finally you have to set the used textures into local data

    function AddCustomConsole takes integer index,string texture returns nothing
        set CustomConsoleUI_dataCount[index]=CustomConsoleUI_dataCount[index] + 1
        set CustomConsoleUI_data[index * CustomConsoleUI__dataPageSize + CustomConsoleUI_dataCount[index]]=texture
    endfunction

    function UseCustomConsole takes player p,integer index returns nothing
        local integer pageValue
        if GetLocalPlayer() != p then
            return
        endif
        if index < 1 then
            set index=GetHandleId(GetPlayerRace(p))
        endif
        set pageValue=index * CustomConsoleUI__dataPageSize
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI5T", 0), CustomConsoleUI_data[pageValue + 5], 0, false)
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI6T", 0), CustomConsoleUI_data[pageValue + 6], 0, false)
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI4T", 0), CustomConsoleUI_data[pageValue + 4], 0, false)
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI3T", 0), CustomConsoleUI_data[pageValue + 3], 0, false)
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI2TL", 0), CustomConsoleUI_data[pageValue + 2], 0, false)
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI2TR", 0), CustomConsoleUI_data[pageValue + 2], 0, false)
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI1T", 0), CustomConsoleUI_data[pageValue + 1], 0, false)

        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI1B", 0), CustomConsoleUI_data[pageValue + 1], 0, false)
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI2B", 0), CustomConsoleUI_data[pageValue + 2], 0, false)
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI3B", 0), CustomConsoleUI_data[pageValue + 3], 0, false)
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI4B", 0), CustomConsoleUI_data[pageValue + 4], 0, false)
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI5B", 0), CustomConsoleUI_data[pageValue + 5], 0, false)
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUI6B", 0), CustomConsoleUI_data[pageValue + 6], 0, false)
    
        call BlzFrameSetTexture(BlzGetFrameByName("CustomConsoleUIClock", 0), CustomConsoleUI_data[pageValue + 7], 0, true)
        if GetLocalizedString("REFORGED") != "REFORGED" then
            call BlzFrameSetTexture(BlzGetFrameByName("InventoryCoverTexture", 0), CustomConsoleUI_data[pageValue + 8], 0, true)



        else
            call BlzFrameSetTexture(CustomConsoleUI__customInventoryCover, CustomConsoleUI_data[pageValue + 8], 0, true)
        endif
        call BlzFrameSetPoint(BlzGetFrameByName("CustomConsoleUIClock", 0), FRAMEPOINT_TOP, BlzGetFrameByName("ConsoleUI", 0), FRAMEPOINT_TOP, CustomConsoleUI_x[index], CustomConsoleUI_y[index])
    endfunction

    function CreateCustomConsole takes nothing returns nothing
        call BlzLoadTOCFile("war3mapimported\\CustomConsoleUI.toc")
        
        call BlzCreateSimpleFrame("CustomConsoleUI", BlzGetFrameByName("ConsoleUI", 0), 0)
        
        if GetLocalizedString("REFORGED") != "REFORGED" then
            // Requires a native existing only in Reforged







        else
            set CustomConsoleUI__customInventoryCoverParent=BlzCreateSimpleFrame("SimpleTextureFrame", BlzGetFrameByName("ConsoleUI", 0), 0)
            call BlzFrameSetLevel(CustomConsoleUI__customInventoryCoverParent, 4)
            set CustomConsoleUI__customInventoryCover=BlzGetFrameByName("SimpleTextureFrameValue", 0)
            call BlzFrameSetAbsPoint(CustomConsoleUI__customInventoryCover, FRAMEPOINT_BOTTOMRIGHT, 0.6, 0)
            call BlzFrameSetAbsPoint(CustomConsoleUI__customInventoryCover, FRAMEPOINT_TOPLEFT, 0.6 - 0.128, 0.2558)
        endif

        // Preload
        call BlzGetOriginFrame(ORIGIN_FRAME_ITEM_BUTTON, 0)
        call BlzGetFrameByName("InventoryCoverTexture", 0)
        call BlzGetFrameByName("CustomConsoleUIClock", 0)
        call BlzGetFrameByName("CustomConsoleUI5T", 0)
        call BlzGetFrameByName("CustomConsoleUI6T", 0)
        call BlzGetFrameByName("CustomConsoleUI4T", 0)
        call BlzGetFrameByName("CustomConsoleUI3T", 0)
        call BlzGetFrameByName("CustomConsoleUI2TL", 0)
        call BlzGetFrameByName("CustomConsoleUI2TR", 0)
        call BlzGetFrameByName("CustomConsoleUI1T", 0)
        call BlzGetFrameByName("CustomConsoleUI1B", 0)
        call BlzGetFrameByName("CustomConsoleUI2B", 0)
        call BlzGetFrameByName("CustomConsoleUI3B", 0)
        call BlzGetFrameByName("CustomConsoleUI4B", 0)
        call BlzGetFrameByName("CustomConsoleUI5B", 0)
        call BlzGetFrameByName("CustomConsoleUI6B", 0)
    endfunction
    function CustomConsoleUI__Init takes nothing returns nothing
        call CreateCustomConsole()
        call UseCustomConsole(GetLocalPlayer() , 0)
    endfunction
    function CustomConsoleUI__at0s takes nothing returns nothing
        call CustomConsoleUI__Init()
        call DestroyTimer(GetExpiredTimer())
    endfunction
    function CustomConsoleUI__update takes nothing returns nothing
        call BlzFrameSetVisible(CustomConsoleUI__customInventoryCoverParent, not BlzFrameIsVisible(BlzGetOriginFrame(ORIGIN_FRAME_ITEM_BUTTON, 0)))
    endfunction

    function CustomConsoleUI__init_function takes nothing returns nothing
        local integer index= 0
        set index=GetHandleId(RACE_HUMAN)
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile01")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile02")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile03")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile04")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile05")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile06")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile-timeindicatorframe")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile-inventorycover")
        call AddCustomConsole(index , "ReplaceableTextures\\CommandButtons\\BTNPeasant")
        // offset this mostly is used to fit to the glowing orbs showing the houers
        set CustomConsoleUI_x[index]=0.0009
        set CustomConsoleUI_y[index]=0.0

        set index=GetHandleId(RACE_ORC)
        call AddCustomConsole(index , "ui\\console\\orc\\orcuitile01")
        call AddCustomConsole(index , "ui\\console\\orc\\orcuitile02")
        call AddCustomConsole(index , "ui\\console\\orc\\orcuitile03")
        call AddCustomConsole(index , "ui\\console\\orc\\orcuitile04")
        call AddCustomConsole(index , "ui\\console\\orc\\orcuitile05")
        call AddCustomConsole(index , "ui\\console\\orc\\orcuitile06")
        call AddCustomConsole(index , "ui\\console\\orc\\orcuitile-timeindicatorframe")
        call AddCustomConsole(index , "ui\\console\\orc\\orcuitile-inventorycover")
        call AddCustomConsole(index , "ReplaceableTextures\\CommandButtons\\BTNPeon")
        set CustomConsoleUI_x[index]=0.0004
        set CustomConsoleUI_y[index]=0.0

        set index=GetHandleId(RACE_UNDEAD)
        call AddCustomConsole(index , "ui\\console\\undead\\undeaduitile01")
        call AddCustomConsole(index , "ui\\console\\undead\\undeaduitile02")
        call AddCustomConsole(index , "ui\\console\\undead\\undeaduitile03")
        call AddCustomConsole(index , "ui\\console\\undead\\undeaduitile04")
        call AddCustomConsole(index , "ui\\console\\undead\\undeaduitile05")
        call AddCustomConsole(index , "ui\\console\\undead\\undeaduitile06")
        call AddCustomConsole(index , "ui\\console\\undead\\undeaduitile-timeindicatorframe")
        call AddCustomConsole(index , "ui\\console\\undead\\undeaduitile-inventorycover")
        call AddCustomConsole(index , "ReplaceableTextures\\CommandButtons\\BTNAcolyte")
        set CustomConsoleUI_x[index]=0.0009
        set CustomConsoleUI_y[index]=0.0

        set index=GetHandleId(RACE_NIGHTELF)
        call AddCustomConsole(index , "ui\\console\\nightelf\\nightelfuitile01")
        call AddCustomConsole(index , "ui\\console\\nightelf\\nightelfuitile02")
        call AddCustomConsole(index , "ui\\console\\nightelf\\nightelfuitile03")
        call AddCustomConsole(index , "ui\\console\\nightelf\\nightelfuitile04")
        call AddCustomConsole(index , "ui\\console\\nightelf\\nightelfuitile05")
        call AddCustomConsole(index , "ui\\console\\nightelf\\nightelfuitile06")
        call AddCustomConsole(index , "ui\\console\\nightelf\\nightelfuitile-timeindicatorframe")
        call AddCustomConsole(index , "ui\\console\\nightelf\\nightelfuitile-inventorycover")
        call AddCustomConsole(index , "ReplaceableTextures\\CommandButtons\\BTNWisp")
        set CustomConsoleUI_x[index]=0.0009
        set CustomConsoleUI_y[index]=0.0

        set index=GetHandleId(RACE_DEMON)
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile01")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile02")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile03")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile04")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile05")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile06")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile-timeindicatorframe")
        call AddCustomConsole(index , "ui\\console\\human\\humanuitile-inventorycover")
        call AddCustomConsole(index , "ReplaceableTextures\\CommandButtons\\BTNPeasant")
        set CustomConsoleUI_x[index]=0.000
        set CustomConsoleUI_y[index]=0.0
        if GetLocalizedString("REFORGED") == "REFORGED" then
            call TimerStart(CreateTimer(), 1 / 32.0, true, function CustomConsoleUI__update)
        endif
        call TimerStart(CreateTimer(), 0, false, function CustomConsoleUI__at0s)

            call TriggerAddAction(FrameLoader__actionTrigger, (function CustomConsoleUI__Init)) // INLINED!!

    endfunction

//library CustomConsoleUI ends
//===========================================================================
// 
// CustomConsoleUI
// 
//   Warcraft III map script
//   Generated by the Warcraft III World Editor
//   Map Author: Tasyen
// 
//===========================================================================

//***************************************************************************
//*
//*  Global Variables
//*
//***************************************************************************


function InitGlobals takes nothing returns nothing
endfunction

//***************************************************************************
//*
//*  Custom Script Code
//*
//***************************************************************************
//***************************************************************************
//*  FrameLoader vjass

//***************************************************************************
//*  CustomConsoleUI vjass


//***************************************************************************
//*
//*  Items
//*
//***************************************************************************

function CreateAllItems takes nothing returns nothing
    local integer itemID

    call BlzCreateItemWithSkin('desc', 569.4, 20.4, 'desc')
    call BlzCreateItemWithSkin('ratf', 528.5, - 267.5, 'ratf')
endfunction

//***************************************************************************
//*
//*  Unit Creation
//*
//***************************************************************************

//===========================================================================
function CreateUnitsForPlayer0 takes nothing returns nothing
    local player p= Player(0)
    local unit u
    local integer unitID
    local trigger t
    local real life

    set u=BlzCreateUnitWithSkin(p, 'Udre', 190.4, - 198.6, 5.449, 'Udre')
    set u=BlzCreateUnitWithSkin(p, 'Ucrl', - 6.3, 5.1, 347.827, 'Ucrl')
    set u=BlzCreateUnitWithSkin(p, 'hpea', 210.4, 113.9, 108.757, 'hpea')
    set u=BlzCreateUnitWithSkin(p, 'hpea', 314.0, 146.1, 10.262, 'hpea')
    set u=BlzCreateUnitWithSkin(p, 'hpea', 509.5, 136.9, 266.756, 'hpea')
    set u=BlzCreateUnitWithSkin(p, 'hpea', 500.2, 47.2, 334.906, 'hpea')
endfunction

//===========================================================================
function CreateBuildingsForPlayer1 takes nothing returns nothing
    local player p= Player(1)
    local unit u
    local integer unitID
    local trigger t
    local real life

    set u=BlzCreateUnitWithSkin(p, 'ogre', 1600.0, 1728.0, 270.000, 'ogre')
    set u=BlzCreateUnitWithSkin(p, 'ofor', 2016.0, 1184.0, 270.000, 'ofor')
endfunction

//===========================================================================
function CreateUnitsForPlayer1 takes nothing returns nothing
    local player p= Player(1)
    local unit u
    local integer unitID
    local trigger t
    local real life

    set u=BlzCreateUnitWithSkin(p, 'Obla', 2015.5, 1501.3, 176.611, 'Obla')
    set u=BlzCreateUnitWithSkin(p, 'ogru', 1365.3, 1469.9, 317.053, 'ogru')
    set u=BlzCreateUnitWithSkin(p, 'ogru', 1396.4, 1407.5, 123.963, 'ogru')
    set u=BlzCreateUnitWithSkin(p, 'ogru', 1541.0, 1298.2, 145.672, 'ogru')
    set u=BlzCreateUnitWithSkin(p, 'ogru', 1598.3, 1250.3, 63.030, 'ogru')
    set u=BlzCreateUnitWithSkin(p, 'ogru', 1735.5, 1159.8, 179.324, 'ogru')
endfunction

//===========================================================================
function CreatePlayerBuildings takes nothing returns nothing
    call CreateBuildingsForPlayer1()
endfunction

//===========================================================================
function CreatePlayerUnits takes nothing returns nothing
    call CreateUnitsForPlayer0()
    call CreateUnitsForPlayer1()
endfunction

//===========================================================================
function CreateAllUnits takes nothing returns nothing
    call CreateBuildingsForPlayer1() // INLINED!!
    call CreatePlayerUnits()
endfunction

//***************************************************************************
//*
//*  Triggers
//*
//***************************************************************************

//===========================================================================
// Trigger: Demo
//===========================================================================
function Trig_Demo_Func001C takes nothing returns boolean
    if ( not ( StringCase(GetEventPlayerChatString(), false) == "human" ) ) then
        return false
    endif
    return true
endfunction

function Trig_Demo_Func002C takes nothing returns boolean
    if ( not ( StringCase(GetEventPlayerChatString(), false) == "orc" ) ) then
        return false
    endif
    return true
endfunction

function Trig_Demo_Func003C takes nothing returns boolean
    if ( not ( StringCase(GetEventPlayerChatString(), false) == "undead" ) ) then
        return false
    endif
    return true
endfunction

function Trig_Demo_Func004C takes nothing returns boolean
    if ( not ( StringCase(GetEventPlayerChatString(), false) == "nightelf" ) ) then
        return false
    endif
    return true
endfunction

function Trig_Demo_Actions takes nothing returns nothing
    if ( Trig_Demo_Func001C() ) then
        call UseCustomConsole(GetTriggerPlayer() , 1)
    else
    endif
    if ( Trig_Demo_Func002C() ) then
        call UseCustomConsole(GetTriggerPlayer() , 2)
    else
    endif
    if ( Trig_Demo_Func003C() ) then
        call UseCustomConsole(GetTriggerPlayer() , 3)
    else
    endif
    if ( Trig_Demo_Func004C() ) then
        call UseCustomConsole(GetTriggerPlayer() , 4)
    else
    endif
endfunction

//===========================================================================
function InitTrig_Demo takes nothing returns nothing
    set gg_trg_Demo=CreateTrigger()
    call TriggerRegisterPlayerChatEvent(gg_trg_Demo, Player(0), "", false)
    call TriggerRegisterPlayerChatEvent(gg_trg_Demo, Player(1), "", false)
    call TriggerAddAction(gg_trg_Demo, function Trig_Demo_Actions)
endfunction

//===========================================================================
// Trigger: Demo Message
//===========================================================================
function Trig_Demo_Message_Actions takes nothing returns nothing
    call DisplayTimedTextToForce(GetPlayersAll(), 30, "TRIGSTR_008")
endfunction

//===========================================================================
function InitTrig_Demo_Message takes nothing returns nothing
    set gg_trg_Demo_Message=CreateTrigger()
    call TriggerRegisterTimerEventSingle(gg_trg_Demo_Message, 0.00)
    call TriggerAddAction(gg_trg_Demo_Message, function Trig_Demo_Message_Actions)
endfunction

//===========================================================================
function InitCustomTriggers takes nothing returns nothing
    call InitTrig_Demo()
    call InitTrig_Demo_Message()
endfunction

//***************************************************************************
//*
//*  Players
//*
//***************************************************************************

function InitCustomPlayerSlots takes nothing returns nothing

    // Player 0
    call SetPlayerStartLocation(Player(0), 0)
    call SetPlayerColor(Player(0), ConvertPlayerColor(0))
    call SetPlayerRacePreference(Player(0), RACE_PREF_UNDEAD)
    call SetPlayerRaceSelectable(Player(0), true)
    call SetPlayerController(Player(0), MAP_CONTROL_USER)

    // Player 1
    call SetPlayerStartLocation(Player(1), 1)
    call SetPlayerColor(Player(1), ConvertPlayerColor(1))
    call SetPlayerRacePreference(Player(1), RACE_PREF_ORC)
    call SetPlayerRaceSelectable(Player(1), true)
    call SetPlayerController(Player(1), MAP_CONTROL_USER)

endfunction

function InitCustomTeams takes nothing returns nothing
    // Force: TRIGSTR_002
    call SetPlayerTeam(Player(0), 0)
    call SetPlayerTeam(Player(1), 0)

endfunction

function InitAllyPriorities takes nothing returns nothing

    call SetStartLocPrioCount(0, 1)
    call SetStartLocPrio(0, 0, 1, MAP_LOC_PRIO_HIGH)

    call SetStartLocPrioCount(1, 1)
    call SetStartLocPrio(1, 0, 0, MAP_LOC_PRIO_HIGH)
endfunction

//***************************************************************************
//*
//*  Main Initialization
//*
//***************************************************************************

//===========================================================================
function main takes nothing returns nothing
    call SetCameraBounds(- 256.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), - 512.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 2304.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 2048.0 - GetCameraMargin(CAMERA_MARGIN_TOP), - 256.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 2048.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 2304.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), - 512.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
    call SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
    call NewSoundEnvironment("Default")
    call SetAmbientDaySound("LordaeronSummerDay")
    call SetAmbientNightSound("LordaeronSummerNight")
    call SetMapMusic("Music", true, 0)
    call CreateAllItems()
    call CreateAllUnits()
    call InitBlizzard()

call ExecuteFunc("FrameLoader__init_function")
call ExecuteFunc("CustomConsoleUI__init_function")

    call InitGlobals()
    call InitCustomTriggers()

endfunction

//***************************************************************************
//*
//*  Map Configuration
//*
//***************************************************************************

function config takes nothing returns nothing
    call SetMapName("TRIGSTR_003")
    call SetMapDescription("TRIGSTR_005")
    call SetPlayers(2)
    call SetTeams(2)
    call SetGamePlacement(MAP_PLACEMENT_TEAMS_TOGETHER)

    call DefineStartLocation(0, 192.0, - 192.0)
    call DefineStartLocation(1, 1728.0, 1472.0)

    // Player setup
    call InitCustomPlayerSlots()
    call SetPlayerSlotAvailable(Player(0), MAP_CONTROL_USER)
    call SetPlayerSlotAvailable(Player(1), MAP_CONTROL_USER)
    call InitGenericPlayerSlots()
    call InitAllyPriorities()
endfunction




//Struct method generated initializers/callers:

