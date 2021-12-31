import { Shift } from '../hero/shiftmaster/abilities'
import { HeroAbility } from 'app/classes/heroAbility/HeroAbility'
import { IHeroAbilitiesDepend } from './IHeroAbilitiesDepend'
import { FelForm } from '../hero/shiftmaster/abilities/felForm'

export class HeroAbilities {
	// Static
	protected static instance?: HeroAbilities

	static getInstance (depend: IHeroAbilitiesDepend) {
		if (!HeroAbilities.instance) HeroAbilities.instance = new HeroAbilities(depend)
		return HeroAbilities.instance
	}

	// Instance
	shift
	felForm

	private constructor (depend: IHeroAbilitiesDepend) {
		// Dependencies
		const abilTypes = depend.abilityTypes
		const abilCast = depend.abilityCast

		//
		// Shift Master
		//

		// Shift
		this.shift = new HeroAbility(depend, {
			abilType: abilTypes.Shift,
			starting: true,
			TriggerUnit: abilCast.CastingHero,
			unitAbility: (unitAbil) => { return Shift.fromHandle(unitAbil) }
		})
		// Fel Form
		this.felForm = new HeroAbility(depend, {
			abilType: abilTypes.FelForm,
			starting: false,
			TriggerUnit: abilCast.CastingHero,
			unitAbility: (unitAbil) => { return FelForm.fromHandle(unitAbil) }
		})
	}
}
