import { defineAbilities } from "./definitions/abilities"
import { defineBases } from "./definitions/bases"
import { defineHeroTypes } from "./definitions/heroes"
import { defineItems } from "./definitions/itemTypes"
import { defineLocs } from "./definitions/locs"
import { SPAWN } from "./definitions/spawns"


export namespace Game {


    export function gameStart(){
        
        // Define Globals
        defineAbilities()
        defineItems()
        defineHeroTypes()
        defineLocs()
        defineBases()
        
        // Start Spawn
        SPAWN.start()
    }
    

    

}

