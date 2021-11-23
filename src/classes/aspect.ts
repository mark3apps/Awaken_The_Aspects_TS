

import { Log } from "app/systems/log"
import { ID } from "lib/w3ts/globals/ids"
import { MODEL } from "lib/w3ts/globals/models"
import { OrderId } from "lib/w3ts/globals/order"
import { Destructable, Effect, Force, Rectangle, Timer, Trigger, Unit } from "lib/w3ts/index"
import { Loc } from "./loc"

export class Aspect {
    readonly origAspect!: Unit
    readonly aspectTypeId: number
    readonly gateRegion?: Rectangle
    readonly gateTypeId?: number
    readonly dependent!: Unit
    readonly force!: Force
    private deathX: number
    private deathY: number

    aspect: Unit
    respawnTime: number
    dest: Loc

    aspectDies = new Trigger()
    dependentDies = new Trigger()

    respawnTimer = new Timer()

    constructor(respawnTime: number, unit: unit, dependentUnit: unit, force: Force, dest: Loc, gateRegion?: rect, gateTypeId?: ID.Destructible) {

        if (gateRegion != null) {
            this.gateRegion = Rectangle.fromHandle(gateRegion)
            this.gateTypeId = FourCC(gateTypeId)
        }

        this.origAspect = Unit.fromHandle(unit)
        this.aspectTypeId = this.origAspect.typeId
        this.dependent = Unit.fromHandle(dependentUnit)
        this.force = force
        this.respawnTime = respawnTime
        this.dest = dest

        this.aspectDies.registerUnitEvent(this.origAspect, EVENT_UNIT_DEATH)
        this.aspectDies.addAction(() => { this.onDeath() })
        this.dependentDies.registerUnitEvent(this.dependent, EVENT_UNIT_DEATH)
        this.dependentDies.addAction(() => { this.onDependentDeath() })
    }


    public onDeath(): void {

        try {
            if (this.dependent.isAlive()) {
                const u = Unit.fromKilled()
                new Effect(MODEL.Ability.deathPactTarget, u.x, u.y).destroy()

                if (u == this.origAspect) {
                    this.deathX = this.origAspect.x
                    this.deathY = this.origAspect.y

                    // Open the Gate
                    if (this.gateRegion != null) {
                        this.gateRegion.enumDestructables(() => { return Destructable.fromFilter().typeId == this.gateTypeId }, () => {
                            Destructable.fromEnum().openGate()
                        })
                    }

                    Force.Humans.displayTimedText(10, `BEWARE!  ${this.dependent.owner.name} has bested the ${u.name}!  It will now enter the fray allied to them!`)
                    PingMinimapEx(this.deathX, this.deathY, 10, 255, 0, 0, true)

                    // Initial Timer
                    this.respawnTimer.start(3, false, () => {
                        new Effect(MODEL.Ability.darkPortalTarget, this.deathX, this.deathY).destroy()
                        this.aspect = new Unit(this.force.getRandomPlayer(), this.aspectTypeId, this.deathX, this.deathY, 0)
                        this.aspect.issueOrderAt(OrderId.Attack, this.dest.randomX, this.dest.randomY)
                        this.aspectDies.registerUnitEvent(this.aspect, EVENT_UNIT_DEATH)
                    })

                } else {
                    this.respawnTimer.start(this.respawnTime, false, () => {
                        new Effect(MODEL.Ability.darkPortalTarget, this.deathX, this.deathY).destroy()
                        this.aspect = new Unit(this.force.getRandomPlayer(), this.aspectTypeId, this.deathX, this.deathY, 0)
                        this.aspect.issueOrderAt(OrderId.Attack, this.dest.randomX, this.dest.randomY)
                        this.aspectDies.registerUnitEvent(this.aspect, EVENT_UNIT_DEATH)
                    })
                }
            }
        } catch (error) {
            Log.Error("Aspect", error)
        }
    }

    public onDependentDeath(): void {
        this.aspectDies.destroy()
        this.respawnTimer.destroy()
    }


    static define = (): void => {

        // Aspect of the Tides
        new Aspect(80, gg_unit_nmsc_0644, gg_unit_nntt_0135, Force.Alliance, Loc.top.federation, gg_rct_Murloc_Gate_Left, ID.Destructible.MassiveRuinedGateVertical)
        new Aspect(80, gg_unit_nmsc_0450, gg_unit_nntt_0132, Force.Federation, Loc.bottom.alliance, gg_rct_Murloc_Gate_Right, ID.Destructible.MassiveRuinedGateVertical)

        // Aspect of the Earth
        new Aspect(80, gg_unit_nggg_0968, gg_unit_h006_0074, Force.Alliance, Loc.sCityFront.federation, gg_rct_Rock_Gate_Left, ID.Destructible.IcyGate)
        new Aspect(80, gg_unit_nggg_0600, gg_unit_h006_0055, Force.Federation, Loc.sCityFront.alliance, gg_rct_Rock_Gate_Right, ID.Destructible.IcyGate)

        // Aspect of the Storm
        new Aspect(80, gg_unit_nelb_0697, gg_unit_h003_0015, Force.Alliance, Loc.bottom.federation)
        new Aspect(80, gg_unit_nelb_0194, gg_unit_h003_0007, Force.Federation, Loc.top.alliance)

        // Aspect of the Forest
        new Aspect(80, gg_unit_n00N_0939, gg_unit_nheb_0109, Force.Alliance, Loc.top.federation, gg_rct_Aspect_of_Forest_Left_Gate, ID.Destructible.ElvenGate)
        new Aspect(80, gg_unit_n00N_0769, gg_unit_nheb_0036, Force.Federation, Loc.bottom.alliance, gg_rct_Aspect_of_Forest_Right_Gate, ID.Destructible.ElvenGate)

        // Aspect of Death
        new Aspect(80, gg_unit_uabo_0493, gg_unit_n00K_0802, Force.Alliance, Loc.middle.federation)
        new Aspect(80, gg_unit_uabo_0263, gg_unit_n00K_0477, Force.Federation, Loc.middle.alliance)
    }
}