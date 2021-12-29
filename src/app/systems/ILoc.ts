import { Rectangle } from 'lib/w3ts/index'
import { ForwardMove } from './ForwardMove'



export interface ILoc {
	rect: Rectangle
	forward?: ForwardMove[]
}
