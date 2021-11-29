/** @noSelfInFile **/

import { Handle } from "./handle"

/**
 * Warcraft III's UI uses a proprietary format known as FDF (Frame Definition Files).
 * This class provides the ability to manipulate and create them dynamically through code.
 *
 * @example Create a simple button.
 * ```ts
 * // Create a "GLUEBUTTON" named "Facebutton", the clickable Button, for game UI
 * const buttonFrame = new Frame("FaceButton", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0), 0, 0, "GLUEBUTTON", "");
 *
 * // Create a BACKDROP named "FaceButtonIcon", the visible image, for buttonFrame.
 * const buttonIconFrame = new Frame("FaceButton", buttonFrame, 0, 0, "BACKDROP", "");
 *
 * // buttonIconFrame will mimic buttonFrame in size and position
 * buttonIconFrame.setAllPoints(buttonFrame);
 *
 * // Set a Texture
 * buttonIconFrame.setTexture("ReplaceableTextures\\CommandButtons\\BTNSelectHeroOn", 0, true);
 *
 * // Place the buttonFrame to the center of the screen
 * buttonFrame.setAbsPoint(FRAMEPOINT_CENTER, 0.4, 0.3);
 *
 * // Give that buttonFrame a size
 * buttonFrame.setSize(0.05, 0.05);
 * ```
 *
 * There are many aspects to modifying the UI and it can become complicated, so here are some
 * guides:
 *
 * https://www.hiveworkshop.com/threads/ui-frames-starting-guide.318603/
 * https://www.hiveworkshop.com/pastebin/913bd439799b3d917e5b522dd9ef458f20598/
 * https://www.hiveworkshop.com/tags/ui-fdf/
 */
export class Frame extends Handle<framehandle> {
  /**
   * Creates a Frame.
   * @param name The name of the frame to be accessed with `Frame.fromName`.
   * @param owner The parent frame.
   * @param priority
   * @param createContext The ID assigned to a frame to be accessed with `Frame.fromName`. This value does not have to be unique and can be overwritten.
   */
  constructor(name: string, owner: Frame, priority: number, createContext: number)
  /**
   * Creates a SimpleFrame.
   *
   * https://www.hiveworkshop.com/threads/ui-simpleframes.320385/
   * @param name The name of the frame to be accessed with `Frame.fromName`.
   * @param priority
   * @param owner The parent frame.
   * @param createContext The ID assigned to a frame to be accessed with `Frame.fromName`. This value does not have to be unique and can be overwritten.
   */
  constructor(name: string, owner: Frame, priority: number)
  /**
   * Create a Frame by type.
   * @param name The name of the frame to be accessed with `Frame.fromName`.
   * @param owner The parent frame.
   * @param priority
   * @param createContext The ID assigned to a frame to be accessed with `Frame.fromName`. This value does not have to be unique and can be overwritten.
   * @param typeName The type of Frame.
   * @param inherits The name of the Frame it inherits.
   */
  constructor(name: string, owner: Frame, priority: number, createContext: number, typeName: string, inherits: string)
  constructor(name: string, owner: Frame, priority: number, createContext?: number, typeName?: string, inherits?: string) {
    if (Handle.initFromHandle()) {
      super()
    } else {
      if (!createContext) {
        super(BlzCreateSimpleFrame(name, owner.handle, priority))
      } else {
        if (typeName && inherits) {
          super(BlzCreateFrameByType(typeName, name, owner.handle, inherits, createContext))
        } else {
          super(BlzCreateFrame(name, owner.handle, priority, createContext))
        }
      }
    }
  }

  public set alpha(alpha: number) {
    BlzFrameSetAlpha(this.handle, alpha)
  }

  public get alpha() {
    return BlzFrameGetAlpha(this.handle)
  }

  public get children() {
    const count = this.childrenCount
    const output: Frame[] = []
    for (let i = 0; i < count; i++) {
      output.push(this.getChild(i))
    }
    return output
  }

  public get childrenCount() {
    return BlzFrameGetChildrenCount(this.handle)
  }

  public set enabled(flag: boolean) {
    BlzFrameSetEnable(this.handle, flag)
  }

  public get enabled() {
    return BlzFrameGetEnable(this.handle)
  }

  public set height(height: number) {
    BlzFrameSetSize(this.handle, this.width, height)
  }

  public get height() {
    return BlzFrameGetHeight(this.handle)
  }

  public set parent(parent: Frame) {
    BlzFrameSetParent(this.handle, parent.handle)
  }

  public get parent() {
    return Frame.fromHandle(BlzFrameGetParent(this.handle))
  }

  public set text(text: string) {
    BlzFrameSetText(this.handle, text)
  }

  public get text() {
    return BlzFrameGetText(this.handle)
  }

  public set textSizeLimit(size: number) {
    BlzFrameSetTextSizeLimit(this.handle, size)
  }

  public get textSizeLimit() {
    return BlzFrameGetTextSizeLimit(this.handle)
  }

  public set value(value: number) {
    BlzFrameSetValue(this.handle, value)
  }

  public get value() {
    return BlzFrameGetValue(this.handle)
  }

  public set visible(flag: boolean) {
    BlzFrameSetVisible(this.handle, flag)
  }

  public get visible() {
    return BlzFrameIsVisible(this.handle)
  }

  public set width(width: number) {
    BlzFrameSetSize(this.handle, width, this.height)
  }

  public get width() {
    return BlzFrameGetWidth(this.handle)
  }

  public addText(text: string) {
    BlzFrameAddText(this.handle, text)
    return this
  }

  public cageMouse(enable: boolean) {
    BlzFrameCageMouse(this.handle, enable)
    return this
  }

  public clearPoints() {
    BlzFrameClearAllPoints(this.handle)
    return this
  }

  public click() {
    BlzFrameClick(this.handle)
    return this
  }

  public destroy() {
    BlzDestroyFrame(this.handle)
    return this
  }

  public getChild(index: number) {
    return Frame.fromHandle(BlzFrameGetChild(this.handle, index))
  }

  public setAbsPoint(point: framepointtype, x: number, y: number) {
    BlzFrameSetAbsPoint(this.handle, point, x, y)
    return this
  }

  public setAllPoints(relative: Frame) {
    BlzFrameSetAllPoints(this.handle, relative.handle)
    return this
  }

  public setAlpha(alpha: number) {
    BlzFrameSetAlpha(this.handle, alpha)
    return this
  }

