/** @format */

import { Coordinate } from "app/classes/Coordinate"
import { FramePoint, Frames, FrameType } from "app/define/Frames"
import { Logger } from "app/log"
import { ATTACK_SPEED_BONUS_PER_AGILITY_POINT } from "lib/resources/gameplayConstants"
import { Frame, MapPlayer, Timer, Trigger, Unit } from "lib/w3ts"

export interface IUIDepend {}

export class UI {
  protected static instance: UI

  static getInstance(depend: IUIDepend) {
    if (!UI.instance) UI.instance = new UI(depend)
    return UI.instance
  }

  black: Frame
  banner1: Frame
  banner2: Frame
  banner2Cover: Frame
  banner3: Frame
  banner4: Frame

  iconStr: Frame
  iconAgi: Frame
  iconInt: Frame

  iconMoveSpeed: Frame
  textMoveSpeed: Frame
  iconAttackSpeed: Frame
  textAttackSpeed: Frame

  healthBar: Frame
  manaBar: Frame
  shieldBar: Frame
  statBarFullWidth = 0.123

  playerUnits: (Unit | undefined)[] = []

  private constructor(depend: IUIDepend) {
    let t: Trigger

    const xOff = 0.024
    const yOff = 0

    BlzEnableUIAutoPosition(false)
    Frame.fromContext(Frames.consoleUIBackdrop).setSize(0.2, 0.0001)

    // Create Custom Frames

    // UI Backdrop
    this.banner1 = new Frame("unitBanner1", Frame.fromContext(Frames.consoleUIBackdrop), 1, 1, FrameType.backdrop, "")
    this.banner1.setTexture("\\UI\\bottomUi1.dds", 0, true)
    this.banner1.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.0, 0.0)
    this.banner1.setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.2, 0.1939)

    this.black = new Frame("blackBg", Frame.fromContext(Frames.consoleUIBackdrop), 1, 1, FrameType.backdrop, "")
    this.black.setTexture("\\UI\\black.dds", 0, true)
    this.black.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.275, 0.045)
    this.black.setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.35, 0.122)

    this.banner2 = new Frame("unitBanner2", Frame.fromContext(Frames.consoleUIBackdrop), 1, 1, FrameType.backdrop, "")
    this.banner2.setTexture("\\UI\\bottomUi2.dds", 0, true)
    this.banner2.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.2, 0.0)
    this.banner2.setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.4, 0.1939)

    this.banner2Cover = new Frame("unitBanner2Cover", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI), 1, 1, FrameType.backdrop, "")
    this.banner2Cover.setTexture("\\UI\\bottomUi2Cover.dds", 0, true)
    this.banner2Cover.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.2, 0.0)
    this.banner2Cover.setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.4, 0.1939)

    this.banner3 = new Frame("unitBanner3", Frame.fromContext(Frames.consoleUIBackdrop), 1, 1, FrameType.backdrop, "")
    this.banner3.setTexture("\\UI\\bottomUi3.dds", 0, true)
    this.banner3.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.4, 0.0)
    this.banner3.setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.6, 0.1939)

    this.banner4 = new Frame("unitBanner4", Frame.fromContext(Frames.consoleUIBackdrop), 1, 1, FrameType.backdrop, "")
    this.banner4.setTexture("\\UI\\bottomUi4.dds", 0, true)
    this.banner4.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.6, 0.0)
    this.banner4.setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.8, 0.1939)

    // Hero Attribute Icons
    this.iconStr = new Frame("iconStr", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI), 1, 1, FrameType.backdrop, "")
    this.iconStr.setTexture("\\UI\\widgets\\console\\human\\infocard-heroattributes-str.dds", 0, true).setVisible(false)

    this.iconAgi = new Frame("iconAgi", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI), 1, 1, FrameType.backdrop, "")
    this.iconAgi.setTexture("\\UI\\widgets\\console\\human\\infocard-heroattributes-agi.dds", 0, true).setVisible(false)

    this.iconInt = new Frame("iconInt", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI), 1, 1, FrameType.backdrop, "")
    this.iconInt.setTexture("\\UI\\widgets\\console\\human\\infocard-heroattributes-int.dds", 0, true).setVisible(false)

    this.iconAttackSpeed = new Frame("iconAttackSpeed", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI), 1, 1, FrameType.backdrop, "")
    this.iconAttackSpeed.setTexture("\\UI\\Icons\\iconAttackSpeed.dds", 0, true).setVisible(true)

    this.iconMoveSpeed = new Frame("iconMoveSpeed", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI), 1, 1, FrameType.backdrop, "")
    this.iconMoveSpeed.setTexture("\\UI\\Icons\\iconMoveSpeed.dds", 0, true).setVisible(true)

    this.textAttackSpeed = new Frame("textAttackSpeed", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI), 1, 1, FrameType.text, "")
    this.textMoveSpeed = new Frame("textMoveSpeed", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI), 1, 1, FrameType.text, "")

    // Health & Mana Bar
    this.healthBar = new Frame("healthBar", Frame.fromContext(Frames.consoleUIBackdrop), 1, 1, FrameType.backdrop, "")
    this.healthBar
      .setAlpha(100)
      .setTexture("\\UI\\healthBar.dds", 0, true)
      .setAbsPoint(FramePoint.TL, 0.334 + xOff, 0.115)
      .setSize(this.statBarFullWidth, 0.017)

    this.shieldBar = new Frame("shieldBar", Frame.fromContext(Frames.consoleUIBackdrop), 1, 1, FrameType.backdrop, "")
    this.shieldBar
      .setTexture("\\UI\\manaBar.dds", 0, true)
      .setAbsPoint(FramePoint.TL, 0.334 + xOff, 0.115)
      .setSize(this.statBarFullWidth, 0.002)

    this.manaBar = new Frame("manaBar", Frame.fromContext(Frames.consoleUIBackdrop), 1, 1, FrameType.backdrop, "")
    this.manaBar
      .setAlpha(100)
      .setTexture("\\UI\\manaBar.dds", 0, true)
      .setAbsPoint(FramePoint.TL, 0.334 + xOff, 0.097)
      .setSize(this.statBarFullWidth, 0.016)

    // Hidden Frames
    Frame.fromContext(Frames.InventoryText).clearPoints().setAbsPoint(FramePoint.TL, 1.5, 0.5)
    Frame.fromContext(Frames.ResourceBarFrame).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, 1.5, 0.5)
    Frame.fromContext(Frames.SimpleInfoPanelIconAlly).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, 1.5, 0.5)
    Frame.fromOrigin(ORIGIN_FRAME_SYSTEM_BUTTON, 1).clearPoints().setAbsPoint(FramePoint.BL, 1.5, 0.5)
    Frame.fromOrigin(ORIGIN_FRAME_SYSTEM_BUTTON, 3).clearPoints().setAbsPoint(FramePoint.BL, 1.5, 0.5)

    // Set Origin Frames

    // MiniMap
    Frame.fromOrigin(ORIGIN_FRAME_MINIMAP)
      .clearPoints()
      .setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.089 + xOff, 0.008 + yOff)
    // Portrait
    Frame.fromOrigin(ORIGIN_FRAME_PORTRAIT)
      .clearPoints()
      .setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0.31 + xOff, 0.057)
      .setAbsPoint(FRAMEPOINT_TOPRIGHT, 0.346 + xOff, 0.116 + yOff)
    // Unit Buff Label
    Frame.fromOrigin(ORIGIN_FRAME_UNIT_PANEL_BUFF_BAR_LABEL)
      .clearPoints()
      .setAbsPoint(FramePoint.BL, 0.494 + xOff, 0.056 + yOff)
    // Unit Buff Icons
    Frame.fromOrigin(ORIGIN_FRAME_UNIT_PANEL_BUFF_BAR)
      .clearPoints()
      .setAbsPoint(FramePoint.BL, 0.524 + xOff, 0.049 + yOff)

    // Menu Bars
    Frame.fromOrigin(ORIGIN_FRAME_SYSTEM_BUTTON, 0)
      .clearPoints()
      .setAbsPoint(FramePoint.BL, 0.672 + xOff, 0.018 + yOff)
    Frame.fromOrigin(ORIGIN_FRAME_SYSTEM_BUTTON, 2)
      .clearPoints()
      .setAbsPoint(FramePoint.BL, 0.672 + xOff, 0.0 + yOff)

    // HP / Mana Text
    Unit.fromHandle(gg_unit_Hpal_0002).select(true)
    const time = new Timer()
    time.start(0.1, false, () => {
      const x = 0 + xOff
      const y = -0.004 + yOff
      Frame.fromOrigin(ORIGIN_FRAME_PORTRAIT_HP_TEXT, 0)
        .clearPoints()
        .setAbsPoint(FramePoint.C, x + 0.397, y + 0.109)
      Frame.fromOrigin(ORIGIN_FRAME_PORTRAIT_MANA_TEXT, 0)
        .clearPoints()
        .setAbsPoint(FramePoint.C, x + 0.397, y + 0.092)
    })

    // Order Buttons
    let x = 0.522 + xOff
    let xInc = 0.0187
    let y = 0.159 + yOff
    let yInc = 0
    let scale = 0.7
    let frames = [Frames.CommandButton4, Frames.CommandButton0, Frames.CommandButton1, Frames.CommandButton2, Frames.CommandButton3]

    for (let index = 0; index < frames.length; index++) {
      Frame.fromContext(frames[index]).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += xInc
      y += yInc
    }

    // Items Buttons
    x = 0.327 + xOff
    xInc = 0.0235
    y = 0.073 + yOff
    yInc = 0
    scale = 0.58
    frames = [Frames.InventoryButton0, Frames.InventoryButton1, Frames.InventoryButton2, Frames.InventoryButton3, Frames.InventoryButton4, Frames.InventoryButton5]

    for (let index = 0; index < frames.length; index++) {
      Frame.fromContext(frames[index]).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += xInc
      y += yInc
    }

    // Ability Buttons
    x = 0.252 + xOff
    xInc = 0.0409
    y = 0.045 + yOff
    yInc = 0
    scale = 1
    frames = [Frames.CommandButton5, Frames.CommandButton8, Frames.CommandButton9, Frames.CommandButton10]

    for (let index = 0; index < frames.length; index++) {
      Frame.fromContext(frames[index]).clearPoints().setAbsPoint(FRAMEPOINT_TOPLEFT, x, y).setScale(scale)

      x += xInc
      y += yInc
    }

    // Ult Ability
    Frame.fromContext(Frames.CommandButton11)
      .clearPoints()
      .setAbsPoint(FRAMEPOINT_TOPLEFT, 0.43 + xOff, y + yOff)
      .setScale(scale)

    // Level Upgrade Effects
    Frame.fromContext(Frames.CommandButton6)
      .clearPoints()
      .setAbsPoint(FramePoint.TL, 0.5 + xOff, 0.041)
      .setScale(0.95 + yOff)
    Frame.fromContext(Frames.CommandButton7)
      .clearPoints()
      .setAbsPoint(FramePoint.TL, 0.54 + xOff, 0.041)
      .setScale(0.95 + yOff)

    // Resources
    Frame.fromContext(Frames.ResourceBarGoldText)
      .clearPoints()
      .setAbsPoint(FramePoint.TR, 0.651 + xOff, 0.039 + yOff)
    Frame.fromContext(Frames.ResourceBarLumberText)
      .clearPoints()
      .setAbsPoint(FramePoint.TR, 0.651 + xOff, 0.02 + yOff)
    Frame.fromContext(Frames.ResourceTradingTitle)
      .clearPoints()
      .setAbsPoint(FramePoint.TR, 0.5 + xOff, 0.5 + yOff)

    // Experience / Name Bars
    x = 0.358 + xOff
    y = 0.156 + yOff
    Frame.fromContext(Frames.SimpleNameValue)
      .clearPoints()
      .setAbsPoint(FramePoint.T, x, y - 0.001)
    Frame.fromContext(Frames.SimpleHeroLevelBar)
      .clearPoints()
      .setAbsPoint(FramePoint.T, x, y - 0.014)
    Frame.fromContext(Frames.SimpleClassValue)
      .clearPoints()
      .setAbsPoint(FramePoint.T, x, y - 0.018)

    // Destructible
    Frame.fromContext(Frames.SimpleDestructableNameValue)
      .clearPoints()
      .setAbsPoint(FramePoint.T, x, y - 0.001)
    Frame.fromContext(Frames.SimpleInfoPanelDestructableDetail)
      .clearPoints()
      .setAbsPoint(FramePoint.TL, 0.488 + xOff, 0.14 + yOff)

    // Item Info
    Frame.fromContext(Frames.SimpleItemNameValue)
      .clearPoints()
      .setAbsPoint(FramePoint.T, x, y - 0.001)
    Frame.fromContext(Frames.SimpleItemDescriptionValue)
      .clearPoints()
      .setAbsPoint(FramePoint.TL, 0.488 + xOff, 0.14 + yOff)
      .setWidth(0.17)

    // Unit Info
    Frame.fromContext(Frames.SimpleInfoPanelIconDamage)
      .clearPoints()
      .setAbsPoint(FramePoint.TL, 0.486 + xOff, 0.138 + yOff)

    Frame.fromContext(Frames.InfoPanelIconHeroIcon).setAbsPoint(FramePoint.TL, 1.5, 0.5)
    Frame.fromContext(Frames.InfoPanelIconHeroStrengthLabel).setText("")
    Frame.fromContext(Frames.InfoPanelIconHeroAgilityLabel).setText("")
    Frame.fromContext(Frames.InfoPanelIconHeroIntellectLabel).setText("")

    let statIcons = setFrames({
      frames: [this.iconStr, this.iconAgi, this.iconInt],
      coor: { x: 0.58 + xOff, y: 0.136 + yOff },
      coorInc: { x: 0, y: -0.013 },
      width: 0.011,
      height: 0.011,
    })
    statIcons.frames = [this.iconAttackSpeed, this.iconMoveSpeed]
    statIcons = setFrames(statIcons)

    const statText = setFrames({
      frames: [
        Frame.fromContext(Frames.InfoPanelIconHeroStrengthValue),
        Frame.fromContext(Frames.InfoPanelIconHeroAgilityValue),
        Frame.fromContext(Frames.InfoPanelIconHeroIntellectValue),
      ],
      coor: { x: statIcons.coor.x + 0.015, y: 0.134 + yOff },
      coorInc: { x: 0, y: -0.013 },
    })
    statText.frames = [this.textAttackSpeed, this.textMoveSpeed]
    statText.scale = 0.85
    statText.text = "200"
    setFrames(statText)

    const timer = new Timer()
    timer.start(0.5, true, () => {
      for (let i = 0; i < this.playerUnits.length; i++) {
        const u = this.playerUnits[i]

        if (u) {
          if (MapPlayer.fromLocal() === MapPlayer.fromIndex(i)) {
            this.healthBar.width = (u.lifePercent / 100) * this.statBarFullWidth
            this.manaBar.width = u.mana > 0 ? (u.manaPercent / 100) * this.statBarFullWidth : 0.0001
            this.shieldBar.width = u.shield > 0 ? (u.shieldPercentage / 100) * this.statBarFullWidth : 0.0001
            this.textMoveSpeed.text = `${math.floor(u.moveSpeed)}`
            this.textAttackSpeed.setVisible(true).text = `${agilitySpeedBase(u)} |c0020C000${agilitySpeedBonus(u)}|r sec`
          }
        }
      }
    })

    t = new Trigger()
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SELECTED)
    t.addAction(() => {
      try {
        if (MapPlayer.fromLocal() === MapPlayer.fromEvent()) {
          const u = Unit.fromEvent()
          const selectedCount = u.owner.getSelectedUnitsCount()

          if (selectedCount <= 1) {
            // Health Bar
            this.playerUnits[u.owner.id] = u
            this.healthBar.setVisible(true).width = (u.lifePercent / 100) * this.statBarFullWidth
            this.shieldBar.setVisible(true).width = u.shield > 0 ? (u.shieldPercentage / 100) * this.statBarFullWidth : 0.0001
            this.manaBar.setVisible(true).width = u.mana > 0 ? (u.manaPercent / 100) * this.statBarFullWidth : 0.0001

            this.iconMoveSpeed.visible = true
            this.iconAttackSpeed.visible = true

            this.textMoveSpeed.setVisible(true).text = `${math.floor(u.moveSpeed)}`

            // Hero Attribute Bar
            if (u && u.isHero) {
              this.iconStr.visible = true
              this.iconAgi.visible = true
              this.iconInt.visible = true
              this.textAttackSpeed.setVisible(true).text = `${agilitySpeedBase(u)} |c0020C000${agilitySpeedBonus(u)}|r sec`
            } else {
              this.textAttackSpeed.setVisible(true).text = `${u.weapon1Cooldown} sec`
              this.iconStr.visible = false
              this.iconAgi.visible = false
              this.iconInt.visible = false
            }
          }
        }
      } catch (error) {
        Logger.Error("Error", error)
      }
    })

    t = new Trigger()
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DESELECTED)
    t.addAction(() => {
      if (MapPlayer.fromLocal() === MapPlayer.fromEvent()) {
        this.playerUnits[MapPlayer.fromEvent().id] = undefined
        this.healthBar.visible = false
        this.shieldBar.visible = false
        this.manaBar.visible = false
        this.iconMoveSpeed.visible = false
        this.iconAttackSpeed.visible = false
        this.textAttackSpeed.visible = false
        this.textMoveSpeed.visible = false
        this.iconStr.visible = false
        this.iconAgi.visible = false
        this.iconInt.visible = false
      }
    })
  }
}

