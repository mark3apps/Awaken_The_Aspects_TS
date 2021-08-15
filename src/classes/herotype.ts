import { Strategy } from "lib/resources/strategy"
import { Ability } from "./ability"
import { HeroAbility } from "./heroAbility"
import { ItemType } from "./itemType"
import { UnitType } from "./unitType"



export class HeroType extends UnitType {

    private static _key: { [name: string]: HeroType } = {}
    static readonly pre = "H"

    readonly hid!: string
    readonly alter!: UnitType

    public permanentSpells: HeroAbility[] = []
    public startingSpells: HeroAbility[] = []
    public ultSpell: HeroAbility
    public spells: HeroAbility[] = []


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

        HeroType._key[this.hid] = this
        
    }

    
    static get(value: string | number): HeroType {
        return typeof value === "string" ? HeroType._key[FourCC(value)] : HeroType._key[value]
    }

    public addAbility(spellObj: Ability, permanent = true, starting = false, ult = false): void {

        const newHeroAbility = new HeroAbility(spellObj, permanent, starting, ult)


        this.spells.push(newHeroAbility)

        if (permanent) { this.permanentSpells.push(newHeroAbility) }
        if (starting) { this.startingSpells.push(newHeroAbility) }
        if (ult) { this.ultSpell = newHeroAbility }
    }


    public addItem(itemTypeObj: ItemType): void {
        this.items.push(itemTypeObj)
    }

    public addStrategy(strat: Strategy): void {
        this.strats.push(strat)
    }
}
