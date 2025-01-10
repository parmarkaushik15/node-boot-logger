import * as colors from "colors";
import * as fs from "fs";
import * as path from "path";
import * as util from "util";
import {
    LoggerModes,
    loggerModeArr,
    ILogType,
    ICustomLogger,
    LoggerModeOptions,
    INFO,
    IMP,
    WARN,
    ERR,
    DEFAULT_LOG_FILE_NAME,
} from "./constant";
import { getPropertiesData, readProperties } from "node-boot-core";

export class Logger {
    private static properties: any = readProperties();

    constructor() {
    }
    private static initFilePath(): string {
        const fileName = getPropertiesData(
            Logger.properties,
            "logger.filename",
            DEFAULT_LOG_FILE_NAME
        );
        const fileDir = getPropertiesData(Logger.properties, "logger.filedir", "");
        const dir = `${process.cwd()}/${fileDir}/`;
        if (!fs.existsSync(dir)) {
           fs.mkdirSync(dir, { recursive: true });
        }
        return path.join(dir, fileName);
    }

    private static initMode(): LoggerModeOptions {
        const loggerMode = getPropertiesData(
            Logger.properties,
            "logger.mode",
            ""
        );
        const mode = loggerMode;
        for (const val of loggerModeArr) {
            if (mode === val) {
                return mode;
            }
        }
        return LoggerModes.Both;
    }


    public static Info(content: any, printFull?: boolean) {
        Logger.PrintLogHelper(content, printFull || false, INFO);
    }

    public static Important(content: any, printFull?: boolean) {
        Logger.PrintLogHelper(content, printFull || false, IMP);
    }

    public static Warning(content: any, printFull?: boolean) {
        Logger.PrintLogHelper(content, printFull || false, WARN);
    }

    public static Error(content: any, printFull?: boolean) {
        Logger.PrintLogHelper(content, printFull || false, ERR);
    }

    private static PrintLogHelper(
        content: any,
        printFull: boolean,
        logType: ILogType
    ): void {
        Logger.PrintLog(
            content,
            printFull,
            logType,
            Logger.initMode(),
            Logger.initFilePath()
        );
    }

    private static PrintLog(
        content: any,
        printFull: boolean,
        logType: ILogType,
        mode: LoggerModeOptions,
        filePath: string,
    ): void {
        if (mode === LoggerModes.Off) {
            return;
        }
        if (printFull) {
            content = util.inspect(content);
        }
        const time = "[" + new Date().toISOString() + "]: ";
        content = time + content;
        if (mode === LoggerModes.Console) {
            content = (colors as any)[logType.color](content);
            console.log(content);
        } else if (mode === LoggerModes.File) {
            Logger.WriteToFile(logType.prefix + content + "\n", filePath);
        } else {
            Logger.WriteToFile(logType.prefix + content + "\n", filePath);
            content = (colors as any)[logType.color](content);
            console.log(content);
        }
    }

    private static WriteToFile(content: string, filePath: string): void {
        try {
            const fileExists = Logger.CheckExists(filePath);
            if (fileExists) {
                fs.appendFileSync(filePath, content);
            } else {
                fs.writeFileSync(filePath, content);
            }
        } catch (err) {
            console.error(err);
        }
    }

    private static CheckExists(filePath: string): boolean {
        try {
            fs.accessSync(filePath);
            return true;
        } catch (e) {
            return false;
        }
    }
}
