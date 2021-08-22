import { Log } from "app/systems/log"
import { Ability, AbilityParameters } from "classes/ability"
import { ID } from "lib/w3ts/globals/ids"
import { ANIMATION } from "lib/w3ts/globals/unitAnimations"
import { Unit } from "lib/w3ts/index"

export class AbilityFel extends Ability {
    public chaosAbility: ID.Ability
    public killsNeeded: number

    constructor(ability: AbilityParameters | Ability) {
        super(ability)
    }

    public onEvent(): void {
        const eventUnit = Unit.fromHandle(GetKillingUnit())

        if (this.killsNeeded <= eventUnit.data.kills) {
            Log.Information("Ability", this.name, this.killsNeeded, eventUnit.data.kills)
            this.setAnimation(eventUnit)
            this.extraEffects(eventUnit)

            eventUnit.addAbility(FourCC(this.chaosAbility))
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

    killsNeeded = 1
    chaosAbility = ID.Ability.FelGruntTransformed

    constructor(ability: AbilityParameters) {
        super(ability)
    }

    public setAnimation(unit: Unit): void {
        unit.setAnimation(ANIMATION.ChaosGrunt.standVictory)
    }
}

export class AbilityFelOgre extends AbilityFel {

    killsNeeded = 1
    chaosAbility = ID.Ability.FelOgreTransformed

    constructor(ability: AbilityParameters) {
        super(ability)

    }

    public setAnimation(unit: Unit): void {
        unit.setAnimation(ANIMATION.OgreOneHeadedArmored.spellOgreMagiOnly)
    }
}

export class AbilityFelWarlord extends AbilityFel {

    killsNeeded = 4
    chaosAbility = ID.Ability.FelWarlordTransformed

    constructor(ability: AbilityParameters) {
        super(ability)
    }

    public setAnimation(unit: Unit): void {
        unit.setAnimation(ANIMATION.ChaosWarlord.spell)
    }
}

export class AbilityFelWarlock extends AbilityFel {

    killsNeeded = 3
    chaosAbility = ID.Ability.FelWarlockTransformed

    constructor(ability: AbilityParameters) {
        super(ability)
    }

    public setAnimation(unit: Unit): void {
        unit.setAnimation(ANIMATION.ChaosWarlock.spellCallStorm)
    }

    public extraEffects(unit: Unit): void {
        unit.manaPercent = 100
    }
}