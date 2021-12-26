import { Units } from 'lib/w3ts/handles/Units'
import { Banner } from './banner'


export class Banners {
	static center1: Banner
	static center2: Banner
	static center3: Banner
	static center4: Banner

	static define (): void {
		Banners.center1 = new Banner(Units.o00C_1005)
		Banners.center2 = new Banner(Units.o00C_1008)
		Banners.center3 = new Banner(Units.o00C_1009)
		Banners.center4 = new Banner(Units.o00C_1011)

		// Main Gate
		new Banner(Units.o00C_1018, 400, 2, 200)
		new Banner(Units.o00C_1019, 400, 2, 200)
		new Banner(Units.o00C_1020, 400, 2, 200)
		new Banner(Units.o00C_1021, 400, 2, 200)
	}
}
