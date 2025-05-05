import moment from "moment";

import { stylize, setEventStyles, setLevelStyles, setMessageStyles } from "@modules/style";
import { colorize, decolorize, setEventColor, setLevelColor, setMessageColor, setServiceColor } from "@modules/color";
import { writeLogFile, getLogDumpDir, isWriteFile, setLogDumpDir, setIsWriteFile } from "@modules/file";
import { sprintf } from "sprintf-js";

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
    const _formatted = sprintf("%s | %s | %s > %s: %s", timeStamp, _colored.level, _colored.service, _colored.event, _colored.message);

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

// exports @modules/style
export {
    setEventStyles, setLevelStyles, setMessageStyles
};

// exports @modules/color
export {
    setEventColor, setLevelColor, setMessageColor, setServiceColor
};

// exports @modules/file
export {
    getLogDumpDir, isWriteFile, setLogDumpDir, setIsWriteFile
};

// exports Logger
export {
    Logger
};
