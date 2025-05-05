import fs from 'fs';

let _logDir = null;
let _isWrite = true;

/**
 * Set the status if user wants to write to a file.
 * @param {boolean} value - The status if user wants to write to a file.
 */
export function setIsWriteFile(value) {
    if (typeof value === "boolean") {
        _isWrite = value;
    }
}

/**
 * Set the path to the log output directory. 
 * @param {string} path - The path to the log output directory, default is "logs/".
 */
export function setLogDumpDir(path) {
    _logDir = path || "logs/";
}

/**
 * Get the path to the log output directory.
 * @returns {string} - The path to the log output directory.
 */
export function getLogDumpDir() {
    return _logDir;
}

/**
 * Get the status if user wants to write to a file.
 * @returns {boolean} - The status if user wants to write to a file.
 */
export function isWriteFile() {
    return _isWrite;
}

/**
 * Write the log to the given path.
 * @param {string} filename - The path to the log file.
 * @param {any} data - The data to write to the log file.
 * @returns 
 */
export function writeLogFile(filename, data) {
    if (!_logDir) {
        console.error("Log directory is not set. Use setLogDumpPath() to set the log directory.");
        return;
    }

    if (!_isWrite) return;

    const filePath = `${_logDir}/${filename}.log` || `${_logDir}/latest.log`;

    if (!fs.existsSync(_logDir)) {
        fs.mkdirSync(_logDir, { recursive: true });
    }
    fs.appendFile(filePath, data + "\n", (err) => {
        if (err) {
            console.error("minlog-js: error writing to log file:\n", err);
        }
    });
}
