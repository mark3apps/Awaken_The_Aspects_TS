/** @format */

import { Frame, Trigger } from 'lib/w3ts'

export class UI_RUID {
  protected static instance: UI_RUID

  static getInstance() {
    if (!UI_RUID) UI_RUID.instance = new UI_RUID()
    return UI_RUID.instance
  }

  portraitBackground: Frame
  healthBar: Frame
  healthBarBack: Frame
  healthBarText: Frame
  manaBar: Frame
  manaBarBack: Frame
  manaBarText: Frame

  private constructor() {
    let t: Trigger

    this.portraitBackground = new Frame('this.portraitBackground', Frame.fromName('ConsoleUIBackdrop', 0), 1, 1, 'BACKDROP', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.12395, 0.15315)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.17495, 0.1014)
      .setTexture('black.dds', 0, true)

    this.healthBarBack = new Frame('this.healthBarBack', Frame.fromName('ConsoleUIBackdrop', 0), 1, 1, 'BACKDROP', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.17897, 0.135174)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.274542, 0.11881)
      .setTexture('black.dds', 0, true)
    this.healthBar = new Frame('this.healthBar', this.healthBarBack, 1, 1, 'SIMPLESTATUSBAR', '')
      .setTexture('healthBar.dds', 0, true)
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.17897, 0.135174)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.274542, 0.11881)
      .setValue(50)
    this.healthBarText = new Frame('name', Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 0, 0, 'TEXT', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.17897, 0.135174)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.274542, 0.11881)
      .setText('|cff00ff1e9600 / 9600|r')
      .setEnabled(false)
      .setScale(1.0)
    BlzFrameSetTextAlignment(this.healthBarText.handle, TEXT_JUSTIFY_CENTER, TEXT_JUSTIFY_MIDDLE)

    this.manaBarBack = new Frame('this.manaBarBack', Frame.fromName('ConsoleUIBackdrop', 0), 1, 1, 'BACKDROP', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.17915, 0.117966)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.274225, 0.10184)
      .setTexture('black.dds', 0, true)
    this.manaBar = new Frame('this.manaBar', this.manaBarBack, 1, 1, 'SIMPLESTATUSBAR', '')
      .setTexture('manaBar.dds', 0, true)
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.17915, 0.117966)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.274225, 0.10184)
      .setValue(50)
    this.manaBarText = new Frame('name', Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0), 0, 0, 'TEXT', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.17915, 0.117966)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.274225, 0.10184)
      .setText('|cffffffff160 / 160|r')
      .setEnabled(false)
      .setScale(1.0)
    BlzFrameSetTextAlignment(this.manaBarText.handle, TEXT_JUSTIFY_CENTER, TEXT_JUSTIFY_MIDDLE)
  }
}
