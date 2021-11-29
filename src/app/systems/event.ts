import { Ability } from "app/classes/ability"
import { Logger } from "app/classes/log"
import { Position } from "app/classes/position"
import { UnitAbility } from "app/classes/unitAbility"
import { UnitType } from "app/classes/unitType"
import { Timer, Unit, Trigger, Force, Order, Rectangle, Anim, Effect, AbilityModel, DoodadModel } from "lib/w3ts/index"
import { Banner, Side } from "./banner"
import { Loc } from "./loc"


export class Event {

    banners: Banner[] = []
    summonUnitType: UnitType
    eventInterval: number
    eventDuration: number
    timer: Timer
    count = 0
    eventUnit: Unit
    spawnPos: Position

    allianceScore = 0
    federationScore = 0

    eventDeath: Trigger

    constructor(summonUnitType: UnitType, banners: Banner[] = [], spawnPos: Position, eventInterval = 240, eventTime = 30) {
        this.banners = banners
        this.summonUnitType = summonUnitType
        this.eventInterval = eventInterval
        this.eventDuration = eventTime
        this.spawnPos = spawnPos

        this.timer = new Timer()
        this.timer.start(this.eventInterval, false, () => { this._onEventStart() })

        this.eventDeath = new Trigger()
        this.eventDeath.addAction(() => { this._onEventUnitDeath() })
        this.onEventInit()
    }

    public onEventInit(): void {
        //
    }

    private _onEventStart(): void {

        const ua = new Unit(Force.Alliance.getRandomPlayer(), UnitType.DummySeer, this.spawnPos, 0)
        ua.applyTimedLifeGeneric(this.eventDuration)

        const uf = new Unit(Force.Federation.getRandomPlayer(), UnitType.DummySeer, this.spawnPos, 0)
        uf.applyTimedLifeGeneric(this.eventDuration)

        this.onEventStart()

        this.count = 0
        this.timer.start(1, true, () => { this._onEventLoop() })


    }

    public onEventStart(): void {
        //
    }

    private _onEventLoop(): void {

        for (let i = 0; i < this.banners.length; i++) {
            const banner = this.banners[i]

            if (banner.currentWinner == Side.Alliance) {
                this.allianceScore += banner.currentPower
            } else if (banner.currentWinner == Side.Federation) {
                this.federationScore += banner.currentPower
            }
        }

        this.onEventLoop()

        this.count += 1
        if (this.count >= this.eventDuration) {
            this.onEventEnd()
            this.timer.pause()
        }
    }

    public onEventLoop(): void {
        //
    }

    public onEventEnd(): void {
        //
    }

    public createUnit(): void {
        if (this.allianceScore > this.federationScore) {
            this.eventUnit = new Unit(Force.Alliance.getRandomPlayer(), this.summonUnitType.id, this.spawnPos, 270)
            this.eventUnit.issueOrderAt(Order.Attack, Loc.middle.federation.randomX, Loc.middle.federation.randomY)
        } else if (this.allianceScore < this.federationScore) {
            this.eventUnit = new Unit(Force.Federation.getRandomPlayer(), this.summonUnitType.id, this.spawnPos, 270)
            this.eventUnit.issueOrderAt(Order.Attack, Loc.middle.alliance.randomX, Loc.middle.alliance.randomY)
        } else {
            this.eventUnit = new Unit(PLAYER_NEUTRAL_AGGRESSIVE, this.summonUnitType.id, this.spawnPos, 270)
        }

        this.eventUnit.setPathing(false)
        this.eventDeath.registerUnitEvent(this.eventUnit, EVENT_UNIT_DEATH)
    }

    private _onEventUnitDeath(): void {
        this.timer.start(this.eventInterval, false, () => { this._onEventStart() })
        this.onEventUnitDeath()
    }

    public onEventUnitDeath(): void {
        //
    }
}



export class AspectOfFireEvent extends Event {

    inferno: Trigger
    wisp: Unit

