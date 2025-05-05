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
    info: chalk.cyan,
    warn: chalk.yellow,
    error: chalk.red,
    fatal: chalk.redBright.bold,
};

export function setLevelColor(level, color) {
    traverse(levelColor).forEach(function (x) {
        if (this.key === level.toLowerCase()) {
            this.update(color);
        }
    });
}

export function setServiceColor(color) {
    serviceColor = color;
}

export function setEventColor(color) {
    eventColor = color;
}

export function setMessageColor(level, color) {
    traverse(messageColor).forEach(function (x) {
        if (this.key === level.toLowerCase()) {
            this.update(color);
        }
    });
}

export function colorize({ level, service, event = "", message = [""] }) {
    const levelFn = levelColor[level.toLowerCase()] || levelColor.default;
    const messageFn = messageColor[lowerLevel] || chalk.white;

    const _level = levelFn(level);
    const _service = serviceColor(service);
    const _event = event ? eventColor(event) : "";
    const _message = message.map(line => messageFn(line));

    return {
        level:      _level,
        service:    _service,
        event:      _event,
        message:    _message,
    };
}

// Removes ANSI color codes from a string
export function decolorize(str) {
    return stripAnsi(str);
}
