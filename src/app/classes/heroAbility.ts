import { AbilityFour, Effect, AbilityModel, Unit, Timer } from 'lib/w3ts'
import { Ability, Hero, Skill, UnitType } from '.'

export class ShiftSkill extends Skill {
	protected _damage = 0

	protected static map: WeakMap<ability, ShiftSkill> = new WeakMap()
	constructor (hero: Hero, ability: Ability) {
		super(hero, ability)

		ShiftSkill.map.set(this.handle, this)
	}

	static override fromEvent (): ShiftSkill {
		const skill = ShiftSkill.map.get(ShiftSkill.getHandle(Hero.fromEvent(), Ability.fromSpellEvent()))
		if (skill) {
			print("Hero Skill Loaded")
			return skill
		} else {
			print("New Hero Skill")
			return new ShiftSkill(Hero.fromEvent(), Ability.fromSpellEvent())
		}
	}

	onEffect = () => {
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
		dummy.addAbility(Ability.shift1Dummy)
		dummy.applyTimedLifeGeneric(1)

		const shiftDummyAbil = Skill.get(dummy, Ability.shift1Dummy)
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
}
