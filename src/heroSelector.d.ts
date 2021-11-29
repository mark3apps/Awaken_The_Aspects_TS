type who = player | number | force

declare class HeroSelector {
    static unitCreated: (player: player, unitCode: string, isRandom) => null
    static buttonSelected: (player: player, unitCode: string) => null
    static unitBaned: (player: player, unitCode: string) => null
    static repick: (unit: unit, player?: player) => null
    static autoDetectCategory: (unitCode: string) => null
    static initHeroes: () => null
    static setUnitReq: (unitCode: string, who) => null
    static addUnit: (unitCode: string, onlyRandom?: boolean, requirement?) => null
    static setUnitCategory: (unitCode: string, category) => null
    static addUnitCategory: (unitCode: string, category) => null
    static addCategory: (icon, text) => null
    static clearUnitData: () => null
    static show: (flag: boolean, who?: who) => null
    static setFrameText: (frame, text, who?: who) => null
    static setTitleText: (text: string, who?: who) => null
    static setBanButtonText: (text, who?: who) => null
    static setAcceptButtonText: (text: string, who?: who) => null
    static enablePick: (flag: boolean, who?: who) => null
    static enableBan: (flag: boolean, who?: who) => null
    static forceRandom: (who?: who) => null
    static forcePick: (who?: who) => null
    static buttonRequirementDone: (unitCode: string, player: player) => null
    static deselectButtons: (buttonIndex?) => null
    static update: () => null
    static destroy: () => null
    static getDisabledIcon: (icon: string) => string
    static showFrame: (frame, flag: boolean, who?: who) => null
    static includesPlayer: (who: who, player: player) => boolean
    static counterChangeUnitCode: (unitCode: string, add, player: player) => null
    static frameLoseFocus: (frame) => null
    static rollOption: (player: player, includeRandomOnly: boolean, excludedIndex, category) => number
}
