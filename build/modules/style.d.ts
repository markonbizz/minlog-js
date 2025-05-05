/**
 * Sets the style options for the level.
 * @param {Object} options
 * @param {string} options.key - The key(s) to update.
 * @param {string} options.value - The value(s) to set.
 *
 * Currently available options:
 * - level.caseControl: "upper", "lower", "capitalize"
 */
export function setLevelStyles(options: {
    key: string;
    value: string;
}): void;
/**
 * Sets the style options for the event.
 * @param {any} options
 *
 * Currently available options:
 * - event.prefix: string
 */
export function setEventStyles(options: any): void;
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
export function setMessageStyles(options: any): void;
/**
 * @param {Object} params
 * @param {string} params.level - The log level (e.g., "info", "error").
 * @param {string} params.service - The service name.
 * @param {string} params.event - The event name (optional).
 * @param {string[]} params.message - The log message(s) to be colorized.
 * @returns {Object} - An object containing the styled level, service, event, and message.
 */
export function stylize({ level, service, event, message }: {
    level: string;
    service: string;
    event: string;
    message: string[];
}): Object;
