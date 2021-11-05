import { EVENT } from "app/systems/events"
import { Log } from "app/systems/log"
import { HeroType } from "classes/herotype"
import { Rectangle, Unit } from "lib/w3ts/index"
import { FORCE } from "./forces"


export namespace HEROES {

    export const All: Unit[] = []
    export const Human: Unit[] = []
    export const AI: Unit[] = []

    export const define = (): void => {


        // When a Hero Levels up
        EVENT.heroLevels.add(() => {
            
            const unit = Unit.fromEvent()
            const player = unit.owner

            // Every Level increase Attack
            player.addTechResearched(FourCC("R005"), 1)

            // Every other level increase Armor
            if (unit.heroLevel % 2 == 0) {
                player.addTechResearched(FourCC("R006"), 1)
            }
            
        })


        // When a new hero is created add it to the index
        EVENT.unitCreated.add(() => {
            if (Unit.fromEvent().isHero) {
                const unit = Unit.fromEvent()

                if (unit.data.heroType == undefined) {
                    unit.data.heroType = HeroType.get(unit)
                    
                    Log.Information("Hero Type:", unit.data.heroType.id)

                    HEROES.All.push(unit)

                    if (unit.owner.controller == MAP_CONTROL_COMPUTER) {
                        HEROES.AI.push(unit)
                    } else {
                        HEROES.Human.push(unit)
                    }

                    //unit.show = false
                    Log.Information("Starting Abilities:", unit.data.heroType.startingSpells.length)
                    // Learn Starting Abilities
                    for (let i = 0; i < unit.data.heroType.startingSpells.length; i++) {
                        unit.skillPoints += 1
                        Log.Information("Name: ", unit.data.heroType.startingSpells[i].name)
                        unit.selectSkill(unit.data.heroType.startingSpells[i].id)
                    }

                    // Add Starting Items
                    for (let i = 0; i < unit.data.heroType.items.length; i++) {
                        const item = unit.data.heroType.items[i].id;
                        unit.addItemById(item)
                    }


                    if (unit.owner.inForce(FORCE.AlliancePlayers)) {
                        unit.x = Rectangle.fromHandle(gg_rct_Left_Castle).centerX
                        unit.y = Rectangle.fromHandle(gg_rct_Left_Castle).centerY
                    } else {
                        unit.x = Rectangle.fromHandle(gg_rct_Right_Castle).centerX
                        unit.y = Rectangle.fromHandle(gg_rct_Right_Castle).centerY
                    }
                }
                
            }

        })
    }
}
