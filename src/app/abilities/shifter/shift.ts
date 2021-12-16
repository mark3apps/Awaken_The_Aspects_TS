import { Globals } from 'app/globals'
import { AbilityFour, Effect, AbilityModel, Unit, Timer } from 'lib/w3ts'
import { AbilityType, Ability, UnitType } from '../../classes'

export class ShiftAbility extends Ability {
	protected _damage = 0

	onEffect = () => {
		const G = Globals.getInstance()

		// Get Unit Constants
		const facing = this.unit.facing
		const startPostion = this.unit.position

		// Get Ability Constants
		const distance = this.normalDuration
		const speed = this.heroDuration
		const tick = 0.01

		const tickDistance = distance / (speed / tick)

		// Add Start Abilitys
		this.unit.addAbility(AbilityFour.Ghost)
		this.unit.setPathing(false)

		// SFX
		const startEffect = new Effect(AbilityModel.feralspirittarget, this.unit.x, this.unit.y)
		startEffect.scale = 2
		startEffect.z = 10
		startEffect.destroy()

		// Cast Illusion on Hero
		const dummy = new Unit(this.unit.owner, UnitType.Dummy, this.unit.position, 0)
		dummy.addAbility(G.abilityType.shift1Dummy)
		dummy.applyTimedLifeGeneric(1)

		const shiftDummyAbil = Ability.get(dummy, G.abilityType.shift1Dummy)
		if (!shiftDummyAbil) return

		shiftDummyAbil.castTarget(this.unit)

		const loop = new Timer()

		loop.start(tick, true, () => {
			const pos = this.unit.polarProjection(tickDistance, facing)

			if (pos.isTerrianPathable() && (this.unit.distanceTo(startPostion) < distance)) {
				this.unit.position = pos
			} else {
				this.unit.removeAbility(AbilityFour.Ghost)
				this.unit.setPathing(true)
				loop.destroy()
			}
		})
	}

	static override fromEvent (): ShiftAbility {
		return this.get(Unit.fromCaster(), AbilityType.fromSpellEvent())
	}

	static override get (unit: Unit, ability: AbilityType): ShiftAbility {
		return Ability._getAbility(unit, ability)
	}
}
