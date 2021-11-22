import { Log } from "app/systems/log"
import { OrderId } from "lib/w3ts/globals/order"
import { Group, MapPlayer, Timer, Unit } from "lib/w3ts/index"
import { HeroType } from "./herotype"
import { IState, StateMachine } from "./stateMachine"
import { UnitAbility } from "./unitAbility"

export class Hero extends Unit {

    unitAbilities: UnitAbility[] = []
    private stateMachine: StateMachine

    private AITickTimer = new Timer()
    private AITickIncrement = 1.2
    private AIActivated = false

    AIpowerBase = 0
    AIpowerHero = 0

    AIunitCount = 0
    AIunitCountAlly = 0
    AIUnitCoundEnemy = 0

    AImostPowerfulAlly = 0
    AImostPowerfulAllyUnit: Unit = null
    AImostPowerfulEnemy = 0
    AImostPowerfulEnemyUnit: Unit = null

    AIclumpAllyUnit: Unit
    AIclumpAllyCount = 0
    AIclumpAllyPower = 0
    AIclumpEnemyUnit: Unit
    AIclumpEnemyCount = 0
    AIclumpEnemyPower = 0
    AIclumpAllUnit: Unit
    AIclumpAllCount = 0
    AIclumpAllPower = 0

    AIheroesAlly = new Group()
    AIheroesEnemy = new Group()

    AIhealthHistory: number[] = []
    AIhealthHistoryAverageSingle = 0
    AIhealthHistoryAverageAll = 0

    AIweightedHealth = 0
    AIweightedHealthMax = 0
    AIweightedHealthPercent = 0

    static map: Map<Unit, Hero> = new Map<Unit, Hero>()
    static readonly all: Hero[] = []
    static human: Hero[] = []
    static ai: Hero[] = []


    constructor(owner: MapPlayer | number, unitId: number, x: number, y: number, face: number, skinId?: number) {
        super(owner, unitId, x, y, face, skinId)

        try {
            this.data.heroType = HeroType.get(this)
            this.setupHero()

            Hero.map.set(this as Unit, this)
            Hero.all.push(this)

            if (this.owner.controller == MAP_CONTROL_COMPUTER) {
                Hero.ai.push(this)
            } else {
                Hero.human.push(this)
            }


            this.AIstart()
        } catch (error) {
            Log.Error("Hero Creation", error)
        }


    }

    public static get(unit: Unit): Hero {
        if (Hero.map.has(unit)) {
            return Hero.map.get(unit)
        } else {
            return null
        }
    }


    // AI Methods
    public AIstart(tick = this.AITickIncrement): void {

        Log.Information("Starting AI for", this.nameProper)

        this.stateMachine = new StateMachine(this)
        this.AITickIncrement = tick

        // Add all of the Hero Type Specified States
        this.stateMachine.addState(this.STATEattack())
        this.stateMachine.addState(this.STATEheal())
        this.stateMachine.addState(this.STATEcast())
        this.stateMachine.addState(this.STATEdead())
        this.stateMachine.addState(this.STATEflee())

        // Set the starting State
        this.stateMachine.setState("attack")

        // Start the AI Loop Timer        
        this.AITickTimer.start(tick, true, () => this.AIexecute())
    }


    public AIpause(): void {
        this.AITickTimer.pause()
    }



    public AIexecute(): void {

        this.AIintel()
        this.stateMachine.update()

        // Nothing at the moment
    }

    public AIintel(): void {
        //
    }

    public AIlevelup(): void {
        // 
    }

    private STATEdead(): IState {
        return {
            name: "dead",
            onEnter: () => {
                this.name
            },
            onUpdate: () => {
                //
            },
            onExit: () => {
                //
            }
        }
    }

    private STATEcast(): IState {
        return {
            name: "cast",
            onEnter: () => {
                this.name
            },
            onUpdate: () => {
                //
            },
            onExit: () => {
                //
            }
        }
    }

    private STATEheal(): IState {
        return {
            name: "heal",
            onEnter: () => {
                //Log.Information("Heal")
            },
            onUpdate: () => {
                //Log.Information("Healing")
            },
            onExit: () => {
                //
            }
        }
    }

    private STATEattack(): IState {
        return {
            name: "attack",
            onEnter: () => {
                //Log.Information("Attack", this.nameProper)
                this.issueOrderAt(OrderId.Attack, 0, 0)
            },
            onUpdate: () => {
                //Log.Information("Attacking")
            },
            onExit: () => {
                //Log.Information("End Attack")
            }
        }
    }

    private STATEflee(): IState {

        return {
            name: "flee",
            onEnter: () => {
                //
            },
            onUpdate: () => {
                //
            },
            onExit: () => {
                //
            }
        }
    }


    // General Methods
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
            this.unitAbilities.push(new UnitAbility(this, element))
        }
    }

    public addStartingItems(): void {

        if (this.data.heroType != undefined) {

            // Add Attribute Items
            for (let n = 0; n < this.data.heroType.attributes.length; n++) {
                const element = this.data.heroType.attributes[n]

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
                this.skillPoints += 1
                this.selectSkill(this.data.heroType.startingSpells[i].id)
                this.skillPoints -= 1
            }
        }
    }

    // Static Event Overrides

    public static override fromEnum(): Hero {
        return this.fromHandle(GetEnumUnit())
    }

    public static override fromEvent(): Hero {
        return this.fromHandle(GetTriggerUnit())
    }

    public static override fromFilter(): Hero {
        return this.fromHandle(GetFilterUnit())
    }

    public static override fromAttacking(): Hero {
        return this.fromHandle(GetAttacker())
    }

    public static override fromAttacked(): Hero {
        return this.fromHandle(GetTriggerUnit())
    }

    public static override fromSpellTarget(): Hero {
        return this.fromHandle(GetSpellTargetUnit())
    }

    public static override fromHandle(handle: unit): Hero {
        const unit: Unit = this.getObject(handle)

        if (!unit.isHero) {
            return null
        } else {
            return unit as Hero
        }
    }
}
