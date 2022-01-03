/** @format */

import { FramePoint, Frames } from "app/define/Frames"
import { Frame, Timer, Trigger, Unit } from "lib/w3ts"

export interface IUIDepend {}
export class UI {
  protected static instance: UI

  static getInstance(depend: IUIDepend) {
    if (!UI.instance) UI.instance = new UI(depend)
    return UI.instance
  }

  unitBanner: Frame

  private constructor(depend: IUIDepend) {
    let t: Trigger

    BlzEnableUIAutoPosition(false)
    Frame.fromContext(Frames.consoleUIBackdrop).setSize(0, 0.0001)

    this.unitBanner = new Frame("this.unitBanner", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0), 1, 1, "BACKDROP", "")
    this.unitBanner.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.273, 0.16604)
    this.unitBanner.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.4681, 0.1264)
    this.unitBanner.setTexture("\\UI\\unitBanner.dds", 0, true)

    // Hidden Frames
    Frame.fromContext(Frames.InventoryButton5).setVisible(false)
    Frame.fromContext(Frames.InventoryText).clearPoints().setAbsPoint(FramePoint.TL, 1.5, 0.5)

    // Set Origin Frames
    Frame.fromOrigin(ORIGIN_FRAME_MINIMAP).clearPoints().setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.1065, 0.007)
    Frame.fromOrigin(ORIGIN_FRAME_PORTRAIT).clearPoints().setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.336, 0.057).setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.371, 0.126)
    Frame.fromOrigin(ORIGIN_FRAME_UNIT_PANEL_BUFF_BAR_LABEL).clearPoints().setAbsPoint(FramePoint.BL, 0.497, 0.06)
    Frame.fromOrigin(ORIGIN_FRAME_UNIT_PANEL_BUFF_BAR).clearPoints().setAbsPoint(FramePoint.BL, 0.527, 0.055)

    // Order Buttons
    let x = 0.53
    let xInc = 0.0187
    let y = 0.166
    let yInc = 0
    let scale = 0.62
    let frames = [Frames.CommandButton4, Frames.CommandButton0, Frames.CommandButton1, Frames.CommandButton2, Frames.CommandButton3]

    for (let index = 0; index < frames.length; index++) {
      Frame.fromContext(frames[index]).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += xInc
      y += yInc
    }

    // Items Buttons
    x = 0.3495
    xInc = 0.0225
    y = 0.0785
    yInc = 0
    scale = 0.58
    frames = [Frames.InventoryButton0, Frames.InventoryButton1, Frames.InventoryButton2, Frames.InventoryButton3, Frames.InventoryButton4]

    for (let index = 0; index < frames.length; index++) {
      Frame.fromContext(frames[index]).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += xInc
      y += yInc
    }

    // Ability Buttons
    x = 0.262
    xInc = 0.0404
    y = 0.048
    yInc = 0
    scale = 1
    frames = [Frames.CommandButton5, Frames.CommandButton8, Frames.CommandButton9, Frames.CommandButton10]

    for (let index = 0; index < frames.length; index++) {
      Frame.fromContext(frames[index]).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += xInc
      y += yInc
    }

    // Ult Ability
    Frame.fromContext(Frames.CommandButton11).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, 0.436, y).setScale(scale)

    // Name Value
    Frame.fromContext(Frames.SimpleNameValue).clearPoints().setAbsPoint(FramePoint.T, 0.374, 0.164)
    Frame.fromContext(Frames.SimpleHeroLevelBar).clearPoints().setAbsPoint(FramePoint.T, 0.374, 0.1505)
    Frame.fromContext(Frames.SimpleClassValue).clearPoints().setAbsPoint(FramePoint.T, 0.374, 0.1455)
    Frame.fromContext(Frames.SimpleInfoPanelIconDamage).clearPoints().setAbsPoint(FramePoint.TL, 0.497, 0.14)
    Frame.fromContext(Frames.InfoPanelIconHeroIcon).clearPoints().setAbsPoint(FramePoint.TL, 1.5, 0.5)
    // Frame.fromName(Frames.simpleInfoPanelIconArmor, 2).clearPoints().setAbsPoint(FramePoint.TL, 0.505, 0.086)

    Unit.fromHandle(gg_unit_Hpal_0002).select(true)
    const time = new Timer()
    time.start(0.1, false, () => {
      Frame.fromOrigin(ORIGIN_FRAME_PORTRAIT_HP_TEXT, 0).clearPoints().setAbsPoint(FramePoint.C, 0.405, 0.109)
      Frame.fromOrigin(ORIGIN_FRAME_PORTRAIT_MANA_TEXT, 0).clearPoints().setAbsPoint(FramePoint.C, 0.405, 0.095)
    })

    // this.bottomUI = new Frame("this.bottomUI", Frame.fromName("ConsoleUIBackdrop", 0), 1, 1, "BACKDROP", "")
    // this.bottomUI.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.09777, 0.174136)
    // this.bottomUI.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.66929, 0)
    // this.bottomUI.setTexture("\\UI\\Bottom_MiniMap_v03.dds", 0, true)

    // // Set Hero Bar Offsets
    // const x = 0.205
    // const y = -0.025

    // for (let i = 0; i < Players.length; i++) {
    //   const player = Players[i]

    //   if (player === MapPlayer.fromLocal()) {
    //     // Turn off Auto Positioning
    //     BlzEnableUIAutoPosition(false)

    //     // Create Hero Bar Background UI Texture
    //     // const heroBarUI = new Frame('image', Frame.fromName(FrameDefaultName.consoleUIBackdrop, 0), 1, 0, Frame.Type.backdrop, FrameDefaultName.buttonBackdropTemplate)
    //     // heroBarUI.setTexture('UI\\ResourceBar_combined.dds', 0, true)
    //     // 	.setAbsPoint(FramePoint.TL, x + 0.046, y + 0.255)
    //     // 	.setAbsPoint(FramePoint.BR, x + 0.17, y + 0.126)
    //     // 	.setLevel(1)

    //     // Remove Upper Button Bar Back
    //     Frame.fromName(FrameDefaultName.consoleUI, 0).setAbsPoint(FramePoint.TL, 0, -0.1).setAbsPoint(FramePoint.B, 0, 0)

    //     // Hide Upper Button Bar Buttons
    //     Frame.fromName(FrameDefaultName.upperButtonBarAlliesButton, 0).clearPoints().setAbsPoint(FramePoint.BL, 0, 1.5)
    //     Frame.fromName(FrameDefaultName.upperButtonBarQuestsButton, 0).clearPoints().setAbsPoint(FramePoint.BL, 0, 1.5)

    //     // Move Upper Button Bar Buttons we like
    //     Frame.fromName(FrameDefaultName.upperButtonBarMenuButton, 0).clearPoints().setAbsPoint(FramePoint.TL, 0.255, 0.6)
    //     Frame.fromName(FrameDefaultName.upperButtonBarChatButton, 0).clearPoints().setAbsPoint(FramePoint.TL, 0.463, 0.6)

    //     // Move Gold Bar
    //     Frame.fromName(FrameDefaultName.resourceBarGoldText, 0)
    //       .clearPoints()
    //       .setAbsPoint(FramePoint.TL, x + 0.06, y + 0.21)
    //     Frame.fromName(FrameDefaultName.resourceBarLumberText, 0)
    //       .clearPoints()
    //       .clearPoints()
    //       .setAbsPoint(FRAMEPOINT_TOPLEFT, x + 0.087, y + 0.21)

    //     // Hide Resource Bar
    //     Frame.fromName(FrameDefaultName.resourceBarFrame, 0).clearPoints().setAbsPoint(FramePoint.TL, 0.0, 1.5)

    //     Frame.fromName(FrameDefaultName.resourceBarUpkeepText, 0).setAbsPoint(FRAMEPOINT_TOPRIGHT, 0, 1.5)
    //     Frame.fromName(FrameDefaultName.resourceBarSupplyText, 0).setAbsPoint(FRAMEPOINT_TOPRIGHT, 0, 1.5)

    //     // Hero Bar
    //     Frame.fromOrigin(ORIGIN_FRAME_HERO_BAR, 0)
    //       .clearPoints()
    //       .setAbsPoint(FramePoint.TL, x + 0.01, y + 0.214)

    //     Frame.fromOrigin(ORIGIN_FRAME_HERO_BUTTON, 0).setScale(1.25)

    //     // HP Bar
    //     Frame.fromOrigin(ORIGIN_FRAME_HERO_HP_BAR, 0)
    //       .clearPoints()
    //       .setAbsPoint(FramePoint.BL, x + 0.065, y + 0.181)
    //       .setScale(2.3)

    //     // Mana Bar
    //     Frame.fromOrigin(ORIGIN_FRAME_HERO_MANA_BAR, 0)
    //       .clearPoints()
    //       .setAbsPoint(FramePoint.BL, x + 0.065, y + 0.175)
    //       .setScale(2.3)
    //   }
    // }
  }
}
