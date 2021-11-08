import { HeroAttribute } from "classes/attribute"
import { ITEM_TYPE } from "./itemTypes"



export namespace ATTRIBUTE {

    export let strength: HeroAttribute
    export let agility: HeroAttribute
    export let intelligence: HeroAttribute

    export let melee: HeroAttribute
    export let ranged: HeroAttribute

    export let brawler: HeroAttribute
    export let healer: HeroAttribute
    export let mage: HeroAttribute
    export let assassin: HeroAttribute

    export const define = (): void => {

        strength = new HeroAttribute()
        strength.addItem(ITEM_TYPE.increasedStamina1)
        
        agility = new HeroAttribute()
        agility.addItem(ITEM_TYPE.blink1)

        intelligence = new HeroAttribute()
        intelligence.addItem(ITEM_TYPE.teleport1)

        melee = new HeroAttribute()

        ranged = new HeroAttribute()
        

        brawler = new HeroAttribute()
        brawler.addItem(ITEM_TYPE.toughenUp1)

        healer = new HeroAttribute()
        healer.addItem(ITEM_TYPE.giveLife1)

        mage = new HeroAttribute()
        mage.addItem(ITEM_TYPE.manaRenewal1)

        assassin = new HeroAttribute()
        assassin.addItem(ITEM_TYPE.focus1)
    }
}