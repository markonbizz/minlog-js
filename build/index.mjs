import $ from "moment";
import p from "traverse";
import o from "chalk";
import k from "strip-ansi";
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
function W(e) {
  p(u.level).forEach(function(t) {
    this.key === e.key && this.update(e.value);
  });
}
function N(e) {
  p(u.event).forEach(function(t) {
    this.key === e.key && this.update(e.value);
  });
}
function P(e) {
  p(u.message).forEach(function(t) {
    this.key === e.key && this.update(e.value);
  });
}
function b({ level: e, service: t, event: n = "", message: s = [""] }) {
  const c = (() => {
    const r = u.level.caseControl;
    return r === "upper" ? e.toUpperCase() : r === "lower" ? e.toLowerCase() : r === "capitalize" ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e;
  })(), g = n ? `${u.event.prefix || ""}${n}` : "", m = (() => {
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
    event: g,
    message: m
  };
}
let v = {
  debug: o.gray.dim,
  info: o.cyan,
  warn: o.yellow,
  error: o.red,
  fatal: o.redBright.bold,
  success: o.green,
  default: o.white
}, S = o.blueBright, L = o.magentaBright, _ = {
  debug: o.gray.dim,
  info: o.white,
  warn: o.yellow,
  error: o.red,
  fatal: o.redBright.bold
};
function J(e, t) {
  p(v).forEach(function(n) {
    this.key === e.toLowerCase() && this.update(t);
  });
}
function T(e) {
  S = e;
}
function q(e) {
  L = e;
}
function G(e, t) {
  p(_).forEach(function(n) {
    this.key === e.toLowerCase() && this.update(t);
  });
}
function E({ level: e, service: t, event: n = "", message: s = [""] }) {
  const c = v[e.toLowerCase()] || v.default, g = _[e.toLowerCase()] || o.white, m = c(e), r = S(t), a = n ? L(n) : "", d = [s].map((y) => g(y));
  return {
    level: m,
    service: r,
    event: a,
    message: d
  };
}
function D(e) {
  return k(e);
}
const h = {};
let l = null, C = !0;
function H(e) {
  typeof e == "boolean" && (C = e);
}
function K(e) {
  l = e || "logs/";
}
function Q() {
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
  const n = `${l}/${e}.log` || `${l}/latest.log`;
  h.existsSync(l) || h.mkdirSync(l, { recursive: !0 }), h.appendFile(n, t + `
`, (s) => {
    s && console.error(`minlog-js: error writing to log file:
`, s);
  });
}
function M() {
  const e = $(), t = e.format("YYYY-MM-DD"), n = e.format("h:mm:ss A");
  return { date: t, timeStamp: `${t} ${n}` };
}
function f(e, t, n, s) {
  const { date: c, timeStamp: g } = M(), m = b({ level: e, service: t, event: n, message: s }), r = E(m), a = I("%s | %s | %s %s: %s", g, r.level, r.service, r.event, r.message);
  console.log("%s", a), F() && z(`${c}`, D(a));
}
const j = {
  /**
   * @param {string} service - The name of the service.
   * @param {string} event - The name of the event.
   * @param {string[]} message - The message to log. 
   */
  info: (e, t, n) => f("info", e, t, n),
  /**
   * @param {string} service - The name of the service.
   * @param {string} event - The name of the event.
   * @param {string[]} message - The message to log. 
   */
  error: (e, t, n) => f("error", e, t, n),
  /**
   * @param {string} service - The name of the service.
   * @param {string} event - The name of the event.
   * @param {string[]} message - The message to log. 
   */
  fatal: (e, t, n) => f("fatal", e, t, n),
  /**
   * @param {string} service - The name of the service.
   * @param {string} event - The name of the event.
   * @param {string[]} message - The message to log. 
   */
  warn: (e, t, n) => f("warn", e, t, n),
  /**
   * @param {string} service - The name of the service.
   * @param {string} event - The name of the event.
   * @param {string[]} message - The message to log. 
   */
  debug: (e, t, n) => f("debug", e, t, n),
  /**
   * @param {string} service - The name of the service.
   * @param {string} event - The name of the event.
   * @param {string[]} message - The message to log. 
   */
  success: (e, t, n) => f("success", e, t, n)
};
function R() {
  return j;
}
export {
  R as Logger,
  Q as getLogDumpDir,
  F as isWriteFile,
  q as setEventColor,
  N as setEventStyles,
  H as setIsWriteFile,
  J as setLevelColor,
  W as setLevelStyles,
  K as setLogDumpDir,
  G as setMessageColor,
  P as setMessageStyles,
  T as setServiceColor
};
