import { Logger } from 'app/log'
import { Position } from 'app/classes/position'
import { Unit, Rectangle, Force, Trigger, Timer, DestructibleFour, Effect, AbilityModel, Destructable, Order } from 'lib/w3ts/index'
import { Loc } from './loc'

export class Aspect {
	readonly origAspect!: Unit
	readonly aspectTypeId: number
	readonly gateRegion?: Rectangle
	readonly gateTypeId?: number
	readonly dependent!: Unit
	readonly force!: Force
	private deathPos?: Position
	private deathFacing?: number

	aspect?: Unit
	respawnTime: number
	dest: Loc

	aspectDies = new Trigger()
	dependentDies = new Trigger()

	respawnTimer = new Timer()

	constructor (respawnTime: number, unit: unit, dependentUnit: unit, force: Force, dest: Loc, gateRegion?: rect, gateTypeId?: DestructibleFour) {
		if (gateRegion && gateTypeId) {
			this.gateRegion = Rectangle.fromHandle(gateRegion)
			this.gateTypeId = FourCC(gateTypeId)
		}

		this.origAspect = Unit.fromHandle(unit)
		this.aspectTypeId = this.origAspect.typeId
		this.dependent = Unit.fromHandle(dependentUnit)
		this.force = force
		this.respawnTime = respawnTime
		this.dest = dest

		this.aspectDies.registerUnitEvent(this.origAspect, EVENT_UNIT_DEATH)
		this.aspectDies.addAction(() => { this.onDeath() })
		this.dependentDies.registerUnitEvent(this.dependent, EVENT_UNIT_DEATH)
		this.dependentDies.addAction(() => { this.onDependentDeath() })
	}

	public onDeath (): void {
		try {
			if (this.dependent.isAlive()) {
				const u = Unit.fromKilled()
				new Effect(AbilityModel.deathPactTarget, u.x, u.y).destroy()

				if (u === this.origAspect) {
					this.deathPos = this.origAspect.position
					this.deathFacing = this.origAspect.facing

					// Open the Gate
					if (this.gateRegion != null) {
						this.gateRegion.enumDestructables(() => { return Destructable.fromFilter().typeId === this.gateTypeId }, () => {
							Destructable.fromEnum().openGate()
						})
					}

					Force.Humans.displayTimedText(10, `BEWARE!  ${this.dependent.owner.name} has bested the ${u.name}!  It will now enter the fray allied to them!`)
					this.deathPos.pingMinimap(10, true, 255)

					// Initial Timer
					this.respawnTimer.start(3, false, () => {
						new Effect(AbilityModel.darkPortalTarget, this.deathPos as Position, {}).destroy()
						this.aspect = new Unit(this.force.getRandomPlayer(), this.aspectTypeId, this.deathPos as Position, this.deathFacing ?? 0, 0)
						this.aspect.issueOrderAt(Order.Attack, this.dest.randomX, this.dest.randomY)
						this.aspectDies.registerUnitEvent(this.aspect, EVENT_UNIT_DEATH)
					})
				} else {
					this.respawnTimer.start(this.respawnTime, false, () => {
						new Effect(AbilityModel.darkPortalTarget, this.deathPos as Position, {}).destroy()
						this.aspect = new Unit(this.force.getRandomPlayer(), this.aspectTypeId, this.deathPos as Position, this.deathFacing ?? 0, 0)
						this.aspect.issueOrderAt(Order.Attack, this.dest.randomX, this.dest.randomY)
						this.aspectDies.registerUnitEvent(this.aspect, EVENT_UNIT_DEATH)
					})
				}
			}
		} catch (error) {
			Logger.Error('Aspect', error)
		}
	}

	public onDependentDeath (): void {
		this.aspectDies.destroy()
		this.respawnTimer.destroy()
	}

	static define = (): void => {
		// Aspect of the Tides
		new Aspect(80, gg_unit_nmsc_0644, gg_unit_nntt_0135, Force.Alliance, Loc.top.federation, gg_rct_Murloc_Gate_Left, DestructibleFour.MassiveRuinedGateVertical)
		new Aspect(80, gg_unit_nmsc_0450, gg_unit_nntt_0132, Force.Federation, Loc.bottom.alliance, gg_rct_Murloc_Gate_Right, DestructibleFour.MassiveRuinedGateVertical)

		// Aspect of the Earth
		new Aspect(80, gg_unit_n01A_0569, gg_unit_h006_0074, Force.Alliance, Loc.sCityFront.federation, gg_rct_Rock_Gate_Left, DestructibleFour.IcyGate)
		new Aspect(80, gg_unit_n01A_0399, gg_unit_h006_0055, Force.Federation, Loc.sCityFront.alliance, gg_rct_Rock_Gate_Right, DestructibleFour.IcyGate)

		// Aspect of the Storm
		new Aspect(80, gg_unit_nelb_0697, gg_unit_h003_0015, Force.Alliance, Loc.bottom.federation)
		new Aspect(80, gg_unit_nelb_0194, gg_unit_h003_0007, Force.Federation, Loc.top.alliance)

		// Aspect of the Forest
		new Aspect(80, gg_unit_n00N_0939, gg_unit_nheb_0109, Force.Alliance, Loc.top.federation, gg_rct_Aspect_of_Forest_Left_Gate, DestructibleFour.ElvenGate)
		new Aspect(80, gg_unit_n00N_0769, gg_unit_nheb_0036, Force.Federation, Loc.bottom.alliance, gg_rct_Aspect_of_Forest_Right_Gate, DestructibleFour.ElvenGate)

		// Aspect of Death
		new Aspect(80, gg_unit_uabo_0493, gg_unit_n00K_0802, Force.Alliance, Loc.middle.federation)
		new Aspect(80, gg_unit_uabo_0263, gg_unit_n00K_0477, Force.Federation, Loc.middle.alliance)
	}
}
