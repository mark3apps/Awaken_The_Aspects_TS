import { Rectangle } from './rect'
import { Region } from './region'


export class Regions {
	static BigTop: Region
	static BigMiddle: Region
	static BigBottom: Region

	static define = (): void => {
		Regions.BigTop = new Region()
		Regions.BigMiddle = new Region()
		Regions.BigBottom = new Region()

		Regions.BigTop.addRect(Rectangle.fromHandle(gg_rct_Big_Top_Left))
		Regions.BigTop.addRect(Rectangle.fromHandle(gg_rct_Big_Top_Left_Center))
		Regions.BigTop.addRect(Rectangle.fromHandle(gg_rct_Big_Top_Right))
		Regions.BigTop.addRect(Rectangle.fromHandle(gg_rct_Big_Top_Right_Center))

		Regions.BigMiddle.addRect(Rectangle.fromHandle(gg_rct_Big_Middle_Left))
		Regions.BigMiddle.addRect(Rectangle.fromHandle(gg_rct_Big_Middle_Left_Center))
		Regions.BigMiddle.addRect(Rectangle.fromHandle(gg_rct_Big_Middle_Right))
		Regions.BigMiddle.addRect(Rectangle.fromHandle(gg_rct_Big_Middle_Right_Center))

		Regions.BigBottom.addRect(Rectangle.fromHandle(gg_rct_Big_Bottom_Left))
		Regions.BigBottom.addRect(Rectangle.fromHandle(gg_rct_Big_Bottom_Left_Center))
		Regions.BigBottom.addRect(Rectangle.fromHandle(gg_rct_Big_Bottom_Right))
		Regions.BigBottom.addRect(Rectangle.fromHandle(gg_rct_Big_Bottom_Right_Center))
	};
}
