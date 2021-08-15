import { ItemType } from "classes/itemType"

export namespace ITEM_TYPE {

    export const teleport = new ItemType("I000", "A01M", null, false, [6])
    export const tank = new ItemType("I005")
    export const mage = new ItemType("I006")

}