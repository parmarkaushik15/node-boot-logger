export declare const DEFAULT_LOG_FILE_NAME = "application.log";
export declare const enum LoggerModes {
    Console = "console",
    File = "file",
    Custom = "custom",
    Off = "off",
    Both = "both"
}
export declare const loggerModeArr: LoggerModes[];
export type LoggerModeOptions = LoggerModes.Console | LoggerModes.File | LoggerModes.Custom | LoggerModes.Off | LoggerModes.Both;
export interface ICustomLogger {
    sendLog(content: any, prefix: string): void;
}
export interface ILogType {
    color: "green" | "magenta" | "yellow" | "red";
    prefix: "INFO" | "IMPORTANT" | "WARNING" | "ERROR";
}
export declare const INFO: ILogType;
export declare const IMP: ILogType;
export declare const WARN: ILogType;
export declare const ERR: ILogType;
