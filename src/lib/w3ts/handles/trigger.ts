/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @noSelfInFile **/

import { Dialog, DialogButton } from "./dialog"
import { Frame } from "./frame"
import { Handle } from "./handle"
import { MapPlayer } from "./player"
import { Rectangle } from "./rect"
import { Timer } from "./timer"
import { Unit } from "./unit"
import { Widget } from "./widget"

export class Trigger extends Handle<trigger> {
  constructor() {
    if (Handle.initFromHandle()) {
      super()
    } else {
      super(CreateTrigger())
    }
  }

  public set enabled(flag: boolean) {
    if (flag) {
      EnableTrigger(this.handle)
    } else {
      DisableTrigger(this.handle)
    }
  }

  public get enabled() {
    return IsTriggerEnabled(this.handle)
  }

  public get evalCount() {
    return GetTriggerEvalCount(this.handle)
  }

  public static get eventId() {
    return GetTriggerEventId()
  }

  public get execCount() {
    return GetTriggerExecCount(this.handle)
  }

  /**
   * Marks the given trigger to wait/no longer wait for `TriggerSleepAction`s in sub trigger executions started via `TriggerExecuteWait`.
   * Since this is an attribute of the execution rather than the trigger object, this affects future runs of the given trigger, and not
   * those already started.
   */
  public set waitOnSleeps(flag: boolean) {
    TriggerWaitOnSleeps(this.handle, flag)
  }

  public get waitOnSleeps() {
    return IsTriggerWaitOnSleeps(this.handle)
  }

  public addAction(actionFunc: () => void) {
    return TriggerAddAction(this.handle, actionFunc)
  }

  /**
   * Adds a new condition to the trigger.
   *
   * Adding more conditions later wil join them by AND (that means all conditions need to evaluate to `true`)
   *
   * @example
   * ```ts
   * const t = new Trigger()
   *
   * // trigger fires if a unit is attacked
   * t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED)
   *
   * // but only if the unit name matches
   * t.addCondition(Condition(() => Unit.fromHandle(GetAttacker()).name === 'Attacker Unit'))
   *
   * t.addAction(() => {
   *  //do something...
   * })
   * ```
   * @param condition The condition which must evaluate to true in order to run the trigger's actions.
   */
  public addCondition(condition: boolexpr | (() => boolean)): triggercondition {
    return TriggerAddCondition(this.handle, typeof condition === "function" ? Condition(condition) : condition)
  }

  public add(event: () => void) {
    const trigFormatted = function () {
      event()
    }

    TriggerAddAction(this.handle, trigFormatted)
  }

  /**
   * @bug Do not destroy the current running Trigger (when waits are involved)
   * as it can cause handle stack corruption as documented [here](http://www.wc3c.net/showthread.php?t=110519).
   */
  public destroy(): void {
    DestroyTrigger(this.handle)
  }

  /**
   * Evaluates all functions that were added to the trigger via `addCondition`.
   * All return-values from all added condition-functions are `and`ed together as the final return-value.
   * Returns the boolean value of the return value from the condition-function.
   * So if 0/0.0/null would be returned in the condition-function, `eval`
   * would return false. Note that `""` would return `true`.
   * @note If a condition-function crashes the thread or does not return any value `eval` will return false.
   * @note If you want to return false for a condition-function that returns string (for whatever reason) return `null` instead of `""`
   * @note *All* functions added via `addCondition` are run. There is no short-circuting. If you want short-circuting use `And` or `Or`.
   * @note All functions added via `addCondition` are run in the order they were added.
   */
  public eval() {
    return TriggerEvaluate(this.handle)
  }

  /**
   * Calls the actions of a trigger in a new execution context.
   * Control will return to the caller when the trigger has finished or has been suspended via TriggerSleepAction.
   */
  public exec() {
    return TriggerExecute(this.handle)
  }

  /**
   * Does the same as `exec` but if the caller has been marked with `waitOnSleeps` before its
   * execution, it will additionally wait for `TriggerSleepAction`s of the callee, so this really ensures that
   * the callee has finished. If there was a `TriggerSleepAction`, there will be a short delay before returning.
   */
  public execWait() {
    TriggerExecuteWait(this.handle)
  }

  public registerAnyUnitEvent(whichPlayerUnitEvent: playerunitevent) {
    return TriggerRegisterAnyUnitEventBJ(this.handle, whichPlayerUnitEvent)
  }

  public registerCommandEvent(whichAbility: number, order: string) {
    return TriggerRegisterCommandEvent(this.handle, whichAbility, order)
  }

