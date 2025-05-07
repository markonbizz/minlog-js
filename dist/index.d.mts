import { ChalkInstance } from 'chalk';

type LogData = {
    level: string;
    time: string;
    service: string;
    event: string;
    message: string | string[];
};
/**
 * Customize the text for a specific log level if you want to
 * @param level
 * @param text
 */
declare function setLevelText(level: string, text: string): void;
/**
 * Get current time
 * @param fmt
 * @returns
 */
declare function getCurrentTime(fmt: string): string;
/**
 * Create log data
 * @param level
 * @param service
 * @param event
 * @param message
 * @returns
 */
declare function createLogData(level: string, service: string, event: string, message: string | string[]): LogData;
/**
 * Format & stylize log data
 * @param fmt
 * @param logData
 * @returns
 */
declare function format(fmt: string, logData: LogData): string;
declare const _default$3: {
    createLogData: typeof createLogData;
    format: typeof format;
    setLevelText: typeof setLevelText;
    getCurrentTime: typeof getCurrentTime;
};

type format$1_LogData = LogData;
declare const format$1_createLogData: typeof createLogData;
declare const format$1_format: typeof format;
declare const format$1_getCurrentTime: typeof getCurrentTime;
declare const format$1_setLevelText: typeof setLevelText;
declare namespace format$1 {
  export { type format$1_LogData as LogData, format$1_createLogData as createLogData, _default$3 as default, format$1_format as format, format$1_getCurrentTime as getCurrentTime, format$1_setLevelText as setLevelText };
}

/**
 * Set the allowWriteFile flag
 * @param value - if true, allow logger to write reports to file
 * @returns void
 */
declare function setAllowToWriteFile(value: boolean): void;
/**
 * Get the value of allowWriteFile flag
 * @returns boolean
 */
declare function isAllowToWriteFile(): boolean;
/**
 * Write log data to a file
 * @param filePath - the path to the file
 * @param data - the log data to write
 */
declare function writeToFile(filePath: string | null | undefined, data: string): void;
declare const _default$2: {
    setAllowToWriteFile: typeof setAllowToWriteFile;
    isAllowToWriteFile: typeof isAllowToWriteFile;
    writeToFile: typeof writeToFile;
};

declare const file_isAllowToWriteFile: typeof isAllowToWriteFile;
declare const file_setAllowToWriteFile: typeof setAllowToWriteFile;
declare const file_writeToFile: typeof writeToFile;
declare namespace file {
  export { _default$2 as default, file_isAllowToWriteFile as isAllowToWriteFile, file_setAllowToWriteFile as setAllowToWriteFile, file_writeToFile as writeToFile };
}

type BaseTextStyle = {
    color: ChalkInstance;
    indent: number;
    end: string;
    start: string;
};
type LevelTextStyle = BaseTextStyle;
type ServiceTextStyle = BaseTextStyle;
type EventTextStyle = BaseTextStyle;
type MessageTextStyle = BaseTextStyle;
/**
 * Factory function to create a new text style
 */
declare function createTextStyle(color: ChalkInstance, indent?: number, start?: string, end?: string): BaseTextStyle;
/**
 *
 * @param newStyles
 */
declare function setLevelStyle(newStyles: Record<string, LevelTextStyle>): void;
declare function setServiceStyle(style: Partial<ServiceTextStyle>): void;
declare function setEventStyle(style: Partial<EventTextStyle>): void;
declare function setMessageStyle(newStyles: Record<string, MessageTextStyle>): void;
declare function restoreLevelStylesToDefault(): void;
declare function restoreServiceStyleToDefault(): void;
declare function restoreEventStyleToDefault(): void;
declare function restoreMessageStylesToDefault(): void;
declare function restoreAllStylesToDefault(): void;
declare function getLevelStyle(level: string): LevelTextStyle;
declare function getServiceStyle(): ServiceTextStyle;
declare function getEventStyle(): EventTextStyle;
declare function getMessageStyle(level: string): MessageTextStyle;
declare function printStyleAttributes(style: BaseTextStyle): void;
declare function stylizeLevelText(level: string, text: string | string[], colorizeStart?: boolean, colorizeEnd?: boolean): string;
declare function stylizeServiceText(text: string | string[], colorizeStart?: boolean, colorizeEnd?: boolean): string;
declare function stylizeEventText(text: string | string[], colorizeStart?: boolean, colorizeEnd?: boolean): string;
declare function stylizeMessageText(level: string, text: string | string[], colorizeStart?: boolean, colorizeEnd?: boolean): string;
declare const _default$1: {
    createTextStyle: typeof createTextStyle;
    setLevelStyle: typeof setLevelStyle;
    setServiceStyle: typeof setServiceStyle;
    setEventStyle: typeof setEventStyle;
    setMessageStyle: typeof setMessageStyle;
    restoreLevelStylesToDefault: typeof restoreLevelStylesToDefault;
    restoreServiceStyleToDefault: typeof restoreServiceStyleToDefault;
    restoreEventStyleToDefault: typeof restoreEventStyleToDefault;
    restoreMessageStylesToDefault: typeof restoreMessageStylesToDefault;
    restoreAllStylesToDefault: typeof restoreAllStylesToDefault;
    getLevelStyle: typeof getLevelStyle;
    getServiceStyle: typeof getServiceStyle;
    getEventStyle: typeof getEventStyle;
    getMessageStyle: typeof getMessageStyle;
    printStyleAttributes: typeof printStyleAttributes;
    stylizeLevelText: typeof stylizeLevelText;
    stylizeServiceText: typeof stylizeServiceText;
    stylizeEventText: typeof stylizeEventText;
    stylizeMessageText: typeof stylizeMessageText;
};

