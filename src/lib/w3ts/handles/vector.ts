/* eslint-disable camelcase */
import { Position } from 'app/classes/position'
import { Effect } from './effect'

export interface Orientation {
	yaw?: number,
	pitch?: number,
	roll?: number
}

export interface Coordinate {
	x: number,
	y: number,
	z?: number
}

export interface VectorInterface {
	x: number,
	y: number,
	z?: number,
	yaw?: number,
	pitch?: number,
	roll?: number
}

export class Vector extends Position {
	// Hidden Variables with Getter/Setter
	protected _yaw: number
	protected _pitch: number
	protected _roll: number
	protected _effectPath: string

	// Read Only Variables
	protected hasEffect: boolean

	// Open Variables
	effect: Effect

	constructor (line: VectorInterface, effectPath?: string) {
		super(line.x, line.y, line.z)
		this.yaw = line.yaw
		this.pitch = line.pitch
		this.roll = line.roll
		this._effectPath = effectPath

		if (this._effectPath != null) {
			this.hasEffect = true
			this.effect = new Effect(this._effectPath, this, this.orientation)
		}
	}

	public override set x (value: number) {
		this._x = value
		if (this.hasEffect) { this.effect.x = value }
	}

	public override set y (value: number) {
		this._y = value
		if (this.hasEffect) { this.effect.y = value }
	}

	public override set z (value: number) {
		this._z = value
		if (this.hasEffect) { this.effect.z = value }
	}

	public set yaw (value: number) {
		this._yaw = value
		if (this.hasEffect) { this.effect.yaw = value }
	}

	public get yaw (): number {
		return this._yaw
	}

	public set pitch (value: number) {
		this._pitch = value
		if (this.hasEffect) { this.effect.pitch = value }
	}

	public get pitch (): number {
		return this._pitch
	}

	public set roll (value: number) {
		this._roll = value
		if (this.hasEffect) { this.effect.roll = value }
	}

	public get roll (): number {
		return this._roll
	}

	public get orientation (): Orientation {
		return { yaw: this.yaw, pitch: this.pitch, roll: this.roll }
	}

	public set orientation (orientation: Orientation) {
		this.yaw = orientation.yaw ?? this.yaw
		this.pitch = orientation.pitch ?? this.pitch
		this.roll = orientation.roll ?? this.roll
		if (this.hasEffect) { this.effect.orientation = this.orientation }
	}

	public get line (): VectorInterface {
		return { x: this.x, y: this.y, z: this.z, yaw: this.yaw, pitch: this.pitch, roll: this.roll }
	}

	public set effectPath (path: string) {
		// Check to see if the model path is different
		if (this.effectPath !== path) {
			// Destroy the Existing Effect
			if (this._effectPath != null) {
				this.effect.destroy()
			}

			// Create the new Effect
			this._effectPath = path
			this.effect = new Effect(this._effectPath, this)
			this.effect.z = this.z
		}
	}

	public get effectPath (): string {
		return this._effectPath
	}

	public orientTo (pos: Position): void {
		this.orientation = this.orientationTo(pos)
	}

	public project (dist: number): Position {
		const x = this.x + dist * Cos(this.yaw * bj_DEGTORAD)
		const y = this.y + dist * Sin(this.yaw * bj_DEGTORAD)
		const z = this.z + dist * Tan(this.pitch * bj_DEGTORAD)
		return new Vector({ x: x, y: y, z: z, yaw: this.yaw, pitch: this.pitch, roll: this.roll })
	}

	public moveToProjection (dist: number): void {
		this.x = this.x + dist * Cos(this.yaw * bj_DEGTORAD)
		this.y = this.y + dist * Sin(this.yaw * bj_DEGTORAD)
		this.z = this.z + dist * Tan(this.pitch * bj_DEGTORAD)
	}

	public get effectScale (): number {
		return this.effect.scale
	}

	public set effectScale (value: number) {
		this.effect.scale = value
	}

	public
}

// const pos = new Vector(3, 45)
// const pos2 = new Vector(35, 2345, 0, 343)

// pos2.orientTo(pos)