  public registerDeathEvent(whichWidget: Widget) {
    return TriggerRegisterDeathEvent(this.handle, whichWidget.handle)
  }

  public registerDialogButtonEvent(whichButton: DialogButton) {
    return TriggerRegisterDialogButtonEvent(this.handle, whichButton.handle)
  }

  public registerDialogEvent(whichDialog: Dialog) {
    return TriggerRegisterDialogEvent(this.handle, whichDialog.handle)
  }

  public registerEnterRect(whichRect: Rectangle) {
    return TriggerRegisterEnterRectSimple(this.handle, whichRect.handle)
  }

  public registerLeaveRect(whichRect: Rectangle) {
    return TriggerRegisterLeaveRectSimple(this.handle, whichRect.handle)
  }

  public registerEnterRegion(whichRegion: region, filter: boolexpr | (() => boolean) | null) {
    return TriggerRegisterEnterRegion(this.handle, whichRegion, typeof filter === "function" ? Filter(filter) : filter)
  }

  public registerFilterUnitEvent(whichUnit: unit, whichEvent: unitevent, filter: boolexpr | (() => boolean) | null) {
    return TriggerRegisterFilterUnitEvent(this.handle, whichUnit, whichEvent, typeof filter === "function" ? Filter(filter) : filter)
  }

  public registerGameEvent(whichGameEvent: gameevent) {
    return TriggerRegisterGameEvent(this.handle, whichGameEvent)
  }

  public registerGameStateEvent(whichState: gamestate, opcode: limitop, limitval: number) {
    return TriggerRegisterGameStateEvent(this.handle, whichState, opcode, limitval)
  }

  public registerLeaveRegion(whichRegion: region, filter: boolexpr | (() => boolean) | null) {
    return TriggerRegisterLeaveRegion(this.handle, whichRegion, typeof filter === "function" ? Filter(filter) : filter)
  }

  public registerPlayerAllianceChange(whichPlayer: MapPlayer, whichAlliance: alliancetype) {
    return TriggerRegisterPlayerAllianceChange(this.handle, whichPlayer.handle, whichAlliance)
  }

  public registerPlayerChatEvent(whichPlayer: MapPlayer, chatMessageToDetect: string, exactMatchOnly: boolean) {
    return TriggerRegisterPlayerChatEvent(this.handle, whichPlayer.handle, chatMessageToDetect, exactMatchOnly)
  }

  public registerPlayerEvent(whichPlayer: MapPlayer, whichPlayerEvent: playerevent) {
    return TriggerRegisterPlayerEvent(this.handle, whichPlayer.handle, whichPlayerEvent)
  }

  public registerPlayerKeyEvent(whichPlayer: MapPlayer, whichKey: oskeytype, metaKey: number, fireOnKeyDown: boolean) {
    return BlzTriggerRegisterPlayerKeyEvent(this.handle, whichPlayer.handle, whichKey, metaKey, fireOnKeyDown)
  }

  public registerPlayerMouseEvent(whichPlayer: MapPlayer, whichMouseEvent: number) {
    return TriggerRegisterPlayerMouseEventBJ(this.handle, whichPlayer.handle, whichMouseEvent)
  }

  public registerPlayerStateEvent(whichPlayer: MapPlayer, whichState: playerstate, opcode: limitop, limitval: number) {
    return TriggerRegisterPlayerStateEvent(this.handle, whichPlayer.handle, whichState, opcode, limitval)
  }

  public registerPlayerSyncEvent(whichPlayer: MapPlayer, prefix: string, fromServer: boolean) {
    return BlzTriggerRegisterPlayerSyncEvent(this.handle, whichPlayer.handle, prefix, fromServer)
  }

  public registerPlayerUnitEvent(whichPlayer: MapPlayer, whichPlayerUnitEvent: playerunitevent, filter: boolexpr | (() => boolean) | null) {
    return TriggerRegisterPlayerUnitEvent(this.handle, whichPlayer.handle, whichPlayerUnitEvent, typeof filter === "function" ? Filter(filter) : filter)
  }

  // Creates it's own timer and triggers when it expires
  public registerTimerEvent(timeout: number, periodic: boolean) {
    return TriggerRegisterTimerEvent(this.handle, timeout, periodic)
  }

  // Triggers when the timer you tell it about expires
  public registerTimerExpireEvent(t: timer) {
    return TriggerRegisterTimerExpireEvent(this.handle, t)
  }

  public registerTrackableHitEvent(whichTrackable: trackable) {
    return TriggerRegisterTrackableHitEvent(this.handle, whichTrackable)
  }

