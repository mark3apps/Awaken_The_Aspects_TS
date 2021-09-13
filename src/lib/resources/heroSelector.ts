type who = player | number | force

export const enum Category {
    Melee = 1, //autodetected
    Ranged = 2, //autodetected
    Str = 4,
    Agi = 8,
    Int = 16
}

export declare namespace HeroSelector {
    export const unitCreated: (player, unitCode, isRandom) => null
    export const buttonSelected: (player, unitCode) => null
    export const unitBaned: (player, unitCode) => null
    export const repick: (unit, player?) => null
    export const autoDetectCategory: (unitCode) => null
    export const initHeroes: () => null
    export const setUnitReq: (unitCode, who) => null
    export const addUnit: ([unitCode, onlyRandom, requirement]) => null
    export const setUnitCategory: (unitCode, category) => null
    export const addUnitCategory: (unitCode, category) => null
    export const addCategory: (icon, text) => null
    export const clearUnitData: () => null
    export const show: (flag: boolean, who?: who) => null
    export const setFrameText: (frame, text, who?: who) => null
    export const setTitleText: (text, who?: who) => null
    export const setBanButtonText: (text, who?: who) => null
    export const setAcceptButtonText: (text, who?: who) => null
    export const enablePick: (flag, who?: who) => null
    export const enableBan: (flag, who?: who) => null
    export const forceRandom: (who?: who) => null
    export const forcePick: (who?: who) => null
    export const buttonRequirementDone: (unitCode, player) => null
    export const deselectButtons: (buttonIndex?) => null
    export const update: () => null
    export const destroy: () => null
    export const getDisabledIcon: (icon) => string
    export const showFrame: (frame, flag, who?: who) => null
    export const includesPlayer: (who: who, player) => boolean
    export const counterChangeUnitCode: (unitCode, add, player) => null
    export const frameLoseFocus: (frame) => null
    export const rollOption: (player, includeRandomOnly, excludedIndex, category) => number
}
