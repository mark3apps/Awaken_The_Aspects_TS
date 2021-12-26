import { Position } from 'app/classes/position'
import { UnitType } from 'app/classes/unitType'
import { Forces } from 'lib/w3ts/handles/Forces'
import { Timer, Unit, Trigger, Order } from 'lib/w3ts/index'
import { Banner, Side } from '../banner/banner'
import { Loc } from '../loc'

export class Event {
	banners: Banner[] = []
	summonUnitType: UnitType
	eventInterval: number
	eventDuration: number
	timer: Timer
	count = 0
	eventUnit?: Unit
	spawnPos: Position

	allianceScore = 0
	federationScore = 0

	eventDeath: Trigger

	constructor (summonUnitType: UnitType, banners: Banner[] = [], spawnPos: Position, eventInterval = 240, eventTime = 30) {
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

	public onEventInit (): void {
		//
	}

	private _onEventStart (): void {
		const sightUnitAlliance = new Unit(Forces.Alliance.getRandomPlayer(), UnitType.DummySeer, this.spawnPos, 0)
		sightUnitAlliance.applyTimedLifeGeneric(this.eventDuration)

		const sightUnitFederation = new Unit(Forces.Federation.getRandomPlayer(), UnitType.DummySeer, this.spawnPos, 0)
		sightUnitFederation.applyTimedLifeGeneric(this.eventDuration)

		this.onEventStart()

		this.count = 0
		this.timer.start(1, true, () => { this._onEventLoop() })
	}

	public onEventStart (): void {
		//
	}

	private _onEventLoop (): void {
		for (let i = 0; i < this.banners.length; i++) {
			const banner = this.banners[i]

			if (banner.currentWinner === Side.Alliance) {
				this.allianceScore += banner.currentPower
			} else if (banner.currentWinner === Side.Federation) {
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

	public onEventLoop (): void {
		//
	}

	public onEventEnd (): void {
		//
	}

	public createUnit (): void {
		if (this.allianceScore > this.federationScore) {
			this.eventUnit = new Unit(Forces.Alliance.getRandomPlayer(), this.summonUnitType.id, this.spawnPos, 270)
			this.eventUnit.issueOrderAt(Order.Attack, Loc.middle.federation.randomX, Loc.middle.federation.randomY)
		} else if (this.allianceScore < this.federationScore) {
			this.eventUnit = new Unit(Forces.Federation.getRandomPlayer(), this.summonUnitType.id, this.spawnPos, 270)
			this.eventUnit.issueOrderAt(Order.Attack, Loc.middle.alliance.randomX, Loc.middle.alliance.randomY)
		} else {
			this.eventUnit = new Unit(PLAYER_NEUTRAL_AGGRESSIVE, this.summonUnitType.id, this.spawnPos, 270)
		}

		this.eventUnit.setPathing(false)
		this.eventDeath.registerUnitEvent(this.eventUnit, EVENT_UNIT_DEATH)
	}

	private _onEventUnitDeath (): void {
		this.allianceScore = 0
		this.federationScore = 0
		this.timer.start(this.eventInterval, false, () => { this._onEventStart() })
		this.onEventUnitDeath()
	}

	public onEventUnitDeath (): void {
		//
	}
}


