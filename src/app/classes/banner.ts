import { MODEL } from "lib/w3ts/globals/models"
import { Effect, Force, Group, Timer, Unit } from "lib/w3ts/index"

export const enum Side {
    Alliance,
    Federation,
    Neutral
}

export class Banner {

    readonly unit: Unit
    readonly range: number
    readonly tick: number

    maxPower: number
    currentPower = 0
    currentWinner: Side
    timer: Timer
    scale = 0.8

    constructor(unit: Unit, range = 550, tick = 2, maxPower = 40) {
        this.unit = unit
        this.range = range
        this.tick = tick
        this.maxPower = maxPower
        this.currentWinner = Side.Neutral

        this.timer = new Timer()
        this.timer.start(this.tick, true, () => { this.onTick() })
    }

    public onTick(): void {

        const g = new Group()
        g.enumUnitsInRange(this.unit, this.range, null)

        let alliancePower = 0
        let federationPower = 0

        g.firstLoop((u) => {

            if (u.isAlive() && u != this.unit && !u.isStructure) {
                if (u.inForce(Force.AllianceAll)) {
                    u.isHero ? alliancePower += 4 : alliancePower += 1
                }

                if (u.inForce(Force.FederationAll)) {
                    u.isHero ? federationPower += 4 : federationPower += 1
                }
            }
        })
        g.destroy()

        switch (this.currentWinner) {
            case Side.Alliance: {
                this.currentPower += alliancePower - federationPower

                if (this.currentPower < 0) {
                    this.currentPower *= -1
                    this.unit.owner = Force.Federation.getRandomPlayer()
                    this.currentWinner = Side.Federation
                    new Effect(MODEL.Ability.tomeOfRetrainingCaster, this.unit.x, this.unit.y).destroy()
                }

                break
            }
            case Side.Federation: {
                this.currentPower += federationPower - alliancePower

                if (this.currentPower < 0) {
                    this.currentPower *= -1
                    this.unit.owner = Force.Alliance.getRandomPlayer()
                    this.currentWinner = Side.Alliance
                    new Effect(MODEL.Ability.tomeOfRetrainingCaster, this.unit.x, this.unit.y).destroy()
                }

                break
            }
            case Side.Neutral: {
                if (alliancePower > federationPower) {
                    this.currentPower += alliancePower - federationPower
                    this.unit.owner = Force.Alliance.getRandomPlayer()
                    this.currentWinner = Side.Alliance
                    new Effect(MODEL.Ability.tomeOfRetrainingCaster, this.unit.x, this.unit.y).destroy()
                } else if (alliancePower < federationPower) {
                    this.currentPower += federationPower - alliancePower
                    this.unit.owner = Force.Federation.getRandomPlayer()
                    this.currentWinner = Side.Federation
                    new Effect(MODEL.Ability.tomeOfRetrainingCaster, this.unit.x, this.unit.y).destroy()
                }
                break
            }
            default:
                break
        }

        if (this.currentPower > this.maxPower) {
            this.currentPower = this.maxPower
        }

        const newScale = 0.8 + ((this.currentPower / this.maxPower) * 0.35)

        if (newScale != this.scale) {

            const speed = 0.6
            const tick = 0.01
            const tickSpeed = (newScale - this.scale) / (speed / tick)

            const time = new Timer()
            const timeStop = new Timer()
            time.start(0.01, true, () => {
                this.scale += tickSpeed
                this.unit.setScale(this.scale, 1, 1)
            })

            timeStop.start(speed, false, () => {
                this.scale = newScale
                this.unit.setScale(this.scale, 1, 1)
                time.destroy()
                timeStop.destroy()
            })
        }
    }

    static center1: Banner
    static center2: Banner
    static center3: Banner
    static center4: Banner

    static define(): void {
        Banner.center1 = new Banner(Unit.fromHandle(gg_unit_o00C_1005))
        Banner.center2 = new Banner(Unit.fromHandle(gg_unit_o00C_1008))
        Banner.center3 = new Banner(Unit.fromHandle(gg_unit_o00C_1009))
        Banner.center4 = new Banner(Unit.fromHandle(gg_unit_o00C_1011))

        // Top and Bottom Banners
        new Banner(Unit.o00C_1013, 600, 2, 100)
        new Banner(Unit.o00C_1016, 600, 2, 100)
    }
}