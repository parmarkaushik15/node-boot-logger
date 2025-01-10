"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var colors = require("colors");
var fs = require("fs");
var path = require("path");
var util = require("util");
var constant_1 = require("./constant");
var node_boot_core_1 = require("node-boot-core");
var Logger = (function () {
    function Logger() {
    }
    Logger.initFilePath = function () {
        var fileName = (0, node_boot_core_1.getPropertiesData)(Logger.properties, "logger.filename", constant_1.DEFAULT_LOG_FILE_NAME);
        var fileDir = (0, node_boot_core_1.getPropertiesData)(Logger.properties, "logger.filedir", "");
        var dir = "".concat(process.cwd(), "/").concat(fileDir, "/");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        return path.join(dir, fileName);
    };
    Logger.initMode = function () {
        var loggerMode = (0, node_boot_core_1.getPropertiesData)(Logger.properties, "logger.mode", "");
        var mode = loggerMode;
        for (var _i = 0, loggerModeArr_1 = constant_1.loggerModeArr; _i < loggerModeArr_1.length; _i++) {
            var val = loggerModeArr_1[_i];
            if (mode === val) {
                return mode;
            }
        }
        return "both";
    };
    Logger.Info = function (content, printFull) {
        Logger.PrintLogHelper(content, printFull || false, constant_1.INFO);
    };
    Logger.Important = function (content, printFull) {
        Logger.PrintLogHelper(content, printFull || false, constant_1.IMP);
    };
    Logger.Warning = function (content, printFull) {
        Logger.PrintLogHelper(content, printFull || false, constant_1.WARN);
    };
    Logger.Error = function (content, printFull) {
        Logger.PrintLogHelper(content, printFull || false, constant_1.ERR);
    };
    Logger.PrintLogHelper = function (content, printFull, logType) {
        Logger.PrintLog(content, printFull, logType, Logger.initMode(), Logger.initFilePath());
    };
    Logger.PrintLog = function (content, printFull, logType, mode, filePath) {
        if (mode === "off") {
            return;
        }
        if (printFull) {
            content = util.inspect(content);
        }
        var time = "[" + new Date().toISOString() + "]: ";
        content = time + content;
        if (mode === "console") {
            content = colors[logType.color](content);
            console.log(content);
        }
        else if (mode === "file") {
            Logger.WriteToFile(logType.prefix + content + "\n", filePath);
        }
        else {
            Logger.WriteToFile(logType.prefix + content + "\n", filePath);
            content = colors[logType.color](content);
            console.log(content);
        }
    };
    Logger.WriteToFile = function (content, filePath) {
        try {
            var fileExists = Logger.CheckExists(filePath);
            if (fileExists) {
                fs.appendFileSync(filePath, content);
            }
            else {
                fs.writeFileSync(filePath, content);
            }
        }
        catch (err) {
            console.error(err);
        }
    };
    Logger.CheckExists = function (filePath) {
        try {
            fs.accessSync(filePath);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    Logger.properties = (0, node_boot_core_1.readProperties)();
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map