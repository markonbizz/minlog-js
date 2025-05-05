/**
 * Set the status if user wants to write to a file.
 * @param {boolean} value - The status if user wants to write to a file.
 */
export function setIsWriteFile(value: boolean): void;
/**
 * Set the path to the log output directory.
 * @param {string} path - The path to the log output directory, default is "logs/".
 */
export function setLogDumpDir(path: string): void;
/**
 * Get the path to the log output directory.
 * @returns {string} - The path to the log output directory.
 */
export function getLogDumpDir(): string;
/**
 * Get the status if user wants to write to a file.
 * @returns {boolean} - The status if user wants to write to a file.
 */
export function isWriteFile(): boolean;
/**
 * Write the log to the given path.
 * @param {string} filename - The path to the log file.
 * @param {any} data - The data to write to the log file.
 * @returns
 */
export function writeLogFile(filename: string, data: any): void;
