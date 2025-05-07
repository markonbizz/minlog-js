import dayjs from 'dayjs'
import {
    stylizeLevelText,
    stylizeServiceText,
    stylizeEventText,
    stylizeMessageText
} from "./style"

export type LogData = {
    level: string;
    time: string;
    service: string;
    event: string;
    message: string | string[];
};

const defaultLevelText: Record<string, string> = {
    debug: 'DEBUG',
    info: 'INFO',
    warn: 'WARN',
    error: 'ERROR',
    success: 'SUCCESS'
};
const defaultFormats: Record<string, string> = {
    time: 'YYYY-MM-DD HH:mm:ss',
    date: 'YYYY-MM-DD',
    fmt: '$l | $t | $s$e:$m',
    exception: '$l | $t | $s$e:\n$m'
}

let levelText: Record<string, string> = { ...defaultLevelText };
let logFormat: Record<string, string> = { ...defaultFormats };

/**
 * Customize the text for a specific log level if you want to
 * @param level
 * @param text 
 */
export function setLevelText(level: string, text: string): void {
    if (levelText[level] !== undefined) {
        levelText[level] = text || defaultLevelText[level];
    } else {
        throw new Error(`Level ${level} not found`);
    }
}

/**
 * Sets the log format
 * @param fmt
 * available variables:
 * - $l - log level
 * - $t - time
 * - $s - service
 * - $e - event
 * - $m - message
 *
 * @example setLogFormat('$l | $t | $s$e:$m')
 */
export function setLogFormat(fmt: string): void {
    if (fmt) {
        logFormat.fmt = fmt;
    }
}

/**
 * Sets the log exception format
 * @param fmt
 * available variables:
 * - $l - log level
 * - $t - time
 * - $s - service
 * - $e - event
 * - $m - message
 *
 * @example setLogFormat('$l | $t | $s$e:$m')
 */
export function setExceptionFormat(fmt: string): void {
    if (fmt) {
        logFormat.exception = fmt;
    }
}

/**
 * Set the time format for the log
 * @param fmt this follows the `moment.js` / `day.js` format 
 */
export function setLogTimeFormat(fmt: string): void {
    if (fmt) {
        logFormat.time = fmt;
    }
}

/**
 * Set the date format for the log
 * @param fmt this follows the `moment.js` / `day.js` format 
 */
export function setLogDateFormat(fmt: string): void {
    if (fmt) {
        logFormat.date = fmt;
    }
}

/**
 * Get current time
 * @param fmt 
 * @returns 
 */
export function getCurrentTime(): string {
    return dayjs().format(logFormat.time || defaultFormats.time);
}

export function getCurrentDate(): string {
    return dayjs().format(logFormat.date || defaultFormats.date);
}


/**
 * Create log data
 * @param level 
 * @param service 
 * @param event 
 * @param message 
 * @returns 
 */
export function createLogData(
    level: string,
    service: string, event: string,
    message: string | string[]
): LogData {
    return {
        level:      levelText[level.toLowerCase()] || "_",
        time:       getCurrentTime(),
        service:    service,
        event:      event,
        message:    message
    };
}

/**
 * Format & stylize log data
 * @param fmt 
 * @param logData 
 * @returns  
 */
export function format(logData: LogData): string {
    let _retfmt = (logData.level !== 'info' && logData.level !== 'success') ? 
        logFormat.exception : logFormat.fmt;
    return _retfmt
        .replace('$l', stylizeLevelText(logData.level, logData.level))
        .replace('$t', logData.time)
        .replace('$s', stylizeServiceText(logData.service))
        .replace('$e', stylizeEventText(logData.event),)
        .replace('$m', stylizeMessageText(logData.level, logData.message));
}

export default {
    setLevelText,
    setLogFormat,
    setLogTimeFormat,
    getCurrentTime,
    createLogData,
    format
};