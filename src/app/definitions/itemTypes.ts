import { ItemType } from "classes/itemType"
export namespace ITEM_TYPE {

    export const increasedStamina1 = new ItemType("I007", "A05A")
    export const increasedStamina2 = new ItemType("I00D", "A05B")
    export const increasedStamina3 = new ItemType("I00E", "A05V")

    export const blink1 = new ItemType("I00C", "A03R", "blink", false, [2])
    export const blink2 = new ItemType("I00A", "A03G", "blink", false, [2])
    export const blink3 = new ItemType("I00B", "A044", "blink", false, [2])

    export const teleport1 = new ItemType("I000", "A03H", null, false, [8])
    export const teleport2 = new ItemType("I008", "A03Q", null, false, [5])
    export const teleport3 = new ItemType("I009", "A01M", null, false, [3])

    export const toughenUp1 = new ItemType("I002", "A01A")
    export const toughenUp2 = new ItemType("I003", "A020")
    export const toughenUp3 = new ItemType("I001", "A055")

    export const giveLife1 = new ItemType("I00G", "A05P")
    export const giveLife2 = new ItemType("I00H", "A05C")
    export const giveLife3 = new ItemType("I00I", "A05O")

    export const manaRenewal1 = new ItemType("I00F", "A021")
    export const manaRenewal2 = new ItemType("I005", "A023")
    export const manaRenewal3 = new ItemType("I004", "A022")

    export const focus1 = new ItemType("I00J", "A05Q")
    export const focus2 = new ItemType("I00K", "A05R")
    export const focus3 = new ItemType("I00L", "A05S")
}