  public registerTrackableTrackEvent(whichTrackable: trackable) {
    return TriggerRegisterTrackableTrackEvent(this.handle, whichTrackable)
  }

  public registerUnitEvent(whichUnit: Unit, whichEvent: unitevent) {
    return TriggerRegisterUnitEvent(this.handle, whichUnit.handle, whichEvent)
  }

  public registerUnitInRage(whichUnit: unit, range: number, filter: boolexpr | (() => boolean) | null) {
    return TriggerRegisterUnitInRange(this.handle, whichUnit, range, typeof filter === "function" ? Filter(filter) : filter)
  }

  public registerUnitStateEvent(whichUnit: Unit, whichState: unitstate, opcode: limitop, limitval: number) {
    return TriggerRegisterUnitStateEvent(this.handle, whichUnit.handle, whichState, opcode, limitval)
  }


  public registerUpgradeCommandEvent(whichUpgrade: number) {
    return TriggerRegisterUpgradeCommandEvent(this.handle, whichUpgrade)
  }

  public registerVariableEvent(varName: string, opcode: limitop, limitval: number) {
    return TriggerRegisterVariableEvent(this.handle, varName, opcode, limitval)
  }

  public removeAction(whichAction: triggeraction) {
    return TriggerRemoveAction(this.handle, whichAction)
  }

  public removeActions() {
    return TriggerClearActions(this.handle)
  }

  public removeCondition(whichCondition: triggercondition) {
    return TriggerRemoveCondition(this.handle, whichCondition)
  }

  public removeConditions() {
    return TriggerClearConditions(this.handle)
  }

  public reset() {
    ResetTrigger(this.handle)
  }

  public triggerRegisterFrameEvent(frame: Frame, eventId: frameeventtype) {
    return BlzTriggerRegisterFrameEvent(this.handle, frame.handle, eventId)
  }

  public static fromEvent() {
    return this.fromHandle(GetTriggeringTrigger())
  }

  public static fromHandle(handle: trigger): Trigger {
    return this.getObject(handle)
  }


  static unitDies = new Trigger()
  static unitDying = new Trigger()
  static unitOrdered = new Trigger()
  static unitAttacked = new Trigger()
  static unitDamaged = new Trigger()
  static unitCreated = new Trigger()
  static unitEntersRegion = new Trigger()
  static unitSummoned = new Trigger()
  static unitTrained = new Trigger()
  static unitSpellEffect = new Trigger()
  static heroLevels = new Trigger()
  static mapStart = new Trigger()



