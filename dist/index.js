"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  file: () => file_exports,
  format: () => format_exports,
  minlog: () => minlog,
  style: () => style_exports
});
module.exports = __toCommonJS(index_exports);

// src/format.ts
var format_exports = {};
__export(format_exports, {
  createLogData: () => createLogData,
  default: () => format_default,
  format: () => format,
  getCurrentDate: () => getCurrentDate,
  getCurrentTime: () => getCurrentTime,
  setExceptionFormat: () => setExceptionFormat,
  setLevelText: () => setLevelText,
  setLogDateFormat: () => setLogDateFormat,
  setLogFormat: () => setLogFormat,
  setLogTimeFormat: () => setLogTimeFormat
});
var import_dayjs = __toESM(require("dayjs"));

// src/style.ts
var style_exports = {};
__export(style_exports, {
  createTextStyle: () => createTextStyle,
  decolorizeText: () => decolorizeText,
  default: () => style_default,
  getEventStyle: () => getEventStyle,
  getLevelStyle: () => getLevelStyle,
  getMessageStyle: () => getMessageStyle,
  getServiceStyle: () => getServiceStyle,
  printStyleAttributes: () => printStyleAttributes,
  restoreAllStylesToDefault: () => restoreAllStylesToDefault,
  restoreEventStyleToDefault: () => restoreEventStyleToDefault,
  restoreLevelStylesToDefault: () => restoreLevelStylesToDefault,
  restoreMessageStylesToDefault: () => restoreMessageStylesToDefault,
  restoreServiceStyleToDefault: () => restoreServiceStyleToDefault,
  setEventStyle: () => setEventStyle,
  setLevelStyle: () => setLevelStyle,
  setMessageStyle: () => setMessageStyle,
  setServiceStyle: () => setServiceStyle,
  stylizeEventText: () => stylizeEventText,
  stylizeLevelText: () => stylizeLevelText,
  stylizeMessageText: () => stylizeMessageText,
  stylizeServiceText: () => stylizeServiceText
});
var import_chalk = __toESM(require("chalk"));
var import_strip_ansi = __toESM(require("strip-ansi"));
var defaultLevelStyles = {
  info: { color: import_chalk.default.cyanBright, end: "", indent: 0, start: "" },
  warn: { color: import_chalk.default.yellowBright, end: "", indent: 0, start: "" },
  error: { color: import_chalk.default.redBright, end: "", indent: 0, start: "" },
  success: { color: import_chalk.default.greenBright, end: "", indent: 0, start: "" },
  debug: { color: import_chalk.default.gray, end: "", indent: 0, start: "" }
};
var defaultServiceStyles = {
  color: import_chalk.default.blueBright,
  end: "",
  indent: 0,
  start: ""
};
var defaultEventStyles = {
  color: import_chalk.default.magentaBright,
  end: "",
  indent: 0,
  start: " / "
};
var defaultMessageStyles = {
  info: { color: import_chalk.default.cyan, end: "", indent: 0, start: ", " },
  warn: { color: import_chalk.default.yellow, end: ",\n", indent: 4, start: "> " },
  error: { color: import_chalk.default.red, end: ",\n", indent: 4, start: "> " },
  success: { color: import_chalk.default.green, end: "", indent: 0, start: ", " },
  debug: { color: import_chalk.default.gray, end: ",\n", indent: 4, start: "" }
};
var levelStyles = __spreadValues({}, defaultLevelStyles);
var serviceStyle = __spreadValues({}, defaultServiceStyles);
var eventStyle = __spreadValues({}, defaultEventStyles);
var messageStyles = __spreadValues({}, defaultMessageStyles);
function createTextStyle(color, indent = 0, start = "", end = "") {
  return {
    color,
    indent,
    start,
    end
  };
}
function setLevelStyle(newStyles) {
  for (const key in newStyles) {
    levelStyles[key] = __spreadValues(__spreadValues({}, levelStyles[key]), newStyles[key]);
  }
}
function setServiceStyle(style) {
  Object.assign(serviceStyle, style || defaultServiceStyles);
}
function setEventStyle(style) {
  Object.assign(eventStyle, style || defaultEventStyles);
}
function setMessageStyle(newStyles) {
  for (const key in newStyles) {
    messageStyles[key] = __spreadValues(__spreadValues({}, messageStyles[key]), newStyles[key]);
  }
}
function restoreLevelStylesToDefault() {
  levelStyles = __spreadValues({}, defaultLevelStyles);
}
function restoreServiceStyleToDefault() {
  serviceStyle = __spreadValues({}, defaultServiceStyles);
}
function restoreEventStyleToDefault() {
  eventStyle = __spreadValues({}, defaultEventStyles);
}
function restoreMessageStylesToDefault() {
  messageStyles = __spreadValues({}, defaultMessageStyles);
}
function restoreAllStylesToDefault() {
  restoreLevelStylesToDefault();
  restoreServiceStyleToDefault();
  restoreEventStyleToDefault();
  restoreMessageStylesToDefault();
}
function getLevelStyle(level) {
  const _level = level.toLowerCase();
  return levelStyles[_level] || defaultLevelStyles[_level];
}
function getServiceStyle() {
  return serviceStyle || defaultServiceStyles;
}
function getEventStyle() {
  return eventStyle || defaultEventStyles;
}
function getMessageStyle(level) {
  const _level = level.toLowerCase();
  return messageStyles[_level] || defaultMessageStyles[_level];
}
function printStyleAttributes(style) {
  console.log("style Attributes:");
  console.log("  color: ", style.color("sample"));
  console.log("  indent:", style.indent);
  console.log("  start: ", JSON.stringify(style.start));
  console.log("  end:   ", JSON.stringify(style.end));
}
function stylizeText(text, style, colorizeStart = false, colorizeEnd = false) {
  const textArray = Array.isArray(text) ? text : [text];
  const colorizedStart = colorizeStart ? style.color(style.start) : style.start;
  const colorizedEnd = colorizeEnd ? style.color(style.end) : style.end;
  const _indent = " ".repeat(style.indent);
  return textArray.map((t) => {
    return `${_indent}${colorizedStart}${style.color(t)}`;
  }).join(colorizedEnd);
}
function stylizeLevelText(level, text, colorizeStart = false, colorizeEnd = false) {
  const style = getLevelStyle(level);
  return stylizeText(text, style, colorizeStart, colorizeEnd);
}
function stylizeServiceText(text, colorizeStart = false, colorizeEnd = false) {
  return stylizeText(text, serviceStyle, colorizeStart, colorizeEnd);
}
function stylizeEventText(text, colorizeStart = false, colorizeEnd = false) {
  return stylizeText(text, eventStyle, colorizeStart, colorizeEnd);
}
function stylizeMessageText(level, text, colorizeStart = false, colorizeEnd = false) {
  const style = getMessageStyle(level);
  return stylizeText(text, style, colorizeStart, colorizeEnd);
}
function decolorizeText(text) {
  return (0, import_strip_ansi.default)(text);
}
var style_default = {
  decolorizeText,
  createTextStyle,
  setLevelStyle,
  setServiceStyle,
  setEventStyle,
  setMessageStyle,
  restoreLevelStylesToDefault,
  restoreServiceStyleToDefault,
  restoreEventStyleToDefault,
  restoreMessageStylesToDefault,
  restoreAllStylesToDefault,
  getLevelStyle,
  getServiceStyle,
  getEventStyle,
  getMessageStyle,
  printStyleAttributes,
  stylizeLevelText,
  stylizeServiceText,
  stylizeEventText,
  stylizeMessageText
};

