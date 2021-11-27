

import { Log } from "app/systems/log"
import { Hero } from "app/classes/heroes/hero"
import { Players } from "lib/w3ts/globals/index"
import { MASK } from "lib/w3ts/globals/mask"
import { SKY } from "lib/w3ts/globals/sky"
import { SOUND } from "lib/w3ts/globals/sounds"
import { CameraSetup, Force, Group, MapPlayer, Timer, Unit } from "lib/w3ts/index"




export class Cinematic {

	// On Init
	static onInit(): void {
		Force.Alliance.for(() => {
			MapPlayer.fromEnum().color = PLAYER_COLOR_RED
			const g = new Group()
			g.enumUnitsOfPlayer(MapPlayer.fromEnum(), () => {
				Unit.fromFilter().color = PLAYER_COLOR_RED
				return false
			})
			g.destroy()
		})

		Force.Federation.for(() => {
			MapPlayer.fromEnum().color = PLAYER_COLOR_BLUE
			const g = new Group()
			g.enumUnitsOfPlayer(MapPlayer.fromEnum(), () => {
				Unit.fromFilter().color = PLAYER_COLOR_BLUE
				return false
			})
			g.destroy()
		})
	}

	static setupCineCamera(): void {


		SetSkyModel(SKY.blizzard)
		FogEnableOff()

		CinematicFilterGenericBJ(0.00, BLEND_MODE_BLEND, MASK.black, 0.00, 0.00, 0.00, 0.00, 0, 0, 0, 0)
		CinematicFadeBJ(bj_CINEFADETYPE_FADEIN, 3.00, MASK.black, 0, 0, 0, 0)

		const startCams = [
			gg_cam_intro01, gg_cam_intro02, gg_cam_intro03, gg_cam_intro04, gg_cam_intro05, gg_cam_intro06, gg_cam_intro07,
			gg_cam_intro08, gg_cam_intro09, gg_cam_intro10, gg_cam_intro11, gg_cam_intro12, gg_cam_intro13, gg_cam_intro14
		]

		for (let i = 0; i < 11; i++) {

			const startCamera = CameraSetup.fromHandle(startCams[GetRandomInt(0, startCams.length - 1)])

			Players[i].applyCamera(true, startCamera, 0)

			const unit = new Unit(Players[19], FourCC("h01Z"), startCamera.destX, startCamera.destY, bj_UNIT_FACING)
			unit.applyTimedLife(FourCC("BTLF"), 30)

			Players[i].setTargetControllerCamera(unit, 0, 0, false)
		}


	}

	static setupGameCamera = (): void => {

		const camLeftStart = CameraSetup.fromHandle(gg_cam_baseLeftPanStart)
		const camLeftEnd = CameraSetup.fromHandle(gg_cam_baseLeftStart)
		const camRightStart = CameraSetup.fromHandle(gg_cam_baseRightPanStart)
		const camRightEnd = CameraSetup.fromHandle(gg_cam_baseRightStart)

		Force.AlliancePlayers.for(() => {
			MapPlayer.fromEnum().applyCamera(true, camLeftStart, 0)
			MapPlayer.fromEnum().applyCamera(true, camLeftEnd, 2)
		})

		Force.FederationPlayers.for(() => {
			MapPlayer.fromEnum().applyCamera(true, camRightStart, 0)
			MapPlayer.fromEnum().applyCamera(true, camRightEnd, 2)
		})

		FogEnableOn()
	}

	static startHeroSelector = (): void => {

		HeroSelector.show(true)
		HeroSelector.enableBan(false)
		HeroSelector.enablePick(true)

		const countdown = new Timer()
		let timeLeft = 10


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


					Force.Humans.for(() => {
						if (!Hero.PickedPlayers.hasPlayer(MapPlayer.fromEnum())) {
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

					Cinematic.setupGameCamera()
				}
			} catch (error) {
				Log.Error("Hero Selector:", error)
			}

		})
	}
}
