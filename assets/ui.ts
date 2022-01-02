export class UI {

   bottomUI: Frame

   constructor() {
      let t: Trigger;



this.bottomUI = new Frame("this.bottomUI", Frame.fromName("ConsoleUIBackdrop",0), 1, 1, "BACKDROP", "") 
this.bottomUI.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.0977700, 0.174136) 
this.bottomUI.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.667470, 0.000535700) 
this.bottomUI.setTexture("\\UI\\Bottom_MiniMap.dds", 0, true) 
}

}
