import traverse from 'traverse';
import { sprintf } from 'sprintf-js';

let styleOptions = {
    level: {
        caseControl: "upper",
    },
    event: {
        prefix: "> ",
    },
    message: {
        prefixMessage: "     received following messages:\n",
        indentStyle: "    > ",
        endStyle: ", ",
        nonInfoEndStyle: "\n",
    },
};

export function setLevelStyles(options) {
    traverse(styleOptions.level).forEach(function (x) {
        if (this.key === options.key) {
            this.update(options.value);
        }
    });
}

export function setEventStyles(options) {
    traverse(styleOptions.event).forEach(function (x) {
        if (this.key === options.key) {
            this.update(options.value);
        }
    });
}

export function setMessageStyles(options) {
    traverse(styleOptions.message).forEach(function (x) {
        if (this.key === options.key) {
            this.update(options.value);
        }
    });
}

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
            return prefixMessage + _normalized.map(line => `${indentStyle}${line}`).join(nonInfoEndStyle);
        } else {
            return _normalized.map(line => `${indentStyle}${line}`).join(endStyle) + "\n";
        }
    })();

    return {
        level: _level,
        service,
        event: _event,
        message: _message,
    };
}
