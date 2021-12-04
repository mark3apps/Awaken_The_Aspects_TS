/** @noSelfInFile **/

import { Position } from 'app/classes/position'
import { Handle } from './handle'
import { Point } from './point'

export class Rectangle extends Handle<rect> {
	constructor (minX: number, minY: number, maxX: number, maxY: number) {
		if (Handle.initFromHandle()) {
			super()
		} else {
			super(Rect(minX, minY, maxX, maxY))
		}
	}

	public get centerX (): number {
		return GetRectCenterX(this.handle)
	}

	public get centerY (): number {
		return GetRectCenterY(this.handle)
	}

	public get centerPosition (): Position {
		return new Position(this.centerX, this.centerY)
	}

	public get maxX (): number {
		return GetRectMaxX(this.handle)
	}

	public get maxY (): number {
		return GetRectMaxY(this.handle)
	}

	public get minX (): number {
		return GetRectMinX(this.handle)
	}

	public get minY (): number {
		return GetRectMinY(this.handle)
	}

	public get randomX (): number {
		return GetRandomReal(this.minX, this.maxX)
	}

	public get randomY (): number {
		return GetRandomReal(this.minY, this.maxY)
	}

	public get randomPosition (): Position {
		return new Position(this.randomX, this.randomY)
	}

	public destroy (): void {
		RemoveRect(this.handle)
	}

	public enumDestructables (filter: boolexpr | (() => boolean), actionFunc: () => void): void {
		EnumDestructablesInRect(this.handle, typeof filter === 'function' ? Filter(filter) : filter, actionFunc)
	}

	public enumItems (filter: boolexpr | (() => boolean), actionFunc: () => void): void {
		EnumItemsInRect(this.handle, typeof filter === 'function' ? Filter(filter) : filter, actionFunc)
	}

	public move (newCenterX: number, newCenterY: number): void {
		MoveRectTo(this.handle, newCenterX, newCenterY)
	}

	public movePoint (newCenterPoint: Point): void {
		MoveRectToLoc(this.handle, newCenterPoint.handle)
	}

	public setRect (minX: number, minY: number, maxX: number, maxY: number): void {
		SetRect(this.handle, minX, minY, maxX, maxY)
	}

	public setRectFromPoint (min: Point, max: Point): void {
		SetRectFromLoc(this.handle, min.handle, max.handle)
	}

	public static fromHandle (handle: rect): Rectangle {
		return this.getObject(handle)
	}

	public static fromPoint (min: Point, max: Point): Rectangle {
		return this.fromHandle(RectFromLoc(min.handle, max.handle))
	}

	// Returns full map bounds, including unplayable borders, in world coordinates
	public static getWorldBounds (): Rectangle {
		return Rectangle.fromHandle(GetWorldBounds())
	}

	public static getPlayableMap (): Rectangle {
		return Rectangle.fromHandle(GetPlayableMapRect())
	}

