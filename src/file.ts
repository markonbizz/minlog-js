import chalk from "chalk";

const defaultFilePath: string = './logs/latest.log';
let allowWriteFile: boolean = false;

/**
 * Set the allowWriteFile flag
 * @param value - if true, allow logger to write reports to file
 * @returns void
 */
export function setAllowToWriteFile(value: boolean): void {
    allowWriteFile = value;
}

/**
 * Get the value of allowWriteFile flag
 * @returns boolean
 */
export function isAllowToWriteFile(): boolean {
    return allowWriteFile;
}

/**
 * Write log data to a file
 * @param filePath - the path to the file
 * @param data - the log data to write
 */
export function writeToFile(filePath: string | null | undefined, data: string): void {
    if (allowWriteFile) {
        const fs = require('fs');
        const path = require('path');

        fs.appendFileSync(filePath || defaultFilePath, data + '\n', 'utf8');
    } else {
        const minlogText = `minlog-js: "${chalk.yellowBright.bold("allowWriteFile")}" is "false". Use "${chalk.yellowBright.bold("setAllowToWriteFile(true)")}" to enable file writing.`;
        console.log(`${chalk.gray.bold(minlogText)}\n${chalk.gray.bold("Log not written to file")}`);
    }
}

export default {
    setAllowToWriteFile,
    isAllowToWriteFile,
    writeToFile
};