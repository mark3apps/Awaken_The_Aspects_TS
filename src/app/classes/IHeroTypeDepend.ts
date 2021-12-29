import { AbilityTypes } from 'app/classes/ability/abilityTypes'
import { HeroAttributes } from 'app/systems/heroAttribute/heroAttributes'

export interface IHeroTypeDepend {
	abilityTypes: AbilityTypes,
	heroAttr: HeroAttributes
}
