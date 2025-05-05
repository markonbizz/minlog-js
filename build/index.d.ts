import { setEventStyles, setLevelStyles, setMessageStyles } from './modules/style';
import { setEventColor, setLevelColor, setMessageColor, setServiceColor } from './modules/color';
import { getLogDumpDir, isWriteFile, setLogDumpDir, setIsWriteFile } from './modules/file';
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
export function Logger(): Object;
export { setEventStyles, setLevelStyles, setMessageStyles, setEventColor, setLevelColor, setMessageColor, setServiceColor, getLogDumpDir, isWriteFile, setLogDumpDir, setIsWriteFile };
