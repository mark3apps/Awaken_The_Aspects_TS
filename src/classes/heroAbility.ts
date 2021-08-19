import { Ability, AbilityParameters } from "./ability"

export class HeroAbility extends Ability {

    ult: boolean
    starting: boolean
    permanent: boolean

    constructor(ability: Ability | AbilityParameters, permanent = true, starting = false, ult = false) {

        super({
            four: ability.four,
            buffFour: ability.buffFour,
            type: ability.type,
            target: ability.target,
            orderId: ability.orderId,
            orderIdAutoOn: ability.orderIdAutoOn,
            orderIdAutoOff: ability.orderIdAutoOff,
            orderIdOff: ability.orderIdOff
        })

        this.permanent = permanent
        this.starting = starting
        this.ult = ult
    }
}