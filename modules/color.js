import chalk from "chalk";
import stripAnsi from "strip-ansi";
import traverse from "traverse";

/**
 * The color for the log level.
 * @property {import("chalk").ChalkInstance} debug - The color for debug messages.
 * @property {import("chalk").ChalkInstance} info - The color for info messages.
 * @property {import("chalk").ChalkInstance} warn - The color for warning messages.
 * @property {import("chalk").ChalkInstance} error - The color for error messages.
 * @property {import("chalk").ChalkInstance} fatal - The color for fatal messages.
 * @property {import("chalk").ChalkInstance} success - The color for success messages.
 * @property {import("chalk").ChalkInstance} default - The default color for messages.
 */
let levelColor = {
    debug: chalk.gray.dim,
    info: chalk.cyan,
    warn: chalk.yellow,
    error: chalk.red,
    fatal: chalk.redBright.bold,
    success: chalk.green,
    default: chalk.white,
};

/**
 * The color for the service name.
 * @type {import("chalk").ChalkInstance}
 * @default chalk.blueBright
 */
let serviceColor = chalk.blueBright;

/**
 * The color for the event name.
 * @type {import("chalk").ChalkInstance}
 * @default chalk.magentaBright
 */
let eventColor = chalk.magentaBright;

/**
 * The color for the message.
 * @property {import("chalk").ChalkInstance} debug - The color for debug messages.
 * @property {import("chalk").ChalkInstance} info - The color for info messages.
 * @property {import("chalk").ChalkInstance} warn - The color for warning messages.
 * @property {import("chalk").ChalkInstance} error - The color for error messages.
 * @property {import("chalk").ChalkInstance} fatal - The color for fatal messages.
 */
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
    // @ts-ignore
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
    // @ts-ignore
    traverse(messageColor).forEach(function (x) {
        if (this.key === level.toLowerCase()) {
            this.update(color);
        }
    });
}

/**
 * Colorize the given level, service, event, and message.
 * @param {Object} params
 * @param {string} params.level - The log level (e.g., "info", "error").
 * @param {string} params.service - The service name.
 * @param {string} params.event - The event name (optional).
 * @param {string[]} params.message - The log message(s) to be colorized. 
 * @returns 
 */
export function colorize({ level, service, event = "", message = [""] }) {
    // @ts-ignore
    const levelFn = levelColor[level.toLowerCase()] || levelColor.default;
    // @ts-ignore
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
