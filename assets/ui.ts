export class UI {

   Frame07: Frame
   Frame08: Frame
   Frame018: Frame
   Frame025: Frame
   Frame026: Frame

   constructor() {
      let t: Trigger;



this.Frame07 = new Frame("this.Frame07", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 1, 1, "BACKDROP", "") 
this.Frame07.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.0750700, 0.259600) 
this.Frame07.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.210170, 0.134400) 
this.Frame07.setTexture("\\UI\\ResourceBar_combined.dds", 0, true) 

this.Frame08 = new Frame("OptionsPopupMenuBackdropTemplate", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0),0,0) 
this.Frame08.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.703400, 0.227760) 
this.Frame08.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.801050, 0.193800) 

this.Frame018 = new Frame("OptionsPopupMenuBackdropTemplate", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0),0,0) 
this.Frame018.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.702700, 0.193850) 
this.Frame018.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.800350, 0.160600) 

this.Frame025 = new Frame("ScriptDialogButton", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0),0,0) 
this.Frame025.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.707600, 0.222920) 
this.Frame025.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.786850, 0.202400) 
this.Frame025.text = "|cffFCD20DText|r" 
this.Frame025.setScale(1.00) 
 t = new Trigger() 
t.triggerRegisterFrameEvent(this.Frame025, FRAMEEVENT_CONTROL_CLICK) 
t.addAction( () => {
this.Frame025.enabled = false 
this.Frame025.enabled = true 
})

this.Frame026 = new Frame("ScriptDialogButton", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0),0,0) 
this.Frame026.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.707600, 0.188920) 
this.Frame026.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.786850, 0.168400) 
this.Frame026.text = "|cffFCD20DText|r" 
this.Frame026.setScale(1.00) 
 t = new Trigger() 
t.triggerRegisterFrameEvent(this.Frame026, FRAMEEVENT_CONTROL_CLICK) 
t.addAction( () => {
this.Frame026.enabled = false 
this.Frame026.enabled = true 
})
}

}
