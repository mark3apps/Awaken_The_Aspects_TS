import { Logger } from 'app/log'
import { Ability } from 'app/classes/ability'
import { UnitType } from 'app/classes/unitType'
import { Timer, Unit, Trigger, Anim, Effect, AbilityModel, DoodadModel } from 'lib/w3ts/index'
import { Banner } from '../banner/banner'
import { Units } from 'lib/w3ts/handles/Units'
import { AbilityTypes } from "app/classes/abilityTypes"
import { Event } from './event'
import { Rectangles } from 'lib/w3ts/handles/Rectangles'
import { Forces } from 'lib/w3ts/handles/Forces'


export class AspectOfFireEvent extends Event {
	inferno: Trigger
	wisp?: Unit

	constructor (summonUnitType: UnitType, banners: Banner[] = [], eventInterval?: number, eventTime?: number) {
		super(summonUnitType, banners, Rectangles.EventCenter.centerPosition, eventInterval, eventTime)

		this.inferno = new Trigger()
		this.inferno.enabled = false
		this.inferno.registerTimerEvent(30, true)
		this.inferno.addAction(() => { this.infernoAbility() })
	}

	public infernoAbility (): void {
		const abilityTypes = AbilityTypes.getInstance()

		if (this.eventUnit) {
			const count = math.floor(math.random(2, 4))

			for (let i = 0; i < count; i++) {
				const u = new Unit(this.eventUnit.owner, UnitType.Dummy.id, this.eventUnit.coordinate, 0)
				u.addAbility(abilityTypes.aspectInferno)
				u.applyTimedLifeGeneric(2)

				const ua = new Ability(u, abilityTypes.aspectInferno)
				ua.cast(u.getRandomPosAround(500))
			}
		}
	}

	public override onEventInit (): void {
		Units.h002_0699.setAnimation(Anim.EyeOfSargeras.death)
	}

	public override onEventStart (): void {
		Units.h002_0699.setAnimation(Anim.EyeOfSargeras.stand)
		this.wisp = new Unit(PLAYER_NEUTRAL_PASSIVE, UnitType.DummyCenterEvent.id, this.spawnPos, 0)
		this.wisp.flyHeight = 50
		this.wisp.applyTimedLifeGeneric(this.eventDuration + 4)
		Logger.Information('Event Started')
	}

	public override onEventLoop (): void {
		if (this.wisp) {
			if (this.allianceScore > this.federationScore) {
				this.wisp.owner = Forces.Alliance.getRandomPlayer()
			} else {
				this.wisp.owner = Forces.Federation.getRandomPlayer()
			}
		}
	}

	public override onEventEnd (): void {
		try {
			const regions = [
				[Rectangles.EventTL1, Rectangles.EventTR1, Rectangles.EventBL1, Rectangles.EventBR1],
				[Rectangles.EventTL2, Rectangles.EventTR2, Rectangles.EventBL2, Rectangles.EventBR2],
				[Rectangles.EventTL3, Rectangles.EventTR3, Rectangles.EventBL3, Rectangles.EventBR3]
			]

			const startEffect1 = new Effect(AbilityModel.flameStrikeTarget, Rectangles.EventCenter.centerX, Rectangles.EventCenter.centerY)

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
				Units.h002_0699.show = false
				new Effect(AbilityModel.doomDeath, Rectangles.EventCenter.centerX, Rectangles.EventCenter.centerY).destroy()

				startEffect1.destroy()

				this.createUnit()
				this.inferno.enabled = true
				this.infernoAbility()

				loopTimer.destroy()
				endTimer.destroy()
			})
		} catch (error) {
			Logger.Error('Event', error)
		}
	}

	public override onEventUnitDeath (): void {
		this.inferno.enabled = false
		Units.h002_0699.show = true
		Units.h002_0699.setAnimation(Anim.EyeOfSargeras.death)
	}
}
