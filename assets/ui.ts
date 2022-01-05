export class REFORGEDUIMAKER {

   unitBanner: Frame

   constructor() {
      let t: Trigger;



this.unitBanner = new Frame("this.unitBanner", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 1, 1, "BACKDROP", "") 
this.unitBanner.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.266100, 0.164460) 
this.unitBanner.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.471900, 0.121600) 
this.unitBanner.setTexture("", 0, true) 
}

}
