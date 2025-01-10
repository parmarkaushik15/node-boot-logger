export const DEFAULT_LOG_FILE_NAME = "application.log";

export const enum LoggerModes {
  Console = "console",
  File = "file",
  Custom = "custom",
  Off = "off",
  Both = "both",
}

export const loggerModeArr = [
  LoggerModes.Console,
  LoggerModes.File,
  LoggerModes.Custom,
  LoggerModes.Off,
  LoggerModes.Both,
];

export type LoggerModeOptions =
  | LoggerModes.Console
  | LoggerModes.File
  | LoggerModes.Custom
  | LoggerModes.Off
  | LoggerModes.Both;

export interface ICustomLogger {
  sendLog(content: any, prefix: string): void;
}


export interface ILogType {
  color: "green" | "magenta" | "yellow" | "red";
  prefix: "INFO" | "IMPORTANT" | "WARNING" | "ERROR";
}

export const INFO: ILogType = {
  color: "green",
  prefix: "INFO",
};

export const IMP: ILogType = {
  color: "magenta",
  prefix: "IMPORTANT",
};

export const WARN: ILogType = {
  color: "yellow",
  prefix: "WARNING",
};

export const ERR: ILogType = {
  color: "red",
  prefix: "ERROR",
};

