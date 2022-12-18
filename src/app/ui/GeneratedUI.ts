/** @format */

import { Frame, Trigger } from 'lib/w3ts'

export class GeneratedUI {
  protected static instance: GeneratedUI

  static getInstance() {
    if (!GeneratedUI.instance) GeneratedUI.instance = new GeneratedUI()
    return GeneratedUI.instance
  }

  portraitBackground: Frame
  healthBar: Frame
  healthBarBack: Frame
  healthBarText: Frame
  manaBar: Frame
  manaBarBack: Frame
  manaBarText: Frame
  xpBarOver: Frame
  xpBar: Frame

  private constructor() {
    let t: Trigger

    this.portraitBackground = new Frame('BACKDROP', Frame.fromName('ConsoleUIBackdrop', 0), 1, 1, 'BACKDROP', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.12434, 0.153303)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.17534, 0.10143)
      .setTexture('black.dds', 0, true)

    this.healthBarBack = new Frame('healthBarBack', Frame.fromName('ConsoleUIBackdrop', 0), 0, 0, 'BACKDROP', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.18, 0.1305)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.273, 0.1175)
      .setTexture('black.dds', 0, true)

    this.healthBar = new Frame('', this.healthBarBack, 0, 0, 'SIMPLESTATUSBAR', '')
      .setTexture('healthBar.dds', 0, true)
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.18, 0.1305)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.273, 0.1175)
      .setValue(100)

    this.healthBarText = new Frame('name', Frame.fromName('ConsoleUIBackdrop', 0), 0, 0, 'TEXT', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.18, 0.1305)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.273, 0.1175)
      .setText('|cff00ff1e9600 / 9600|r')
      .setEnabled(false)
      .setScale(0.715)
    BlzFrameSetTextAlignment(this.healthBarText.handle, TEXT_JUSTIFY_CENTER, TEXT_JUSTIFY_MIDDLE)

    this.manaBarBack = new Frame('manaBarBack', Frame.fromName('ConsoleUIBackdrop', 0), 0, 0, 'BACKDROP', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.18, 0.1155)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.273, 0.1025)
      .setTexture('black.dds', 0, true)

    this.manaBar = new Frame('', this.manaBarBack, 0, 0, 'SIMPLESTATUSBAR', '')
      .setTexture('manaBar.dds', 0, true)
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.18, 0.1155)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.273, 0.1025)
      .setValue(100)

    this.manaBarText = new Frame('name', Frame.fromName('ConsoleUIBackdrop', 0), 0, 0, 'TEXT', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.18, 0.1155)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.273, 0.1025)
      .setText('|cffffffff160 / 160|r')
      .setEnabled(false)
      .setScale(0.715)
    BlzFrameSetTextAlignment(this.manaBarText.handle, TEXT_JUSTIFY_CENTER, TEXT_JUSTIFY_MIDDLE)

    this.xpBarOver = new Frame('BACKDROP', Frame.fromName('ConsoleUIBackdrop', 0), 1, 1, 'BACKDROP', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.30508, 0.073081)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.4966, 0.056895)
      .setTexture('human-xpbar-border.dds', 0, true)

    this.xpBar = new Frame('name', this.xpBarOver, 0, 0, 'SIMPLESTATUSBAR', '')
      .setTexture('human-bigbar-fill.dds', 0, true)
      .setPoint(FRAMEPOINT_TOPLEFT, this.xpBarOver, FRAMEPOINT_TOPLEFT, -0.00112, 0.18806)
      .setPoint(FRAMEPOINT_BOTTOMRIGHT, this.xpBarOver, FRAMEPOINT_BOTTOMRIGHT, 0.01061, 0.18807)
      .setValue(100)
  }
}
