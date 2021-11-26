
import { Force, MapPlayer, Unit } from "lib/w3ts/index"



export class Army {
    public force!: Force;
    public name!: string;
    public captial!: Unit;
    public _enemy: Army;

    constructor() {
        // Do nothing
    }

    public get enemy(): Army {
        return this._enemy;
    }

    public set enemy(army: Army) {
        this._enemy = army;
    }

    public isCapitalAlive(): boolean {
        return this.captial.isAlive();
    }

    public get enemyForce(): Force {
        return this._enemy.force;
    }

    public get randomPlayer(): MapPlayer {
        return this.force.getPlayers()[Math.floor(Math.random() * this.force.getPlayers().length)];
    }

    static Alliance: Army
    static Federation: Army

    static define = (): void  => {
        Army.Alliance = new Army()
        Army.Alliance.force = Force.Alliance
        Army.Alliance.enemy = Army.Federation
        Army.Alliance.captial = Unit.fromHandle(gg_unit_h00E_0033)
    
        Army.Federation = new Army()
        Army.Federation.force = Force.Federation
        Army.Federation.enemy = Army.Alliance
        Army.Federation.captial = Unit.fromHandle(gg_unit_h00E_0081)
    }
}