interface IIterateFrames {
  framePoint?: framepointtype
  frames: Frame[]
  coor: Coordinate
  coorInc: Coordinate
  scale?: number
  scaleInc?: number
  width?: number
  widthInc?: number
  height?: number
  heightInc?: number
  text?: string
}

const setFrames = (iter: IIterateFrames) => {
  for (let index = 0; index < iter.frames.length; index++) {
    iter.frames[index].clearPoints().setAbsPoint(iter.framePoint ?? FramePoint.TL, iter.coor.x, iter.coor.y)

    if (iter.scale) iter.frames[index].setScale(iter.scale)
    if (iter.width) iter.frames[index].setWidth(iter.width)
    if (iter.height) iter.frames[index].setHeight(iter.height)
    if (iter.text) iter.frames[index].setText(iter.text)

    iter.coor.x += iter.coorInc.x
    iter.coor.y += iter.coorInc.y
  }

  return iter
}

const attackSpeedMin = (u: Unit) => {
  return u.weapon1Cooldown - u.weapon1Cooldown / 4
}

const agilitySpeedBase = (u: Unit) => {
  if (u.isHero) {
    return u.weapon1Cooldown - math.min(u.agility * ATTACK_SPEED_BONUS_PER_AGILITY_POINT, attackSpeedMin(u))
  } else {
    return u.weapon1Cooldown
  }
}

const agilitySpeedBonus = (u: Unit) => {
  if (u.isHero) {
    return u.weapon1Cooldown - math.min(u.agilityWithBonus * ATTACK_SPEED_BONUS_PER_AGILITY_POINT, attackSpeedMin(u)) - agilitySpeedBase(u)
  } else {
    return u.weapon1Cooldown
  }
}