// src/format.ts
var dayjsInstace = (0, import_dayjs.default)();
var defaultLevelText = {
  debug: "DEBUG",
  info: "INFO",
  warn: "WARN",
  error: "ERROR",
  success: "SUCCESS"
};
var defaultFormats = {
  time: "YYYY-MM-DD HH:mm:ss",
  date: "YYYY-MM-DD",
  fmt: "$l | $t | $s$e:$m",
  exception: "$l | $t | $s$e:\n$m"
};
var levelText = __spreadValues({}, defaultLevelText);
var logFormat = __spreadValues({}, defaultFormats);
function setLevelText(level, text) {
  if (levelText[level] !== void 0) {
    levelText[level] = text || defaultLevelText[level];
  } else {
    throw new Error(`Level ${level} not found`);
  }
}
function setLogFormat(fmt) {
  if (fmt) {
    logFormat.fmt = fmt;
  }
}
function setExceptionFormat(fmt) {
  if (fmt) {
    logFormat.exception = fmt;
  }
}
function setLogTimeFormat(fmt) {
  if (fmt) {
    logFormat.time = fmt;
  }
}
function setLogDateFormat(fmt) {
  if (fmt) {
    logFormat.date = fmt;
  }
}
function getCurrentTime() {
  return (0, import_dayjs.default)().format(logFormat.time || defaultFormats.time);
}
function getCurrentDate() {
  return (0, import_dayjs.default)().format(logFormat.date || defaultFormats.date);
}
function createLogData(level, service, event, message) {
  return {
    level: levelText[level.toLowerCase()] || "_",
    time: getCurrentTime(),
    service,
    event,
    message
  };
}
function format(logData) {
  let _retfmt = logData.level !== "info" && logData.level !== "success" ? logFormat.exception : logFormat.fmt;
  return _retfmt.replace("$l", stylizeLevelText(logData.level, logData.level)).replace("$t", logData.time).replace("$s", stylizeServiceText(logData.service)).replace("$e", stylizeEventText(logData.event)).replace("$m", stylizeMessageText(logData.level, logData.message));
}
var format_default = {
  setLevelText,
  setLogFormat,
  setLogTimeFormat,
  getCurrentTime,
  createLogData,
  format
};

