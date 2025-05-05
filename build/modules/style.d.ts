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
export function stylize({ level, service, event, message }: {
    level: any;
    service: any;
    event?: string | undefined;
    message?: string[] | undefined;
}): {
    level: any;
    service: any;
    event: string;
    message: string;
};
