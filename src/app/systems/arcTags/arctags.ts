import { MapPlayer, TextTag, Timer, Unit } from 'lib/w3ts'

export class ArcTag {

	tag: TextTag
	angleSin: number     // angle, sin component
	angleCos: number     // angle, cos component
	arcHeight: number      // arc height
	time: number     // time
	x: number     // origin x
	y: number         // origin y
	text: string        // text
	angle: number     // angle




	// Static
	static current: ArcTag[] = []
	static next: ArcTag[] = []
	static new: ArcTag[] = []

	static tick = 0.03125

	static sizeMin = 0.014
	static sizeBonus = 0.008   // Text size increase
	static timeLife = 0.7        // How long the text lasts
	static timeFade = 0.6      // When does the text start to fade
	static zOffset = 50        // Height above unit
	static zOffsetBonus = 50   // How much extra height the text gains
	static velocity = 2        // How fast the text move in x/y plane
	static angle = math.pi / 2 // Movement angle of the text. Does not apply if
	static angleRandom = true  // Is the angle random or fixed
	static updateTimer = new Timer()

	constructor (text: string, unit: Unit) {
		this.tag = new TextTag()
		this.x = unit.x
		this.y = unit.y
		this.text = text

		this.angle = GetRandomReal(0, 2 * math.pi)

		this.time = ArcTag.timeLife
		this.angleSin = Sin(this.angle) * ArcTag.velocity
		this.angleCos = Cos(this.angle) * ArcTag.velocity
		this.arcHeight = 0.1


		if (unit.isVisible(MapPlayer.fromLocal())) {
			this.tag.setPermanent(false)
			this.tag.setLifespan(ArcTag.timeLife)
			this.tag.setFadepoint(ArcTag.timeFade)
			this.tag.setText(this.text, ArcTag.sizeMin)
			this.tag.setPos(this.x, this.y, ArcTag.zOffset)

			ArcTag.current.push(this)

			if (ArcTag.current.length == 1) {
				ArcTag.updateTimer.start(ArcTag.tick, true, () => { ArcTag.update() })
			}
		}
	}

	static update = () => {

		let currentTag = ArcTag.current.pop()
		while (currentTag) {

			const p = Sin(math.pi * currentTag.time)
			currentTag.time -= ArcTag.tick
			currentTag.x += currentTag.angleCos
			currentTag.y += currentTag.angleSin

			currentTag.tag.setPos(currentTag.x, currentTag.y, ArcTag.zOffset + ArcTag.zOffsetBonus * p)
			currentTag.tag.setText(currentTag.text, ArcTag.sizeMin + ArcTag.sizeBonus * p)

			if (currentTag.time > 0) {
				ArcTag.next.push(currentTag)
			}

			currentTag = ArcTag.current.pop()
		}

		ArcTag.current = ArcTag.current.concat(ArcTag.next)
		ArcTag.next = []
		print(ArcTag.current.length)

		if (ArcTag.current.length === 0) {
			ArcTag.updateTimer.pause()
		}
	}
}