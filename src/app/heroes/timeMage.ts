import { Ability } from "app/classes/ability"
import { HeroType } from "app/classes/herotype"
import { ABL, HT, IT } from "app/globals/keys"
import { OrderId } from "w3ts/globals/order"

// Time Mage Abilities
ABL.chronoAtrophy = new Ability("chronoAtrophy", "A04K", OrderId.Flamestrike)
ABL.decay = new Ability("decay", "A032", OrderId.Shadowstrike)
ABL.timeTravel = new Ability("timeTravel", "A04P", OrderId.Clusterrockets, )
ABL.paradox = new Ability("paradox", "A04N", OrderId.Tranquility, false, "", [10, 10, 10])

// Time Mage Hero Setup
HT.timeMage = new HeroType("timeMage", "H00J", "h00Z")
HT.timeMage.addAbility(ABL.chronoAtrophy, false, false, true)
HT.timeMage.addAbility(ABL.decay, false, false, true)
HT.timeMage.addAbility(ABL.timeTravel, false, false, true)
HT.timeMage.addAbility(ABL.paradox, true, false, true)
HT.timeMage.addItem(IT.teleport)
HT.timeMage.addItem(IT.mage)
