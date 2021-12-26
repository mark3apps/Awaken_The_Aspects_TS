import { CameraSetup } from './camera'


export class CameraSetups {
	/// / AUTO DEFINE
	static baseLeftStart: CameraSetup
	static intro06: CameraSetup
	static intro01: CameraSetup
	static intro02: CameraSetup
	static intro03: CameraSetup
	static intro04: CameraSetup
	static intro05: CameraSetup
	static baseRightStart: CameraSetup
	static intro07: CameraSetup
	static intro08: CameraSetup
	static intro09: CameraSetup
	static intro10: CameraSetup
	static intro11: CameraSetup
	static intro12: CameraSetup
	static intro13: CameraSetup
	static baseLeftPanStart: CameraSetup
	static baseRightPanStart: CameraSetup
	static intro14: CameraSetup

	static defineGlobals (): void {
		CameraSetups.baseLeftStart = CameraSetup.fromHandle(gg_cam_baseLeftStart)
		CameraSetups.intro06 = CameraSetup.fromHandle(gg_cam_intro06)
		CameraSetups.intro01 = CameraSetup.fromHandle(gg_cam_intro01)
		CameraSetups.intro02 = CameraSetup.fromHandle(gg_cam_intro02)
		CameraSetups.intro03 = CameraSetup.fromHandle(gg_cam_intro03)
		CameraSetups.intro04 = CameraSetup.fromHandle(gg_cam_intro04)
		CameraSetups.intro05 = CameraSetup.fromHandle(gg_cam_intro05)
		CameraSetups.baseRightStart = CameraSetup.fromHandle(gg_cam_baseRightStart)
		CameraSetups.intro07 = CameraSetup.fromHandle(gg_cam_intro07)
		CameraSetups.intro08 = CameraSetup.fromHandle(gg_cam_intro08)
		CameraSetups.intro09 = CameraSetup.fromHandle(gg_cam_intro09)
		CameraSetups.intro10 = CameraSetup.fromHandle(gg_cam_intro10)
		CameraSetups.intro11 = CameraSetup.fromHandle(gg_cam_intro11)
		CameraSetups.intro12 = CameraSetup.fromHandle(gg_cam_intro12)
		CameraSetups.intro13 = CameraSetup.fromHandle(gg_cam_intro13)
		CameraSetups.baseLeftPanStart = CameraSetup.fromHandle(gg_cam_baseLeftPanStart)
		CameraSetups.baseRightPanStart = CameraSetup.fromHandle(gg_cam_baseRightPanStart)
		CameraSetups.intro14 = CameraSetup.fromHandle(gg_cam_intro14)
	}
}
