import { Ability } from "app/classes/ability"
import { HeroType } from "app/classes/herotype"
import { ABL, HT, IT } from "app/globals/keys"
import { OrderId } from "w3ts/globals/order"

// Brawler Abilities
ABL.drain = new Ability("drain", "A01Y", OrderId.Stomp, false, "", [6, 6, 6, 6, 6, 6])
ABL.bloodlust = new Ability("bloodlust", "A007", OrderId.Stomp)
ABL.warstomp = new Ability("warstomp", "A002", OrderId.Stomp)
ABL.unleashRage = new Ability("unleashRage", "A029", OrderId.Stomp, false, "", [6, 6, 6])


// Brawler Hero Setup
HT.brawler = new HeroType("brawler", "E001", "h00I")
HT.brawler.addAbility(ABL.bloodlust, false, false, true)
HT.brawler.addAbility(ABL.drain, false, false, true)
HT.brawler.addAbility(ABL.warstomp, false, false, true)
HT.brawler.addAbility(ABL.unleashRage, true, false, true)
HT.brawler.addItem(IT.teleport)
HT.brawler.addItem(IT.tank)