	/// / AUTO DEFINE
	static Left_Start: Rectangle
	static Left_Hero: Rectangle
	static Camp_Top: Rectangle
	static Left_Tree: Rectangle
	static Left_Workshop: Rectangle
	static Left_Arcane: Rectangle
	static Right_Hero: Rectangle
	static Right_Start: Rectangle
	static Right_Tree: Rectangle
	static Right_Arcane: Rectangle
	static Right_Workshop: Rectangle
	static Camp_Bottom: Rectangle
	static Left_Orc: Rectangle
	static Right_Orc: Rectangle
	static Furbolg_Left: Rectangle
	static Furbolg_Right: Rectangle
	static Left_Start_Bottom: Rectangle
	static Left_Start_Top: Rectangle
	static Right_Start_Top: Rectangle
	static Big_Bottom_Left: Rectangle
	static Big_Middle_Left: Rectangle
	static Big_Top_Left: Rectangle
	static Left_Castle: Rectangle
	static Left_City: Rectangle
	static Right_City: Rectangle
	static Right_Castle: Rectangle
	static Left_High_Elves: Rectangle
	static Left_Shipyard: Rectangle
	static Right_Shipyard: Rectangle
	static Right_Start_Bottom: Rectangle
	static Right_High_Elves: Rectangle
	static Naga_Right: Rectangle
	static Naga_Left: Rectangle
	static Murloc_Left: Rectangle
	static Murloc_Right: Rectangle
	static Left_Elemental_Start: Rectangle
	static Front_Town_Left: Rectangle
	static City_Elves_Left: Rectangle
	static Blacksmith_Left: Rectangle
	static Front_City_Right: Rectangle
	static City_Elves_Right: Rectangle
	static Blacksmith_Right: Rectangle
	static Arcane_Hero_Right: Rectangle
	static Arcane_Hero_Left: Rectangle
	static Murloc_Gate_Left: Rectangle
	static Murloc_Gate_Right: Rectangle
	static Big_Top_Right: Rectangle
	static Big_Middle_Right: Rectangle
	static Big_Bottom_Right: Rectangle
	static Big_Bottom_Left_Center: Rectangle
	static Big_Bottom_Right_Center: Rectangle
	static Big_Top_Right_Center: Rectangle
	static Big_Top_Left_Center: Rectangle
	static Big_Middle_Right_Center: Rectangle
	static Aspect_of_Forest_Left: Rectangle
	static Aspect_of_Forest_Left_Gate: Rectangle
	static Aspect_of_Forest_Right_Gate: Rectangle
	static Arcane_Left_Top: Rectangle
	static Arcane_Left_Bottom: Rectangle
	static Arcane_Right_Top: Rectangle
	static Arcane_Right_Bottom: Rectangle
	static Zombie_End_Left: Rectangle
	static Zombie_End_Right: Rectangle
	static Death_Gate_Left: Rectangle
	static Death_Gate_Right: Rectangle
	static Elf_Base_Right: Rectangle
	static Elf_Base_Left: Rectangle
	static Undead_Right: Rectangle
	static Undead_Left: Rectangle
	static Human_Shipyard_Left: Rectangle
	static Human_Shipyard_Right: Rectangle
	static Right_Everything: Rectangle
	static Left_Everything: Rectangle
	static Left_Mage_Base: Rectangle
	static Right_Mage_Base: Rectangle
	static Murloc_Spawn_Left: Rectangle
	static Murloc_Spawn_Right: Rectangle
	static Right_Start_Middle: Rectangle
	static Aspect_of_Forest_Left_Mid: Rectangle
	static Aspect_of_Forest_Right_Mid: Rectangle
	static Aspect_of_Forest_Right: Rectangle
	static Right_Elemental_Start: Rectangle
	static Left_Start_Middle: Rectangle
	static Big_Middle_Left_Center: Rectangle
	static Night_Elf_Left: Rectangle
	static Night_Elf_Right: Rectangle
	static Rock_Left: Rectangle
	static Rock_Right: Rectangle
	static Rock_Gate_Right: Rectangle
	static Rock_Gate_Left: Rectangle
	static EventTL1: Rectangle
	static EventTL2: Rectangle
	static EventTL3: Rectangle
	static EventBL1: Rectangle
	static EventBL2: Rectangle
	static EventBL3: Rectangle
	static EventBR1: Rectangle
	static EventBR2: Rectangle
	static EventBR3: Rectangle
	static EventTR1: Rectangle
	static EventTR2: Rectangle
	static EventTR3: Rectangle
	static EventCenter: Rectangle

