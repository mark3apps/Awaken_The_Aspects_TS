
import { Loc } from "classes/loc"
import { OrderId } from "lib/w3ts/globals/order"
import { Region, Unit } from "lib/w3ts/index"
import { EVENT } from "./index"


export function define(): void {

    // Unit Enters a LOC region
    EVENT.unitEntersRegion.addCondition(() => {
        const triggerRegion = Region.fromEvent()
        const triggerLoc = Loc.key[triggerRegion.id]

        if (triggerLoc != null) {
            const triggerUnit = Unit.fromEvent()

            if (triggerUnit.inForce(triggerLoc.forwardArmy.force)) {
                const x = triggerLoc.forwardLoc.rect.randomX
                const y = triggerLoc.forwardLoc.rect.randomY

                triggerUnit.issueOrderAt(OrderId.Attack, x, y)
            }
        }

        return false
    })


    EVENT.unitSummoned.addCondition(() => {
        const triggerUnit = Unit.fromEvent()



        return false
    })

}
