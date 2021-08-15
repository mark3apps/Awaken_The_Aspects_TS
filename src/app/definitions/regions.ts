import { Rectangle, Region } from "lib/w3ts/index"


export namespace REGION {
    export const BigTop: Region = new Region()
    export const BigMiddle: Region = new Region()
    export const BigBottom: Region = new Region()



    export function define(): void {

        BigTop.addRect(Rectangle.fromHandle(gg_rct_Big_Top_Left))
        BigTop.addRect(Rectangle.fromHandle(gg_rct_Big_Top_Left_Center))
        BigTop.addRect(Rectangle.fromHandle(gg_rct_Big_Top_Right))
        BigTop.addRect(Rectangle.fromHandle(gg_rct_Big_Top_Right_Center))

        BigMiddle.addRect(Rectangle.fromHandle(gg_rct_Big_Middle_Left))
        BigMiddle.addRect(Rectangle.fromHandle(gg_rct_Big_Middle_Left_Center))
        BigMiddle.addRect(Rectangle.fromHandle(gg_rct_Big_Middle_Right))
        BigMiddle.addRect(Rectangle.fromHandle(gg_rct_Big_Middle_Right_Center))

        BigBottom.addRect(Rectangle.fromHandle(gg_rct_Big_Bottom_Left))
        BigBottom.addRect(Rectangle.fromHandle(gg_rct_Big_Bottom_Left_Center))
        BigBottom.addRect(Rectangle.fromHandle(gg_rct_Big_Bottom_Right))
        BigBottom.addRect(Rectangle.fromHandle(gg_rct_Big_Bottom_Right_Center))

    }
}