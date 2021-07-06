/** @noSelfInFile **/

import { Ability } from "./ability"

export class HeroType {

    constructor(name: string, four: string, fourAlter: string) {

        const id = FourCC(four)
        const idAlter = FourCC(fourAlter)
        let spellCount = 0
        let permanentSpells = {}
        let permanentSpellsCount = 0
        let spellsStarting = {}
		let spellsStartingCount = 0
		let spellsUlt = {}
		let spells = {}
		let items = {}
		let itemCount = 0
		let talents = {}
            

    }

    /**
     * set Spell
     */
    public set ability(spellObj: Ability) {
        
    }

}