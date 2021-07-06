/** @noSelfInFile **/

import { Ability } from "./ability"
import { ItemType } from "./itemType"

declare let HeroTypeKey: Record <string, string>

export class HeroType {

    id: number
    idAlter: number
    four: string
    fourAlter: string
    
    permanentSpells:Array<HeroAbility>
    startingSpells:Array<HeroAbility>
    ultSpells: HeroAbility
    spells: Array<HeroAbility>

    spellCount = 0
    permanentSpellCount = 0
    startingSpellCount = 0

    items:Array<ItemType> = []
    itemCount = 0
    talents = []

    constructor(name: string, four: string, fourAlter: string) {

        this.four = four
        this.id = FourCC(four)
        this.idAlter = FourCC(fourAlter)

        HeroTypeKey[four] = name
        HeroTypeKey[name] = name

    }

    public addAbility(spellObj: Ability, permanent = true, starting = false, ult = false) {
        
        let newHeroAbility = new HeroAbility(spellObj.name, permanent, starting, ult)

        this.spells.push(newHeroAbility)
        this.spellCount ++

        if (permanent) {
            this.permanentSpells.push(newHeroAbility)
            this.permanentSpellCount ++
        }

        if (starting) {
            this.startingSpells.push(newHeroAbility)
            this.startingSpellCount ++
        }

        if (ult) {
            this.ultSpells = newHeroAbility
        }   
    }


    public addItem(itemTypeObj: ItemType) {
        this.items.push(itemTypeObj)
        this.itemCount ++
    }

}


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