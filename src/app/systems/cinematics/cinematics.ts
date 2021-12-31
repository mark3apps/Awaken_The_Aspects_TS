import { Hero, UnitType } from 'app/classes'
import { Logger } from 'app/log'
import { MapPlayer, Group, Unit, Players, Frame, Mask, Timer } from 'lib/w3ts'
import { Sky } from 'lib/w3ts/globals/sky'
import { Sounds } from 'lib/w3ts/globals/sounds'
import { ICinematicDepend } from './ICinematicDepend'

export class Cinematic {
	protected static instance: Cinematic

	static getInstance (depend: ICinematicDepend) {
		if (!Cinematic.instance) Cinematic.instance = new Cinematic(depend)
		return Cinematic.instance
	}

	// Dependencies
	camSetups
	forces

	constructor (depend: ICinematicDepend) {
		this.camSetups = depend.camSetups
		this.forces = depend.forces
	}

	// On Init
	onInit (): void {
		this.forces.Alliance.for(() => {
			MapPlayer.fromEnum().color = PLAYER_COLOR_RED
			const g = new Group()
			g.enumUnitsOfPlayer(MapPlayer.fromEnum(), () => {
				Unit.fromFilter().color = PLAYER_COLOR_RED
				return false
			})
			g.destroy()
		})

		this.forces.Federation.for(() => {
			MapPlayer.fromEnum().color = PLAYER_COLOR_BLUE
			const g = new Group()
			g.enumUnitsOfPlayer(MapPlayer.fromEnum(), () => {
				Unit.fromFilter().color = PLAYER_COLOR_BLUE
				return false
			})
			g.destroy()
		})
	}

