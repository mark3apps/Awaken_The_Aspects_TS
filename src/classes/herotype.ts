import { Strategy } from "lib/resources/strategy"
import { Unit } from "lib/w3ts/index"
import { Ability } from "./ability"
import { ItemType } from "./itemType"
import { UnitType } from "./unitType"



export class HeroType extends UnitType {

    private static Key: { [name: string]: HeroType } = {}
    static readonly pre = "H"

    readonly hid!: string
    readonly alter!: UnitType

    public permanentSpells: Ability[] = []
    public startingSpells: Ability[] = []
    public ultSpell: Ability
    public spells: Ability[] = []


    public items: ItemType[] = [];
    public talents = [];

    // AI Globals
    public lifeFactor = 1;
    public manaFactor = 0.02;
    public lifeHighPercent = 0.85;
    public lifeLowPercent = 0.20;
    public lifeLowNumber = 400;
    public highDamageSingle = 0.17;
    public highDamageAverage = 0.25;
    public powerBase = 500;
    public powerLevel = 200;
    public unitClumpCheck = true;
    public unitClumpRange = 100;
    public intelRange = 1100;
    public intelCloseRange = 500;
    public strats: Strategy[] = []

    constructor(type: UnitType, typeAlter: UnitType) {

        super(type.four)

        this.hid = HeroType.pre + this.id
        this.alter = typeAlter

        HeroType.Key[this.hid] = this
        HeroSelector.addUnit(type.four)

    }

    static get(unit: Unit): HeroType {
        return HeroType.Key[HeroType.pre + unit.typeId]
    }

    public addAbility(spellObj: Ability): void {

        this.spells.push(spellObj)

        if (spellObj.permanent) { this.permanentSpells.push(spellObj) }
        if (spellObj.starting) { this.startingSpells.push(spellObj) }
        if (spellObj.ult) { this.ultSpell = spellObj }
    }


    public addItem(itemTypeObj: ItemType): void {
        this.items.push(itemTypeObj)
    }

    public addStrategy(strat: Strategy): void {
        this.strats.push(strat)
    }
}
