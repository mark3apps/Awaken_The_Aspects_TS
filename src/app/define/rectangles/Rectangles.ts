/** @format */

import { Rectangle } from '../../../lib/w3ts/handles/rect'

export class Rectangles {
  protected static instance: Rectangles

  static getInstance() {
    if (!Rectangles.instance) Rectangles.instance = new Rectangles()
    return Rectangles.instance
  }

  /// AUTO DEFINE
  Left_Start: Rectangle
  Left_Hero: Rectangle
  Camp_Top: Rectangle
  Left_Tree: Rectangle
  Left_Workshop: Rectangle
  Left_Arcane: Rectangle
  Right_Hero: Rectangle
  Right_Start: Rectangle
  Right_Tree: Rectangle
  Right_Arcane: Rectangle
  Right_Workshop: Rectangle
  Camp_Bottom: Rectangle
  Left_Orc: Rectangle
  Right_Orc: Rectangle
  Draenei_Left: Rectangle
  Draenei_Right: Rectangle
  Left_Start_Bottom: Rectangle
  Left_Start_Top: Rectangle
  Right_Start_Top: Rectangle
  Big_Bottom_Left: Rectangle
  Big_Middle_Left: Rectangle
  Big_Top_Left: Rectangle
  Left_Castle: Rectangle
  Left_City: Rectangle
  Right_City: Rectangle
  Right_Castle: Rectangle
  Left_High_Elves: Rectangle
  Left_Shipyard: Rectangle
  Right_Shipyard: Rectangle
  Right_Start_Bottom: Rectangle
  Right_High_Elves: Rectangle
  Naga_Right: Rectangle
  Naga_Left: Rectangle
  Murloc_Left: Rectangle
  Murloc_Right: Rectangle
  Left_Elemental_Start: Rectangle
  Front_Town_Left: Rectangle
  City_Elves_Left: Rectangle
  Blacksmith_Left: Rectangle
  Front_City_Right: Rectangle
  City_Elves_Right: Rectangle
  Blacksmith_Right: Rectangle
  Arcane_Hero_Right: Rectangle
  Arcane_Hero_Left: Rectangle
  Murloc_Gate_Left: Rectangle
  Murloc_Gate_Right: Rectangle
  Big_Top_Right: Rectangle
  Big_Middle_Right: Rectangle
  Big_Bottom_Right: Rectangle
  Big_Bottom_Left_Center: Rectangle
  Big_Bottom_Right_Center: Rectangle
  Big_Top_Right_Center: Rectangle
  Big_Top_Left_Center: Rectangle
  Big_Middle_Right_Center: Rectangle
  Aspect_of_Forest_Left: Rectangle
  Aspect_of_Forest_Left_Gate: Rectangle
  Aspect_of_Forest_Right_Gate: Rectangle
  Arcane_Left_Top: Rectangle
  Arcane_Left_Bottom: Rectangle
  Arcane_Right_Top: Rectangle
  Arcane_Right_Bottom: Rectangle
  Zombie_End_Left: Rectangle
  Zombie_End_Right: Rectangle
  Death_Gate_Left: Rectangle
  Death_Gate_Right: Rectangle
  Elf_Base_Right: Rectangle
  Elf_Base_Left: Rectangle
  Undead_Right: Rectangle
  Undead_Left: Rectangle
  Human_Shipyard_Left: Rectangle
  Human_Shipyard_Right: Rectangle
  Right_Everything: Rectangle
  Left_Everything: Rectangle
  Left_Mage_Base: Rectangle
  Right_Mage_Base: Rectangle
  Murloc_Spawn_Left: Rectangle
  Murloc_Spawn_Right: Rectangle
  Right_Start_Middle: Rectangle
  Aspect_of_Forest_Left_Mid: Rectangle
  Aspect_of_Forest_Right_Mid: Rectangle
  Aspect_of_Forest_Right: Rectangle
  Right_Elemental_Start: Rectangle
  Left_Start_Middle: Rectangle
  Big_Middle_Left_Center: Rectangle
  Night_Elf_Left: Rectangle
  Night_Elf_Right: Rectangle
  Rock_Left: Rectangle
  Rock_Right: Rectangle
  Rock_Gate_Right: Rectangle
  Rock_Gate_Left: Rectangle
  EventTL1: Rectangle
  EventTL2: Rectangle
  EventTL3: Rectangle
  EventBL1: Rectangle
  EventBL2: Rectangle
  EventBL3: Rectangle
  EventBR1: Rectangle
  EventBR2: Rectangle
  EventBR3: Rectangle
  EventTR1: Rectangle
  EventTR2: Rectangle
  EventTR3: Rectangle
  EventCenter: Rectangle
  wildhammerLeft: Rectangle
  wildhammerRight: Rectangle
  HumanShipyardTownLeft: Rectangle
  HumanShipyardTownRight: Rectangle
  ArcaneBottomTownRight: Rectangle
  ArcaneTopTownLeft: Rectangle
  ArcaneBottomTownLeft: Rectangle
  ArcaneTopTownRight: Rectangle
  WildhammerTownRight: Rectangle
  WildhammerTownLeft: Rectangle
  UndeadTownLeft: Rectangle
  UndeadTownRight: Rectangle
  ArcaneHeroTownRight: Rectangle
  ArcaneHeroTownLeft: Rectangle
  BackCityTownLeft: Rectangle
  BackCityTownRight: Rectangle
  ElfShipyardTownRight: Rectangle
  ElfShipyardTownLeft: Rectangle
  MercTownRight: Rectangle
  MercTownLeft: Rectangle
  DraeneiTownRight: Rectangle
  DraeneiTownLeft: Rectangle
  HighElfTownLeft: Rectangle
  HighElfTownRight: Rectangle
  NagaTownRight: Rectangle
  NagaTownLeft: Rectangle
  MurlocTownLeft: Rectangle
  MurlocTownRight: Rectangle
  OrcTownRight: Rectangle
  OrcTownLeft: Rectangle
  DwarfTownLeft: Rectangle
  DwarfTownRight: Rectangle

