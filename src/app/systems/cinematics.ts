/* eslint-disable camelcase */

import { Hero } from 'app/classes/hero'
import { Logger } from 'app/classes/log'
import { Sky } from 'lib/w3ts/globals/sky'
import { Sounds } from 'lib/w3ts/globals/sounds'
import { Force, MapPlayer, Group, Unit, Mask, CameraSetup, Players, Timer, Frame } from 'lib/w3ts/index'

export class Cinematic {
	// On Init
	static onInit (): void {
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

	static setupCustomUI () {
		// Set Hero Bar Offsets
		const x = 0.205
		const y = -0.025

		for (let i = 0; i < Players.length; i++) {
			const player = Players[i]

			if (player === MapPlayer.fromLocal()) {
				// Turn off Auto Positioning
				BlzEnableUIAutoPosition(false)

				// Create Hero Bar Background UI Texture
				const heroBarUI = new Frame('image', Frame.fromName(Frame.DefaultName.consoleUIBackdrop, 0), 1, 0, Frame.Type.backdrop, Frame.DefaultName.buttonBackdropTemplate)
				heroBarUI.setTexture('UI\\ResourceBar_combined.dds', 0, true)
					.setAbsPoint(FRAMEPOINT_TOPLEFT, x + 0.046, y + 0.255)
					.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, x + 0.17, y + 0.126)
					.setLevel(1)

				// Remove Upper Button Bar Back
				Frame.fromName(Frame.DefaultName.consoleUI, 0)
					.setAbsPoint(FRAMEPOINT_TOPLEFT, 0, -0.1)
					.setAbsPoint(FRAMEPOINT_BOTTOM, 0, 0)

				// Hide Upper Button Bar Buttons
				Frame.fromName(Frame.DefaultName.upperButtonBarAlliesButton, 0)
					.clearPoints()
					.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0, 1.5)
				Frame.fromName(Frame.DefaultName.upperButtonBarQuestsButton, 0)
					.clearPoints()
					.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, 0, 1.5)

				// Move Upper Button Bar Buttons we like
				Frame.fromName(Frame.DefaultName.upperButtonBarMenuButton, 0)
					.clearPoints()
					.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.255, 0.60)
				Frame.fromName(Frame.DefaultName.upperButtonBarChatButton, 0)
					.clearPoints()
					.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.463, 0.60)

				// Move Gold Bar
				Frame.fromName(Frame.DefaultName.resourceBarGoldText, 0)
					.clearPoints()
					.setAbsPoint(FRAMEPOINT_TOPLEFT, x + 0.060, y + 0.210)
				Frame.fromName(Frame.DefaultName.resourceBarLumberText, 0).clearPoints()
					.clearPoints()
					.setAbsPoint(FRAMEPOINT_TOPLEFT, x + 0.087, y + 0.210)

				// Hide Resource Bar
				Frame.fromName(Frame.DefaultName.resourceBarFrame, 0)
					.clearPoints()
					.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.0, 1.5)

				Frame.fromName(Frame.DefaultName.resourceBarUpkeepText, 0).setAbsPoint(FRAMEPOINT_TOPRIGHT, 0, 1.5)
				Frame.fromName(Frame.DefaultName.resourceBarSupplyText, 0).setAbsPoint(FRAMEPOINT_TOPRIGHT, 0, 1.5)

				// Hero Bar
				Frame.fromOrigin(ORIGIN_FRAME_HERO_BAR, 0)
					.clearPoints()
					.setAbsPoint(FRAMEPOINT_TOPLEFT, x + 0.01, y + 0.214)

				Frame.fromOrigin(ORIGIN_FRAME_HERO_BUTTON, 0)
					.setScale(1.25)

				// HP Bar
				Frame.fromOrigin(ORIGIN_FRAME_HERO_HP_BAR, 0)
					.clearPoints()
					.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, x + 0.065, y + 0.181)
					.setScale(2.3)

				// Mana Bar
				Frame.fromOrigin(ORIGIN_FRAME_HERO_MANA_BAR, 0)
					.clearPoints()
					.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, x + 0.065, y + 0.175)
					.setScale(2.3)
			}
		}
	}

	static setupCineCamera (): void {
		SetSkyModel(Sky.blizzard)
		FogEnableOff()

		CinematicFilterGenericBJ(0.00, BLEND_MODE_BLEND, Mask.black, 0.00, 0.00, 0.00, 0.00, 0, 0, 0, 0)
		CinematicFadeBJ(bj_CINEFADETYPE_FADEIN, 3.00, Mask.black, 0, 0, 0, 0)

		const startCams = [
			gg_cam_intro01, gg_cam_intro02, gg_cam_intro03, gg_cam_intro04, gg_cam_intro05, gg_cam_intro06, gg_cam_intro07,
			gg_cam_intro08, gg_cam_intro09, gg_cam_intro10, gg_cam_intro11, gg_cam_intro12, gg_cam_intro13, gg_cam_intro14
		]

		for (let i = 0; i < 11; i++) {
			const startCamera = CameraSetup.fromHandle(startCams[GetRandomInt(0, startCams.length - 1)])

			Players[i].applyCamera(true, startCamera, 0)

			const unit = new Unit(Players[19], FourCC('h01Z'), startCamera.position, bj_UNIT_FACING)
			unit.applyTimedLife(FourCC('BTLF'), 30)

			Players[i].setTargetControllerCamera(unit, 0, 0, false)
		}

		this.setupCustomUI()
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

				HeroSelector.setTitleText(GetLocalizedString('DEFAULTTIMERDIALOGTEXT') + ': ' + timeLeft)

				if (timeLeft < 6 && timeLeft > 0) {
					PlaySound(Sounds.battleNetTick)
				}

				if (timeLeft <= 0) {
					PlaySound(Sounds.warning)

					Force.Humans.for(() => {
						if (!Hero.PickedPlayers.hasPlayer(MapPlayer.fromEnum())) {
							Logger.Information('Picked', MapPlayer.fromEnum().name)
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
				Logger.Error('Hero Selector:', error)
			}
		})
	}
}
