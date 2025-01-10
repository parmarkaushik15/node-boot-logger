export declare class Logger {
    private static properties;
    constructor();
    private static initFilePath;
    private static initMode;
    static Info(content: any, printFull?: boolean): void;
    static Important(content: any, printFull?: boolean): void;
    static Warning(content: any, printFull?: boolean): void;
    static Error(content: any, printFull?: boolean): void;
    private static PrintLogHelper;
    private static PrintLog;
    private static WriteToFile;
    private static CheckExists;
}
