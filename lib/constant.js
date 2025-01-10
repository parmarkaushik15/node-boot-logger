"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERR = exports.WARN = exports.IMP = exports.INFO = exports.loggerModeArr = exports.DEFAULT_LOG_FILE_NAME = void 0;
exports.DEFAULT_LOG_FILE_NAME = "application.log";
exports.loggerModeArr = [
    "console",
    "file",
    "custom",
    "off",
    "both",
];
exports.INFO = {
    color: "green",
    prefix: "INFO",
};
exports.IMP = {
    color: "magenta",
    prefix: "IMPORTANT",
};
exports.WARN = {
    color: "yellow",
    prefix: "WARNING",
};
exports.ERR = {
    color: "red",
    prefix: "ERROR",
};
//# sourceMappingURL=constant.js.map