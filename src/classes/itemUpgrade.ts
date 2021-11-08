import { Unit } from "lib/w3ts/index"
import { ItemType } from "./itemType"

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
}