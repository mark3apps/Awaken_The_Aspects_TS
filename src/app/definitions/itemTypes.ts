import { ItemType } from "classes/itemType"

export namespace ITEM_TYPE {
    export let teleport: ItemType
    export let tank: ItemType
    export let mage: ItemType

    export function define(): void {
        teleport = new ItemType("I000", "A01M", "", false, [6])
        tank = new ItemType("I005")
        mage = new ItemType("I006")
    }
}