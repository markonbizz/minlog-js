import chalk from "chalk";
import stripAnsi from "strip-ansi";
import traverse from "traverse";

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
export function setLevelColor(level, color) {
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
export function setServiceColor(color) {
    serviceColor = color;
}

/**
 * Set the color to the given event.
 * @param {import("chalk").ChalkInstance} color
 */
export function setEventColor(color) {
    eventColor = color;
}

/**
 * Set the color to the given level.
 * @param {string} level 
 * @param {import("chalk").ChalkInstance} color
 */
export function setMessageColor(level, color) {
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
export function colorize({ level, service, event = "", message = [""] }) {
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
export function decolorize(str) {
    return stripAnsi(str);
}
