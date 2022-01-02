/** @format */

import { FrameName } from "app/define/Frames"
import { Frame, MapPlayer, Players, Timer, Trigger, Unit } from "lib/w3ts"

export interface IUIDepend {}
export class UI {
  protected static instance: UI

  static getInstance(depend: IUIDepend) {
    if (!UI.instance) UI.instance = new UI(depend)
    return UI.instance
  }

  bottomUI: Frame

  private constructor(depend: IUIDepend) {
    let t: Trigger

    BlzEnableUIAutoPosition(false)

    BlzFrameSetSize(BlzGetFrameByName("ConsoleUIBackdrop", 0), 0, 0.0001)
    BlzFrameSetVisible(BlzGetFrameByName(FrameName.inventoryButton0, 0), true)
    BlzFrameSetVisible(BlzGetFrameByName("ResourceBarFrame", 0), false)
    BlzFrameSetVisible(BlzGetFrameByName("UpperButtonBarFrame", 0), false)
    BlzFrameSetVisible(BlzGetOriginFrame(ORIGIN_FRAME_CHAT_MSG, 0), false)

    // Hidden Frames
    Frame.fromName(FrameName.inventoryButton4, 0).setVisible(false)
    Frame.fromName(FrameName.inventoryButton5, 0).setVisible(false)
    Frame.fromName(FrameName.inventoryText, 0).clearPoints().setAbsPoint(FramePoint.TL, 1.5, 0.5)

    const ofMiniMap = Frame.fromOrigin(ORIGIN_FRAME_MINIMAP, 0)
    ofMiniMap.clearPoints()
    ofMiniMap.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.1115, 0.002)

    Frame.fromOrigin(ORIGIN_FRAME_PORTRAIT, 0).clearPoints().setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.336, 0.057).setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.371, 0.126)

    // Order Buttons
    let x = 0.355
    let xInc = 0.0236
    let y = 0.0726
    let yInc = 0
    let scale = 0.67
    let frames = [FrameName.commandButton1, FrameName.commandButton2, FrameName.commandButton3, FrameName.commandButton4, FrameName.commandButton0]

    for (let index = 0; index < frames.length; index++) {
      Frame.fromName(frames[index], 0).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += 0.0236
      y += yInc
    }

    // Ability Buttons
    x = 0.266
    xInc = 0.0405
    y = 0.0432
    yInc = 0
    scale = 1
    frames = [FrameName.commandButton5, FrameName.commandButton8, FrameName.commandButton9, FrameName.commandButton10]

    for (let index = 0; index < frames.length; index++) {
      Frame.fromName(frames[index], 0).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += xInc
      y += yInc
    }

    // Ult Ability
    Frame.fromName(FrameName.commandButton11, 0).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, 0.444, y).setScale(scale)

    // Item Row 1
    x = 0.4985
    xInc = 0.025
    y = 0.0474
    yInc = 0
    scale = 0.63
    frames = [FrameName.inventoryButton0, FrameName.inventoryButton1]
    for (let index = 0; index < frames.length; index++) {
      Frame.fromName(frames[index], 0).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += xInc
      y += yInc
    }

    // Item Row 2
    x = 0.4985
    y = 0.0222
    frames = [FrameName.inventoryButton2, FrameName.inventoryButton3]
    for (let index = 0; index < frames.length; index++) {
      Frame.fromName(frames[index], 0).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += xInc
      y += yInc
    }

    // Name Value
    Frame.fromName(FrameName.simpleNameValue, 0).clearPoints().setAbsPoint(FramePoint.T, 0.374, 0.1645)
    Frame.fromName(FrameName.simpleHeroLevelBar, 0).clearPoints().setAbsPoint(FramePoint.T, 0.374, 0.151)
    Frame.fromName(FrameName.simpleClassValue, 0).clearPoints().setAbsPoint(FramePoint.T, 0.374, 0.146)
    Frame.fromName(FrameName.simpleInfoPanelIconDamage, 0).clearPoints().setAbsPoint(FramePoint.TL, 0.497, 0.128)
    Frame.fromName(FrameName.infoPanelIconHeroIcon, 6).clearPoints().setAbsPoint(FramePoint.TL, 1.5, 0.5)
    // Frame.fromName(FrameName.simpleInfoPanelIconArmor, 2).clearPoints().setAbsPoint(FramePoint.TL, 0.505, 0.086)

    Unit.fromHandle(gg_unit_Hpal_0002).select(true)
    const time = new Timer()
    time.start(0.1, false, () => {
      Frame.fromOrigin(ORIGIN_FRAME_PORTRAIT_HP_TEXT, 0).clearPoints().setAbsPoint(FramePoint.C, 0.412, 0.109)
      Frame.fromOrigin(ORIGIN_FRAME_PORTRAIT_MANA_TEXT, 0).clearPoints().setAbsPoint(FramePoint.C, 0.412, 0.095)
    })

    this.bottomUI = new Frame("this.bottomUI", Frame.fromName("ConsoleUIBackdrop", 0), 1, 1, "BACKDROP", "")
    this.bottomUI.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.09777, 0.174136)
    this.bottomUI.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.66929, 0)
    this.bottomUI.setTexture("\\UI\\Bottom_MiniMap_v03.dds", 0, true)

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

const FramePoint = {
  C: FRAMEPOINT_CENTER,
  T: FRAMEPOINT_TOP,
  B: FRAMEPOINT_BOTTOM,
  TL: FRAMEPOINT_TOPLEFT,
  TR: FRAMEPOINT_TOPRIGHT,
  BL: FRAMEPOINT_BOTTOMLEFT,
  BR: FRAMEPOINT_BOTTOMRIGHT,
  L: FRAMEPOINT_LEFT,
  R: FRAMEPOINT_RIGHT,
}
