import { Ability } from "./ability"
import { ItemType } from "./itemType"


export const enum Strategy {
    Agressive = 1,
    Neutral = 2,
    Defensive = 4,
}

export class HeroType {

    private static _KeyString: Record<string, string>;
    private static _KeyNumber: Record<number, string>;

    readonly id: number;
    readonly idAlter: number;
    readonly four: string;
    readonly fourAlter: string;

    permanentSpells: Array<HeroAbility>;
    startingSpells: Array<HeroAbility>;
    ultSpells: HeroAbility;
    spells: Array<HeroAbility>;

    spellCount = 0;
    permanentSpellCount = 0;
    startingSpellCount = 0;

    items: Array<ItemType> = [];
    itemCount = 0;
    protected talents = [];

    // AI Globals
    lifeFactor: number = 1;
    manaFactor: number = 0.02;
    lifeHighPercent: number = 0.85;
    lifeLowPercent: number = 0.20;
    lifeLowNumber: number = 400;
    highDamageSingle: number = 0.17;
    highDamageAverage: number = 0.25;
    powerBase: number = 500;
    powerLevel: number = 200;
    unitClumpCheck: boolean = true;
    unitClumpRange: number = 100;
    intelRange: number = 1100;
    intelCloseRange: number = 500;
    strats: Array<Strategy>;

    constructor(name: string, four: string, fourAlter: string) {

        this.four = four;
        this.id = FourCC(four);
        this.idAlter = FourCC(fourAlter);


        HeroType._KeyString[four] = name;
        HeroType._KeyString[name] = name;
        HeroType._KeyNumber[this.id] = name;

    }

    static getName(value: string | number) {
        return typeof value === "string" ? HeroType._KeyString[value] : HeroType._KeyNumber[value];
    }

    public addAbility(spellObj: Ability, permanent = true, starting = false, ult = false) {

        let newHeroAbility = new HeroAbility(spellObj.name, permanent, starting, ult);

        this.spells.push(newHeroAbility);
        this.spellCount++;

        if (permanent) {
            this.permanentSpells.push(newHeroAbility);
            this.permanentSpellCount++;
        }

        if (starting) {
            this.startingSpells.push(newHeroAbility);
            this.startingSpellCount++;
        }

        if (ult) {
            this.ultSpells = newHeroAbility;
        }
    }


    public addItem(itemTypeObj: ItemType) {
        this.items.push(itemTypeObj);
        this.itemCount++;
    }

    public addStrategy(strat: Strategy) {
        this.strats.push(strat);
    }
}


export class HeroAbility {

    name: string;
    ult: boolean;
    starting: boolean;
    permanent: boolean;

    constructor(name: string, permanent = true, starting = false, ult = false) {

        this.name = name;
        this.permanent = permanent;
        this.starting = starting;
        this.ult = ult;
    }
}