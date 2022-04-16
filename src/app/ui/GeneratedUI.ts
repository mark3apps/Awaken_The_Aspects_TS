/** @format */

import { Frame, Trigger } from 'lib/w3ts'

export class GeneratedUI {
  private static instance: GeneratedUI

  static getInstance() {
    if (!GeneratedUI.instance) GeneratedUI.instance = new GeneratedUI()
    return GeneratedUI.instance
  }

  portraitBackground: Frame
  healthBar: Frame
  BackhealthBar: Frame
  healthBarText: Frame
  manaBar: Frame
  BackmanaBar: Frame
  manaBarText: Frame

  private constructor() {
    let t: Trigger

    this.portraitBackground = new Frame('this.portraitBackground', Frame.fromName('ConsoleUIBackdrop', 0), 1, 1, 'BACKDROP', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.12395, 0.15315)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.17495, 0.1014)
      .setTexture('black.dds', 0, true)

    const xTL = 0.18
    const xBR = 0.271

    const yTLHealth = 0.1315
    const yBRHealth = 0.1175

    const yTLMana = 0.1165
    const yBRMana = 0.1025

    this.BackhealthBar = new Frame('this.BackhealthBar', Frame.fromName('ConsoleUIBackdrop', 0), 1, 1, 'BACKDROP', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, xTL, yTLHealth)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, xBR, yBRHealth)
      .setTexture('black.dds', 0, true)
    this.healthBar = new Frame('this.healthBar', this.BackhealthBar, 1, 1, 'SIMPLESTATUSBAR', '')
      .setTexture('healthBar.dds', 0, true)
      .setAbsPoint(FRAMEPOINT_TOPLEFT, xTL, yTLHealth)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, xBR, yBRHealth)
      .setValue(0)
    this.healthBarText = new Frame('name', Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0), 0, 0, 'TEXT', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, xTL, yTLHealth)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, xBR, yBRHealth)
      .setText('|cff00ff1e9600 / 9600|r')
      .setEnabled(false)
      .setScale(0.8)
      .setTextAlignment(TEXT_JUSTIFY_CENTER, TEXT_JUSTIFY_MIDDLE)

    this.BackmanaBar = new Frame('this.BackmanaBar', Frame.fromName('ConsoleUIBackdrop', 0), 1, 1, 'BACKDROP', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, xTL, yTLMana)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, xBR, yBRMana)
      .setTexture('black.dds', 0, true)
    this.manaBar = new Frame('this.manaBar', this.BackmanaBar, 1, 1, 'SIMPLESTATUSBAR', '')
      .setTexture('manaBar.dds', 0, true)
      .setAbsPoint(FRAMEPOINT_TOPLEFT, xTL, yTLMana)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, xBR, yBRMana)
      .setValue(0)

    this.manaBarText = new Frame('name', Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0), 0, 0, 'TEXT', '')
      .setAbsPoint(FRAMEPOINT_TOPLEFT, xTL, yTLMana)
      .setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, xBR, yBRMana)
      .setText('|cffffffff160 / 160|r')
      .setEnabled(false)
      .setScale(0.8)
      .setTextAlignment(TEXT_JUSTIFY_CENTER, TEXT_JUSTIFY_MIDDLE)
  }
}