  public setEnabled(flag: boolean) {
    BlzFrameSetEnable(this.handle, flag)
    return this
  }

  public setFocus(flag: boolean) {
    BlzFrameSetFocus(this.handle, flag)
    return this
  }

  public setFont(filename: string, height: number, flags: number) {
    BlzFrameSetFont(this.handle, filename, height, flags)
    return this
  }

  public setHeight(height: number) {
    BlzFrameSetSize(this.handle, this.width, height)
    return this
  }

  public setLevel(level: number) {
    BlzFrameSetLevel(this.handle, level)
    return this
  }

  public setMinMaxValue(minValue: number, maxValue: number) {
    BlzFrameSetMinMaxValue(this.handle, minValue, maxValue)
    return this
  }

  public setModel(modelFile: string, cameraIndex: number) {
    BlzFrameSetModel(this.handle, modelFile, cameraIndex)
    return this
  }

  public setParent(parent: Frame) {
    BlzFrameSetParent(this.handle, parent.handle)
    return this
  }

  public setPoint(point: framepointtype, relative: Frame, relativePoint: framepointtype, x: number, y: number) {
    BlzFrameSetPoint(this.handle, point, relative.handle, relativePoint, x, y)
    return this
  }

  public setScale(scale: number) {
    BlzFrameSetScale(this.handle, scale)
    return this
  }

  public setSize(width: number, height: number) {
    BlzFrameSetSize(this.handle, width, height)
    return this
  }

  public setSpriteAnimate(primaryProp: number, flags: number) {
    BlzFrameSetSpriteAnimate(this.handle, primaryProp, flags)
    return this
  }

  public setStepSize(stepSize: number) {
    BlzFrameSetStepSize(this.handle, stepSize)
    return this
  }

  public setText(text: string) {
    BlzFrameSetText(this.handle, text)
    return this
  }

  public setTextColor(color: number) {
    BlzFrameSetTextColor(this.handle, color)
    return this
  }

  public setTextSizeLimit(size: number) {
    BlzFrameSetTextSizeLimit(this.handle, size)
    return this
  }

  public setTexture(texFile: string, flag: number, blend: boolean) {
    BlzFrameSetTexture(this.handle, texFile, flag, blend)
    return this
  }

  public setTooltip(tooltip: Frame) {
    BlzFrameSetTooltip(this.handle, tooltip.handle)
    return this
  }

  public setValue(value: number) {
    BlzFrameSetValue(this.handle, value)
    return this
  }

  public setVertexColor(color: number) {
    BlzFrameSetVertexColor(this.handle, color)
    return this
  }

  public setVisible(flag: boolean) {
    BlzFrameSetVisible(this.handle, flag)
    return this
  }

  public setWidth(width: number) {
    BlzFrameSetSize(this.handle, width, this.height)
    return this
  }

  public static autoPosition(enable: boolean) {
    BlzEnableUIAutoPosition(enable)
  }

  public static fromEvent() {
    return this.fromHandle(BlzGetTriggerFrame())
  }

  public static fromHandle(handle: framehandle): Frame {
    return this.getObject(handle)
  }

  public static fromName(name: string, createContext: number) {
    return this.fromHandle(BlzGetFrameByName(name, createContext))
  }

  public static fromOrigin(frameType: originframetype, index: number) {
    return this.fromHandle(BlzGetOriginFrame(frameType, index))
  }

  public static getEventHandle() {
    return BlzGetTriggerFrameEvent()
  }

  public static getEventText() {
    return BlzGetTriggerFrameValue()
  }

  public static getEventValue() {
    return BlzGetTriggerFrameValue()
  }

  public static hideOrigin(enable: boolean) {
    BlzHideOriginFrames(enable)
  }

  public static loadTOC(filename: string) {
    return BlzLoadTOCFile(filename)
  }