	static defineGlobals (): void {
		Rectangle.Left_Start = Rectangle.fromHandle(gg_rct_Left_Start)
		Rectangle.Left_Hero = Rectangle.fromHandle(gg_rct_Left_Hero)
		Rectangle.Camp_Top = Rectangle.fromHandle(gg_rct_Camp_Top)
		Rectangle.Left_Tree = Rectangle.fromHandle(gg_rct_Left_Tree)
		Rectangle.Left_Workshop = Rectangle.fromHandle(gg_rct_Left_Workshop)
		Rectangle.Left_Arcane = Rectangle.fromHandle(gg_rct_Left_Arcane)
		Rectangle.Right_Hero = Rectangle.fromHandle(gg_rct_Right_Hero)
		Rectangle.Right_Start = Rectangle.fromHandle(gg_rct_Right_Start)
		Rectangle.Right_Tree = Rectangle.fromHandle(gg_rct_Right_Tree)
		Rectangle.Right_Arcane = Rectangle.fromHandle(gg_rct_Right_Arcane)
		Rectangle.Right_Workshop = Rectangle.fromHandle(gg_rct_Right_Workshop)
		Rectangle.Camp_Bottom = Rectangle.fromHandle(gg_rct_Camp_Bottom)
		Rectangle.Left_Orc = Rectangle.fromHandle(gg_rct_Left_Orc)
		Rectangle.Right_Orc = Rectangle.fromHandle(gg_rct_Right_Orc)
		Rectangle.Furbolg_Left = Rectangle.fromHandle(gg_rct_Furbolg_Left)
		Rectangle.Furbolg_Right = Rectangle.fromHandle(gg_rct_Furbolg_Right)
		Rectangle.Left_Start_Bottom = Rectangle.fromHandle(gg_rct_Left_Start_Bottom)
		Rectangle.Left_Start_Top = Rectangle.fromHandle(gg_rct_Left_Start_Top)
		Rectangle.Right_Start_Top = Rectangle.fromHandle(gg_rct_Right_Start_Top)
		Rectangle.Big_Bottom_Left = Rectangle.fromHandle(gg_rct_Big_Bottom_Left)
		Rectangle.Big_Middle_Left = Rectangle.fromHandle(gg_rct_Big_Middle_Left)
		Rectangle.Big_Top_Left = Rectangle.fromHandle(gg_rct_Big_Top_Left)
		Rectangle.Left_Castle = Rectangle.fromHandle(gg_rct_Left_Castle)
		Rectangle.Left_City = Rectangle.fromHandle(gg_rct_Left_City)
		Rectangle.Right_City = Rectangle.fromHandle(gg_rct_Right_City)
		Rectangle.Right_Castle = Rectangle.fromHandle(gg_rct_Right_Castle)
		Rectangle.Left_High_Elves = Rectangle.fromHandle(gg_rct_Left_High_Elves)
		Rectangle.Left_Shipyard = Rectangle.fromHandle(gg_rct_Left_Shipyard)
		Rectangle.Right_Shipyard = Rectangle.fromHandle(gg_rct_Right_Shipyard)
		Rectangle.Right_Start_Bottom = Rectangle.fromHandle(gg_rct_Right_Start_Bottom)
		Rectangle.Right_High_Elves = Rectangle.fromHandle(gg_rct_Right_High_Elves)
		Rectangle.Naga_Right = Rectangle.fromHandle(gg_rct_Naga_Right)
		Rectangle.Naga_Left = Rectangle.fromHandle(gg_rct_Naga_Left)
		Rectangle.Murloc_Left = Rectangle.fromHandle(gg_rct_Murloc_Left)
		Rectangle.Murloc_Right = Rectangle.fromHandle(gg_rct_Murloc_Right)
		Rectangle.Left_Elemental_Start = Rectangle.fromHandle(gg_rct_Left_Elemental_Start)
		Rectangle.Front_Town_Left = Rectangle.fromHandle(gg_rct_Front_Town_Left)
		Rectangle.City_Elves_Left = Rectangle.fromHandle(gg_rct_City_Elves_Left)
		Rectangle.Blacksmith_Left = Rectangle.fromHandle(gg_rct_Blacksmith_Left)
		Rectangle.Front_City_Right = Rectangle.fromHandle(gg_rct_Front_City_Right)
		Rectangle.City_Elves_Right = Rectangle.fromHandle(gg_rct_City_Elves_Right)
		Rectangle.Blacksmith_Right = Rectangle.fromHandle(gg_rct_Blacksmith_Right)
		Rectangle.Arcane_Hero_Right = Rectangle.fromHandle(gg_rct_Arcane_Hero_Right)
		Rectangle.Arcane_Hero_Left = Rectangle.fromHandle(gg_rct_Arcane_Hero_Left)
		Rectangle.Murloc_Gate_Left = Rectangle.fromHandle(gg_rct_Murloc_Gate_Left)
		Rectangle.Murloc_Gate_Right = Rectangle.fromHandle(gg_rct_Murloc_Gate_Right)
		Rectangle.Big_Top_Right = Rectangle.fromHandle(gg_rct_Big_Top_Right)
		Rectangle.Big_Middle_Right = Rectangle.fromHandle(gg_rct_Big_Middle_Right)
		Rectangle.Big_Bottom_Right = Rectangle.fromHandle(gg_rct_Big_Bottom_Right)
		Rectangle.Big_Bottom_Left_Center = Rectangle.fromHandle(gg_rct_Big_Bottom_Left_Center)
		Rectangle.Big_Bottom_Right_Center = Rectangle.fromHandle(gg_rct_Big_Bottom_Right_Center)
		Rectangle.Big_Top_Right_Center = Rectangle.fromHandle(gg_rct_Big_Top_Right_Center)
		Rectangle.Big_Top_Left_Center = Rectangle.fromHandle(gg_rct_Big_Top_Left_Center)
		Rectangle.Big_Middle_Right_Center = Rectangle.fromHandle(gg_rct_Big_Middle_Right_Center)
		Rectangle.Aspect_of_Forest_Left = Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left)
		Rectangle.Aspect_of_Forest_Left_Gate = Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left_Gate)
		Rectangle.Aspect_of_Forest_Right_Gate = Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right_Gate)
		Rectangle.Arcane_Left_Top = Rectangle.fromHandle(gg_rct_Arcane_Left_Top)
		Rectangle.Arcane_Left_Bottom = Rectangle.fromHandle(gg_rct_Arcane_Left_Bottom)
		Rectangle.Arcane_Right_Top = Rectangle.fromHandle(gg_rct_Arcane_Right_Top)
		Rectangle.Arcane_Right_Bottom = Rectangle.fromHandle(gg_rct_Arcane_Right_Bottom)
		Rectangle.Zombie_End_Left = Rectangle.fromHandle(gg_rct_Zombie_End_Left)
		Rectangle.Zombie_End_Right = Rectangle.fromHandle(gg_rct_Zombie_End_Right)
		Rectangle.Death_Gate_Left = Rectangle.fromHandle(gg_rct_Death_Gate_Left)
		Rectangle.Death_Gate_Right = Rectangle.fromHandle(gg_rct_Death_Gate_Right)
		Rectangle.Elf_Base_Right = Rectangle.fromHandle(gg_rct_Elf_Base_Right)
		Rectangle.Elf_Base_Left = Rectangle.fromHandle(gg_rct_Elf_Base_Left)
		Rectangle.Undead_Right = Rectangle.fromHandle(gg_rct_Undead_Right)
		Rectangle.Undead_Left = Rectangle.fromHandle(gg_rct_Undead_Left)
		Rectangle.Human_Shipyard_Left = Rectangle.fromHandle(gg_rct_Human_Shipyard_Left)
		Rectangle.Human_Shipyard_Right = Rectangle.fromHandle(gg_rct_Human_Shipyard_Right)
		Rectangle.Right_Everything = Rectangle.fromHandle(gg_rct_Right_Everything)
		Rectangle.Left_Everything = Rectangle.fromHandle(gg_rct_Left_Everything)
		Rectangle.Left_Mage_Base = Rectangle.fromHandle(gg_rct_Left_Mage_Base)
		Rectangle.Right_Mage_Base = Rectangle.fromHandle(gg_rct_Right_Mage_Base)
		Rectangle.Murloc_Spawn_Left = Rectangle.fromHandle(gg_rct_Murloc_Spawn_Left)
		Rectangle.Murloc_Spawn_Right = Rectangle.fromHandle(gg_rct_Murloc_Spawn_Right)
		Rectangle.Right_Start_Middle = Rectangle.fromHandle(gg_rct_Right_Start_Middle)
		Rectangle.Aspect_of_Forest_Left_Mid = Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Left_Mid)
		Rectangle.Aspect_of_Forest_Right_Mid = Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right_Mid)
		Rectangle.Aspect_of_Forest_Right = Rectangle.fromHandle(gg_rct_Aspect_of_Forest_Right)
		Rectangle.Right_Elemental_Start = Rectangle.fromHandle(gg_rct_Right_Elemental_Start)
		Rectangle.Left_Start_Middle = Rectangle.fromHandle(gg_rct_Left_Start_Middle)
		Rectangle.Big_Middle_Left_Center = Rectangle.fromHandle(gg_rct_Big_Middle_Left_Center)
		Rectangle.Night_Elf_Left = Rectangle.fromHandle(gg_rct_Night_Elf_Left)
		Rectangle.Night_Elf_Right = Rectangle.fromHandle(gg_rct_Night_Elf_Right)
		Rectangle.Rock_Left = Rectangle.fromHandle(gg_rct_Rock_Left)
		Rectangle.Rock_Right = Rectangle.fromHandle(gg_rct_Rock_Right)
		Rectangle.Rock_Gate_Right = Rectangle.fromHandle(gg_rct_Rock_Gate_Right)
		Rectangle.Rock_Gate_Left = Rectangle.fromHandle(gg_rct_Rock_Gate_Left)
		Rectangle.EventTL1 = Rectangle.fromHandle(gg_rct_EventTL1)
		Rectangle.EventTL2 = Rectangle.fromHandle(gg_rct_EventTL2)
		Rectangle.EventTL3 = Rectangle.fromHandle(gg_rct_EventTL3)
		Rectangle.EventBL1 = Rectangle.fromHandle(gg_rct_EventBL1)
		Rectangle.EventBL2 = Rectangle.fromHandle(gg_rct_EventBL2)
		Rectangle.EventBL3 = Rectangle.fromHandle(gg_rct_EventBL3)
		Rectangle.EventBR1 = Rectangle.fromHandle(gg_rct_EventBR1)
		Rectangle.EventBR2 = Rectangle.fromHandle(gg_rct_EventBR2)
		Rectangle.EventBR3 = Rectangle.fromHandle(gg_rct_EventBR3)
		Rectangle.EventTR1 = Rectangle.fromHandle(gg_rct_EventTR1)
		Rectangle.EventTR2 = Rectangle.fromHandle(gg_rct_EventTR2)
		Rectangle.EventTR3 = Rectangle.fromHandle(gg_rct_EventTR3)
		Rectangle.EventCenter = Rectangle.fromHandle(gg_rct_EventCenter)
	}
	/// / AUTO DEFINE
}
