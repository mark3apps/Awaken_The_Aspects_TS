import { ItemType } from "app/classes/itemType";
import { ITEM } from "utils/globals";

export function defineItems() {
    ITEM.teleport = new ItemType("teleportation", "I000", "A01M", "", false, [6])
    ITEM.tank = new ItemType("tank", "I005")
    ITEM.mage = new ItemType("mage", "I006")
}