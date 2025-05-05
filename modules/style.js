import traverse from 'traverse';

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
export function setLevelStyles(options) {
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
export function setEventStyles(options) {
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
export function setMessageStyles(options) {
    traverse(styleOptions.message).forEach(function (x) {
        if (this.key === options.key) {
            this.update(options.value);
        }
    });
}

/**
 * @param {Object} params
 * @param {string} params.level - The log level (e.g., "info", "error").
 * @param {string} params.service - The service name.
 * @param {string} params.event - The event name (optional).
 * @param {string[]} params.message - The log message(s) to be colorized. 
 * @returns {Object} - An object containing the styled level, service, event, and message.
 */
export function stylize({ level, service, event = "", message = [""] }) {
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