    constructor(summonUnitType: UnitType, banners: Banner[] = [], eventInterval?: number, eventTime?: number) {


        super(summonUnitType, banners, Rectangle.EventCenter.centerPosition, eventInterval, eventTime)

        this.inferno = new Trigger()
        this.inferno.enabled = false
        this.inferno.registerTimerEvent(30, true)
        this.inferno.addAction(() => { this.infernoAbility() })
    }

    public infernoAbility(): void {
        try {

            const count = math.floor(math.random(2, 4))

            for (let i = 0; i < count; i++) {
                const u = new Unit(this.eventUnit.owner, UnitType.Dummy.id, this.eventUnit.position, 0)
                u.addAbility(Ability.aspectInferno)
                u.applyTimedLifeGeneric(2)

                const ua = new UnitAbility(u, Ability.aspectInferno)
                ua.cast(u.getRandomPosAround(500))
            }
        } catch (error) {
            Logger.Error(error)
        }
    }


    public override onEventInit(): void {
        Unit.h002_0699.setAnimation(Anim.EyeOfSargeras.death)
    }

    public override onEventStart(): void {
        Unit.h002_0699.setAnimation(Anim.EyeOfSargeras.stand)
        this.wisp = new Unit(PLAYER_NEUTRAL_PASSIVE, UnitType.DummyCenterEvent.id, this.spawnPos, 0)
        this.wisp.applyTimedLifeGeneric(this.eventDuration + 4)
        Logger.Information("Event Started")
    }

    public override onEventLoop(): void {
        if (this.allianceScore > this.federationScore) {
            this.wisp.owner = Force.Alliance.getRandomPlayer()
        } else {
            this.wisp.owner = Force.Federation.getRandomPlayer()
        }

    }

    public override onEventEnd(): void {
        try {

            const regions = [
                [Rectangle.EventTL1, Rectangle.EventTR1, Rectangle.EventBL1, Rectangle.EventBR1],
                [Rectangle.EventTL2, Rectangle.EventTR2, Rectangle.EventBL2, Rectangle.EventBR2],
                [Rectangle.EventTL3, Rectangle.EventTR3, Rectangle.EventBL3, Rectangle.EventBR3]
            ]

            const startEffect1 = new Effect(AbilityModel.flameStrikeTarget, Rectangle.EventCenter.centerX, Rectangle.EventCenter.centerY)

            
            let count = 0
            const loopTimer = new Timer()
            const endTimer = new Timer()
            loopTimer.start(0.75, true, () => {

                const regionCycle = regions[count]
                for (let i = 0; i < regionCycle.length; i++) {
                    const region = regionCycle[i]


                    const fire = new Effect(DoodadModel.fireTrapUp, region.centerX, region.centerY)
                    const fireTime = new Timer()
                    fireTime.start(1.5, false, () => {
                        fire.destroy()
                        fireTime.destroy()
                    })

                }
                count += 1
                if (count >= 3) {
                    loopTimer.destroy()
                }
            })

            endTimer.start(4, false, () => {
                Unit.h002_0699.show = false
                new Effect(AbilityModel.doomDeath, Rectangle.EventCenter.centerX, Rectangle.EventCenter.centerY).destroy()

                startEffect1.destroy()

                this.createUnit()
                this.inferno.enabled = true
                this.infernoAbility()


                loopTimer.destroy()
                endTimer.destroy()
            })




        } catch (error) {
            Logger.Error("Event", error)
        }

    }

    public override onEventUnitDeath(): void {
        this.inferno.enabled = false
        Unit.h002_0699.show = true
        Unit.h002_0699.setAnimation(Anim.EyeOfSargeras.death)
    }


    static define(): void {
        const time = new Timer()
        time.start(60, false, () => {
            new AspectOfFireEvent(UnitType.AspectOfFire, [Banner.center1, Banner.center2, Banner.center3, Banner.center4], 220, 50)
            time.destroy()
        })

    }
}