// src/file.ts
var file_exports = {};
__export(file_exports, {
  default: () => file_default,
  getFilePath: () => getFilePath,
  isAllowToWriteFile: () => isAllowToWriteFile,
  setAllowToWriteFile: () => setAllowToWriteFile,
  setFilePath: () => setFilePath,
  writeToFile: () => writeToFile
});
var import_chalk2 = __toESM(require("chalk"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var defaultFilePath = "./logs/latest.log";
var defaultAllowWriteFile = true;
var allowWriteFile = defaultAllowWriteFile;
var filePath = defaultFilePath;
function setAllowToWriteFile(value) {
  allowWriteFile = value;
}
function setFilePath(value) {
  if (value) {
    filePath = value;
  }
}
function isAllowToWriteFile() {
  return allowWriteFile;
}
function getFilePath() {
  return filePath;
}
function writeToFile(data) {
  if (allowWriteFile) {
    if (!import_fs.default.existsSync(filePath || defaultFilePath)) {
      import_fs.default.mkdirSync(import_path.default.dirname(filePath || defaultFilePath), { recursive: true });
    }
    import_fs.default.appendFileSync(filePath || defaultFilePath, data + "\n", "utf8");
  } else {
    const minlogText = `minlog-js: "${import_chalk2.default.yellowBright.bold("allowWriteFile")}" is "false". Use "${import_chalk2.default.yellowBright.bold("setAllowToWriteFile(true)")}" to enable file writing.`;
    console.log(`${import_chalk2.default.gray.bold(minlogText)}
${import_chalk2.default.gray.bold("Log not written to file")}`);
  }
}
var file_default = {
  setAllowToWriteFile,
  setFilePath,
  isAllowToWriteFile,
  getFilePath,
  writeToFile
};

// src/index.ts
function minlog(log) {
  let data = format(log);
  console.log(data);
  data = decolorizeText(data);
  if (isAllowToWriteFile()) {
    writeToFile(data);
  }
}
var index_default = {
  minlog,
  format: format_exports,
  file: file_exports,
  style: style_exports
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  file,
  format,
  minlog,
  style
});
//# sourceMappingURL=index.js.map