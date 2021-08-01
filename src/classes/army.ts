import { Force, Unit } from "lib/w3ts/index"



export class Army {
    public force!: Force;
    public name!: string;
    public captial!: Unit;
    public _enemy: Army;

    constructor() {

    }

    public get enemy() {
        return this._enemy;
    }

    public set enemy(army: Army) {
        this._enemy = army;
    }

    public isCaptialAlive() {
        return this.captial.isAlive();
    }

    public get enemyForce() {
        return this._enemy.force;
    }

    public get randomPlayer() {
        return this.force.getPlayers()[Math.floor(Math.random() * this.force.getPlayers().length)];
    }
}

