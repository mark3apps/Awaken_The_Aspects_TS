import { defineAbilities } from "./abilities"
import { defineBases } from "./bases"
import { defineHeroTypes } from "./heroes"
import { defineItems } from "./itemTypes"
import { defineLocs } from "./locs"
import { defineSpawns } from "./spawns"

export function defineGlobals() {
    defineAbilities()
    defineItems()
    defineHeroTypes()
    defineLocs()
    defineBases()
    defineSpawns()
}