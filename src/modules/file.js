import fs from 'fs';

let _logDir = null;
let _isWrite = true;

// @param {boolean} value
export function isWriteLogFile(value) {
    if (typeof value === "boolean") {
        _isWrite = value;
    }
}

export function setLogDumpDir(path) {
    _logDir = path || "logs/";
}

export function getLogDumpPath() {
    return _logDir;
}

export function getWriteLogFile() {
    return _isWrite;
}

export function writeLogFile(path, data) {
    if (!_logDir) {
        console.error("Log directory is not set. Use setLogDumpPath() to set the log directory.");
        return;
    }

    if (!_isWrite) return;

    const filePath = path || `${_logDir}/latest.log`;

    if (!fs.existsSync(_logDir)) {
        fs.mkdirSync(_logDir, { recursive: true });
    }
    fs.appendFile(filePath, data + "\n", (err) => {
        if (err) {
            console.error("minlog-js: error writing to log file:\n", err);
        }
    });
}
