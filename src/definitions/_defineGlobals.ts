import { defineAbilities } from "./abilities"
import { defineHeroTypes } from "./heroes"
import { defineItems } from "./itemTypes"

export function defineGlobals() {
    defineAbilities()
    defineItems()
    defineHeroTypes()
}