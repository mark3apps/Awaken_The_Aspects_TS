/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @noSelfInFile **/

import { Handle } from './handle'
import { Point } from './point'
import { Rectangle } from './rect'
import { Unit } from './unit'

export class Region extends Handle<region> {
	constructor () {
		if (Handle.initFromHandle()) {
			super()
		} else {
			super(CreateRegion())
		}
	}

	public addCell (x: number, y: number) {
		RegionAddCell(this.handle, x, y)
	}

	public addCellPoint (whichPoint: Point) {
		RegionAddCellAtLoc(this.handle, whichPoint.handle)
	}

	public addRect (r: Rectangle) {
		RegionAddRect(this.handle, r.handle)
	}

	public clearCell (x: number, y: number) {
		RegionClearCell(this.handle, x, y)
	}

	public clearCellPoint (whichPoint: Point) {
		RegionClearCellAtLoc(this.handle, whichPoint.handle)
	}

	public clearRect (r: Rectangle) {
		RegionClearRect(this.handle, r.handle)
	}

	public containsCoords (x: number, y: number) {
		return IsPointInRegion(this.handle, x, y)
	}

	public containsPoint (whichPoint: Point) {
		IsLocationInRegion(this.handle, whichPoint.handle)
	}

	public containsUnit (whichUnit: Unit) {
		return IsUnitInRegion(this.handle, whichUnit.handle)
	}

	public destroy () {
		RemoveRegion(this.handle)
	}

	public static fromEvent () {
		return this.fromHandle(GetTriggeringRegion())
	}

	public static fromHandle (handle: region): Region {
		return this.getObject(handle)
	}

	static BigTop: Region
	static BigMiddle: Region
	static BigBottom: Region

	static define = (): void => {
		Region.BigTop = new Region()
		Region.BigMiddle = new Region()
		Region.BigBottom = new Region()

		Region.BigTop.addRect(Rectangle.fromHandle(gg_rct_Big_Top_Left))
		Region.BigTop.addRect(Rectangle.fromHandle(gg_rct_Big_Top_Left_Center))
		Region.BigTop.addRect(Rectangle.fromHandle(gg_rct_Big_Top_Right))
		Region.BigTop.addRect(Rectangle.fromHandle(gg_rct_Big_Top_Right_Center))

		Region.BigMiddle.addRect(Rectangle.fromHandle(gg_rct_Big_Middle_Left))
		Region.BigMiddle.addRect(Rectangle.fromHandle(gg_rct_Big_Middle_Left_Center))
		Region.BigMiddle.addRect(Rectangle.fromHandle(gg_rct_Big_Middle_Right))
		Region.BigMiddle.addRect(Rectangle.fromHandle(gg_rct_Big_Middle_Right_Center))

		Region.BigBottom.addRect(Rectangle.fromHandle(gg_rct_Big_Bottom_Left))
		Region.BigBottom.addRect(Rectangle.fromHandle(gg_rct_Big_Bottom_Left_Center))
		Region.BigBottom.addRect(Rectangle.fromHandle(gg_rct_Big_Bottom_Right))
		Region.BigBottom.addRect(Rectangle.fromHandle(gg_rct_Big_Bottom_Right_Center))
	}
}
