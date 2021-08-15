import { Ability } from "./ability"

export class HeroAbility extends Ability {

    ult: boolean
    starting: boolean
    permanent: boolean

    constructor(ability: Ability, permanent = true, starting = false, ult = false) {

        super(ability.mapAbility)
        this.permanent = permanent
        this.starting = starting
        this.ult = ult
    }
}