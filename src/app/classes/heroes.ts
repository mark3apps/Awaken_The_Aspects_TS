
import { BrawlerHeroType } from "app/heroes/brawler";
import { ManaAddictHeroType } from "app/heroes/manaAddict";
import { ShiftMasterHeroType } from "app/heroes/shiftMaster";
import { TactitionHeroType } from "app/heroes/tactition";
import { TimeMageHeroType } from "app/heroes/timeMage";
import { HeroType } from "./herotype";

export declare const HT: { [name: string]: HeroType }

// Hero List Set up
HT.Brawler = new BrawlerHeroType()
HT.manaAddict = new ManaAddictHeroType()
HT.shiftMaster = new ShiftMasterHeroType()
HT.tactition = new TactitionHeroType()
HT.timeMage = new TimeMageHeroType()