	setupCustomUI () {
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
					.setAbsPoint(FramePoint.TL, x + 0.046, y + 0.255)
					.setAbsPoint(FramePoint.BR, x + 0.17, y + 0.126)
					.setLevel(1)

				// Remove Upper Button Bar Back
				Frame.fromName(Frame.DefaultName.consoleUI, 0)
					.setAbsPoint(FramePoint.TL, 0, -0.1)
					.setAbsPoint(FramePoint.B, 0, 0)

				// Hide Upper Button Bar Buttons
				Frame.fromName(Frame.DefaultName.upperButtonBarAlliesButton, 0)
					.clearPoints()
					.setAbsPoint(FramePoint.BL, 0, 1.5)
				Frame.fromName(Frame.DefaultName.upperButtonBarQuestsButton, 0)
					.clearPoints()
					.setAbsPoint(FramePoint.BL, 0, 1.5)

				// Move Upper Button Bar Buttons we like
				Frame.fromName(Frame.DefaultName.upperButtonBarMenuButton, 0)
					.clearPoints()
					.setAbsPoint(FramePoint.TL, 0.255, 0.60)
				Frame.fromName(Frame.DefaultName.upperButtonBarChatButton, 0)
					.clearPoints()
					.setAbsPoint(FramePoint.TL, 0.463, 0.60)

				// Move Gold Bar
				Frame.fromName(Frame.DefaultName.resourceBarGoldText, 0)
					.clearPoints()
					.setAbsPoint(FramePoint.TL, x + 0.060, y + 0.210)
				Frame.fromName(Frame.DefaultName.resourceBarLumberText, 0).clearPoints()
					.clearPoints()
					.setAbsPoint(FRAMEPOINT_TOPLEFT, x + 0.087, y + 0.210)

				// Hide Resource Bar
				Frame.fromName(Frame.DefaultName.resourceBarFrame, 0)
					.clearPoints()
					.setAbsPoint(FramePoint.TL, 0.0, 1.5)

				Frame.fromName(Frame.DefaultName.resourceBarUpkeepText, 0).setAbsPoint(FRAMEPOINT_TOPRIGHT, 0, 1.5)
				Frame.fromName(Frame.DefaultName.resourceBarSupplyText, 0).setAbsPoint(FRAMEPOINT_TOPRIGHT, 0, 1.5)

				// Hero Bar
				Frame.fromOrigin(ORIGIN_FRAME_HERO_BAR, 0)
					.clearPoints()
					.setAbsPoint(FramePoint.TL, x + 0.01, y + 0.214)

				Frame.fromOrigin(ORIGIN_FRAME_HERO_BUTTON, 0)
					.setScale(1.25)

				// HP Bar
				Frame.fromOrigin(ORIGIN_FRAME_HERO_HP_BAR, 0)
					.clearPoints()
					.setAbsPoint(FramePoint.BL, x + 0.065, y + 0.181)
					.setScale(2.3)

				// Mana Bar
				Frame.fromOrigin(ORIGIN_FRAME_HERO_MANA_BAR, 0)
					.clearPoints()
					.setAbsPoint(FramePoint.BL, x + 0.065, y + 0.175)
					.setScale(2.3)
			}
		}
	}

	setupCineCamera (): void {
		SetSkyModel(Sky.blizzard)
		FogEnableOff()

		CinematicFilterGenericBJ(0.00, BLEND_MODE_BLEND, Mask.black, 0.00, 0.00, 0.00, 0.00, 0, 0, 0, 0)
		CinematicFadeBJ(bj_CINEFADETYPE_FADEIN, 3.00, Mask.black, 0, 0, 0, 0)

		const startCams = [
			this.camSetups.intro01, this.camSetups.intro02, this.camSetups.intro03, this.camSetups.intro04, this.camSetups.intro05, this.camSetups.intro06, this.camSetups.intro07,
			this.camSetups.intro08, this.camSetups.intro09, this.camSetups.intro10, this.camSetups.intro11, this.camSetups.intro12, this.camSetups.intro13, this.camSetups.intro14
		]

		for (let i = 0; i < 11; i++) {
			const startCamera = startCams[GetRandomInt(0, startCams.length - 1)]

			Players[i].applyCamera(true, startCamera, 0)

			const unit = new Unit(Players[19], UnitType.DummyCameraLock, startCamera.position, bj_UNIT_FACING)
			unit.applyTimedLifeGeneric(30)

			Players[i].setTargetControllerCamera(unit, 0, 0, false)
		}

		this.setupCustomUI()
	}

	setupGameCamera = (): void => {
		const camLeftStart = this.camSetups.baseLeftPanStart
		const camLeftEnd = this.camSetups.baseLeftStart
		const camRightStart = this.camSetups.baseRightPanStart
		const camRightEnd = this.camSetups.baseRightStart

		this.forces.AlliancePlayers.for(() => {
			MapPlayer.fromEnum().applyCamera(true, camLeftStart, 0)
			MapPlayer.fromEnum().applyCamera(true, camLeftEnd, 2)
		})

		this.forces.FederationPlayers.for(() => {
			MapPlayer.fromEnum().applyCamera(true, camRightStart, 0)
			MapPlayer.fromEnum().applyCamera(true, camRightEnd, 2)
		})

		FogEnableOn()
	}

	startHeroSelector = (): void => {
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

					this.forces.Humans.for(() => {
						if (!Hero.PickedPlayers.hasPlayer(MapPlayer.fromEnum())) {
							Logger.Information('Picked', MapPlayer.fromEnum().name)
							HeroSelector.forcePick(GetEnumPlayer())
						}
					})

					for (let i = 0; i < Hero.all.length; i++) {
						const hero = Hero.all[i]
						hero.unit.show = true
					}

					countdown.pause()
					countdown.destroy()
					HeroSelector.destroy()

					this.setupGameCamera()
				}
			} catch (error) {
				Logger.Error('Hero Selector:', error)
			}
		})
	}
}

const FramePoint = {
	C: FRAMEPOINT_CENTER,
	T: FRAMEPOINT_TOP,
	B: FRAMEPOINT_BOTTOM,
	TL: FRAMEPOINT_TOPLEFT,
	TR: FRAMEPOINT_TOPRIGHT,
	BL: FRAMEPOINT_BOTTOMLEFT,
	BR: FRAMEPOINT_BOTTOMRIGHT,
	L: FRAMEPOINT_LEFT,
	R: FRAMEPOINT_RIGHT
}
