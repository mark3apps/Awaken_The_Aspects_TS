import { EVENT } from "app/systems/events"
import { Log } from "app/systems/log"
import { Ability, MapAbility } from "classes/ability"
import { UnitType } from "classes/unitType"
import { ANIMATION } from "lib/w3ts/globals/unitAnimations"
import { Unit } from "lib/w3ts/index"


export class AbilityFel extends Ability {
    public unitType: UnitType
    public killsNeeded = 0

    constructor(ability: MapAbility, unitType: UnitType) {
        super(ability)

        this.unitType = unitType

        EVENT.unitDies.add(() => {
            if (Unit.fromHandle(GetKillingUnit()).typeId == this.unitType.id) {
                this.onEvent()
            }
        })
    }

    public onEvent(): void {
        const eventUnit = Unit.fromHandle(GetKillingUnit())

        Log.Information("Ability ", eventUnit.name, eventUnit.data.kills)
        if (this.killsNeeded >= eventUnit.data.kills) {
            eventUnit.addAbility(this.id)
            PolledWait(1)
            this.setAnimation(eventUnit)
            this.extraEffects(eventUnit)
        }

    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public setAnimation(unit: Unit): void {
        // Empty
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public extraEffects(unit: Unit): void {
        // Empty
    }

}


export class AbilityFelGrunt extends AbilityFel {

    constructor(ability: MapAbility, unitType: UnitType) {
        super(ability, unitType)
        this.killsNeeded = 1
    }

    public setAnimation(unit: Unit): void {
        unit.setAnimation(ANIMATION.ChaosGrunt.standVictory)
    }
}

export class AbilityFelOgre extends AbilityFel {

    constructor(ability: MapAbility, unitType: UnitType) {
        super(ability, unitType)
        this.killsNeeded = 1
    }

    public setAnimation(unit: Unit): void {
        unit.setAnimation(ANIMATION.OgreOneHeadedArmored.spellOgreMagiOnly)
    }
}

export class AbilityFelWarlord extends AbilityFel {

    constructor(ability: MapAbility, unitType: UnitType) {
        super(ability, unitType)
        this.killsNeeded = 3
    }

    public setAnimation(unit: Unit): void {
        unit.setAnimation(ANIMATION.ChaosWarlord.spell)
    }
}

export class AbilityFelWarlock extends AbilityFel {

    constructor(ability: MapAbility, unitType: UnitType) {
        super(ability, unitType)
        this.killsNeeded = 1
    }

    public setAnimation(unit: Unit): void {
        unit.setAnimation(ANIMATION.ChaosWarlock.spellCallStorm)
    }

    public extraEffects(unit: Unit): void {
        unit.manaPercent = 100
    }
}