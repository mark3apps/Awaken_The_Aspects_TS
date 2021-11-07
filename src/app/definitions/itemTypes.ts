import { ItemType } from "classes/itemType"

export namespace ITEM_TYPE {

    export const strengthIncreasedStamina1 = new ItemType("I007", "A05A")
    export const strengthIncreasedStamina2 = new ItemType("I00D", "A05B")
    export const strengthIncreasedStamina3 = new ItemType("I00E", "A05V")

    export const agilityBlink1 = new ItemType("I00C", "A03R", "blink", false, [2])
    export const agilityBlink2 = new ItemType("I00A", "A03G", "blink", false, [2])
    export const agilityBlink3 = new ItemType("I00B", "A044", "blink", false, [2])

    export const intelligenceTeleport1 = new ItemType("I000", "A03H", null, false, [8])
    export const intelligenceTeleport2 = new ItemType("I008", "A03Q", null, false, [5])
    export const intelligenceTeleport3 = new ItemType("I009", "A01M", null, false, [3])

    export const brawlerToughenUp1 = new ItemType("I002", "A01A")
    export const brawlerToughenUp2 = new ItemType("I003", "A020")
    export const brawlerToughenUp3 = new ItemType("I001", "A055")

    export const healerGiveLife1 = new ItemType("I00G", "A05P")
    export const healerGiveLife2 = new ItemType("I00H", "A05C")
    export const healerGiveLife3 = new ItemType("I00I", "A05O")
    
    export const mageManaRenewal1 = new ItemType("I00F", "A021")
    export const mageManaRenewal2 = new ItemType("I005", "A023")
    export const mageManaRenewal3 = new ItemType("I004", "A022")

    export const assassinFocus1 = new ItemType("I00J", "A05Q")
    export const assassinFocus2 = new ItemType("I00K", "A05R")
    export const assassinFocus3 = new ItemType("I00L", "A05S")

}