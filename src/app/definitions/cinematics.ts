

import { Players } from "lib/w3ts/globals/index"
import { MASK } from "lib/w3ts/globals/mask"
import { SKY } from "lib/w3ts/globals/sky"
import { SOUND } from "lib/w3ts/globals/sounds"
import { Camera, Timer, Unit } from "lib/w3ts/index"
import { FORCE } from "./forces"


export namespace CINEMATIC {


    export const setupCineCamera = (): void  => {

        SetSkyModel(SKY.blizzard)

        CinematicFilterGenericBJ(0.00, BLEND_MODE_BLEND, MASK.black, 0.00, 0.00, 0.00, 0.00, 0, 0, 0, 0)

        CinematicFadeBJ(bj_CINEFADETYPE_FADEIN, 3.00, MASK.black, 0, 0, 0, 0)

        const startCams = [
            gg_cam_intro01, gg_cam_intro02, gg_cam_intro03, gg_cam_intro04, gg_cam_intro05, gg_cam_intro06, gg_cam_intro07,
            gg_cam_intro08, gg_cam_intro09, gg_cam_intro10, gg_cam_intro11
        ]

        for (let i = 0; i < 11; i++) {

            const camChoice = GetRandomInt(1, startCams.length)
            CameraSetupApplyForPlayer(true, startCams[camChoice], Player(i), 0)
            const camX = CameraSetupGetDestPositionX(startCams[camChoice])
            const camY = CameraSetupGetDestPositionY(startCams[camChoice])

            const unit = new Unit(Players[19], FourCC("h01Z"), camX, camY, bj_UNIT_FACING)
            unit.applyTimedLife(FourCC("BTLF"), 20)

            Camera.setTargetControllerForPlayer(Players[i], unit, 0, 0, false)

        }
    }

    export const setupGameCamera = (): void  => {
        ResetToGameCamera(2)
    }

    export const startHeroSelector = (): void  => {

        HeroSelector.show(true)
        HeroSelector.enableBan(false)
        HeroSelector.enablePick(true)

        const countdown = new Timer()
        let timeLeft = 15


        // Loop Countdown
        countdown.start(1, true, () => {
            timeLeft -= 1

            HeroSelector.setTitleText(GetLocalizedString("DEFAULTTIMERDIALOGTEXT") + ": " + timeLeft)

            if (timeLeft < 6 && timeLeft > 0) {
                PlaySound(SOUND.battleNetTick)
            }


            if (timeLeft <= 0) {

                PlaySound(SOUND.warning)

                FORCE.AlliancePlayers.for(() => {
                    HeroSelector.forcePick(GetEnumPlayer())
                })

                FORCE.FederationPlayers.for(() => {
                    HeroSelector.forcePick(GetEnumPlayer())
                })

                countdown.pause()
                countdown.destroy()
                HeroSelector.destroy()

                setupGameCamera()
            }
        })


    }
}
