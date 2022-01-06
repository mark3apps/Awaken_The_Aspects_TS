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

  unitBanner1: Frame
  unitBanner2: Frame
  unitBanner3: Frame
  unitBanner4: Frame

  private constructor(depend: IUIDepend) {
    let t: Trigger

    BlzEnableUIAutoPosition(false)
    Frame.fromContext(Frames.consoleUIBackdrop).setSize(0, 0.0001)

    this.unitBanner1 = new Frame("unitBanner", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 1, 1, "BACKDROP", "")
    this.unitBanner1.setTexture("\\UI\\bottomUi1.dds", 0, true)
    this.unitBanner1.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.0, 0.0)
    this.unitBanner1.setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.2, 0.1939)

    this.unitBanner2 = new Frame("unitBanner", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 1, 1, "BACKDROP", "")
    this.unitBanner2.setTexture("\\UI\\bottomUi2.dds", 0, true)
    this.unitBanner2.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.2, 0.0)
    this.unitBanner2.setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.4, 0.1939)

    this.unitBanner3 = new Frame("unitBanner", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 1, 1, "BACKDROP", "")
    this.unitBanner3.setTexture("\\UI\\bottomUi3.dds", 0, true)
    this.unitBanner3.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.4, 0.0)
    this.unitBanner3.setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.6, 0.1939)

    this.unitBanner4 = new Frame("unitBanner", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 1, 1, "BACKDROP", "")
    this.unitBanner4.setTexture("\\UI\\bottomUi4.dds", 0, true)
    this.unitBanner4.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.6, 0.0)
    this.unitBanner4.setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.8, 0.1939)

    // Hidden Frames
    Frame.fromContext(Frames.InventoryText).clearPoints().setAbsPoint(FramePoint.TL, 1.5, 0.5)
    Frame.fromContext(Frames.ResourceBarFrame).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, 1.5, 0.5)
    Frame.fromContext(Frames.SimpleInfoPanelIconAlly).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, 1.5, 0.5)
    Frame.fromOrigin(ORIGIN_FRAME_SYSTEM_BUTTON, 1).clearPoints().setAbsPoint(FramePoint.BL, 1.5, 0.5)
    Frame.fromOrigin(ORIGIN_FRAME_SYSTEM_BUTTON, 3).clearPoints().setAbsPoint(FramePoint.BL, 1.5, 0.5)

    // Set Origin Frames
    Frame.fromOrigin(ORIGIN_FRAME_MINIMAP).clearPoints().setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.1065, 0.007)
    Frame.fromOrigin(ORIGIN_FRAME_PORTRAIT).clearPoints().setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.33, 0.057).setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.364, 0.118)
    Frame.fromOrigin(ORIGIN_FRAME_UNIT_PANEL_BUFF_BAR_LABEL).clearPoints().setAbsPoint(FramePoint.BL, 0.494, 0.058)
    Frame.fromOrigin(ORIGIN_FRAME_UNIT_PANEL_BUFF_BAR).clearPoints().setAbsPoint(FramePoint.BL, 0.524, 0.055)

    // Menu Bars
    Frame.fromOrigin(ORIGIN_FRAME_SYSTEM_BUTTON, 0).clearPoints().setAbsPoint(FramePoint.BL, 0.671, 0.018)
    Frame.fromOrigin(ORIGIN_FRAME_SYSTEM_BUTTON, 2).clearPoints().setAbsPoint(FramePoint.BL, 0.671, 0.0)

    // Move HP / Mana Bar
    Unit.fromHandle(gg_unit_Hpal_0002).select(true)
    const time = new Timer()
    time.start(0.1, false, () => {
      const x = 0
      const y = -0.004
      Frame.fromOrigin(ORIGIN_FRAME_PORTRAIT_HP_TEXT, 0)
        .clearPoints()
        .setAbsPoint(FramePoint.C, x + 0.405, y + 0.109)
      Frame.fromOrigin(ORIGIN_FRAME_PORTRAIT_MANA_TEXT, 0)
        .clearPoints()
        .setAbsPoint(FramePoint.C, x + 0.405, y + 0.095)
    })

    // Order Buttons
    let x = 0.526
    let xInc = 0.0187
    let y = 0.158
    let yInc = 0
    let scale = 0.7
    let frames = [Frames.CommandButton4, Frames.CommandButton0, Frames.CommandButton1, Frames.CommandButton2, Frames.CommandButton3]

    for (let index = 0; index < frames.length; index++) {
      Frame.fromContext(frames[index]).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += xInc
      y += yInc
    }

    // Items Buttons
    x = 0.339
    xInc = 0.0225
    y = 0.072
    yInc = 0
    scale = 0.58
    frames = [Frames.InventoryButton0, Frames.InventoryButton1, Frames.InventoryButton2, Frames.InventoryButton3, Frames.InventoryButton4, Frames.InventoryButton5]

    for (let index = 0; index < frames.length; index++) {
      Frame.fromContext(frames[index]).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += xInc
      y += yInc
    }

    // Ability Buttons
    x = 0.262
    xInc = 0.0404
    y = 0.045
    yInc = 0
    scale = 1
    frames = [Frames.CommandButton5, Frames.CommandButton8, Frames.CommandButton9, Frames.CommandButton10]

    for (let index = 0; index < frames.length; index++) {
      Frame.fromContext(frames[index]).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += xInc
      y += yInc
    }

    // Ult Ability
    Frame.fromContext(Frames.CommandButton11).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, 0.434, y).setScale(scale)

    // Level Upgrade Effects
    Frame.fromContext(Frames.CommandButton6).clearPoints().setAbsPoint(FramePoint.TL, 0.5, 0.041).setScale(0.95)
    Frame.fromContext(Frames.CommandButton7).clearPoints().setAbsPoint(FramePoint.TL, 0.54, 0.041).setScale(0.95)

    // Resources
    Frame.fromContext(Frames.ResourceBarGoldText).clearPoints().setAbsPoint(FramePoint.TR, 0.651, 0.039)
    Frame.fromContext(Frames.ResourceBarLumberText).clearPoints().setAbsPoint(FramePoint.TR, 0.651, 0.02)
    Frame.fromContext(Frames.ResourceTradingTitle).clearPoints().setAbsPoint(FramePoint.TR, 0.5, 0.5)

    // Info Panel
    const itemNameX = 0.368
    const itemNameY = 0.156
    Frame.fromContext(Frames.SimpleNameValue)
      .clearPoints()
      .setAbsPoint(FramePoint.T, itemNameX, itemNameY - 0.001)
    Frame.fromContext(Frames.SimpleHeroLevelBar)
      .clearPoints()
      .setAbsPoint(FramePoint.T, itemNameX, itemNameY - 0.014)
    Frame.fromContext(Frames.SimpleClassValue)
      .clearPoints()
      .setAbsPoint(FramePoint.T, itemNameX, itemNameY - 0.018)

    // Destructible
    Frame.fromContext(Frames.SimpleDestructableNameValue)
      .clearPoints()
      .setAbsPoint(FramePoint.T, itemNameX, itemNameY - 0.001)
    Frame.fromContext(Frames.SimpleInfoPanelDestructableDetail).clearPoints().setAbsPoint(FramePoint.TL, 0.488, 0.14)

    // Item Info
    Frame.fromContext(Frames.SimpleItemNameValue)
      .clearPoints()
      .setAbsPoint(FramePoint.T, itemNameX, itemNameY - 0.001)
    Frame.fromContext(Frames.SimpleItemDescriptionValue).clearPoints().setAbsPoint(FramePoint.TL, 0.488, 0.14)

    // Unit Info
    Frame.fromContext(Frames.SimpleInfoPanelIconDamage).clearPoints().setAbsPoint(FramePoint.TL, 0.488, 0.14)
    // Frame.fromContext(Frames.InfoPanelIconHeroIcon).clearPoints().setAbsPoint(FramePoint.TL, 1.5, 0.5)
    // Frame.fromName(Frames.simpleInfoPanelIconArmor, 2).clearPoints().setAbsPoint(FramePoint.TL, 0.505, 0.086)

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