  static define = (): void => {
    Trigger.mapStart.registerTimerEvent(0.5, false)
    Trigger.unitCreated.registerEnterRect(Rectangle.getPlayableMap())

    Trigger.unitAttacked.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED)
    Trigger.unitDamaged.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED)
    Trigger.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_ORDER)
    Trigger.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER)
    Trigger.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER)
    Trigger.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER)
    Trigger.unitSummoned.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON)
    Trigger.unitTrained.registerAnyUnitEvent(EVENT_PLAYER_UNIT_TRAIN_FINISH)
    Trigger.unitSpellEffect.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT)
    Trigger.heroLevels.registerAnyUnitEvent(EVENT_PLAYER_HERO_LEVEL)
    Trigger.unitDies.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH)
    Trigger.unitDying.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED)
    Trigger.unitDying.addCondition(() => { return Unit.fromEvent().life - GetEventDamage() <= 0 })


    // When a Unit dies clear it out
    Trigger.unitDies.add(() => {
      const eventUnit = Unit.fromKilled()
      const killingUnit = Unit.fromKilling()

      killingUnit.kills += 1

      if (!eventUnit.isHero) {
        const timer = new Timer()
        timer.start(30, false, () => {
          eventUnit.data.custom.clear()
          Unit.dataMap.delete(eventUnit)
        })

      }
    })
  }

  //// AUTO DEFINE
    static Level100: Trigger
    static fogofwar: Trigger
    static testing: Trigger
    static FUNC_Calculate_Level_Factor: Trigger
    static Armor_Hardening: Trigger
    static Slam: Trigger
    static Shade_Strength_Copy: Trigger
    static Mana_Overload_Research: Trigger
    static Frost_Attack_Research: Trigger
    static Feedback: Trigger
    static Shade_Strength: Trigger
    static Swift_Moves: Trigger
    static Swift_Attacks: Trigger
    static Attribute_Upgrade: Trigger
    static Shipyard_Left_End: Trigger
    static Brawler_No_Mana: Trigger
    static Brawler_Rage_GUI: Trigger
    static Drain_Start: Trigger
    static Drain_Loop: Trigger
    static Unleash_Rage_Start: Trigger
    static Unleash_Rage: Trigger
    static Paradox_INIT: Trigger
    static Paradox_CAST: Trigger
    static Paradox_LOOP: Trigger
    static Chrono_Atrophy_CAST: Trigger
    static Time_Travel_INIT: Trigger
    static Time_Travel_CAST: Trigger
    static Time_Travel_LOOP: Trigger
    static Level_Up_Team: Trigger
    static Revive_Hero: Trigger
    static Revive_Hero_Timer: Trigger
    static End_Of_Game_Left: Trigger
    static End_Of_Game_Right: Trigger
    static baseAndHeals: Trigger
    static units: Trigger

    static defineGlobals(): void {
        Trigger.Level100 = Trigger.fromHandle(gg_trg_Level100)
        Trigger.fogofwar = Trigger.fromHandle(gg_trg_fogofwar)
        Trigger.testing = Trigger.fromHandle(gg_trg_testing)
        Trigger.FUNC_Calculate_Level_Factor = Trigger.fromHandle(gg_trg_FUNC_Calculate_Level_Factor)
        Trigger.Armor_Hardening = Trigger.fromHandle(gg_trg_Armor_Hardening)
        Trigger.Slam = Trigger.fromHandle(gg_trg_Slam)
        Trigger.Shade_Strength_Copy = Trigger.fromHandle(gg_trg_Shade_Strength_Copy)
        Trigger.Mana_Overload_Research = Trigger.fromHandle(gg_trg_Mana_Overload_Research)
        Trigger.Frost_Attack_Research = Trigger.fromHandle(gg_trg_Frost_Attack_Research)
        Trigger.Feedback = Trigger.fromHandle(gg_trg_Feedback)
        Trigger.Shade_Strength = Trigger.fromHandle(gg_trg_Shade_Strength)
        Trigger.Swift_Moves = Trigger.fromHandle(gg_trg_Swift_Moves)
        Trigger.Swift_Attacks = Trigger.fromHandle(gg_trg_Swift_Attacks)
        Trigger.Attribute_Upgrade = Trigger.fromHandle(gg_trg_Attribute_Upgrade)
        Trigger.Shipyard_Left_End = Trigger.fromHandle(gg_trg_Shipyard_Left_End)
        Trigger.Brawler_No_Mana = Trigger.fromHandle(gg_trg_Brawler_No_Mana)
        Trigger.Brawler_Rage_GUI = Trigger.fromHandle(gg_trg_Brawler_Rage_GUI)
        Trigger.Drain_Start = Trigger.fromHandle(gg_trg_Drain_Start)
        Trigger.Drain_Loop = Trigger.fromHandle(gg_trg_Drain_Loop)
        Trigger.Unleash_Rage_Start = Trigger.fromHandle(gg_trg_Unleash_Rage_Start)
        Trigger.Unleash_Rage = Trigger.fromHandle(gg_trg_Unleash_Rage)
        Trigger.Paradox_INIT = Trigger.fromHandle(gg_trg_Paradox_INIT)
        Trigger.Paradox_CAST = Trigger.fromHandle(gg_trg_Paradox_CAST)
        Trigger.Paradox_LOOP = Trigger.fromHandle(gg_trg_Paradox_LOOP)
        Trigger.Chrono_Atrophy_CAST = Trigger.fromHandle(gg_trg_Chrono_Atrophy_CAST)
        Trigger.Time_Travel_INIT = Trigger.fromHandle(gg_trg_Time_Travel_INIT)
        Trigger.Time_Travel_CAST = Trigger.fromHandle(gg_trg_Time_Travel_CAST)
        Trigger.Time_Travel_LOOP = Trigger.fromHandle(gg_trg_Time_Travel_LOOP)
        Trigger.Level_Up_Team = Trigger.fromHandle(gg_trg_Level_Up_Team)
        Trigger.Revive_Hero = Trigger.fromHandle(gg_trg_Revive_Hero)
        Trigger.Revive_Hero_Timer = Trigger.fromHandle(gg_trg_Revive_Hero_Timer)
        Trigger.End_Of_Game_Left = Trigger.fromHandle(gg_trg_End_Of_Game_Left)
        Trigger.End_Of_Game_Right = Trigger.fromHandle(gg_trg_End_Of_Game_Right)
        Trigger.baseAndHeals = Trigger.fromHandle(gg_trg_baseAndHeals)
        Trigger.units = Trigger.fromHandle(gg_trg_units)
    }
    //// AUTO DEFINE
}
