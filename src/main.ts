
// const BUILD_DATE = compiletime(() => new Date().toUTCString())
// const TS_VERSION = compiletime(() => require("typescript").version)
// const TSTL_VERSION = compiletime(() => require("typescript-to-lua").version)

import { Logger, LogLevel } from 'app/log'
import { Game } from 'app/game'
import { Timer, addScriptHook, W3TS_HOOK } from 'lib/w3ts/index'

const tsMain = () => {
	Logger.Level(LogLevel.Information)

	// Run at map Init
	try {
		Game.mapInit()
	} catch (e) {
		Logger.Fatal(e)
	}

	// Run at Game Start
	const mapStart = new Timer()
	mapStart.start(0.1, false, () => {
		try {
			Game.start()
		} catch (e) {
			Logger.Fatal(e)
		}
	})
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain)
