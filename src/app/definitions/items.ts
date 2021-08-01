import { ItemType } from "classes/itemType"

export namespace ITEMS {
    export const teleport = new ItemType("teleportation", "I000", "A01M", "", false, [6]);
    export const tank = new ItemType("tank", "I005");
    export const mage = new ItemType("mage", "I006");
}