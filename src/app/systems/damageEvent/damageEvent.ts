import { AttackType, DamageType } from 'lib/resources/types'
import { Unit } from 'lib/w3ts'
import { ArcTag } from '../arcTags/arctags'


export class DamageEvent {
	source: Unit
	target: Unit

	constructor () {
		this.source = Unit.fromDamageSource()
		this.target = Unit.fromDamageTarget()

		this.applyCustomDamage()
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

	isSpell = () => {
		return this.attackType == AttackType.NORMAL
	}

	isAttack = () => {
		return this.damageType == DamageType.NORMAL
	}

	applyCustomDamage = () => {
		// print(`Source: ${this.source.name} | Target: ${this.target.name} | isA: ${this.isAttack()} | isS ${this.isSpell()}`)
		// print(`Damage ORG: ${this.damage}`)

		if (this.isSpell()) this.damage *= this.source.spellDamage * this.target.spellResistance
		const displayDamage = this.damage

		if (this.target.shield > 0) {
			this.target.shield -= this.damage
			if (this.target.shield < 0) {
				this.damage = this.target.shield * -1
				this.target.shield = 0
			} else {
				this.damage = 0
			}
		}

		if (this.source.owner.controller == MAP_CONTROL_USER) new ArcTag(`${math.floor(displayDamage)}`, this.target)

		// print(`Damage ADJ: ${this.damage}`)
	}
}
