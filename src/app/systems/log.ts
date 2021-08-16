
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

export namespace Log {

    export let logLevel = LogLevel.None

    export function Level(level: LogLevel): void {
        logLevel = level
    }
    export interface Events {
        logLevel: LogLevel,
        message: string,
        arg: unknown[]
    }

    export function Fatal(message: string, ...args: unknown[]): void {
        log(LogLevel.Fatal, message, ...args)
    }

    export function Error(message: string, ...args: unknown[]): void {
        log(LogLevel.Error, message, ...args)
    }

    export function Warning(message: string, ...args: unknown[]): void {
        log(LogLevel.Warning, message, ...args)
    }

    export function Information(message: string, ...args: unknown[]): void {
        log(LogLevel.Information, message, ...args)
    }

    export function Debug(message: string, ...args: unknown[]): void {
        log(LogLevel.Debug, message, ...args)
    }

    export function Message(message: string, ...args: unknown[]): void {
        log(LogLevel.Message, message, ...args)
    }

    export function Verbose(this: void, message: string, ...args: unknown[]): void {
        log(LogLevel.Verbose, message, ...args)
    }

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
    [LogLevel.Fatal]: '|cffff0000[FTL]|r',
}

const Colors: Record<string, string> =
{
    ['nil']: '9d9d9d',
    ['boolean']: '1eff00',
    ['number']: '00ccff',
    ['string']: 'ff8000',
    ['table']: 'ffcc00',
    ['function']: 'ffcc00',
    ['userdata']: 'ffcc00',
}

const Brackets: Record<string, boolean> =
{
    ['nil']: false,
    ['boolean']: false,
    ['number']: false,
    ['string']: false,
    ['table']: true,
    ['function']: true,
    ['userdata']: true,
}

function log(logLevel: LogLevel, message: string, ...events: unknown[]) {

    if (logLevel >= Log.logLevel) {
        let messagePost = Prefix[logLevel] + " " + message

        let parameters = ""

        for (let index = 0; index < events.length; index++) {

            parameters += " "
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

        if (parameters != " ") {
            messagePost += ":" + parameters
        }

        print(messagePost)
    }
}