  private constructor() {
    this.Left_Start = Rectangle.fromHandle(gg_rct_Left_Start)
    this.Left_Hero = Rectangle.fromHandle(gg_rct_Left_Hero)
    this.Camp_Top = Rectangle.fromHandle(gg_rct_Camp_Top)
    this.Left_Tree = Rectangle.fromHandle(gg_rct_Left_Tree)
    this.Left_Workshop = Rectangle.fromHandle(gg_rct_Left_Workshop)
    this.Left_Arcane = Rectangle.fromHandle(gg_rct_Left_Arcane)
    this.Right_Hero = Rectangle.fromHandle(gg_rct_Right_Hero)
    this.Right_Start = Rectangle.fromHandle(gg_rct_Right_Start)
    this.Right_Tree = Rectangle.fromHandle(gg_rct_Right_Tree)
    this.Right_Arcane = Rectangle.fromHandle(gg_rct_Right_Arcane)
    this.Right_Workshop = Rectangle.fromHandle(gg_rct_Right_Workshop)
    this.Camp_Bottom = Rectangle.fromHandle(gg_rct_Camp_Bottom)
    this.Left_Orc = Rectangle.fromHandle(gg_rct_Left_Orc)
    this.Right_Orc = Rectangle.fromHandle(gg_rct_Right_Orc)
    this.Draenei_Left = Rectangle.fromHandle(gg_rct_Draenei_Left)
    this.Draenei_Right = Rectangle.fromHandle(gg_rct_Draenei_Right)
    this.Left_Start_Bottom = Rectangle.fromHandle(gg_rct_Left_Start_Bottom)
    this.Left_Start_Top = Rectangle.fromHandle(gg_rct_Left_Start_Top)
    this.Right_Start_Top = Rectangle.fromHandle(gg_rct_Right_Start_Top)
    this.Big_Bottom_Left = Rectangle.fromHandle(gg_rct_Big_Bottom_Left)
    this.Big_Middle_Left = Rectangle.fromHandle(gg_rct_Big_Middle_Left)
    this.Big_Top_Left = Rectangle.fromHandle(gg_rct_Big_Top_Left)
    this.Left_Castle = Rectangle.fromHandle(gg_rct_Left_Castle)
    this.Left_City = Rectangle.fromHandle(gg_rct_Left_City)
    this.Right_City = Rectangle.fromHandle(gg_rct_Right_City)
    this.Right_Castle = Rectangle.fromHandle(gg_rct_Right_Castle)
    this.Left_High_Elves = Rectangle.fromHandle(gg_rct_Left_High_Elves)
    this.Left_Shipyard = Rectangle.fromHandle(gg_rct_Left_Shipyard)
    this.Right_Shipyard = Rectangle.fromHandle(gg_rct_Right_Shipyard)
    this.Right_Start_Bottom = Rectangle.fromHandle(gg_rct_Right_Start_Bottom)
    this.Right_High_Elves = Rectangle.fromHandle(gg_rct_Right_High_Elves)
    this.Naga_Right = Rectangle.fromHandle(gg_rct_Naga_Right)
    this.Naga_Left = Rectangle.fromHandle(gg_rct_Naga_Left)
    this.Murloc_Left = Rectangle.fromHandle(gg_rct_Murloc_Left)
    this.Murloc_Right = Rectangle.fromHandle(gg_rct_Murloc_Right)
    this.Left_Elemental_Start = Rectangle.fromHandle(gg_rct_Left_Elemental_Start)
    this.Front_Town_Left = Rectangle.fromHandle(gg_rct_Front_Town_Left)
    this.City_Elves_Left = Rectangle.fromHandle(gg_rct_City_Elves_Left)
    this.Blacksmith_Left = Rectangle.fromHandle(gg_rct_Blacksmith_Left)
    this.Front_City_Right = Rectangle.fromHandle(gg_rct_Front_City_Right)
    this.City_Elves_Right = Rectangle.fromHandle(gg_rct_City_Elves_Right)
    this.Blacksmith_Right = Rectangle.fromHandle(gg_rct_Blacksmith_Right)
    this.Arcane_Hero_Right = Rectangle.fromHandle(gg_rct_Arcane_Hero_Right)
    this.Arcane_Hero_Left = Rectangle.fromHandle(gg_rct_Arcane_Hero_Left)
    this.Murloc_Gate_Left = Rectangle.fromHandle(gg_rct_Murloc_Gate_Left)
    this.Murloc_Gate_Right = Rectangle.fromHandle(gg_rct_Murloc_Gate_Right)
    this.Big_Top_Right = Rectangle.fromHandle(gg_rct_Big_Top_Right)
    this.Big_Middle_Right = Rectangle.fromHandle(gg_rct_Big_Middle_Right)
    this.Big_Bottom_Right = Rectangle.fromHandle(gg_rct_Big_Bottom_Right)
    this.Big_Bottom_Left_Center = Rectangle.fromHandle(gg_rct_Big_Bottom_Left_Center)
    this.Big_Bottom_Right_Center = Rectangle.fromHandle(gg_rct_Big_Bottom_Right_Center)
    this.Big_Top_Right_Center = Rectangle.fromHandle(gg_rct_Big_Top_Right_Center)
    this.Big_Top_Left_Center = Rectangle.fromHandle(gg_rct_Big_Top_Left_Center)
    this.Big_Middle_Right_Center = Rectangle.fromHandle(gg_rct_Big_Middle_Right_Center)
    this.Aspect_of_Forest_Left = Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left)
    this.Aspect_of_Forest_Left_Gate = Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left_Gate)
    this.Aspect_of_Forest_Right_Gate = Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right_Gate)
    this.Arcane_Left_Top = Rectangle.fromHandle(gg_rct_Arcane_Left_Top)
    this.Arcane_Left_Bottom = Rectangle.fromHandle(gg_rct_Arcane_Left_Bottom)
    this.Arcane_Right_Top = Rectangle.fromHandle(gg_rct_Arcane_Right_Top)
    this.Arcane_Right_Bottom = Rectangle.fromHandle(gg_rct_Arcane_Right_Bottom)
    this.Zombie_End_Left = Rectangle.fromHandle(gg_rct_Zombie_End_Left)
    this.Zombie_End_Right = Rectangle.fromHandle(gg_rct_Zombie_End_Right)
    this.Death_Gate_Left = Rectangle.fromHandle(gg_rct_Death_Gate_Left)
    this.Death_Gate_Right = Rectangle.fromHandle(gg_rct_Death_Gate_Right)
    this.Elf_Base_Right = Rectangle.fromHandle(gg_rct_Elf_Base_Right)
    this.Elf_Base_Left = Rectangle.fromHandle(gg_rct_Elf_Base_Left)
    this.Undead_Right = Rectangle.fromHandle(gg_rct_Undead_Right)
    this.Undead_Left = Rectangle.fromHandle(gg_rct_Undead_Left)
    this.Human_Shipyard_Left = Rectangle.fromHandle(gg_rct_Human_Shipyard_Left)
    this.Human_Shipyard_Right = Rectangle.fromHandle(gg_rct_Human_Shipyard_Right)
    this.Right_Everything = Rectangle.fromHandle(gg_rct_Right_Everything)
    this.Left_Everything = Rectangle.fromHandle(gg_rct_Left_Everything)
    this.Left_Mage_Base = Rectangle.fromHandle(gg_rct_Left_Mage_Base)
    this.Right_Mage_Base = Rectangle.fromHandle(gg_rct_Right_Mage_Base)
    this.Murloc_Spawn_Left = Rectangle.fromHandle(gg_rct_Murloc_Spawn_Left)
    this.Murloc_Spawn_Right = Rectangle.fromHandle(gg_rct_Murloc_Spawn_Right)
    this.Right_Start_Middle = Rectangle.fromHandle(gg_rct_Right_Start_Middle)
    this.Aspect_of_Forest_Left_Mid = Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left_Mid)
    this.Aspect_of_Forest_Right_Mid = Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right_Mid)
    this.Aspect_of_Forest_Right = Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right)
    this.Right_Elemental_Start = Rectangle.fromHandle(gg_rct_Right_Elemental_Start)
    this.Left_Start_Middle = Rectangle.fromHandle(gg_rct_Left_Start_Middle)
    this.Big_Middle_Left_Center = Rectangle.fromHandle(gg_rct_Big_Middle_Left_Center)
    this.Night_Elf_Left = Rectangle.fromHandle(gg_rct_Night_Elf_Left)
    this.Night_Elf_Right = Rectangle.fromHandle(gg_rct_Night_Elf_Right)
    this.Rock_Left = Rectangle.fromHandle(gg_rct_Rock_Left)
    this.Rock_Right = Rectangle.fromHandle(gg_rct_Rock_Right)
    this.Rock_Gate_Right = Rectangle.fromHandle(gg_rct_Rock_Gate_Right)
    this.Rock_Gate_Left = Rectangle.fromHandle(gg_rct_Rock_Gate_Left)
    this.EventTL1 = Rectangle.fromHandle(gg_rct_EventTL1)
    this.EventTL2 = Rectangle.fromHandle(gg_rct_EventTL2)
    this.EventTL3 = Rectangle.fromHandle(gg_rct_EventTL3)
    this.EventBL1 = Rectangle.fromHandle(gg_rct_EventBL1)
    this.EventBL2 = Rectangle.fromHandle(gg_rct_EventBL2)
    this.EventBL3 = Rectangle.fromHandle(gg_rct_EventBL3)
    this.EventBR1 = Rectangle.fromHandle(gg_rct_EventBR1)
    this.EventBR2 = Rectangle.fromHandle(gg_rct_EventBR2)
    this.EventBR3 = Rectangle.fromHandle(gg_rct_EventBR3)
    this.EventTR1 = Rectangle.fromHandle(gg_rct_EventTR1)
    this.EventTR2 = Rectangle.fromHandle(gg_rct_EventTR2)
    this.EventTR3 = Rectangle.fromHandle(gg_rct_EventTR3)
    this.EventCenter = Rectangle.fromHandle(gg_rct_EventCenter)
    this.wildhammerLeft = Rectangle.fromHandle(gg_rct_wildhammerLeft)
    this.wildhammerRight = Rectangle.fromHandle(gg_rct_wildhammerRight)
    this.HumanShipyardTownLeft = Rectangle.fromHandle(gg_rct_HumanShipyardTownLeft)
    this.HumanShipyardTownRight = Rectangle.fromHandle(gg_rct_HumanShipyardTownRight)
    this.ArcaneBottomTownRight = Rectangle.fromHandle(gg_rct_ArcaneBottomTownRight)
    this.ArcaneTopTownLeft = Rectangle.fromHandle(gg_rct_ArcaneTopTownLeft)
    this.ArcaneBottomTownLeft = Rectangle.fromHandle(gg_rct_ArcaneBottomTownLeft)
    this.ArcaneTopTownRight = Rectangle.fromHandle(gg_rct_ArcaneTopTownRight)
    this.WildhammerTownRight = Rectangle.fromHandle(gg_rct_WildhammerTownRight)
    this.WildhammerTownLeft = Rectangle.fromHandle(gg_rct_WildhammerTownLeft)
    this.UndeadTownLeft = Rectangle.fromHandle(gg_rct_UndeadTownLeft)
    this.UndeadTownRight = Rectangle.fromHandle(gg_rct_UndeadTownRight)
    this.ArcaneHeroTownRight = Rectangle.fromHandle(gg_rct_ArcaneHeroTownRight)
    this.ArcaneHeroTownLeft = Rectangle.fromHandle(gg_rct_ArcaneHeroTownLeft)
    this.BackCityTownLeft = Rectangle.fromHandle(gg_rct_BackCityTownLeft)
    this.BackCityTownRight = Rectangle.fromHandle(gg_rct_BackCityTownRight)
    this.ElfShipyardTownRight = Rectangle.fromHandle(gg_rct_ElfShipyardTownRight)
    this.ElfShipyardTownLeft = Rectangle.fromHandle(gg_rct_ElfShipyardTownLeft)
    this.MercTownRight = Rectangle.fromHandle(gg_rct_MercTownRight)
    this.MercTownLeft = Rectangle.fromHandle(gg_rct_MercTownLeft)
    this.DraeneiTownRight = Rectangle.fromHandle(gg_rct_DraeneiTownRight)
    this.DraeneiTownLeft = Rectangle.fromHandle(gg_rct_DraeneiTownLeft)
    this.HighElfTownLeft = Rectangle.fromHandle(gg_rct_HighElfTownLeft)
    this.HighElfTownRight = Rectangle.fromHandle(gg_rct_HighElfTownRight)
    this.NagaTownRight = Rectangle.fromHandle(gg_rct_NagaTownRight)
    this.NagaTownLeft = Rectangle.fromHandle(gg_rct_NagaTownLeft)
    this.MurlocTownLeft = Rectangle.fromHandle(gg_rct_MurlocTownLeft)
    this.MurlocTownRight = Rectangle.fromHandle(gg_rct_MurlocTownRight)
    this.OrcTownRight = Rectangle.fromHandle(gg_rct_OrcTownRight)
    this.OrcTownLeft = Rectangle.fromHandle(gg_rct_OrcTownLeft)
    this.DwarfTownLeft = Rectangle.fromHandle(gg_rct_DwarfTownLeft)
    this.DwarfTownRight = Rectangle.fromHandle(gg_rct_DwarfTownRight)
  }
  /// AUTO DEFINE
}
