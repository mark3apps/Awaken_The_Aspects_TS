/* eslint-disable no-unused-vars */

export enum LogLevel {
	None = -1,
	Message = 0,
	Verbose = 1,
	Event = 2,
	Debug = 3,
	Information = 4,
	Warning = 5,
	Error = 6,
	Fatal = 7
}

export interface Events {
	logLevel: LogLevel,
	message: string,
}

const Prefix: Record<LogLevel, string> =
{
	[LogLevel.None]: '|cffffffff[NON]|r',
	[LogLevel.Verbose]: '|cff9d9d9d[VRB]|r',
	[LogLevel.Debug]: '|cff9d9d9d[DBG]|r',
	[LogLevel.Information]: '|cffe6cc80[INF]|r',
	[LogLevel.Message]: '|cffe6cc80[MSG]|r',
	[LogLevel.Event]: '|cffe6cc80[EVT]|r',
	[LogLevel.Warning]: '|cffffcc00[WRN]|r',
	[LogLevel.Error]: '|cffff8000[ERR]|r',
	[LogLevel.Fatal]: '|cffff0000[FTL]|r'
}

const Colors: Record<string, string> =
{
	nil: '9d9d9d',
	boolean: '1eff00',
	number: '00ccff',
	string: 'ff8000',
	table: 'ffcc00',
	function: 'ffcc00',
	userdata: 'ffcc00'
}

const Brackets: Record<string, boolean> =
{
	nil: false,
	boolean: false,
	number: false,
	string: false,
	table: true,
	function: true,
	userdata: true
}

const log = (logLevel: LogLevel, message: string, ...events: unknown[]) => {
	if (logLevel >= Logger.logLevel) {
		let messagePost = Prefix[logLevel] + ' ' + message

		let parameters = ''

		for (let index = 0; index < events.length; index++) {
			parameters += ' '
			const event = events[index]

			const whichType = type(event)

			const color = Colors[whichType]

			if (color) {
				parameters += '|cff' + color
			}
			if (Brackets[whichType]) {
				parameters += '{ '
			}

			parameters += event

			if (Brackets[whichType]) {
				parameters += ' }'
			}

			if (color) {
				parameters += '|r'
			}
		}

		if (parameters !== ' ') {
			messagePost += ':' + parameters
		}

		print(messagePost)
	}
}

export class Logger {
	static logLevel = LogLevel.None

	static Level = (level: LogLevel): void => {
		Logger.logLevel = level
	}

	arg: unknown[]

	static Fatal = (message: string, ...args: unknown[]): void => {
		log(LogLevel.Fatal, message, ...args)
	}

	static Error = (message: string, ...args: unknown[]): void => {
		log(LogLevel.Error, message, ...args)
	}

	static Warning = (message: string, ...args: unknown[]): void => {
		log(LogLevel.Warning, message, ...args)
	}

	static Information = (message: string, ...args: unknown[]): void => {
		log(LogLevel.Information, message, ...args)
	}

	static Debug = (message: string, ...args: unknown[]): void => {
		log(LogLevel.Debug, message, ...args)
	}

	static Message = (message: string, ...args: unknown[]): void => {
		log(LogLevel.Message, message, ...args)
	}

	static Verbose = (message: string, ...args: unknown[]): void => {
		log(LogLevel.Verbose, message, ...args)
	}
}
