import { MapPlayer, Unit } from "lib/w3ts/index"
import { HeroType } from "./herotype"
import { UnitAbility } from "./unitAbility"

export class Hero extends Unit {

    unitAbilities: UnitAbility[] = []
    static map: Map<Unit, Hero> = new Map<Unit, Hero>()
    static readonly all: Hero[] = []
    static human: Hero[] = []
    static ai: Hero[] = []

    constructor(owner: MapPlayer | number, unitId: number, x: number, y: number, face: number, skinId?: number) {
        super(owner, unitId, x, y, face, skinId)
        this.data.heroType = HeroType.get(this)
        this.setupHero()

        Hero.map.set(this as Unit, this)
        Hero.all.push(this)

        if (this.owner.controller == MAP_CONTROL_COMPUTER) {
            Hero.ai.push(this)
        } else {
            Hero.human.push(this)
        }
    }

    public static get(unit: Unit): Hero {
        if (Hero.map.has(unit)) {
            return Hero.map.get(unit)
        } else {
            return null
        }
    }

    public setupHero(): void {
        if (this.data.heroType != undefined) {
            this.addStartingAbilities()
            this.addStartingItems()
            this.resetUnitAbilities()
        }
    }

    public resetUnitAbilities(): void {
        this.unitAbilities = []
        for (let i = 0; i < this.data.heroType.spells.length; i++) {
            const element = this.data.heroType.spells[i]
            this.unitAbilities.push(new UnitAbility(element, this))
        }
    }

    public addStartingItems(): void {

        if (this.data.heroType != undefined) {

            // Add Attribute Items
            for (let n = 0; n < this.data.heroType.attributes.length; n++) {
                const element = this.data.heroType.attributes[n];
                
                for (let i = 0; i < element.items.length; i++) {
                    const item = element.items[i].id
                    this.addItemById(item)
                }
            }


            // Add Specific Hero Type Items
            for (let i = 0; i < this.data.heroType.items.length; i++) {
                const item = this.data.heroType.items[i].id
                this.addItemById(item)
            }


        }
    }

    public addStartingAbilities(): void {

        if (this.data.heroType != undefined) {

            for (let i = 0; i < this.data.heroType.startingSpells.length; i++) {
                this.selectSkill(this.data.heroType.startingSpells[i].id)
                this.skillPoints += 1
            }
            this.skillPoints -= 1
        }
    }

    // Static Event Overrides

    public static fromEnum(): Hero {
        return this.fromHandle(GetEnumUnit())
    }

    public static fromEvent(): Hero {
        return this.fromHandle(GetTriggerUnit())
    }

    public static fromFilter(): Hero {
        return this.fromHandle(GetFilterUnit())
    }

    public static fromAttackingUnit(): Hero {
        return this.fromHandle(GetAttacker())
    }

    public static fromHandle(handle: unit): Hero {
        const unit: Unit = this.getObject(handle)

        if (!unit.isHero) {
            return null
        } else {
            return unit as Hero
        }
    }




    public testingThis(): void {
        //
    }
}
