import { addScriptHook, Timer, W3TS_HOOK } from "lib/w3ts/index"
import { Game } from "./app/game"




const BUILD_DATE = compiletime(() => new Date().toUTCString())
const TS_VERSION = compiletime(() => require("typescript").version)
const TSTL_VERSION = compiletime(() => require("typescript-to-lua").version)

function tsMain() {



	function Main() {
		print(`Build: ${BUILD_DATE}`)
		print(`Typescript: v${TS_VERSION}`)
		print(`Transpiler: v${TSTL_VERSION}`)
		print(" ")

		// Run at map Init
		try {
			Game.mapInit()
		} catch (e) {
			print(e)
		}


		// Run at Game Start
		const mapStart = new Timer()
		mapStart.start(0.1, false, () => {
			try {
				Game.start()
			} catch (e) {
				print(e)
			}

		})
	}


	Main()
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain)