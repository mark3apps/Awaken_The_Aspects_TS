import { Ability, Army, Base, HeroType, ItemType, Loc, Spawn } from "app/classes/index";
import { Force } from "w3ts/index";

declare var ALLIANCE: Army
declare var FEDERATION: Army
declare var ALLIANCE_FORCE: Force
declare var FEDERATION_FORCE: Force

declare var LOC: { [name: string]: Loc }
declare var BASE_ALLIANCE: { [name: string]: Base }
declare var BASE_FEDERATION: { [name: string]: Base }
declare var HERO_TYPE: { [name: string]: HeroType }
declare var ABILITY: { [name: string]: Ability }
declare var ITEM: { [name: string]: ItemType }
declare var SPAWN: { [name: string]: Spawn }