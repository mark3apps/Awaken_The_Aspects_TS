

import { Log } from "app/systems/log"
import { Hero } from "classes/hero"
import { Players } from "lib/w3ts/globals/index"
import { MASK } from "lib/w3ts/globals/mask"
import { SKY } from "lib/w3ts/globals/sky"
import { SOUND } from "lib/w3ts/globals/sounds"
import { CameraSetup, MapPlayer, Timer, Unit } from "lib/w3ts/index"
import { FORCE } from "./forces"
import { HERO } from "./heroes"


export namespace CINEMATIC {


	export const setupCineCamera = (): void => {


		SetSkyModel(SKY.blizzard)
		FogEnableOff()

		CinematicFilterGenericBJ(0.00, BLEND_MODE_BLEND, MASK.black, 0.00, 0.00, 0.00, 0.00, 0, 0, 0, 0)
		CinematicFadeBJ(bj_CINEFADETYPE_FADEIN, 3.00, MASK.black, 0, 0, 0, 0)

		const startCams = [
			gg_cam_intro01, gg_cam_intro02, gg_cam_intro03, gg_cam_intro04, gg_cam_intro05, gg_cam_intro06, gg_cam_intro07,
			gg_cam_intro08, gg_cam_intro09, gg_cam_intro10, gg_cam_intro11
		]

		for (let i = 0; i < 11; i++) {

			const startCamera = CameraSetup.fromHandle(startCams[GetRandomInt(1, startCams.length)])

			Players[i].applyCamera(true, startCamera, 0)

			const unit = new Unit(Players[19], FourCC("h01Z"), startCamera.destX, startCamera.destY, bj_UNIT_FACING)
			unit.applyTimedLife(FourCC("BTLF"), 30)

			Players[i].setTargetControllerCamera(unit, 0, 0, false)
		}
	}

	export const setupGameCamera = (): void => {

		const camLeftStart = CameraSetup.fromHandle(gg_cam_baseLeftPanStart)
		const camLeftEnd = CameraSetup.fromHandle(gg_cam_baseLeftStart)
		const camRightStart = CameraSetup.fromHandle(gg_cam_baseRightPanStart)
		const camRightEnd = CameraSetup.fromHandle(gg_cam_baseRightStart)

		FORCE.AlliancePlayers.for(() => {
			MapPlayer.fromEnum().applyCamera(true, camLeftStart, 0)
			MapPlayer.fromEnum().applyCamera(true, camLeftEnd, 2)
		})

		FORCE.FederationPlayers.for(() => {
			MapPlayer.fromEnum().applyCamera(true, camRightStart, 0)
			MapPlayer.fromEnum().applyCamera(true, camRightEnd, 2)
		})

		FogEnableOn()
	}

	export const startHeroSelector = (): void => {

		HeroSelector.show(true)
		HeroSelector.enableBan(false)
		HeroSelector.enablePick(true)

		const countdown = new Timer()
		let timeLeft = 15


		// Loop Countdown
		countdown.start(1, true, () => {

			try {
				timeLeft -= 1

				HeroSelector.setTitleText(GetLocalizedString("DEFAULTTIMERDIALOGTEXT") + ": " + timeLeft)

				if (timeLeft < 6 && timeLeft > 0) {
					PlaySound(SOUND.battleNetTick)
				}


				if (timeLeft <= 0) {

					PlaySound(SOUND.warning)


					FORCE.Humans.for(() => {
						if (!HERO.PickedPlayers.hasPlayer(MapPlayer.fromEnum())) {
							Log.Information("Picked", MapPlayer.fromEnum().name)
							HeroSelector.forcePick(GetEnumPlayer())
						}
					})

					for (let i = 0; i < Hero.all.length; i++) {
						const element = Hero.all[i]
						element.show = true
					}

					countdown.pause()
					countdown.destroy()
					HeroSelector.destroy()

					setupGameCamera()
				}
			} catch (error) {
				Log.Error("Hero Selector:", error)
			}

		})
	}
}
