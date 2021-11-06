/** @noSelfInFile **/

import { Players } from "../globals/index"
import { Handle } from "./handle";
import { MapPlayer } from "./player";

export class Force extends Handle<force> {

  constructor() {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(CreateForce());
    }
  }

  public addPlayer(whichPlayer: MapPlayer): void {
    ForceAddPlayer(this.handle, whichPlayer.handle);
  }

  public addPlayers(whichPlayers: number[]): void {
    for (let index = 0; index < whichPlayers.length; index++) {
      const element = whichPlayers[index];

      ForceAddPlayer(this.handle, Players[element].handle)
      
    }
  }

  public clear() : void {
    ForceClear(this.handle);
  }

  public destroy(): void {
    DestroyForce(this.handle);
  }

  public enumAllies(whichPlayer: MapPlayer, filter: boolexpr | (() => boolean)) {
    ForceEnumAllies(this.handle, whichPlayer.handle, typeof filter === "function" ? Filter(filter) : filter);
  }

  public enumEnemies(whichPlayer: MapPlayer, filter: boolexpr | (() => boolean)) {
    ForceEnumEnemies(this.handle, whichPlayer.handle, typeof filter === "function" ? Filter(filter) : filter);
  }

  public enumPlayers(filter: boolexpr | (() => boolean)) {
    ForceEnumPlayers(this.handle, typeof filter === "function" ? Filter(filter) : filter);
  }

  public enumPlayersCounted(filter: boolexpr | (() => boolean), countLimit: number) {
    ForceEnumPlayersCounted(this.handle, typeof filter === "function" ? Filter(filter) : filter, countLimit);
  }

  public for(callback: () => void) {
    ForForce(this.handle, callback);
  }

  /**
   * Returns all player handles belonging to this force
   */
  public getPlayers() {
    const players: MapPlayer[] = [];

    ForForce(this.handle, () => players.push(MapPlayer.fromEnum()));

    return players;
  }

  public hasPlayer(whichPlayer: MapPlayer) {
    return IsPlayerInForce(whichPlayer.handle, this.handle);
  }

  public removePlayer(whichPlayer: MapPlayer) {
    ForceRemovePlayer(this.handle, whichPlayer.handle);
  }

  public static fromHandle(handle: force): Force {
    return this.getObject(handle);
  }

}
