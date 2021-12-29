import { CameraSetups } from 'lib/w3ts/handles/CameraSetups'
import { Forces } from 'lib/w3ts/handles/Forces'

export interface ICinematicDepend {
	forces: Forces
	camSetups: CameraSetups
}
