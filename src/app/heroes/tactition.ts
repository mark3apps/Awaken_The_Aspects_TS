import { Ability } from "app/classes/ability"
import { HeroType } from "app/classes/herotype"
import { ABL, HT, IT } from "app/globals/keys"
import { OrderId } from "w3ts/globals/order"

// Tactition Abilities
ABL.inspire = new Ability("inspire", "A042", OrderId.Channel)
ABL.ironDefense = new Ability("ironDefense", "A019", OrderId.Roar)
ABL.raiseBanner = new Ability("raiseBanner", "A01I", OrderId.Healingward)
ABL.attack = new Ability("attack", "A01B", OrderId.Fingerofdeath)
ABL.bolster = new Ability("bolster", "A01Z", OrderId.Tranquility)

// Tactition Hero Setup
HT.tactition = new HeroType("tactition", "H009", "h00Y")
HT.tactition.addAbility(ABL.raiseBanner, true, true)
HT.tactition.addAbility(ABL.attack)
HT.tactition.addAbility(ABL.bolster)
HT.tactition.addAbility(ABL.ironDefense)
HT.tactition.addAbility(ABL.inspire, true, false, true)
HT.tactition.addItem(IT.teleport)
HT.tactition.addItem(IT.tank)