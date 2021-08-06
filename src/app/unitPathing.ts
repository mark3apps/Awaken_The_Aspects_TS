import { Loc } from "classes/loc"
import { OrderId } from "lib/w3ts/globals/order"
import { Region, Unit } from "lib/w3ts/index"
import { TRIGGER } from "./definitions/triggers"

export namespace UNIT_PATHING {

    export function define() {

        // Unit Enters a LOC region
        TRIGGER.unitEntersRegion.addCondition(() => {
            let triggerRegion = Region.fromEvent()
            let triggerLoc = Loc.key[triggerRegion.id]

            if (triggerLoc != null) {
                let triggerUnit = Unit.fromEvent()

                if (triggerUnit.inForce(triggerLoc.forwardArmy.force)) {
                    let x = triggerLoc.forwardLoc.rect.randomX
                    let y = triggerLoc.forwardLoc.rect.randomY

                    triggerUnit.issueOrderAt(OrderId.Attack, x, y)
                }
            }

            return false
        })

    }
}