  /** These are the default base frame types, to be used as typeName for createFrameByType(..) [BlzCreateFrameByType] 
      or inside of the frame definition files (fdf) */
  static Type = {
    /** The frame type BUTTON is used for normal clickable button */
    buttonframe: "BUTTON",
    /** The frame type GLUEBUTTON is used for clickable button, mouse hovering glows. */
    gluebutton: "GLUEBUTTON",
    /** The frame type TEXTBUTTON is used for clickable TextButtons with text */
    textbutton: "TEXTBUTTON",
    /** The frame type GLUETEXTBUTTON is used for clickable TextButtons, mouse hovering glows. */
    gluetextbutton: "GLUETEXTBUTTON",
    /** The frame type TEXT is used for visible text. */
    text: "TEXT",
    /** The frame type BACKDROP is used for backgrounds, borders or images. */
    backdrop: "BACKDROP",
    /** The frame type EDITBOX is used for text input by user. */
    editbox: "EDITBOX",
    /** The frame type SLIDER is used for user can select a value between an upper and a lower Value. */
    slider: "SLIDER",
    /** The frame type TEXTAREA is used for ui-Frames for big Texts also include scrollbars on default. */
    textarea: "TEXTAREA",
    /** The frame type CHECKBOX is used for checkable checkbox */
    checkbox: "CHECKBOX",
    /** The frame type GLUECHECKBOX is used for checkable checkbox, mouse hovering glows. */
    gluecheckbox: "GLUECHECKBOX",
    /** The frame type POPUPMENU is used for used for menus that is desinged for hovering over other frames */
    popupmenu: "POPUPMENU",
    /** The frame type MENU is used for general menu frame designed to be displayed behind popupmenus */
    menu: "MENU",
    /** The frame type SCROLLBAR is used for scrollbar that can be added to backgrops do change content (e.g. for textareas) */
    scrollbar: "SCROLLBAR",
    /** The frame type CONTROL is used for special frame that is designed for handling several control elements like buttons, checkboxes etc. */
    control: "CONTROL",
    /** The frame type SIMPLEFRAME is used for a less complex definition for frames, that does not allow different inherit types */
    simpleframe: "SIMPLEFRAME",
    /** The frame type DIALOG is used for nothing special, (origin SuspendDialogs will pause the game in singleplayer) */
    dialogframe: "DIALOG",
    /** The frame type HIGHLIGHT is used for frame template to define how buttons/texts are hightlingt on hovering/click/enter/focus of the mouse */
    highlight: "HIGHLIGHT"
  }
  /** These default frames can be obtained with getFrameByName(..) [BlzGetFrameByName]
    (the createContext (subframe-id) parameter is by default 0, some frames does contain subframes)*/
  static DefaultName = {
    allianceAcceptButton: "AllianceAcceptButton",
    allianceAcceptButtonText: "AllianceAcceptButtonText",
    allianceBackdrop: "AllianceBackdrop",
    allianceCancelButton: "AllianceCancelButton",
    allianceCancelButtonText: "AllianceCancelButtonText",
    allianceDialog: "AllianceDialog",
    allianceDialogScrollBar: "AllianceDialogScrollBar",
    /** The framehandle name allianceSlot has the subframes [0 to 23] */
    allianceSlot: "AllianceSlot",
    allianceTitle: "AllianceTitle",
    alliedVictoryCheckBox: "AlliedVictoryCheckBox",
    alliedVictoryLabel: "AlliedVictoryLabel",
    /** The framehandle name allyCheckBox has the subframes [0 to 23] */
    allyCheckBox: "AllyCheckBox",
    allyHeader: "AllyHeader",
    ambientCheckBox: "AmbientCheckBox",
    ambientLabel: "AmbientLabel",
    animQualityLabel: "AnimQualityLabel",
    animQualityValue: "AnimQualityValue",
    bottomButtonPanel: "BottomButtonPanel",
    buttonBackdropTemplate: "ButtonBackdropTemplate",
    buttonDisabledBackdropTemplate: "ButtonDisabledBackdropTemplate",
    buttonDisabledPushedBackdropTemplate: "ButtonDisabledPushedBackdropTemplate",
    buttonPushedBackdropTemplate: "ButtonPushedBackdropTemplate",
    cancelButtonText: "CancelButtonText",
    cinematicBottomBorder: "CinematicBottomBorder",
    cinematicDialogueText: "CinematicDialogueText",
    cinematicPanel: "CinematicPanel",
    cinematicPortrait: "CinematicPortrait",
    cinematicPortraitBackground: "CinematicPortraitBackground",
    cinematicPortraitCover: "CinematicPortraitCover",
    cinematicScenePanel: "CinematicScenePanel",
    cinematicSpeakerText: "CinematicSpeakerText",
    cinematicTopBorder: "CinematicTopBorder",
    /** The framehandle name colorBackdrop has the subframes [0 to 23] */
    colorBackdrop: "ColorBackdrop",
    /** The framehandle name colorBorder has the subframes [0 to 23] */
    colorBorder: "ColorBorder",
    confirmQuitCancelButton: "ConfirmQuitCancelButton",
    confirmQuitCancelButtonText: "ConfirmQuitCancelButtonText",
    confirmQuitMessageText: "ConfirmQuitMessageText",
    confirmQuitPanel: "ConfirmQuitPanel",
    confirmQuitQuitButton: "ConfirmQuitQuitButton",
    confirmQuitQuitButtonText: "ConfirmQuitQuitButtonText",
    confirmQuitTitleText: "ConfirmQuitTitleText",
    consoleUI: "ConsoleUI",
    customKeysLabel: "CustomKeysLabel",
    customKeysValue: "CustomKeysValue",
    decoratedMapListBox: "DecoratedMapListBox",
    deleteCancelButton: "DeleteCancelButton",
    deleteCancelButtonText: "DeleteCancelButtonText",
    deleteDeleteButton: "DeleteDeleteButton",
    deleteDeleteButtonText: "DeleteDeleteButtonText",
    deleteMessageText: "DeleteMessageText",
    deleteOnly: "DeleteOnly",
    deleteTitleText: "DeleteTitleText",
    difficultyLabel: "DifficultyLabel",
    difficultyValue: "DifficultyValue",
    endGameButton: "EndGameButton",
    endGameButtonText: "EndGameButtonText",
    endGamePanel: "EndGamePanel",
    endGameTitleText: "EndGameTitleText",
    enviroCheckBox: "EnviroCheckBox",
    enviroLabel: "EnviroLabel",
    escMenuBackdrop: "EscMenuBackdrop",
    escMenuDeleteContainer: "EscMenuDeleteContainer",
    escMenuMainPanel: "EscMenuMainPanel",
    escMenuOptionsPanel: "EscMenuOptionsPanel",
    escMenuOverwriteContainer: "EscMenuOverwriteContainer",
    escMenuSaveGamePanel: "EscMenuSaveGamePanel",
    escMenuSaveLoadContainer: "EscMenuSaveLoadContainer",
    escOptionsLightsMenu: "EscOptionsLightsMenu",
    escOptionsLightsPopupMenuArrow: "EscOptionsLightsPopupMenuArrow",
    escOptionsLightsPopupMenuBackdrop: "EscOptionsLightsPopupMenuBackdrop",
    escOptionsLightsPopupMenuDisabledBackdrop: "EscOptionsLightsPopupMenuDisabledBackdrop",
    escOptionsLightsPopupMenuMenu: "EscOptionsLightsPopupMenuMenu",
    escOptionsLightsPopupMenuTitle: "EscOptionsLightsPopupMenuTitle",
    escOptionsOcclusionMenu: "EscOptionsOcclusionMenu",
    escOptionsOcclusionPopupMenuArrow: "EscOptionsOcclusionPopupMenuArrow",
    escOptionsOcclusionPopupMenuBackdrop: "EscOptionsOcclusionPopupMenuBackdrop",
    escOptionsOcclusionPopupMenuDisabledBackdrop: "EscOptionsOcclusionPopupMenuDisabledBackdrop",
    escOptionsOcclusionPopupMenuMenu: "EscOptionsOcclusionPopupMenuMenu",
    escOptionsOcclusionPopupMenuTitle: "EscOptionsOcclusionPopupMenuTitle",
    escOptionsParticlesMenu: "EscOptionsParticlesMenu",
    escOptionsParticlesPopupMenuArrow: "EscOptionsParticlesPopupMenuArrow",
    escOptionsParticlesPopupMenuBackdrop: "EscOptionsParticlesPopupMenuBackdrop",
    escOptionsParticlesPopupMenuDisabledBackdrop: "EscOptionsParticlesPopupMenuDisabledBackdrop",
    escOptionsParticlesPopupMenuMenu: "EscOptionsParticlesPopupMenuMenu",
    escOptionsParticlesPopupMenuTitle: "EscOptionsParticlesPopupMenuTitle",
    escOptionsResolutionMenu: "EscOptionsResolutionMenu",
    escOptionsResolutionPopupMenuArrow: "EscOptionsResolutionPopupMenuArrow",
    escOptionsResolutionPopupMenuBackdrop: "EscOptionsResolutionPopupMenuBackdrop",
    escOptionsResolutionPopupMenuDisabledBackdrop: "EscOptionsResolutionPopupMenuDisabledBackdrop",
    escOptionsResolutionPopupMenuMenu: "EscOptionsResolutionPopupMenuMenu",
    escOptionsResolutionPopupMenuTitle: "EscOptionsResolutionPopupMenuTitle",
    escOptionsShadowsMenu: "EscOptionsShadowsMenu",
    escOptionsShadowsPopupMenuArrow: "EscOptionsShadowsPopupMenuArrow",
    escOptionsShadowsPopupMenuBackdrop: "EscOptionsShadowsPopupMenuBackdrop",
    escOptionsShadowsPopupMenuDisabledBackdrop: "EscOptionsShadowsPopupMenuDisabledBackdrop",
    escOptionsShadowsPopupMenuMenu: "EscOptionsShadowsPopupMenuMenu",
    escOptionsShadowsPopupMenuTitle: "EscOptionsShadowsPopupMenuTitle",
    escOptionsWindowModeMenu: "EscOptionsWindowModeMenu",
    escOptionsWindowModePopupMenuArrow: "EscOptionsWindowModePopupMenuArrow",
    escOptionsWindowModePopupMenuBackdrop: "EscOptionsWindowModePopupMenuBackdrop",
    escOptionsWindowModePopupMenuDisabledBackdrop: "EscOptionsWindowModePopupMenuDisabledBackdrop",
    escOptionsWindowModePopupMenuMenu: "EscOptionsWindowModePopupMenuMenu",
    escOptionsWindowModePopupMenuTitle: "EscOptionsWindowModePopupMenuTitle",
    exitButton: "ExitButton",
    exitButtonText: "ExitButtonText",
    extraHighLatencyLabel: "ExtraHighLatencyLabel",
    extraHighLatencyRadio: "ExtraHighLatencyRadio",
    fileListFrame: "FileListFrame",
    formationToggleCheckBox: "FormationToggleCheckBox",
    formationToggleLabel: "FormationToggleLabel",
    gameplayButton: "GameplayButton",
    gameplayButtonText: "GameplayButtonText",
    gameplayPanel: "GameplayPanel",
    gameplayTitleText: "GameplayTitleText",
    gameSpeedLabel: "GameSpeedLabel",
    gameSpeedSlider: "GameSpeedSlider",
    gameSpeedValue: "GameSpeedValue",
    gammaBrightLabel: "GammaBrightLabel",
    gammaDarkLabel: "GammaDarkLabel",
    gammaLabel: "GammaLabel",
    gammaSlider: "GammaSlider",
    /** The framehandle name goldBackdrop has the subframes [0 to 23] */
    goldBackdrop: "GoldBackdrop",
    goldHeader: "GoldHeader",
    /** The framehandle name goldText has the subframes [0 to 23] */
    goldText: "GoldText",
    healthBarsCheckBox: "HealthBarsCheckBox",
    healthBarsLabel: "HealthBarsLabel",
    helpButton: "HelpButton",
    helpButtonText: "HelpButtonText",
    helpOKButton: "HelpOKButton",
    helpOKButtonText: "HelpOKButtonText",
    helpPanel: "HelpPanel",
    helpTextArea: "HelpTextArea",
    helpTitleText: "HelpTitleText",
    highLatencyLabel: "HighLatencyLabel",
    highLatencyRadio: "HighLatencyRadio",
    /** The framehandle name infoPanelIconAllyFoodIcon has the subframe [7] */
    infoPanelIconAllyFoodIcon: "InfoPanelIconAllyFoodIcon",
    /** The framehandle name infoPanelIconAllyFoodValue has the subframe [7] */
    infoPanelIconAllyFoodValue: "InfoPanelIconAllyFoodValue",
    /** The framehandle name infoPanelIconAllyGoldIcon has the subframe [7] */
    infoPanelIconAllyGoldIcon: "InfoPanelIconAllyGoldIcon",
    /** The framehandle name infoPanelIconAllyGoldValue has the subframe [7] */
    infoPanelIconAllyGoldValue: "InfoPanelIconAllyGoldValue",
    /** The framehandle name infoPanelIconAllyTitle has the subframe [7] */
    infoPanelIconAllyTitle: "InfoPanelIconAllyTitle",
    /** The framehandle name infoPanelIconAllyUpkeep has the subframe [7] */
    infoPanelIconAllyUpkeep: "InfoPanelIconAllyUpkeep",
    /** The framehandle name infoPanelIconAllyWoodIcon has the subframe [7] */
    infoPanelIconAllyWoodIcon: "InfoPanelIconAllyWoodIcon",
    /** The framehandle name infoPanelIconAllyWoodValue has the subframe [7] */
    infoPanelIconAllyWoodValue: "InfoPanelIconAllyWoodValue",
    /** The framehandle name infoPanelIconBackdrop has the subframes [0 to 5] */
    infoPanelIconBackdrop: "InfoPanelIconBackdrop",
    /** The framehandle name infoPanelIconHeroAgilityLabel has the subframe [6] */
    infoPanelIconHeroAgilityLabel: "InfoPanelIconHeroAgilityLabel",
    /** The framehandle name infoPanelIconHeroAgilityValue has the subframe [6] */
    infoPanelIconHeroAgilityValue: "InfoPanelIconHeroAgilityValue",
    /** The framehandle name infoPanelIconHeroIcon has the subframe [6] */
    infoPanelIconHeroIcon: "InfoPanelIconHeroIcon",
    /** The framehandle name infoPanelIconHeroIntellectLabel has the subframe [6] */
    infoPanelIconHeroIntellectLabel: "InfoPanelIconHeroIntellectLabel",
    /** The framehandle name infoPanelIconHeroIntellectValue has the subframe [6] */
    infoPanelIconHeroIntellectValue: "InfoPanelIconHeroIntellectValue",
    /** The framehandle name infoPanelIconHeroStrengthLabel has the subframe [6] */
    infoPanelIconHeroStrengthLabel: "InfoPanelIconHeroStrengthLabel",
    /** The framehandle name infoPanelIconHeroStrengthValue has the subframe [6] */
    infoPanelIconHeroStrengthValue: "InfoPanelIconHeroStrengthValue",
    /** The framehandle name infoPanelIconLabel has the subframes [0 to 5] */
    infoPanelIconLabel: "InfoPanelIconLabel",
    /** The framehandle name infoPanelIconLevel has the subframes [0 to 5] */
    infoPanelIconLevel: "InfoPanelIconLevel",
    /** The framehandle name infoPanelIconValue has the subframes [0 to 5] */
    infoPanelIconValue: "InfoPanelIconValue",
    insideConfirmQuitPanel: "InsideConfirmQuitPanel",
    insideEndGamePanel: "InsideEndGamePanel",
    insideHelpPanel: "InsideHelpPanel",
    insideMainPanel: "InsideMainPanel",
    insideTipsPanel: "InsideTipsPanel",
    keyScrollFastLabel: "KeyScrollFastLabel",
    keyScrollLabel: "KeyScrollLabel",
    keyScrollSlider: "KeyScrollSlider",
    keyScrollSlowLabel: "KeyScrollSlowLabel",
    latencyInfo1: "LatencyInfo1",
    latencyInfo2: "LatencyInfo2",
    leaderboardFrame: "Leaderboard",
    leaderboardBackdrop: "LeaderboardBackdrop",
    leaderboardListContainer: "LeaderboardListContainer",
    leaderboardTitle: "LeaderboardTitle",
    lightsLabel: "LightsLabel",
    loadGameButton: "LoadGameButton",
    loadGameButtonText: "LoadGameButtonText",
    loadGameCancelButton: "LoadGameCancelButton",
    loadGameCancelButtonText: "LoadGameCancelButtonText",
    loadGameLoadButton: "LoadGameLoadButton",
    loadGameLoadButtonText: "LoadGameLoadButtonText",
    loadGameTitleText: "LoadGameTitleText",
    loadOnly: "LoadOnly",
    logArea: "LogArea",
    logAreaBackdrop: "LogAreaBackdrop",
    logAreaScrollBar: "LogAreaScrollBar",
    logBackdrop: "LogBackdrop",
    logDialog: "LogDialog",
    logOkButton: "LogOkButton",
    logOkButtonText: "LogOkButtonText",
    logTitle: "LogTitle",
    lowLatencyLabel: "LowLatencyLabel",
    lowLatencyRadio: "LowLatencyRadio",
    /** The framehandle name lumberBackdrop has the subframes [0 to 23] */
    lumberBackdrop: "LumberBackdrop",
    lumberHeader: "LumberHeader",
    /** The framehandle name lumberText has the subframes [0 to 23] */
    lumberText: "LumberText",
    mainPanel: "MainPanel",
    mapListBoxBackdrop: "MapListBoxBackdrop",
    mapListScrollBar: "MapListScrollBar",
    modelDetailLabel: "ModelDetailLabel",
    modelDetailValue: "ModelDetailValue",
    mouseScrollDisable: "MouseScrollDisable",
    mouseScrollDisableLabel: "MouseScrollDisableLabel",
    mouseScrollFastLabel: "MouseScrollFastLabel",
    mouseScrollLabel: "MouseScrollLabel",
    mouseScrollSlider: "MouseScrollSlider",
    mouseScrollSlowLabel: "MouseScrollSlowLabel",
    movementCheckBox: "MovementCheckBox",
    movementLabel: "MovementLabel",
    multiboardFrame: "Multiboard",
    multiboardBackdrop: "MultiboardBackdrop",
    multiboardListContainer: "MultiboardListContainer",
    multiboardMinimizeButton: "MultiboardMinimizeButton",
    multiboardTitle: "MultiboardTitle",
    multiboardTitleBackdrop: "MultiboardTitleBackdrop",
    musicCheckBox: "MusicCheckBox",
    musicVolumeHighLabel: "MusicVolumeHighLabel",
    musicVolumeLabel: "MusicVolumeLabel",
    musicVolumeLowLabel: "MusicVolumeLowLabel",
    musicVolumeSlider: "MusicVolumeSlider",
    networkButton: "NetworkButton",
    networkButtonText: "NetworkButtonText",
    networkLabel: "NetworkLabel",
    networkPanel: "NetworkPanel",
    networkTitleText: "NetworkTitleText",
    observerCameraCheckBox: "ObserverCameraCheckBox",
    observerCameraString: "ObserverCameraString",
    observerFogCheckBox: "ObserverFogCheckBox",
    observerFogString: "ObserverFogString",
    observerVisionMenu: "ObserverVisionMenu",
    observerVisionMenuArrow: "ObserverVisionMenuArrow",
    observerVisionMenuBackdrop: "ObserverVisionMenuBackdrop",
    observerVisionMenuDisabledBackdrop: "ObserverVisionMenuDisabledBackdrop",
    observerVisionMenuTitle: "ObserverVisionMenuTitle",
    observerVisionPopupMenu: "ObserverVisionPopupMenu",
    observerVisionPopupMenuMenuBackdropTemplate: "ObserverVisionPopupMenuMenuBackdropTemplate",
    occlusionLabel: "OcclusionLabel",
    oKButtonText: "OKButtonText",
    optionsButton: "OptionsButton",
    optionsButtonText: "OptionsButtonText",
    optionsCancelButton: "OptionsCancelButton",
    optionsOKButton: "OptionsOKButton",
    optionsPanel: "OptionsPanel",
    optionsPreviousButton: "OptionsPreviousButton",
    optionsPreviousButtonText: "OptionsPreviousButtonText",
    optionsTitleText: "OptionsTitleText",
    overwriteCancelButton: "OverwriteCancelButton",
    overwriteCancelButtonText: "OverwriteCancelButtonText",
    overwriteMessageText: "OverwriteMessageText",
    overwriteOnly: "OverwriteOnly",
    overwriteOverwriteButton: "OverwriteOverwriteButton",
    overwriteOverwriteButtonText: "OverwriteOverwriteButtonText",
    overwriteTitleText: "OverwriteTitleText",
    particlesLabel: "ParticlesLabel",
    pauseButton: "PauseButton",
    pauseButtonText: "PauseButtonText",
    /** The framehandle name playerNameLabel has the subframes [0 to 23] */
    playerNameLabel: "PlayerNameLabel",
    playersHeader: "PlayersHeader",
    positionalCheckBox: "PositionalCheckBox",
    positionalLabel: "PositionalLabel",
    previousButton: "PreviousButton",
    previousButtonText: "PreviousButtonText",
    providerLabel: "ProviderLabel",
    providerValue: "ProviderValue",
    quitButton: "QuitButton",
    quitButtonText: "QuitButtonText",
    resolutionLabel: "ResolutionLabel",
    resourceBarFrame: "ResourceBarFrame",
    resourceBarGoldText: "ResourceBarGoldText",
    resourceBarLumberText: "ResourceBarLumberText",
    resourceBarSupplyText: "ResourceBarSupplyText",
    resourceBarUpkeepText: "ResourceBarUpkeepText",
    resourceTradingTitle: "ResourceTradingTitle",
    restartButton: "RestartButton",
    restartButtonText: "RestartButtonText",
    returnButton: "ReturnButton",
    returnButtonText: "ReturnButtonText",
    saveAndLoad: "SaveAndLoad",
    saveGameButton: "SaveGameButton",
    saveGameButtonText: "SaveGameButtonText",
    saveGameCancelButton: "SaveGameCancelButton",
    saveGameCancelButtonText: "SaveGameCancelButtonText",
    saveGameDeleteButton: "SaveGameDeleteButton",
    saveGameDeleteButtonText: "SaveGameDeleteButtonText",
    saveGameFileEditBox: "SaveGameFileEditBox",
    saveGameFileEditBoxText: "SaveGameFileEditBoxText",
    saveGameSaveButton: "SaveGameSaveButton",
    saveGameSaveButtonText: "SaveGameSaveButtonText",
    saveGameTitleText: "SaveGameTitleText",
    saveOnly: "SaveOnly",
    shadowsLabel: "ShadowsLabel",
    /** The framehandle name simpleBuildingActionLabel has the subframes [0, 1] */
    simpleBuildingActionLabel: "SimpleBuildingActionLabel",
    /** The framehandle name simpleBuildingDescriptionValue has the subframe [1] */
    simpleBuildingDescriptionValue: "SimpleBuildingDescriptionValue",
    /** The framehandle name simpleBuildingNameValue has the subframe [1] */
    simpleBuildingNameValue: "SimpleBuildingNameValue",
    /** The framehandle name simpleBuildQueueBackdrop has the subframe [1] */
    simpleBuildQueueBackdrop: "SimpleBuildQueueBackdrop",
    /** The framehandle name simpleBuildTimeIndicator has the subframes [0, 1] */
    simpleBuildTimeIndicator: "SimpleBuildTimeIndicator",
    simpleClassValue: "SimpleClassValue",
    simpleDestructableNameValue: "SimpleDestructableNameValue",
    /** The framehandle name simpleHeroLevelBar has the subframe [4] */
    simpleHeroLevelBar: "SimpleHeroLevelBar",
    /** The framehandle name simpleHoldDescriptionValue has the subframe [2] */
    simpleHoldDescriptionValue: "SimpleHoldDescriptionValue",
    /** The framehandle name simpleHoldNameValue has the subframe [2] */
    simpleHoldNameValue: "SimpleHoldNameValue",
    /** The framehandle name simpleInfoPanelBuildingDetail has the subframe [1] */
    simpleInfoPanelBuildingDetail: "SimpleInfoPanelBuildingDetail",
    /** The framehandle name simpleInfoPanelCargoDetail has the subframe [2] */
    simpleInfoPanelCargoDetail: "SimpleInfoPanelCargoDetail",
    /** The framehandle name simpleInfoPanelDestructableDetail has the subframe [4] */
    simpleInfoPanelDestructableDetail: "SimpleInfoPanelDestructableDetail",
    /** The framehandle name simpleInfoPanelIconArmor has the subframe [7] */
    simpleInfoPanelIconAlly: "SimpleInfoPanelIconAlly",
    /** The framehandle name simpleInfoPanelIconArmor has the subframe [2] */
    simpleInfoPanelIconArmor: "SimpleInfoPanelIconArmor",
    /** The framehandle name SimpleInfoPanelIconDamage has the subframe [0, 1] */
    simpleInfoPanelIconDamage: "SimpleInfoPanelIconDamage",
    /** The framehandle name simpleInfoPanelIconFood has the subframe [4] */
    simpleInfoPanelIconFood: "SimpleInfoPanelIconFood",
    /** The framehandle name simpleInfoPanelIconGold has the subframe [5] */
    simpleInfoPanelIconGold: "SimpleInfoPanelIconGold",
    /** The framehandle name simpleInfoPanelIconHero has the subframe [6] */
    simpleInfoPanelIconHero: "SimpleInfoPanelIconHero",
    /** The framehandle name simpleInfoPanelIconHeroText has the subframe [6] */
    simpleInfoPanelIconHeroText: "SimpleInfoPanelIconHeroText",
    /** The framehandle name simpleInfoPanelIconRank has the subframe [3] */
    simpleInfoPanelIconRank: "SimpleInfoPanelIconRank",
    /** The framehandle name simpleInfoPanelItemDetail has the subframe [3] */
    simpleInfoPanelItemDetail: "SimpleInfoPanelItemDetail",
    simpleInfoPanelUnitDetail: "SimpleInfoPanelUnitDetail",
    /** The framehandle name simpleItemDescriptionValue has the subframe [3] */
    simpleItemDescriptionValue: "SimpleItemDescriptionValue",
    /** The framehandle name simpleItemNameValue has the subframe [3] */
    simpleItemNameValue: "SimpleItemNameValue",
    simpleNameValue: "SimpleNameValue",
    simpleObserverPanel: "SimpleObserverPanel",
    simpleProgressIndicator: "SimpleProgressIndicator",
    simpleUnitStatsPanel: "SimpleUnitStatsPanel",
    soundButton: "SoundButton",
    soundButtonText: "SoundButtonText",
    soundCheckBox: "SoundCheckBox",
    soundPanel: "SoundPanel",
    soundTitleText: "SoundTitleText",
    soundVolumeHighLabel: "SoundVolumeHighLabel",
    soundVolumeLabel: "SoundVolumeLabel",
    soundVolumeLowLabel: "SoundVolumeLowLabel",
    soundVolumeSlider: "SoundVolumeSlider",
    subgroupCheckBox: "SubgroupCheckBox",
    subgroupLabel: "SubgroupLabel",
    subtitlesCheckBox: "SubtitlesCheckBox",
    subtitlesLabel: "SubtitlesLabel",
    textureQualityLabel: "TextureQualityLabel",
    textureQualityValue: "TextureQualityValue",
    tipsBackButton: "TipsBackButton",
    tipsBackButtonText: "TipsBackButtonText",
    tipsButton: "TipsButton",
    tipsButtonText: "TipsButtonText",
    tipsNextButton: "TipsNextButton",
    tipsNextButtonText: "TipsNextButtonText",
    tipsOKButton: "TipsOKButton",
    tipsOKButtonText: "TipsOKButtonText",
    tipsPanel: "TipsPanel",
    tipsTextArea: "TipsTextArea",
    tipsTitleText: "TipsTitleText",
    tooltipsCheckBox: "TooltipsCheckBox",
    tooltipsLabel: "TooltipsLabel",
    unitCheckBox: "UnitCheckBox",
    unitLabel: "UnitLabel",
    /** The framehandle name unitsCheckBox has the subframes [o t 23] */
    unitsCheckBox: "UnitsCheckBox",
    unitsHeader: "UnitsHeader",
    upperButtonBarAlliesButton: "UpperButtonBarAlliesButton",
    upperButtonBarChatButton: "UpperButtonBarChatButton",
    upperButtonBarFrame: "UpperButtonBarFrame",
    upperButtonBarMenuButton: "UpperButtonBarMenuButton",
    upperButtonBarQuestsButton: "UpperButtonBarQuestsButton",
    videoButton: "VideoButton",
    videoButtonText: "VideoButtonText",
    videoPanel: "VideoPanel",
    videoTitleText: "VideoTitleText",
    /** The framehandle name VisionCheckBox has the subframes [o t 23] */
    visionCheckBox: "VisionCheckBox",
    visionHeader: "VisionHeader",
    vSyncCheckBox: "VSyncCheckBox",
    vSyncLabel: "VSyncLabel",
    windowModeLabel: "WindowModeLabel",
    wouldTheRealOptionsTitleTextPleaseStandUp: "WouldTheRealOptionsTitleTextPleaseStandUp"
  }

