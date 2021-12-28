import { AbilityType } from '.'

export interface iHeroAbilityType {
	type: AbilityType,
	starting?: boolean,
	ult?: boolean,
	hidden?: boolean
}

export class HeroAbilityType implements iHeroAbilityType {
	starting: boolean
	type: AbilityType
	ult: boolean
	hidden: boolean

	constructor (heroAbilityType: iHeroAbilityType) {
		this.type = heroAbilityType.type
		this.starting = heroAbilityType.starting ?? false
		this.ult = heroAbilityType.ult ?? false
		this.hidden = heroAbilityType.hidden ?? false
	}
}
