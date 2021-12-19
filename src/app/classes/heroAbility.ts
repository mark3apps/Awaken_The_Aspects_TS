import { AbilityType } from '.'

export interface iHeroAbilityType {
	type: AbilityType,
	starting: boolean,
	ult: boolean
}

export class HeroAbilityType implements iHeroAbilityType {
	starting: boolean
	type: AbilityType
	ult: boolean

	constructor (heroAbilityType: iHeroAbilityType) {
		this.starting = heroAbilityType.starting
		this.type = heroAbilityType.type
		this.ult = heroAbilityType.ult
	}
}
