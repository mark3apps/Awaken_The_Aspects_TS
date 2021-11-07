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

    export const brawlerToughenUp1 = new ItemType("I006")
    export const brawlerToughenUp2 = new ItemType("I006")
    export const brawlerToughenUp3 = new ItemType("I006")

    export const healerGiveLife1 = new ItemType("I006")
    export const healerGiveLife2 = new ItemType("I006")
    export const healerGiveLife3 = new ItemType("I006")
    
    export const mageManaRenewal1 = new ItemType("I006")
    export const mageManaRenewal2 = new ItemType("I006")
    export const mageManaRenewal3 = new ItemType("I006")

    export const assassinFocus1 = new ItemType("I006")
    export const assassinFocus2 = new ItemType("I006")
    export const assassinFocus3 = new ItemType("I006")

}