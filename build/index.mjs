import $ from "moment";
import p from "traverse";
import n from "chalk";
import k from "strip-ansi";
import h from "fs";
import { sprintf as I } from "sprintf-js";
let u = {
  level: {
    caseControl: "upper"
  },
  event: {
    prefix: "> "
  },
  message: {
    prefixMessage: `
----- received following messages -----
`,
    indentStyle: "",
    nonInfoIndentStyle: "    > ",
    endStyle: ", ",
    nonInfoEndStyle: `
`
  }
};
function N(e) {
  p(u.level).forEach(function(t) {
    this.key === e.key && this.update(e.value);
  });
}
function P(e) {
  p(u.event).forEach(function(t) {
    this.key === e.key && this.update(e.value);
  });
}
function J(e) {
  p(u.message).forEach(function(t) {
    this.key === e.key && this.update(e.value);
  });
}
function b({ level: e, service: t, event: o = "", message: s = [""] }) {
  const c = (() => {
    const r = u.level.caseControl;
    return r === "upper" ? e.toUpperCase() : r === "lower" ? e.toLowerCase() : r === "capitalize" ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e;
  })(), m = o ? `${u.event.prefix || ""}${o}` : "", g = (() => {
    const {
      prefixMessage: r,
      indentStyle: a,
      nonInfoIndentStyle: d,
      endStyle: y,
      nonInfoEndStyle: x
    } = u.message, w = s.map((i) => typeof i == "object" ? JSON.stringify(i, null, 2) : String(i));
    return c !== "INFO" ? r + w.map((i) => `${d}${i}`).join(x) : w.map((i) => `${a}${i}`).join(y);
  })();
  return {
    level: c,
    service: t,
    event: m,
    message: g
  };
}
let v = {
  debug: n.gray.dim,
  info: n.cyan,
  warn: n.yellow,
  error: n.red,
  fatal: n.redBright.bold,
  success: n.green,
  default: n.white
}, S = n.blueBright, L = n.magentaBright, _ = {
  debug: n.gray.dim,
  info: n.white,
  warn: n.yellow,
  error: n.red,
  fatal: n.redBright.bold
};
function T(e, t) {
  p(v).forEach(function(o) {
    this.key === e.toLowerCase() && this.update(t);
  });
}
function q(e) {
  S = e;
}
function G(e) {
  L = e;
}
function H(e, t) {
  p(_).forEach(function(o) {
    this.key === e.toLowerCase() && this.update(t);
  });
}
function E({ level: e, service: t, event: o = "", message: s = [""] }) {
  const c = v[e.toLowerCase()] || v.default, m = _[e.toLowerCase()] || n.white, g = c(e), r = S(t), a = o ? L(o) : "", d = [s].map((y) => m(y));
  return {
    level: g,
    service: r,
    event: a,
    message: d
  };
}
function D(e) {
  return k(e);
}
let l = null, C = !0;
function K(e) {
  typeof e == "boolean" && (C = e);
}
function Q(e) {
  l = e || "logs/";
}
function R() {
  return l;
}
function F() {
  return C;
}
function z(e, t) {
  if (!l) {
    console.error("Log directory is not set. Use setLogDumpPath() to set the log directory.");
    return;
  }
  if (!C) return;
  const o = `${l}/${e}.log` || `${l}/latest.log`;
  h.existsSync(l) || h.mkdirSync(l, { recursive: !0 }), h.appendFile(o, t + `
`, (s) => {
    s && console.error(`minlog-js: error writing to log file:
`, s);
  });
}
function M() {
  const e = $(), t = e.format("YYYY-MM-DD"), o = e.format("h:mm:ss A");
  return { date: t, timeStamp: `${t} ${o}` };
}
function f(e, t, o, s) {
  const { date: c, timeStamp: m } = M(), g = b({ level: e, service: t, event: o, message: s }), r = E(g), a = I("%s | %s | %s %s: %s", m, r.level, r.service, r.event, r.message);
  console.log("%s", a), F() && z(`${c}`, D(a));
}
const j = {
  /**
   * @param {string} service - The name of the service.
   * @param {string} event - The name of the event.
   * @param {string[]} message - The message to log. 
   */
  info: (e, t, o) => f("info", e, t, o),
  /**
   * @param {string} service - The name of the service.
   * @param {string} event - The name of the event.
   * @param {string[]} message - The message to log. 
   */
  error: (e, t, o) => f("error", e, t, o),
  /**
   * @param {string} service - The name of the service.
   * @param {string} event - The name of the event.
   * @param {string[]} message - The message to log. 
   */
  fatal: (e, t, o) => f("fatal", e, t, o),
  /**
   * @param {string} service - The name of the service.
   * @param {string} event - The name of the event.
   * @param {string[]} message - The message to log. 
   */
  warn: (e, t, o) => f("warn", e, t, o),
  /**
   * @param {string} service - The name of the service.
   * @param {string} event - The name of the event.
   * @param {string[]} message - The message to log. 
   */
  debug: (e, t, o) => f("debug", e, t, o),
  /**
   * @param {string} service - The name of the service.
   * @param {string} event - The name of the event.
   * @param {string[]} message - The message to log. 
   */
  success: (e, t, o) => f("success", e, t, o)
};
function V() {
  return j;
}
export {
  V as Logger,
  R as getLogDumpDir,
  F as isWriteFile,
  G as setEventColor,
  P as setEventStyles,
  K as setIsWriteFile,
  T as setLevelColor,
  N as setLevelStyles,
  Q as setLogDumpDir,
  H as setMessageColor,
  J as setMessageStyles,
  q as setServiceColor
};
