import { EVENT } from "app/systems/events"
import { Log } from "app/systems/log"
import { Hero } from "classes/hero"
import { Force, Rectangle, Unit } from "lib/w3ts/index"
import { FORCE } from "./forces"


export namespace HEROES {

    export const PickedPlayers = new Force()

    export const define = (): void => {


        // When a Hero Levels up
        EVENT.heroLevels.add(() => {

            const hero = Hero.get(Unit.fromEvent())

            const player = hero.owner

            Log.Information("Hero Leveled Up:", hero.name)

            // Every Level increase Attack
            player.addTechResearched(FourCC("R005"), 1)

            // Every other level increase Armor
            if (hero.heroLevel % 2 == 0) {
                player.addTechResearched(FourCC("R006"), 1)
            }

        })


        // When a new hero is created add it to the index
        EVENT.unitCreated.add(() => {

            if (Unit.fromEvent().isHero) {
                const unit = Unit.fromEvent()

                
                // If Hero's Hero Type hasn't been defined yet (First time being created)
                if (unit.handle == udg_PickedHero) {
                    try {
                        Log.Information("Name:", unit.name)
                        
                        let x: number
                        let y: number

                        if (unit.owner.inForce(FORCE.AlliancePlayers)) {
                            x = Rectangle.fromHandle(gg_rct_Left_Castle).centerX
                            y = Rectangle.fromHandle(gg_rct_Left_Castle).centerY
                        } else {
                             x = Rectangle.fromHandle(gg_rct_Right_Castle).centerX
                             y = Rectangle.fromHandle(gg_rct_Right_Castle).centerY
                        }

                        const hero = new Hero(unit.owner, unit.typeId, x, y, 180)
                        unit.destroy()
                        
                        PickedPlayers.addPlayer(hero.owner)
    
                        Log.Information("Hero Type:", hero.data.heroType.id)

    
                        //unit.show = false
    
                        
    

                    } catch (error) {
                        Log.Error("Error", error)
                        
                    }

                }

            }

        })
    }
}


