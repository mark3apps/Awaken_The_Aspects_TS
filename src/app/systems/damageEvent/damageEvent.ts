import { AttackType, DamageType } from 'lib/resources/types'
import { Color, MapPlayer, Unit } from 'lib/w3ts'
import { ArcTag } from '../arcTags/arctags'
import { IArcTag } from '../arcTags/IArcTag'
import { IDamageEventDepend } from './IDamageEventDepend'

export class DamageEvent {
	source: Unit
	target: Unit
	modifier?: DamageModifier

	protected static last: DamageEvent

	constructor (depend: IDamageEventDepend) {
		this.source = Unit.fromDamageSource()
		this.target = Unit.fromDamageTarget()

		this.applyCustomDamage(depend)
		DamageEvent.last = this
	}

	static getLast () {
		return DamageEvent.last
	}

	get attackType () {
		return BlzGetEventAttackType()
	}

	set attackType (value) {
		BlzSetEventAttackType(value)
	}

	get damageType () {
		return BlzGetEventDamageType()
	}

	set damageType (value) {
		BlzSetEventDamageType(value)
	}

	get damage () {
		return GetEventDamage()
	}

	set damage (value) {
		BlzSetEventDamage(value)
	}

	isSpell () {
		return this.attackType === AttackType.NORMAL
	}

	isAttack () {
		return this.damageType === DamageType.NORMAL
	}

	applyCustomDamage (depend: IDamageEventDepend) {
		if (this.isSpell()) this.damage *= this.source.spellDamage * this.target.spellResistance

		if (this.source.critical > 0) {
			const rand = math.random()
			if (rand <= this.source.critical) {
				this.damage *= this.source.criticalMultiplier
				this.modifier = DamageModifier.Critical
			}
		}

		if (this.target.evade > 0 && this.isAttack()) {
			const rand = math.random()
			if (rand <= this.target.evade) {
				this.damage = 0
				this.modifier = DamageModifier.Evade
			}
		}

		const displayDamage = this.damage

		if (this.target.shield > 0) {
			this.target.shield -= this.damage
			this.modifier = DamageModifier.Shielded
			if (this.target.shield < 0) {
				this.damage = this.target.shield * -1
				this.target.shield = 0
			} else {
				this.damage = 0
			}
		}

		if (this.target.isVisible(MapPlayer.fromLocal())) {
			const colorRed = new Color(255, 0, 0)
			let arcTag: IArcTag

			switch (this.modifier) {
				case DamageModifier.Critical:
					arcTag = { unit: this.target, text: `${math.floor(displayDamage)}`, color: colorRed }
					new ArcTag(depend, arcTag)
					break

				case DamageModifier.Evade:
					arcTag = { unit: this.source, text: "miss", color: colorRed }
					new ArcTag(depend, arcTag)
					break

				default:
					break
			}

			if (this.source.owner.controller === MAP_CONTROL_USER && (this.damage > 5 || this.modifier === DamageModifier.Shielded)) {
				arcTag = { unit: this.target, text: `${math.floor(displayDamage)}` }
				new ArcTag(depend, arcTag)
			}
		}
	}
}

const enum DamageModifier {
	Evade,
	Critical,
	Shielded
}
