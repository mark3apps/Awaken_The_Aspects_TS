import { Strategy } from "lib/resources/strategy"
import { Ability } from "./ability"
import { HeroAbility } from "./heroAbility"
import { ItemType } from "./itemType"




export class HeroType {

    private static _key: {[name:string]: HeroType} = {}
    static readonly pre = "H"

    readonly id: number
    readonly hid: string
    readonly idAlter: number
    readonly four: string
    readonly fourAlter: string

    permanentSpells: Array<HeroAbility>
    startingSpells: Array<HeroAbility>
    ultSpells: HeroAbility
    spells: HeroAbility[]

    spellCount = 0;
    permanentSpellCount = 0;
    startingSpellCount = 0;

    items: ItemType[] = [];
    itemCount = 0;
    protected talents = [];

    // AI Globals
    lifeFactor = 1;
    manaFactor = 0.02;
    lifeHighPercent = 0.85;
    lifeLowPercent = 0.20;
    lifeLowNumber = 400;
    highDamageSingle = 0.17;
    highDamageAverage = 0.25;
    powerBase = 500;
    powerLevel = 200;
    unitClumpCheck = true;
    unitClumpRange = 100;
    intelRange = 1100;
    intelCloseRange = 500;
    strats: Strategy[]

    constructor(name: string, four: string, fourAlter: string) {

        this.four = four
        this.id = FourCC(four)
        this.hid = HeroType.pre + this.id
        this.idAlter = FourCC(fourAlter)


        HeroType._key[this.hid] = this

    }

    static get(value: string | number): HeroType {
        return typeof value === "string" ? HeroType._key[FourCC(value)] : HeroType._key[value]
    }

    public addAbility(spellObj: Ability, permanent = true, starting = false, ult = false): void {

        const newHeroAbility = new HeroAbility(spellObj.name, permanent, starting, ult)

        this.spells.push(newHeroAbility)
        this.spellCount++

        if (permanent) {
            this.permanentSpells.push(newHeroAbility)
            this.permanentSpellCount++
        }

        if (starting) {
            this.startingSpells.push(newHeroAbility)
            this.startingSpellCount++
        }

        if (ult) {
            this.ultSpells = newHeroAbility
        }
    }


    public addItem(itemTypeObj: ItemType): void {
        this.items.push(itemTypeObj)
        this.itemCount++
    }

    public addStrategy(strat: Strategy): void {
        this.strats.push(strat)
    }
}
