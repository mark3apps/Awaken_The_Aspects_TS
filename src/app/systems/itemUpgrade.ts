import { ItemType } from "app/classes/itemType"
import { Unit } from "lib/w3ts/index"

export interface ItemUpgradeStep {
    itemType: ItemType,
    upgradeCondition: (unit: Unit) => boolean,
    failText: string
}

export class ItemUpgrade {
    public itemTypes: ItemUpgradeStep[] = []

    constructor() {
        // Empty Constructor
    }

    public getNextItem(itemType: ItemType): ItemUpgradeStep {
        const index = this.itemTypes.findIndex(p => p.itemType == itemType)

        return this.itemTypes[index]
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public add(itemType: ItemType, failText = "", upgradeCondition = (unit: Unit) => { return true }): void {
        this.itemTypes.push({
            itemType: itemType,
            failText: failText,
            upgradeCondition: upgradeCondition
        })
    }


    // Define Item Upgrades
    static increasedStamina: ItemUpgrade
    static blink: ItemUpgrade
    static teleport: ItemUpgrade
    static toughenUp: ItemUpgrade
    static giveLife: ItemUpgrade
    static manaRenewal: ItemUpgrade
    static focus: ItemUpgrade

    static define = (): void => {

        ItemUpgrade.increasedStamina = new ItemUpgrade()
        ItemUpgrade.blink = new ItemUpgrade()
        ItemUpgrade.teleport = new ItemUpgrade()
        ItemUpgrade.toughenUp = new ItemUpgrade()
        ItemUpgrade.giveLife = new ItemUpgrade()
        ItemUpgrade.manaRenewal = new ItemUpgrade()
        ItemUpgrade.focus = new ItemUpgrade()

        // Strength Increased Stamina
        ItemUpgrade.increasedStamina.add(ItemType.increasedStamina1)
        ItemUpgrade.increasedStamina.add(
            ItemType.increasedStamina2,
            "Level 10 required",
            (unit) => { return unit.heroLevel >= 10 && unit.hasItemOfType(ItemType.increasedStamina1.id) })
        ItemUpgrade.increasedStamina.add(
            ItemType.increasedStamina3,
            "Level 20 required",
            (unit) => { return unit.heroLevel >= 20 && unit.hasItemOfType(ItemType.increasedStamina2.id) })


        // Agility Blink
        ItemUpgrade.blink.add(ItemType.blink1)
        ItemUpgrade.blink.add(
            ItemType.blink2,
            "Level 10 required",
            (unit) => { return unit.heroLevel >= 10 && unit.hasItemOfType(ItemType.blink1.id) })
        ItemUpgrade.blink.add(
            ItemType.blink3,
            "Level 20 required",
            (unit) => { return unit.heroLevel >= 20 && unit.hasItemOfType(ItemType.blink2.id) })


        // Intelligence Teleport
        ItemUpgrade.teleport.add(ItemType.teleport1)
        ItemUpgrade.teleport.add(
            ItemType.teleport2,
            "Level 10 required",
            (unit) => { return unit.heroLevel >= 10 && unit.hasItemOfType(ItemType.teleport1.id) })
        ItemUpgrade.teleport.add(
            ItemType.teleport3,
            "Level 20 required",
            (unit) => { return unit.heroLevel >= 20 && unit.hasItemOfType(ItemType.teleport2.id) })


        // Brawler Toughen Up
        ItemUpgrade.toughenUp.add(ItemType.toughenUp1)
        ItemUpgrade.toughenUp.add(
            ItemType.toughenUp2,
            "Level 12 required",
            (unit) => { return unit.heroLevel >= 12 && unit.hasItemOfType(ItemType.toughenUp1.id) })
        ItemUpgrade.toughenUp.add(
            ItemType.toughenUp3,
            "Level 25 required",
            (unit) => { return unit.heroLevel >= 25 && unit.hasItemOfType(ItemType.toughenUp2.id) })


        // Healer Give Life
        ItemUpgrade.giveLife.add(ItemType.giveLife1)
        ItemUpgrade.giveLife.add(
            ItemType.giveLife2,
            "Level 12 required",
            (unit) => { return unit.heroLevel >= 12 && unit.hasItemOfType(ItemType.giveLife1.id) })
        ItemUpgrade.giveLife.add(
            ItemType.giveLife3,
            "Level 25 required",
            (unit) => { return unit.heroLevel >= 25 && unit.hasItemOfType(ItemType.giveLife2.id) })


        // Mage Mana Renewal
        ItemUpgrade.manaRenewal.add(ItemType.manaRenewal1)
        ItemUpgrade.manaRenewal.add(
            ItemType.manaRenewal2,
            "Level 12 required",
            (unit) => { return unit.heroLevel >= 12 && unit.hasItemOfType(ItemType.manaRenewal1.id) })
        ItemUpgrade.manaRenewal.add(
            ItemType.manaRenewal3,
            "Level 25 required",
            (unit) => { return unit.heroLevel >= 25 && unit.hasItemOfType(ItemType.manaRenewal2.id) })


        // Assassin Focus
        ItemUpgrade.focus.add(ItemType.focus1)
        ItemUpgrade.focus.add(
            ItemType.focus2,
            "Level 12 required",
            (unit) => { return unit.heroLevel >= 12 && unit.hasItemOfType(ItemType.focus1.id) })
        ItemUpgrade.focus.add(
            ItemType.focus3,
            "Level 25 required",
            (unit) => { return unit.heroLevel >= 25 && unit.hasItemOfType(ItemType.focus2.id) })
    }
}