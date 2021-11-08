import { ItemUpgrade } from "classes/itemUpgrade"
import { ITEM_TYPE } from "./itemTypes"

export namespace ITEM_UPGRADES {

    // Define Item Upgrades
    export const increasedStamina = new ItemUpgrade()
    export const blink = new ItemUpgrade()
    export const teleport = new ItemUpgrade()
    export const toughenUp = new ItemUpgrade()
    export const giveLife = new ItemUpgrade()
    export const manaRenewal = new ItemUpgrade()
    export const focus = new ItemUpgrade()

    export const define = (): void => {

        // Strength Increased Stamina
        increasedStamina.add(ITEM_TYPE.increasedStamina1)
        increasedStamina.add(
            ITEM_TYPE.increasedStamina2,
            "Level 10 required",
            (unit) => { return unit.heroLevel >= 10 && unit.hasItemOfType(ITEM_TYPE.increasedStamina1.id) })
        increasedStamina.add(
            ITEM_TYPE.increasedStamina3,
            "Level 20 required",
            (unit) => { return unit.heroLevel >= 20 && unit.hasItemOfType(ITEM_TYPE.increasedStamina2.id) })


        // Agility Blink
        blink.add(ITEM_TYPE.blink1)
        blink.add(
            ITEM_TYPE.blink2,
            "Level 10 required",
            (unit) => { return unit.heroLevel >= 10 && unit.hasItemOfType(ITEM_TYPE.blink1.id) })
        blink.add(
            ITEM_TYPE.blink3,
            "Level 20 required",
            (unit) => { return unit.heroLevel >= 20 && unit.hasItemOfType(ITEM_TYPE.blink2.id) })


        // Intelligence Teleport
        teleport.add(ITEM_TYPE.teleport1)
        teleport.add(
            ITEM_TYPE.teleport2,
            "Level 10 required",
            (unit) => { return unit.heroLevel >= 10 && unit.hasItemOfType(ITEM_TYPE.teleport1.id) })
        teleport.add(
            ITEM_TYPE.teleport3,
            "Level 20 required",
            (unit) => { return unit.heroLevel >= 20 && unit.hasItemOfType(ITEM_TYPE.teleport2.id) })


        // Brawler Toughen Up
        toughenUp.add(ITEM_TYPE.toughenUp1)
        toughenUp.add(
            ITEM_TYPE.toughenUp2,
            "Level 12 required",
            (unit) => { return unit.heroLevel >= 12 && unit.hasItemOfType(ITEM_TYPE.toughenUp1.id) })
        toughenUp.add(
            ITEM_TYPE.toughenUp3,
            "Level 25 required",
            (unit) => { return unit.heroLevel >= 25 && unit.hasItemOfType(ITEM_TYPE.toughenUp2.id) })


        // Healer Give Life
        giveLife.add(ITEM_TYPE.giveLife1)
        giveLife.add(
            ITEM_TYPE.giveLife2,
            "Level 12 required",
            (unit) => { return unit.heroLevel >= 12 && unit.hasItemOfType(ITEM_TYPE.giveLife1.id) })
        giveLife.add(
            ITEM_TYPE.giveLife3,
            "Level 25 required",
            (unit) => { return unit.heroLevel >= 25 && unit.hasItemOfType(ITEM_TYPE.giveLife2.id) })


        // Mage Mana Renewal
        manaRenewal.add(ITEM_TYPE.manaRenewal1)
        manaRenewal.add(
            ITEM_TYPE.manaRenewal2,
            "Level 12 required",
            (unit) => { return unit.heroLevel >= 12 && unit.hasItemOfType(ITEM_TYPE.manaRenewal1.id) })
        manaRenewal.add(
            ITEM_TYPE.manaRenewal3,
            "Level 25 required",
            (unit) => { return unit.heroLevel >= 25 && unit.hasItemOfType(ITEM_TYPE.manaRenewal2.id) })


        // Assassin Focus
        focus.add(ITEM_TYPE.focus1)
        focus.add(
            ITEM_TYPE.focus2,
            "Level 12 required",
            (unit) => { return unit.heroLevel >= 12 && unit.hasItemOfType(ITEM_TYPE.focus1.id) })
        focus.add(
            ITEM_TYPE.focus3,
            "Level 25 required",
            (unit) => { return unit.heroLevel >= 25 && unit.hasItemOfType(ITEM_TYPE.focus2.id) })
    }
}