  /** These default frames templates can be created with createFrame(..) [BlzCreateFrame] */
  static FrameName = {
    adBanner: "AdBanner",
    advancedOptionsDisplay: "AdvancedOptionsDisplay",
    advancedOptionsPane: "AdvancedOptionsPane",
    advancedPopupMenuTemplate: "AdvancedPopupMenuTemplate",
    allianceDialog: "AllianceDialog",
    allianceSlot: "AllianceSlot",
    battleNetChatActionMenu: "BattleNetChatActionMenu",
    battleNetChatPanel: "BattleNetChatPanel",
    battleNetChatroom: "BattleNetChatroom",
    battleNetClanInvitation: "BattleNetClanInvitation",
    battleNetClanInviteDialog: "BattleNetClanInviteDialog",
    battleNetClanMateListBox: "BattleNetClanMateListBox",
    battleNetClanPane: "BattleNetClanPane",
    battleNetConnectDialog: "BattleNetConnectDialog",
    battleNetCustomCreatePanel: "BattleNetCustomCreatePanel",
    battleNetCustomFilterDialog: "BattleNetCustomFilterDialog",
    battleNetCustomJoinPanel: "BattleNetCustomJoinPanel",
    battleNetCustomLoadPanel: "BattleNetCustomLoadPanel",
    battleNetFriendsListBox: "BattleNetFriendsListBox",
    battleNetFriendsPane: "BattleNetFriendsPane",
    battleNetHelpDialog: "BattleNetHelpDialog",
    battleNetIconSelectBox: "BattleNetIconSelectBox",
    battleNetIconSelectDialog: "BattleNetIconSelectDialog",
    battleNetMainFrame: "BattleNetMainFrame",
    battleNetMatchmakerPanel: "BattleNetMatchmakerPanel",
    battleNetMatchmakerPendingInviteDialog: "BattleNetMatchmakerPendingInviteDialog",
    battleNetMatchmakerTeamInviteDialog: "BattleNetMatchmakerTeamInviteDialog",
    battleNetNewsBox: "BattleNetNewsBox",
    battleNetPatchDialog: "BattleNetPatchDialog",
    battleNetProfileListBox: "BattleNetProfileListBox",
    battleNetProfileListItem: "BattleNetProfileListItem",
    battleNetProfilePanel: "BattleNetProfilePanel",
    battleNetScheduledGame: "BattleNetScheduledGame",
    battleNetStandardPanel: "BattleNetStandardPanel",
    battleNetStatusBox: "BattleNetStatusBox",
    battleNetTeamInvitation: "BattleNetTeamInvitation",
    battleNetTeamInviteDialog: "BattleNetTeamInviteDialog",
    battleNetTeamPanel: "BattleNetTeamPanel",
    battleNetUserListBox: "BattleNetUserListBox",
    bNetPopupMenuBackdropTemplate: "BNetPopupMenuBackdropTemplate",
    bNetPopupMenuTemplate: "BNetPopupMenuTemplate",
    browserButton: "BrowserButton",
    browserFrame: "BrowserFrame",
    campaignListBox: "CampaignListBox",
    campaignMenu: "CampaignMenu",
    chatDialog: "ChatDialog",
    checkListBox: "CheckListBox",
    cinematicPanel: "CinematicPanel",
    clanButtonBackdropTemplate: "ClanButtonBackdropTemplate",
    clanButtonDisabledBackdropTemplate: "ClanButtonDisabledBackdropTemplate",
    clanButtonDisabledPushedBackdropTemplate: "ClanButtonDisabledPushedBackdropTemplate",
    clanButtonFocusHighlightBackdropTemplate: "ClanButtonFocusHighlightBackdropTemplate",
    clanButtonMouseOverHighlightBackdropTemplate: "ClanButtonMouseOverHighlightBackdropTemplate",
    clanButtonPushedBackdropTemplate: "ClanButtonPushedBackdropTemplate",
    clanButtonTemplate: "ClanButtonTemplate",
    customCampaignMenu: "CustomCampaignMenu",
    debugButton: "DebugButton",
    decoratedMapListBox: "DecoratedMapListBox",
    dialogWar3: "DialogWar3",
    escMenuBackdrop: "EscMenuBackdrop",
    escMenuMainPanel: "EscMenuMainPanel",
    escMenuMainPanelDialogTextTemplate: "EscMenuMainPanelDialogTextTemplate",
    escMenuOptionsConfirmDialog: "EscMenuOptionsConfirmDialog",
    escMenuOptionsPanel: "EscMenuOptionsPanel",
    escMenuSaveDialogTextTemplate: "EscMenuSaveDialogTextTemplate",
    escMenuSaveGamePanel: "EscMenuSaveGamePanel",
    filterPopupMenuTemplate: "FilterPopupMenuTemplate",
    gameChatroom: "GameChatroom",
    gameResultDialog: "GameResultDialog",
    gameSaveSplashDialog: "GameSaveSplashDialog",
    iconButtonTemplate: "IconButtonTemplate",
    iconicButtonTemplate: "IconicButtonTemplate",
    ladderButtonBackdropTemplate: "LadderButtonBackdropTemplate",
    ladderButtonDisabledBackdropTemplate: "LadderButtonDisabledBackdropTemplate",
    ladderButtonDisabledPushedBackdropTemplate: "LadderButtonDisabledPushedBackdropTemplate",
    ladderButtonFocusHighlightBackdropTemplate: "LadderButtonFocusHighlightBackdropTemplate",
    ladderButtonMouseOverHighlightBackdropTemplate: "LadderButtonMouseOverHighlightBackdropTemplate",
    ladderButtonPushedBackdropTemplate: "LadderButtonPushedBackdropTemplate",
    ladderButtonTemplate: "LadderButtonTemplate",
    ladderNameTextTemplate: "LadderNameTextTemplate",
    leaderboardFrame: "Leaderboard",
    listBoxWar3: "ListBoxWar3",
    loading: "Loading",
    loadingPlayerSlot: "LoadingPlayerSlot",
    loadSavedGameScreen: "LoadSavedGameScreen",
    localMultiplayerCreate: "LocalMultiplayerCreate",
    localMultiplayerJoin: "LocalMultiplayerJoin",
    localMultiplayerLoad: "LocalMultiplayerLoad",
    logDialog: "LogDialog",
    mainMenuFrame: "MainMenuFrame",
    mapInfoPane: "MapInfoPane",
    mapListBox: "MapListBox",
    mapPreferenceBox: "MapPreferenceBox",
    mapPreferenceBoxBackdrop: "MapPreferenceBoxBackdrop",
    mMPlayerSlot: "MMPlayerSlot",
    movieScreen: "MovieScreen",
    multiboardFrame: "Multiboard",
    optionsConfirmDialog: "OptionsConfirmDialog",
    optionsMenu: "OptionsMenu",
    optionsPopupMenuBackdropTemplate: "OptionsPopupMenuBackdropTemplate",
    optionsPopupMenuTemplate: "OptionsPopupMenuTemplate",
    playerSlot: "PlayerSlot",
    playerSlotPopupMenu: "PlayerSlotPopupMenu",
    questButtonBackdropTemplate: "QuestButtonBackdropTemplate",
    questButtonBaseTemplate: "QuestButtonBaseTemplate",
    questButtonDisabledBackdropTemplate: "QuestButtonDisabledBackdropTemplate",
    questButtonDisabledPushedBackdropTemplate: "QuestButtonDisabledPushedBackdropTemplate",
    questButtonMouseOverHighlightTemplate: "QuestButtonMouseOverHighlightTemplate",
    questButtonPushedBackdropTemplate: "QuestButtonPushedBackdropTemplate",
    questButtonTemplate: "QuestButtonTemplate",
    questCheckBox: "QuestCheckBox",
    questCheckBox2: "QuestCheckBox2",
    questCheckBox3: "QuestCheckBox3",
    questConditionListScrollBar: "QuestConditionListScrollBar",
    questDialog: "QuestDialog",
    questItemListItem: "QuestItemListItem",
    questItemListScrollBar: "QuestItemListScrollBar",
    questListItem: "QuestListItem",
    questMainListScrollBar: "QuestMainListScrollBar",
    quickReplayConfirmDialog: "QuickReplayConfirmDialog",
    quickReplayDialog: "QuickReplayDialog",
    replayButton: "ReplayButton",
    saveReplayPanel: "SaveReplayPanel",
    scoreScreen4ColumnButtonTemplate: "ScoreScreen4ColumnButtonTemplate",
    scoreScreen5ColumnButtonTemplate: "ScoreScreen5ColumnButtonTemplate",
    scoreScreenBottomButtonTemplate: "ScoreScreenBottomButtonTemplate",
    scoreScreenBottomCheckButtonTemplate: "ScoreScreenBottomCheckButtonTemplate",
    scoreScreenButtonBackdropTemplate: "ScoreScreenButtonBackdropTemplate",
    scoreScreenColumnHeaderTemplate: "ScoreScreenColumnHeaderTemplate",
    scoreScreenFrame: "ScoreScreenFrame",
    scoreScreenTabButtonTemplate: "ScoreScreenTabButtonTemplate",
    scoreScreenTabTextSelectedTemplate: "ScoreScreenTabTextSelectedTemplate",
    scoreScreenTabTextTemplate: "ScoreScreenTabTextTemplate",
    scriptDialog: "ScriptDialog",
    scriptDialogButton: "ScriptDialogButton",
    singlePlayerMenu: "SinglePlayerMenu",
    skirmish: "Skirmish",
    skirmishPopupMenuBackdropTemplate: "SkirmishPopupMenuBackdropTemplate",
    skirmishPopupMenuTemplate: "SkirmishPopupMenuTemplate",
    suspendDialog: "SuspendDialog",
    suspendPlayerSlot: "SuspendPlayerSlot",
    teamColorMenu: "TeamColorMenu",
    teamLabelTextTemplate: "TeamLabelTextTemplate",
    teamLadderRankValueTextTemplate: "TeamLadderRankValueTextTemplate",
    teamMemberPopupMenu: "TeamMemberPopupMenu",
    teamPopupMenuBackdropTemplate: "TeamPopupMenuBackdropTemplate",
    teamPopupMenuTemplate: "TeamPopupMenuTemplate",
    teamSetup: "TeamSetup",
    teamValueTextTemplate: "TeamValueTextTemplate",
    timerDialog: "TimerDialog",
    unresponsiveDialog: "UnresponsiveDialog",
    userDataMigrationDialog: "UserDataMigrationDialog",
    viewReplayScreen: "ViewReplayScreen"
  }

}
