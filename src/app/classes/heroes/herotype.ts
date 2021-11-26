import { Strategy } from "lib/resources/strategy"
import { Unit } from "lib/w3ts/index"
import { Ability } from "../ability"
import { HeroAttribute } from "../attribute"
import { ItemType } from "./itemType"
import { UnitType } from "../unitType"



export class HeroType extends UnitType {

    private static Key: { [name: string]: HeroType } = {}
    static readonly pre = "H"

    readonly hid!: string
    readonly alter!: UnitType
    readonly name!: string

    public attributes: HeroAttribute[] = []
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

    public traitAgressive = 50
    public traitDefensive = 50
    public traitSupport = 0
    public traitAssassinate = 0

    public strategies: Strategy[] = []

    constructor(type: UnitType, typeAlter: UnitType, name: string) {

        super(type.four)

        this.name = name
        this.hid = HeroType.pre + this.id
        this.alter = typeAlter

        HeroType.Key[this.hid] = this
        HeroSelector.addUnit(type.four)

    }

    static get(unit: Unit): HeroType {
        return HeroType.Key[HeroType.pre + unit.typeId]
    }

    public defineAbilities(): void {
        // Empty
    }

    public defineAI(): void {
        // Empty
    }

    public defineAttributes(): void {
        // Empty
    }

    public defineItems(): void {
        // Empty
    }

    public addHeroAttribute(attribute: HeroAttribute): void {
        this.attributes.push(attribute)
    }

    public addAbility(ability: Ability): void {

        this.spells.push(ability)

        if (ability.permanent) { this.permanentSpells.push(ability) }
        if (ability.starting) { this.startingSpells.push(ability) }
        if (ability.ult) { this.ultSpell = ability }
    }


    public addItem(itemType: ItemType): void {
        this.items.push(itemType)
    }

    public addStrategy(strat: Strategy): void {
        this.strategies.push(strat)
    }
}
