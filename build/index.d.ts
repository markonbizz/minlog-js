import moment from 'moment';
import traverse from 'traverse';
import chalk from 'chalk';
import stripAnsi from 'strip-ansi';
import fs from 'fs';
import { sprintf } from 'sprintf-js';

let styleOptions = {
    level: {
        caseControl: "upper",
    },
    event: {
        prefix: "> ",
    },
    message: {
        prefixMessage: "\n----- received following messages -----\n",
        indentStyle: "",
        nonInfoIndentStyle: "    > ",
        endStyle: ", ",
        nonInfoEndStyle: "\n",
    },
};

/**
 * Sets the style options for the level.
 * @param {Object} options
 * @param {string} options.key - The key(s) to update.
 * @param {string} options.value - The value(s) to set.
 * 
 * Currently available options:
 * - level.caseControl: "upper", "lower", "capitalize"
 */
function setLevelStyles(options) {
    traverse(styleOptions.level).forEach(function (x) {
        if (this.key === options.key) {
            this.update(options.value);
        }
    });
}

/**
 * Sets the style options for the event.
 * @param {any} options 
 *
 * Currently available options:
 * - event.prefix: string
 */
function setEventStyles(options) {
    traverse(styleOptions.event).forEach(function (x) {
        if (this.key === options.key) {
            this.update(options.value);
        }
    });
}

/**
 * Sets the style options for the message.
 * @param {any} options 
 *
 * Currently available options:
 * - message.prefixMessage: string
 * - message.indentStyle: string
 * - message.nonInfoIndentStyle: string
 * - message.endStyle: string
 * - message.nonInfoEndStyle: string 
 */
function setMessageStyles(options) {
    traverse(styleOptions.message).forEach(function (x) {
        if (this.key === options.key) {
            this.update(options.value);
        }
    });
}

function stylize({ level, service, event = "", message = [""] }) {
    const _level = (() => {
        const _caseControl = styleOptions.level.caseControl;
        if (_caseControl === "upper") {
            return level.toUpperCase();
        } else if (_caseControl === "lower") {
            return level.toLowerCase();
        } else if (_caseControl === "capitalize") {
            return level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
        } else {
            return level;
        }
    })();

    const _event = (() => {
        if (!event) return "";
        const prefix = styleOptions.event.prefix || "";
        return `${prefix}${event}`;
    })();

    const _message = (() => {
        const {
            prefixMessage,
            indentStyle,
            nonInfoIndentStyle,
            endStyle,
            nonInfoEndStyle,
        } = styleOptions.message;

        // makes everything is a string
        const _normalized = message.map(line => {
            if (typeof line === "object") {
                return JSON.stringify(line, null, 2);
            } else {
                return String(line);
            }
        });

        if (_level !== "INFO") {
            return prefixMessage + _normalized.map(line => `${nonInfoIndentStyle}${line}`).join(nonInfoEndStyle);
        } else {
            return _normalized.map(line => `${indentStyle}${line}`).join(endStyle);
        }
    })();

    return {
        level: _level,
        service,
        event: _event,
        message: _message,
    };
}

let levelColor = {
    debug: chalk.gray.dim,
    info: chalk.cyan,
    warn: chalk.yellow,
    error: chalk.red,
    fatal: chalk.redBright.bold,
    success: chalk.green,
    default: chalk.white,
};

let serviceColor = chalk.blueBright;
let eventColor = chalk.magentaBright;
let messageColor = {
    debug: chalk.gray.dim,
    info: chalk.white,
    warn: chalk.yellow,
    error: chalk.red,
    fatal: chalk.redBright.bold,
};

/**
 * Set the color to the given level.
 * @param {string} level 
 * @param {import("chalk").ChalkInstance} color 
 */
function setLevelColor(level, color) {
    traverse(levelColor).forEach(function (x) {
        if (this.key === level.toLowerCase()) {
            this.update(color);
        }
    });
}

/**
 * Set the color to the given service.
 * @param {import("chalk").ChalkInstance} color 
 */
function setServiceColor(color) {
    serviceColor = color;
}

/**
 * Set the color to the given event.
 * @param {import("chalk").ChalkInstance} color
 */
function setEventColor(color) {
    eventColor = color;
}

/**
 * Set the color to the given level.
 * @param {string} level 
 * @param {import("chalk").ChalkInstance} color
 */
function setMessageColor(level, color) {
    traverse(messageColor).forEach(function (x) {
        if (this.key === level.toLowerCase()) {
            this.update(color);
        }
    });
}

/**
 * @param {string} level - The log level (e.g., "info", "error").
 * @param {string} service - The service name.
 * @param {string} event - The event name (optional).
 * @param {string[]} message - The log message(s) to be colorized. 
 * @returns 
 */
