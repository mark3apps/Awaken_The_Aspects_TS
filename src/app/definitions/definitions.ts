

import { Ability } from "classes/ability";
import { Base } from "classes/base";
import { ItemType } from "classes/itemType";
import { Loc } from "classes/loc";
import { Spawn } from "classes/spawn";
import { SpawnBases } from "lib/resources/spawnBases";
import { HeroType } from "classes/herotype";
import { Army } from "../../classes/army"
import { Force, MapPlayer, Rectangle, Unit } from "lib/w3ts/index"
import { OrderId } from "lib/w3ts/globals/order"



export namespace Def {



	export let loc: { [name: string]: Loc; };
	export let baseAlliance: { [name: string]: Base; };
	export let baseFederation: { [name: string]: Base; };
	export let heroType: { [name: string]: HeroType; };
	export let ability: { [name: string]: Ability; };
	export let item: { [name: string]: ItemType; };
	export let SPAWN: SpawnBases;










	






	


}