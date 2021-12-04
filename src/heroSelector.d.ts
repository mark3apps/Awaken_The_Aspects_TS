/* eslint-disable no-unused-vars */
type who = player | number | force

declare namespace HeroSelector {
	const unitCreated: (player: player, unitCode: string, isRandom) => null
	const buttonSelected: (player: player, unitCode: string) => null
	const unitBaned: (player: player, unitCode: string) => null
	const repick: (unit: unit, player?: player) => null
	const autoDetectCategory: (unitCode: string) => null
	const initHeroes: () => null
	const setUnitReq: (unitCode: string, who) => null
	const addUnit: (unitCode: string, onlyRandom?: boolean, requirement?) => null
	const setUnitCategory: (unitCode: string, category) => null
	const addUnitCategory: (unitCode: string, category) => null
	const addCategory: (icon, text) => null
	const clearUnitData: () => null
	const show: (flag: boolean, who?: who) => null
	const setFrameText: (frame, text, who?: who) => null
	const setTitleText: (text: string, who?: who) => null
	const setBanButtonText: (text, who?: who) => null
	const setAcceptButtonText: (text: string, who?: who) => null
	const enablePick: (flag: boolean, who?: who) => null
	const enableBan: (flag: boolean, who?: who) => null
	const forceRandom: (who?: who) => null
	const forcePick: (who?: who) => null
	const buttonRequirementDone: (unitCode: string, player: player) => null
	const deselectButtons: (buttonIndex?) => null
	const update: () => null
	const destroy: () => null
	const getDisabledIcon: (icon: string) => string
	const showFrame: (frame, flag: boolean, who?: who) => null
	const includesPlayer: (who: who, player: player) => boolean
	const counterChangeUnitCode: (unitCode: string, add, player: player) => null
	const frameLoseFocus: (frame) => null
	const rollOption: (player: player, includeRandomOnly: boolean, excludedIndex, category) => number
}
