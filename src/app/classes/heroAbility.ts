import { AbilityType } from '.'

export interface iHeroAbilityType {
	type: AbilityType,
	starting: boolean,
	ult: boolean,
	hidden?: boolean
}

export class HeroAbilityType implements iHeroAbilityType {
	starting: boolean
	type: AbilityType
	ult: boolean
	hidden: boolean

	constructor (heroAbilityType: iHeroAbilityType) {
		this.starting = heroAbilityType.starting
		this.type = heroAbilityType.type
		this.ult = heroAbilityType.ult
		this.hidden = heroAbilityType.hidden ?? false
	}
}
