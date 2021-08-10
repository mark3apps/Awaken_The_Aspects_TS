import { Force, MapPlayer, Unit } from "lib/w3ts/index"



export class Army {
    public force!: Force;
    public capital!: Unit;
    public _enemy: Army;

    constructor() {
        // do nothing
    }

    public get enemy(): Army {
        return this._enemy;
    }

    public set enemy(army: Army) {
        this._enemy = army;
    }

    public isCaptialAlive(): boolean {
        return this.capital.isAlive();
    }

    public get enemyForce(): Force {
        return this._enemy.force;
    }

    public get randomPlayer(): MapPlayer {
        return this.force.getPlayers()[Math.floor(Math.random() * this.force.getPlayers().length)];
    }
}

