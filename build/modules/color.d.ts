/**
 * Set the color to the given level.
 * @param {string} level
 * @param {import("chalk").ChalkInstance} color
 */
export function setLevelColor(level: string, color: import('chalk').ChalkInstance): void;
/**
 * Set the color to the given service.
 * @param {import("chalk").ChalkInstance} color
 */
export function setServiceColor(color: import('chalk').ChalkInstance): void;
/**
 * Set the color to the given event.
 * @param {import("chalk").ChalkInstance} color
 */
export function setEventColor(color: import('chalk').ChalkInstance): void;
/**
 * Set the color to the given level.
 * @param {string} level
 * @param {import("chalk").ChalkInstance} color
 */
export function setMessageColor(level: string, color: import('chalk').ChalkInstance): void;
/**
 * Colorize the given level, service, event, and message.
 * @param {Object} params
 * @param {string} params.level - The log level (e.g., "info", "error").
 * @param {string} params.service - The service name.
 * @param {string} params.event - The event name (optional).
 * @param {string[]} params.message - The log message(s) to be colorized.
 * @returns
 */
export function colorize({ level, service, event, message }: {
    level: string;
    service: string;
    event: string;
    message: string[];
}): {
    level: any;
    service: string;
    event: string;
    message: any[];
};
/**
 * Remove ANSI color codes from a string.
 * @param {string} str - The string to be decolorized.
 * @returns {string} - The decolorized string.
 */
export function decolorize(str: string): string;
