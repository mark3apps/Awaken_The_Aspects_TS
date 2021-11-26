import { Spawn } from "app/classes/spawn";

export interface SpawnBases {
	bases: {[name: string]: Spawn},
	names: Array<string>
}