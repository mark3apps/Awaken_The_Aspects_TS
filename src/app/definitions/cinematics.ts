import { SOUND } from "lib/w3ts/globals/sounds"
import { Timer } from "lib/w3ts/index"
import { FORCE } from "./forces"


export namespace Cinematic {

    export function define(): void {

        HeroSelector.addUnit('Hpal') //add paladin as selectable Hero
        
    }

    export function setupCamera(): void {
        // Nothing

    }

    export function startHeroSelector(): void {

        HeroSelector.show(true)
        HeroSelector.enableBan(false)
        HeroSelector.enablePick(true)

        const countdown = new Timer()
        let timeLeft = 15


        // Loop Countdown
        countdown.start(1, true, () => {
            timeLeft -= 1

            HeroSelector.setTitleText( GetLocalizedString("DEFAULTTIMERDIALOGTEXT") + ": " + timeLeft)

            if (timeLeft < 6 && timeLeft > 0) {
                PlaySound(SOUND.battleNetTick)
            }

            
            if (timeLeft <= 0) {

                PlaySound(SOUND.warning)

                FORCE.AlliancePlayers.for(() => {
                    HeroSelector.forcePick(GetEnumPlayer())
                })


                countdown.pause()
                countdown.destroy()
                HeroSelector.destroy()
            }
        })


    }
}