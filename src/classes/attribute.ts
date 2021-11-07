import { Ability } from "./ability"
import { ItemType } from "./itemType"

export class HeroAttribute {

    public items: ItemType[] = []
    public abilities: Ability[] = []

    constructor() {
        // Empty Constructor
    }

    public addItem(itemType: ItemType): void {
        this.items.push(itemType)
    }

    public addAbility(ability: Ability): void {
        this.abilities.push(ability)
    }
}