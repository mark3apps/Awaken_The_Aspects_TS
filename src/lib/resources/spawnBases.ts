import { Spawn } from "classes/spawn";

export interface SpawnBases {
	bases: {[name: string]: Spawn},
	names: Array<string>
}