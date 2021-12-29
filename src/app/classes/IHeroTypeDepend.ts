import { AbilityTypes } from 'app/define/abilityTypes/abilityTypes'
import { HeroAttributes } from 'app/systems/heroAttribute/heroAttributes'

export interface IHeroTypeDepend {
	abilityTypes: AbilityTypes,
	heroAttr: HeroAttributes
}
