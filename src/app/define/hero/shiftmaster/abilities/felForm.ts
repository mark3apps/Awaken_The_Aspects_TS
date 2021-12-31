import { UnitAbility, Hero, UnitType } from 'app/classes'
import { IUnitAbilityParam } from 'app/classes/unitAbility/interfaces/IUnitAbilityParam'
import { HeroMap } from 'app/classes/HeroTypeMap'
import { Logger } from 'app/log'
import { AbilityField } from 'lib/resources/fields'
import { Order } from 'lib/w3ts'

export class FelFormAbility extends UnitAbility {
	private _felUnit = UnitType.get(this.getLevelField(AbilityField.ALTERNATE_FORM_UNIT_EMEU) as number)
	private _damage = 100
	private _attackSpeed = 0.5
	private _moveSpeed = 200
	private _armor = 10
	private _lifeRegenerationRate = 50
	augments = 0
	custom = this.unit.custom

	constructor (ability: IUnitAbilityParam) {
		super(ability)
		this.updateTooltips()
	}

	override updateTooltip (): void {
		this.tooltip = `Fel Form [|cffffcc00${this.augments} Augments|r]`
	}

	override updateExtendedTooltop (): void {
		//
	}

	get moveSpeed () {
		return this._moveSpeed
	}

	set moveSpeed (value) {
		this._moveSpeed = value
		this.updateTooltips()
	}

	get attackSpeed () {
		return this._attackSpeed
	}

	set attackSpeed (value) {
		this._attackSpeed = value
		this.updateTooltips()
	}

	get armor () {
		return this._armor
	}

	set armor (value) {
		this._armor = value
		this.updateTooltips()
	}

	get lifeRegenerationRate () {
		return this._lifeRegenerationRate
	}

	set lifeRegenerationRate (value) {
		this._lifeRegenerationRate = value
		this.updateTooltips()
	}

	get felUnit () {
		return this._felUnit
	}

	set felUnit (value) {
		if (value) {
			this.setLevelField(AbilityField.ALTERNATE_FORM_UNIT_EMEU, value.id)
			this._felUnit = value
		}
	}

	get hitPointBonus () {
		return this.getLevelField(AbilityField.ALTERNATE_FORM_HIT_POINT_BONUS) as number
	}

	set hitPointBonus (value) {
		this.setLevelField(AbilityField.ALTERNATE_FORM_HIT_POINT_BONUS, value)
		this.updateTooltips()
	}

	get damage () {
		return this._damage
	}

	set damage (value) {
		this.updateTooltips()
		this._damage = value
	}

	override onEffect = () => {
		// Start Fel Form
		if (this.unit.currentOrder === Order.Metamorphosis) {
			this.startFelForm()

			// End Fel Form
		} else if (this.custom.get("felForm")) {
			this.endFelForm()
		}
	}

	startFelForm () {
		try {
			this.custom.set("felForm", true)

			const hero = HeroMap.get(this.unit)

			if (hero) {
				Logger.Information("Hero", hero.unit.name)

				// hero.armorBonus += this.armor
				// this.custom.set("felFormArmor", this.armor)

				// hero.agilityBonus += this.damage
				// this.custom.set("felFormDamage", this.damage)

				// hero.attackSpeedBonus += this.attackSpeed
				// this.custom.set("felFormAttackSpeed", this.attackSpeed)

				// hero.moveSpeedBonus += this.moveSpeed
				// this.custom.set("felFormMoveSpeed", this.moveSpeed)

				this.unit.lifeRegenerationRate += this.lifeRegenerationRate
				this.custom.set("felFormLifeRegen", this.lifeRegenerationRate)
			} else {
				Logger.Warning("Hero Not Found")
			}

			print("Morphing")
		} catch (error) {
			Logger.Error("Fel Form", error)
		}
	}

	endFelForm () {
		const hero = HeroMap.get(this.unit) as Hero
		// hero.armorBonus -= this.custom.get("felFormArmor") as number
		// hero.damageBonus -= this.custom.get("felFormDamage") as number
		// hero.attackSpeedBonus -= this.custom.get("felFormAttackSpeed") as number
		// hero.moveSpeedBonus -= this.custom.get("felFormMoveSpeed") as number
		this.unit.lifeRegenerationRate -= this.custom.get("felFormLifeRegen") as number

		// Reset variables
		this.custom.set("felForm", false)

		print("UnMorphing")
	}

	static override fromHandle (ability: IUnitAbilityParam) {
		return this.getObject(ability) as FelFormAbility
	}
}
