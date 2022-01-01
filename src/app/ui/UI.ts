/** @format */

import { Frame, Trigger } from "lib/w3ts"

export class UI {
  Frame07: Frame
  Frame08: Frame
  Frame018: Frame
  Frame025: Frame
  Frame026: Frame

  constructor() {
    let t: Trigger

    this.Frame07 = new Frame("this.Frame07", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 1, 1, "BACKDROP", "")
    this.Frame07.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.07507, 0.2596)
    this.Frame07.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.21017, 0.1344)
    this.Frame07.setTexture("\\UI\\ResourceBar_combined.dds", 0, true)

    this.Frame08 = new Frame("OptionsPopupMenuBackdropTemplate", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 0, 0)
    this.Frame08.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.7034, 0.22776)
    this.Frame08.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.80105, 0.1938)

    this.Frame018 = new Frame("OptionsPopupMenuBackdropTemplate", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 0, 0)
    this.Frame018.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.7027, 0.19385)
    this.Frame018.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.80035, 0.1606)

    this.Frame025 = new Frame("ScriptDialogButton", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 0, 0)
    this.Frame025.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.7076, 0.22292)
    this.Frame025.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.78685, 0.2024)
    this.Frame025.text = "|cffFCD20DText|r"
    this.Frame025.setScale(1.0)
    t = new Trigger()
    t.triggerRegisterFrameEvent(this.Frame025, FRAMEEVENT_CONTROL_CLICK)
    t.addAction(() => {
      this.Frame025.enabled = false
      this.Frame025.enabled = true
    })

    this.Frame026 = new Frame("ScriptDialogButton", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 0, 0)
    this.Frame026.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.7076, 0.18892)
    this.Frame026.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.78685, 0.1684)
    this.Frame026.text = "|cffFCD20DText|r"
    this.Frame026.setScale(1.0)
    t = new Trigger()
    t.triggerRegisterFrameEvent(this.Frame026, FRAMEEVENT_CONTROL_CLICK)
    t.addAction(() => {
      this.Frame026.enabled = false
      this.Frame026.enabled = true
    })
  }
}
