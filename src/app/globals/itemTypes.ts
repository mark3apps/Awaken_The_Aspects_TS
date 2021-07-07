import { ItemType } from "app/classes/itemType";

export declare const IT: {[name: string]: ItemType}


IT.teleport = new ItemType("teleportation", "I000", "A01M", "", false, [6])
IT.tank = new ItemType("tank", "I005")
IT.mage = new ItemType("mage", "I006")