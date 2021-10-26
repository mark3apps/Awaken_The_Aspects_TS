import { EVENT } from "app/systems/events"
import { HeroType } from "classes/herotype"
import { Rectangle, Unit } from "lib/w3ts/index"
import { FORCE } from "./forces"


export namespace HEROES {

    export const All: Unit[] = []
    export const Human: Unit[] = []
    export const Computer: Unit[] = []

    export function define(): void {


        // When a new hero is created add it to the index
        EVENT.unitCreated.add(() => {
            if (Unit.fromEvent().isHero) {
                const unit = Unit.fromEvent()

                if (unit.data.heroType == null) {
                    unit.data.heroType = HeroType.get(unit)
                    
                    HEROES.All.push(unit)

                    if (unit.owner.controller == MAP_CONTROL_COMPUTER) {
                        HEROES.Computer.push(unit)
                    } else {
                        HEROES.Human.push(unit)
                    }

                    //unit.show = false

                    if (unit.owner.inForce(FORCE.Alliance)) {
                        unit.x = Rectangle.fromHandle(gg_rct_Left_Hero).centerX
                        unit.y = Rectangle.fromHandle(gg_rct_Left_Hero).centerY
                    } else {
                        unit.x = Rectangle.fromHandle(gg_rct_Right_Hero).centerX
                        unit.y = Rectangle.fromHandle(gg_rct_Right_Hero).centerY
                    }
                }
                
            }

        })
    }
}