function colorize({ level, service, event = "", message = [""] }) {
    const levelFn = levelColor[level.toLowerCase()] || levelColor.default;
    const messageFn = messageColor[level.toLowerCase()] || chalk.white;

    const _level = levelFn(level);
    const _service = serviceColor(service);
    const _event = event ? eventColor(event) : "";
    const _message = [message].map(line => messageFn(line));

    return {
        level:      _level,
        service:    _service,
        event:      _event,
        message:    _message,
    };
}

/**
 * Remove ANSI color codes from a string.
 * @param {string} str - The string to be decolorized.
 * @returns {string} - The decolorized string.
 */
function decolorize(str) {
    return stripAnsi(str);
}

let _logDir = null;
let _isWrite = true;

/**
 * Set the status if user wants to write to a file.
 * @param {boolean} value - The status if user wants to write to a file.
 */
function setIsWriteFile(value) {
    if (typeof value === "boolean") {
        _isWrite = value;
    }
}

/**
 * Set the path to the log output directory. 
 * @param {string} path - The path to the log output directory, default is "logs/".
 */
function setLogDumpDir(path) {
    _logDir = path || "logs/";
}

/**
 * Get the path to the log output directory.
 * @returns {string} - The path to the log output directory.
 */
function getLogDumpDir() {
    return _logDir;
}

/**
 * Get the status if user wants to write to a file.
 * @returns {boolean} - The status if user wants to write to a file.
 */
function isWriteFile() {
    return _isWrite;
}

/**
 * Write the log to the given path.
 * @param {string} filename - The path to the log file.
 * @param {any} data - The data to write to the log file.
 * @returns 
 */
function writeLogFile(filename, data) {
    if (!_logDir) {
        console.error("Log directory is not set. Use setLogDumpPath() to set the log directory.");
        return;
    }

    if (!_isWrite) return;

    const filePath = `${_logDir}/${filename}.log` || `${_logDir}/latest.log`;

    if (!fs.existsSync(_logDir)) {
        fs.mkdirSync(_logDir, { recursive: true });
    }
    fs.appendFile(filePath, data + "\n", (err) => {
        if (err) {
            console.error("minlog-js: error writing to log file:\n", err);
        }
    });
}

function getCurrentTimestamp() {
    const momentInstance = moment();
    const date = momentInstance.format("YYYY-MM-DD");
    const time = momentInstance.format("h:mm:ss A");
    return { date, timeStamp: `${date} ${time}` };
}

function log(level, service, event, message) {
    const { date, timeStamp } = getCurrentTimestamp();
    const _stylized = stylize({ level, service, event, message });
    const _colored = colorize(_stylized);
    const _formatted = sprintf("%s | %s | %s %s: %s", timeStamp, _colored.level, _colored.service, _colored.event, _colored.message);

    console.log("%s", _formatted);

    if (isWriteFile()) {
        writeLogFile(`${date}`, decolorize(_formatted));
    }
}

const loggerInstance = {
    /**
     * @param {string} service - The name of the service.
     * @param {string} event - The name of the event.
     * @param {string[]} message - The message to log. 
     */
    info:   (service, event, message) => log("info", service, event, message),
    /**
     * @param {string} service - The name of the service.
     * @param {string} event - The name of the event.
     * @param {string[]} message - The message to log. 
     */
    error:  (service, event, message) => log("error", service, event, message),
    /**
     * @param {string} service - The name of the service.
     * @param {string} event - The name of the event.
     * @param {string[]} message - The message to log. 
     */
    fatal:  (service, event, message) => log("fatal", service, event, message),
    /**
     * @param {string} service - The name of the service.
     * @param {string} event - The name of the event.
     * @param {string[]} message - The message to log. 
     */
    warn:   (service, event, message) => log("warn", service, event, message),
    /**
     * @param {string} service - The name of the service.
     * @param {string} event - The name of the event.
     * @param {string[]} message - The message to log. 
     */
    debug:  (service, event, message) => log("debug", service, event, message),
    /**
     * @param {string} service - The name of the service.
     * @param {string} event - The name of the event.
     * @param {string[]} message - The message to log. 
     */
    success: (service, event, message) => log("success", service, event, message),
};

/**
 * Logger function to create a logger instance.
 * @returns {Object} loggerInstance - The logger instance.
 *
 * ---
 *
 * Currently default prompt format:
 * - "YYYY-MM-DD HH:mm:ss A | level | service > event: message"
 *
 * Currently default color format:
 *
 * level: 
 *     - info: "cyan"
 *     - error: "red"
 *     - fatal: "red"
 *     - warn: "yellow"
 *     - debug: "gray"
 *     - success: "green"
 *
 * service: "blue"
 *
 * event: "magenta"
 *
 * message:
 *     - info: "white"
 *     - error: "red"
 *     - fatal: "red"
 *     - warn: "yellow"
 *     - debug: "gray"
 *     - success: "green"
 */
function Logger() {
    return loggerInstance;
}

export { Logger, getLogDumpDir, isWriteFile, setEventColor, setEventStyles, setIsWriteFile, setLevelColor, setLevelStyles, setLogDumpDir, setMessageColor, setMessageStyles, setServiceColor };
