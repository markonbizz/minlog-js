import chalk from "chalk";
import fs from "fs";
import path from "path";

const defaultFilePath: string = './logs/latest.log';
const defaultAllowWriteFile: boolean = true;

let allowWriteFile: boolean = defaultAllowWriteFile;
let filePath: string | null | undefined = defaultFilePath;

/**
 * Set the allowWriteFile flag
 * @param value - if true, allow logger to write reports to file
 * @returns void
 */
export function setAllowToWriteFile(value: boolean): void {
    allowWriteFile = value;
}

export function setFilePath(value: string): void {
    if (value) {
        filePath = value;
    }
}

/**
 * Get the value of allowWriteFile flag
 * @returns boolean
 */
export function isAllowToWriteFile(): boolean {
    return allowWriteFile;
}

export function getFilePath(): string | null | undefined {
    return filePath;
}

/**
 * Write log data to a file
 * @param filePath - the path to the file
 * @param data - the log data to write
 */
export function writeToFile(data: string): void {
    if (allowWriteFile) {
        if (!fs.existsSync(filePath || defaultFilePath)) {
            fs.mkdirSync(path.dirname(filePath || defaultFilePath), { recursive: true });
        }
        fs.appendFileSync(filePath || defaultFilePath, data + '\n', 'utf8');
    } else {
        const minlogText = `minlog-js: "${chalk.yellowBright.bold("allowWriteFile")}" is "false". Use "${chalk.yellowBright.bold("setAllowToWriteFile(true)")}" to enable file writing.`;
        console.log(`${chalk.gray.bold(minlogText)}\n${chalk.gray.bold("Log not written to file")}`);
    }
}

export default {
    setAllowToWriteFile,
    setFilePath,
    isAllowToWriteFile,
    getFilePath,
    writeToFile
};