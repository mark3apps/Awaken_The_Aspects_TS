export class HeroAbility {

    name: string
    ult: boolean
    starting: boolean
    permanent: boolean

    constructor(name: string, permanent = true, starting = false, ult = false) {

        this.name = name
        this.permanent = permanent
        this.starting = starting
        this.ult = ult
    }
}