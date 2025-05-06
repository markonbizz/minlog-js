import chalk, { ChalkInstance } from "chalk";

// ====== Type Definitions ======

export type BaseTextStyle = {
    color: ChalkInstance;
    indent: number;
    end: string;
    start: string;
};

export type LevelTextStyle   = BaseTextStyle;
export type ServiceTextStyle = BaseTextStyle;
export type EventTextStyle   = BaseTextStyle;
export type MessageTextStyle = BaseTextStyle;

// ====== Defaults (Immutable) ======

const defaultLevelStyles: Record<string, LevelTextStyle> = {
    info:    { color: chalk.cyanBright,    end: "", indent: 0, start: "" },
    warn:    { color: chalk.yellowBright,  end: "", indent: 0, start: "" },
    error:   { color: chalk.redBright,     end: "", indent: 0, start: "" },
    success: { color: chalk.greenBright,   end: "", indent: 0, start: "" },
    debug:   { color: chalk.gray,          end: "", indent: 0, start: "" },
};

const defaultServiceStyles: ServiceTextStyle = {
    color: chalk.blueBright,
    end: "",
    indent: 0,
    start: "",
};

const defaultEventStyles: EventTextStyle = {
    color: chalk.magentaBright,
    end: "",
    indent: 0,
    start: "",
};

const defaultMessageStyles: Record<string, MessageTextStyle> = {
    info:    { color: chalk.cyan,    end: "",   indent: 0, start: ", " },
    warn:    { color: chalk.yellow,  end: ",\n", indent: 4, start: "> " },
    error:   { color: chalk.red,     end: ",\n", indent: 4, start: "> " },
    success: { color: chalk.green,   end: "",   indent: 0, start: ", " },
    debug:   { color: chalk.gray,    end: ",\n", indent: 4, start: "" },
};

// ====== Runtime Mutables ======

let levelStyles:    Record<string, LevelTextStyle> = { ...defaultLevelStyles };
let serviceStyle:   ServiceTextStyle = { ...defaultServiceStyles };
let eventStyle:     EventTextStyle = { ...defaultEventStyles };
let messageStyles:  Record<string, MessageTextStyle> = { ...defaultMessageStyles };

// ====== STYLE FACTORY ======

/**
 * Factory function to create a new text style
 */
export function createTextStyle(
    ...styles: Partial<BaseTextStyle>[]
): BaseTextStyle {
    const base: BaseTextStyle = {
        color: chalk.white,
        indent: 0,
        start: '',
        end: '',
    };

    const result: BaseTextStyle = { ...base };
    for (const style of styles) {
        for (const key in style) {
            if (style[key] !== undefined) {
                (result as any)[key] = style[key];
            }
        }
    }
    return result;
}

// ====== Setter Functions ======

/**
 * 
 * @param newStyles 
 */
export function setLevelStyle(newStyles: Record<string, LevelTextStyle>): void {
    for (const key in newStyles) {
        levelStyles[key] = {
            ...levelStyles[key],
            ...newStyles[key],
        };
    }
}

export function setServiceStyle(style: Partial<ServiceTextStyle>): void {
    Object.assign(serviceStyle, style);
}

export function setEventStyle(style: Partial<EventTextStyle>): void {
    Object.assign(eventStyle, style);
}

export function setMessageStyle(newStyles: Record<string, MessageTextStyle>): void {
    for (const key in newStyles) {
        messageStyles[key] = {
            ...messageStyles[key],
            ...newStyles[key],
        };
    }
}

// ====== Restore Function ======

export function restoreLevelStylesToDefault(): void {
    levelStyles = { ...defaultLevelStyles };
}

export function restoreServiceStyleToDefault(): void {
    serviceStyle = { ...defaultServiceStyles };
}

export function restoreEventStyleToDefault(): void {
    eventStyle = { ...defaultEventStyles };
}

export function restoreMessageStylesToDefault(): void {
    messageStyles = { ...defaultMessageStyles };
}

export function restoreAllStylesToDefault(): void {
    restoreLevelStylesToDefault();
    restoreServiceStyleToDefault();
    restoreEventStyleToDefault();
    restoreMessageStylesToDefault();
}

// ====== Getter Functions ======

export function getLevelStyle(level: string): LevelTextStyle {
    return levelStyles[level] || levelStyles.info;
}

export function getServiceStyle(): ServiceTextStyle {
    return serviceStyle;
}

export function getEventStyle(): EventTextStyle {
    return eventStyle;
}

export function getMessageStyle(level: string): MessageTextStyle {
    return messageStyles[level] || messageStyles.info;
}

// ====== Debug Functions ======

export function printStyleAttributes(style: BaseTextStyle): void {
    console.log("style Attributes:");
    console.log("  color: ", style.color("sample"));
    console.log("  indent:", style.indent);
    console.log("  start: ", JSON.stringify(style.start));
    console.log("  end:   ", JSON.stringify(style.end));
}

// ====== Stylize Functions ======

function stylizeText(text: string | string[], style: BaseTextStyle): string | string[] {
    if (Array.isArray(text)) {
        return text.map(_t => style.color(`${style.start}${_t}${style.end}`));
    }
    return style.color(`${style.start}${text}${style.end}`);
}

export function stylizeLevelText(level: string, text: string | string[]): string | string[] {
    const style = getLevelStyle(level);
    return stylizeText(text, style);
}

export function stylizeServiceText(text: string | string[]): string | string[] {
    return stylizeText(text, serviceStyle);
}

export function stylizeEventText(text: string | string[]): string | string[] {
    return stylizeText(text, eventStyle);
}

export function stylizeMessageText(level: string, text: string | string[]): string | string[] {
    const style = getMessageStyle(level);
    return stylizeText(text, style);
}
