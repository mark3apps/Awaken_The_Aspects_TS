import { Ability } from "app/classes/ability";
import { Army } from "app/classes/army";
import { Base } from "app/classes/base";
import { HeroType } from "app/classes/herotype";
import { ItemType } from "app/classes/itemType";
import { Loc } from "app/classes/loc";
import { Force } from "w3ts/index";


declare const ALLIANCE: Army
declare const FEDERATION: Army
declare const ALLIANCE_FORCE: Force
declare const FEDERATION_FORCE: Force

declare const LOC: { [name: string]: Loc }
declare const BASE_ALLIANCE: { [name: string]: Base }
declare const BASE_FEDERATION: { [name: string]: Base }
declare const HERO_TYPE: { [name: string]: HeroType }
declare const ABILITIES: { [name: string]: Ability }
declare const ITEM: { [name: string]: ItemType }
