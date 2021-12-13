import { Skill } from 'app/classes'
import { Ability, EffectType, TargetType } from 'app/classes/ability'
import { Logger } from 'app/classes/log'
import { Group, AbilityFour, Order, Unit, Force, BuffFour, Effect, AbilityModel, AttachPoint, Players } from 'lib/w3ts/index'

export class InspireAbility extends Ability {
	static group = new Group()

	constructor () {
		super({
			four: AbilityFour.Inspire,
			orderId: Order.Channel,
			type: EffectType.Instant,
			target: TargetType.SupportAround,
			permanent: true,
			ult: true,
			addEffect: true,
			addGroup: true,
			loopTick: 1
		})
	}

	public override onEffect = (): void => {
		const eventUnit = Unit.fromEvent()
		const unitAbility = Skill.get(eventUnit, this)
		const unitsInspired = math.floor(unitAbility.castRange)
		const spreadNumber = math.floor(unitAbility.heroDuration)
		const duration = unitAbility.normalDuration
		const areaOfEffect = unitAbility.areaOfEffect

		try {
			let pickedUnits = 0

			const g = new Group()
			g.enumUnitsInRange(eventUnit, areaOfEffect)
			let u = g.first
			while (u != null && pickedUnits < unitsInspired) {
				if (u.isAlly(eventUnit) &&
					(u.inForce(Force.Computers) || u.owner === eventUnit.owner) &&
					!u.isHero &&
					!u.isIllusion &&
					!u.isStructure &&
					!u.invulnerable &&
					u.moveSpeed > 0 &&
					!u.hasBuff(BuffFour.Inspired) &&
					u.isAlive() &&
					u.level < 9) {
					u.addAbility(AbilityFour.InspireSpellBook)
					u.makeAbilityPermanent(true, AbilityFour.InspireSpellBook)
					u.makeAbilityPermanent(true, AbilityFour.InspireAttack)
					u.makeAbilityPermanent(true, AbilityFour.InspireDefence)
					u.makeAbilityPermanent(true, AbilityFour.InspireHealth)
					u.lifePercent = 100
					new Effect(AbilityModel.resurrecttarget, u, AttachPoint.overhead).destroy()

					InspireAbility.group.addUnit(u)
					u.data.custom.set('inspireCastingPlayer', eventUnit.owner.id)
					u.data.custom.set('inspireSpreadNumber', spreadNumber)
					u.data.custom.set('inspireDuration', duration)
					u.data.custom.set('inspireCounter', 0)

					pickedUnits += 1
					if (InspireAbility.group.size === 1 && this.loopTimer) {
						this.loopTimer.resume()
					}
				}

				g.removeUnit(u)
				u = g.first
			}
			g.destroy()
		} catch (error) {
			Logger.Error('Loop', error)
		}
	}

	public override onLoop = (): void => {
		if (InspireAbility.group.size === 0 && this.loopTimer) {
			this.loopTimer.pause()
		} else {
			InspireAbility.group.for(() => {
				const u = Unit.fromEnum()
				const duration = u.data.custom.get('inspireDuration') as number
				const counter = u.data.custom.get('inspireCounter') as number + 1

				if (counter > duration) {
					u.makeAbilityPermanent(false, AbilityFour.InspireSpellBook)
					u.makeAbilityPermanent(false, AbilityFour.InspireAttack)
					u.makeAbilityPermanent(false, AbilityFour.InspireDefence)
					u.makeAbilityPermanent(false, AbilityFour.InspireHealth)
					u.removeAbility(AbilityFour.InspireSpellBook)
					u.data.custom.delete('inspireCastingPlayer')
					u.data.custom.delete('inspireSpreadNumber')
					u.data.custom.delete('inspireDuration')
					u.data.custom.delete('inspireCounter')
					u.data.custom.delete('inspireGroup')
					InspireAbility.group.removeUnit(u)
				} else {
					u.data.custom.set('inspireDuration', counter)
				}
			})
		}
	}
}

export class AbilityInspireDeath extends Ability {
	constructor () {
		super({
			four: AbilityFour.InspireSpellBook,
			type: EffectType.Death,
			addEffect: true
		})
	}

	public override onEffect = (): void => {
		const eventUnit = Unit.fromEvent()

		try {
			// Get Event Unit Custom Data
			const spreadNumber = eventUnit.data.custom.get('inspireSpreadNumber') as number
			const duration = eventUnit.data.custom.get('inspireDuration') as number
			const owningPlayer = Players[eventUnit.data.custom.get('inspireCastingPlayer') as number]

			InspireAbility.group.removeUnit(eventUnit)

			// Clean Event Unit Custom Data
			eventUnit.makeAbilityPermanent(false, AbilityFour.InspireSpellBook)
			eventUnit.makeAbilityPermanent(false, AbilityFour.InspireAttack)
			eventUnit.makeAbilityPermanent(false, AbilityFour.InspireDefence)
			eventUnit.makeAbilityPermanent(false, AbilityFour.InspireHealth)
			eventUnit.removeAbility(AbilityFour.InspireSpellBook)
			eventUnit.data.custom.delete('inspireCastingPlayer')
			eventUnit.data.custom.delete('inspireSpreadNumber')
			eventUnit.data.custom.delete('inspireDuration')
			eventUnit.data.custom.delete('inspireCounter')

			// Find Units around dieing unit
			const g = new Group()
			g.enumUnitsInRange(eventUnit, 300)

			let pickedUnits = 0
			let u = g.first
			while (u != null && pickedUnits < spreadNumber) {
				if (u.isAlly(eventUnit) &&
					(u.inForce(Force.Computers) || u.owner === eventUnit.owner) &&
					!u.isHero &&
					!u.isIllusion &&
					!u.isStructure &&
					!u.invulnerable &&
					u.moveSpeed > 0 &&
					!u.hasBuff(BuffFour.Inspired) &&
					u.isAlive() &&
					u.level < 9) {
					// Inspire Unit
					u.addAbility(AbilityFour.InspireSpellBook)
					u.makeAbilityPermanent(true, AbilityFour.InspireSpellBook)
					u.lifePercent = 100
					new Effect(AbilityModel.resurrecttarget, u, AttachPoint.overhead).destroy()

					InspireAbility.group.addUnit(u)
					u.data.custom.set('inspireCastingPlayer', owningPlayer.id)
					u.data.custom.set('inspireSpreadNumber', spreadNumber)
					u.data.custom.set('inspireDuration', duration)
					u.data.custom.set('inspireCounter', 0)

					pickedUnits += 1
				}

				g.removeUnit(u)
				u = g.first
			}
			g.destroy()
		} catch (error) {
			Logger.Information('Inspiration Die', error)
		}
	}
}