type style_BaseTextStyle = BaseTextStyle;
type style_EventTextStyle = EventTextStyle;
type style_LevelTextStyle = LevelTextStyle;
type style_MessageTextStyle = MessageTextStyle;
type style_ServiceTextStyle = ServiceTextStyle;
declare const style_createTextStyle: typeof createTextStyle;
declare const style_getEventStyle: typeof getEventStyle;
declare const style_getLevelStyle: typeof getLevelStyle;
declare const style_getMessageStyle: typeof getMessageStyle;
declare const style_getServiceStyle: typeof getServiceStyle;
declare const style_printStyleAttributes: typeof printStyleAttributes;
declare const style_restoreAllStylesToDefault: typeof restoreAllStylesToDefault;
declare const style_restoreEventStyleToDefault: typeof restoreEventStyleToDefault;
declare const style_restoreLevelStylesToDefault: typeof restoreLevelStylesToDefault;
declare const style_restoreMessageStylesToDefault: typeof restoreMessageStylesToDefault;
declare const style_restoreServiceStyleToDefault: typeof restoreServiceStyleToDefault;
declare const style_setEventStyle: typeof setEventStyle;
declare const style_setLevelStyle: typeof setLevelStyle;
declare const style_setMessageStyle: typeof setMessageStyle;
declare const style_setServiceStyle: typeof setServiceStyle;
declare const style_stylizeEventText: typeof stylizeEventText;
declare const style_stylizeLevelText: typeof stylizeLevelText;
declare const style_stylizeMessageText: typeof stylizeMessageText;
declare const style_stylizeServiceText: typeof stylizeServiceText;
declare namespace style {
  export { type style_BaseTextStyle as BaseTextStyle, type style_EventTextStyle as EventTextStyle, type style_LevelTextStyle as LevelTextStyle, type style_MessageTextStyle as MessageTextStyle, type style_ServiceTextStyle as ServiceTextStyle, style_createTextStyle as createTextStyle, _default$1 as default, style_getEventStyle as getEventStyle, style_getLevelStyle as getLevelStyle, style_getMessageStyle as getMessageStyle, style_getServiceStyle as getServiceStyle, style_printStyleAttributes as printStyleAttributes, style_restoreAllStylesToDefault as restoreAllStylesToDefault, style_restoreEventStyleToDefault as restoreEventStyleToDefault, style_restoreLevelStylesToDefault as restoreLevelStylesToDefault, style_restoreMessageStylesToDefault as restoreMessageStylesToDefault, style_restoreServiceStyleToDefault as restoreServiceStyleToDefault, style_setEventStyle as setEventStyle, style_setLevelStyle as setLevelStyle, style_setMessageStyle as setMessageStyle, style_setServiceStyle as setServiceStyle, style_stylizeEventText as stylizeEventText, style_stylizeLevelText as stylizeLevelText, style_stylizeMessageText as stylizeMessageText, style_stylizeServiceText as stylizeServiceText };
}

declare function minlog(fmt: string, log: LogData): void;

declare const _default: {
    minlog: typeof minlog;
    format: typeof format$1;
    file: typeof file;
    style: typeof style;
};

export { _default as default, file, format$1 as format, minlog, style };
