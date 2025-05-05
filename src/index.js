import moment from "moment";

import { stylize, setEventStyles, setLevelStyles, setMessageStyles } from "@modules/style";
import { colorize, decolorize, setEventColor, setLevelColor, setMessageColor, setServiceColor } from "@modules/color";
import { writeLogFile, getLogDumpPath, getWriteLogFile, setLogDumpDir } from "@modules/file";
import { sprintf } from "sprintf-js";

function getCurrentTimestamp() {
    const momentInstance = moment();
    const date = momentInstance.format("YYYY-MM-DD");
    const time = momentInstance.format("HH:mm:ss");
    return { date, timeStamp: `${date} ${time}` };
}

function log(level, service, event, message) {
    const { date, timeStamp } = getCurrentTimestamp();
    const _stylized = stylize({ level, service, event, message });
    const _colored = colorize(_stylized);
    const _formatted = sprintf("%s|%s|%s %s: %s", timeStamp, _colored.level, _colored.service, _colored.event, _colored.message);

    console.log("%s", _formatted);

    if (getWriteLogFile()) {
        writeLogFile(`logs/${date}.log`, decolorize(_formatted));
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


function Logger() {
    return loggerInstance;
}

export {
    setEventStyles,
    setLevelStyles,
    setMessageStyles,
    setEventColor,
    setLevelColor,
    setMessageColor,
    setServiceColor,
    writeLogFile,
    getLogDumpPath,
    getWriteLogFile,
    setLogDumpDir,
    Logger
};
