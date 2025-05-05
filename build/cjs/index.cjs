'use strict';

var require$$0 = require('util');
var chalk = require('chalk');
var stripAnsi = require('strip-ansi');
var fs = require('fs');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var moment$2 = {exports: {}};

var moment$1 = moment$2.exports;

var hasRequiredMoment;

function requireMoment () {
	if (hasRequiredMoment) return moment$2.exports;
	hasRequiredMoment = 1;
	(function (module, exports) {
(function (global, factory) {
		    module.exports = factory() ;
		}(moment$1, (function () {
		    var hookCallback;

		    function hooks() {
		        return hookCallback.apply(null, arguments);
		    }

		    // This is done to register the method called with moment()
		    // without creating circular dependencies.
		    function setHookCallback(callback) {
		        hookCallback = callback;
		    }

		    function isArray(input) {
		        return (
		            input instanceof Array ||
		            Object.prototype.toString.call(input) === '[object Array]'
		        );
		    }

		    function isObject(input) {
		        // IE8 will treat undefined and null as object if it wasn't for
		        // input != null
		        return (
		            input != null &&
		            Object.prototype.toString.call(input) === '[object Object]'
		        );
		    }

		    function hasOwnProp(a, b) {
		        return Object.prototype.hasOwnProperty.call(a, b);
		    }

		    function isObjectEmpty(obj) {
		        if (Object.getOwnPropertyNames) {
		            return Object.getOwnPropertyNames(obj).length === 0;
		        } else {
		            var k;
		            for (k in obj) {
		                if (hasOwnProp(obj, k)) {
		                    return false;
		                }
		            }
		            return true;
		        }
		    }

		    function isUndefined(input) {
		        return input === void 0;
		    }

		    function isNumber(input) {
		        return (
		            typeof input === 'number' ||
		            Object.prototype.toString.call(input) === '[object Number]'
		        );
		    }

		    function isDate(input) {
		        return (
		            input instanceof Date ||
		            Object.prototype.toString.call(input) === '[object Date]'
		        );
		    }

		    function map(arr, fn) {
		        var res = [],
		            i,
		            arrLen = arr.length;
		        for (i = 0; i < arrLen; ++i) {
		            res.push(fn(arr[i], i));
		        }
		        return res;
		    }

		    function extend(a, b) {
		        for (var i in b) {
		            if (hasOwnProp(b, i)) {
		                a[i] = b[i];
		            }
		        }

		        if (hasOwnProp(b, 'toString')) {
		            a.toString = b.toString;
		        }

		        if (hasOwnProp(b, 'valueOf')) {
		            a.valueOf = b.valueOf;
		        }

		        return a;
		    }

		    function createUTC(input, format, locale, strict) {
		        return createLocalOrUTC(input, format, locale, strict, true).utc();
		    }

		    function defaultParsingFlags() {
		        // We need to deep clone this object.
		        return {
		            empty: false,
		            unusedTokens: [],
		            unusedInput: [],
		            overflow: -2,
		            charsLeftOver: 0,
		            nullInput: false,
		            invalidEra: null,
		            invalidMonth: null,
		            invalidFormat: false,
		            userInvalidated: false,
		            iso: false,
		            parsedDateParts: [],
		            era: null,
		            meridiem: null,
		            rfc2822: false,
		            weekdayMismatch: false,
		        };
		    }

		    function getParsingFlags(m) {
		        if (m._pf == null) {
		            m._pf = defaultParsingFlags();
		        }
		        return m._pf;
		    }

		    var some;
		    if (Array.prototype.some) {
		        some = Array.prototype.some;
		    } else {
		        some = function (fun) {
		            var t = Object(this),
		                len = t.length >>> 0,
		                i;

		            for (i = 0; i < len; i++) {
		                if (i in t && fun.call(this, t[i], i, t)) {
		                    return true;
		                }
		            }

		            return false;
		        };
		    }

		    function isValid(m) {
		        var flags = null,
		            parsedParts = false,
		            isNowValid = m._d && !isNaN(m._d.getTime());
		        if (isNowValid) {
		            flags = getParsingFlags(m);
		            parsedParts = some.call(flags.parsedDateParts, function (i) {
		                return i != null;
		            });
		            isNowValid =
		                flags.overflow < 0 &&
		                !flags.empty &&
		                !flags.invalidEra &&
		                !flags.invalidMonth &&
		                !flags.invalidWeekday &&
		                !flags.weekdayMismatch &&
		                !flags.nullInput &&
		                !flags.invalidFormat &&
		                !flags.userInvalidated &&
		                (!flags.meridiem || (flags.meridiem && parsedParts));
		            if (m._strict) {
		                isNowValid =
		                    isNowValid &&
		                    flags.charsLeftOver === 0 &&
		                    flags.unusedTokens.length === 0 &&
		                    flags.bigHour === undefined;
		            }
		        }
		        if (Object.isFrozen == null || !Object.isFrozen(m)) {
		            m._isValid = isNowValid;
		        } else {
		            return isNowValid;
		        }
		        return m._isValid;
		    }

		    function createInvalid(flags) {
		        var m = createUTC(NaN);
		        if (flags != null) {
		            extend(getParsingFlags(m), flags);
		        } else {
		            getParsingFlags(m).userInvalidated = true;
		        }

		        return m;
		    }

		    // Plugins that add properties should also add the key here (null value),
		    // so we can properly clone ourselves.
		    var momentProperties = (hooks.momentProperties = []),
		        updateInProgress = false;

		    function copyConfig(to, from) {
		        var i,
		            prop,
		            val,
		            momentPropertiesLen = momentProperties.length;

		        if (!isUndefined(from._isAMomentObject)) {
		            to._isAMomentObject = from._isAMomentObject;
		        }
		        if (!isUndefined(from._i)) {
		            to._i = from._i;
		        }
		        if (!isUndefined(from._f)) {
		            to._f = from._f;
		        }
		        if (!isUndefined(from._l)) {
		            to._l = from._l;
		        }
		        if (!isUndefined(from._strict)) {
		            to._strict = from._strict;
		        }
		        if (!isUndefined(from._tzm)) {
		            to._tzm = from._tzm;
		        }
		        if (!isUndefined(from._isUTC)) {
		            to._isUTC = from._isUTC;
		        }
		        if (!isUndefined(from._offset)) {
		            to._offset = from._offset;
		        }
		        if (!isUndefined(from._pf)) {
		            to._pf = getParsingFlags(from);
		        }
		        if (!isUndefined(from._locale)) {
		            to._locale = from._locale;
		        }

		        if (momentPropertiesLen > 0) {
		            for (i = 0; i < momentPropertiesLen; i++) {
		                prop = momentProperties[i];
		                val = from[prop];
		                if (!isUndefined(val)) {
		                    to[prop] = val;
		                }
		            }
		        }

		        return to;
		    }

		    // Moment prototype object
		    function Moment(config) {
		        copyConfig(this, config);
		        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
		        if (!this.isValid()) {
		            this._d = new Date(NaN);
		        }
		        // Prevent infinite loop in case updateOffset creates new moment
		        // objects.
		        if (updateInProgress === false) {
		            updateInProgress = true;
		            hooks.updateOffset(this);
		            updateInProgress = false;
		        }
		    }

		    function isMoment(obj) {
		        return (
		            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
		        );
		    }

		    function warn(msg) {
		        if (
		            hooks.suppressDeprecationWarnings === false &&
		            typeof console !== 'undefined' &&
		            console.warn
		        ) {
		            console.warn('Deprecation warning: ' + msg);
		        }
		    }

		    function deprecate(msg, fn) {
		        var firstTime = true;

		        return extend(function () {
		            if (hooks.deprecationHandler != null) {
		                hooks.deprecationHandler(null, msg);
		            }
		            if (firstTime) {
		                var args = [],
		                    arg,
		                    i,
		                    key,
		                    argLen = arguments.length;
		                for (i = 0; i < argLen; i++) {
		                    arg = '';
		                    if (typeof arguments[i] === 'object') {
		                        arg += '\n[' + i + '] ';
		                        for (key in arguments[0]) {
		                            if (hasOwnProp(arguments[0], key)) {
		                                arg += key + ': ' + arguments[0][key] + ', ';
		                            }
		                        }
		                        arg = arg.slice(0, -2); // Remove trailing comma and space
		                    } else {
		                        arg = arguments[i];
		                    }
		                    args.push(arg);
		                }
		                warn(
		                    msg +
		                        '\nArguments: ' +
		                        Array.prototype.slice.call(args).join('') +
		                        '\n' +
		                        new Error().stack
		                );
		                firstTime = false;
		            }
		            return fn.apply(this, arguments);
		        }, fn);
		    }

		    var deprecations = {};

		    function deprecateSimple(name, msg) {
		        if (hooks.deprecationHandler != null) {
		            hooks.deprecationHandler(name, msg);
		        }
		        if (!deprecations[name]) {
		            warn(msg);
		            deprecations[name] = true;
		        }
		    }

		    hooks.suppressDeprecationWarnings = false;
		    hooks.deprecationHandler = null;

		    function isFunction(input) {
		        return (
		            (typeof Function !== 'undefined' && input instanceof Function) ||
		            Object.prototype.toString.call(input) === '[object Function]'
		        );
		    }

		    function set(config) {
		        var prop, i;
		        for (i in config) {
		            if (hasOwnProp(config, i)) {
		                prop = config[i];
		                if (isFunction(prop)) {
		                    this[i] = prop;
		                } else {
		                    this['_' + i] = prop;
		                }
		            }
		        }
		        this._config = config;
		        // Lenient ordinal parsing accepts just a number in addition to
		        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
		        // TODO: Remove "ordinalParse" fallback in next major release.
		        this._dayOfMonthOrdinalParseLenient = new RegExp(
		            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
		                '|' +
		                /\d{1,2}/.source
		        );
		    }

		    function mergeConfigs(parentConfig, childConfig) {
		        var res = extend({}, parentConfig),
		            prop;
		        for (prop in childConfig) {
		            if (hasOwnProp(childConfig, prop)) {
		                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
		                    res[prop] = {};
		                    extend(res[prop], parentConfig[prop]);
		                    extend(res[prop], childConfig[prop]);
		                } else if (childConfig[prop] != null) {
		                    res[prop] = childConfig[prop];
		                } else {
		                    delete res[prop];
		                }
		            }
		        }
		        for (prop in parentConfig) {
		            if (
		                hasOwnProp(parentConfig, prop) &&
		                !hasOwnProp(childConfig, prop) &&
		                isObject(parentConfig[prop])
		            ) {
		                // make sure changes to properties don't modify parent config
		                res[prop] = extend({}, res[prop]);
		            }
		        }
		        return res;
		    }

		    function Locale(config) {
		        if (config != null) {
		            this.set(config);
		        }
		    }

		    var keys;

		    if (Object.keys) {
		        keys = Object.keys;
		    } else {
		        keys = function (obj) {
		            var i,
		                res = [];
		            for (i in obj) {
		                if (hasOwnProp(obj, i)) {
		                    res.push(i);
		                }
		            }
		            return res;
		        };
		    }

		    var defaultCalendar = {
		        sameDay: '[Today at] LT',
		        nextDay: '[Tomorrow at] LT',
		        nextWeek: 'dddd [at] LT',
		        lastDay: '[Yesterday at] LT',
		        lastWeek: '[Last] dddd [at] LT',
		        sameElse: 'L',
		    };

		    function calendar(key, mom, now) {
		        var output = this._calendar[key] || this._calendar['sameElse'];
		        return isFunction(output) ? output.call(mom, now) : output;
		    }

		    function zeroFill(number, targetLength, forceSign) {
		        var absNumber = '' + Math.abs(number),
		            zerosToFill = targetLength - absNumber.length,
		            sign = number >= 0;
		        return (
		            (sign ? (forceSign ? '+' : '') : '-') +
		            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
		            absNumber
		        );
		    }

		    var formattingTokens =
		            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		        formatFunctions = {},
		        formatTokenFunctions = {};

		    // token:    'M'
		    // padded:   ['MM', 2]
		    // ordinal:  'Mo'
		    // callback: function () { this.month() + 1 }
		    function addFormatToken(token, padded, ordinal, callback) {
		        var func = callback;
		        if (typeof callback === 'string') {
		            func = function () {
		                return this[callback]();
		            };
		        }
		        if (token) {
		            formatTokenFunctions[token] = func;
		        }
		        if (padded) {
		            formatTokenFunctions[padded[0]] = function () {
		                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
		            };
		        }
		        if (ordinal) {
		            formatTokenFunctions[ordinal] = function () {
		                return this.localeData().ordinal(
		                    func.apply(this, arguments),
		                    token
		                );
		            };
		        }
		    }

		    function removeFormattingTokens(input) {
		        if (input.match(/\[[\s\S]/)) {
		            return input.replace(/^\[|\]$/g, '');
		        }
		        return input.replace(/\\/g, '');
		    }

		    function makeFormatFunction(format) {
		        var array = format.match(formattingTokens),
		            i,
		            length;

		        for (i = 0, length = array.length; i < length; i++) {
		            if (formatTokenFunctions[array[i]]) {
		                array[i] = formatTokenFunctions[array[i]];
		            } else {
		                array[i] = removeFormattingTokens(array[i]);
		            }
		        }

		        return function (mom) {
		            var output = '',
		                i;
		            for (i = 0; i < length; i++) {
		                output += isFunction(array[i])
		                    ? array[i].call(mom, format)
		                    : array[i];
		            }
		            return output;
		        };
		    }

		    // format date using native date object
		    function formatMoment(m, format) {
		        if (!m.isValid()) {
		            return m.localeData().invalidDate();
		        }

		        format = expandFormat(format, m.localeData());
		        formatFunctions[format] =
		            formatFunctions[format] || makeFormatFunction(format);

		        return formatFunctions[format](m);
		    }

		    function expandFormat(format, locale) {
		        var i = 5;

		        function replaceLongDateFormatTokens(input) {
		            return locale.longDateFormat(input) || input;
		        }

		        localFormattingTokens.lastIndex = 0;
		        while (i >= 0 && localFormattingTokens.test(format)) {
		            format = format.replace(
		                localFormattingTokens,
		                replaceLongDateFormatTokens
		            );
		            localFormattingTokens.lastIndex = 0;
		            i -= 1;
		        }

		        return format;
		    }

		    var defaultLongDateFormat = {
		        LTS: 'h:mm:ss A',
		        LT: 'h:mm A',
		        L: 'MM/DD/YYYY',
		        LL: 'MMMM D, YYYY',
		        LLL: 'MMMM D, YYYY h:mm A',
		        LLLL: 'dddd, MMMM D, YYYY h:mm A',
		    };

		    function longDateFormat(key) {
		        var format = this._longDateFormat[key],
		            formatUpper = this._longDateFormat[key.toUpperCase()];

		        if (format || !formatUpper) {
		            return format;
		        }

		        this._longDateFormat[key] = formatUpper
		            .match(formattingTokens)
		            .map(function (tok) {
		                if (
		                    tok === 'MMMM' ||
		                    tok === 'MM' ||
		                    tok === 'DD' ||
		                    tok === 'dddd'
		                ) {
		                    return tok.slice(1);
		                }
		                return tok;
		            })
		            .join('');

		        return this._longDateFormat[key];
		    }

		    var defaultInvalidDate = 'Invalid date';

		    function invalidDate() {
		        return this._invalidDate;
		    }

		    var defaultOrdinal = '%d',
		        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

		    function ordinal(number) {
		        return this._ordinal.replace('%d', number);
		    }

		    var defaultRelativeTime = {
		        future: 'in %s',
		        past: '%s ago',
		        s: 'a few seconds',
		        ss: '%d seconds',
		        m: 'a minute',
		        mm: '%d minutes',
		        h: 'an hour',
		        hh: '%d hours',
		        d: 'a day',
		        dd: '%d days',
		        w: 'a week',
		        ww: '%d weeks',
		        M: 'a month',
		        MM: '%d months',
		        y: 'a year',
		        yy: '%d years',
		    };

		    function relativeTime(number, withoutSuffix, string, isFuture) {
		        var output = this._relativeTime[string];
		        return isFunction(output)
		            ? output(number, withoutSuffix, string, isFuture)
		            : output.replace(/%d/i, number);
		    }

		    function pastFuture(diff, output) {
		        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
		        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
		    }

		    var aliases = {
		        D: 'date',
		        dates: 'date',
		        date: 'date',
		        d: 'day',
		        days: 'day',
		        day: 'day',
		        e: 'weekday',
		        weekdays: 'weekday',
		        weekday: 'weekday',
		        E: 'isoWeekday',
		        isoweekdays: 'isoWeekday',
		        isoweekday: 'isoWeekday',
		        DDD: 'dayOfYear',
		        dayofyears: 'dayOfYear',
		        dayofyear: 'dayOfYear',
		        h: 'hour',
		        hours: 'hour',
		        hour: 'hour',
		        ms: 'millisecond',
		        milliseconds: 'millisecond',
		        millisecond: 'millisecond',
		        m: 'minute',
		        minutes: 'minute',
		        minute: 'minute',
		        M: 'month',
		        months: 'month',
		        month: 'month',
		        Q: 'quarter',
		        quarters: 'quarter',
		        quarter: 'quarter',
		        s: 'second',
		        seconds: 'second',
		        second: 'second',
		        gg: 'weekYear',
		        weekyears: 'weekYear',
		        weekyear: 'weekYear',
		        GG: 'isoWeekYear',
		        isoweekyears: 'isoWeekYear',
		        isoweekyear: 'isoWeekYear',
		        w: 'week',
		        weeks: 'week',
		        week: 'week',
		        W: 'isoWeek',
		        isoweeks: 'isoWeek',
		        isoweek: 'isoWeek',
		        y: 'year',
		        years: 'year',
		        year: 'year',
		    };

		    function normalizeUnits(units) {
		        return typeof units === 'string'
		            ? aliases[units] || aliases[units.toLowerCase()]
		            : undefined;
		    }

		    function normalizeObjectUnits(inputObject) {
		        var normalizedInput = {},
		            normalizedProp,
		            prop;

		        for (prop in inputObject) {
		            if (hasOwnProp(inputObject, prop)) {
		                normalizedProp = normalizeUnits(prop);
		                if (normalizedProp) {
		                    normalizedInput[normalizedProp] = inputObject[prop];
		                }
		            }
		        }

		        return normalizedInput;
		    }

		    var priorities = {
		        date: 9,
		        day: 11,
		        weekday: 11,
		        isoWeekday: 11,
		        dayOfYear: 4,
		        hour: 13,
		        millisecond: 16,
		        minute: 14,
		        month: 8,
		        quarter: 7,
		        second: 15,
		        weekYear: 1,
		        isoWeekYear: 1,
		        week: 5,
		        isoWeek: 5,
		        year: 1,
		    };

		    function getPrioritizedUnits(unitsObj) {
		        var units = [],
		            u;
		        for (u in unitsObj) {
		            if (hasOwnProp(unitsObj, u)) {
		                units.push({ unit: u, priority: priorities[u] });
		            }
		        }
		        units.sort(function (a, b) {
		            return a.priority - b.priority;
		        });
		        return units;
		    }

		    var match1 = /\d/, //       0 - 9
		        match2 = /\d\d/, //      00 - 99
		        match3 = /\d{3}/, //     000 - 999
		        match4 = /\d{4}/, //    0000 - 9999
		        match6 = /[+-]?\d{6}/, // -999999 - 999999
		        match1to2 = /\d\d?/, //       0 - 99
		        match3to4 = /\d\d\d\d?/, //     999 - 9999
		        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
		        match1to3 = /\d{1,3}/, //       0 - 999
		        match1to4 = /\d{1,4}/, //       0 - 9999
		        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
		        matchUnsigned = /\d+/, //       0 - inf
		        matchSigned = /[+-]?\d+/, //    -inf - inf
		        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
		        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
		        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
		        // any word (or two) characters or numbers including two/three word month in arabic.
		        // includes scottish gaelic two word and hyphenated months
		        matchWord =
		            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
		        match1to2NoLeadingZero = /^[1-9]\d?/, //         1-99
		        match1to2HasZero = /^([1-9]\d|\d)/, //           0-99
		        regexes;

		    regexes = {};

		    function addRegexToken(token, regex, strictRegex) {
		        regexes[token] = isFunction(regex)
		            ? regex
		            : function (isStrict, localeData) {
		                  return isStrict && strictRegex ? strictRegex : regex;
		              };
		    }

		    function getParseRegexForToken(token, config) {
		        if (!hasOwnProp(regexes, token)) {
		            return new RegExp(unescapeFormat(token));
		        }

		        return regexes[token](config._strict, config._locale);
		    }

		    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
		    function unescapeFormat(s) {
		        return regexEscape(
		            s
		                .replace('\\', '')
		                .replace(
		                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
		                    function (matched, p1, p2, p3, p4) {
		                        return p1 || p2 || p3 || p4;
		                    }
		                )
		        );
		    }

		    function regexEscape(s) {
		        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		    }

		    function absFloor(number) {
		        if (number < 0) {
		            // -0 -> 0
		            return Math.ceil(number) || 0;
		        } else {
		            return Math.floor(number);
		        }
		    }

		    function toInt(argumentForCoercion) {
		        var coercedNumber = +argumentForCoercion,
		            value = 0;

		        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
		            value = absFloor(coercedNumber);
		        }

		        return value;
		    }

		    var tokens = {};

		    function addParseToken(token, callback) {
		        var i,
		            func = callback,
		            tokenLen;
		        if (typeof token === 'string') {
		            token = [token];
		        }
		        if (isNumber(callback)) {
		            func = function (input, array) {
		                array[callback] = toInt(input);
		            };
		        }
		        tokenLen = token.length;
		        for (i = 0; i < tokenLen; i++) {
		            tokens[token[i]] = func;
		        }
		    }

		    function addWeekParseToken(token, callback) {
		        addParseToken(token, function (input, array, config, token) {
		            config._w = config._w || {};
		            callback(input, config._w, config, token);
		        });
		    }

		    function addTimeToArrayFromToken(token, input, config) {
		        if (input != null && hasOwnProp(tokens, token)) {
		            tokens[token](input, config._a, config, token);
		        }
		    }

		    function isLeapYear(year) {
		        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
		    }

		    var YEAR = 0,
		        MONTH = 1,
		        DATE = 2,
		        HOUR = 3,
		        MINUTE = 4,
		        SECOND = 5,
		        MILLISECOND = 6,
		        WEEK = 7,
		        WEEKDAY = 8;

		    // FORMATTING

		    addFormatToken('Y', 0, 0, function () {
		        var y = this.year();
		        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
		    });

		    addFormatToken(0, ['YY', 2], 0, function () {
		        return this.year() % 100;
		    });

		    addFormatToken(0, ['YYYY', 4], 0, 'year');
		    addFormatToken(0, ['YYYYY', 5], 0, 'year');
		    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

		    // PARSING

		    addRegexToken('Y', matchSigned);
		    addRegexToken('YY', match1to2, match2);
		    addRegexToken('YYYY', match1to4, match4);
		    addRegexToken('YYYYY', match1to6, match6);
		    addRegexToken('YYYYYY', match1to6, match6);

		    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
		    addParseToken('YYYY', function (input, array) {
		        array[YEAR] =
		            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
		    });
		    addParseToken('YY', function (input, array) {
		        array[YEAR] = hooks.parseTwoDigitYear(input);
		    });
		    addParseToken('Y', function (input, array) {
		        array[YEAR] = parseInt(input, 10);
		    });

		    // HELPERS

		    function daysInYear(year) {
		        return isLeapYear(year) ? 366 : 365;
		    }

		    // HOOKS

		    hooks.parseTwoDigitYear = function (input) {
		        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
		    };

		    // MOMENTS

		    var getSetYear = makeGetSet('FullYear', true);

		    function getIsLeapYear() {
		        return isLeapYear(this.year());
		    }

		    function makeGetSet(unit, keepTime) {
		        return function (value) {
		            if (value != null) {
		                set$1(this, unit, value);
		                hooks.updateOffset(this, keepTime);
		                return this;
		            } else {
		                return get(this, unit);
		            }
		        };
		    }

		    function get(mom, unit) {
		        if (!mom.isValid()) {
		            return NaN;
		        }

		        var d = mom._d,
		            isUTC = mom._isUTC;

		        switch (unit) {
		            case 'Milliseconds':
		                return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
		            case 'Seconds':
		                return isUTC ? d.getUTCSeconds() : d.getSeconds();
		            case 'Minutes':
		                return isUTC ? d.getUTCMinutes() : d.getMinutes();
		            case 'Hours':
		                return isUTC ? d.getUTCHours() : d.getHours();
		            case 'Date':
		                return isUTC ? d.getUTCDate() : d.getDate();
		            case 'Day':
		                return isUTC ? d.getUTCDay() : d.getDay();
		            case 'Month':
		                return isUTC ? d.getUTCMonth() : d.getMonth();
		            case 'FullYear':
		                return isUTC ? d.getUTCFullYear() : d.getFullYear();
		            default:
		                return NaN; // Just in case
		        }
		    }

		    function set$1(mom, unit, value) {
		        var d, isUTC, year, month, date;

		        if (!mom.isValid() || isNaN(value)) {
		            return;
		        }

		        d = mom._d;
		        isUTC = mom._isUTC;

		        switch (unit) {
		            case 'Milliseconds':
		                return void (isUTC
		                    ? d.setUTCMilliseconds(value)
		                    : d.setMilliseconds(value));
		            case 'Seconds':
		                return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
		            case 'Minutes':
		                return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
		            case 'Hours':
		                return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
		            case 'Date':
		                return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
		            // case 'Day': // Not real
		            //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
		            // case 'Month': // Not used because we need to pass two variables
		            //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
		            case 'FullYear':
		                break; // See below ...
		            default:
		                return; // Just in case
		        }

		        year = value;
		        month = mom.month();
		        date = mom.date();
		        date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
		        void (isUTC
		            ? d.setUTCFullYear(year, month, date)
		            : d.setFullYear(year, month, date));
		    }

		    // MOMENTS

		    function stringGet(units) {
		        units = normalizeUnits(units);
		        if (isFunction(this[units])) {
		            return this[units]();
		        }
		        return this;
		    }

		    function stringSet(units, value) {
		        if (typeof units === 'object') {
		            units = normalizeObjectUnits(units);
		            var prioritized = getPrioritizedUnits(units),
		                i,
		                prioritizedLen = prioritized.length;
		            for (i = 0; i < prioritizedLen; i++) {
		                this[prioritized[i].unit](units[prioritized[i].unit]);
		            }
		        } else {
		            units = normalizeUnits(units);
		            if (isFunction(this[units])) {
		                return this[units](value);
		            }
		        }
		        return this;
		    }

		    function mod(n, x) {
		        return ((n % x) + x) % x;
		    }

		    var indexOf;

		    if (Array.prototype.indexOf) {
		        indexOf = Array.prototype.indexOf;
		    } else {
		        indexOf = function (o) {
		            // I know
		            var i;
		            for (i = 0; i < this.length; ++i) {
		                if (this[i] === o) {
		                    return i;
		                }
		            }
		            return -1;
		        };
		    }

		    function daysInMonth(year, month) {
		        if (isNaN(year) || isNaN(month)) {
		            return NaN;
		        }
		        var modMonth = mod(month, 12);
		        year += (month - modMonth) / 12;
		        return modMonth === 1
		            ? isLeapYear(year)
		                ? 29
		                : 28
		            : 31 - ((modMonth % 7) % 2);
		    }

		    // FORMATTING

		    addFormatToken('M', ['MM', 2], 'Mo', function () {
		        return this.month() + 1;
		    });

		    addFormatToken('MMM', 0, 0, function (format) {
		        return this.localeData().monthsShort(this, format);
		    });

		    addFormatToken('MMMM', 0, 0, function (format) {
		        return this.localeData().months(this, format);
		    });

		    // PARSING

		    addRegexToken('M', match1to2, match1to2NoLeadingZero);
		    addRegexToken('MM', match1to2, match2);
		    addRegexToken('MMM', function (isStrict, locale) {
		        return locale.monthsShortRegex(isStrict);
		    });
		    addRegexToken('MMMM', function (isStrict, locale) {
		        return locale.monthsRegex(isStrict);
		    });

		    addParseToken(['M', 'MM'], function (input, array) {
		        array[MONTH] = toInt(input) - 1;
		    });

		    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
		        var month = config._locale.monthsParse(input, token, config._strict);
		        // if we didn't find a month name, mark the date as invalid.
		        if (month != null) {
		            array[MONTH] = month;
		        } else {
		            getParsingFlags(config).invalidMonth = input;
		        }
		    });

		    // LOCALES

		    var defaultLocaleMonths =
		            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
		                '_'
		            ),
		        defaultLocaleMonthsShort =
		            'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
		        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
		        defaultMonthsShortRegex = matchWord,
		        defaultMonthsRegex = matchWord;

		    function localeMonths(m, format) {
		        if (!m) {
		            return isArray(this._months)
		                ? this._months
		                : this._months['standalone'];
		        }
		        return isArray(this._months)
		            ? this._months[m.month()]
		            : this._months[
		                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
		                      ? 'format'
		                      : 'standalone'
		              ][m.month()];
		    }

		    function localeMonthsShort(m, format) {
		        if (!m) {
		            return isArray(this._monthsShort)
		                ? this._monthsShort
		                : this._monthsShort['standalone'];
		        }
		        return isArray(this._monthsShort)
		            ? this._monthsShort[m.month()]
		            : this._monthsShort[
		                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
		              ][m.month()];
		    }

		    function handleStrictParse(monthName, format, strict) {
		        var i,
		            ii,
		            mom,
		            llc = monthName.toLocaleLowerCase();
		        if (!this._monthsParse) {
		            // this is not used
		            this._monthsParse = [];
		            this._longMonthsParse = [];
		            this._shortMonthsParse = [];
		            for (i = 0; i < 12; ++i) {
		                mom = createUTC([2000, i]);
		                this._shortMonthsParse[i] = this.monthsShort(
		                    mom,
		                    ''
		                ).toLocaleLowerCase();
		                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
		            }
		        }

		        if (strict) {
		            if (format === 'MMM') {
		                ii = indexOf.call(this._shortMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._longMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        } else {
		            if (format === 'MMM') {
		                ii = indexOf.call(this._shortMonthsParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._longMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._longMonthsParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._shortMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        }
		    }

		    function localeMonthsParse(monthName, format, strict) {
		        var i, mom, regex;

		        if (this._monthsParseExact) {
		            return handleStrictParse.call(this, monthName, format, strict);
		        }

		        if (!this._monthsParse) {
		            this._monthsParse = [];
		            this._longMonthsParse = [];
		            this._shortMonthsParse = [];
		        }

		        // TODO: add sorting
		        // Sorting makes sure if one month (or abbr) is a prefix of another
		        // see sorting in computeMonthsParse
		        for (i = 0; i < 12; i++) {
		            // make the regex if we don't have it already
		            mom = createUTC([2000, i]);
		            if (strict && !this._longMonthsParse[i]) {
		                this._longMonthsParse[i] = new RegExp(
		                    '^' + this.months(mom, '').replace('.', '') + '$',
		                    'i'
		                );
		                this._shortMonthsParse[i] = new RegExp(
		                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
		                    'i'
		                );
		            }
		            if (!strict && !this._monthsParse[i]) {
		                regex =
		                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
		                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
		            }
		            // test the regex
		            if (
		                strict &&
		                format === 'MMMM' &&
		                this._longMonthsParse[i].test(monthName)
		            ) {
		                return i;
		            } else if (
		                strict &&
		                format === 'MMM' &&
		                this._shortMonthsParse[i].test(monthName)
		            ) {
		                return i;
		            } else if (!strict && this._monthsParse[i].test(monthName)) {
		                return i;
		            }
		        }
		    }

		    // MOMENTS

		    function setMonth(mom, value) {
		        if (!mom.isValid()) {
		            // No op
		            return mom;
		        }

		        if (typeof value === 'string') {
		            if (/^\d+$/.test(value)) {
		                value = toInt(value);
		            } else {
		                value = mom.localeData().monthsParse(value);
		                // TODO: Another silent failure?
		                if (!isNumber(value)) {
		                    return mom;
		                }
		            }
		        }

		        var month = value,
		            date = mom.date();

		        date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
		        void (mom._isUTC
		            ? mom._d.setUTCMonth(month, date)
		            : mom._d.setMonth(month, date));
		        return mom;
		    }

		    function getSetMonth(value) {
		        if (value != null) {
		            setMonth(this, value);
		            hooks.updateOffset(this, true);
		            return this;
		        } else {
		            return get(this, 'Month');
		        }
		    }

		    function getDaysInMonth() {
		        return daysInMonth(this.year(), this.month());
		    }

		    function monthsShortRegex(isStrict) {
		        if (this._monthsParseExact) {
		            if (!hasOwnProp(this, '_monthsRegex')) {
		                computeMonthsParse.call(this);
		            }
		            if (isStrict) {
		                return this._monthsShortStrictRegex;
		            } else {
		                return this._monthsShortRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_monthsShortRegex')) {
		                this._monthsShortRegex = defaultMonthsShortRegex;
		            }
		            return this._monthsShortStrictRegex && isStrict
		                ? this._monthsShortStrictRegex
		                : this._monthsShortRegex;
		        }
		    }

		    function monthsRegex(isStrict) {
		        if (this._monthsParseExact) {
		            if (!hasOwnProp(this, '_monthsRegex')) {
		                computeMonthsParse.call(this);
		            }
		            if (isStrict) {
		                return this._monthsStrictRegex;
		            } else {
		                return this._monthsRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_monthsRegex')) {
		                this._monthsRegex = defaultMonthsRegex;
		            }
		            return this._monthsStrictRegex && isStrict
		                ? this._monthsStrictRegex
		                : this._monthsRegex;
		        }
		    }

		    function computeMonthsParse() {
		        function cmpLenRev(a, b) {
		            return b.length - a.length;
		        }

		        var shortPieces = [],
		            longPieces = [],
		            mixedPieces = [],
		            i,
		            mom,
		            shortP,
		            longP;
		        for (i = 0; i < 12; i++) {
		            // make the regex if we don't have it already
		            mom = createUTC([2000, i]);
		            shortP = regexEscape(this.monthsShort(mom, ''));
		            longP = regexEscape(this.months(mom, ''));
		            shortPieces.push(shortP);
		            longPieces.push(longP);
		            mixedPieces.push(longP);
		            mixedPieces.push(shortP);
		        }
		        // Sorting makes sure if one month (or abbr) is a prefix of another it
		        // will match the longer piece.
		        shortPieces.sort(cmpLenRev);
		        longPieces.sort(cmpLenRev);
		        mixedPieces.sort(cmpLenRev);

		        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		        this._monthsShortRegex = this._monthsRegex;
		        this._monthsStrictRegex = new RegExp(
		            '^(' + longPieces.join('|') + ')',
		            'i'
		        );
		        this._monthsShortStrictRegex = new RegExp(
		            '^(' + shortPieces.join('|') + ')',
		            'i'
		        );
		    }

		    function createDate(y, m, d, h, M, s, ms) {
		        // can't just apply() to create a date:
		        // https://stackoverflow.com/q/181348
		        var date;
		        // the date constructor remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            // preserve leap years using a full 400 year cycle, then reset
		            date = new Date(y + 400, m, d, h, M, s, ms);
		            if (isFinite(date.getFullYear())) {
		                date.setFullYear(y);
		            }
		        } else {
		            date = new Date(y, m, d, h, M, s, ms);
		        }

		        return date;
		    }

		    function createUTCDate(y) {
		        var date, args;
		        // the Date.UTC function remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            args = Array.prototype.slice.call(arguments);
		            // preserve leap years using a full 400 year cycle, then reset
		            args[0] = y + 400;
		            date = new Date(Date.UTC.apply(null, args));
		            if (isFinite(date.getUTCFullYear())) {
		                date.setUTCFullYear(y);
		            }
		        } else {
		            date = new Date(Date.UTC.apply(null, arguments));
		        }

		        return date;
		    }

		    // start-of-first-week - start-of-year
		    function firstWeekOffset(year, dow, doy) {
		        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
		            fwd = 7 + dow - doy,
		            // first-week day local weekday -- which local weekday is fwd
		            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

		        return -fwdlw + fwd - 1;
		    }

		    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
		    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
		        var localWeekday = (7 + weekday - dow) % 7,
		            weekOffset = firstWeekOffset(year, dow, doy),
		            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
		            resYear,
		            resDayOfYear;

		        if (dayOfYear <= 0) {
		            resYear = year - 1;
		            resDayOfYear = daysInYear(resYear) + dayOfYear;
		        } else if (dayOfYear > daysInYear(year)) {
		            resYear = year + 1;
		            resDayOfYear = dayOfYear - daysInYear(year);
		        } else {
		            resYear = year;
		            resDayOfYear = dayOfYear;
		        }

		        return {
		            year: resYear,
		            dayOfYear: resDayOfYear,
		        };
		    }

		    function weekOfYear(mom, dow, doy) {
		        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
		            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
		            resWeek,
		            resYear;

		        if (week < 1) {
		            resYear = mom.year() - 1;
		            resWeek = week + weeksInYear(resYear, dow, doy);
		        } else if (week > weeksInYear(mom.year(), dow, doy)) {
		            resWeek = week - weeksInYear(mom.year(), dow, doy);
		            resYear = mom.year() + 1;
		        } else {
		            resYear = mom.year();
		            resWeek = week;
		        }

		        return {
		            week: resWeek,
		            year: resYear,
		        };
		    }

		    function weeksInYear(year, dow, doy) {
		        var weekOffset = firstWeekOffset(year, dow, doy),
		            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
		        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
		    }

		    // FORMATTING

		    addFormatToken('w', ['ww', 2], 'wo', 'week');
		    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

		    // PARSING

		    addRegexToken('w', match1to2, match1to2NoLeadingZero);
		    addRegexToken('ww', match1to2, match2);
		    addRegexToken('W', match1to2, match1to2NoLeadingZero);
		    addRegexToken('WW', match1to2, match2);

		    addWeekParseToken(
		        ['w', 'ww', 'W', 'WW'],
		        function (input, week, config, token) {
		            week[token.substr(0, 1)] = toInt(input);
		        }
		    );

		    // HELPERS

		    // LOCALES

		    function localeWeek(mom) {
		        return weekOfYear(mom, this._week.dow, this._week.doy).week;
		    }

		    var defaultLocaleWeek = {
		        dow: 0, // Sunday is the first day of the week.
		        doy: 6, // The week that contains Jan 6th is the first week of the year.
		    };

		    function localeFirstDayOfWeek() {
		        return this._week.dow;
		    }

		    function localeFirstDayOfYear() {
		        return this._week.doy;
		    }

		    // MOMENTS

		    function getSetWeek(input) {
		        var week = this.localeData().week(this);
		        return input == null ? week : this.add((input - week) * 7, 'd');
		    }

		    function getSetISOWeek(input) {
		        var week = weekOfYear(this, 1, 4).week;
		        return input == null ? week : this.add((input - week) * 7, 'd');
		    }

		    // FORMATTING

		    addFormatToken('d', 0, 'do', 'day');

		    addFormatToken('dd', 0, 0, function (format) {
		        return this.localeData().weekdaysMin(this, format);
		    });

		    addFormatToken('ddd', 0, 0, function (format) {
		        return this.localeData().weekdaysShort(this, format);
		    });

		    addFormatToken('dddd', 0, 0, function (format) {
		        return this.localeData().weekdays(this, format);
		    });

		    addFormatToken('e', 0, 0, 'weekday');
		    addFormatToken('E', 0, 0, 'isoWeekday');

		    // PARSING

		    addRegexToken('d', match1to2);
		    addRegexToken('e', match1to2);
		    addRegexToken('E', match1to2);
		    addRegexToken('dd', function (isStrict, locale) {
		        return locale.weekdaysMinRegex(isStrict);
		    });
		    addRegexToken('ddd', function (isStrict, locale) {
		        return locale.weekdaysShortRegex(isStrict);
		    });
		    addRegexToken('dddd', function (isStrict, locale) {
		        return locale.weekdaysRegex(isStrict);
		    });

		    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
		        var weekday = config._locale.weekdaysParse(input, token, config._strict);
		        // if we didn't get a weekday name, mark the date as invalid
		        if (weekday != null) {
		            week.d = weekday;
		        } else {
		            getParsingFlags(config).invalidWeekday = input;
		        }
		    });

		    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
		        week[token] = toInt(input);
		    });

		    // HELPERS

		    function parseWeekday(input, locale) {
		        if (typeof input !== 'string') {
		            return input;
		        }

		        if (!isNaN(input)) {
		            return parseInt(input, 10);
		        }

		        input = locale.weekdaysParse(input);
		        if (typeof input === 'number') {
		            return input;
		        }

		        return null;
		    }

		    function parseIsoWeekday(input, locale) {
		        if (typeof input === 'string') {
		            return locale.weekdaysParse(input) % 7 || 7;
		        }
		        return isNaN(input) ? null : input;
		    }

		    // LOCALES
		    function shiftWeekdays(ws, n) {
		        return ws.slice(n, 7).concat(ws.slice(0, n));
		    }

		    var defaultLocaleWeekdays =
		            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
		        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
		        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
		        defaultWeekdaysRegex = matchWord,
		        defaultWeekdaysShortRegex = matchWord,
		        defaultWeekdaysMinRegex = matchWord;

		    function localeWeekdays(m, format) {
		        var weekdays = isArray(this._weekdays)
		            ? this._weekdays
		            : this._weekdays[
		                  m && m !== true && this._weekdays.isFormat.test(format)
		                      ? 'format'
		                      : 'standalone'
		              ];
		        return m === true
		            ? shiftWeekdays(weekdays, this._week.dow)
		            : m
		              ? weekdays[m.day()]
		              : weekdays;
		    }

		    function localeWeekdaysShort(m) {
		        return m === true
		            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
		            : m
		              ? this._weekdaysShort[m.day()]
		              : this._weekdaysShort;
		    }

		    function localeWeekdaysMin(m) {
		        return m === true
		            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
		            : m
		              ? this._weekdaysMin[m.day()]
		              : this._weekdaysMin;
		    }

		    function handleStrictParse$1(weekdayName, format, strict) {
		        var i,
		            ii,
		            mom,
		            llc = weekdayName.toLocaleLowerCase();
		        if (!this._weekdaysParse) {
		            this._weekdaysParse = [];
		            this._shortWeekdaysParse = [];
		            this._minWeekdaysParse = [];

		            for (i = 0; i < 7; ++i) {
		                mom = createUTC([2000, 1]).day(i);
		                this._minWeekdaysParse[i] = this.weekdaysMin(
		                    mom,
		                    ''
		                ).toLocaleLowerCase();
		                this._shortWeekdaysParse[i] = this.weekdaysShort(
		                    mom,
		                    ''
		                ).toLocaleLowerCase();
		                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
		            }
		        }

		        if (strict) {
		            if (format === 'dddd') {
		                ii = indexOf.call(this._weekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else if (format === 'ddd') {
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        } else {
		            if (format === 'dddd') {
		                ii = indexOf.call(this._weekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else if (format === 'ddd') {
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._weekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._weekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        }
		    }

		    function localeWeekdaysParse(weekdayName, format, strict) {
		        var i, mom, regex;

		        if (this._weekdaysParseExact) {
		            return handleStrictParse$1.call(this, weekdayName, format, strict);
		        }

		        if (!this._weekdaysParse) {
		            this._weekdaysParse = [];
		            this._minWeekdaysParse = [];
		            this._shortWeekdaysParse = [];
		            this._fullWeekdaysParse = [];
		        }

		        for (i = 0; i < 7; i++) {
		            // make the regex if we don't have it already

		            mom = createUTC([2000, 1]).day(i);
		            if (strict && !this._fullWeekdaysParse[i]) {
		                this._fullWeekdaysParse[i] = new RegExp(
		                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
		                    'i'
		                );
		                this._shortWeekdaysParse[i] = new RegExp(
		                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
		                    'i'
		                );
		                this._minWeekdaysParse[i] = new RegExp(
		                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
		                    'i'
		                );
		            }
		            if (!this._weekdaysParse[i]) {
		                regex =
		                    '^' +
		                    this.weekdays(mom, '') +
		                    '|^' +
		                    this.weekdaysShort(mom, '') +
		                    '|^' +
		                    this.weekdaysMin(mom, '');
		                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
		            }
		            // test the regex
		            if (
		                strict &&
		                format === 'dddd' &&
		                this._fullWeekdaysParse[i].test(weekdayName)
		            ) {
		                return i;
		            } else if (
		                strict &&
		                format === 'ddd' &&
		                this._shortWeekdaysParse[i].test(weekdayName)
		            ) {
		                return i;
		            } else if (
		                strict &&
		                format === 'dd' &&
		                this._minWeekdaysParse[i].test(weekdayName)
		            ) {
		                return i;
		            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
		                return i;
		            }
		        }
		    }

		    // MOMENTS

		    function getSetDayOfWeek(input) {
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }

		        var day = get(this, 'Day');
		        if (input != null) {
		            input = parseWeekday(input, this.localeData());
		            return this.add(input - day, 'd');
		        } else {
		            return day;
		        }
		    }

		    function getSetLocaleDayOfWeek(input) {
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }
		        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
		        return input == null ? weekday : this.add(input - weekday, 'd');
		    }

		    function getSetISODayOfWeek(input) {
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }

		        // behaves the same as moment#day except
		        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
		        // as a setter, sunday should belong to the previous week.

		        if (input != null) {
		            var weekday = parseIsoWeekday(input, this.localeData());
		            return this.day(this.day() % 7 ? weekday : weekday - 7);
		        } else {
		            return this.day() || 7;
		        }
		    }

		    function weekdaysRegex(isStrict) {
		        if (this._weekdaysParseExact) {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                computeWeekdaysParse.call(this);
		            }
		            if (isStrict) {
		                return this._weekdaysStrictRegex;
		            } else {
		                return this._weekdaysRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                this._weekdaysRegex = defaultWeekdaysRegex;
		            }
		            return this._weekdaysStrictRegex && isStrict
		                ? this._weekdaysStrictRegex
		                : this._weekdaysRegex;
		        }
		    }

		    function weekdaysShortRegex(isStrict) {
		        if (this._weekdaysParseExact) {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                computeWeekdaysParse.call(this);
		            }
		            if (isStrict) {
		                return this._weekdaysShortStrictRegex;
		            } else {
		                return this._weekdaysShortRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
		                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
		            }
		            return this._weekdaysShortStrictRegex && isStrict
		                ? this._weekdaysShortStrictRegex
		                : this._weekdaysShortRegex;
		        }
		    }

		    function weekdaysMinRegex(isStrict) {
		        if (this._weekdaysParseExact) {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                computeWeekdaysParse.call(this);
		            }
		            if (isStrict) {
		                return this._weekdaysMinStrictRegex;
		            } else {
		                return this._weekdaysMinRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
		                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
		            }
		            return this._weekdaysMinStrictRegex && isStrict
		                ? this._weekdaysMinStrictRegex
		                : this._weekdaysMinRegex;
		        }
		    }

		    function computeWeekdaysParse() {
		        function cmpLenRev(a, b) {
		            return b.length - a.length;
		        }

		        var minPieces = [],
		            shortPieces = [],
		            longPieces = [],
		            mixedPieces = [],
		            i,
		            mom,
		            minp,
		            shortp,
		            longp;
		        for (i = 0; i < 7; i++) {
		            // make the regex if we don't have it already
		            mom = createUTC([2000, 1]).day(i);
		            minp = regexEscape(this.weekdaysMin(mom, ''));
		            shortp = regexEscape(this.weekdaysShort(mom, ''));
		            longp = regexEscape(this.weekdays(mom, ''));
		            minPieces.push(minp);
		            shortPieces.push(shortp);
		            longPieces.push(longp);
		            mixedPieces.push(minp);
		            mixedPieces.push(shortp);
		            mixedPieces.push(longp);
		        }
		        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
		        // will match the longer piece.
		        minPieces.sort(cmpLenRev);
		        shortPieces.sort(cmpLenRev);
		        longPieces.sort(cmpLenRev);
		        mixedPieces.sort(cmpLenRev);

		        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		        this._weekdaysShortRegex = this._weekdaysRegex;
		        this._weekdaysMinRegex = this._weekdaysRegex;

		        this._weekdaysStrictRegex = new RegExp(
		            '^(' + longPieces.join('|') + ')',
		            'i'
		        );
		        this._weekdaysShortStrictRegex = new RegExp(
		            '^(' + shortPieces.join('|') + ')',
		            'i'
		        );
		        this._weekdaysMinStrictRegex = new RegExp(
		            '^(' + minPieces.join('|') + ')',
		            'i'
		        );
		    }

		    // FORMATTING

		    function hFormat() {
		        return this.hours() % 12 || 12;
		    }

		    function kFormat() {
		        return this.hours() || 24;
		    }

		    addFormatToken('H', ['HH', 2], 0, 'hour');
		    addFormatToken('h', ['hh', 2], 0, hFormat);
		    addFormatToken('k', ['kk', 2], 0, kFormat);

		    addFormatToken('hmm', 0, 0, function () {
		        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
		    });

		    addFormatToken('hmmss', 0, 0, function () {
		        return (
		            '' +
		            hFormat.apply(this) +
		            zeroFill(this.minutes(), 2) +
		            zeroFill(this.seconds(), 2)
		        );
		    });

		    addFormatToken('Hmm', 0, 0, function () {
		        return '' + this.hours() + zeroFill(this.minutes(), 2);
		    });

		    addFormatToken('Hmmss', 0, 0, function () {
		        return (
		            '' +
		            this.hours() +
		            zeroFill(this.minutes(), 2) +
		            zeroFill(this.seconds(), 2)
		        );
		    });

		    function meridiem(token, lowercase) {
		        addFormatToken(token, 0, 0, function () {
		            return this.localeData().meridiem(
		                this.hours(),
		                this.minutes(),
		                lowercase
		            );
		        });
		    }

		    meridiem('a', true);
		    meridiem('A', false);

		    // PARSING

		    function matchMeridiem(isStrict, locale) {
		        return locale._meridiemParse;
		    }

		    addRegexToken('a', matchMeridiem);
		    addRegexToken('A', matchMeridiem);
		    addRegexToken('H', match1to2, match1to2HasZero);
		    addRegexToken('h', match1to2, match1to2NoLeadingZero);
		    addRegexToken('k', match1to2, match1to2NoLeadingZero);
		    addRegexToken('HH', match1to2, match2);
		    addRegexToken('hh', match1to2, match2);
		    addRegexToken('kk', match1to2, match2);

		    addRegexToken('hmm', match3to4);
		    addRegexToken('hmmss', match5to6);
		    addRegexToken('Hmm', match3to4);
		    addRegexToken('Hmmss', match5to6);

		    addParseToken(['H', 'HH'], HOUR);
		    addParseToken(['k', 'kk'], function (input, array, config) {
		        var kInput = toInt(input);
		        array[HOUR] = kInput === 24 ? 0 : kInput;
		    });
		    addParseToken(['a', 'A'], function (input, array, config) {
		        config._isPm = config._locale.isPM(input);
		        config._meridiem = input;
		    });
		    addParseToken(['h', 'hh'], function (input, array, config) {
		        array[HOUR] = toInt(input);
		        getParsingFlags(config).bigHour = true;
		    });
		    addParseToken('hmm', function (input, array, config) {
		        var pos = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos));
		        array[MINUTE] = toInt(input.substr(pos));
		        getParsingFlags(config).bigHour = true;
		    });
		    addParseToken('hmmss', function (input, array, config) {
		        var pos1 = input.length - 4,
		            pos2 = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos1));
		        array[MINUTE] = toInt(input.substr(pos1, 2));
		        array[SECOND] = toInt(input.substr(pos2));
		        getParsingFlags(config).bigHour = true;
		    });
		    addParseToken('Hmm', function (input, array, config) {
		        var pos = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos));
		        array[MINUTE] = toInt(input.substr(pos));
		    });
		    addParseToken('Hmmss', function (input, array, config) {
		        var pos1 = input.length - 4,
		            pos2 = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos1));
		        array[MINUTE] = toInt(input.substr(pos1, 2));
		        array[SECOND] = toInt(input.substr(pos2));
		    });

		    // LOCALES

		    function localeIsPM(input) {
		        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
		        // Using charAt should be more compatible.
		        return (input + '').toLowerCase().charAt(0) === 'p';
		    }

		    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
		        // Setting the hour should keep the time, because the user explicitly
		        // specified which hour they want. So trying to maintain the same hour (in
		        // a new timezone) makes sense. Adding/subtracting hours does not follow
		        // this rule.
		        getSetHour = makeGetSet('Hours', true);

		    function localeMeridiem(hours, minutes, isLower) {
		        if (hours > 11) {
		            return isLower ? 'pm' : 'PM';
		        } else {
		            return isLower ? 'am' : 'AM';
		        }
		    }

		    var baseConfig = {
		        calendar: defaultCalendar,
		        longDateFormat: defaultLongDateFormat,
		        invalidDate: defaultInvalidDate,
		        ordinal: defaultOrdinal,
		        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
		        relativeTime: defaultRelativeTime,

		        months: defaultLocaleMonths,
		        monthsShort: defaultLocaleMonthsShort,

		        week: defaultLocaleWeek,

		        weekdays: defaultLocaleWeekdays,
		        weekdaysMin: defaultLocaleWeekdaysMin,
		        weekdaysShort: defaultLocaleWeekdaysShort,

		        meridiemParse: defaultLocaleMeridiemParse,
		    };

		    // internal storage for locale config files
		    var locales = {},
		        localeFamilies = {},
		        globalLocale;

		    function commonPrefix(arr1, arr2) {
		        var i,
		            minl = Math.min(arr1.length, arr2.length);
		        for (i = 0; i < minl; i += 1) {
		            if (arr1[i] !== arr2[i]) {
		                return i;
		            }
		        }
		        return minl;
		    }

		    function normalizeLocale(key) {
		        return key ? key.toLowerCase().replace('_', '-') : key;
		    }

		    // pick the locale from the array
		    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
		    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
		    function chooseLocale(names) {
		        var i = 0,
		            j,
		            next,
		            locale,
		            split;

		        while (i < names.length) {
		            split = normalizeLocale(names[i]).split('-');
		            j = split.length;
		            next = normalizeLocale(names[i + 1]);
		            next = next ? next.split('-') : null;
		            while (j > 0) {
		                locale = loadLocale(split.slice(0, j).join('-'));
		                if (locale) {
		                    return locale;
		                }
		                if (
		                    next &&
		                    next.length >= j &&
		                    commonPrefix(split, next) >= j - 1
		                ) {
		                    //the next array item is better than a shallower substring of this one
		                    break;
		                }
		                j--;
		            }
		            i++;
		        }
		        return globalLocale;
		    }

		    function isLocaleNameSane(name) {
		        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
		        // Ensure name is available and function returns boolean
		        return !!(name && name.match('^[^/\\\\]*$'));
		    }

		    function loadLocale(name) {
		        var oldLocale = null,
		            aliasedRequire;
		        // TODO: Find a better way to register and load all the locales in Node
		        if (
		            locales[name] === undefined &&
		            'object' !== 'undefined' &&
		            module &&
		            module.exports &&
		            isLocaleNameSane(name)
		        ) {
		            try {
		                oldLocale = globalLocale._abbr;
		                aliasedRequire = commonjsRequire;
		                aliasedRequire('./locale/' + name);
		                getSetGlobalLocale(oldLocale);
		            } catch (e) {
		                // mark as not found to avoid repeating expensive file require call causing high CPU
		                // when trying to find en-US, en_US, en-us for every format call
		                locales[name] = null; // null means not found
		            }
		        }
		        return locales[name];
		    }

		    // This function will load locale and then set the global locale.  If
		    // no arguments are passed in, it will simply return the current global
		    // locale key.
		    function getSetGlobalLocale(key, values) {
		        var data;
		        if (key) {
		            if (isUndefined(values)) {
		                data = getLocale(key);
		            } else {
		                data = defineLocale(key, values);
		            }

		            if (data) {
		                // moment.duration._locale = moment._locale = data;
		                globalLocale = data;
		            } else {
		                if (typeof console !== 'undefined' && console.warn) {
		                    //warn user if arguments are passed but the locale could not be set
		                    console.warn(
		                        'Locale ' + key + ' not found. Did you forget to load it?'
		                    );
		                }
		            }
		        }

		        return globalLocale._abbr;
		    }

		    function defineLocale(name, config) {
		        if (config !== null) {
		            var locale,
		                parentConfig = baseConfig;
		            config.abbr = name;
		            if (locales[name] != null) {
		                deprecateSimple(
		                    'defineLocaleOverride',
		                    'use moment.updateLocale(localeName, config) to change ' +
		                        'an existing locale. moment.defineLocale(localeName, ' +
		                        'config) should only be used for creating a new locale ' +
		                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
		                );
		                parentConfig = locales[name]._config;
		            } else if (config.parentLocale != null) {
		                if (locales[config.parentLocale] != null) {
		                    parentConfig = locales[config.parentLocale]._config;
		                } else {
		                    locale = loadLocale(config.parentLocale);
		                    if (locale != null) {
		                        parentConfig = locale._config;
		                    } else {
		                        if (!localeFamilies[config.parentLocale]) {
		                            localeFamilies[config.parentLocale] = [];
		                        }
		                        localeFamilies[config.parentLocale].push({
		                            name: name,
		                            config: config,
		                        });
		                        return null;
		                    }
		                }
		            }
		            locales[name] = new Locale(mergeConfigs(parentConfig, config));

		            if (localeFamilies[name]) {
		                localeFamilies[name].forEach(function (x) {
		                    defineLocale(x.name, x.config);
		                });
		            }

		            // backwards compat for now: also set the locale
		            // make sure we set the locale AFTER all child locales have been
		            // created, so we won't end up with the child locale set.
		            getSetGlobalLocale(name);

		            return locales[name];
		        } else {
		            // useful for testing
		            delete locales[name];
		            return null;
		        }
		    }

		    function updateLocale(name, config) {
		        if (config != null) {
		            var locale,
		                tmpLocale,
		                parentConfig = baseConfig;

		            if (locales[name] != null && locales[name].parentLocale != null) {
		                // Update existing child locale in-place to avoid memory-leaks
		                locales[name].set(mergeConfigs(locales[name]._config, config));
		            } else {
		                // MERGE
		                tmpLocale = loadLocale(name);
		                if (tmpLocale != null) {
		                    parentConfig = tmpLocale._config;
		                }
		                config = mergeConfigs(parentConfig, config);
		                if (tmpLocale == null) {
		                    // updateLocale is called for creating a new locale
		                    // Set abbr so it will have a name (getters return
		                    // undefined otherwise).
		                    config.abbr = name;
		                }
		                locale = new Locale(config);
		                locale.parentLocale = locales[name];
		                locales[name] = locale;
		            }

		            // backwards compat for now: also set the locale
		            getSetGlobalLocale(name);
		        } else {
		            // pass null for config to unupdate, useful for tests
		            if (locales[name] != null) {
		                if (locales[name].parentLocale != null) {
		                    locales[name] = locales[name].parentLocale;
		                    if (name === getSetGlobalLocale()) {
		                        getSetGlobalLocale(name);
		                    }
		                } else if (locales[name] != null) {
		                    delete locales[name];
		                }
		            }
		        }
		        return locales[name];
		    }

		    // returns locale data
		    function getLocale(key) {
		        var locale;

		        if (key && key._locale && key._locale._abbr) {
		            key = key._locale._abbr;
		        }

		        if (!key) {
		            return globalLocale;
		        }

		        if (!isArray(key)) {
		            //short-circuit everything else
		            locale = loadLocale(key);
		            if (locale) {
		                return locale;
		            }
		            key = [key];
		        }

		        return chooseLocale(key);
		    }

		    function listLocales() {
		        return keys(locales);
		    }

		    function checkOverflow(m) {
		        var overflow,
		            a = m._a;

		        if (a && getParsingFlags(m).overflow === -2) {
		            overflow =
		                a[MONTH] < 0 || a[MONTH] > 11
		                    ? MONTH
		                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
		                      ? DATE
		                      : a[HOUR] < 0 ||
		                          a[HOUR] > 24 ||
		                          (a[HOUR] === 24 &&
		                              (a[MINUTE] !== 0 ||
		                                  a[SECOND] !== 0 ||
		                                  a[MILLISECOND] !== 0))
		                        ? HOUR
		                        : a[MINUTE] < 0 || a[MINUTE] > 59
		                          ? MINUTE
		                          : a[SECOND] < 0 || a[SECOND] > 59
		                            ? SECOND
		                            : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
		                              ? MILLISECOND
		                              : -1;

		            if (
		                getParsingFlags(m)._overflowDayOfYear &&
		                (overflow < YEAR || overflow > DATE)
		            ) {
		                overflow = DATE;
		            }
		            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
		                overflow = WEEK;
		            }
		            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
		                overflow = WEEKDAY;
		            }

		            getParsingFlags(m).overflow = overflow;
		        }

		        return m;
		    }

		    // iso 8601 regex
		    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
		    var extendedIsoRegex =
		            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		        basicIsoRegex =
		            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
		        isoDates = [
		            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
		            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
		            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
		            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
		            ['YYYY-DDD', /\d{4}-\d{3}/],
		            ['YYYY-MM', /\d{4}-\d\d/, false],
		            ['YYYYYYMMDD', /[+-]\d{10}/],
		            ['YYYYMMDD', /\d{8}/],
		            ['GGGG[W]WWE', /\d{4}W\d{3}/],
		            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
		            ['YYYYDDD', /\d{7}/],
		            ['YYYYMM', /\d{6}/, false],
		            ['YYYY', /\d{4}/, false],
		        ],
		        // iso time formats and regexes
		        isoTimes = [
		            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
		            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
		            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
		            ['HH:mm', /\d\d:\d\d/],
		            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
		            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
		            ['HHmmss', /\d\d\d\d\d\d/],
		            ['HHmm', /\d\d\d\d/],
		            ['HH', /\d\d/],
		        ],
		        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
		        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
		        rfc2822 =
		            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
		        obsOffsets = {
		            UT: 0,
		            GMT: 0,
		            EDT: -4 * 60,
		            EST: -5 * 60,
		            CDT: -5 * 60,
		            CST: -6 * 60,
		            MDT: -6 * 60,
		            MST: -7 * 60,
		            PDT: -7 * 60,
		            PST: -8 * 60,
		        };

		    // date from iso format
		    function configFromISO(config) {
		        var i,
		            l,
		            string = config._i,
		            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
		            allowTime,
		            dateFormat,
		            timeFormat,
		            tzFormat,
		            isoDatesLen = isoDates.length,
		            isoTimesLen = isoTimes.length;

		        if (match) {
		            getParsingFlags(config).iso = true;
		            for (i = 0, l = isoDatesLen; i < l; i++) {
		                if (isoDates[i][1].exec(match[1])) {
		                    dateFormat = isoDates[i][0];
		                    allowTime = isoDates[i][2] !== false;
		                    break;
		                }
		            }
		            if (dateFormat == null) {
		                config._isValid = false;
		                return;
		            }
		            if (match[3]) {
		                for (i = 0, l = isoTimesLen; i < l; i++) {
		                    if (isoTimes[i][1].exec(match[3])) {
		                        // match[2] should be 'T' or space
		                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
		                        break;
		                    }
		                }
		                if (timeFormat == null) {
		                    config._isValid = false;
		                    return;
		                }
		            }
		            if (!allowTime && timeFormat != null) {
		                config._isValid = false;
		                return;
		            }
		            if (match[4]) {
		                if (tzRegex.exec(match[4])) {
		                    tzFormat = 'Z';
		                } else {
		                    config._isValid = false;
		                    return;
		                }
		            }
		            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
		            configFromStringAndFormat(config);
		        } else {
		            config._isValid = false;
		        }
		    }

		    function extractFromRFC2822Strings(
		        yearStr,
		        monthStr,
		        dayStr,
		        hourStr,
		        minuteStr,
		        secondStr
		    ) {
		        var result = [
		            untruncateYear(yearStr),
		            defaultLocaleMonthsShort.indexOf(monthStr),
		            parseInt(dayStr, 10),
		            parseInt(hourStr, 10),
		            parseInt(minuteStr, 10),
		        ];

		        if (secondStr) {
		            result.push(parseInt(secondStr, 10));
		        }

		        return result;
		    }

		    function untruncateYear(yearStr) {
		        var year = parseInt(yearStr, 10);
		        if (year <= 49) {
		            return 2000 + year;
		        } else if (year <= 999) {
		            return 1900 + year;
		        }
		        return year;
		    }

		    function preprocessRFC2822(s) {
		        // Remove comments and folding whitespace and replace multiple-spaces with a single space
		        return s
		            .replace(/\([^()]*\)|[\n\t]/g, ' ')
		            .replace(/(\s\s+)/g, ' ')
		            .replace(/^\s\s*/, '')
		            .replace(/\s\s*$/, '');
		    }

		    function checkWeekday(weekdayStr, parsedInput, config) {
		        if (weekdayStr) {
		            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
		            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
		                weekdayActual = new Date(
		                    parsedInput[0],
		                    parsedInput[1],
		                    parsedInput[2]
		                ).getDay();
		            if (weekdayProvided !== weekdayActual) {
		                getParsingFlags(config).weekdayMismatch = true;
		                config._isValid = false;
		                return false;
		            }
		        }
		        return true;
		    }

		    function calculateOffset(obsOffset, militaryOffset, numOffset) {
		        if (obsOffset) {
		            return obsOffsets[obsOffset];
		        } else if (militaryOffset) {
		            // the only allowed military tz is Z
		            return 0;
		        } else {
		            var hm = parseInt(numOffset, 10),
		                m = hm % 100,
		                h = (hm - m) / 100;
		            return h * 60 + m;
		        }
		    }

		    // date and time from ref 2822 format
		    function configFromRFC2822(config) {
		        var match = rfc2822.exec(preprocessRFC2822(config._i)),
		            parsedArray;
		        if (match) {
		            parsedArray = extractFromRFC2822Strings(
		                match[4],
		                match[3],
		                match[2],
		                match[5],
		                match[6],
		                match[7]
		            );
		            if (!checkWeekday(match[1], parsedArray, config)) {
		                return;
		            }

		            config._a = parsedArray;
		            config._tzm = calculateOffset(match[8], match[9], match[10]);

		            config._d = createUTCDate.apply(null, config._a);
		            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

		            getParsingFlags(config).rfc2822 = true;
		        } else {
		            config._isValid = false;
		        }
		    }

		    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
		    function configFromString(config) {
		        var matched = aspNetJsonRegex.exec(config._i);
		        if (matched !== null) {
		            config._d = new Date(+matched[1]);
		            return;
		        }

		        configFromISO(config);
		        if (config._isValid === false) {
		            delete config._isValid;
		        } else {
		            return;
		        }

		        configFromRFC2822(config);
		        if (config._isValid === false) {
		            delete config._isValid;
		        } else {
		            return;
		        }

		        if (config._strict) {
		            config._isValid = false;
		        } else {
		            // Final attempt, use Input Fallback
		            hooks.createFromInputFallback(config);
		        }
		    }

		    hooks.createFromInputFallback = deprecate(
		        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
		            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
		            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
		        function (config) {
		            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
		        }
		    );

		    // Pick the first defined of two or three arguments.
		    function defaults(a, b, c) {
		        if (a != null) {
		            return a;
		        }
		        if (b != null) {
		            return b;
		        }
		        return c;
		    }

		    function currentDateArray(config) {
		        // hooks is actually the exported moment object
		        var nowValue = new Date(hooks.now());
		        if (config._useUTC) {
		            return [
		                nowValue.getUTCFullYear(),
		                nowValue.getUTCMonth(),
		                nowValue.getUTCDate(),
		            ];
		        }
		        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
		    }

		    // convert an array to a date.
		    // the array should mirror the parameters below
		    // note: all values past the year are optional and will default to the lowest possible value.
		    // [year, month, day , hour, minute, second, millisecond]
		    function configFromArray(config) {
		        var i,
		            date,
		            input = [],
		            currentDate,
		            expectedWeekday,
		            yearToUse;

		        if (config._d) {
		            return;
		        }

		        currentDate = currentDateArray(config);

		        //compute day of the year from weeks and weekdays
		        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
		            dayOfYearFromWeekInfo(config);
		        }

		        //if the day of the year is set, figure out what it is
		        if (config._dayOfYear != null) {
		            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

		            if (
		                config._dayOfYear > daysInYear(yearToUse) ||
		                config._dayOfYear === 0
		            ) {
		                getParsingFlags(config)._overflowDayOfYear = true;
		            }

		            date = createUTCDate(yearToUse, 0, config._dayOfYear);
		            config._a[MONTH] = date.getUTCMonth();
		            config._a[DATE] = date.getUTCDate();
		        }

		        // Default to current date.
		        // * if no year, month, day of month are given, default to today
		        // * if day of month is given, default month and year
		        // * if month is given, default only year
		        // * if year is given, don't default anything
		        for (i = 0; i < 3 && config._a[i] == null; ++i) {
		            config._a[i] = input[i] = currentDate[i];
		        }

		        // Zero out whatever was not defaulted, including time
		        for (; i < 7; i++) {
		            config._a[i] = input[i] =
		                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
		        }

		        // Check for 24:00:00.000
		        if (
		            config._a[HOUR] === 24 &&
		            config._a[MINUTE] === 0 &&
		            config._a[SECOND] === 0 &&
		            config._a[MILLISECOND] === 0
		        ) {
		            config._nextDay = true;
		            config._a[HOUR] = 0;
		        }

		        config._d = (config._useUTC ? createUTCDate : createDate).apply(
		            null,
		            input
		        );
		        expectedWeekday = config._useUTC
		            ? config._d.getUTCDay()
		            : config._d.getDay();

		        // Apply timezone offset from input. The actual utcOffset can be changed
		        // with parseZone.
		        if (config._tzm != null) {
		            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
		        }

		        if (config._nextDay) {
		            config._a[HOUR] = 24;
		        }

		        // check for mismatching day of week
		        if (
		            config._w &&
		            typeof config._w.d !== 'undefined' &&
		            config._w.d !== expectedWeekday
		        ) {
		            getParsingFlags(config).weekdayMismatch = true;
		        }
		    }

		    function dayOfYearFromWeekInfo(config) {
		        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

		        w = config._w;
		        if (w.GG != null || w.W != null || w.E != null) {
		            dow = 1;
		            doy = 4;

		            // TODO: We need to take the current isoWeekYear, but that depends on
		            // how we interpret now (local, utc, fixed offset). So create
		            // a now version of current config (take local/utc/offset flags, and
		            // create now).
		            weekYear = defaults(
		                w.GG,
		                config._a[YEAR],
		                weekOfYear(createLocal(), 1, 4).year
		            );
		            week = defaults(w.W, 1);
		            weekday = defaults(w.E, 1);
		            if (weekday < 1 || weekday > 7) {
		                weekdayOverflow = true;
		            }
		        } else {
		            dow = config._locale._week.dow;
		            doy = config._locale._week.doy;

		            curWeek = weekOfYear(createLocal(), dow, doy);

		            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

		            // Default to current week.
		            week = defaults(w.w, curWeek.week);

		            if (w.d != null) {
		                // weekday -- low day numbers are considered next week
		                weekday = w.d;
		                if (weekday < 0 || weekday > 6) {
		                    weekdayOverflow = true;
		                }
		            } else if (w.e != null) {
		                // local weekday -- counting starts from beginning of week
		                weekday = w.e + dow;
		                if (w.e < 0 || w.e > 6) {
		                    weekdayOverflow = true;
		                }
		            } else {
		                // default to beginning of week
		                weekday = dow;
		            }
		        }
		        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
		            getParsingFlags(config)._overflowWeeks = true;
		        } else if (weekdayOverflow != null) {
		            getParsingFlags(config)._overflowWeekday = true;
		        } else {
		            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
		            config._a[YEAR] = temp.year;
		            config._dayOfYear = temp.dayOfYear;
		        }
		    }

		    // constant that refers to the ISO standard
		    hooks.ISO_8601 = function () {};

		    // constant that refers to the RFC 2822 form
		    hooks.RFC_2822 = function () {};

		    // date from string and format string
		    function configFromStringAndFormat(config) {
		        // TODO: Move this to another part of the creation flow to prevent circular deps
		        if (config._f === hooks.ISO_8601) {
		            configFromISO(config);
		            return;
		        }
		        if (config._f === hooks.RFC_2822) {
		            configFromRFC2822(config);
		            return;
		        }
		        config._a = [];
		        getParsingFlags(config).empty = true;

		        // This array is used to make a Date, either with `new Date` or `Date.UTC`
		        var string = '' + config._i,
		            i,
		            parsedInput,
		            tokens,
		            token,
		            skipped,
		            stringLength = string.length,
		            totalParsedInputLength = 0,
		            era,
		            tokenLen;

		        tokens =
		            expandFormat(config._f, config._locale).match(formattingTokens) || [];
		        tokenLen = tokens.length;
		        for (i = 0; i < tokenLen; i++) {
		            token = tokens[i];
		            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
		                [])[0];
		            if (parsedInput) {
		                skipped = string.substr(0, string.indexOf(parsedInput));
		                if (skipped.length > 0) {
		                    getParsingFlags(config).unusedInput.push(skipped);
		                }
		                string = string.slice(
		                    string.indexOf(parsedInput) + parsedInput.length
		                );
		                totalParsedInputLength += parsedInput.length;
		            }
		            // don't parse if it's not a known token
		            if (formatTokenFunctions[token]) {
		                if (parsedInput) {
		                    getParsingFlags(config).empty = false;
		                } else {
		                    getParsingFlags(config).unusedTokens.push(token);
		                }
		                addTimeToArrayFromToken(token, parsedInput, config);
		            } else if (config._strict && !parsedInput) {
		                getParsingFlags(config).unusedTokens.push(token);
		            }
		        }

		        // add remaining unparsed input length to the string
		        getParsingFlags(config).charsLeftOver =
		            stringLength - totalParsedInputLength;
		        if (string.length > 0) {
		            getParsingFlags(config).unusedInput.push(string);
		        }

		        // clear _12h flag if hour is <= 12
		        if (
		            config._a[HOUR] <= 12 &&
		            getParsingFlags(config).bigHour === true &&
		            config._a[HOUR] > 0
		        ) {
		            getParsingFlags(config).bigHour = undefined;
		        }

		        getParsingFlags(config).parsedDateParts = config._a.slice(0);
		        getParsingFlags(config).meridiem = config._meridiem;
		        // handle meridiem
		        config._a[HOUR] = meridiemFixWrap(
		            config._locale,
		            config._a[HOUR],
		            config._meridiem
		        );

		        // handle era
		        era = getParsingFlags(config).era;
		        if (era !== null) {
		            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
		        }

		        configFromArray(config);
		        checkOverflow(config);
		    }

		    function meridiemFixWrap(locale, hour, meridiem) {
		        var isPm;

		        if (meridiem == null) {
		            // nothing to do
		            return hour;
		        }
		        if (locale.meridiemHour != null) {
		            return locale.meridiemHour(hour, meridiem);
		        } else if (locale.isPM != null) {
		            // Fallback
		            isPm = locale.isPM(meridiem);
		            if (isPm && hour < 12) {
		                hour += 12;
		            }
		            if (!isPm && hour === 12) {
		                hour = 0;
		            }
		            return hour;
		        } else {
		            // this is not supposed to happen
		            return hour;
		        }
		    }

		    // date from string and array of format strings
		    function configFromStringAndArray(config) {
		        var tempConfig,
		            bestMoment,
		            scoreToBeat,
		            i,
		            currentScore,
		            validFormatFound,
		            bestFormatIsValid = false,
		            configfLen = config._f.length;

		        if (configfLen === 0) {
		            getParsingFlags(config).invalidFormat = true;
		            config._d = new Date(NaN);
		            return;
		        }

		        for (i = 0; i < configfLen; i++) {
		            currentScore = 0;
		            validFormatFound = false;
		            tempConfig = copyConfig({}, config);
		            if (config._useUTC != null) {
		                tempConfig._useUTC = config._useUTC;
		            }
		            tempConfig._f = config._f[i];
		            configFromStringAndFormat(tempConfig);

		            if (isValid(tempConfig)) {
		                validFormatFound = true;
		            }

		            // if there is any input that was not parsed add a penalty for that format
		            currentScore += getParsingFlags(tempConfig).charsLeftOver;

		            //or tokens
		            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

		            getParsingFlags(tempConfig).score = currentScore;

		            if (!bestFormatIsValid) {
		                if (
		                    scoreToBeat == null ||
		                    currentScore < scoreToBeat ||
		                    validFormatFound
		                ) {
		                    scoreToBeat = currentScore;
		                    bestMoment = tempConfig;
		                    if (validFormatFound) {
		                        bestFormatIsValid = true;
		                    }
		                }
		            } else {
		                if (currentScore < scoreToBeat) {
		                    scoreToBeat = currentScore;
		                    bestMoment = tempConfig;
		                }
		            }
		        }

		        extend(config, bestMoment || tempConfig);
		    }

		    function configFromObject(config) {
		        if (config._d) {
		            return;
		        }

		        var i = normalizeObjectUnits(config._i),
		            dayOrDate = i.day === undefined ? i.date : i.day;
		        config._a = map(
		            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
		            function (obj) {
		                return obj && parseInt(obj, 10);
		            }
		        );

		        configFromArray(config);
		    }

		    function createFromConfig(config) {
		        var res = new Moment(checkOverflow(prepareConfig(config)));
		        if (res._nextDay) {
		            // Adding is smart enough around DST
		            res.add(1, 'd');
		            res._nextDay = undefined;
		        }

		        return res;
		    }

		    function prepareConfig(config) {
		        var input = config._i,
		            format = config._f;

		        config._locale = config._locale || getLocale(config._l);

		        if (input === null || (format === undefined && input === '')) {
		            return createInvalid({ nullInput: true });
		        }

		        if (typeof input === 'string') {
		            config._i = input = config._locale.preparse(input);
		        }

		        if (isMoment(input)) {
		            return new Moment(checkOverflow(input));
		        } else if (isDate(input)) {
		            config._d = input;
		        } else if (isArray(format)) {
		            configFromStringAndArray(config);
		        } else if (format) {
		            configFromStringAndFormat(config);
		        } else {
		            configFromInput(config);
		        }

		        if (!isValid(config)) {
		            config._d = null;
		        }

		        return config;
		    }

		    function configFromInput(config) {
		        var input = config._i;
		        if (isUndefined(input)) {
		            config._d = new Date(hooks.now());
		        } else if (isDate(input)) {
		            config._d = new Date(input.valueOf());
		        } else if (typeof input === 'string') {
		            configFromString(config);
		        } else if (isArray(input)) {
		            config._a = map(input.slice(0), function (obj) {
		                return parseInt(obj, 10);
		            });
		            configFromArray(config);
		        } else if (isObject(input)) {
		            configFromObject(config);
		        } else if (isNumber(input)) {
		            // from milliseconds
		            config._d = new Date(input);
		        } else {
		            hooks.createFromInputFallback(config);
		        }
		    }

		    function createLocalOrUTC(input, format, locale, strict, isUTC) {
		        var c = {};

		        if (format === true || format === false) {
		            strict = format;
		            format = undefined;
		        }

		        if (locale === true || locale === false) {
		            strict = locale;
		            locale = undefined;
		        }

		        if (
		            (isObject(input) && isObjectEmpty(input)) ||
		            (isArray(input) && input.length === 0)
		        ) {
		            input = undefined;
		        }
		        // object construction must be done this way.
		        // https://github.com/moment/moment/issues/1423
		        c._isAMomentObject = true;
		        c._useUTC = c._isUTC = isUTC;
		        c._l = locale;
		        c._i = input;
		        c._f = format;
		        c._strict = strict;

		        return createFromConfig(c);
		    }

		    function createLocal(input, format, locale, strict) {
		        return createLocalOrUTC(input, format, locale, strict, false);
		    }

		    var prototypeMin = deprecate(
		            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
		            function () {
		                var other = createLocal.apply(null, arguments);
		                if (this.isValid() && other.isValid()) {
		                    return other < this ? this : other;
		                } else {
		                    return createInvalid();
		                }
		            }
		        ),
		        prototypeMax = deprecate(
		            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
		            function () {
		                var other = createLocal.apply(null, arguments);
		                if (this.isValid() && other.isValid()) {
		                    return other > this ? this : other;
		                } else {
		                    return createInvalid();
		                }
		            }
		        );

		    // Pick a moment m from moments so that m[fn](other) is true for all
		    // other. This relies on the function fn to be transitive.
		    //
		    // moments should either be an array of moment objects or an array, whose
		    // first element is an array of moment objects.
		    function pickBy(fn, moments) {
		        var res, i;
		        if (moments.length === 1 && isArray(moments[0])) {
		            moments = moments[0];
		        }
		        if (!moments.length) {
		            return createLocal();
		        }
		        res = moments[0];
		        for (i = 1; i < moments.length; ++i) {
		            if (!moments[i].isValid() || moments[i][fn](res)) {
		                res = moments[i];
		            }
		        }
		        return res;
		    }

		    // TODO: Use [].sort instead?
		    function min() {
		        var args = [].slice.call(arguments, 0);

		        return pickBy('isBefore', args);
		    }

		    function max() {
		        var args = [].slice.call(arguments, 0);

		        return pickBy('isAfter', args);
		    }

		    var now = function () {
		        return Date.now ? Date.now() : +new Date();
		    };

		    var ordering = [
		        'year',
		        'quarter',
		        'month',
		        'week',
		        'day',
		        'hour',
		        'minute',
		        'second',
		        'millisecond',
		    ];

		    function isDurationValid(m) {
		        var key,
		            unitHasDecimal = false,
		            i,
		            orderLen = ordering.length;
		        for (key in m) {
		            if (
		                hasOwnProp(m, key) &&
		                !(
		                    indexOf.call(ordering, key) !== -1 &&
		                    (m[key] == null || !isNaN(m[key]))
		                )
		            ) {
		                return false;
		            }
		        }

		        for (i = 0; i < orderLen; ++i) {
		            if (m[ordering[i]]) {
		                if (unitHasDecimal) {
		                    return false; // only allow non-integers for smallest unit
		                }
		                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
		                    unitHasDecimal = true;
		                }
		            }
		        }

		        return true;
		    }

		    function isValid$1() {
		        return this._isValid;
		    }

		    function createInvalid$1() {
		        return createDuration(NaN);
		    }

		    function Duration(duration) {
		        var normalizedInput = normalizeObjectUnits(duration),
		            years = normalizedInput.year || 0,
		            quarters = normalizedInput.quarter || 0,
		            months = normalizedInput.month || 0,
		            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
		            days = normalizedInput.day || 0,
		            hours = normalizedInput.hour || 0,
		            minutes = normalizedInput.minute || 0,
		            seconds = normalizedInput.second || 0,
		            milliseconds = normalizedInput.millisecond || 0;

		        this._isValid = isDurationValid(normalizedInput);

		        // representation for dateAddRemove
		        this._milliseconds =
		            +milliseconds +
		            seconds * 1e3 + // 1000
		            minutes * 6e4 + // 1000 * 60
		            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
		        // Because of dateAddRemove treats 24 hours as different from a
		        // day when working around DST, we need to store them separately
		        this._days = +days + weeks * 7;
		        // It is impossible to translate months into days without knowing
		        // which months you are are talking about, so we have to store
		        // it separately.
		        this._months = +months + quarters * 3 + years * 12;

		        this._data = {};

		        this._locale = getLocale();

		        this._bubble();
		    }

		    function isDuration(obj) {
		        return obj instanceof Duration;
		    }

		    function absRound(number) {
		        if (number < 0) {
		            return Math.round(-1 * number) * -1;
		        } else {
		            return Math.round(number);
		        }
		    }

		    // compare two arrays, return the number of differences
		    function compareArrays(array1, array2, dontConvert) {
		        var len = Math.min(array1.length, array2.length),
		            lengthDiff = Math.abs(array1.length - array2.length),
		            diffs = 0,
		            i;
		        for (i = 0; i < len; i++) {
		            if (
		                (toInt(array1[i]) !== toInt(array2[i]))
		            ) {
		                diffs++;
		            }
		        }
		        return diffs + lengthDiff;
		    }

		    // FORMATTING

		    function offset(token, separator) {
		        addFormatToken(token, 0, 0, function () {
		            var offset = this.utcOffset(),
		                sign = '+';
		            if (offset < 0) {
		                offset = -offset;
		                sign = '-';
		            }
		            return (
		                sign +
		                zeroFill(~~(offset / 60), 2) +
		                separator +
		                zeroFill(~~offset % 60, 2)
		            );
		        });
		    }

		    offset('Z', ':');
		    offset('ZZ', '');

		    // PARSING

		    addRegexToken('Z', matchShortOffset);
		    addRegexToken('ZZ', matchShortOffset);
		    addParseToken(['Z', 'ZZ'], function (input, array, config) {
		        config._useUTC = true;
		        config._tzm = offsetFromString(matchShortOffset, input);
		    });

		    // HELPERS

		    // timezone chunker
		    // '+10:00' > ['10',  '00']
		    // '-1530'  > ['-15', '30']
		    var chunkOffset = /([\+\-]|\d\d)/gi;

		    function offsetFromString(matcher, string) {
		        var matches = (string || '').match(matcher),
		            chunk,
		            parts,
		            minutes;

		        if (matches === null) {
		            return null;
		        }

		        chunk = matches[matches.length - 1] || [];
		        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
		        minutes = +(parts[1] * 60) + toInt(parts[2]);

		        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
		    }

		    // Return a moment from input, that is local/utc/zone equivalent to model.
		    function cloneWithOffset(input, model) {
		        var res, diff;
		        if (model._isUTC) {
		            res = model.clone();
		            diff =
		                (isMoment(input) || isDate(input)
		                    ? input.valueOf()
		                    : createLocal(input).valueOf()) - res.valueOf();
		            // Use low-level api, because this fn is low-level api.
		            res._d.setTime(res._d.valueOf() + diff);
		            hooks.updateOffset(res, false);
		            return res;
		        } else {
		            return createLocal(input).local();
		        }
		    }

		    function getDateOffset(m) {
		        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
		        // https://github.com/moment/moment/pull/1871
		        return -Math.round(m._d.getTimezoneOffset());
		    }

		    // HOOKS

		    // This function will be called whenever a moment is mutated.
		    // It is intended to keep the offset in sync with the timezone.
		    hooks.updateOffset = function () {};

		    // MOMENTS

		    // keepLocalTime = true means only change the timezone, without
		    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
		    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
		    // +0200, so we adjust the time as needed, to be valid.
		    //
		    // Keeping the time actually adds/subtracts (one hour)
		    // from the actual represented time. That is why we call updateOffset
		    // a second time. In case it wants us to change the offset again
		    // _changeInProgress == true case, then we have to adjust, because
		    // there is no such time in the given timezone.
		    function getSetOffset(input, keepLocalTime, keepMinutes) {
		        var offset = this._offset || 0,
		            localAdjust;
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }
		        if (input != null) {
		            if (typeof input === 'string') {
		                input = offsetFromString(matchShortOffset, input);
		                if (input === null) {
		                    return this;
		                }
		            } else if (Math.abs(input) < 16 && !keepMinutes) {
		                input = input * 60;
		            }
		            if (!this._isUTC && keepLocalTime) {
		                localAdjust = getDateOffset(this);
		            }
		            this._offset = input;
		            this._isUTC = true;
		            if (localAdjust != null) {
		                this.add(localAdjust, 'm');
		            }
		            if (offset !== input) {
		                if (!keepLocalTime || this._changeInProgress) {
		                    addSubtract(
		                        this,
		                        createDuration(input - offset, 'm'),
		                        1,
		                        false
		                    );
		                } else if (!this._changeInProgress) {
		                    this._changeInProgress = true;
		                    hooks.updateOffset(this, true);
		                    this._changeInProgress = null;
		                }
		            }
		            return this;
		        } else {
		            return this._isUTC ? offset : getDateOffset(this);
		        }
		    }

		    function getSetZone(input, keepLocalTime) {
		        if (input != null) {
		            if (typeof input !== 'string') {
		                input = -input;
		            }

		            this.utcOffset(input, keepLocalTime);

		            return this;
		        } else {
		            return -this.utcOffset();
		        }
		    }

		    function setOffsetToUTC(keepLocalTime) {
		        return this.utcOffset(0, keepLocalTime);
		    }

		    function setOffsetToLocal(keepLocalTime) {
		        if (this._isUTC) {
		            this.utcOffset(0, keepLocalTime);
		            this._isUTC = false;

		            if (keepLocalTime) {
		                this.subtract(getDateOffset(this), 'm');
		            }
		        }
		        return this;
		    }

		    function setOffsetToParsedOffset() {
		        if (this._tzm != null) {
		            this.utcOffset(this._tzm, false, true);
		        } else if (typeof this._i === 'string') {
		            var tZone = offsetFromString(matchOffset, this._i);
		            if (tZone != null) {
		                this.utcOffset(tZone);
		            } else {
		                this.utcOffset(0, true);
		            }
		        }
		        return this;
		    }

		    function hasAlignedHourOffset(input) {
		        if (!this.isValid()) {
		            return false;
		        }
		        input = input ? createLocal(input).utcOffset() : 0;

		        return (this.utcOffset() - input) % 60 === 0;
		    }

		    function isDaylightSavingTime() {
		        return (
		            this.utcOffset() > this.clone().month(0).utcOffset() ||
		            this.utcOffset() > this.clone().month(5).utcOffset()
		        );
		    }

		    function isDaylightSavingTimeShifted() {
		        if (!isUndefined(this._isDSTShifted)) {
		            return this._isDSTShifted;
		        }

		        var c = {},
		            other;

		        copyConfig(c, this);
		        c = prepareConfig(c);

		        if (c._a) {
		            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
		            this._isDSTShifted =
		                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
		        } else {
		            this._isDSTShifted = false;
		        }

		        return this._isDSTShifted;
		    }

		    function isLocal() {
		        return this.isValid() ? !this._isUTC : false;
		    }

		    function isUtcOffset() {
		        return this.isValid() ? this._isUTC : false;
		    }

		    function isUtc() {
		        return this.isValid() ? this._isUTC && this._offset === 0 : false;
		    }

		    // ASP.NET json date format regex
		    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
		        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
		        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
		        // and further modified to allow for strings containing both week and day
		        isoRegex =
		            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

		    function createDuration(input, key) {
		        var duration = input,
		            // matching against regexp is expensive, do it on demand
		            match = null,
		            sign,
		            ret,
		            diffRes;

		        if (isDuration(input)) {
		            duration = {
		                ms: input._milliseconds,
		                d: input._days,
		                M: input._months,
		            };
		        } else if (isNumber(input) || !isNaN(+input)) {
		            duration = {};
		            if (key) {
		                duration[key] = +input;
		            } else {
		                duration.milliseconds = +input;
		            }
		        } else if ((match = aspNetRegex.exec(input))) {
		            sign = match[1] === '-' ? -1 : 1;
		            duration = {
		                y: 0,
		                d: toInt(match[DATE]) * sign,
		                h: toInt(match[HOUR]) * sign,
		                m: toInt(match[MINUTE]) * sign,
		                s: toInt(match[SECOND]) * sign,
		                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
		            };
		        } else if ((match = isoRegex.exec(input))) {
		            sign = match[1] === '-' ? -1 : 1;
		            duration = {
		                y: parseIso(match[2], sign),
		                M: parseIso(match[3], sign),
		                w: parseIso(match[4], sign),
		                d: parseIso(match[5], sign),
		                h: parseIso(match[6], sign),
		                m: parseIso(match[7], sign),
		                s: parseIso(match[8], sign),
		            };
		        } else if (duration == null) {
		            // checks for null or undefined
		            duration = {};
		        } else if (
		            typeof duration === 'object' &&
		            ('from' in duration || 'to' in duration)
		        ) {
		            diffRes = momentsDifference(
		                createLocal(duration.from),
		                createLocal(duration.to)
		            );

		            duration = {};
		            duration.ms = diffRes.milliseconds;
		            duration.M = diffRes.months;
		        }

		        ret = new Duration(duration);

		        if (isDuration(input) && hasOwnProp(input, '_locale')) {
		            ret._locale = input._locale;
		        }

		        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
		            ret._isValid = input._isValid;
		        }

		        return ret;
		    }

		    createDuration.fn = Duration.prototype;
		    createDuration.invalid = createInvalid$1;

		    function parseIso(inp, sign) {
		        // We'd normally use ~~inp for this, but unfortunately it also
		        // converts floats to ints.
		        // inp may be undefined, so careful calling replace on it.
		        var res = inp && parseFloat(inp.replace(',', '.'));
		        // apply sign while we're at it
		        return (isNaN(res) ? 0 : res) * sign;
		    }

		    function positiveMomentsDifference(base, other) {
		        var res = {};

		        res.months =
		            other.month() - base.month() + (other.year() - base.year()) * 12;
		        if (base.clone().add(res.months, 'M').isAfter(other)) {
		            --res.months;
		        }

		        res.milliseconds = +other - +base.clone().add(res.months, 'M');

		        return res;
		    }

		    function momentsDifference(base, other) {
		        var res;
		        if (!(base.isValid() && other.isValid())) {
		            return { milliseconds: 0, months: 0 };
		        }

		        other = cloneWithOffset(other, base);
		        if (base.isBefore(other)) {
		            res = positiveMomentsDifference(base, other);
		        } else {
		            res = positiveMomentsDifference(other, base);
		            res.milliseconds = -res.milliseconds;
		            res.months = -res.months;
		        }

		        return res;
		    }

		    // TODO: remove 'name' arg after deprecation is removed
		    function createAdder(direction, name) {
		        return function (val, period) {
		            var dur, tmp;
		            //invert the arguments, but complain about it
		            if (period !== null && !isNaN(+period)) {
		                deprecateSimple(
		                    name,
		                    'moment().' +
		                        name +
		                        '(period, number) is deprecated. Please use moment().' +
		                        name +
		                        '(number, period). ' +
		                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
		                );
		                tmp = val;
		                val = period;
		                period = tmp;
		            }

		            dur = createDuration(val, period);
		            addSubtract(this, dur, direction);
		            return this;
		        };
		    }

		    function addSubtract(mom, duration, isAdding, updateOffset) {
		        var milliseconds = duration._milliseconds,
		            days = absRound(duration._days),
		            months = absRound(duration._months);

		        if (!mom.isValid()) {
		            // No op
		            return;
		        }

		        updateOffset = updateOffset == null ? true : updateOffset;

		        if (months) {
		            setMonth(mom, get(mom, 'Month') + months * isAdding);
		        }
		        if (days) {
		            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
		        }
		        if (milliseconds) {
		            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
		        }
		        if (updateOffset) {
		            hooks.updateOffset(mom, days || months);
		        }
		    }

		    var add = createAdder(1, 'add'),
		        subtract = createAdder(-1, 'subtract');

		    function isString(input) {
		        return typeof input === 'string' || input instanceof String;
		    }

		    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
		    function isMomentInput(input) {
		        return (
		            isMoment(input) ||
		            isDate(input) ||
		            isString(input) ||
		            isNumber(input) ||
		            isNumberOrStringArray(input) ||
		            isMomentInputObject(input) ||
		            input === null ||
		            input === undefined
		        );
		    }

		    function isMomentInputObject(input) {
		        var objectTest = isObject(input) && !isObjectEmpty(input),
		            propertyTest = false,
		            properties = [
		                'years',
		                'year',
		                'y',
		                'months',
		                'month',
		                'M',
		                'days',
		                'day',
		                'd',
		                'dates',
		                'date',
		                'D',
		                'hours',
		                'hour',
		                'h',
		                'minutes',
		                'minute',
		                'm',
		                'seconds',
		                'second',
		                's',
		                'milliseconds',
		                'millisecond',
		                'ms',
		            ],
		            i,
		            property,
		            propertyLen = properties.length;

		        for (i = 0; i < propertyLen; i += 1) {
		            property = properties[i];
		            propertyTest = propertyTest || hasOwnProp(input, property);
		        }

		        return objectTest && propertyTest;
		    }

		    function isNumberOrStringArray(input) {
		        var arrayTest = isArray(input),
		            dataTypeTest = false;
		        if (arrayTest) {
		            dataTypeTest =
		                input.filter(function (item) {
		                    return !isNumber(item) && isString(input);
		                }).length === 0;
		        }
		        return arrayTest && dataTypeTest;
		    }

		    function isCalendarSpec(input) {
		        var objectTest = isObject(input) && !isObjectEmpty(input),
		            propertyTest = false,
		            properties = [
		                'sameDay',
		                'nextDay',
		                'lastDay',
		                'nextWeek',
		                'lastWeek',
		                'sameElse',
		            ],
		            i,
		            property;

		        for (i = 0; i < properties.length; i += 1) {
		            property = properties[i];
		            propertyTest = propertyTest || hasOwnProp(input, property);
		        }

		        return objectTest && propertyTest;
		    }

		    function getCalendarFormat(myMoment, now) {
		        var diff = myMoment.diff(now, 'days', true);
		        return diff < -6
		            ? 'sameElse'
		            : diff < -1
		              ? 'lastWeek'
		              : diff < 0
		                ? 'lastDay'
		                : diff < 1
		                  ? 'sameDay'
		                  : diff < 2
		                    ? 'nextDay'
		                    : diff < 7
		                      ? 'nextWeek'
		                      : 'sameElse';
		    }

		    function calendar$1(time, formats) {
		        // Support for single parameter, formats only overload to the calendar function
		        if (arguments.length === 1) {
		            if (!arguments[0]) {
		                time = undefined;
		                formats = undefined;
		            } else if (isMomentInput(arguments[0])) {
		                time = arguments[0];
		                formats = undefined;
		            } else if (isCalendarSpec(arguments[0])) {
		                formats = arguments[0];
		                time = undefined;
		            }
		        }
		        // We want to compare the start of today, vs this.
		        // Getting start-of-today depends on whether we're local/utc/offset or not.
		        var now = time || createLocal(),
		            sod = cloneWithOffset(now, this).startOf('day'),
		            format = hooks.calendarFormat(this, sod) || 'sameElse',
		            output =
		                formats &&
		                (isFunction(formats[format])
		                    ? formats[format].call(this, now)
		                    : formats[format]);

		        return this.format(
		            output || this.localeData().calendar(format, this, createLocal(now))
		        );
		    }

		    function clone() {
		        return new Moment(this);
		    }

		    function isAfter(input, units) {
		        var localInput = isMoment(input) ? input : createLocal(input);
		        if (!(this.isValid() && localInput.isValid())) {
		            return false;
		        }
		        units = normalizeUnits(units) || 'millisecond';
		        if (units === 'millisecond') {
		            return this.valueOf() > localInput.valueOf();
		        } else {
		            return localInput.valueOf() < this.clone().startOf(units).valueOf();
		        }
		    }

		    function isBefore(input, units) {
		        var localInput = isMoment(input) ? input : createLocal(input);
		        if (!(this.isValid() && localInput.isValid())) {
		            return false;
		        }
		        units = normalizeUnits(units) || 'millisecond';
		        if (units === 'millisecond') {
		            return this.valueOf() < localInput.valueOf();
		        } else {
		            return this.clone().endOf(units).valueOf() < localInput.valueOf();
		        }
		    }

		    function isBetween(from, to, units, inclusivity) {
		        var localFrom = isMoment(from) ? from : createLocal(from),
		            localTo = isMoment(to) ? to : createLocal(to);
		        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
		            return false;
		        }
		        inclusivity = inclusivity || '()';
		        return (
		            (inclusivity[0] === '('
		                ? this.isAfter(localFrom, units)
		                : !this.isBefore(localFrom, units)) &&
		            (inclusivity[1] === ')'
		                ? this.isBefore(localTo, units)
		                : !this.isAfter(localTo, units))
		        );
		    }

		    function isSame(input, units) {
		        var localInput = isMoment(input) ? input : createLocal(input),
		            inputMs;
		        if (!(this.isValid() && localInput.isValid())) {
		            return false;
		        }
		        units = normalizeUnits(units) || 'millisecond';
		        if (units === 'millisecond') {
		            return this.valueOf() === localInput.valueOf();
		        } else {
		            inputMs = localInput.valueOf();
		            return (
		                this.clone().startOf(units).valueOf() <= inputMs &&
		                inputMs <= this.clone().endOf(units).valueOf()
		            );
		        }
		    }

		    function isSameOrAfter(input, units) {
		        return this.isSame(input, units) || this.isAfter(input, units);
		    }

		    function isSameOrBefore(input, units) {
		        return this.isSame(input, units) || this.isBefore(input, units);
		    }

		    function diff(input, units, asFloat) {
		        var that, zoneDelta, output;

		        if (!this.isValid()) {
		            return NaN;
		        }

		        that = cloneWithOffset(input, this);

		        if (!that.isValid()) {
		            return NaN;
		        }

		        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

		        units = normalizeUnits(units);

		        switch (units) {
		            case 'year':
		                output = monthDiff(this, that) / 12;
		                break;
		            case 'month':
		                output = monthDiff(this, that);
		                break;
		            case 'quarter':
		                output = monthDiff(this, that) / 3;
		                break;
		            case 'second':
		                output = (this - that) / 1e3;
		                break; // 1000
		            case 'minute':
		                output = (this - that) / 6e4;
		                break; // 1000 * 60
		            case 'hour':
		                output = (this - that) / 36e5;
		                break; // 1000 * 60 * 60
		            case 'day':
		                output = (this - that - zoneDelta) / 864e5;
		                break; // 1000 * 60 * 60 * 24, negate dst
		            case 'week':
		                output = (this - that - zoneDelta) / 6048e5;
		                break; // 1000 * 60 * 60 * 24 * 7, negate dst
		            default:
		                output = this - that;
		        }

		        return asFloat ? output : absFloor(output);
		    }

		    function monthDiff(a, b) {
		        if (a.date() < b.date()) {
		            // end-of-month calculations work correct when the start month has more
		            // days than the end month.
		            return -monthDiff(b, a);
		        }
		        // difference in months
		        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
		            // b is in (anchor - 1 month, anchor + 1 month)
		            anchor = a.clone().add(wholeMonthDiff, 'months'),
		            anchor2,
		            adjust;

		        if (b - anchor < 0) {
		            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
		            // linear across the month
		            adjust = (b - anchor) / (anchor - anchor2);
		        } else {
		            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
		            // linear across the month
		            adjust = (b - anchor) / (anchor2 - anchor);
		        }

		        //check for negative zero, return zero if negative zero
		        return -(wholeMonthDiff + adjust) || 0;
		    }

		    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
		    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

		    function toString() {
		        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
		    }

		    function toISOString(keepOffset) {
		        if (!this.isValid()) {
		            return null;
		        }
		        var utc = keepOffset !== true,
		            m = utc ? this.clone().utc() : this;
		        if (m.year() < 0 || m.year() > 9999) {
		            return formatMoment(
		                m,
		                utc
		                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
		                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
		            );
		        }
		        if (isFunction(Date.prototype.toISOString)) {
		            // native implementation is ~50x faster, use it when we can
		            if (utc) {
		                return this.toDate().toISOString();
		            } else {
		                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
		                    .toISOString()
		                    .replace('Z', formatMoment(m, 'Z'));
		            }
		        }
		        return formatMoment(
		            m,
		            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
		        );
		    }

		    /**
		     * Return a human readable representation of a moment that can
		     * also be evaluated to get a new moment which is the same
		     *
		     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
		     */
		    function inspect() {
		        if (!this.isValid()) {
		            return 'moment.invalid(/* ' + this._i + ' */)';
		        }
		        var func = 'moment',
		            zone = '',
		            prefix,
		            year,
		            datetime,
		            suffix;
		        if (!this.isLocal()) {
		            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
		            zone = 'Z';
		        }
		        prefix = '[' + func + '("]';
		        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
		        datetime = '-MM-DD[T]HH:mm:ss.SSS';
		        suffix = zone + '[")]';

		        return this.format(prefix + year + datetime + suffix);
		    }

		    function format(inputString) {
		        if (!inputString) {
		            inputString = this.isUtc()
		                ? hooks.defaultFormatUtc
		                : hooks.defaultFormat;
		        }
		        var output = formatMoment(this, inputString);
		        return this.localeData().postformat(output);
		    }

		    function from(time, withoutSuffix) {
		        if (
		            this.isValid() &&
		            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
		        ) {
		            return createDuration({ to: this, from: time })
		                .locale(this.locale())
		                .humanize(!withoutSuffix);
		        } else {
		            return this.localeData().invalidDate();
		        }
		    }

		    function fromNow(withoutSuffix) {
		        return this.from(createLocal(), withoutSuffix);
		    }

		    function to(time, withoutSuffix) {
		        if (
		            this.isValid() &&
		            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
		        ) {
		            return createDuration({ from: this, to: time })
		                .locale(this.locale())
		                .humanize(!withoutSuffix);
		        } else {
		            return this.localeData().invalidDate();
		        }
		    }

		    function toNow(withoutSuffix) {
		        return this.to(createLocal(), withoutSuffix);
		    }

		    // If passed a locale key, it will set the locale for this
		    // instance.  Otherwise, it will return the locale configuration
		    // variables for this instance.
		    function locale(key) {
		        var newLocaleData;

		        if (key === undefined) {
		            return this._locale._abbr;
		        } else {
		            newLocaleData = getLocale(key);
		            if (newLocaleData != null) {
		                this._locale = newLocaleData;
		            }
		            return this;
		        }
		    }

		    var lang = deprecate(
		        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
		        function (key) {
		            if (key === undefined) {
		                return this.localeData();
		            } else {
		                return this.locale(key);
		            }
		        }
		    );

		    function localeData() {
		        return this._locale;
		    }

		    var MS_PER_SECOND = 1000,
		        MS_PER_MINUTE = 60 * MS_PER_SECOND,
		        MS_PER_HOUR = 60 * MS_PER_MINUTE,
		        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

		    // actual modulo - handles negative numbers (for dates before 1970):
		    function mod$1(dividend, divisor) {
		        return ((dividend % divisor) + divisor) % divisor;
		    }

		    function localStartOfDate(y, m, d) {
		        // the date constructor remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            // preserve leap years using a full 400 year cycle, then reset
		            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
		        } else {
		            return new Date(y, m, d).valueOf();
		        }
		    }

		    function utcStartOfDate(y, m, d) {
		        // Date.UTC remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            // preserve leap years using a full 400 year cycle, then reset
		            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
		        } else {
		            return Date.UTC(y, m, d);
		        }
		    }

		    function startOf(units) {
		        var time, startOfDate;
		        units = normalizeUnits(units);
		        if (units === undefined || units === 'millisecond' || !this.isValid()) {
		            return this;
		        }

		        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

		        switch (units) {
		            case 'year':
		                time = startOfDate(this.year(), 0, 1);
		                break;
		            case 'quarter':
		                time = startOfDate(
		                    this.year(),
		                    this.month() - (this.month() % 3),
		                    1
		                );
		                break;
		            case 'month':
		                time = startOfDate(this.year(), this.month(), 1);
		                break;
		            case 'week':
		                time = startOfDate(
		                    this.year(),
		                    this.month(),
		                    this.date() - this.weekday()
		                );
		                break;
		            case 'isoWeek':
		                time = startOfDate(
		                    this.year(),
		                    this.month(),
		                    this.date() - (this.isoWeekday() - 1)
		                );
		                break;
		            case 'day':
		            case 'date':
		                time = startOfDate(this.year(), this.month(), this.date());
		                break;
		            case 'hour':
		                time = this._d.valueOf();
		                time -= mod$1(
		                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
		                    MS_PER_HOUR
		                );
		                break;
		            case 'minute':
		                time = this._d.valueOf();
		                time -= mod$1(time, MS_PER_MINUTE);
		                break;
		            case 'second':
		                time = this._d.valueOf();
		                time -= mod$1(time, MS_PER_SECOND);
		                break;
		        }

		        this._d.setTime(time);
		        hooks.updateOffset(this, true);
		        return this;
		    }

		    function endOf(units) {
		        var time, startOfDate;
		        units = normalizeUnits(units);
		        if (units === undefined || units === 'millisecond' || !this.isValid()) {
		            return this;
		        }

		        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

		        switch (units) {
		            case 'year':
		                time = startOfDate(this.year() + 1, 0, 1) - 1;
		                break;
		            case 'quarter':
		                time =
		                    startOfDate(
		                        this.year(),
		                        this.month() - (this.month() % 3) + 3,
		                        1
		                    ) - 1;
		                break;
		            case 'month':
		                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
		                break;
		            case 'week':
		                time =
		                    startOfDate(
		                        this.year(),
		                        this.month(),
		                        this.date() - this.weekday() + 7
		                    ) - 1;
		                break;
		            case 'isoWeek':
		                time =
		                    startOfDate(
		                        this.year(),
		                        this.month(),
		                        this.date() - (this.isoWeekday() - 1) + 7
		                    ) - 1;
		                break;
		            case 'day':
		            case 'date':
		                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
		                break;
		            case 'hour':
		                time = this._d.valueOf();
		                time +=
		                    MS_PER_HOUR -
		                    mod$1(
		                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
		                        MS_PER_HOUR
		                    ) -
		                    1;
		                break;
		            case 'minute':
		                time = this._d.valueOf();
		                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
		                break;
		            case 'second':
		                time = this._d.valueOf();
		                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
		                break;
		        }

		        this._d.setTime(time);
		        hooks.updateOffset(this, true);
		        return this;
		    }

		    function valueOf() {
		        return this._d.valueOf() - (this._offset || 0) * 60000;
		    }

		    function unix() {
		        return Math.floor(this.valueOf() / 1000);
		    }

		    function toDate() {
		        return new Date(this.valueOf());
		    }

		    function toArray() {
		        var m = this;
		        return [
		            m.year(),
		            m.month(),
		            m.date(),
		            m.hour(),
		            m.minute(),
		            m.second(),
		            m.millisecond(),
		        ];
		    }

		    function toObject() {
		        var m = this;
		        return {
		            years: m.year(),
		            months: m.month(),
		            date: m.date(),
		            hours: m.hours(),
		            minutes: m.minutes(),
		            seconds: m.seconds(),
		            milliseconds: m.milliseconds(),
		        };
		    }

		    function toJSON() {
		        // new Date(NaN).toJSON() === null
		        return this.isValid() ? this.toISOString() : null;
		    }

		    function isValid$2() {
		        return isValid(this);
		    }

		    function parsingFlags() {
		        return extend({}, getParsingFlags(this));
		    }

		    function invalidAt() {
		        return getParsingFlags(this).overflow;
		    }

		    function creationData() {
		        return {
		            input: this._i,
		            format: this._f,
		            locale: this._locale,
		            isUTC: this._isUTC,
		            strict: this._strict,
		        };
		    }

		    addFormatToken('N', 0, 0, 'eraAbbr');
		    addFormatToken('NN', 0, 0, 'eraAbbr');
		    addFormatToken('NNN', 0, 0, 'eraAbbr');
		    addFormatToken('NNNN', 0, 0, 'eraName');
		    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

		    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
		    addFormatToken('y', ['yy', 2], 0, 'eraYear');
		    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
		    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

		    addRegexToken('N', matchEraAbbr);
		    addRegexToken('NN', matchEraAbbr);
		    addRegexToken('NNN', matchEraAbbr);
		    addRegexToken('NNNN', matchEraName);
		    addRegexToken('NNNNN', matchEraNarrow);

		    addParseToken(
		        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
		        function (input, array, config, token) {
		            var era = config._locale.erasParse(input, token, config._strict);
		            if (era) {
		                getParsingFlags(config).era = era;
		            } else {
		                getParsingFlags(config).invalidEra = input;
		            }
		        }
		    );

		    addRegexToken('y', matchUnsigned);
		    addRegexToken('yy', matchUnsigned);
		    addRegexToken('yyy', matchUnsigned);
		    addRegexToken('yyyy', matchUnsigned);
		    addRegexToken('yo', matchEraYearOrdinal);

		    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
		    addParseToken(['yo'], function (input, array, config, token) {
		        var match;
		        if (config._locale._eraYearOrdinalRegex) {
		            match = input.match(config._locale._eraYearOrdinalRegex);
		        }

		        if (config._locale.eraYearOrdinalParse) {
		            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
		        } else {
		            array[YEAR] = parseInt(input, 10);
		        }
		    });

		    function localeEras(m, format) {
		        var i,
		            l,
		            date,
		            eras = this._eras || getLocale('en')._eras;
		        for (i = 0, l = eras.length; i < l; ++i) {
		            switch (typeof eras[i].since) {
		                case 'string':
		                    // truncate time
		                    date = hooks(eras[i].since).startOf('day');
		                    eras[i].since = date.valueOf();
		                    break;
		            }

		            switch (typeof eras[i].until) {
		                case 'undefined':
		                    eras[i].until = +Infinity;
		                    break;
		                case 'string':
		                    // truncate time
		                    date = hooks(eras[i].until).startOf('day').valueOf();
		                    eras[i].until = date.valueOf();
		                    break;
		            }
		        }
		        return eras;
		    }

		    function localeErasParse(eraName, format, strict) {
		        var i,
		            l,
		            eras = this.eras(),
		            name,
		            abbr,
		            narrow;
		        eraName = eraName.toUpperCase();

		        for (i = 0, l = eras.length; i < l; ++i) {
		            name = eras[i].name.toUpperCase();
		            abbr = eras[i].abbr.toUpperCase();
		            narrow = eras[i].narrow.toUpperCase();

		            if (strict) {
		                switch (format) {
		                    case 'N':
		                    case 'NN':
		                    case 'NNN':
		                        if (abbr === eraName) {
		                            return eras[i];
		                        }
		                        break;

		                    case 'NNNN':
		                        if (name === eraName) {
		                            return eras[i];
		                        }
		                        break;

		                    case 'NNNNN':
		                        if (narrow === eraName) {
		                            return eras[i];
		                        }
		                        break;
		                }
		            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
		                return eras[i];
		            }
		        }
		    }

		    function localeErasConvertYear(era, year) {
		        var dir = era.since <= era.until ? 1 : -1;
		        if (year === undefined) {
		            return hooks(era.since).year();
		        } else {
		            return hooks(era.since).year() + (year - era.offset) * dir;
		        }
		    }

		    function getEraName() {
		        var i,
		            l,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (eras[i].since <= val && val <= eras[i].until) {
		                return eras[i].name;
		            }
		            if (eras[i].until <= val && val <= eras[i].since) {
		                return eras[i].name;
		            }
		        }

		        return '';
		    }

		    function getEraNarrow() {
		        var i,
		            l,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (eras[i].since <= val && val <= eras[i].until) {
		                return eras[i].narrow;
		            }
		            if (eras[i].until <= val && val <= eras[i].since) {
		                return eras[i].narrow;
		            }
		        }

		        return '';
		    }

		    function getEraAbbr() {
		        var i,
		            l,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (eras[i].since <= val && val <= eras[i].until) {
		                return eras[i].abbr;
		            }
		            if (eras[i].until <= val && val <= eras[i].since) {
		                return eras[i].abbr;
		            }
		        }

		        return '';
		    }

		    function getEraYear() {
		        var i,
		            l,
		            dir,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            dir = eras[i].since <= eras[i].until ? 1 : -1;

		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (
		                (eras[i].since <= val && val <= eras[i].until) ||
		                (eras[i].until <= val && val <= eras[i].since)
		            ) {
		                return (
		                    (this.year() - hooks(eras[i].since).year()) * dir +
		                    eras[i].offset
		                );
		            }
		        }

		        return this.year();
		    }

		    function erasNameRegex(isStrict) {
		        if (!hasOwnProp(this, '_erasNameRegex')) {
		            computeErasParse.call(this);
		        }
		        return isStrict ? this._erasNameRegex : this._erasRegex;
		    }

		    function erasAbbrRegex(isStrict) {
		        if (!hasOwnProp(this, '_erasAbbrRegex')) {
		            computeErasParse.call(this);
		        }
		        return isStrict ? this._erasAbbrRegex : this._erasRegex;
		    }

		    function erasNarrowRegex(isStrict) {
		        if (!hasOwnProp(this, '_erasNarrowRegex')) {
		            computeErasParse.call(this);
		        }
		        return isStrict ? this._erasNarrowRegex : this._erasRegex;
		    }

		    function matchEraAbbr(isStrict, locale) {
		        return locale.erasAbbrRegex(isStrict);
		    }

		    function matchEraName(isStrict, locale) {
		        return locale.erasNameRegex(isStrict);
		    }

		    function matchEraNarrow(isStrict, locale) {
		        return locale.erasNarrowRegex(isStrict);
		    }

		    function matchEraYearOrdinal(isStrict, locale) {
		        return locale._eraYearOrdinalRegex || matchUnsigned;
		    }

		    function computeErasParse() {
		        var abbrPieces = [],
		            namePieces = [],
		            narrowPieces = [],
		            mixedPieces = [],
		            i,
		            l,
		            erasName,
		            erasAbbr,
		            erasNarrow,
		            eras = this.eras();

		        for (i = 0, l = eras.length; i < l; ++i) {
		            erasName = regexEscape(eras[i].name);
		            erasAbbr = regexEscape(eras[i].abbr);
		            erasNarrow = regexEscape(eras[i].narrow);

		            namePieces.push(erasName);
		            abbrPieces.push(erasAbbr);
		            narrowPieces.push(erasNarrow);
		            mixedPieces.push(erasName);
		            mixedPieces.push(erasAbbr);
		            mixedPieces.push(erasNarrow);
		        }

		        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
		        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
		        this._erasNarrowRegex = new RegExp(
		            '^(' + narrowPieces.join('|') + ')',
		            'i'
		        );
		    }

		    // FORMATTING

		    addFormatToken(0, ['gg', 2], 0, function () {
		        return this.weekYear() % 100;
		    });

		    addFormatToken(0, ['GG', 2], 0, function () {
		        return this.isoWeekYear() % 100;
		    });

		    function addWeekYearFormatToken(token, getter) {
		        addFormatToken(0, [token, token.length], 0, getter);
		    }

		    addWeekYearFormatToken('gggg', 'weekYear');
		    addWeekYearFormatToken('ggggg', 'weekYear');
		    addWeekYearFormatToken('GGGG', 'isoWeekYear');
		    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

		    // ALIASES

		    // PARSING

		    addRegexToken('G', matchSigned);
		    addRegexToken('g', matchSigned);
		    addRegexToken('GG', match1to2, match2);
		    addRegexToken('gg', match1to2, match2);
		    addRegexToken('GGGG', match1to4, match4);
		    addRegexToken('gggg', match1to4, match4);
		    addRegexToken('GGGGG', match1to6, match6);
		    addRegexToken('ggggg', match1to6, match6);

		    addWeekParseToken(
		        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
		        function (input, week, config, token) {
		            week[token.substr(0, 2)] = toInt(input);
		        }
		    );

		    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
		        week[token] = hooks.parseTwoDigitYear(input);
		    });

		    // MOMENTS

		    function getSetWeekYear(input) {
		        return getSetWeekYearHelper.call(
		            this,
		            input,
		            this.week(),
		            this.weekday() + this.localeData()._week.dow,
		            this.localeData()._week.dow,
		            this.localeData()._week.doy
		        );
		    }

		    function getSetISOWeekYear(input) {
		        return getSetWeekYearHelper.call(
		            this,
		            input,
		            this.isoWeek(),
		            this.isoWeekday(),
		            1,
		            4
		        );
		    }

		    function getISOWeeksInYear() {
		        return weeksInYear(this.year(), 1, 4);
		    }

		    function getISOWeeksInISOWeekYear() {
		        return weeksInYear(this.isoWeekYear(), 1, 4);
		    }

		    function getWeeksInYear() {
		        var weekInfo = this.localeData()._week;
		        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
		    }

		    function getWeeksInWeekYear() {
		        var weekInfo = this.localeData()._week;
		        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
		    }

		    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
		        var weeksTarget;
		        if (input == null) {
		            return weekOfYear(this, dow, doy).year;
		        } else {
		            weeksTarget = weeksInYear(input, dow, doy);
		            if (week > weeksTarget) {
		                week = weeksTarget;
		            }
		            return setWeekAll.call(this, input, week, weekday, dow, doy);
		        }
		    }

		    function setWeekAll(weekYear, week, weekday, dow, doy) {
		        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
		            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

		        this.year(date.getUTCFullYear());
		        this.month(date.getUTCMonth());
		        this.date(date.getUTCDate());
		        return this;
		    }

		    // FORMATTING

		    addFormatToken('Q', 0, 'Qo', 'quarter');

		    // PARSING

		    addRegexToken('Q', match1);
		    addParseToken('Q', function (input, array) {
		        array[MONTH] = (toInt(input) - 1) * 3;
		    });

		    // MOMENTS

		    function getSetQuarter(input) {
		        return input == null
		            ? Math.ceil((this.month() + 1) / 3)
		            : this.month((input - 1) * 3 + (this.month() % 3));
		    }

		    // FORMATTING

		    addFormatToken('D', ['DD', 2], 'Do', 'date');

		    // PARSING

		    addRegexToken('D', match1to2, match1to2NoLeadingZero);
		    addRegexToken('DD', match1to2, match2);
		    addRegexToken('Do', function (isStrict, locale) {
		        // TODO: Remove "ordinalParse" fallback in next major release.
		        return isStrict
		            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
		            : locale._dayOfMonthOrdinalParseLenient;
		    });

		    addParseToken(['D', 'DD'], DATE);
		    addParseToken('Do', function (input, array) {
		        array[DATE] = toInt(input.match(match1to2)[0]);
		    });

		    // MOMENTS

		    var getSetDayOfMonth = makeGetSet('Date', true);

		    // FORMATTING

		    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

		    // PARSING

		    addRegexToken('DDD', match1to3);
		    addRegexToken('DDDD', match3);
		    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
		        config._dayOfYear = toInt(input);
		    });

		    // HELPERS

		    // MOMENTS

		    function getSetDayOfYear(input) {
		        var dayOfYear =
		            Math.round(
		                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
		            ) + 1;
		        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
		    }

		    // FORMATTING

		    addFormatToken('m', ['mm', 2], 0, 'minute');

		    // PARSING

		    addRegexToken('m', match1to2, match1to2HasZero);
		    addRegexToken('mm', match1to2, match2);
		    addParseToken(['m', 'mm'], MINUTE);

		    // MOMENTS

		    var getSetMinute = makeGetSet('Minutes', false);

		    // FORMATTING

		    addFormatToken('s', ['ss', 2], 0, 'second');

		    // PARSING

		    addRegexToken('s', match1to2, match1to2HasZero);
		    addRegexToken('ss', match1to2, match2);
		    addParseToken(['s', 'ss'], SECOND);

		    // MOMENTS

		    var getSetSecond = makeGetSet('Seconds', false);

		    // FORMATTING

		    addFormatToken('S', 0, 0, function () {
		        return ~~(this.millisecond() / 100);
		    });

		    addFormatToken(0, ['SS', 2], 0, function () {
		        return ~~(this.millisecond() / 10);
		    });

		    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
		    addFormatToken(0, ['SSSS', 4], 0, function () {
		        return this.millisecond() * 10;
		    });
		    addFormatToken(0, ['SSSSS', 5], 0, function () {
		        return this.millisecond() * 100;
		    });
		    addFormatToken(0, ['SSSSSS', 6], 0, function () {
		        return this.millisecond() * 1000;
		    });
		    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
		        return this.millisecond() * 10000;
		    });
		    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
		        return this.millisecond() * 100000;
		    });
		    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
		        return this.millisecond() * 1000000;
		    });

		    // PARSING

		    addRegexToken('S', match1to3, match1);
		    addRegexToken('SS', match1to3, match2);
		    addRegexToken('SSS', match1to3, match3);

		    var token, getSetMillisecond;
		    for (token = 'SSSS'; token.length <= 9; token += 'S') {
		        addRegexToken(token, matchUnsigned);
		    }

		    function parseMs(input, array) {
		        array[MILLISECOND] = toInt(('0.' + input) * 1000);
		    }

		    for (token = 'S'; token.length <= 9; token += 'S') {
		        addParseToken(token, parseMs);
		    }

		    getSetMillisecond = makeGetSet('Milliseconds', false);

		    // FORMATTING

		    addFormatToken('z', 0, 0, 'zoneAbbr');
		    addFormatToken('zz', 0, 0, 'zoneName');

		    // MOMENTS

		    function getZoneAbbr() {
		        return this._isUTC ? 'UTC' : '';
		    }

		    function getZoneName() {
		        return this._isUTC ? 'Coordinated Universal Time' : '';
		    }

		    var proto = Moment.prototype;

		    proto.add = add;
		    proto.calendar = calendar$1;
		    proto.clone = clone;
		    proto.diff = diff;
		    proto.endOf = endOf;
		    proto.format = format;
		    proto.from = from;
		    proto.fromNow = fromNow;
		    proto.to = to;
		    proto.toNow = toNow;
		    proto.get = stringGet;
		    proto.invalidAt = invalidAt;
		    proto.isAfter = isAfter;
		    proto.isBefore = isBefore;
		    proto.isBetween = isBetween;
		    proto.isSame = isSame;
		    proto.isSameOrAfter = isSameOrAfter;
		    proto.isSameOrBefore = isSameOrBefore;
		    proto.isValid = isValid$2;
		    proto.lang = lang;
		    proto.locale = locale;
		    proto.localeData = localeData;
		    proto.max = prototypeMax;
		    proto.min = prototypeMin;
		    proto.parsingFlags = parsingFlags;
		    proto.set = stringSet;
		    proto.startOf = startOf;
		    proto.subtract = subtract;
		    proto.toArray = toArray;
		    proto.toObject = toObject;
		    proto.toDate = toDate;
		    proto.toISOString = toISOString;
		    proto.inspect = inspect;
		    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
		        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
		            return 'Moment<' + this.format() + '>';
		        };
		    }
		    proto.toJSON = toJSON;
		    proto.toString = toString;
		    proto.unix = unix;
		    proto.valueOf = valueOf;
		    proto.creationData = creationData;
		    proto.eraName = getEraName;
		    proto.eraNarrow = getEraNarrow;
		    proto.eraAbbr = getEraAbbr;
		    proto.eraYear = getEraYear;
		    proto.year = getSetYear;
		    proto.isLeapYear = getIsLeapYear;
		    proto.weekYear = getSetWeekYear;
		    proto.isoWeekYear = getSetISOWeekYear;
		    proto.quarter = proto.quarters = getSetQuarter;
		    proto.month = getSetMonth;
		    proto.daysInMonth = getDaysInMonth;
		    proto.week = proto.weeks = getSetWeek;
		    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
		    proto.weeksInYear = getWeeksInYear;
		    proto.weeksInWeekYear = getWeeksInWeekYear;
		    proto.isoWeeksInYear = getISOWeeksInYear;
		    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
		    proto.date = getSetDayOfMonth;
		    proto.day = proto.days = getSetDayOfWeek;
		    proto.weekday = getSetLocaleDayOfWeek;
		    proto.isoWeekday = getSetISODayOfWeek;
		    proto.dayOfYear = getSetDayOfYear;
		    proto.hour = proto.hours = getSetHour;
		    proto.minute = proto.minutes = getSetMinute;
		    proto.second = proto.seconds = getSetSecond;
		    proto.millisecond = proto.milliseconds = getSetMillisecond;
		    proto.utcOffset = getSetOffset;
		    proto.utc = setOffsetToUTC;
		    proto.local = setOffsetToLocal;
		    proto.parseZone = setOffsetToParsedOffset;
		    proto.hasAlignedHourOffset = hasAlignedHourOffset;
		    proto.isDST = isDaylightSavingTime;
		    proto.isLocal = isLocal;
		    proto.isUtcOffset = isUtcOffset;
		    proto.isUtc = isUtc;
		    proto.isUTC = isUtc;
		    proto.zoneAbbr = getZoneAbbr;
		    proto.zoneName = getZoneName;
		    proto.dates = deprecate(
		        'dates accessor is deprecated. Use date instead.',
		        getSetDayOfMonth
		    );
		    proto.months = deprecate(
		        'months accessor is deprecated. Use month instead',
		        getSetMonth
		    );
		    proto.years = deprecate(
		        'years accessor is deprecated. Use year instead',
		        getSetYear
		    );
		    proto.zone = deprecate(
		        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
		        getSetZone
		    );
		    proto.isDSTShifted = deprecate(
		        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
		        isDaylightSavingTimeShifted
		    );

		    function createUnix(input) {
		        return createLocal(input * 1000);
		    }

		    function createInZone() {
		        return createLocal.apply(null, arguments).parseZone();
		    }

		    function preParsePostFormat(string) {
		        return string;
		    }

		    var proto$1 = Locale.prototype;

		    proto$1.calendar = calendar;
		    proto$1.longDateFormat = longDateFormat;
		    proto$1.invalidDate = invalidDate;
		    proto$1.ordinal = ordinal;
		    proto$1.preparse = preParsePostFormat;
		    proto$1.postformat = preParsePostFormat;
		    proto$1.relativeTime = relativeTime;
		    proto$1.pastFuture = pastFuture;
		    proto$1.set = set;
		    proto$1.eras = localeEras;
		    proto$1.erasParse = localeErasParse;
		    proto$1.erasConvertYear = localeErasConvertYear;
		    proto$1.erasAbbrRegex = erasAbbrRegex;
		    proto$1.erasNameRegex = erasNameRegex;
		    proto$1.erasNarrowRegex = erasNarrowRegex;

		    proto$1.months = localeMonths;
		    proto$1.monthsShort = localeMonthsShort;
		    proto$1.monthsParse = localeMonthsParse;
		    proto$1.monthsRegex = monthsRegex;
		    proto$1.monthsShortRegex = monthsShortRegex;
		    proto$1.week = localeWeek;
		    proto$1.firstDayOfYear = localeFirstDayOfYear;
		    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

		    proto$1.weekdays = localeWeekdays;
		    proto$1.weekdaysMin = localeWeekdaysMin;
		    proto$1.weekdaysShort = localeWeekdaysShort;
		    proto$1.weekdaysParse = localeWeekdaysParse;

		    proto$1.weekdaysRegex = weekdaysRegex;
		    proto$1.weekdaysShortRegex = weekdaysShortRegex;
		    proto$1.weekdaysMinRegex = weekdaysMinRegex;

		    proto$1.isPM = localeIsPM;
		    proto$1.meridiem = localeMeridiem;

		    function get$1(format, index, field, setter) {
		        var locale = getLocale(),
		            utc = createUTC().set(setter, index);
		        return locale[field](utc, format);
		    }

		    function listMonthsImpl(format, index, field) {
		        if (isNumber(format)) {
		            index = format;
		            format = undefined;
		        }

		        format = format || '';

		        if (index != null) {
		            return get$1(format, index, field, 'month');
		        }

		        var i,
		            out = [];
		        for (i = 0; i < 12; i++) {
		            out[i] = get$1(format, i, field, 'month');
		        }
		        return out;
		    }

		    // ()
		    // (5)
		    // (fmt, 5)
		    // (fmt)
		    // (true)
		    // (true, 5)
		    // (true, fmt, 5)
		    // (true, fmt)
		    function listWeekdaysImpl(localeSorted, format, index, field) {
		        if (typeof localeSorted === 'boolean') {
		            if (isNumber(format)) {
		                index = format;
		                format = undefined;
		            }

		            format = format || '';
		        } else {
		            format = localeSorted;
		            index = format;
		            localeSorted = false;

		            if (isNumber(format)) {
		                index = format;
		                format = undefined;
		            }

		            format = format || '';
		        }

		        var locale = getLocale(),
		            shift = localeSorted ? locale._week.dow : 0,
		            i,
		            out = [];

		        if (index != null) {
		            return get$1(format, (index + shift) % 7, field, 'day');
		        }

		        for (i = 0; i < 7; i++) {
		            out[i] = get$1(format, (i + shift) % 7, field, 'day');
		        }
		        return out;
		    }

		    function listMonths(format, index) {
		        return listMonthsImpl(format, index, 'months');
		    }

		    function listMonthsShort(format, index) {
		        return listMonthsImpl(format, index, 'monthsShort');
		    }

		    function listWeekdays(localeSorted, format, index) {
		        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
		    }

		    function listWeekdaysShort(localeSorted, format, index) {
		        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
		    }

		    function listWeekdaysMin(localeSorted, format, index) {
		        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
		    }

		    getSetGlobalLocale('en', {
		        eras: [
		            {
		                since: '0001-01-01',
		                until: +Infinity,
		                offset: 1,
		                name: 'Anno Domini',
		                narrow: 'AD',
		                abbr: 'AD',
		            },
		            {
		                since: '0000-12-31',
		                until: -Infinity,
		                offset: 1,
		                name: 'Before Christ',
		                narrow: 'BC',
		                abbr: 'BC',
		            },
		        ],
		        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
		        ordinal: function (number) {
		            var b = number % 10,
		                output =
		                    toInt((number % 100) / 10) === 1
		                        ? 'th'
		                        : b === 1
		                          ? 'st'
		                          : b === 2
		                            ? 'nd'
		                            : b === 3
		                              ? 'rd'
		                              : 'th';
		            return number + output;
		        },
		    });

		    // Side effect imports

		    hooks.lang = deprecate(
		        'moment.lang is deprecated. Use moment.locale instead.',
		        getSetGlobalLocale
		    );
		    hooks.langData = deprecate(
		        'moment.langData is deprecated. Use moment.localeData instead.',
		        getLocale
		    );

		    var mathAbs = Math.abs;

		    function abs() {
		        var data = this._data;

		        this._milliseconds = mathAbs(this._milliseconds);
		        this._days = mathAbs(this._days);
		        this._months = mathAbs(this._months);

		        data.milliseconds = mathAbs(data.milliseconds);
		        data.seconds = mathAbs(data.seconds);
		        data.minutes = mathAbs(data.minutes);
		        data.hours = mathAbs(data.hours);
		        data.months = mathAbs(data.months);
		        data.years = mathAbs(data.years);

		        return this;
		    }

		    function addSubtract$1(duration, input, value, direction) {
		        var other = createDuration(input, value);

		        duration._milliseconds += direction * other._milliseconds;
		        duration._days += direction * other._days;
		        duration._months += direction * other._months;

		        return duration._bubble();
		    }

		    // supports only 2.0-style add(1, 's') or add(duration)
		    function add$1(input, value) {
		        return addSubtract$1(this, input, value, 1);
		    }

		    // supports only 2.0-style subtract(1, 's') or subtract(duration)
		    function subtract$1(input, value) {
		        return addSubtract$1(this, input, value, -1);
		    }

		    function absCeil(number) {
		        if (number < 0) {
		            return Math.floor(number);
		        } else {
		            return Math.ceil(number);
		        }
		    }

		    function bubble() {
		        var milliseconds = this._milliseconds,
		            days = this._days,
		            months = this._months,
		            data = this._data,
		            seconds,
		            minutes,
		            hours,
		            years,
		            monthsFromDays;

		        // if we have a mix of positive and negative values, bubble down first
		        // check: https://github.com/moment/moment/issues/2166
		        if (
		            !(
		                (milliseconds >= 0 && days >= 0 && months >= 0) ||
		                (milliseconds <= 0 && days <= 0 && months <= 0)
		            )
		        ) {
		            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
		            days = 0;
		            months = 0;
		        }

		        // The following code bubbles up values, see the tests for
		        // examples of what that means.
		        data.milliseconds = milliseconds % 1000;

		        seconds = absFloor(milliseconds / 1000);
		        data.seconds = seconds % 60;

		        minutes = absFloor(seconds / 60);
		        data.minutes = minutes % 60;

		        hours = absFloor(minutes / 60);
		        data.hours = hours % 24;

		        days += absFloor(hours / 24);

		        // convert days to months
		        monthsFromDays = absFloor(daysToMonths(days));
		        months += monthsFromDays;
		        days -= absCeil(monthsToDays(monthsFromDays));

		        // 12 months -> 1 year
		        years = absFloor(months / 12);
		        months %= 12;

		        data.days = days;
		        data.months = months;
		        data.years = years;

		        return this;
		    }

		    function daysToMonths(days) {
		        // 400 years have 146097 days (taking into account leap year rules)
		        // 400 years have 12 months === 4800
		        return (days * 4800) / 146097;
		    }

		    function monthsToDays(months) {
		        // the reverse of daysToMonths
		        return (months * 146097) / 4800;
		    }

		    function as(units) {
		        if (!this.isValid()) {
		            return NaN;
		        }
		        var days,
		            months,
		            milliseconds = this._milliseconds;

		        units = normalizeUnits(units);

		        if (units === 'month' || units === 'quarter' || units === 'year') {
		            days = this._days + milliseconds / 864e5;
		            months = this._months + daysToMonths(days);
		            switch (units) {
		                case 'month':
		                    return months;
		                case 'quarter':
		                    return months / 3;
		                case 'year':
		                    return months / 12;
		            }
		        } else {
		            // handle milliseconds separately because of floating point math errors (issue #1867)
		            days = this._days + Math.round(monthsToDays(this._months));
		            switch (units) {
		                case 'week':
		                    return days / 7 + milliseconds / 6048e5;
		                case 'day':
		                    return days + milliseconds / 864e5;
		                case 'hour':
		                    return days * 24 + milliseconds / 36e5;
		                case 'minute':
		                    return days * 1440 + milliseconds / 6e4;
		                case 'second':
		                    return days * 86400 + milliseconds / 1000;
		                // Math.floor prevents floating point math errors here
		                case 'millisecond':
		                    return Math.floor(days * 864e5) + milliseconds;
		                default:
		                    throw new Error('Unknown unit ' + units);
		            }
		        }
		    }

		    function makeAs(alias) {
		        return function () {
		            return this.as(alias);
		        };
		    }

		    var asMilliseconds = makeAs('ms'),
		        asSeconds = makeAs('s'),
		        asMinutes = makeAs('m'),
		        asHours = makeAs('h'),
		        asDays = makeAs('d'),
		        asWeeks = makeAs('w'),
		        asMonths = makeAs('M'),
		        asQuarters = makeAs('Q'),
		        asYears = makeAs('y'),
		        valueOf$1 = asMilliseconds;

		    function clone$1() {
		        return createDuration(this);
		    }

		    function get$2(units) {
		        units = normalizeUnits(units);
		        return this.isValid() ? this[units + 's']() : NaN;
		    }

		    function makeGetter(name) {
		        return function () {
		            return this.isValid() ? this._data[name] : NaN;
		        };
		    }

		    var milliseconds = makeGetter('milliseconds'),
		        seconds = makeGetter('seconds'),
		        minutes = makeGetter('minutes'),
		        hours = makeGetter('hours'),
		        days = makeGetter('days'),
		        months = makeGetter('months'),
		        years = makeGetter('years');

		    function weeks() {
		        return absFloor(this.days() / 7);
		    }

		    var round = Math.round,
		        thresholds = {
		            ss: 44, // a few seconds to seconds
		            s: 45, // seconds to minute
		            m: 45, // minutes to hour
		            h: 22, // hours to day
		            d: 26, // days to month/week
		            w: null, // weeks to month
		            M: 11, // months to year
		        };

		    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
		    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
		        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
		    }

		    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
		        var duration = createDuration(posNegDuration).abs(),
		            seconds = round(duration.as('s')),
		            minutes = round(duration.as('m')),
		            hours = round(duration.as('h')),
		            days = round(duration.as('d')),
		            months = round(duration.as('M')),
		            weeks = round(duration.as('w')),
		            years = round(duration.as('y')),
		            a =
		                (seconds <= thresholds.ss && ['s', seconds]) ||
		                (seconds < thresholds.s && ['ss', seconds]) ||
		                (minutes <= 1 && ['m']) ||
		                (minutes < thresholds.m && ['mm', minutes]) ||
		                (hours <= 1 && ['h']) ||
		                (hours < thresholds.h && ['hh', hours]) ||
		                (days <= 1 && ['d']) ||
		                (days < thresholds.d && ['dd', days]);

		        if (thresholds.w != null) {
		            a =
		                a ||
		                (weeks <= 1 && ['w']) ||
		                (weeks < thresholds.w && ['ww', weeks]);
		        }
		        a = a ||
		            (months <= 1 && ['M']) ||
		            (months < thresholds.M && ['MM', months]) ||
		            (years <= 1 && ['y']) || ['yy', years];

		        a[2] = withoutSuffix;
		        a[3] = +posNegDuration > 0;
		        a[4] = locale;
		        return substituteTimeAgo.apply(null, a);
		    }

		    // This function allows you to set the rounding function for relative time strings
		    function getSetRelativeTimeRounding(roundingFunction) {
		        if (roundingFunction === undefined) {
		            return round;
		        }
		        if (typeof roundingFunction === 'function') {
		            round = roundingFunction;
		            return true;
		        }
		        return false;
		    }

		    // This function allows you to set a threshold for relative time strings
		    function getSetRelativeTimeThreshold(threshold, limit) {
		        if (thresholds[threshold] === undefined) {
		            return false;
		        }
		        if (limit === undefined) {
		            return thresholds[threshold];
		        }
		        thresholds[threshold] = limit;
		        if (threshold === 's') {
		            thresholds.ss = limit - 1;
		        }
		        return true;
		    }

		    function humanize(argWithSuffix, argThresholds) {
		        if (!this.isValid()) {
		            return this.localeData().invalidDate();
		        }

		        var withSuffix = false,
		            th = thresholds,
		            locale,
		            output;

		        if (typeof argWithSuffix === 'object') {
		            argThresholds = argWithSuffix;
		            argWithSuffix = false;
		        }
		        if (typeof argWithSuffix === 'boolean') {
		            withSuffix = argWithSuffix;
		        }
		        if (typeof argThresholds === 'object') {
		            th = Object.assign({}, thresholds, argThresholds);
		            if (argThresholds.s != null && argThresholds.ss == null) {
		                th.ss = argThresholds.s - 1;
		            }
		        }

		        locale = this.localeData();
		        output = relativeTime$1(this, !withSuffix, th, locale);

		        if (withSuffix) {
		            output = locale.pastFuture(+this, output);
		        }

		        return locale.postformat(output);
		    }

		    var abs$1 = Math.abs;

		    function sign(x) {
		        return (x > 0) - (x < 0) || +x;
		    }

		    function toISOString$1() {
		        // for ISO strings we do not use the normal bubbling rules:
		        //  * milliseconds bubble up until they become hours
		        //  * days do not bubble at all
		        //  * months bubble up until they become years
		        // This is because there is no context-free conversion between hours and days
		        // (think of clock changes)
		        // and also not between days and months (28-31 days per month)
		        if (!this.isValid()) {
		            return this.localeData().invalidDate();
		        }

		        var seconds = abs$1(this._milliseconds) / 1000,
		            days = abs$1(this._days),
		            months = abs$1(this._months),
		            minutes,
		            hours,
		            years,
		            s,
		            total = this.asSeconds(),
		            totalSign,
		            ymSign,
		            daysSign,
		            hmsSign;

		        if (!total) {
		            // this is the same as C#'s (Noda) and python (isodate)...
		            // but not other JS (goog.date)
		            return 'P0D';
		        }

		        // 3600 seconds -> 60 minutes -> 1 hour
		        minutes = absFloor(seconds / 60);
		        hours = absFloor(minutes / 60);
		        seconds %= 60;
		        minutes %= 60;

		        // 12 months -> 1 year
		        years = absFloor(months / 12);
		        months %= 12;

		        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
		        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

		        totalSign = total < 0 ? '-' : '';
		        ymSign = sign(this._months) !== sign(total) ? '-' : '';
		        daysSign = sign(this._days) !== sign(total) ? '-' : '';
		        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

		        return (
		            totalSign +
		            'P' +
		            (years ? ymSign + years + 'Y' : '') +
		            (months ? ymSign + months + 'M' : '') +
		            (days ? daysSign + days + 'D' : '') +
		            (hours || minutes || seconds ? 'T' : '') +
		            (hours ? hmsSign + hours + 'H' : '') +
		            (minutes ? hmsSign + minutes + 'M' : '') +
		            (seconds ? hmsSign + s + 'S' : '')
		        );
		    }

		    var proto$2 = Duration.prototype;

		    proto$2.isValid = isValid$1;
		    proto$2.abs = abs;
		    proto$2.add = add$1;
		    proto$2.subtract = subtract$1;
		    proto$2.as = as;
		    proto$2.asMilliseconds = asMilliseconds;
		    proto$2.asSeconds = asSeconds;
		    proto$2.asMinutes = asMinutes;
		    proto$2.asHours = asHours;
		    proto$2.asDays = asDays;
		    proto$2.asWeeks = asWeeks;
		    proto$2.asMonths = asMonths;
		    proto$2.asQuarters = asQuarters;
		    proto$2.asYears = asYears;
		    proto$2.valueOf = valueOf$1;
		    proto$2._bubble = bubble;
		    proto$2.clone = clone$1;
		    proto$2.get = get$2;
		    proto$2.milliseconds = milliseconds;
		    proto$2.seconds = seconds;
		    proto$2.minutes = minutes;
		    proto$2.hours = hours;
		    proto$2.days = days;
		    proto$2.weeks = weeks;
		    proto$2.months = months;
		    proto$2.years = years;
		    proto$2.humanize = humanize;
		    proto$2.toISOString = toISOString$1;
		    proto$2.toString = toISOString$1;
		    proto$2.toJSON = toISOString$1;
		    proto$2.locale = locale;
		    proto$2.localeData = localeData;

		    proto$2.toIsoString = deprecate(
		        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
		        toISOString$1
		    );
		    proto$2.lang = lang;

		    // FORMATTING

		    addFormatToken('X', 0, 0, 'unix');
		    addFormatToken('x', 0, 0, 'valueOf');

		    // PARSING

		    addRegexToken('x', matchSigned);
		    addRegexToken('X', matchTimestamp);
		    addParseToken('X', function (input, array, config) {
		        config._d = new Date(parseFloat(input) * 1000);
		    });
		    addParseToken('x', function (input, array, config) {
		        config._d = new Date(toInt(input));
		    });

		    //! moment.js

		    hooks.version = '2.30.1';

		    setHookCallback(createLocal);

		    hooks.fn = proto;
		    hooks.min = min;
		    hooks.max = max;
		    hooks.now = now;
		    hooks.utc = createUTC;
		    hooks.unix = createUnix;
		    hooks.months = listMonths;
		    hooks.isDate = isDate;
		    hooks.locale = getSetGlobalLocale;
		    hooks.invalid = createInvalid;
		    hooks.duration = createDuration;
		    hooks.isMoment = isMoment;
		    hooks.weekdays = listWeekdays;
		    hooks.parseZone = createInZone;
		    hooks.localeData = getLocale;
		    hooks.isDuration = isDuration;
		    hooks.monthsShort = listMonthsShort;
		    hooks.weekdaysMin = listWeekdaysMin;
		    hooks.defineLocale = defineLocale;
		    hooks.updateLocale = updateLocale;
		    hooks.locales = listLocales;
		    hooks.weekdaysShort = listWeekdaysShort;
		    hooks.normalizeUnits = normalizeUnits;
		    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
		    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
		    hooks.calendarFormat = getCalendarFormat;
		    hooks.prototype = proto;

		    // currently HTML5 input type only supports 24-hour formats
		    hooks.HTML5_FMT = {
		        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
		        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
		        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
		        DATE: 'YYYY-MM-DD', // <input type="date" />
		        TIME: 'HH:mm', // <input type="time" />
		        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
		        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
		        WEEK: 'GGGG-[W]WW', // <input type="week" />
		        MONTH: 'YYYY-MM', // <input type="month" />
		    };

		    return hooks;

		}))); 
	} (moment$2));
	return moment$2.exports;
}

var momentExports = requireMoment();
var moment = /*@__PURE__*/getDefaultExportFromCjs(momentExports);

var isCallable;
var hasRequiredIsCallable$1;

function requireIsCallable$1 () {
	if (hasRequiredIsCallable$1) return isCallable;
	hasRequiredIsCallable$1 = 1;

	var fnToStr = Function.prototype.toString;
	var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
	var badArrayLike;
	var isCallableMarker;
	if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
		try {
			badArrayLike = Object.defineProperty({}, 'length', {
				get: function () {
					throw isCallableMarker;
				}
			});
			isCallableMarker = {};
			// eslint-disable-next-line no-throw-literal
			reflectApply(function () { throw 42; }, null, badArrayLike);
		} catch (_) {
			if (_ !== isCallableMarker) {
				reflectApply = null;
			}
		}
	} else {
		reflectApply = null;
	}

	var constructorRegex = /^\s*class\b/;
	var isES6ClassFn = function isES6ClassFunction(value) {
		try {
			var fnStr = fnToStr.call(value);
			return constructorRegex.test(fnStr);
		} catch (e) {
			return false; // not a function
		}
	};

	var tryFunctionObject = function tryFunctionToStr(value) {
		try {
			if (isES6ClassFn(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var objectClass = '[object Object]';
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var ddaClass = '[object HTMLAllCollection]'; // IE 11
	var ddaClass2 = '[object HTML document.all class]';
	var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
	var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

	var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

	var isDDA = function isDocumentDotAll() { return false; };
	if (typeof document === 'object') {
		// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
		var all = document.all;
		if (toStr.call(all) === toStr.call(document.all)) {
			isDDA = function isDocumentDotAll(value) {
				/* globals document: false */
				// in IE 6-8, typeof document.all is "object" and it's truthy
				if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
					try {
						var str = toStr.call(value);
						return (
							str === ddaClass
							|| str === ddaClass2
							|| str === ddaClass3 // opera 12.16
							|| str === objectClass // IE 6-8
						) && value('') == null; // eslint-disable-line eqeqeq
					} catch (e) { /**/ }
				}
				return false;
			};
		}
	}

	isCallable = reflectApply
		? function isCallable(value) {
			if (isDDA(value)) { return true; }
			if (!value) { return false; }
			if (typeof value !== 'function' && typeof value !== 'object') { return false; }
			try {
				reflectApply(value, null, badArrayLike);
			} catch (e) {
				if (e !== isCallableMarker) { return false; }
			}
			return !isES6ClassFn(value) && tryFunctionObject(value);
		}
		: function isCallable(value) {
			if (isDDA(value)) { return true; }
			if (!value) { return false; }
			if (typeof value !== 'function' && typeof value !== 'object') { return false; }
			if (hasToStringTag) { return tryFunctionObject(value); }
			if (isES6ClassFn(value)) { return false; }
			var strClass = toStr.call(value);
			if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
			return tryFunctionObject(value);
		};
	return isCallable;
}

var forEach$1;
var hasRequiredForEach$1;

function requireForEach$1 () {
	if (hasRequiredForEach$1) return forEach$1;
	hasRequiredForEach$1 = 1;

	var isCallable = requireIsCallable$1();

	var toStr = Object.prototype.toString;
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/** @type {<This, A extends readonly unknown[]>(arr: A, iterator: (this: This | void, value: A[number], index: number, arr: A) => void, receiver: This | undefined) => void} */
	var forEachArray = function forEachArray(array, iterator, receiver) {
	    for (var i = 0, len = array.length; i < len; i++) {
	        if (hasOwnProperty.call(array, i)) {
	            if (receiver == null) {
	                iterator(array[i], i, array);
	            } else {
	                iterator.call(receiver, array[i], i, array);
	            }
	        }
	    }
	};

	/** @type {<This, S extends string>(string: S, iterator: (this: This | void, value: S[number], index: number, string: S) => void, receiver: This | undefined) => void} */
	var forEachString = function forEachString(string, iterator, receiver) {
	    for (var i = 0, len = string.length; i < len; i++) {
	        // no such thing as a sparse string.
	        if (receiver == null) {
	            iterator(string.charAt(i), i, string);
	        } else {
	            iterator.call(receiver, string.charAt(i), i, string);
	        }
	    }
	};

	/** @type {<This, O>(obj: O, iterator: (this: This | void, value: O[keyof O], index: keyof O, obj: O) => void, receiver: This | undefined) => void} */
	var forEachObject = function forEachObject(object, iterator, receiver) {
	    for (var k in object) {
	        if (hasOwnProperty.call(object, k)) {
	            if (receiver == null) {
	                iterator(object[k], k, object);
	            } else {
	                iterator.call(receiver, object[k], k, object);
	            }
	        }
	    }
	};

	/** @type {(x: unknown) => x is readonly unknown[]} */
	function isArray(x) {
	    return toStr.call(x) === '[object Array]';
	}

	/** @type {import('.')._internal} */
	forEach$1 = function forEach(list, iterator, thisArg) {
	    if (!isCallable(iterator)) {
	        throw new TypeError('iterator must be a function');
	    }

	    var receiver;
	    if (arguments.length >= 3) {
	        receiver = thisArg;
	    }

	    if (isArray(list)) {
	        forEachArray(list, iterator, receiver);
	    } else if (typeof list === 'string') {
	        forEachString(list, iterator, receiver);
	    } else {
	        forEachObject(list, iterator, receiver);
	    }
	};
	return forEach$1;
}

var possibleTypedArrayNames;
var hasRequiredPossibleTypedArrayNames;

function requirePossibleTypedArrayNames () {
	if (hasRequiredPossibleTypedArrayNames) return possibleTypedArrayNames;
	hasRequiredPossibleTypedArrayNames = 1;

	/** @type {import('.')} */
	possibleTypedArrayNames = [
		'Float16Array',
		'Float32Array',
		'Float64Array',
		'Int8Array',
		'Int16Array',
		'Int32Array',
		'Uint8Array',
		'Uint8ClampedArray',
		'Uint16Array',
		'Uint32Array',
		'BigInt64Array',
		'BigUint64Array'
	];
	return possibleTypedArrayNames;
}

var availableTypedArrays;
var hasRequiredAvailableTypedArrays;

function requireAvailableTypedArrays () {
	if (hasRequiredAvailableTypedArrays) return availableTypedArrays;
	hasRequiredAvailableTypedArrays = 1;

	var possibleNames = /*@__PURE__*/ requirePossibleTypedArrayNames();

	var g = typeof globalThis === 'undefined' ? commonjsGlobal : globalThis;

	/** @type {import('.')} */
	availableTypedArrays = function availableTypedArrays() {
		var /** @type {ReturnType<typeof availableTypedArrays>} */ out = [];
		for (var i = 0; i < possibleNames.length; i++) {
			if (typeof g[possibleNames[i]] === 'function') {
				// @ts-expect-error
				out[out.length] = possibleNames[i];
			}
		}
		return out;
	};
	return availableTypedArrays;
}

var callBind = {exports: {}};

var esObjectAtoms;
var hasRequiredEsObjectAtoms;

function requireEsObjectAtoms () {
	if (hasRequiredEsObjectAtoms) return esObjectAtoms;
	hasRequiredEsObjectAtoms = 1;

	/** @type {import('.')} */
	esObjectAtoms = Object;
	return esObjectAtoms;
}

var esErrors;
var hasRequiredEsErrors;

function requireEsErrors () {
	if (hasRequiredEsErrors) return esErrors;
	hasRequiredEsErrors = 1;

	/** @type {import('.')} */
	esErrors = Error;
	return esErrors;
}

var _eval;
var hasRequired_eval;

function require_eval () {
	if (hasRequired_eval) return _eval;
	hasRequired_eval = 1;

	/** @type {import('./eval')} */
	_eval = EvalError;
	return _eval;
}

var range;
var hasRequiredRange;

function requireRange () {
	if (hasRequiredRange) return range;
	hasRequiredRange = 1;

	/** @type {import('./range')} */
	range = RangeError;
	return range;
}

var ref;
var hasRequiredRef;

function requireRef () {
	if (hasRequiredRef) return ref;
	hasRequiredRef = 1;

	/** @type {import('./ref')} */
	ref = ReferenceError;
	return ref;
}

var syntax;
var hasRequiredSyntax;

function requireSyntax () {
	if (hasRequiredSyntax) return syntax;
	hasRequiredSyntax = 1;

	/** @type {import('./syntax')} */
	syntax = SyntaxError;
	return syntax;
}

var type;
var hasRequiredType;

function requireType () {
	if (hasRequiredType) return type;
	hasRequiredType = 1;

	/** @type {import('./type')} */
	type = TypeError;
	return type;
}

var uri;
var hasRequiredUri;

function requireUri () {
	if (hasRequiredUri) return uri;
	hasRequiredUri = 1;

	/** @type {import('./uri')} */
	uri = URIError;
	return uri;
}

var abs;
var hasRequiredAbs;

function requireAbs () {
	if (hasRequiredAbs) return abs;
	hasRequiredAbs = 1;

	/** @type {import('./abs')} */
	abs = Math.abs;
	return abs;
}

var floor$1;
var hasRequiredFloor$1;

function requireFloor$1 () {
	if (hasRequiredFloor$1) return floor$1;
	hasRequiredFloor$1 = 1;

	/** @type {import('./floor')} */
	floor$1 = Math.floor;
	return floor$1;
}

var max;
var hasRequiredMax;

function requireMax () {
	if (hasRequiredMax) return max;
	hasRequiredMax = 1;

	/** @type {import('./max')} */
	max = Math.max;
	return max;
}

var min;
var hasRequiredMin;

function requireMin () {
	if (hasRequiredMin) return min;
	hasRequiredMin = 1;

	/** @type {import('./min')} */
	min = Math.min;
	return min;
}

var pow;
var hasRequiredPow;

function requirePow () {
	if (hasRequiredPow) return pow;
	hasRequiredPow = 1;

	/** @type {import('./pow')} */
	pow = Math.pow;
	return pow;
}

var round;
var hasRequiredRound;

function requireRound () {
	if (hasRequiredRound) return round;
	hasRequiredRound = 1;

	/** @type {import('./round')} */
	round = Math.round;
	return round;
}

var _isNaN;
var hasRequired_isNaN;

function require_isNaN () {
	if (hasRequired_isNaN) return _isNaN;
	hasRequired_isNaN = 1;

	/** @type {import('./isNaN')} */
	_isNaN = Number.isNaN || function isNaN(a) {
		return a !== a;
	};
	return _isNaN;
}

var sign;
var hasRequiredSign;

function requireSign () {
	if (hasRequiredSign) return sign;
	hasRequiredSign = 1;

	var $isNaN = /*@__PURE__*/ require_isNaN();

	/** @type {import('./sign')} */
	sign = function sign(number) {
		if ($isNaN(number) || number === 0) {
			return number;
		}
		return number < 0 ? -1 : 1;
	};
	return sign;
}

var gOPD;
var hasRequiredGOPD;

function requireGOPD () {
	if (hasRequiredGOPD) return gOPD;
	hasRequiredGOPD = 1;

	/** @type {import('./gOPD')} */
	gOPD = Object.getOwnPropertyDescriptor;
	return gOPD;
}

var gopd;
var hasRequiredGopd;

function requireGopd () {
	if (hasRequiredGopd) return gopd;
	hasRequiredGopd = 1;

	/** @type {import('.')} */
	var $gOPD = /*@__PURE__*/ requireGOPD();

	if ($gOPD) {
		try {
			$gOPD([], 'length');
		} catch (e) {
			// IE 8 has a broken gOPD
			$gOPD = null;
		}
	}

	gopd = $gOPD;
	return gopd;
}

var esDefineProperty;
var hasRequiredEsDefineProperty;

function requireEsDefineProperty () {
	if (hasRequiredEsDefineProperty) return esDefineProperty;
	hasRequiredEsDefineProperty = 1;

	/** @type {import('.')} */
	var $defineProperty = Object.defineProperty || false;
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
		} catch (e) {
			// IE 8 has a broken defineProperty
			$defineProperty = false;
		}
	}

	esDefineProperty = $defineProperty;
	return esDefineProperty;
}

var shams$1;
var hasRequiredShams$1;

function requireShams$1 () {
	if (hasRequiredShams$1) return shams$1;
	hasRequiredShams$1 = 1;

	/** @type {import('./shams')} */
	/* eslint complexity: [2, 18], max-statements: [2, 33] */
	shams$1 = function hasSymbols() {
		if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
		if (typeof Symbol.iterator === 'symbol') { return true; }

		/** @type {{ [k in symbol]?: unknown }} */
		var obj = {};
		var sym = Symbol('test');
		var symObj = Object(sym);
		if (typeof sym === 'string') { return false; }

		if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
		if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

		// temp disabled per https://github.com/ljharb/object.assign/issues/17
		// if (sym instanceof Symbol) { return false; }
		// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
		// if (!(symObj instanceof Symbol)) { return false; }

		// if (typeof Symbol.prototype.toString !== 'function') { return false; }
		// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

		var symVal = 42;
		obj[sym] = symVal;
		for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
		if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

		if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) { return false; }

		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

		if (typeof Object.getOwnPropertyDescriptor === 'function') {
			// eslint-disable-next-line no-extra-parens
			var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
			if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
		}

		return true;
	};
	return shams$1;
}

var hasSymbols;
var hasRequiredHasSymbols;

function requireHasSymbols () {
	if (hasRequiredHasSymbols) return hasSymbols;
	hasRequiredHasSymbols = 1;

	var origSymbol = typeof Symbol !== 'undefined' && Symbol;
	var hasSymbolSham = requireShams$1();

	/** @type {import('.')} */
	hasSymbols = function hasNativeSymbols() {
		if (typeof origSymbol !== 'function') { return false; }
		if (typeof Symbol !== 'function') { return false; }
		if (typeof origSymbol('foo') !== 'symbol') { return false; }
		if (typeof Symbol('bar') !== 'symbol') { return false; }

		return hasSymbolSham();
	};
	return hasSymbols;
}

var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;

function requireReflect_getPrototypeOf () {
	if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
	hasRequiredReflect_getPrototypeOf = 1;

	/** @type {import('./Reflect.getPrototypeOf')} */
	Reflect_getPrototypeOf = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;
	return Reflect_getPrototypeOf;
}

var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;

function requireObject_getPrototypeOf () {
	if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
	hasRequiredObject_getPrototypeOf = 1;

	var $Object = /*@__PURE__*/ requireEsObjectAtoms();

	/** @type {import('./Object.getPrototypeOf')} */
	Object_getPrototypeOf = $Object.getPrototypeOf || null;
	return Object_getPrototypeOf;
}

var implementation$5;
var hasRequiredImplementation$5;

function requireImplementation$5 () {
	if (hasRequiredImplementation$5) return implementation$5;
	hasRequiredImplementation$5 = 1;

	/* eslint no-invalid-this: 1 */

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var toStr = Object.prototype.toString;
	var max = Math.max;
	var funcType = '[object Function]';

	var concatty = function concatty(a, b) {
	    var arr = [];

	    for (var i = 0; i < a.length; i += 1) {
	        arr[i] = a[i];
	    }
	    for (var j = 0; j < b.length; j += 1) {
	        arr[j + a.length] = b[j];
	    }

	    return arr;
	};

	var slicy = function slicy(arrLike, offset) {
	    var arr = [];
	    for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
	        arr[j] = arrLike[i];
	    }
	    return arr;
	};

	var joiny = function (arr, joiner) {
	    var str = '';
	    for (var i = 0; i < arr.length; i += 1) {
	        str += arr[i];
	        if (i + 1 < arr.length) {
	            str += joiner;
	        }
	    }
	    return str;
	};

	implementation$5 = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slicy(arguments, 1);

	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                concatty(args, arguments)
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        }
	        return target.apply(
	            that,
	            concatty(args, arguments)
	        );

	    };

	    var boundLength = max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs[i] = '$' + i;
	    }

	    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }

	    return bound;
	};
	return implementation$5;
}

var functionBind;
var hasRequiredFunctionBind;

function requireFunctionBind () {
	if (hasRequiredFunctionBind) return functionBind;
	hasRequiredFunctionBind = 1;

	var implementation = requireImplementation$5();

	functionBind = Function.prototype.bind || implementation;
	return functionBind;
}

var functionCall;
var hasRequiredFunctionCall;

function requireFunctionCall () {
	if (hasRequiredFunctionCall) return functionCall;
	hasRequiredFunctionCall = 1;

	/** @type {import('./functionCall')} */
	functionCall = Function.prototype.call;
	return functionCall;
}

var functionApply;
var hasRequiredFunctionApply;

function requireFunctionApply () {
	if (hasRequiredFunctionApply) return functionApply;
	hasRequiredFunctionApply = 1;

	/** @type {import('./functionApply')} */
	functionApply = Function.prototype.apply;
	return functionApply;
}

var reflectApply;
var hasRequiredReflectApply;

function requireReflectApply () {
	if (hasRequiredReflectApply) return reflectApply;
	hasRequiredReflectApply = 1;

	/** @type {import('./reflectApply')} */
	reflectApply = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
	return reflectApply;
}

var actualApply;
var hasRequiredActualApply;

function requireActualApply () {
	if (hasRequiredActualApply) return actualApply;
	hasRequiredActualApply = 1;

	var bind = requireFunctionBind();

	var $apply = requireFunctionApply();
	var $call = requireFunctionCall();
	var $reflectApply = requireReflectApply();

	/** @type {import('./actualApply')} */
	actualApply = $reflectApply || bind.call($call, $apply);
	return actualApply;
}

var callBindApplyHelpers;
var hasRequiredCallBindApplyHelpers;

function requireCallBindApplyHelpers () {
	if (hasRequiredCallBindApplyHelpers) return callBindApplyHelpers;
	hasRequiredCallBindApplyHelpers = 1;

	var bind = requireFunctionBind();
	var $TypeError = /*@__PURE__*/ requireType();

	var $call = requireFunctionCall();
	var $actualApply = requireActualApply();

	/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
	callBindApplyHelpers = function callBindBasic(args) {
		if (args.length < 1 || typeof args[0] !== 'function') {
			throw new $TypeError('a function is required');
		}
		return $actualApply(bind, $call, args);
	};
	return callBindApplyHelpers;
}

var get;
var hasRequiredGet$1;

function requireGet$1 () {
	if (hasRequiredGet$1) return get;
	hasRequiredGet$1 = 1;

	var callBind = requireCallBindApplyHelpers();
	var gOPD = /*@__PURE__*/ requireGopd();

	var hasProtoAccessor;
	try {
		// eslint-disable-next-line no-extra-parens, no-proto
		hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
			throw e;
		}
	}

	// eslint-disable-next-line no-extra-parens
	var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

	var $Object = Object;
	var $getPrototypeOf = $Object.getPrototypeOf;

	/** @type {import('./get')} */
	get = desc && typeof desc.get === 'function'
		? callBind([desc.get])
		: typeof $getPrototypeOf === 'function'
			? /** @type {import('./get')} */ function getDunder(value) {
				// eslint-disable-next-line eqeqeq
				return $getPrototypeOf(value == null ? value : $Object(value));
			}
			: false;
	return get;
}

var getProto;
var hasRequiredGetProto;

function requireGetProto () {
	if (hasRequiredGetProto) return getProto;
	hasRequiredGetProto = 1;

	var reflectGetProto = requireReflect_getPrototypeOf();
	var originalGetProto = requireObject_getPrototypeOf();

	var getDunderProto = /*@__PURE__*/ requireGet$1();

	/** @type {import('.')} */
	getProto = reflectGetProto
		? function getProto(O) {
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			return reflectGetProto(O);
		}
		: originalGetProto
			? function getProto(O) {
				if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
					throw new TypeError('getProto: not an object');
				}
				// @ts-expect-error TS can't narrow inside a closure, for some reason
				return originalGetProto(O);
			}
			: getDunderProto
				? function getProto(O) {
					// @ts-expect-error TS can't narrow inside a closure, for some reason
					return getDunderProto(O);
				}
				: null;
	return getProto;
}

var hasown;
var hasRequiredHasown;

function requireHasown () {
	if (hasRequiredHasown) return hasown;
	hasRequiredHasown = 1;

	var call = Function.prototype.call;
	var $hasOwn = Object.prototype.hasOwnProperty;
	var bind = requireFunctionBind();

	/** @type {import('.')} */
	hasown = bind.call(call, $hasOwn);
	return hasown;
}

var getIntrinsic;
var hasRequiredGetIntrinsic$1;

function requireGetIntrinsic$1 () {
	if (hasRequiredGetIntrinsic$1) return getIntrinsic;
	hasRequiredGetIntrinsic$1 = 1;

	var undefined$1;

	var $Object = /*@__PURE__*/ requireEsObjectAtoms();

	var $Error = /*@__PURE__*/ requireEsErrors();
	var $EvalError = /*@__PURE__*/ require_eval();
	var $RangeError = /*@__PURE__*/ requireRange();
	var $ReferenceError = /*@__PURE__*/ requireRef();
	var $SyntaxError = /*@__PURE__*/ requireSyntax();
	var $TypeError = /*@__PURE__*/ requireType();
	var $URIError = /*@__PURE__*/ requireUri();

	var abs = /*@__PURE__*/ requireAbs();
	var floor = /*@__PURE__*/ requireFloor$1();
	var max = /*@__PURE__*/ requireMax();
	var min = /*@__PURE__*/ requireMin();
	var pow = /*@__PURE__*/ requirePow();
	var round = /*@__PURE__*/ requireRound();
	var sign = /*@__PURE__*/ requireSign();

	var $Function = Function;

	// eslint-disable-next-line consistent-return
	var getEvalledConstructor = function (expressionSyntax) {
		try {
			return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
		} catch (e) {}
	};

	var $gOPD = /*@__PURE__*/ requireGopd();
	var $defineProperty = /*@__PURE__*/ requireEsDefineProperty();

	var throwTypeError = function () {
		throw new $TypeError();
	};
	var ThrowTypeError = $gOPD
		? (function () {
			try {
				// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
				arguments.callee; // IE 8 does not throw here
				return throwTypeError;
			} catch (calleeThrows) {
				try {
					// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
					return $gOPD(arguments, 'callee').get;
				} catch (gOPDthrows) {
					return throwTypeError;
				}
			}
		}())
		: throwTypeError;

	var hasSymbols = requireHasSymbols()();

	var getProto = requireGetProto();
	var $ObjectGPO = requireObject_getPrototypeOf();
	var $ReflectGPO = requireReflect_getPrototypeOf();

	var $apply = requireFunctionApply();
	var $call = requireFunctionCall();

	var needsEval = {};

	var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined$1 : getProto(Uint8Array);

	var INTRINSICS = {
		__proto__: null,
		'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
		'%Array%': Array,
		'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
		'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
		'%AsyncFromSyncIteratorPrototype%': undefined$1,
		'%AsyncFunction%': needsEval,
		'%AsyncGenerator%': needsEval,
		'%AsyncGeneratorFunction%': needsEval,
		'%AsyncIteratorPrototype%': needsEval,
		'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
		'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
		'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined$1 : BigInt64Array,
		'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined$1 : BigUint64Array,
		'%Boolean%': Boolean,
		'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
		'%Date%': Date,
		'%decodeURI%': decodeURI,
		'%decodeURIComponent%': decodeURIComponent,
		'%encodeURI%': encodeURI,
		'%encodeURIComponent%': encodeURIComponent,
		'%Error%': $Error,
		'%eval%': eval, // eslint-disable-line no-eval
		'%EvalError%': $EvalError,
		'%Float16Array%': typeof Float16Array === 'undefined' ? undefined$1 : Float16Array,
		'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
		'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
		'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
		'%Function%': $Function,
		'%GeneratorFunction%': needsEval,
		'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
		'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
		'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
		'%isFinite%': isFinite,
		'%isNaN%': isNaN,
		'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
		'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
		'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
		'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
		'%Math%': Math,
		'%Number%': Number,
		'%Object%': $Object,
		'%Object.getOwnPropertyDescriptor%': $gOPD,
		'%parseFloat%': parseFloat,
		'%parseInt%': parseInt,
		'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
		'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
		'%RangeError%': $RangeError,
		'%ReferenceError%': $ReferenceError,
		'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
		'%RegExp%': RegExp,
		'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
		'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
		'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
		'%String%': String,
		'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined$1,
		'%Symbol%': hasSymbols ? Symbol : undefined$1,
		'%SyntaxError%': $SyntaxError,
		'%ThrowTypeError%': ThrowTypeError,
		'%TypedArray%': TypedArray,
		'%TypeError%': $TypeError,
		'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
		'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
		'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
		'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
		'%URIError%': $URIError,
		'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
		'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
		'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet,

		'%Function.prototype.call%': $call,
		'%Function.prototype.apply%': $apply,
		'%Object.defineProperty%': $defineProperty,
		'%Object.getPrototypeOf%': $ObjectGPO,
		'%Math.abs%': abs,
		'%Math.floor%': floor,
		'%Math.max%': max,
		'%Math.min%': min,
		'%Math.pow%': pow,
		'%Math.round%': round,
		'%Math.sign%': sign,
		'%Reflect.getPrototypeOf%': $ReflectGPO
	};

	if (getProto) {
		try {
			null.error; // eslint-disable-line no-unused-expressions
		} catch (e) {
			// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
			var errorProto = getProto(getProto(e));
			INTRINSICS['%Error.prototype%'] = errorProto;
		}
	}

	var doEval = function doEval(name) {
		var value;
		if (name === '%AsyncFunction%') {
			value = getEvalledConstructor('async function () {}');
		} else if (name === '%GeneratorFunction%') {
			value = getEvalledConstructor('function* () {}');
		} else if (name === '%AsyncGeneratorFunction%') {
			value = getEvalledConstructor('async function* () {}');
		} else if (name === '%AsyncGenerator%') {
			var fn = doEval('%AsyncGeneratorFunction%');
			if (fn) {
				value = fn.prototype;
			}
		} else if (name === '%AsyncIteratorPrototype%') {
			var gen = doEval('%AsyncGenerator%');
			if (gen && getProto) {
				value = getProto(gen.prototype);
			}
		}

		INTRINSICS[name] = value;

		return value;
	};

	var LEGACY_ALIASES = {
		__proto__: null,
		'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
		'%ArrayPrototype%': ['Array', 'prototype'],
		'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
		'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
		'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
		'%ArrayProto_values%': ['Array', 'prototype', 'values'],
		'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
		'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
		'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
		'%BooleanPrototype%': ['Boolean', 'prototype'],
		'%DataViewPrototype%': ['DataView', 'prototype'],
		'%DatePrototype%': ['Date', 'prototype'],
		'%ErrorPrototype%': ['Error', 'prototype'],
		'%EvalErrorPrototype%': ['EvalError', 'prototype'],
		'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
		'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
		'%FunctionPrototype%': ['Function', 'prototype'],
		'%Generator%': ['GeneratorFunction', 'prototype'],
		'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
		'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
		'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
		'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
		'%JSONParse%': ['JSON', 'parse'],
		'%JSONStringify%': ['JSON', 'stringify'],
		'%MapPrototype%': ['Map', 'prototype'],
		'%NumberPrototype%': ['Number', 'prototype'],
		'%ObjectPrototype%': ['Object', 'prototype'],
		'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
		'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
		'%PromisePrototype%': ['Promise', 'prototype'],
		'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
		'%Promise_all%': ['Promise', 'all'],
		'%Promise_reject%': ['Promise', 'reject'],
		'%Promise_resolve%': ['Promise', 'resolve'],
		'%RangeErrorPrototype%': ['RangeError', 'prototype'],
		'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
		'%RegExpPrototype%': ['RegExp', 'prototype'],
		'%SetPrototype%': ['Set', 'prototype'],
		'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
		'%StringPrototype%': ['String', 'prototype'],
		'%SymbolPrototype%': ['Symbol', 'prototype'],
		'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
		'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
		'%TypeErrorPrototype%': ['TypeError', 'prototype'],
		'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
		'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
		'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
		'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
		'%URIErrorPrototype%': ['URIError', 'prototype'],
		'%WeakMapPrototype%': ['WeakMap', 'prototype'],
		'%WeakSetPrototype%': ['WeakSet', 'prototype']
	};

	var bind = requireFunctionBind();
	var hasOwn = /*@__PURE__*/ requireHasown();
	var $concat = bind.call($call, Array.prototype.concat);
	var $spliceApply = bind.call($apply, Array.prototype.splice);
	var $replace = bind.call($call, String.prototype.replace);
	var $strSlice = bind.call($call, String.prototype.slice);
	var $exec = bind.call($call, RegExp.prototype.exec);

	/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
	var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
	var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
	var stringToPath = function stringToPath(string) {
		var first = $strSlice(string, 0, 1);
		var last = $strSlice(string, -1);
		if (first === '%' && last !== '%') {
			throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
		} else if (last === '%' && first !== '%') {
			throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
		}
		var result = [];
		$replace(string, rePropName, function (match, number, quote, subString) {
			result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
		});
		return result;
	};
	/* end adaptation */

	var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
		var intrinsicName = name;
		var alias;
		if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
			alias = LEGACY_ALIASES[intrinsicName];
			intrinsicName = '%' + alias[0] + '%';
		}

		if (hasOwn(INTRINSICS, intrinsicName)) {
			var value = INTRINSICS[intrinsicName];
			if (value === needsEval) {
				value = doEval(intrinsicName);
			}
			if (typeof value === 'undefined' && !allowMissing) {
				throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
			}

			return {
				alias: alias,
				name: intrinsicName,
				value: value
			};
		}

		throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
	};

	getIntrinsic = function GetIntrinsic(name, allowMissing) {
		if (typeof name !== 'string' || name.length === 0) {
			throw new $TypeError('intrinsic name must be a non-empty string');
		}
		if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
			throw new $TypeError('"allowMissing" argument must be a boolean');
		}

		if ($exec(/^%?[^%]*%?$/, name) === null) {
			throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
		}
		var parts = stringToPath(name);
		var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

		var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
		var intrinsicRealName = intrinsic.name;
		var value = intrinsic.value;
		var skipFurtherCaching = false;

		var alias = intrinsic.alias;
		if (alias) {
			intrinsicBaseName = alias[0];
			$spliceApply(parts, $concat([0, 1], alias));
		}

		for (var i = 1, isOwn = true; i < parts.length; i += 1) {
			var part = parts[i];
			var first = $strSlice(part, 0, 1);
			var last = $strSlice(part, -1);
			if (
				(
					(first === '"' || first === "'" || first === '`')
					|| (last === '"' || last === "'" || last === '`')
				)
				&& first !== last
			) {
				throw new $SyntaxError('property names with quotes must have matching quotes');
			}
			if (part === 'constructor' || !isOwn) {
				skipFurtherCaching = true;
			}

			intrinsicBaseName += '.' + part;
			intrinsicRealName = '%' + intrinsicBaseName + '%';

			if (hasOwn(INTRINSICS, intrinsicRealName)) {
				value = INTRINSICS[intrinsicRealName];
			} else if (value != null) {
				if (!(part in value)) {
					if (!allowMissing) {
						throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
					}
					return void 0;
				}
				if ($gOPD && (i + 1) >= parts.length) {
					var desc = $gOPD(value, part);
					isOwn = !!desc;

					// By convention, when a data property is converted to an accessor
					// property to emulate a data property that does not suffer from
					// the override mistake, that accessor's getter is marked with
					// an `originalValue` property. Here, when we detect this, we
					// uphold the illusion by pretending to see that original data
					// property, i.e., returning the value rather than the getter
					// itself.
					if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
						value = desc.get;
					} else {
						value = value[part];
					}
				} else {
					isOwn = hasOwn(value, part);
					value = value[part];
				}

				if (isOwn && !skipFurtherCaching) {
					INTRINSICS[intrinsicRealName] = value;
				}
			}
		}
		return value;
	};
	return getIntrinsic;
}

var defineDataProperty;
var hasRequiredDefineDataProperty;

function requireDefineDataProperty () {
	if (hasRequiredDefineDataProperty) return defineDataProperty;
	hasRequiredDefineDataProperty = 1;

	var $defineProperty = /*@__PURE__*/ requireEsDefineProperty();

	var $SyntaxError = /*@__PURE__*/ requireSyntax();
	var $TypeError = /*@__PURE__*/ requireType();

	var gopd = /*@__PURE__*/ requireGopd();

	/** @type {import('.')} */
	defineDataProperty = function defineDataProperty(
		obj,
		property,
		value
	) {
		if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
			throw new $TypeError('`obj` must be an object or a function`');
		}
		if (typeof property !== 'string' && typeof property !== 'symbol') {
			throw new $TypeError('`property` must be a string or a symbol`');
		}
		if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
			throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
		}
		if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
			throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
		}
		if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
			throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
		}
		if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
			throw new $TypeError('`loose`, if provided, must be a boolean');
		}

		var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
		var nonWritable = arguments.length > 4 ? arguments[4] : null;
		var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
		var loose = arguments.length > 6 ? arguments[6] : false;

		/* @type {false | TypedPropertyDescriptor<unknown>} */
		var desc = !!gopd && gopd(obj, property);

		if ($defineProperty) {
			$defineProperty(obj, property, {
				configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
				enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
				value: value,
				writable: nonWritable === null && desc ? desc.writable : !nonWritable
			});
		} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
			// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
			obj[property] = value; // eslint-disable-line no-param-reassign
		} else {
			throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
		}
	};
	return defineDataProperty;
}

var hasPropertyDescriptors_1;
var hasRequiredHasPropertyDescriptors;

function requireHasPropertyDescriptors () {
	if (hasRequiredHasPropertyDescriptors) return hasPropertyDescriptors_1;
	hasRequiredHasPropertyDescriptors = 1;

	var $defineProperty = /*@__PURE__*/ requireEsDefineProperty();

	var hasPropertyDescriptors = function hasPropertyDescriptors() {
		return !!$defineProperty;
	};

	hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
		// node v0.6 has a bug where array lengths can be Set but not Defined
		if (!$defineProperty) {
			return null;
		}
		try {
			return $defineProperty([], 'length', { value: 1 }).length !== 1;
		} catch (e) {
			// In Firefox 4-22, defining length on an array throws an exception.
			return true;
		}
	};

	hasPropertyDescriptors_1 = hasPropertyDescriptors;
	return hasPropertyDescriptors_1;
}

var setFunctionLength;
var hasRequiredSetFunctionLength;

function requireSetFunctionLength () {
	if (hasRequiredSetFunctionLength) return setFunctionLength;
	hasRequiredSetFunctionLength = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();
	var define = /*@__PURE__*/ requireDefineDataProperty();
	var hasDescriptors = /*@__PURE__*/ requireHasPropertyDescriptors()();
	var gOPD = /*@__PURE__*/ requireGopd();

	var $TypeError = /*@__PURE__*/ requireType();
	var $floor = GetIntrinsic('%Math.floor%');

	/** @type {import('.')} */
	setFunctionLength = function setFunctionLength(fn, length) {
		if (typeof fn !== 'function') {
			throw new $TypeError('`fn` is not a function');
		}
		if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
			throw new $TypeError('`length` must be a positive 32-bit integer');
		}

		var loose = arguments.length > 2 && !!arguments[2];

		var functionLengthIsConfigurable = true;
		var functionLengthIsWritable = true;
		if ('length' in fn && gOPD) {
			var desc = gOPD(fn, 'length');
			if (desc && !desc.configurable) {
				functionLengthIsConfigurable = false;
			}
			if (desc && !desc.writable) {
				functionLengthIsWritable = false;
			}
		}

		if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
			if (hasDescriptors) {
				define(/** @type {Parameters<define>[0]} */ (fn), 'length', length, true, true);
			} else {
				define(/** @type {Parameters<define>[0]} */ (fn), 'length', length);
			}
		}
		return fn;
	};
	return setFunctionLength;
}

var applyBind;
var hasRequiredApplyBind;

function requireApplyBind () {
	if (hasRequiredApplyBind) return applyBind;
	hasRequiredApplyBind = 1;

	var bind = requireFunctionBind();
	var $apply = requireFunctionApply();
	var actualApply = requireActualApply();

	/** @type {import('./applyBind')} */
	applyBind = function applyBind() {
		return actualApply(bind, $apply, arguments);
	};
	return applyBind;
}

var hasRequiredCallBind;

function requireCallBind () {
	if (hasRequiredCallBind) return callBind.exports;
	hasRequiredCallBind = 1;
	(function (module) {

		var setFunctionLength = /*@__PURE__*/ requireSetFunctionLength();

		var $defineProperty = /*@__PURE__*/ requireEsDefineProperty();

		var callBindBasic = requireCallBindApplyHelpers();
		var applyBind = requireApplyBind();

		module.exports = function callBind(originalFunction) {
			var func = callBindBasic(arguments);
			var adjustedLength = originalFunction.length - (arguments.length - 1);
			return setFunctionLength(
				func,
				1 + (adjustedLength > 0 ? adjustedLength : 0),
				true
			);
		};

		if ($defineProperty) {
			$defineProperty(module.exports, 'apply', { value: applyBind });
		} else {
			module.exports.apply = applyBind;
		} 
	} (callBind));
	return callBind.exports;
}

var callBound;
var hasRequiredCallBound;

function requireCallBound () {
	if (hasRequiredCallBound) return callBound;
	hasRequiredCallBound = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var callBindBasic = requireCallBindApplyHelpers();

	/** @type {(thisArg: string, searchString: string, position?: number) => number} */
	var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);

	/** @type {import('.')} */
	callBound = function callBoundIntrinsic(name, allowMissing) {
		/* eslint no-extra-parens: 0 */

		var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ (GetIntrinsic(name, !!allowMissing));
		if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
			return callBindBasic(/** @type {const} */ ([intrinsic]));
		}
		return intrinsic;
	};
	return callBound;
}

var shams;
var hasRequiredShams;

function requireShams () {
	if (hasRequiredShams) return shams;
	hasRequiredShams = 1;

	var hasSymbols = requireShams$1();

	/** @type {import('.')} */
	shams = function hasToStringTagShams() {
		return hasSymbols() && !!Symbol.toStringTag;
	};
	return shams;
}

var whichTypedArray;
var hasRequiredWhichTypedArray;

function requireWhichTypedArray () {
	if (hasRequiredWhichTypedArray) return whichTypedArray;
	hasRequiredWhichTypedArray = 1;

	var forEach = requireForEach$1();
	var availableTypedArrays = /*@__PURE__*/ requireAvailableTypedArrays();
	var callBind = requireCallBind();
	var callBound = /*@__PURE__*/ requireCallBound();
	var gOPD = /*@__PURE__*/ requireGopd();
	var getProto = requireGetProto();

	var $toString = callBound('Object.prototype.toString');
	var hasToStringTag = requireShams()();

	var g = typeof globalThis === 'undefined' ? commonjsGlobal : globalThis;
	var typedArrays = availableTypedArrays();

	var $slice = callBound('String.prototype.slice');

	/** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */
	var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
		for (var i = 0; i < array.length; i += 1) {
			if (array[i] === value) {
				return i;
			}
		}
		return -1;
	};

	/** @typedef {import('./types').Getter} Getter */
	/** @type {import('./types').Cache} */
	var cache = { __proto__: null };
	if (hasToStringTag && gOPD && getProto) {
		forEach(typedArrays, function (typedArray) {
			var arr = new g[typedArray]();
			if (Symbol.toStringTag in arr && getProto) {
				var proto = getProto(arr);
				// @ts-expect-error TS won't narrow inside a closure
				var descriptor = gOPD(proto, Symbol.toStringTag);
				if (!descriptor && proto) {
					var superProto = getProto(proto);
					// @ts-expect-error TS won't narrow inside a closure
					descriptor = gOPD(superProto, Symbol.toStringTag);
				}
				// @ts-expect-error TODO: fix
				cache['$' + typedArray] = callBind(descriptor.get);
			}
		});
	} else {
		forEach(typedArrays, function (typedArray) {
			var arr = new g[typedArray]();
			var fn = arr.slice || arr.set;
			if (fn) {
				cache[
					/** @type {`$${import('.').TypedArrayName}`} */ ('$' + typedArray)
				] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */ (
					// @ts-expect-error TODO FIXME
					callBind(fn)
				);
			}
		});
	}

	/** @type {(value: object) => false | import('.').TypedArrayName} */
	var tryTypedArrays = function tryAllTypedArrays(value) {
		/** @type {ReturnType<typeof tryAllTypedArrays>} */ var found = false;
		forEach(
			/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */ (cache),
			/** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
			function (getter, typedArray) {
				if (!found) {
					try {
						// @ts-expect-error a throw is fine here
						if ('$' + getter(value) === typedArray) {
							found = /** @type {import('.').TypedArrayName} */ ($slice(typedArray, 1));
						}
					} catch (e) { /**/ }
				}
			}
		);
		return found;
	};

	/** @type {(value: object) => false | import('.').TypedArrayName} */
	var trySlices = function tryAllSlices(value) {
		/** @type {ReturnType<typeof tryAllSlices>} */ var found = false;
		forEach(
			/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */(cache),
			/** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function (getter, name) {
				if (!found) {
					try {
						// @ts-expect-error a throw is fine here
						getter(value);
						found = /** @type {import('.').TypedArrayName} */ ($slice(name, 1));
					} catch (e) { /**/ }
				}
			}
		);
		return found;
	};

	/** @type {import('.')} */
	whichTypedArray = function whichTypedArray(value) {
		if (!value || typeof value !== 'object') { return false; }
		if (!hasToStringTag) {
			/** @type {string} */
			var tag = $slice($toString(value), 8, -1);
			if ($indexOf(typedArrays, tag) > -1) {
				return tag;
			}
			if (tag !== 'Object') {
				return false;
			}
			// node < 0.6 hits here on real Typed Arrays
			return trySlices(value);
		}
		if (!gOPD) { return null; } // unknown engine
		return tryTypedArrays(value);
	};
	return whichTypedArray;
}

var isArguments;
var hasRequiredIsArguments;

function requireIsArguments () {
	if (hasRequiredIsArguments) return isArguments;
	hasRequiredIsArguments = 1;

	var toStr = Object.prototype.toString;

	isArguments = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};
	return isArguments;
}

var implementation$4;
var hasRequiredImplementation$4;

function requireImplementation$4 () {
	if (hasRequiredImplementation$4) return implementation$4;
	hasRequiredImplementation$4 = 1;

	var keysShim;
	if (!Object.keys) {
		// modified from https://github.com/es-shims/es5-shim
		var has = Object.prototype.hasOwnProperty;
		var toStr = Object.prototype.toString;
		var isArgs = requireIsArguments(); // eslint-disable-line global-require
		var isEnumerable = Object.prototype.propertyIsEnumerable;
		var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
		var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
		var dontEnums = [
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
		];
		var equalsConstructorPrototype = function (o) {
			var ctor = o.constructor;
			return ctor && ctor.prototype === o;
		};
		var excludedKeys = {
			$applicationCache: true,
			$console: true,
			$external: true,
			$frame: true,
			$frameElement: true,
			$frames: true,
			$innerHeight: true,
			$innerWidth: true,
			$onmozfullscreenchange: true,
			$onmozfullscreenerror: true,
			$outerHeight: true,
			$outerWidth: true,
			$pageXOffset: true,
			$pageYOffset: true,
			$parent: true,
			$scrollLeft: true,
			$scrollTop: true,
			$scrollX: true,
			$scrollY: true,
			$self: true,
			$webkitIndexedDB: true,
			$webkitStorageInfo: true,
			$window: true
		};
		var hasAutomationEqualityBug = (function () {
			/* global window */
			if (typeof window === 'undefined') { return false; }
			for (var k in window) {
				try {
					if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
						try {
							equalsConstructorPrototype(window[k]);
						} catch (e) {
							return true;
						}
					}
				} catch (e) {
					return true;
				}
			}
			return false;
		}());
		var equalsConstructorPrototypeIfNotBuggy = function (o) {
			/* global window */
			if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
				return equalsConstructorPrototype(o);
			}
			try {
				return equalsConstructorPrototype(o);
			} catch (e) {
				return false;
			}
		};

		keysShim = function keys(object) {
			var isObject = object !== null && typeof object === 'object';
			var isFunction = toStr.call(object) === '[object Function]';
			var isArguments = isArgs(object);
			var isString = isObject && toStr.call(object) === '[object String]';
			var theKeys = [];

			if (!isObject && !isFunction && !isArguments) {
				throw new TypeError('Object.keys called on a non-object');
			}

			var skipProto = hasProtoEnumBug && isFunction;
			if (isString && object.length > 0 && !has.call(object, 0)) {
				for (var i = 0; i < object.length; ++i) {
					theKeys.push(String(i));
				}
			}

			if (isArguments && object.length > 0) {
				for (var j = 0; j < object.length; ++j) {
					theKeys.push(String(j));
				}
			} else {
				for (var name in object) {
					if (!(skipProto && name === 'prototype') && has.call(object, name)) {
						theKeys.push(String(name));
					}
				}
			}

			if (hasDontEnumBug) {
				var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

				for (var k = 0; k < dontEnums.length; ++k) {
					if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
						theKeys.push(dontEnums[k]);
					}
				}
			}
			return theKeys;
		};
	}
	implementation$4 = keysShim;
	return implementation$4;
}

var objectKeys;
var hasRequiredObjectKeys;

function requireObjectKeys () {
	if (hasRequiredObjectKeys) return objectKeys;
	hasRequiredObjectKeys = 1;

	var slice = Array.prototype.slice;
	var isArgs = requireIsArguments();

	var origKeys = Object.keys;
	var keysShim = origKeys ? function keys(o) { return origKeys(o); } : requireImplementation$4();

	var originalKeys = Object.keys;

	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				var args = Object.keys(arguments);
				return args && args.length === arguments.length;
			}(1, 2));
			if (!keysWorksWithArguments) {
				Object.keys = function keys(object) { // eslint-disable-line func-name-matching
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					}
					return originalKeys(object);
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};

	objectKeys = keysShim;
	return objectKeys;
}

var defineProperties_1;
var hasRequiredDefineProperties;

function requireDefineProperties () {
	if (hasRequiredDefineProperties) return defineProperties_1;
	hasRequiredDefineProperties = 1;

	var keys = requireObjectKeys();
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

	var toStr = Object.prototype.toString;
	var concat = Array.prototype.concat;
	var defineDataProperty = /*@__PURE__*/ requireDefineDataProperty();

	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};

	var supportsDescriptors = /*@__PURE__*/ requireHasPropertyDescriptors()();

	var defineProperty = function (object, name, value, predicate) {
		if (name in object) {
			if (predicate === true) {
				if (object[name] === value) {
					return;
				}
			} else if (!isFunction(predicate) || !predicate()) {
				return;
			}
		}

		if (supportsDescriptors) {
			defineDataProperty(object, name, value, true);
		} else {
			defineDataProperty(object, name, value);
		}
	};

	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = concat.call(props, Object.getOwnPropertySymbols(map));
		}
		for (var i = 0; i < props.length; i += 1) {
			defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
		}
	};

	defineProperties.supportsDescriptors = !!supportsDescriptors;

	defineProperties_1 = defineProperties;
	return defineProperties_1;
}

var util_inspect;
var hasRequiredUtil_inspect;

function requireUtil_inspect () {
	if (hasRequiredUtil_inspect) return util_inspect;
	hasRequiredUtil_inspect = 1;
	util_inspect = require$$0.inspect;
	return util_inspect;
}

var objectInspect;
var hasRequiredObjectInspect;

function requireObjectInspect () {
	if (hasRequiredObjectInspect) return objectInspect;
	hasRequiredObjectInspect = 1;
	var hasMap = typeof Map === 'function' && Map.prototype;
	var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
	var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
	var mapForEach = hasMap && Map.prototype.forEach;
	var hasSet = typeof Set === 'function' && Set.prototype;
	var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
	var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
	var setForEach = hasSet && Set.prototype.forEach;
	var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
	var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
	var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
	var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
	var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
	var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
	var booleanValueOf = Boolean.prototype.valueOf;
	var objectToString = Object.prototype.toString;
	var functionToString = Function.prototype.toString;
	var $match = String.prototype.match;
	var $slice = String.prototype.slice;
	var $replace = String.prototype.replace;
	var $toUpperCase = String.prototype.toUpperCase;
	var $toLowerCase = String.prototype.toLowerCase;
	var $test = RegExp.prototype.test;
	var $concat = Array.prototype.concat;
	var $join = Array.prototype.join;
	var $arrSlice = Array.prototype.slice;
	var $floor = Math.floor;
	var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
	var gOPS = Object.getOwnPropertySymbols;
	var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
	var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
	// ie, `has-tostringtag/shams
	var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
	    ? Symbol.toStringTag
	    : null;
	var isEnumerable = Object.prototype.propertyIsEnumerable;

	var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
	    [].__proto__ === Array.prototype // eslint-disable-line no-proto
	        ? function (O) {
	            return O.__proto__; // eslint-disable-line no-proto
	        }
	        : null
	);

	function addNumericSeparator(num, str) {
	    if (
	        num === Infinity
	        || num === -Infinity
	        || num !== num
	        || (num && num > -1e3 && num < 1000)
	        || $test.call(/e/, str)
	    ) {
	        return str;
	    }
	    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
	    if (typeof num === 'number') {
	        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
	        if (int !== num) {
	            var intStr = String(int);
	            var dec = $slice.call(str, intStr.length + 1);
	            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
	        }
	    }
	    return $replace.call(str, sepRegex, '$&_');
	}

	var utilInspect = /*@__PURE__*/ requireUtil_inspect();
	var inspectCustom = utilInspect.custom;
	var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

	var quotes = {
	    __proto__: null,
	    'double': '"',
	    single: "'"
	};
	var quoteREs = {
	    __proto__: null,
	    'double': /(["\\])/g,
	    single: /(['\\])/g
	};

	objectInspect = function inspect_(obj, options, depth, seen) {
	    var opts = options || {};

	    if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) {
	        throw new TypeError('option "quoteStyle" must be "single" or "double"');
	    }
	    if (
	        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
	            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
	            : opts.maxStringLength !== null
	        )
	    ) {
	        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
	    }
	    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
	    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
	        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
	    }

	    if (
	        has(opts, 'indent')
	        && opts.indent !== null
	        && opts.indent !== '\t'
	        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
	    ) {
	        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
	    }
	    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
	        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
	    }
	    var numericSeparator = opts.numericSeparator;

	    if (typeof obj === 'undefined') {
	        return 'undefined';
	    }
	    if (obj === null) {
	        return 'null';
	    }
	    if (typeof obj === 'boolean') {
	        return obj ? 'true' : 'false';
	    }

	    if (typeof obj === 'string') {
	        return inspectString(obj, opts);
	    }
	    if (typeof obj === 'number') {
	        if (obj === 0) {
	            return Infinity / obj > 0 ? '0' : '-0';
	        }
	        var str = String(obj);
	        return numericSeparator ? addNumericSeparator(obj, str) : str;
	    }
	    if (typeof obj === 'bigint') {
	        var bigIntStr = String(obj) + 'n';
	        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
	    }

	    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
	    if (typeof depth === 'undefined') { depth = 0; }
	    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
	        return isArray(obj) ? '[Array]' : '[Object]';
	    }

	    var indent = getIndent(opts, depth);

	    if (typeof seen === 'undefined') {
	        seen = [];
	    } else if (indexOf(seen, obj) >= 0) {
	        return '[Circular]';
	    }

	    function inspect(value, from, noIndent) {
	        if (from) {
	            seen = $arrSlice.call(seen);
	            seen.push(from);
	        }
	        if (noIndent) {
	            var newOpts = {
	                depth: opts.depth
	            };
	            if (has(opts, 'quoteStyle')) {
	                newOpts.quoteStyle = opts.quoteStyle;
	            }
	            return inspect_(value, newOpts, depth + 1, seen);
	        }
	        return inspect_(value, opts, depth + 1, seen);
	    }

	    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
	        var name = nameOf(obj);
	        var keys = arrObjKeys(obj, inspect);
	        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
	    }
	    if (isSymbol(obj)) {
	        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
	        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
	    }
	    if (isElement(obj)) {
	        var s = '<' + $toLowerCase.call(String(obj.nodeName));
	        var attrs = obj.attributes || [];
	        for (var i = 0; i < attrs.length; i++) {
	            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
	        }
	        s += '>';
	        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
	        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
	        return s;
	    }
	    if (isArray(obj)) {
	        if (obj.length === 0) { return '[]'; }
	        var xs = arrObjKeys(obj, inspect);
	        if (indent && !singleLineValues(xs)) {
	            return '[' + indentedJoin(xs, indent) + ']';
	        }
	        return '[ ' + $join.call(xs, ', ') + ' ]';
	    }
	    if (isError(obj)) {
	        var parts = arrObjKeys(obj, inspect);
	        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
	            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
	        }
	        if (parts.length === 0) { return '[' + String(obj) + ']'; }
	        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
	    }
	    if (typeof obj === 'object' && customInspect) {
	        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
	            return utilInspect(obj, { depth: maxDepth - depth });
	        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
	            return obj.inspect();
	        }
	    }
	    if (isMap(obj)) {
	        var mapParts = [];
	        if (mapForEach) {
	            mapForEach.call(obj, function (value, key) {
	                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
	            });
	        }
	        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
	    }
	    if (isSet(obj)) {
	        var setParts = [];
	        if (setForEach) {
	            setForEach.call(obj, function (value) {
	                setParts.push(inspect(value, obj));
	            });
	        }
	        return collectionOf('Set', setSize.call(obj), setParts, indent);
	    }
	    if (isWeakMap(obj)) {
	        return weakCollectionOf('WeakMap');
	    }
	    if (isWeakSet(obj)) {
	        return weakCollectionOf('WeakSet');
	    }
	    if (isWeakRef(obj)) {
	        return weakCollectionOf('WeakRef');
	    }
	    if (isNumber(obj)) {
	        return markBoxed(inspect(Number(obj)));
	    }
	    if (isBigInt(obj)) {
	        return markBoxed(inspect(bigIntValueOf.call(obj)));
	    }
	    if (isBoolean(obj)) {
	        return markBoxed(booleanValueOf.call(obj));
	    }
	    if (isString(obj)) {
	        return markBoxed(inspect(String(obj)));
	    }
	    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
	    /* eslint-env browser */
	    if (typeof window !== 'undefined' && obj === window) {
	        return '{ [object Window] }';
	    }
	    if (
	        (typeof globalThis !== 'undefined' && obj === globalThis)
	        || (typeof commonjsGlobal !== 'undefined' && obj === commonjsGlobal)
	    ) {
	        return '{ [object globalThis] }';
	    }
	    if (!isDate(obj) && !isRegExp(obj)) {
	        var ys = arrObjKeys(obj, inspect);
	        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
	        var protoTag = obj instanceof Object ? '' : 'null prototype';
	        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
	        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
	        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
	        if (ys.length === 0) { return tag + '{}'; }
	        if (indent) {
	            return tag + '{' + indentedJoin(ys, indent) + '}';
	        }
	        return tag + '{ ' + $join.call(ys, ', ') + ' }';
	    }
	    return String(obj);
	};

	function wrapQuotes(s, defaultStyle, opts) {
	    var style = opts.quoteStyle || defaultStyle;
	    var quoteChar = quotes[style];
	    return quoteChar + s + quoteChar;
	}

	function quote(s) {
	    return $replace.call(String(s), /"/g, '&quot;');
	}

	function canTrustToString(obj) {
	    return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
	}
	function isArray(obj) { return toStr(obj) === '[object Array]' && canTrustToString(obj); }
	function isDate(obj) { return toStr(obj) === '[object Date]' && canTrustToString(obj); }
	function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && canTrustToString(obj); }
	function isError(obj) { return toStr(obj) === '[object Error]' && canTrustToString(obj); }
	function isString(obj) { return toStr(obj) === '[object String]' && canTrustToString(obj); }
	function isNumber(obj) { return toStr(obj) === '[object Number]' && canTrustToString(obj); }
	function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && canTrustToString(obj); }

	// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
	function isSymbol(obj) {
	    if (hasShammedSymbols) {
	        return obj && typeof obj === 'object' && obj instanceof Symbol;
	    }
	    if (typeof obj === 'symbol') {
	        return true;
	    }
	    if (!obj || typeof obj !== 'object' || !symToString) {
	        return false;
	    }
	    try {
	        symToString.call(obj);
	        return true;
	    } catch (e) {}
	    return false;
	}

	function isBigInt(obj) {
	    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
	        return false;
	    }
	    try {
	        bigIntValueOf.call(obj);
	        return true;
	    } catch (e) {}
	    return false;
	}

	var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
	function has(obj, key) {
	    return hasOwn.call(obj, key);
	}

	function toStr(obj) {
	    return objectToString.call(obj);
	}

	function nameOf(f) {
	    if (f.name) { return f.name; }
	    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
	    if (m) { return m[1]; }
	    return null;
	}

	function indexOf(xs, x) {
	    if (xs.indexOf) { return xs.indexOf(x); }
	    for (var i = 0, l = xs.length; i < l; i++) {
	        if (xs[i] === x) { return i; }
	    }
	    return -1;
	}

	function isMap(x) {
	    if (!mapSize || !x || typeof x !== 'object') {
	        return false;
	    }
	    try {
	        mapSize.call(x);
	        try {
	            setSize.call(x);
	        } catch (s) {
	            return true;
	        }
	        return x instanceof Map; // core-js workaround, pre-v2.5.0
	    } catch (e) {}
	    return false;
	}

	function isWeakMap(x) {
	    if (!weakMapHas || !x || typeof x !== 'object') {
	        return false;
	    }
	    try {
	        weakMapHas.call(x, weakMapHas);
	        try {
	            weakSetHas.call(x, weakSetHas);
	        } catch (s) {
	            return true;
	        }
	        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
	    } catch (e) {}
	    return false;
	}

	function isWeakRef(x) {
	    if (!weakRefDeref || !x || typeof x !== 'object') {
	        return false;
	    }
	    try {
	        weakRefDeref.call(x);
	        return true;
	    } catch (e) {}
	    return false;
	}

	function isSet(x) {
	    if (!setSize || !x || typeof x !== 'object') {
	        return false;
	    }
	    try {
	        setSize.call(x);
	        try {
	            mapSize.call(x);
	        } catch (m) {
	            return true;
	        }
	        return x instanceof Set; // core-js workaround, pre-v2.5.0
	    } catch (e) {}
	    return false;
	}

	function isWeakSet(x) {
	    if (!weakSetHas || !x || typeof x !== 'object') {
	        return false;
	    }
	    try {
	        weakSetHas.call(x, weakSetHas);
	        try {
	            weakMapHas.call(x, weakMapHas);
	        } catch (s) {
	            return true;
	        }
	        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
	    } catch (e) {}
	    return false;
	}

	function isElement(x) {
	    if (!x || typeof x !== 'object') { return false; }
	    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
	        return true;
	    }
	    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
	}

	function inspectString(str, opts) {
	    if (str.length > opts.maxStringLength) {
	        var remaining = str.length - opts.maxStringLength;
	        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
	        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
	    }
	    var quoteRE = quoteREs[opts.quoteStyle || 'single'];
	    quoteRE.lastIndex = 0;
	    // eslint-disable-next-line no-control-regex
	    var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
	    return wrapQuotes(s, 'single', opts);
	}

	function lowbyte(c) {
	    var n = c.charCodeAt(0);
	    var x = {
	        8: 'b',
	        9: 't',
	        10: 'n',
	        12: 'f',
	        13: 'r'
	    }[n];
	    if (x) { return '\\' + x; }
	    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
	}

	function markBoxed(str) {
	    return 'Object(' + str + ')';
	}

	function weakCollectionOf(type) {
	    return type + ' { ? }';
	}

	function collectionOf(type, size, entries, indent) {
	    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
	    return type + ' (' + size + ') {' + joinedEntries + '}';
	}

	function singleLineValues(xs) {
	    for (var i = 0; i < xs.length; i++) {
	        if (indexOf(xs[i], '\n') >= 0) {
	            return false;
	        }
	    }
	    return true;
	}

	function getIndent(opts, depth) {
	    var baseIndent;
	    if (opts.indent === '\t') {
	        baseIndent = '\t';
	    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
	        baseIndent = $join.call(Array(opts.indent + 1), ' ');
	    } else {
	        return null;
	    }
	    return {
	        base: baseIndent,
	        prev: $join.call(Array(depth + 1), baseIndent)
	    };
	}

	function indentedJoin(xs, indent) {
	    if (xs.length === 0) { return ''; }
	    var lineJoiner = '\n' + indent.prev + indent.base;
	    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
	}

	function arrObjKeys(obj, inspect) {
	    var isArr = isArray(obj);
	    var xs = [];
	    if (isArr) {
	        xs.length = obj.length;
	        for (var i = 0; i < obj.length; i++) {
	            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
	        }
	    }
	    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
	    var symMap;
	    if (hasShammedSymbols) {
	        symMap = {};
	        for (var k = 0; k < syms.length; k++) {
	            symMap['$' + syms[k]] = syms[k];
	        }
	    }

	    for (var key in obj) { // eslint-disable-line no-restricted-syntax
	        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
	        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
	        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
	            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
	            continue; // eslint-disable-line no-restricted-syntax, no-continue
	        } else if ($test.call(/[^\w$]/, key)) {
	            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
	        } else {
	            xs.push(key + ': ' + inspect(obj[key], obj));
	        }
	    }
	    if (typeof gOPS === 'function') {
	        for (var j = 0; j < syms.length; j++) {
	            if (isEnumerable.call(obj, syms[j])) {
	                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
	            }
	        }
	    }
	    return xs;
	}
	return objectInspect;
}

var isObject;
var hasRequiredIsObject;

function requireIsObject () {
	if (hasRequiredIsObject) return isObject;
	hasRequiredIsObject = 1;

	isObject = function isObject(x) {
		return !!x && (typeof x === 'function' || typeof x === 'object');
	};
	return isObject;
}

var isPropertyKey;
var hasRequiredIsPropertyKey;

function requireIsPropertyKey () {
	if (hasRequiredIsPropertyKey) return isPropertyKey;
	hasRequiredIsPropertyKey = 1;

	isPropertyKey = function isPropertyKey(argument) {
		return typeof argument === 'string' || typeof argument === 'symbol';
	};
	return isPropertyKey;
}

var Get;
var hasRequiredGet;

function requireGet () {
	if (hasRequiredGet) return Get;
	hasRequiredGet = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var inspect = /*@__PURE__*/ requireObjectInspect();

	var isObject = /*@__PURE__*/ requireIsObject();
	var isPropertyKey = /*@__PURE__*/ requireIsPropertyKey();

	// https://262.ecma-international.org/6.0/#sec-get-o-p

	Get = function Get(O, P) {
		// 7.3.1.1
		if (!isObject(O)) {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		// 7.3.1.2
		if (!isPropertyKey(P)) {
			throw new $TypeError('Assertion failed: P is not a Property Key, got ' + inspect(P));
		}
		// 7.3.1.3
		return O[P];
	};
	return Get;
}

var _isFinite;
var hasRequired_isFinite;

function require_isFinite () {
	if (hasRequired_isFinite) return _isFinite;
	hasRequired_isFinite = 1;

	var $isNaN = /*@__PURE__*/ require_isNaN();

	/** @type {import('./isFinite')} */
	_isFinite = function isFinite(x) {
		return (typeof x === 'number' || typeof x === 'bigint')
	        && !$isNaN(x)
	        && x !== Infinity
	        && x !== -Infinity;
	};
	return _isFinite;
}

var isInteger$1;
var hasRequiredIsInteger$1;

function requireIsInteger$1 () {
	if (hasRequiredIsInteger$1) return isInteger$1;
	hasRequiredIsInteger$1 = 1;

	var $abs = /*@__PURE__*/ requireAbs();
	var $floor = /*@__PURE__*/ requireFloor$1();

	var $isNaN = /*@__PURE__*/ require_isNaN();
	var $isFinite = /*@__PURE__*/ require_isFinite();

	/** @type {import('./isInteger')} */
	isInteger$1 = function isInteger(argument) {
		if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
			return false;
		}
		var absValue = $abs(argument);
		return $floor(absValue) === absValue;
	};
	return isInteger$1;
}

var isArrayBuffer;
var hasRequiredIsArrayBuffer;

function requireIsArrayBuffer () {
	if (hasRequiredIsArrayBuffer) return isArrayBuffer;
	hasRequiredIsArrayBuffer = 1;

	var callBind = requireCallBind();
	var callBound = /*@__PURE__*/ requireCallBound();
	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $ArrayBuffer = GetIntrinsic('%ArrayBuffer%', true);
	/** @type {undefined | ((receiver: ArrayBuffer) => number) | ((receiver: unknown) => never)} */
	var $byteLength = callBound('ArrayBuffer.prototype.byteLength', true);
	var $toString = callBound('Object.prototype.toString');

	// in node 0.10, ArrayBuffers have no prototype methods, but have an own slot-checking `slice` method
	var abSlice = !!$ArrayBuffer && !$byteLength && new $ArrayBuffer(0).slice;
	var $abSlice = !!abSlice && callBind(abSlice);

	/** @type {import('.')} */
	isArrayBuffer = $byteLength || $abSlice
		? function isArrayBuffer(obj) {
			if (!obj || typeof obj !== 'object') {
				return false;
			}
			try {
				if ($byteLength) {
					// @ts-expect-error no idea why TS can't handle the overload
					$byteLength(obj);
				} else {
					// @ts-expect-error TS chooses not to type-narrow inside a closure
					$abSlice(obj, 0);
				}
				return true;
			} catch (e) {
				return false;
			}
		}
		: $ArrayBuffer
			// in node 0.8, ArrayBuffers have no prototype or own methods, but also no Symbol.toStringTag
			? function isArrayBuffer(obj) {
				return $toString(obj) === '[object ArrayBuffer]';
			}
			// @ts-expect-error
			: function isArrayBuffer(obj) { // eslint-disable-line no-unused-vars
				return false;
			};
	return isArrayBuffer;
}

var arrayBufferByteLength;
var hasRequiredArrayBufferByteLength$1;

function requireArrayBufferByteLength$1 () {
	if (hasRequiredArrayBufferByteLength$1) return arrayBufferByteLength;
	hasRequiredArrayBufferByteLength$1 = 1;

	var callBound = /*@__PURE__*/ requireCallBound();
	var $byteLength = callBound('ArrayBuffer.prototype.byteLength', true);

	var isArrayBuffer = /*@__PURE__*/ requireIsArrayBuffer();

	/** @type {import('.')} */
	arrayBufferByteLength = function byteLength(ab) {
		if (!isArrayBuffer(ab)) {
			return NaN;
		}
		return $byteLength ? $byteLength(ab) : ab.byteLength;
	}; // in node < 0.11, byteLength is an own nonconfigurable property
	return arrayBufferByteLength;
}

var isSharedArrayBuffer;
var hasRequiredIsSharedArrayBuffer;

function requireIsSharedArrayBuffer () {
	if (hasRequiredIsSharedArrayBuffer) return isSharedArrayBuffer;
	hasRequiredIsSharedArrayBuffer = 1;

	var callBound = /*@__PURE__*/ requireCallBound();

	/** @type {undefined | ((thisArg: SharedArrayBuffer) => number)} */
	var $byteLength = callBound('SharedArrayBuffer.prototype.byteLength', true);

	/** @type {import('.')} */
	isSharedArrayBuffer = $byteLength
		? function isSharedArrayBuffer(obj) {
			if (!obj || typeof obj !== 'object') {
				return false;
			}
			try {
				// @ts-expect-error TS can't figure out this closed-over variable is non-nullable, and it's fine that `obj` might not be a SAB
				$byteLength(obj);
				return true;
			} catch (e) {
				return false;
			}
		}
		: function isSharedArrayBuffer(_obj) { // eslint-disable-line no-unused-vars
			return false;
		};
	return isSharedArrayBuffer;
}

var IsDetachedBuffer;
var hasRequiredIsDetachedBuffer;

function requireIsDetachedBuffer () {
	if (hasRequiredIsDetachedBuffer) return IsDetachedBuffer;
	hasRequiredIsDetachedBuffer = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var $byteLength = /*@__PURE__*/ requireArrayBufferByteLength$1();
	var availableTypedArrays = /*@__PURE__*/ requireAvailableTypedArrays()();
	var callBound = /*@__PURE__*/ requireCallBound();
	var isArrayBuffer = /*@__PURE__*/ requireIsArrayBuffer();
	var isSharedArrayBuffer = /*@__PURE__*/ requireIsSharedArrayBuffer();

	var $sabByteLength = callBound('SharedArrayBuffer.prototype.byteLength', true);

	// https://262.ecma-international.org/8.0/#sec-isdetachedbuffer

	IsDetachedBuffer = function IsDetachedBuffer(arrayBuffer) {
		var isSAB = isSharedArrayBuffer(arrayBuffer);
		if (!isArrayBuffer(arrayBuffer) && !isSAB) {
			throw new $TypeError('Assertion failed: `arrayBuffer` must be an Object with an [[ArrayBufferData]] internal slot');
		}
		if ((isSAB ? $sabByteLength : $byteLength)(arrayBuffer) === 0) {
			try {
				new commonjsGlobal[availableTypedArrays[0]](arrayBuffer); // eslint-disable-line no-new
			} catch (error) {
				return !!error && error.name === 'TypeError';
			}
		}
		return false;
	};
	return IsDetachedBuffer;
}

var HasOwnProperty;
var hasRequiredHasOwnProperty;

function requireHasOwnProperty () {
	if (hasRequiredHasOwnProperty) return HasOwnProperty;
	hasRequiredHasOwnProperty = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var hasOwn = /*@__PURE__*/ requireHasown();

	var isObject = /*@__PURE__*/ requireIsObject();
	var isPropertyKey = /*@__PURE__*/ requireIsPropertyKey();

	// https://262.ecma-international.org/6.0/#sec-hasownproperty

	HasOwnProperty = function HasOwnProperty(O, P) {
		if (!isObject(O)) {
			throw new $TypeError('Assertion failed: `O` must be an Object');
		}
		if (!isPropertyKey(P)) {
			throw new $TypeError('Assertion failed: `P` must be a Property Key');
		}
		return hasOwn(O, P);
	};
	return HasOwnProperty;
}

var IsArray$1;
var hasRequiredIsArray$1;

function requireIsArray$1 () {
	if (hasRequiredIsArray$1) return IsArray$1;
	hasRequiredIsArray$1 = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $Array = GetIntrinsic('%Array%');

	// eslint-disable-next-line global-require
	var toStr = !$Array.isArray && /*@__PURE__*/ requireCallBound()('Object.prototype.toString');

	IsArray$1 = $Array.isArray || function IsArray(argument) {
		return toStr(argument) === '[object Array]';
	};
	return IsArray$1;
}

var IsArray;
var hasRequiredIsArray;

function requireIsArray () {
	if (hasRequiredIsArray) return IsArray;
	hasRequiredIsArray = 1;

	// https://262.ecma-international.org/6.0/#sec-isarray
	IsArray = /*@__PURE__*/ requireIsArray$1();
	return IsArray;
}

var IsBigIntElementType;
var hasRequiredIsBigIntElementType;

function requireIsBigIntElementType () {
	if (hasRequiredIsBigIntElementType) return IsBigIntElementType;
	hasRequiredIsBigIntElementType = 1;

	// https://262.ecma-international.org/15.0/#sec-isbigintelementtype

	IsBigIntElementType = function IsBigIntElementType(type) {
		return type === 'BIGUINT64' || type === 'BIGINT64';
	};
	return IsBigIntElementType;
}

var IsUnsignedElementType;
var hasRequiredIsUnsignedElementType;

function requireIsUnsignedElementType () {
	if (hasRequiredIsUnsignedElementType) return IsUnsignedElementType;
	hasRequiredIsUnsignedElementType = 1;

	// https://262.ecma-international.org/15.0/#sec-isunsignedelementtype

	IsUnsignedElementType = function IsUnsignedElementType(type) {
		return type === 'UINT8'
			|| type === 'UINT8C'
			|| type === 'UINT16'
			|| type === 'UINT32'
			|| type === 'BIGUINT64';
	};
	return IsUnsignedElementType;
}

var bytesAsFloat32;
var hasRequiredBytesAsFloat32;

function requireBytesAsFloat32 () {
	if (hasRequiredBytesAsFloat32) return bytesAsFloat32;
	hasRequiredBytesAsFloat32 = 1;

	var $pow = /*@__PURE__*/ requirePow();

	bytesAsFloat32 = function bytesAsFloat32(rawBytes) {
		// return new $Float32Array(new $Uint8Array(rawBytes).buffer)[0];

		/*
	        Let value be the byte elements of rawBytes concatenated and interpreted as a little-endian bit string encoding of an IEEE 754-2008 binary32 value.
	If value is an IEEE 754-2008 binary32 NaN value, return the NaN Number value.
	Return the Number value that corresponds to value.
	        */
		var sign = rawBytes[3] & 0x80 ? -1 : 1; // Check the sign bit
		var exponent = ((rawBytes[3] & 0x7F) << 1)
			| (rawBytes[2] >> 7); // Combine bits for exponent
		var mantissa = ((rawBytes[2] & 0x7F) << 16)
			| (rawBytes[1] << 8)
			| rawBytes[0]; // Combine bits for mantissa

		if (exponent === 0 && mantissa === 0) {
			return sign === 1 ? 0 : -0;
		}
		if (exponent === 0xFF && mantissa === 0) {
			return sign === 1 ? Infinity : -Infinity;
		}
		if (exponent === 0xFF && mantissa !== 0) {
			return NaN;
		}

		exponent -= 127; // subtract the bias

		if (exponent === -127) {
			return sign * mantissa * $pow(2, -126 - 23);
		}
		return sign * (1 + (mantissa * $pow(2, -23))) * $pow(2, exponent);
	};
	return bytesAsFloat32;
}

var bytesAsFloat64;
var hasRequiredBytesAsFloat64;

function requireBytesAsFloat64 () {
	if (hasRequiredBytesAsFloat64) return bytesAsFloat64;
	hasRequiredBytesAsFloat64 = 1;

	var $pow = /*@__PURE__*/ requirePow();

	bytesAsFloat64 = function bytesAsFloat64(rawBytes) {
		// return new $Float64Array(new $Uint8Array(rawBytes).buffer)[0];

		/*
	    Let value be the byte elements of rawBytes concatenated and interpreted as a little-endian bit string encoding of an IEEE 754-2008 binary64 value.
	If value is an IEEE 754-2008 binary64 NaN value, return the NaN Number value.
	Return the Number value that corresponds to value.
	    */
		var sign = rawBytes[7] & 0x80 ? -1 : 1; // first bit
		var exponent = ((rawBytes[7] & 0x7F) << 4) // 7 bits from index 7
	        | ((rawBytes[6] & 0xF0) >> 4); // 4 bits from index 6
		var mantissa = ((rawBytes[6] & 0x0F) * 0x1000000000000) // 4 bits from index 6
	        + (rawBytes[5] * 0x10000000000) // 8 bits from index 5
	        + (rawBytes[4] * 0x100000000) // 8 bits from index 4
	        + (rawBytes[3] * 0x1000000) // 8 bits from index 3
	        + (rawBytes[2] * 0x10000) // 8 bits from index 2
	        + (rawBytes[1] * 0x100) // 8 bits from index 1
	        + rawBytes[0]; // 8 bits from index 0

		if (exponent === 0 && mantissa === 0) {
			return sign * 0;
		}
		if (exponent === 0x7FF && mantissa !== 0) {
			return NaN;
		}
		if (exponent === 0x7FF && mantissa === 0) {
			return sign * Infinity;
		}

		exponent -= 1023; // subtract the bias

		// Handle subnormal numbers
		if (exponent === -1023) {
			return sign * mantissa * 5e-324; // $pow(2, -1022 - 52)
		}

		return sign * (1 + (mantissa / 0x10000000000000)) * $pow(2, exponent);
	};
	return bytesAsFloat64;
}

var bytesAsInteger;
var hasRequiredBytesAsInteger;

function requireBytesAsInteger () {
	if (hasRequiredBytesAsInteger) return bytesAsInteger;
	hasRequiredBytesAsInteger = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $pow = /*@__PURE__*/ requirePow();

	var $Number = GetIntrinsic('%Number%');
	var $BigInt = GetIntrinsic('%BigInt%', true);

	bytesAsInteger = function bytesAsInteger(rawBytes, elementSize, isUnsigned, isBigInt) {
		var Z = isBigInt ? $BigInt : $Number;

		// this is common to both branches
		var intValue = Z(0);
		for (var i = 0; i < rawBytes.length; i++) {
			intValue += Z(rawBytes[i] * $pow(2, 8 * i));
		}
		/*
		Let intValue be the byte elements of rawBytes concatenated and interpreted as a bit string encoding of an unsigned little-endian binary number.
		*/

		if (!isUnsigned) { // steps 5-6
			// Let intValue be the byte elements of rawBytes concatenated and interpreted as a bit string encoding of a binary little-endian 2's complement number of bit length elementSize × 8.
			var bitLength = elementSize * 8;

			if (rawBytes[elementSize - 1] & 0x80) {
				intValue -= Z($pow(2, bitLength));
			}
		}

		return intValue; // step 7
	};
	return bytesAsInteger;
}

var every;
var hasRequiredEvery;

function requireEvery () {
	if (hasRequiredEvery) return every;
	hasRequiredEvery = 1;

	every = function every(array, predicate) {
		for (var i = 0; i < array.length; i += 1) {
			if (!predicate(array[i], i, array)) {
				return false;
			}
		}
		return true;
	};
	return every;
}

var isByteValue;
var hasRequiredIsByteValue;

function requireIsByteValue () {
	if (hasRequiredIsByteValue) return isByteValue;
	hasRequiredIsByteValue = 1;

	isByteValue = function isByteValue(value) {
		return typeof value === 'number' && value >= 0 && value <= 255 && (value | 0) === value;
	};
	return isByteValue;
}

var RawBytesToNumeric;
var hasRequiredRawBytesToNumeric;

function requireRawBytesToNumeric () {
	if (hasRequiredRawBytesToNumeric) return RawBytesToNumeric;
	hasRequiredRawBytesToNumeric = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();
	var callBound = /*@__PURE__*/ requireCallBound();

	var $RangeError = /*@__PURE__*/ requireRange();
	var $SyntaxError = /*@__PURE__*/ requireSyntax();
	var $TypeError = /*@__PURE__*/ requireType();
	var $BigInt = GetIntrinsic('%BigInt%', true);

	var hasOwnProperty = /*@__PURE__*/ requireHasOwnProperty();
	var IsArray = /*@__PURE__*/ requireIsArray();
	var IsBigIntElementType = /*@__PURE__*/ requireIsBigIntElementType();
	var IsUnsignedElementType = /*@__PURE__*/ requireIsUnsignedElementType();

	var bytesAsFloat32 = /*@__PURE__*/ requireBytesAsFloat32();
	var bytesAsFloat64 = /*@__PURE__*/ requireBytesAsFloat64();
	var bytesAsInteger = /*@__PURE__*/ requireBytesAsInteger();
	var every = /*@__PURE__*/ requireEvery();
	var isByteValue = /*@__PURE__*/ requireIsByteValue();

	var $reverse = callBound('Array.prototype.reverse');
	var $slice = callBound('Array.prototype.slice');

	var keys = requireObjectKeys();

	// https://262.ecma-international.org/15.0/#table-the-typedarray-constructors
	var TypeToSizes = {
		__proto__: null,
		INT8: 1,
		UINT8: 1,
		UINT8C: 1,
		INT16: 2,
		UINT16: 2,
		INT32: 4,
		UINT32: 4,
		BIGINT64: 8,
		BIGUINT64: 8,
		FLOAT32: 4,
		FLOAT64: 8
	};

	// https://262.ecma-international.org/15.0/#sec-rawbytestonumeric

	RawBytesToNumeric = function RawBytesToNumeric(type, rawBytes, isLittleEndian) {
		if (!hasOwnProperty(TypeToSizes, type)) {
			throw new $TypeError('Assertion failed: `type` must be a TypedArray element type: ' + keys(TypeToSizes));
		}
		if (!IsArray(rawBytes) || !every(rawBytes, isByteValue)) {
			throw new $TypeError('Assertion failed: `rawBytes` must be an Array of bytes');
		}
		if (typeof isLittleEndian !== 'boolean') {
			throw new $TypeError('Assertion failed: `isLittleEndian` must be a Boolean');
		}

		var elementSize = TypeToSizes[type]; // step 1

		if (rawBytes.length !== elementSize) {
			// this assertion is not in the spec, but it'd be an editorial error if it were ever violated
			throw new $RangeError('Assertion failed: `rawBytes` must have a length of ' + elementSize + ' for type ' + type);
		}

		var isBigInt = IsBigIntElementType(type);
		if (isBigInt && !$BigInt) {
			throw new $SyntaxError('this environment does not support BigInts');
		}

		// eslint-disable-next-line no-param-reassign
		rawBytes = $slice(rawBytes, 0, elementSize);
		if (!isLittleEndian) {
			$reverse(rawBytes); // step 2
		}

		if (type === 'FLOAT32') { // step 3
			return bytesAsFloat32(rawBytes);
		}

		if (type === 'FLOAT64') { // step 4
			return bytesAsFloat64(rawBytes);
		}

		return bytesAsInteger(rawBytes, elementSize, IsUnsignedElementType(type), isBigInt);
	};
	return RawBytesToNumeric;
}

var isarray;
var hasRequiredIsarray;

function requireIsarray () {
	if (hasRequiredIsarray) return isarray;
	hasRequiredIsarray = 1;
	var toString = {}.toString;

	isarray = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};
	return isarray;
}

var safeArrayConcat;
var hasRequiredSafeArrayConcat;

function requireSafeArrayConcat () {
	if (hasRequiredSafeArrayConcat) return safeArrayConcat;
	hasRequiredSafeArrayConcat = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();
	var $concat = GetIntrinsic('%Array.prototype.concat%');

	var callBind = requireCallBind();

	var callBound = /*@__PURE__*/ requireCallBound();
	var $slice = callBound('Array.prototype.slice');

	var hasSymbols = requireShams$1()();
	var isConcatSpreadable = hasSymbols && Symbol.isConcatSpreadable;

	/** @type {never[]} */ var empty = [];
	var $concatApply = isConcatSpreadable ? callBind.apply($concat, empty) : null;

	// eslint-disable-next-line no-extra-parens
	var isArray = isConcatSpreadable ? /** @type {(value: unknown) => value is unknown[]} */ (requireIsarray()) : null;

	/** @type {import('.')} */
	safeArrayConcat = isConcatSpreadable
		// eslint-disable-next-line no-unused-vars
		? function safeArrayConcat(item) {
			for (var i = 0; i < arguments.length; i += 1) {
				/** @type {typeof item} */ var arg = arguments[i];
				// @ts-expect-error ts(2538) see https://github.com/microsoft/TypeScript/issues/9998#issuecomment-1890787975; works if `const`
				if (arg && typeof arg === 'object' && typeof arg[isConcatSpreadable] === 'boolean') {
					// @ts-expect-error ts(7015) TS doesn't yet support Symbol indexing
					if (!empty[isConcatSpreadable]) {
						// @ts-expect-error ts(7015) TS doesn't yet support Symbol indexing
						empty[isConcatSpreadable] = true;
					}
					// @ts-expect-error ts(2721) ts(18047) not sure why TS can't figure out this can't be null
					var arr = isArray(arg) ? $slice(arg) : [arg];
					// @ts-expect-error ts(7015) TS can't handle expandos on an array
					arr[isConcatSpreadable] = true; // shadow the property. TODO: use [[Define]]
					arguments[i] = arr;
				}
			}
			// @ts-expect-error ts(2345) https://github.com/microsoft/TypeScript/issues/57164 TS doesn't understand that apply can take an arguments object
			return $concatApply(arguments);
		}
		: callBind($concat, empty);
	return safeArrayConcat;
}

var typedArrayObjects;
var hasRequiredTypedArrayObjects;

function requireTypedArrayObjects () {
	if (hasRequiredTypedArrayObjects) return typedArrayObjects;
	hasRequiredTypedArrayObjects = 1;

	// https://262.ecma-international.org/15.0/#table-the-typedarray-constructors

	typedArrayObjects = {
		__proto__: null,
		name: {
			__proto__: null,
			$Int8Array: 'INT8',
			$Uint8Array: 'UINT8',
			$Uint8ClampedArray: 'UINT8C',
			$Int16Array: 'INT16',
			$Uint16Array: 'UINT16',
			$Int32Array: 'INT32',
			$Uint32Array: 'UINT32',
			$BigInt64Array: 'BIGINT64',
			$BigUint64Array: 'BIGUINT64',
			$Float32Array: 'FLOAT32',
			$Float64Array: 'FLOAT64'
		},
		size: {
			__proto__: null,
			$INT8: 1,
			$UINT8: 1,
			$UINT8C: 1,
			$INT16: 2,
			$UINT16: 2,
			$INT32: 4,
			$UINT32: 4,
			$BIGINT64: 8,
			$BIGUINT64: 8,
			$FLOAT32: 4,
			$FLOAT64: 8
		}
	};
	return typedArrayObjects;
}

var isTypedArray;
var hasRequiredIsTypedArray;

function requireIsTypedArray () {
	if (hasRequiredIsTypedArray) return isTypedArray;
	hasRequiredIsTypedArray = 1;

	var whichTypedArray = /*@__PURE__*/ requireWhichTypedArray();

	/** @type {import('.')} */
	isTypedArray = function isTypedArray(value) {
		return !!whichTypedArray(value);
	};
	return isTypedArray;
}

var typedArrayBuffer;
var hasRequiredTypedArrayBuffer;

function requireTypedArrayBuffer () {
	if (hasRequiredTypedArrayBuffer) return typedArrayBuffer;
	hasRequiredTypedArrayBuffer = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var callBound = /*@__PURE__*/ requireCallBound();

	/** @type {undefined | ((thisArg: import('.').TypedArray) => Buffer<ArrayBufferLike>)} */
	var $typedArrayBuffer = callBound('TypedArray.prototype.buffer', true);

	var isTypedArray = /*@__PURE__*/ requireIsTypedArray();

	/** @type {import('.')} */
	// node <= 0.10, < 0.11.4 has a nonconfigurable own property instead of a prototype getter
	typedArrayBuffer = $typedArrayBuffer || function typedArrayBuffer(x) {
		if (!isTypedArray(x)) {
			throw new $TypeError('Not a Typed Array');
		}
		return x.buffer;
	};
	return typedArrayBuffer;
}

var defaultEndianness;
var hasRequiredDefaultEndianness;

function requireDefaultEndianness () {
	if (hasRequiredDefaultEndianness) return defaultEndianness;
	hasRequiredDefaultEndianness = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $Uint8Array = GetIntrinsic('%Uint8Array%', true);
	var $Uint32Array = GetIntrinsic('%Uint32Array%', true);

	var typedArrayBuffer = /*@__PURE__*/ requireTypedArrayBuffer();

	var uInt32 = $Uint32Array && new $Uint32Array([0x12345678]);
	var uInt8 = uInt32 && new $Uint8Array(typedArrayBuffer(uInt32));

	defaultEndianness = uInt8
		? uInt8[0] === 0x78
			? 'little'
			: uInt8[0] === 0x12
				? 'big'
				: uInt8[0] === 0x34
					? 'mixed' // https://developer.mozilla.org/en-US/docs/Glossary/Endianness
					: 'unknown' // ???
		: 'indeterminate'; // no way to know
	return defaultEndianness;
}

var GetValueFromBuffer;
var hasRequiredGetValueFromBuffer;

function requireGetValueFromBuffer () {
	if (hasRequiredGetValueFromBuffer) return GetValueFromBuffer;
	hasRequiredGetValueFromBuffer = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $SyntaxError = /*@__PURE__*/ requireSyntax();
	var $TypeError = /*@__PURE__*/ requireType();
	var callBound = /*@__PURE__*/ requireCallBound();
	var isInteger = /*@__PURE__*/ requireIsInteger$1();
	var $Uint8Array = GetIntrinsic('%Uint8Array%', true);

	var $slice = callBound('Array.prototype.slice');

	var IsDetachedBuffer = /*@__PURE__*/ requireIsDetachedBuffer();
	var RawBytesToNumeric = /*@__PURE__*/ requireRawBytesToNumeric();

	var isArrayBuffer = /*@__PURE__*/ requireIsArrayBuffer();
	var isSharedArrayBuffer = /*@__PURE__*/ requireIsSharedArrayBuffer();
	var safeConcat = /*@__PURE__*/ requireSafeArrayConcat();

	var tableTAO = /*@__PURE__*/ requireTypedArrayObjects();

	var defaultEndianness = /*@__PURE__*/ requireDefaultEndianness();

	// https://262.ecma-international.org/15.0/#sec-getvaluefrombuffer

	GetValueFromBuffer = function GetValueFromBuffer(arrayBuffer, byteIndex, type, isTypedArray, order) {
		var isSAB = isSharedArrayBuffer(arrayBuffer);
		if (!isArrayBuffer(arrayBuffer) && !isSAB) {
			throw new $TypeError('Assertion failed: `arrayBuffer` must be an ArrayBuffer or a SharedArrayBuffer');
		}

		if (!isInteger(byteIndex)) {
			throw new $TypeError('Assertion failed: `byteIndex` must be an integer');
		}

		if (typeof type !== 'string' || typeof tableTAO.size['$' + type] !== 'number') {
			throw new $TypeError('Assertion failed: `type` must be a Typed Array element type');
		}

		if (typeof isTypedArray !== 'boolean') {
			throw new $TypeError('Assertion failed: `isTypedArray` must be a boolean');
		}

		if (order !== 'SEQ-CST' && order !== 'UNORDERED') {
			throw new $TypeError('Assertion failed: `order` must be either `SEQ-CST` or `UNORDERED`');
		}

		if (arguments.length > 5 && typeof arguments[5] !== 'boolean') {
			throw new $TypeError('Assertion failed: `isLittleEndian` must be a boolean, if present');
		}

		if (IsDetachedBuffer(arrayBuffer)) {
			throw new $TypeError('Assertion failed: `arrayBuffer` is detached'); // step 1
		}

		// 2. Assert: There are sufficient bytes in arrayBuffer starting at byteIndex to represent a value of type.

		if (byteIndex < 0) {
			throw new $TypeError('Assertion failed: `byteIndex` must be non-negative'); // step 3
		}

		// 4. Let block be arrayBuffer.[[ArrayBufferData]].

		var elementSize = tableTAO.size['$' + type]; // step 5
		if (!elementSize) {
			throw new $TypeError('Assertion failed: `type` must be one of "INT8", "UINT8", "UINT8C", "INT16", "UINT16", "INT32", "UINT32", "BIGINT64", "BIGUINT64", "FLOAT32", or "FLOAT64"');
		}

		var rawValue;
		if (isSAB) { // step 6
			/*
			a. Let execution be the [[CandidateExecution]] field of the surrounding agent's Agent Record.
			b. Let eventList be the [[EventList]] field of the element in execution.[[EventLists]] whose [[AgentSignifier]] is AgentSignifier().
			c. If isTypedArray is true and type is "Int8", "Uint8", "Int16", "Uint16", "Int32", or "Uint32", let noTear be true; otherwise let noTear be false.
			d. Let rawValue be a List of length elementSize of nondeterministically chosen byte values.
			e. NOTE: In implementations, rawValue is the result of a non-atomic or atomic read instruction on the underlying hardware. The nondeterminism is a semantic prescription of the memory model to describe observable behaviour of hardware with weak consistency.
			f. Let readEvent be ReadSharedMemory{ [[Order]]: order, [[NoTear]]: noTear, [[Block]]: block, [[ByteIndex]]: byteIndex, [[ElementSize]]: elementSize }.
			g. Append readEvent to eventList.
			h. Append Chosen Value Record { [[Event]]: readEvent, [[ChosenValue]]: rawValue } to execution.[[ChosenValues]].
			*/
			throw new $SyntaxError('SharedArrayBuffer is not supported by this implementation');
		} else {
			// 7. Let rawValue be a List of elementSize containing, in order, the elementSize sequence of bytes starting with block[byteIndex].
			rawValue = $slice(new $Uint8Array(arrayBuffer, byteIndex), 0, elementSize); // step 6
		}

		// 8. If isLittleEndian is not present, set isLittleEndian to either true or false. The choice is implementation dependent and should be the alternative that is most efficient for the implementation. An implementation must use the same value each time this step is executed and the same value must be used for the corresponding step in the SetValueInBuffer abstract operation.
		var isLittleEndian = arguments.length > 5 ? arguments[5] : defaultEndianness === 'little'; // step 8

		var bytes = isLittleEndian
			? $slice(safeConcat([0, 0, 0, 0, 0, 0, 0, 0], rawValue), -elementSize)
			: $slice(safeConcat(rawValue, [0, 0, 0, 0, 0, 0, 0, 0]), 0, elementSize);

		return RawBytesToNumeric(type, bytes, isLittleEndian);
	};
	return GetValueFromBuffer;
}

var SameValue;
var hasRequiredSameValue;

function requireSameValue () {
	if (hasRequiredSameValue) return SameValue;
	hasRequiredSameValue = 1;

	var $isNaN = /*@__PURE__*/ require_isNaN();

	// http://262.ecma-international.org/5.1/#sec-9.12

	SameValue = function SameValue(x, y) {
		if (x === y) { // 0 === -0, but they are not identical.
			if (x === 0) { return 1 / x === 1 / y; }
			return true;
		}
		return $isNaN(x) && $isNaN(y);
	};
	return SameValue;
}

var _Set;
var hasRequired_Set;

function require_Set () {
	if (hasRequired_Set) return _Set;
	hasRequired_Set = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var isPropertyKey = /*@__PURE__*/ requireIsPropertyKey();
	var SameValue = /*@__PURE__*/ requireSameValue();

	var isObject = /*@__PURE__*/ requireIsObject();

	// IE 9 does not throw in strict mode when writability/configurability/extensibility is violated
	var noThrowOnStrictViolation = (function () {
		try {
			delete [].length;
			return true;
		} catch (e) {
			return false;
		}
	}());

	// https://262.ecma-international.org/6.0/#sec-set-o-p-v-throw

	_Set = function Set(O, P, V, Throw) {
		if (!isObject(O)) {
			throw new $TypeError('Assertion failed: `O` must be an Object');
		}
		if (!isPropertyKey(P)) {
			throw new $TypeError('Assertion failed: `P` must be a Property Key');
		}
		if (typeof Throw !== 'boolean') {
			throw new $TypeError('Assertion failed: `Throw` must be a Boolean');
		}
		if (Throw) {
			O[P] = V; // eslint-disable-line no-param-reassign
			if (noThrowOnStrictViolation && !SameValue(O[P], V)) {
				throw new $TypeError('Attempted to assign to readonly property.');
			}
			return true;
		}
		try {
			O[P] = V; // eslint-disable-line no-param-reassign
			return noThrowOnStrictViolation ? SameValue(O[P], V) : true;
		} catch (e) {
			return false;
		}

	};
	return _Set;
}

var StringToBigInt;
var hasRequiredStringToBigInt;

function requireStringToBigInt () {
	if (hasRequiredStringToBigInt) return StringToBigInt;
	hasRequiredStringToBigInt = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $BigInt = GetIntrinsic('%BigInt%', true);
	var $TypeError = /*@__PURE__*/ requireType();
	var $SyntaxError = /*@__PURE__*/ requireSyntax();

	// https://262.ecma-international.org/14.0/#sec-stringtobigint

	StringToBigInt = function StringToBigInt(argument) {
		if (typeof argument !== 'string') {
			throw new $TypeError('`argument` must be a string');
		}
		if (!$BigInt) {
			throw new $SyntaxError('BigInts are not supported in this environment');
		}
		try {
			return $BigInt(argument);
		} catch (e) {
			return void 0;
		}
	};
	return StringToBigInt;
}

var isPrimitive$1;
var hasRequiredIsPrimitive$1;

function requireIsPrimitive$1 () {
	if (hasRequiredIsPrimitive$1) return isPrimitive$1;
	hasRequiredIsPrimitive$1 = 1;

	/** @type {(value: unknown) => value is null | undefined | string | symbol | number | boolean | bigint} */
	isPrimitive$1 = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};
	return isPrimitive$1;
}

var isDateObject;
var hasRequiredIsDateObject;

function requireIsDateObject () {
	if (hasRequiredIsDateObject) return isDateObject;
	hasRequiredIsDateObject = 1;

	var callBound = /*@__PURE__*/ requireCallBound();

	var getDay = callBound('Date.prototype.getDay');
	/** @type {import('.')} */
	var tryDateObject = function tryDateGetDayCall(value) {
		try {
			getDay(value);
			return true;
		} catch (e) {
			return false;
		}
	};

	/** @type {(value: unknown) => string} */
	var toStr = callBound('Object.prototype.toString');
	var dateClass = '[object Date]';
	var hasToStringTag = requireShams()();

	/** @type {import('.')} */
	isDateObject = function isDateObject(value) {
		if (typeof value !== 'object' || value === null) {
			return false;
		}
		return hasToStringTag ? tryDateObject(value) : toStr(value) === dateClass;
	};
	return isDateObject;
}

var isSymbol = {exports: {}};

var isRegex;
var hasRequiredIsRegex;

function requireIsRegex () {
	if (hasRequiredIsRegex) return isRegex;
	hasRequiredIsRegex = 1;

	var callBound = /*@__PURE__*/ requireCallBound();
	var hasToStringTag = requireShams()();
	var hasOwn = /*@__PURE__*/ requireHasown();
	var gOPD = /*@__PURE__*/ requireGopd();

	/** @type {import('.')} */
	var fn;

	if (hasToStringTag) {
		/** @type {(receiver: ThisParameterType<typeof RegExp.prototype.exec>, ...args: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */
		var $exec = callBound('RegExp.prototype.exec');
		/** @type {object} */
		var isRegexMarker = {};

		var throwRegexMarker = function () {
			throw isRegexMarker;
		};
		/** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */
		var badStringifier = {
			toString: throwRegexMarker,
			valueOf: throwRegexMarker
		};

		if (typeof Symbol.toPrimitive === 'symbol') {
			badStringifier[Symbol.toPrimitive] = throwRegexMarker;
		}

		/** @type {import('.')} */
		// @ts-expect-error TS can't figure out that the $exec call always throws
		// eslint-disable-next-line consistent-return
		fn = function isRegex(value) {
			if (!value || typeof value !== 'object') {
				return false;
			}

			// eslint-disable-next-line no-extra-parens
			var descriptor = /** @type {NonNullable<typeof gOPD>} */ (gOPD)(/** @type {{ lastIndex?: unknown }} */ (value), 'lastIndex');
			var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, 'value');
			if (!hasLastIndexDataProperty) {
				return false;
			}

			try {
				// eslint-disable-next-line no-extra-parens
				$exec(value, /** @type {string} */ (/** @type {unknown} */ (badStringifier)));
			} catch (e) {
				return e === isRegexMarker;
			}
		};
	} else {
		/** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */
		var $toString = callBound('Object.prototype.toString');
		/** @const @type {'[object RegExp]'} */
		var regexClass = '[object RegExp]';

		/** @type {import('.')} */
		fn = function isRegex(value) {
			// In older browsers, typeof regex incorrectly returns 'function'
			if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
				return false;
			}

			return $toString(value) === regexClass;
		};
	}

	isRegex = fn;
	return isRegex;
}

var safeRegexTest;
var hasRequiredSafeRegexTest;

function requireSafeRegexTest () {
	if (hasRequiredSafeRegexTest) return safeRegexTest;
	hasRequiredSafeRegexTest = 1;

	var callBound = /*@__PURE__*/ requireCallBound();
	var isRegex = requireIsRegex();

	var $exec = callBound('RegExp.prototype.exec');
	var $TypeError = /*@__PURE__*/ requireType();

	/** @type {import('.')} */
	safeRegexTest = function regexTester(regex) {
		if (!isRegex(regex)) {
			throw new $TypeError('`regex` must be a RegExp');
		}
		return function test(s) {
			return $exec(regex, s) !== null;
		};
	};
	return safeRegexTest;
}

var hasRequiredIsSymbol;

function requireIsSymbol () {
	if (hasRequiredIsSymbol) return isSymbol.exports;
	hasRequiredIsSymbol = 1;

	var callBound = /*@__PURE__*/ requireCallBound();
	var $toString = callBound('Object.prototype.toString');
	var hasSymbols = requireHasSymbols()();
	var safeRegexTest = /*@__PURE__*/ requireSafeRegexTest();

	if (hasSymbols) {
		var $symToStr = callBound('Symbol.prototype.toString');
		var isSymString = safeRegexTest(/^Symbol\(.*\)$/);

		/** @type {(value: object) => value is Symbol} */
		var isSymbolObject = function isRealSymbolObject(value) {
			if (typeof value.valueOf() !== 'symbol') {
				return false;
			}
			return isSymString($symToStr(value));
		};

		/** @type {import('.')} */
		isSymbol.exports = function isSymbol(value) {
			if (typeof value === 'symbol') {
				return true;
			}
			if (!value || typeof value !== 'object' || $toString(value) !== '[object Symbol]') {
				return false;
			}
			try {
				return isSymbolObject(value);
			} catch (e) {
				return false;
			}
		};
	} else {
		/** @type {import('.')} */
		isSymbol.exports = function isSymbol(value) {
			// this environment does not support Symbols.
			return false;
		};
	}
	return isSymbol.exports;
}

var es2015;
var hasRequiredEs2015;

function requireEs2015 () {
	if (hasRequiredEs2015) return es2015;
	hasRequiredEs2015 = 1;

	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

	var isPrimitive = requireIsPrimitive$1();
	var isCallable = requireIsCallable$1();
	var isDate = /*@__PURE__*/ requireIsDateObject();
	var isSymbol = requireIsSymbol();

	/** @type {(O: { valueOf?: () => unknown, toString?: () => unknown }, hint: 'number' | 'string' | 'default') => null | undefined | string | symbol | number | boolean | bigint} */
	var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
		if (typeof O === 'undefined' || O === null) {
			throw new TypeError('Cannot call method on ' + O);
		}
		if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
			throw new TypeError('hint must be "string" or "number"');
		}
		/** @type {('toString' | 'valueOf')[]} */
		var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
		var method, result, i;
		for (i = 0; i < methodNames.length; ++i) {
			method = O[methodNames[i]];
			if (isCallable(method)) {
				result = method.call(O);
				if (isPrimitive(result)) {
					return result;
				}
			}
		}
		throw new TypeError('No default value');
	};

	/** @type {<K extends PropertyKey>(O: Record<K, unknown>, P: K) => Function | undefined} */
	var GetMethod = function GetMethod(O, P) {
		var func = O[P];
		if (func !== null && typeof func !== 'undefined') {
			if (!isCallable(func)) {
				throw new TypeError(func + ' returned for property ' + String(P) + ' of object ' + O + ' is not a function');
			}
			return func;
		}
		return void 0;
	};

	/** @type {import('./es2015')} */
	// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
	es2015 = function ToPrimitive(input) {
		if (isPrimitive(input)) {
			return input;
		}
		/** @type {'default' | 'string' | 'number'} */
		var hint = 'default';
		if (arguments.length > 1) {
			if (arguments[1] === String) {
				hint = 'string';
			} else if (arguments[1] === Number) {
				hint = 'number';
			}
		}

		var exoticToPrim;
		if (hasSymbols) {
			if (Symbol.toPrimitive) {
				// eslint-disable-next-line no-extra-parens
				exoticToPrim = GetMethod(/** @type {Record<PropertyKey, unknown>} */ (input), Symbol.toPrimitive);
			} else if (isSymbol(input)) {
				exoticToPrim = Symbol.prototype.valueOf;
			}
		}
		if (typeof exoticToPrim !== 'undefined') {
			var result = exoticToPrim.call(input, hint);
			if (isPrimitive(result)) {
				return result;
			}
			throw new TypeError('unable to convert exotic object to primitive');
		}
		if (hint === 'default' && (isDate(input) || isSymbol(input))) {
			hint = 'string';
		}
		// eslint-disable-next-line no-extra-parens
		return ordinaryToPrimitive(/** @type {object} */ (input), hint === 'default' ? 'number' : hint);
	};
	return es2015;
}

var ToPrimitive;
var hasRequiredToPrimitive;

function requireToPrimitive () {
	if (hasRequiredToPrimitive) return ToPrimitive;
	hasRequiredToPrimitive = 1;

	var toPrimitive = requireEs2015();

	// https://262.ecma-international.org/6.0/#sec-toprimitive

	ToPrimitive = function ToPrimitive(input) {
		if (arguments.length > 1) {
			return toPrimitive(input, arguments[1]);
		}
		return toPrimitive(input);
	};
	return ToPrimitive;
}

var ToBigInt;
var hasRequiredToBigInt;

function requireToBigInt () {
	if (hasRequiredToBigInt) return ToBigInt;
	hasRequiredToBigInt = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $BigInt = GetIntrinsic('%BigInt%', true);
	var $Number = GetIntrinsic('%Number%');
	var $TypeError = /*@__PURE__*/ requireType();
	var $SyntaxError = /*@__PURE__*/ requireSyntax();

	var StringToBigInt = /*@__PURE__*/ requireStringToBigInt();
	var ToPrimitive = /*@__PURE__*/ requireToPrimitive();

	// https://262.ecma-international.org/13.0/#sec-tobigint

	ToBigInt = function ToBigInt(argument) {
		if (!$BigInt) {
			throw new $SyntaxError('BigInts are not supported in this environment');
		}

		var prim = ToPrimitive(argument, $Number);

		if (prim == null) {
			throw new $TypeError('Cannot convert null or undefined to a BigInt');
		}

		if (typeof prim === 'boolean') {
			return prim ? $BigInt(1) : $BigInt(0);
		}

		if (typeof prim === 'number') {
			throw new $TypeError('Cannot convert a Number value to a BigInt');
		}

		if (typeof prim === 'string') {
			var n = StringToBigInt(prim);
			if (typeof n === 'undefined') {
				throw new $TypeError('Failed to parse String to BigInt');
			}
			return n;
		}

		if (typeof prim === 'symbol') {
			throw new $TypeError('Cannot convert a Symbol value to a BigInt');
		}

		if (typeof prim !== 'bigint') {
			throw new $SyntaxError('Assertion failed: unknown primitive type');
		}

		return prim;
	};
	return ToBigInt;
}

var remainder;
var hasRequiredRemainder;

function requireRemainder () {
	if (hasRequiredRemainder) return remainder;
	hasRequiredRemainder = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $BigInt = GetIntrinsic('%BigInt%', true);
	var $RangeError = /*@__PURE__*/ requireRange();
	var $TypeError = /*@__PURE__*/ requireType();

	var zero = $BigInt && $BigInt(0);

	// https://262.ecma-international.org/11.0/#sec-numeric-types-bigint-remainder

	remainder = function BigIntRemainder(n, d) {
		if (typeof n !== 'bigint' || typeof d !== 'bigint') {
			throw new $TypeError('Assertion failed: `n` and `d` arguments must be BigInts');
		}

		if (d === zero) {
			throw new $RangeError('Division by zero');
		}

		if (n === zero) {
			return zero;
		}

		// shortcut for the actual spec mechanics
		return n % d;
	};
	return remainder;
}

var modBigInt;
var hasRequiredModBigInt;

function requireModBigInt () {
	if (hasRequiredModBigInt) return modBigInt;
	hasRequiredModBigInt = 1;

	modBigInt = function bigIntMod(BigIntRemainder, bigint, modulo) {
		var remain = BigIntRemainder(bigint, modulo);
		return remain >= 0 ? remain : remain + modulo;
	};
	return modBigInt;
}

var ToBigInt64;
var hasRequiredToBigInt64;

function requireToBigInt64 () {
	if (hasRequiredToBigInt64) return ToBigInt64;
	hasRequiredToBigInt64 = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $BigInt = GetIntrinsic('%BigInt%', true);
	var $pow = /*@__PURE__*/ requirePow();

	var ToBigInt = /*@__PURE__*/ requireToBigInt();
	var BigIntRemainder = /*@__PURE__*/ requireRemainder();

	var modBigInt = /*@__PURE__*/ requireModBigInt();

	// BigInt(2**63), but node v10.4-v10.8 have a bug where you can't `BigInt(x)` anything larger than MAX_SAFE_INTEGER
	var twoSixtyThree = $BigInt && (BigInt($pow(2, 32)) * BigInt($pow(2, 31)));

	// BigInt(2**64), but node v10.4-v10.8 have a bug where you can't `BigInt(x)` anything larger than MAX_SAFE_INTEGER
	var twoSixtyFour = $BigInt && (BigInt($pow(2, 32)) * BigInt($pow(2, 32)));

	// https://262.ecma-international.org/11.0/#sec-tobigint64

	ToBigInt64 = function ToBigInt64(argument) {
		var n = ToBigInt(argument);
		var int64bit = modBigInt(BigIntRemainder, n, twoSixtyFour);
		return int64bit >= twoSixtyThree ? int64bit - twoSixtyFour : int64bit;
	};
	return ToBigInt64;
}

var ToBigUint64;
var hasRequiredToBigUint64;

function requireToBigUint64 () {
	if (hasRequiredToBigUint64) return ToBigUint64;
	hasRequiredToBigUint64 = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $BigInt = GetIntrinsic('%BigInt%', true);

	var $pow = /*@__PURE__*/ requirePow();

	var ToBigInt = /*@__PURE__*/ requireToBigInt();
	var BigIntRemainder = /*@__PURE__*/ requireRemainder();

	var modBigInt = /*@__PURE__*/ requireModBigInt();

	// BigInt(2**64), but node v10.4-v10.8 have a bug where you can't `BigInt(x)` anything larger than MAX_SAFE_INTEGER
	var twoSixtyFour = $BigInt && (BigInt($pow(2, 32)) * BigInt($pow(2, 32)));

	// https://262.ecma-international.org/11.0/#sec-tobiguint64

	ToBigUint64 = function ToBigUint64(argument) {
		var n = ToBigInt(argument);
		var int64bit = modBigInt(BigIntRemainder, n, twoSixtyFour);
		return int64bit;
	};
	return ToBigUint64;
}

var mod$1;
var hasRequiredMod$1;

function requireMod$1 () {
	if (hasRequiredMod$1) return mod$1;
	hasRequiredMod$1 = 1;

	var $floor = /*@__PURE__*/ requireFloor$1();

	/** @type {import('./mod')} */
	mod$1 = function mod(number, modulo) {
		var remain = number % modulo;
		return $floor(remain >= 0 ? remain : remain + modulo);
	};
	return mod$1;
}

var mod;
var hasRequiredMod;

function requireMod () {
	if (hasRequiredMod) return mod;
	hasRequiredMod = 1;

	// TODO, semver-major: delete
	mod = /*@__PURE__*/ requireMod$1();
	return mod;
}

var modulo;
var hasRequiredModulo;

function requireModulo () {
	if (hasRequiredModulo) return modulo;
	hasRequiredModulo = 1;

	var mod = /*@__PURE__*/ requireMod();

	// https://262.ecma-international.org/5.1/#sec-5.2

	modulo = function modulo(x, y) {
		return mod(x, y);
	};
	return modulo;
}

var isPrimitive;
var hasRequiredIsPrimitive;

function requireIsPrimitive () {
	if (hasRequiredIsPrimitive) return isPrimitive;
	hasRequiredIsPrimitive = 1;

	isPrimitive = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};
	return isPrimitive;
}

var RequireObjectCoercible;
var hasRequiredRequireObjectCoercible;

function requireRequireObjectCoercible () {
	if (hasRequiredRequireObjectCoercible) return RequireObjectCoercible;
	hasRequiredRequireObjectCoercible = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	/** @type {import('./RequireObjectCoercible')} */
	RequireObjectCoercible = function RequireObjectCoercible(value) {
		if (value == null) {
			throw new $TypeError((arguments.length > 0 && arguments[1]) || ('Cannot call method on ' + value));
		}
		return value;
	};
	return RequireObjectCoercible;
}

var ToString;
var hasRequiredToString;

function requireToString () {
	if (hasRequiredToString) return ToString;
	hasRequiredToString = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $String = GetIntrinsic('%String%');
	var $TypeError = /*@__PURE__*/ requireType();

	// https://262.ecma-international.org/6.0/#sec-tostring

	ToString = function ToString(argument) {
		if (typeof argument === 'symbol') {
			throw new $TypeError('Cannot convert a Symbol value to a string');
		}
		return $String(argument);
	};
	return ToString;
}

var implementation$3;
var hasRequiredImplementation$3;

function requireImplementation$3 () {
	if (hasRequiredImplementation$3) return implementation$3;
	hasRequiredImplementation$3 = 1;

	var RequireObjectCoercible = /*@__PURE__*/ requireRequireObjectCoercible();
	var ToString = /*@__PURE__*/ requireToString();
	var callBound = /*@__PURE__*/ requireCallBound();
	var $replace = callBound('String.prototype.replace');

	var mvsIsWS = (/^\s$/).test('\u180E');
	/* eslint-disable no-control-regex */
	var leftWhitespace = mvsIsWS
		? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
		: /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
	var rightWhitespace = mvsIsWS
		? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/
		: /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
	/* eslint-enable no-control-regex */

	implementation$3 = function trim() {
		var S = ToString(RequireObjectCoercible(this));
		return $replace($replace(S, leftWhitespace, ''), rightWhitespace, '');
	};
	return implementation$3;
}

var polyfill$3;
var hasRequiredPolyfill$3;

function requirePolyfill$3 () {
	if (hasRequiredPolyfill$3) return polyfill$3;
	hasRequiredPolyfill$3 = 1;

	var implementation = requireImplementation$3();

	var zeroWidthSpace = '\u200b';
	var mongolianVowelSeparator = '\u180E';

	polyfill$3 = function getPolyfill() {
		if (
			String.prototype.trim
			&& zeroWidthSpace.trim() === zeroWidthSpace
			&& mongolianVowelSeparator.trim() === mongolianVowelSeparator
			&& ('_' + mongolianVowelSeparator).trim() === ('_' + mongolianVowelSeparator)
			&& (mongolianVowelSeparator + '_').trim() === (mongolianVowelSeparator + '_')
		) {
			return String.prototype.trim;
		}
		return implementation;
	};
	return polyfill$3;
}

var shim$2;
var hasRequiredShim$2;

function requireShim$2 () {
	if (hasRequiredShim$2) return shim$2;
	hasRequiredShim$2 = 1;

	var supportsDescriptors = /*@__PURE__*/ requireHasPropertyDescriptors()();
	var defineDataProperty = /*@__PURE__*/ requireDefineDataProperty();

	var getPolyfill = requirePolyfill$3();

	shim$2 = function shimStringTrim() {
		var polyfill = getPolyfill();

		if (String.prototype.trim !== polyfill) {
			if (supportsDescriptors) {
				defineDataProperty(String.prototype, 'trim', polyfill, true);
			} else {
				defineDataProperty(String.prototype, 'trim', polyfill);
			}
		}

		return polyfill;
	};
	return shim$2;
}

var string_prototype_trim;
var hasRequiredString_prototype_trim;

function requireString_prototype_trim () {
	if (hasRequiredString_prototype_trim) return string_prototype_trim;
	hasRequiredString_prototype_trim = 1;

	var callBind = requireCallBind();
	var define = requireDefineProperties();
	var RequireObjectCoercible = /*@__PURE__*/ requireRequireObjectCoercible();

	var implementation = requireImplementation$3();
	var getPolyfill = requirePolyfill$3();
	var shim = requireShim$2();

	var bound = callBind(getPolyfill());
	var boundMethod = function trim(receiver) {
		RequireObjectCoercible(receiver);
		return bound(receiver);
	};

	define(boundMethod, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});

	string_prototype_trim = boundMethod;
	return string_prototype_trim;
}

var StringToNumber;
var hasRequiredStringToNumber;

function requireStringToNumber () {
	if (hasRequiredStringToNumber) return StringToNumber;
	hasRequiredStringToNumber = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $RegExp = GetIntrinsic('%RegExp%');
	var $TypeError = /*@__PURE__*/ requireType();
	var $parseInteger = GetIntrinsic('%parseInt%');

	var callBound = /*@__PURE__*/ requireCallBound();
	var regexTester = /*@__PURE__*/ requireSafeRegexTest();

	var $strSlice = callBound('String.prototype.slice');
	var isBinary = regexTester(/^0b[01]+$/i);
	var isOctal = regexTester(/^0o[0-7]+$/i);
	var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
	var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
	var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
	var hasNonWS = regexTester(nonWSregex);

	var $trim = requireString_prototype_trim();

	// https://262.ecma-international.org/13.0/#sec-stringtonumber

	StringToNumber = function StringToNumber(argument) {
		if (typeof argument !== 'string') {
			throw new $TypeError('Assertion failed: `argument` is not a String');
		}
		if (isBinary(argument)) {
			return +$parseInteger($strSlice(argument, 2), 2);
		}
		if (isOctal(argument)) {
			return +$parseInteger($strSlice(argument, 2), 8);
		}
		if (hasNonWS(argument) || isInvalidHexLiteral(argument)) {
			return NaN;
		}
		var trimmed = $trim(argument);
		if (trimmed !== argument) {
			return StringToNumber(trimmed);
		}
		return +argument;
	};
	return StringToNumber;
}

var ToNumber;
var hasRequiredToNumber;

function requireToNumber () {
	if (hasRequiredToNumber) return ToNumber;
	hasRequiredToNumber = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $TypeError = /*@__PURE__*/ requireType();
	var $Number = GetIntrinsic('%Number%');
	var isPrimitive = /*@__PURE__*/ requireIsPrimitive();

	var ToPrimitive = /*@__PURE__*/ requireToPrimitive();
	var StringToNumber = /*@__PURE__*/ requireStringToNumber();

	// https://262.ecma-international.org/13.0/#sec-tonumber

	ToNumber = function ToNumber(argument) {
		var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
		if (typeof value === 'symbol') {
			throw new $TypeError('Cannot convert a Symbol value to a number');
		}
		if (typeof value === 'bigint') {
			throw new $TypeError('Conversion from \'BigInt\' to \'number\' is not allowed.');
		}
		if (typeof value === 'string') {
			return StringToNumber(value);
		}
		return +value;
	};
	return ToNumber;
}

var floor;
var hasRequiredFloor;

function requireFloor () {
	if (hasRequiredFloor) return floor;
	hasRequiredFloor = 1;

	// var modulo = require('./modulo');
	var $floor = /*@__PURE__*/ requireFloor$1();

	// http://262.ecma-international.org/11.0/#eqn-floor

	floor = function floor(x) {
		// return x - modulo(x, 1);
		if (typeof x === 'bigint') {
			return x;
		}
		return $floor(x);
	};
	return floor;
}

var truncate;
var hasRequiredTruncate;

function requireTruncate () {
	if (hasRequiredTruncate) return truncate;
	hasRequiredTruncate = 1;

	var floor = /*@__PURE__*/ requireFloor();

	var $TypeError = /*@__PURE__*/ requireType();

	// https://262.ecma-international.org/14.0/#eqn-truncate

	truncate = function truncate(x) {
		if (typeof x !== 'number' && typeof x !== 'bigint') {
			throw new $TypeError('argument must be a Number or a BigInt');
		}
		var result = x < 0 ? -floor(-x) : floor(x);
		return result === 0 ? 0 : result; // in the spec, these are math values, so we filter out -0 here
	};
	return truncate;
}

var ToInt16;
var hasRequiredToInt16;

function requireToInt16 () {
	if (hasRequiredToInt16) return ToInt16;
	hasRequiredToInt16 = 1;

	var modulo = /*@__PURE__*/ requireModulo();
	var ToNumber = /*@__PURE__*/ requireToNumber();
	var truncate = /*@__PURE__*/ requireTruncate();

	var isFinite = /*@__PURE__*/ require_isFinite();

	// https://262.ecma-international.org/14.0/#sec-toint16

	var two16 = 0x10000; // Math.pow(2, 16);

	ToInt16 = function ToInt16(argument) {
		var number = ToNumber(argument);
		if (!isFinite(number) || number === 0) {
			return 0;
		}
		var int = truncate(number);
		var int16bit = modulo(int, two16);
		return int16bit >= 0x8000 ? int16bit - two16 : int16bit;
	};
	return ToInt16;
}

var ToInt32;
var hasRequiredToInt32;

function requireToInt32 () {
	if (hasRequiredToInt32) return ToInt32;
	hasRequiredToInt32 = 1;

	var modulo = /*@__PURE__*/ requireModulo();
	var ToNumber = /*@__PURE__*/ requireToNumber();
	var truncate = /*@__PURE__*/ requireTruncate();

	var isFinite = /*@__PURE__*/ require_isFinite();

	// https://262.ecma-international.org/14.0/#sec-toint32

	var two31 = 0x80000000; // Math.pow(2, 31);
	var two32 = 0x100000000; // Math.pow(2, 32);

	ToInt32 = function ToInt32(argument) {
		var number = ToNumber(argument);
		if (!isFinite(number) || number === 0) {
			return 0;
		}
		var int = truncate(number);
		var int32bit = modulo(int, two32);
		var result = int32bit >= two31 ? int32bit - two32 : int32bit;
		return result === 0 ? 0 : result; // in the spec, these are math values, so we filter out -0 here
	};
	return ToInt32;
}

var ToInt8;
var hasRequiredToInt8;

function requireToInt8 () {
	if (hasRequiredToInt8) return ToInt8;
	hasRequiredToInt8 = 1;

	var modulo = /*@__PURE__*/ requireModulo();
	var ToNumber = /*@__PURE__*/ requireToNumber();
	var truncate = /*@__PURE__*/ requireTruncate();

	var isFinite = /*@__PURE__*/ require_isFinite();

	// https://262.ecma-international.org/14.0/#sec-toint8

	ToInt8 = function ToInt8(argument) {
		var number = ToNumber(argument);
		if (!isFinite(number) || number === 0) {
			return 0;
		}
		var int = truncate(number);
		var int8bit = modulo(int, 0x100);
		return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
	};
	return ToInt8;
}

var ToUint16;
var hasRequiredToUint16;

function requireToUint16 () {
	if (hasRequiredToUint16) return ToUint16;
	hasRequiredToUint16 = 1;

	var modulo = /*@__PURE__*/ requireModulo();
	var ToNumber = /*@__PURE__*/ requireToNumber();
	var truncate = /*@__PURE__*/ requireTruncate();

	var isFinite = /*@__PURE__*/ require_isFinite();

	// https://262.ecma-international.org/14.0/#sec-touint16

	var two16 = 0x10000; // Math.pow(2, 16)

	ToUint16 = function ToUint16(argument) {
		var number = ToNumber(argument);
		if (!isFinite(number) || number === 0) {
			return 0;
		}
		var int = truncate(number);
		var int16bit = modulo(int, two16);
		return int16bit === 0 ? 0 : int16bit; // in the spec, these are math values, so we filter out -0 here
	};
	return ToUint16;
}

var ToUint32;
var hasRequiredToUint32;

function requireToUint32 () {
	if (hasRequiredToUint32) return ToUint32;
	hasRequiredToUint32 = 1;

	var modulo = /*@__PURE__*/ requireModulo();
	var ToNumber = /*@__PURE__*/ requireToNumber();
	var truncate = /*@__PURE__*/ requireTruncate();

	var isFinite = /*@__PURE__*/ require_isFinite();

	// https://262.ecma-international.org/14.0/#sec-touint32

	var two32 = 0x100000000; // Math.pow(2, 32);

	ToUint32 = function ToUint32(argument) {
		var number = ToNumber(argument);
		if (!isFinite(number) || number === 0) {
			return 0;
		}
		var int = truncate(number);
		var int32bit = modulo(int, two32);
		return int32bit === 0 ? 0 : int32bit; // in the spec, these are math values, so we filter out -0 here
	};
	return ToUint32;
}

var ToUint8;
var hasRequiredToUint8;

function requireToUint8 () {
	if (hasRequiredToUint8) return ToUint8;
	hasRequiredToUint8 = 1;

	var isFinite = /*@__PURE__*/ require_isFinite();

	var modulo = /*@__PURE__*/ requireModulo();
	var ToNumber = /*@__PURE__*/ requireToNumber();
	var truncate = /*@__PURE__*/ requireTruncate();

	// https://262.ecma-international.org/14.0/#sec-touint8

	ToUint8 = function ToUint8(argument) {
		var number = ToNumber(argument);
		if (!isFinite(number) || number === 0) {
			return 0;
		}
		var int = truncate(number);
		var int8bit = modulo(int, 0x100);
		return int8bit;
	};
	return ToUint8;
}

var clamp;
var hasRequiredClamp;

function requireClamp () {
	if (hasRequiredClamp) return clamp;
	hasRequiredClamp = 1;

	var $TypeError = /*@__PURE__*/ requireType();
	var max = /*@__PURE__*/ requireMax();
	var min = /*@__PURE__*/ requireMin();

	// https://262.ecma-international.org/12.0/#clamping

	clamp = function clamp(x, lower, upper) {
		if (typeof x !== 'number' || typeof lower !== 'number' || typeof upper !== 'number' || !(lower <= upper)) {
			throw new $TypeError('Assertion failed: all three arguments must be MVs, and `lower` must be `<= upper`');
		}
		return min(max(lower, x), upper);
	};
	return clamp;
}

var ToUint8Clamp;
var hasRequiredToUint8Clamp;

function requireToUint8Clamp () {
	if (hasRequiredToUint8Clamp) return ToUint8Clamp;
	hasRequiredToUint8Clamp = 1;

	var clamp = /*@__PURE__*/ requireClamp();

	var ToNumber = /*@__PURE__*/ requireToNumber();
	var floor = /*@__PURE__*/ requireFloor();

	var $isNaN = /*@__PURE__*/ require_isNaN();

	// https://262.ecma-international.org/15.0/#sec-touint8clamp

	ToUint8Clamp = function ToUint8Clamp(argument) {
		var number = ToNumber(argument); // step 1

		if ($isNaN(number)) { return 0; } // step 2

		var clamped = clamp(number, 0, 255); // step 4

		var f = floor(clamped); // step 5

		if (clamped < (f + 0.5)) { return f; } // step 6

		if (clamped > (f + 0.5)) { return f + 1; } // step 7

		return f % 2 === 0 ? f : f + 1; // step 8
	};
	return ToUint8Clamp;
}

var isNegativeZero;
var hasRequiredIsNegativeZero;

function requireIsNegativeZero () {
	if (hasRequiredIsNegativeZero) return isNegativeZero;
	hasRequiredIsNegativeZero = 1;

	/** @type {import('./isNegativeZero')} */
	isNegativeZero = function isNegativeZero(x) {
		return x === 0 && 1 / x === 1 / -0;
	};
	return isNegativeZero;
}

var valueToFloat32Bytes;
var hasRequiredValueToFloat32Bytes;

function requireValueToFloat32Bytes () {
	if (hasRequiredValueToFloat32Bytes) return valueToFloat32Bytes;
	hasRequiredValueToFloat32Bytes = 1;

	var $abs = /*@__PURE__*/ requireAbs();
	var $floor = /*@__PURE__*/ requireFloor$1();
	var $pow = /*@__PURE__*/ requirePow();

	var isFinite = /*@__PURE__*/ require_isFinite();
	var isNaN = /*@__PURE__*/ require_isNaN();
	var isNegativeZero = /*@__PURE__*/ requireIsNegativeZero();

	var maxFiniteFloat32 = 3.4028234663852886e+38; // roughly 2 ** 128 - 1

	valueToFloat32Bytes = function valueToFloat32Bytes(value, isLittleEndian) {
		if (isNaN(value)) {
			return isLittleEndian ? [0, 0, 192, 127] : [127, 192, 0, 0]; // hardcoded
		}

		var leastSig;

		if (value === 0) {
			leastSig = isNegativeZero(value) ? 0x80 : 0;
			return isLittleEndian ? [0, 0, 0, leastSig] : [leastSig, 0, 0, 0];
		}

		if ($abs(value) > maxFiniteFloat32 || !isFinite(value)) {
			leastSig = value < 0 ? 255 : 127;
			return isLittleEndian ? [0, 0, 128, leastSig] : [leastSig, 128, 0, 0];
		}

		var sign = value < 0 ? 1 : 0;
		value = $abs(value); // eslint-disable-line no-param-reassign

		var exponent = 0;
		while (value >= 2) {
			exponent += 1;
			value /= 2; // eslint-disable-line no-param-reassign
		}

		while (value < 1) {
			exponent -= 1;
			value *= 2; // eslint-disable-line no-param-reassign
		}

		var mantissa = value - 1;
		mantissa *= $pow(2, 23) + 0.5;
		mantissa = $floor(mantissa);

		exponent += 127;
		exponent <<= 23;

		var result = (sign << 31)
	        | exponent
	        | mantissa;

		var byte0 = result & 255;
		result >>= 8;
		var byte1 = result & 255;
		result >>= 8;
		var byte2 = result & 255;
		result >>= 8;
		var byte3 = result & 255;

		if (isLittleEndian) {
			return [byte0, byte1, byte2, byte3];
		}
		return [byte3, byte2, byte1, byte0];
	};
	return valueToFloat32Bytes;
}

var fractionToBinaryString;
var hasRequiredFractionToBinaryString;

function requireFractionToBinaryString () {
	if (hasRequiredFractionToBinaryString) return fractionToBinaryString;
	hasRequiredFractionToBinaryString = 1;

	var MAX_ITER = 1075; // 1023+52 (subnormals) => BIAS+NUM_SIGNFICAND_BITS-1
	var maxBits = 54; // only 53 bits for fraction

	fractionToBinaryString = function fractionToBitString(x) {
		var str = '';
		if (x === 0) {
			return str;
		}
		var j = MAX_ITER;

		var y;
		// Each time we multiply by 2 and find a ones digit, add a '1'; otherwise, add a '0'..
		for (var i = 0; i < MAX_ITER; i += 1) {
			y = x * 2;
			if (y >= 1) {
				x = y - 1; // eslint-disable-line no-param-reassign
				str += '1';
				if (j === MAX_ITER) {
					j = i; // first 1
				}
			} else {
				x = y; // eslint-disable-line no-param-reassign
				str += '0';
			}
			// Stop when we have no more decimals to process or in the event we found a fraction which cannot be represented in a finite number of bits...
			if (y === 1 || i - j > maxBits) {
				return str;
			}
		}
		return str;
	};
	return fractionToBinaryString;
}

var intToBinaryString;
var hasRequiredIntToBinaryString;

function requireIntToBinaryString () {
	if (hasRequiredIntToBinaryString) return intToBinaryString;
	hasRequiredIntToBinaryString = 1;

	var $floor = /*@__PURE__*/ requireFloor$1();

	// https://runestone.academy/ns/books/published/pythonds/BasicDS/ConvertingDecimalNumberstoBinaryNumbers.html#:~:text=The%20Divide%20by%202%20algorithm,have%20a%20remainder%20of%200

	intToBinaryString = function intToBinaryString(x) {
		var str = '';
		var y;

		while (x > 0) {
			y = x / 2;
			x = $floor(y); // eslint-disable-line no-param-reassign
			if (y === x) {
				str = '0' + str;
			} else {
				str = '1' + str;
			}
		}
		return str;
	};
	return intToBinaryString;
}

var valueToFloat64Bytes;
var hasRequiredValueToFloat64Bytes;

function requireValueToFloat64Bytes () {
	if (hasRequiredValueToFloat64Bytes) return valueToFloat64Bytes;
	hasRequiredValueToFloat64Bytes = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $parseInt = GetIntrinsic('%parseInt%');
	var $abs = /*@__PURE__*/ requireAbs();
	var $floor = /*@__PURE__*/ requireFloor$1();
	var isNegativeZero = /*@__PURE__*/ requireIsNegativeZero();

	var callBound = /*@__PURE__*/ requireCallBound();

	var $strIndexOf = callBound('String.prototype.indexOf');
	var $strSlice = callBound('String.prototype.slice');

	var fractionToBitString = /*@__PURE__*/ requireFractionToBinaryString();
	var intToBinString = /*@__PURE__*/ requireIntToBinaryString();

	var float64bias = 1023;

	var elevenOnes = '11111111111';
	var elevenZeroes = '00000000000';
	var fiftyOneZeroes = elevenZeroes + elevenZeroes + elevenZeroes + elevenZeroes + '0000000';

	// IEEE 754-1985
	valueToFloat64Bytes = function valueToFloat64Bytes(value, isLittleEndian) {
		var signBit = value < 0 || isNegativeZero(value) ? '1' : '0';
		var exponentBits;
		var significandBits;

		if (isNaN(value)) {
			exponentBits = elevenOnes;
			significandBits = '1' + fiftyOneZeroes;
		} else if (!isFinite(value)) {
			exponentBits = elevenOnes;
			significandBits = '0' + fiftyOneZeroes;
		} else if (value === 0) {
			exponentBits = elevenZeroes;
			significandBits = '0' + fiftyOneZeroes;
		} else {
			value = $abs(value); // eslint-disable-line no-param-reassign

			// Isolate the integer part (digits before the decimal):
			var integerPart = $floor(value);

			var intBinString = intToBinString(integerPart); // bit string for integer part
			var fracBinString = fractionToBitString(value - integerPart); // bit string for fractional part

			var numberOfBits;
			// find exponent needed to normalize integer+fractional parts
			if (intBinString) {
				exponentBits = intBinString.length - 1; // move the decimal to the left
			} else {
				var first1 = $strIndexOf(fracBinString, '1');
				if (first1 > -1) {
					numberOfBits = first1 + 1;
				}
				exponentBits = -numberOfBits; // move the decimal to the right
			}

			significandBits = intBinString + fracBinString;
			if (exponentBits < 0) {
				// subnormals
				if (exponentBits <= -1023) {
					numberOfBits = float64bias - 1; // limit number of removed bits
				}
				significandBits = $strSlice(significandBits, numberOfBits); // remove all leading 0s and the first 1 for normal values; for subnormals, remove up to `float64bias - 1` leading bits
			} else {
				significandBits = $strSlice(significandBits, 1); // remove the leading '1' (implicit/hidden bit)
			}
			exponentBits = $strSlice(elevenZeroes + intToBinString(exponentBits + float64bias), -11); // Convert the exponent to a bit string

			significandBits = $strSlice(significandBits + fiftyOneZeroes + '0', 0, 52); // fill in any trailing zeros and ensure we have only 52 fraction bits
		}

		var bits = signBit + exponentBits + significandBits;
		var rawBytes = [];
		for (var i = 0; i < 8; i++) {
			var targetIndex = isLittleEndian ? 8 - i - 1 : i;
			rawBytes[targetIndex] = $parseInt($strSlice(bits, i * 8, (i + 1) * 8), 2);
		}

		return rawBytes;
	};
	return valueToFloat64Bytes;
}

var integerToNBytes;
var hasRequiredIntegerToNBytes;

function requireIntegerToNBytes () {
	if (hasRequiredIntegerToNBytes) return integerToNBytes;
	hasRequiredIntegerToNBytes = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $Number = GetIntrinsic('%Number%');
	var $BigInt = GetIntrinsic('%BigInt%', true);

	integerToNBytes = function integerToNBytes(intValue, n, isLittleEndian) {
		var Z = typeof intValue === 'bigint' ? $BigInt : $Number;
		/*
		if (intValue >= 0) { // step 3.d
			// Let rawBytes be a List containing the n-byte binary encoding of intValue. If isLittleEndian is false, the bytes are ordered in big endian order. Otherwise, the bytes are ordered in little endian order.
		} else { // step 3.e
			// Let rawBytes be a List containing the n-byte binary 2's complement encoding of intValue. If isLittleEndian is false, the bytes are ordered in big endian order. Otherwise, the bytes are ordered in little endian order.
		}
	    */
		if (intValue < 0) {
			intValue >>>= 0; // eslint-disable-line no-param-reassign
		}

		var rawBytes = [];
		for (var i = 0; i < n; i++) {
			rawBytes[isLittleEndian ? i : n - 1 - i] = $Number(intValue & Z(0xFF));
			intValue >>= Z(8); // eslint-disable-line no-param-reassign
		}

		return rawBytes; // step 4
	};
	return integerToNBytes;
}

var NumericToRawBytes;
var hasRequiredNumericToRawBytes;

function requireNumericToRawBytes () {
	if (hasRequiredNumericToRawBytes) return NumericToRawBytes;
	hasRequiredNumericToRawBytes = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var hasOwnProperty = /*@__PURE__*/ requireHasOwnProperty();
	var ToBigInt64 = /*@__PURE__*/ requireToBigInt64();
	var ToBigUint64 = /*@__PURE__*/ requireToBigUint64();
	var ToInt16 = /*@__PURE__*/ requireToInt16();
	var ToInt32 = /*@__PURE__*/ requireToInt32();
	var ToInt8 = /*@__PURE__*/ requireToInt8();
	var ToUint16 = /*@__PURE__*/ requireToUint16();
	var ToUint32 = /*@__PURE__*/ requireToUint32();
	var ToUint8 = /*@__PURE__*/ requireToUint8();
	var ToUint8Clamp = /*@__PURE__*/ requireToUint8Clamp();

	var valueToFloat32Bytes = /*@__PURE__*/ requireValueToFloat32Bytes();
	var valueToFloat64Bytes = /*@__PURE__*/ requireValueToFloat64Bytes();
	var integerToNBytes = /*@__PURE__*/ requireIntegerToNBytes();

	var keys = requireObjectKeys();

	// https://262.ecma-international.org/15.0/#table-the-typedarray-constructors
	var TypeToSizes = {
		__proto__: null,
		INT8: 1,
		UINT8: 1,
		UINT8C: 1,
		INT16: 2,
		UINT16: 2,
		INT32: 4,
		UINT32: 4,
		BIGINT64: 8,
		BIGUINT64: 8,
		FLOAT32: 4,
		FLOAT64: 8
	};

	var TypeToAO = {
		__proto__: null,
		INT8: ToInt8,
		UINT8: ToUint8,
		UINT8C: ToUint8Clamp,
		INT16: ToInt16,
		UINT16: ToUint16,
		INT32: ToInt32,
		UINT32: ToUint32,
		BIGINT64: ToBigInt64,
		BIGUINT64: ToBigUint64
	};

	// https://262.ecma-international.org/15.0/#sec-numerictorawbytes

	NumericToRawBytes = function NumericToRawBytes(type, value, isLittleEndian) {
		if (typeof type !== 'string' || !hasOwnProperty(TypeToSizes, type)) {
			throw new $TypeError('Assertion failed: `type` must be a TypedArray element type: ' + keys(TypeToSizes));
		}
		if (typeof value !== 'number' && typeof value !== 'bigint') {
			throw new $TypeError('Assertion failed: `value` must be a Number or a BigInt');
		}
		if (typeof isLittleEndian !== 'boolean') {
			throw new $TypeError('Assertion failed: `isLittleEndian` must be a Boolean');
		}

		if (type === 'FLOAT32') { // step 1
			return valueToFloat32Bytes(value, isLittleEndian);
		} else if (type === 'FLOAT64') { // step 2
			return valueToFloat64Bytes(value, isLittleEndian);
		} // step 3

		var n = TypeToSizes[type]; // step 3.a

		var convOp = TypeToAO[type]; // step 3.b

		var intValue = convOp(value); // step 3.c

		return integerToNBytes(intValue, n, isLittleEndian); // step 3.d, 3.e, 4
	};
	return NumericToRawBytes;
}

var forEach;
var hasRequiredForEach;

function requireForEach () {
	if (hasRequiredForEach) return forEach;
	hasRequiredForEach = 1;

	forEach = function forEach(array, callback) {
		for (var i = 0; i < array.length; i += 1) {
			callback(array[i], i, array); // eslint-disable-line callback-return
		}
	};
	return forEach;
}

var SetValueInBuffer;
var hasRequiredSetValueInBuffer;

function requireSetValueInBuffer () {
	if (hasRequiredSetValueInBuffer) return SetValueInBuffer;
	hasRequiredSetValueInBuffer = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $SyntaxError = /*@__PURE__*/ requireSyntax();
	var $TypeError = /*@__PURE__*/ requireType();
	var isInteger = /*@__PURE__*/ requireIsInteger$1();
	var $Uint8Array = GetIntrinsic('%Uint8Array%', true);

	var IsBigIntElementType = /*@__PURE__*/ requireIsBigIntElementType();
	var IsDetachedBuffer = /*@__PURE__*/ requireIsDetachedBuffer();
	var NumericToRawBytes = /*@__PURE__*/ requireNumericToRawBytes();

	var isArrayBuffer = /*@__PURE__*/ requireIsArrayBuffer();
	var isSharedArrayBuffer = /*@__PURE__*/ requireIsSharedArrayBuffer();
	var hasOwn = /*@__PURE__*/ requireHasown();

	var tableTAO = /*@__PURE__*/ requireTypedArrayObjects();

	var defaultEndianness = /*@__PURE__*/ requireDefaultEndianness();
	var forEach = /*@__PURE__*/ requireForEach();

	// https://262.ecma-international.org/15.0/#sec-setvalueinbuffer

	/* eslint max-params: 0 */

	SetValueInBuffer = function SetValueInBuffer(arrayBuffer, byteIndex, type, value, isTypedArray, order) {
		var isSAB = isSharedArrayBuffer(arrayBuffer);
		if (!isArrayBuffer(arrayBuffer) && !isSAB) {
			throw new $TypeError('Assertion failed: `arrayBuffer` must be an ArrayBuffer or a SharedArrayBuffer');
		}

		if (!isInteger(byteIndex) || byteIndex < 0) {
			throw new $TypeError('Assertion failed: `byteIndex` must be a non-negative integer');
		}

		if (typeof type !== 'string' || !hasOwn(tableTAO.size, '$' + type)) {
			throw new $TypeError('Assertion failed: `type` must be a Typed Array Element Type');
		}

		if (typeof value !== 'number' && typeof value !== 'bigint') {
			throw new $TypeError('Assertion failed: `value` must be a Number or a BigInt');
		}

		if (typeof isTypedArray !== 'boolean') {
			throw new $TypeError('Assertion failed: `isTypedArray` must be a boolean');
		}
		if (order !== 'SEQ-CST' && order !== 'UNORDERED' && order !== 'INIT') {
			throw new $TypeError('Assertion failed: `order` must be `"SEQ-CST"`, `"UNORDERED"`, or `"INIT"`');
		}

		if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
			throw new $TypeError('Assertion failed: `isLittleEndian` must be a boolean, if present');
		}

		if (IsDetachedBuffer(arrayBuffer)) {
			throw new $TypeError('Assertion failed: ArrayBuffer is detached'); // step 1
		}

		// 2. Assert: There are sufficient bytes in arrayBuffer starting at byteIndex to represent a value of type.

		if (IsBigIntElementType(type) ? typeof value !== 'bigint' : typeof value !== 'number') { // step 3
			throw new $TypeError('Assertion failed: `value` must be a BigInt if type is ~BIGINT64~ or ~BIGUINT64~, otherwise a Number');
		}

		// 4. Let block be arrayBuffer’s [[ArrayBufferData]] internal slot.

		var elementSize = tableTAO.size['$' + type]; // step 5

		// 6. If isLittleEndian is not present, set isLittleEndian to either true or false. The choice is implementation dependent and should be the alternative that is most efficient for the implementation. An implementation must use the same value each time this step is executed and the same value must be used for the corresponding step in the GetValueFromBuffer abstract operation.
		var isLittleEndian = arguments.length > 6 ? arguments[6] : defaultEndianness === 'little'; // step 6

		var rawBytes = NumericToRawBytes(type, value, isLittleEndian); // step 7

		if (isSAB) { // step 8
			/*
				Let execution be the [[CandidateExecution]] field of the surrounding agent's Agent Record.
				Let eventList be the [[EventList]] field of the element in execution.[[EventsRecords]] whose [[AgentSignifier]] is AgentSignifier().
				If isTypedArray is true and IsNoTearConfiguration(type, order) is true, let noTear be true; otherwise let noTear be false.
				Append WriteSharedMemory { [[Order]]: order, [[NoTear]]: noTear, [[Block]]: block, [[ByteIndex]]: byteIndex, [[ElementSize]]: elementSize, [[Payload]]: rawBytes } to eventList.
			*/
			throw new $SyntaxError('SharedArrayBuffer is not supported by this implementation');
		} else {
			// 9. Store the individual bytes of rawBytes into block, in order, starting at block[byteIndex].
			var arr = new $Uint8Array(arrayBuffer, byteIndex, elementSize);
			forEach(rawBytes, function (rawByte, i) {
				arr[i] = rawByte;
			});
		}

		// 10. Return NormalCompletion(undefined).
	};
	return SetValueInBuffer;
}

var ToIntegerOrInfinity;
var hasRequiredToIntegerOrInfinity;

function requireToIntegerOrInfinity () {
	if (hasRequiredToIntegerOrInfinity) return ToIntegerOrInfinity;
	hasRequiredToIntegerOrInfinity = 1;

	var ToNumber = /*@__PURE__*/ requireToNumber();
	var truncate = /*@__PURE__*/ requireTruncate();

	var $isNaN = /*@__PURE__*/ require_isNaN();
	var $isFinite = /*@__PURE__*/ require_isFinite();

	// https://262.ecma-international.org/14.0/#sec-tointegerorinfinity

	ToIntegerOrInfinity = function ToIntegerOrInfinity(value) {
		var number = ToNumber(value);
		if ($isNaN(number) || number === 0) { return 0; }
		if (!$isFinite(number)) { return number; }
		return truncate(number);
	};
	return ToIntegerOrInfinity;
}

var TypedArrayElementSize;
var hasRequiredTypedArrayElementSize;

function requireTypedArrayElementSize () {
	if (hasRequiredTypedArrayElementSize) return TypedArrayElementSize;
	hasRequiredTypedArrayElementSize = 1;

	var $SyntaxError = /*@__PURE__*/ requireSyntax();
	var $TypeError = /*@__PURE__*/ requireType();
	var isInteger = /*@__PURE__*/ requireIsInteger$1();
	var whichTypedArray = /*@__PURE__*/ requireWhichTypedArray();

	// https://262.ecma-international.org/13.0/#sec-typedarrayelementsize

	var tableTAO = /*@__PURE__*/ requireTypedArrayObjects();

	TypedArrayElementSize = function TypedArrayElementSize(O) {
		var type = whichTypedArray(O);
		if (!type) {
			throw new $TypeError('Assertion failed: `O` must be a TypedArray');
		}
		var size = tableTAO.size['$' + tableTAO.name['$' + type]];
		if (!isInteger(size) || size < 0) {
			throw new $SyntaxError('Assertion failed: Unknown TypedArray type `' + type + '`');
		}

		return size;
	};
	return TypedArrayElementSize;
}

var TypedArrayElementType;
var hasRequiredTypedArrayElementType;

function requireTypedArrayElementType () {
	if (hasRequiredTypedArrayElementType) return TypedArrayElementType;
	hasRequiredTypedArrayElementType = 1;

	var $SyntaxError = /*@__PURE__*/ requireSyntax();
	var $TypeError = /*@__PURE__*/ requireType();

	var whichTypedArray = /*@__PURE__*/ requireWhichTypedArray();

	// https://262.ecma-international.org/13.0/#sec-typedarrayelementtype

	var tableTAO = /*@__PURE__*/ requireTypedArrayObjects();

	TypedArrayElementType = function TypedArrayElementType(O) {
		var type = whichTypedArray(O);
		if (!type) {
			throw new $TypeError('Assertion failed: `O` must be a TypedArray');
		}
		var result = tableTAO.name['$' + type];
		if (typeof result !== 'string') {
			throw new $SyntaxError('Assertion failed: Unknown TypedArray type `' + type + '`');
		}

		return result;
	};
	return TypedArrayElementType;
}

var IsConstructor = {exports: {}};

var GetIntrinsic;
var hasRequiredGetIntrinsic;

function requireGetIntrinsic () {
	if (hasRequiredGetIntrinsic) return GetIntrinsic;
	hasRequiredGetIntrinsic = 1;

	// TODO: remove, semver-major

	GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();
	return GetIntrinsic;
}

var propertyDescriptor;
var hasRequiredPropertyDescriptor;

function requirePropertyDescriptor () {
	if (hasRequiredPropertyDescriptor) return propertyDescriptor;
	hasRequiredPropertyDescriptor = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var hasOwn = /*@__PURE__*/ requireHasown();

	var allowed = {
		__proto__: null,
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Get]]': true,
		'[[Set]]': true,
		'[[Value]]': true,
		'[[Writable]]': true
	};

	// https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type

	propertyDescriptor = function isPropertyDescriptor(Desc) {
		if (!Desc || typeof Desc !== 'object') {
			return false;
		}

		for (var key in Desc) { // eslint-disable-line
			if (hasOwn(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = hasOwn(Desc, '[[Value]]') || hasOwn(Desc, '[[Writable]]');
		var IsAccessor = hasOwn(Desc, '[[Get]]') || hasOwn(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	};
	return propertyDescriptor;
}

var DefineOwnProperty;
var hasRequiredDefineOwnProperty;

function requireDefineOwnProperty () {
	if (hasRequiredDefineOwnProperty) return DefineOwnProperty;
	hasRequiredDefineOwnProperty = 1;

	var hasPropertyDescriptors = /*@__PURE__*/ requireHasPropertyDescriptors();

	var $defineProperty = /*@__PURE__*/ requireEsDefineProperty();

	var hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();

	// eslint-disable-next-line global-require
	var isArray = hasArrayLengthDefineBug && /*@__PURE__*/ requireIsArray$1();

	var callBound = /*@__PURE__*/ requireCallBound();

	var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

	// eslint-disable-next-line max-params
	DefineOwnProperty = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
		if (!$defineProperty) {
			if (!IsDataDescriptor(desc)) {
				// ES3 does not support getters/setters
				return false;
			}
			if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
				return false;
			}

			// fallback for ES3
			if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
				// a non-enumerable existing property
				return false;
			}

			// property does not exist at all, or exists but is enumerable
			var V = desc['[[Value]]'];
			// eslint-disable-next-line no-param-reassign
			O[P] = V; // will use [[Define]]
			return SameValue(O[P], V);
		}
		if (
			hasArrayLengthDefineBug
			&& P === 'length'
			&& '[[Value]]' in desc
			&& isArray(O)
			&& O.length !== desc['[[Value]]']
		) {
			// eslint-disable-next-line no-param-reassign
			O.length = desc['[[Value]]'];
			return O.length === desc['[[Value]]'];
		}

		$defineProperty(O, P, FromPropertyDescriptor(desc));
		return true;
	};
	return DefineOwnProperty;
}

var fromPropertyDescriptor;
var hasRequiredFromPropertyDescriptor$1;

function requireFromPropertyDescriptor$1 () {
	if (hasRequiredFromPropertyDescriptor$1) return fromPropertyDescriptor;
	hasRequiredFromPropertyDescriptor$1 = 1;

	fromPropertyDescriptor = function fromPropertyDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return Desc;
		}
		var obj = {};
		if ('[[Value]]' in Desc) {
			obj.value = Desc['[[Value]]'];
		}
		if ('[[Writable]]' in Desc) {
			obj.writable = !!Desc['[[Writable]]'];
		}
		if ('[[Get]]' in Desc) {
			obj.get = Desc['[[Get]]'];
		}
		if ('[[Set]]' in Desc) {
			obj.set = Desc['[[Set]]'];
		}
		if ('[[Enumerable]]' in Desc) {
			obj.enumerable = !!Desc['[[Enumerable]]'];
		}
		if ('[[Configurable]]' in Desc) {
			obj.configurable = !!Desc['[[Configurable]]'];
		}
		return obj;
	};
	return fromPropertyDescriptor;
}

var FromPropertyDescriptor;
var hasRequiredFromPropertyDescriptor;

function requireFromPropertyDescriptor () {
	if (hasRequiredFromPropertyDescriptor) return FromPropertyDescriptor;
	hasRequiredFromPropertyDescriptor = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var isPropertyDescriptor = /*@__PURE__*/ requirePropertyDescriptor();
	var fromPropertyDescriptor = /*@__PURE__*/ requireFromPropertyDescriptor$1();

	// https://262.ecma-international.org/6.0/#sec-frompropertydescriptor

	FromPropertyDescriptor = function FromPropertyDescriptor(Desc) {
		if (typeof Desc !== 'undefined' && !isPropertyDescriptor(Desc)) {
			throw new $TypeError('Assertion failed: `Desc` must be a Property Descriptor');
		}

		return fromPropertyDescriptor(Desc);
	};
	return FromPropertyDescriptor;
}

var IsDataDescriptor;
var hasRequiredIsDataDescriptor;

function requireIsDataDescriptor () {
	if (hasRequiredIsDataDescriptor) return IsDataDescriptor;
	hasRequiredIsDataDescriptor = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var hasOwn = /*@__PURE__*/ requireHasown();

	var isPropertyDescriptor = /*@__PURE__*/ requirePropertyDescriptor();

	// https://262.ecma-international.org/5.1/#sec-8.10.2

	IsDataDescriptor = function IsDataDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		if (!isPropertyDescriptor(Desc)) {
			throw new $TypeError('Assertion failed: `Desc` must be a Property Descriptor');
		}

		if (!hasOwn(Desc, '[[Value]]') && !hasOwn(Desc, '[[Writable]]')) {
			return false;
		}

		return true;
	};
	return IsDataDescriptor;
}

var IsCallable;
var hasRequiredIsCallable;

function requireIsCallable () {
	if (hasRequiredIsCallable) return IsCallable;
	hasRequiredIsCallable = 1;

	// http://262.ecma-international.org/5.1/#sec-9.11

	IsCallable = requireIsCallable$1();
	return IsCallable;
}

var ToBoolean;
var hasRequiredToBoolean;

function requireToBoolean () {
	if (hasRequiredToBoolean) return ToBoolean;
	hasRequiredToBoolean = 1;

	// http://262.ecma-international.org/5.1/#sec-9.2

	ToBoolean = function ToBoolean(value) { return !!value; };
	return ToBoolean;
}

var ToPropertyDescriptor;
var hasRequiredToPropertyDescriptor;

function requireToPropertyDescriptor () {
	if (hasRequiredToPropertyDescriptor) return ToPropertyDescriptor;
	hasRequiredToPropertyDescriptor = 1;

	var hasOwn = /*@__PURE__*/ requireHasown();

	var $TypeError = /*@__PURE__*/ requireType();

	var IsCallable = /*@__PURE__*/ requireIsCallable();
	var ToBoolean = /*@__PURE__*/ requireToBoolean();

	var isObject = /*@__PURE__*/ requireIsObject();

	// https://262.ecma-international.org/5.1/#sec-8.10.5

	ToPropertyDescriptor = function ToPropertyDescriptor(Obj) {
		if (!isObject(Obj)) {
			throw new $TypeError('ToPropertyDescriptor requires an object');
		}

		var desc = {};
		if (hasOwn(Obj, 'enumerable')) {
			desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
		}
		if (hasOwn(Obj, 'configurable')) {
			desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
		}
		if (hasOwn(Obj, 'value')) {
			desc['[[Value]]'] = Obj.value;
		}
		if (hasOwn(Obj, 'writable')) {
			desc['[[Writable]]'] = ToBoolean(Obj.writable);
		}
		if (hasOwn(Obj, 'get')) {
			var getter = Obj.get;
			if (typeof getter !== 'undefined' && !IsCallable(getter)) {
				throw new $TypeError('getter must be a function');
			}
			desc['[[Get]]'] = getter;
		}
		if (hasOwn(Obj, 'set')) {
			var setter = Obj.set;
			if (typeof setter !== 'undefined' && !IsCallable(setter)) {
				throw new $TypeError('setter must be a function');
			}
			desc['[[Set]]'] = setter;
		}

		if ((hasOwn(desc, '[[Get]]') || hasOwn(desc, '[[Set]]')) && (hasOwn(desc, '[[Value]]') || hasOwn(desc, '[[Writable]]'))) {
			throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
		}
		return desc;
	};
	return ToPropertyDescriptor;
}

var DefinePropertyOrThrow;
var hasRequiredDefinePropertyOrThrow;

function requireDefinePropertyOrThrow () {
	if (hasRequiredDefinePropertyOrThrow) return DefinePropertyOrThrow;
	hasRequiredDefinePropertyOrThrow = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var isPropertyDescriptor = /*@__PURE__*/ requirePropertyDescriptor();
	var DefineOwnProperty = /*@__PURE__*/ requireDefineOwnProperty();

	var FromPropertyDescriptor = /*@__PURE__*/ requireFromPropertyDescriptor();
	var IsDataDescriptor = /*@__PURE__*/ requireIsDataDescriptor();
	var isPropertyKey = /*@__PURE__*/ requireIsPropertyKey();
	var SameValue = /*@__PURE__*/ requireSameValue();
	var ToPropertyDescriptor = /*@__PURE__*/ requireToPropertyDescriptor();

	var isObject = /*@__PURE__*/ requireIsObject();

	// https://262.ecma-international.org/6.0/#sec-definepropertyorthrow

	DefinePropertyOrThrow = function DefinePropertyOrThrow(O, P, desc) {
		if (!isObject(O)) {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}

		if (!isPropertyKey(P)) {
			throw new $TypeError('Assertion failed: P is not a Property Key');
		}

		var Desc = isPropertyDescriptor(desc) ? desc : ToPropertyDescriptor(desc);
		if (!isPropertyDescriptor(Desc)) {
			throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
		}

		return DefineOwnProperty(
			IsDataDescriptor,
			SameValue,
			FromPropertyDescriptor,
			O,
			P,
			Desc
		);
	};
	return DefinePropertyOrThrow;
}

var hasRequiredIsConstructor;

function requireIsConstructor () {
	if (hasRequiredIsConstructor) return IsConstructor.exports;
	hasRequiredIsConstructor = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic();

	var $construct = GetIntrinsic('%Reflect.construct%', true);

	var DefinePropertyOrThrow = /*@__PURE__*/ requireDefinePropertyOrThrow();
	try {
		DefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });
	} catch (e) {
		// Accessor properties aren't supported
		DefinePropertyOrThrow = null;
	}

	// https://262.ecma-international.org/6.0/#sec-isconstructor

	if (DefinePropertyOrThrow && $construct) {
		var isConstructorMarker = {};
		var badArrayLike = {};
		DefinePropertyOrThrow(badArrayLike, 'length', {
			'[[Get]]': function () {
				throw isConstructorMarker;
			},
			'[[Enumerable]]': true
		});

		IsConstructor.exports = function IsConstructor(argument) {
			try {
				// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:
				$construct(argument, badArrayLike);
			} catch (err) {
				return err === isConstructorMarker;
			}
		};
	} else {
		IsConstructor.exports = function IsConstructor(argument) {
			// unfortunately there's no way to truly check this without try/catch `new argument` in old environments
			return typeof argument === 'function' && !!argument.prototype;
		};
	}
	return IsConstructor.exports;
}

var SpeciesConstructor;
var hasRequiredSpeciesConstructor;

function requireSpeciesConstructor () {
	if (hasRequiredSpeciesConstructor) return SpeciesConstructor;
	hasRequiredSpeciesConstructor = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var $species = GetIntrinsic('%Symbol.species%', true);
	var $TypeError = /*@__PURE__*/ requireType();

	var IsConstructor = /*@__PURE__*/ requireIsConstructor();

	var isObject = /*@__PURE__*/ requireIsObject();

	// https://262.ecma-international.org/6.0/#sec-speciesconstructor

	SpeciesConstructor = function SpeciesConstructor(O, defaultConstructor) {
		if (!isObject(O)) {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		var C = O.constructor;
		if (typeof C === 'undefined') {
			return defaultConstructor;
		}
		if (!isObject(C)) {
			throw new $TypeError('O.constructor is not an Object');
		}
		var S = $species ? C[$species] : void 0;
		if (S == null) {
			return defaultConstructor;
		}
		if (IsConstructor(S)) {
			return S;
		}
		throw new $TypeError('no constructor found');
	};
	return SpeciesConstructor;
}

var isInteger;
var hasRequiredIsInteger;

function requireIsInteger () {
	if (hasRequiredIsInteger) return isInteger;
	hasRequiredIsInteger = 1;

	// TODO, semver-major: delete
	isInteger = /*@__PURE__*/ requireIsInteger$1();
	return isInteger;
}

var typedArrayWithBufferWitnessRecord;
var hasRequiredTypedArrayWithBufferWitnessRecord;

function requireTypedArrayWithBufferWitnessRecord () {
	if (hasRequiredTypedArrayWithBufferWitnessRecord) return typedArrayWithBufferWitnessRecord;
	hasRequiredTypedArrayWithBufferWitnessRecord = 1;

	var hasOwn = /*@__PURE__*/ requireHasown();
	var isTypedArray = /*@__PURE__*/ requireIsTypedArray();

	var isInteger = /*@__PURE__*/ requireIsInteger();

	typedArrayWithBufferWitnessRecord = function isTypedArrayWithBufferWitnessRecord(value) {
		return !!value
			&& typeof value === 'object'
			&& hasOwn(value, '[[Object]]')
			&& hasOwn(value, '[[CachedBufferByteLength]]')
			&& (
				(isInteger(value['[[CachedBufferByteLength]]']) && value['[[CachedBufferByteLength]]'] >= 0)
				|| value['[[CachedBufferByteLength]]'] === 'DETACHED'
			)
			&& isTypedArray(value['[[Object]]']);
	};
	return typedArrayWithBufferWitnessRecord;
}

var isString;
var hasRequiredIsString;

function requireIsString () {
	if (hasRequiredIsString) return isString;
	hasRequiredIsString = 1;

	var callBound = /*@__PURE__*/ requireCallBound();

	/** @type {(receiver: ThisParameterType<typeof String.prototype.valueOf>, ...args: Parameters<typeof String.prototype.valueOf>) => ReturnType<typeof String.prototype.valueOf>} */
	var $strValueOf = callBound('String.prototype.valueOf');

	/** @type {import('.')} */
	var tryStringObject = function tryStringObject(value) {
		try {
			$strValueOf(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	/** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */
	var $toString = callBound('Object.prototype.toString');
	var strClass = '[object String]';
	var hasToStringTag = requireShams()();

	/** @type {import('.')} */
	isString = function isString(value) {
		if (typeof value === 'string') {
			return true;
		}
		if (!value || typeof value !== 'object') {
			return false;
		}
		return hasToStringTag ? tryStringObject(value) : $toString(value) === strClass;
	};
	return isString;
}

var isNumberObject;
var hasRequiredIsNumberObject;

function requireIsNumberObject () {
	if (hasRequiredIsNumberObject) return isNumberObject;
	hasRequiredIsNumberObject = 1;

	var callBound = /*@__PURE__*/ requireCallBound();

	var $numToStr = callBound('Number.prototype.toString');

	/** @type {import('.')} */
	var tryNumberObject = function tryNumberObject(value) {
		try {
			$numToStr(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var $toString = callBound('Object.prototype.toString');
	var numClass = '[object Number]';
	var hasToStringTag = requireShams()();

	/** @type {import('.')} */
	isNumberObject = function isNumberObject(value) {
		if (typeof value === 'number') {
			return true;
		}
		if (!value || typeof value !== 'object') {
			return false;
		}
		return hasToStringTag ? tryNumberObject(value) : $toString(value) === numClass;
	};
	return isNumberObject;
}

var isBooleanObject;
var hasRequiredIsBooleanObject;

function requireIsBooleanObject () {
	if (hasRequiredIsBooleanObject) return isBooleanObject;
	hasRequiredIsBooleanObject = 1;

	var callBound = /*@__PURE__*/ requireCallBound();
	var $boolToStr = callBound('Boolean.prototype.toString');
	var $toString = callBound('Object.prototype.toString');

	/** @type {import('.')} */
	var tryBooleanObject = function booleanBrandCheck(value) {
		try {
			$boolToStr(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var boolClass = '[object Boolean]';
	var hasToStringTag = requireShams()();

	/** @type {import('.')} */
	isBooleanObject = function isBoolean(value) {
		if (typeof value === 'boolean') {
			return true;
		}
		if (value === null || typeof value !== 'object') {
			return false;
		}
		return hasToStringTag ? tryBooleanObject(value) : $toString(value) === boolClass;
	};
	return isBooleanObject;
}

var isBigint = {exports: {}};

var hasBigints;
var hasRequiredHasBigints;

function requireHasBigints () {
	if (hasRequiredHasBigints) return hasBigints;
	hasRequiredHasBigints = 1;

	var $BigInt = typeof BigInt !== 'undefined' && BigInt;

	/** @type {import('.')} */
	hasBigints = function hasNativeBigInts() {
		return typeof $BigInt === 'function'
			&& typeof BigInt === 'function'
			&& typeof $BigInt(42) === 'bigint' // eslint-disable-line no-magic-numbers
			&& typeof BigInt(42) === 'bigint'; // eslint-disable-line no-magic-numbers
	};
	return hasBigints;
}

var hasRequiredIsBigint;

function requireIsBigint () {
	if (hasRequiredIsBigint) return isBigint.exports;
	hasRequiredIsBigint = 1;

	var hasBigInts = requireHasBigints()();

	if (hasBigInts) {
		var bigIntValueOf = BigInt.prototype.valueOf;
		/** @type {(value: object) => value is BigInt} */
		var tryBigInt = function tryBigIntObject(value) {
			try {
				bigIntValueOf.call(value);
				return true;
			} catch (e) {
			}
			return false;
		};

		/** @type {import('.')} */
		isBigint.exports = function isBigInt(value) {
			if (
				value === null
				|| typeof value === 'undefined'
				|| typeof value === 'boolean'
				|| typeof value === 'string'
				|| typeof value === 'number'
				|| typeof value === 'symbol'
				|| typeof value === 'function'
			) {
				return false;
			}
			if (typeof value === 'bigint') {
				return true;
			}

			return tryBigInt(value);
		};
	} else {
		/** @type {import('.')} */
		isBigint.exports = function isBigInt(value) {
			return false;
		};
	}
	return isBigint.exports;
}

var whichBoxedPrimitive;
var hasRequiredWhichBoxedPrimitive;

function requireWhichBoxedPrimitive () {
	if (hasRequiredWhichBoxedPrimitive) return whichBoxedPrimitive;
	hasRequiredWhichBoxedPrimitive = 1;

	var isString = requireIsString();
	var isNumber = requireIsNumberObject();
	var isBoolean = requireIsBooleanObject();
	var isSymbol = requireIsSymbol();
	var isBigInt = requireIsBigint();

	/** @type {import('.')} */
	// eslint-disable-next-line consistent-return
	whichBoxedPrimitive = function whichBoxedPrimitive(value) {
		// eslint-disable-next-line eqeqeq
		if (value == null || (typeof value !== 'object' && typeof value !== 'function')) {
			return null;
		}
		if (isString(value)) {
			return 'String';
		}
		if (isNumber(value)) {
			return 'Number';
		}
		if (isBoolean(value)) {
			return 'Boolean';
		}
		if (isSymbol(value)) {
			return 'Symbol';
		}
		if (isBigInt(value)) {
			return 'BigInt';
		}
	};
	return whichBoxedPrimitive;
}

var isMap;
var hasRequiredIsMap;

function requireIsMap () {
	if (hasRequiredIsMap) return isMap;
	hasRequiredIsMap = 1;

	/** @const */
	var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
	var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

	var exported;

	if (!$Map) {
		/** @type {import('.')} */
		// eslint-disable-next-line no-unused-vars
		exported = function isMap(x) {
			// `Map` is not present in this environment.
			return false;
		};
	}

	var $mapHas = $Map ? Map.prototype.has : null;
	var $setHas = $Set ? Set.prototype.has : null;
	if (!exported && !$mapHas) {
		/** @type {import('.')} */
		// eslint-disable-next-line no-unused-vars
		exported = function isMap(x) {
			// `Map` does not have a `has` method
			return false;
		};
	}

	/** @type {import('.')} */
	isMap = exported || function isMap(x) {
		if (!x || typeof x !== 'object') {
			return false;
		}
		try {
			$mapHas.call(x);
			if ($setHas) {
				try {
					$setHas.call(x);
				} catch (e) {
					return true;
				}
			}
			// @ts-expect-error TS can't figure out that $Map is always truthy here
			return x instanceof $Map; // core-js workaround, pre-v2.5.0
		} catch (e) {}
		return false;
	};
	return isMap;
}

var isSet;
var hasRequiredIsSet;

function requireIsSet () {
	if (hasRequiredIsSet) return isSet;
	hasRequiredIsSet = 1;

	var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
	var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

	var exported;

	if (!$Set) {
		/** @type {import('.')} */
		// eslint-disable-next-line no-unused-vars
		exported = function isSet(x) {
			// `Set` is not present in this environment.
			return false;
		};
	}

	var $mapHas = $Map ? Map.prototype.has : null;
	var $setHas = $Set ? Set.prototype.has : null;
	if (!exported && !$setHas) {
		/** @type {import('.')} */
		// eslint-disable-next-line no-unused-vars
		exported = function isSet(x) {
			// `Set` does not have a `has` method
			return false;
		};
	}

	/** @type {import('.')} */
	isSet = exported || function isSet(x) {
		if (!x || typeof x !== 'object') {
			return false;
		}
		try {
			$setHas.call(x);
			if ($mapHas) {
				try {
					$mapHas.call(x);
				} catch (e) {
					return true;
				}
			}
			// @ts-expect-error TS can't figure out that $Set is always truthy here
			return x instanceof $Set; // core-js workaround, pre-v2.5.0
		} catch (e) {}
		return false;
	};
	return isSet;
}

var isWeakmap;
var hasRequiredIsWeakmap;

function requireIsWeakmap () {
	if (hasRequiredIsWeakmap) return isWeakmap;
	hasRequiredIsWeakmap = 1;

	var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
	var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

	var exported;

	if (!$WeakMap) {
		/** @type {import('.')} */
		// eslint-disable-next-line no-unused-vars
		exported = function isWeakMap(x) {
			// `WeakMap` is not present in this environment.
			return false;
		};
	}

	var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
	var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
	if (!exported && !$mapHas) {
		/** @type {import('.')} */
		// eslint-disable-next-line no-unused-vars
		exported = function isWeakMap(x) {
			// `WeakMap` does not have a `has` method
			return false;
		};
	}

	/** @type {import('.')} */
	isWeakmap = exported || function isWeakMap(x) {
		if (!x || typeof x !== 'object') {
			return false;
		}
		try {
			$mapHas.call(x, $mapHas);
			if ($setHas) {
				try {
					$setHas.call(x, $setHas);
				} catch (e) {
					return true;
				}
			}
			// @ts-expect-error TS can't figure out that $WeakMap is always truthy here
			return x instanceof $WeakMap; // core-js workaround, pre-v3
		} catch (e) {}
		return false;
	};
	return isWeakmap;
}

var isWeakset = {exports: {}};

var hasRequiredIsWeakset;

function requireIsWeakset () {
	if (hasRequiredIsWeakset) return isWeakset.exports;
	hasRequiredIsWeakset = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();
	var callBound = /*@__PURE__*/ requireCallBound();

	var $WeakSet = GetIntrinsic('%WeakSet%', true);

	/** @type {undefined | (<V>(thisArg: Set<V>, value: V) => boolean)} */
	var $setHas = callBound('WeakSet.prototype.has', true);

	if ($setHas) {
		/** @type {undefined | (<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean)} */
		var $mapHas = callBound('WeakMap.prototype.has', true);

		/** @type {import('.')} */
		isWeakset.exports = function isWeakSet(x) {
			if (!x || typeof x !== 'object') {
				return false;
			}
			try {
				// @ts-expect-error TS can't figure out that $setHas is always truthy here
				$setHas(x, $setHas);
				if ($mapHas) {
					try {
						// @ts-expect-error this indeed might not be a weak collection
						$mapHas(x, $mapHas);
					} catch (e) {
						return true;
					}
				}
				// @ts-expect-error TS can't figure out that $WeakSet is always truthy here
				return x instanceof $WeakSet; // core-js workaround, pre-v3
			} catch (e) {}
			return false;
		};
	} else {
		/** @type {import('.')} */
		// @ts-expect-error
		isWeakset.exports = function isWeakSet(x) { // eslint-disable-line no-unused-vars
			// `WeakSet` does not exist, or does not have a `has` method
			return false;
		};
	}
	return isWeakset.exports;
}

var whichCollection;
var hasRequiredWhichCollection;

function requireWhichCollection () {
	if (hasRequiredWhichCollection) return whichCollection;
	hasRequiredWhichCollection = 1;

	var isMap = /*@__PURE__*/ requireIsMap();
	var isSet = /*@__PURE__*/ requireIsSet();
	var isWeakMap = requireIsWeakmap();
	var isWeakSet = /*@__PURE__*/ requireIsWeakset();

	/** @type {import('.')} */
	whichCollection = function whichCollection(/** @type {unknown} */ value) {
		if (value && typeof value === 'object') {
			if (isMap(value)) {
				return 'Map';
			}
			if (isSet(value)) {
				return 'Set';
			}
			if (isWeakMap(value)) {
				return 'WeakMap';
			}
			if (isWeakSet(value)) {
				return 'WeakSet';
			}
		}
		return false;
	};
	return whichCollection;
}

var isWeakref;
var hasRequiredIsWeakref;

function requireIsWeakref () {
	if (hasRequiredIsWeakref) return isWeakref;
	hasRequiredIsWeakref = 1;

	var callBound = /*@__PURE__*/ requireCallBound();

	// eslint-disable-next-line no-extra-parens
	var $deref = /** @type {<T extends WeakKey>(thisArg: WeakRef<T>) => T | undefined} */ (callBound('WeakRef.prototype.deref', true));

	/** @type {import('.')} */
	isWeakref = typeof WeakRef === 'undefined'
		? function isWeakRef(_value) { // eslint-disable-line no-unused-vars
			return false;
		}
		: function isWeakRef(value) {
			if (!value || typeof value !== 'object') {
				return false;
			}
			try {
				// @ts-expect-error
				$deref(value);
				return true;
			} catch (e) {
				return false;
			}
		};
	return isWeakref;
}

var isFinalizationregistry;
var hasRequiredIsFinalizationregistry;

function requireIsFinalizationregistry () {
	if (hasRequiredIsFinalizationregistry) return isFinalizationregistry;
	hasRequiredIsFinalizationregistry = 1;

	var callBound = /*@__PURE__*/ requireCallBound();

	/** @type {undefined | ((value: ThisParameterType<typeof FinalizationRegistry.prototype.register>, ...args: Parameters<typeof FinalizationRegistry.prototype.register>) => ReturnType<typeof FinalizationRegistry.prototype.register>)} */
	var $register = callBound('FinalizationRegistry.prototype.register', true);

	/** @type {import('.')} */
	isFinalizationregistry = $register
		? function isFinalizationRegistry(value) {
			if (!value || typeof value !== 'object') {
				return false;
			}
			try {
				// @ts-expect-error TS can't figure out that it's always truthy here
				$register(value, {}, null);
				return true;
			} catch (e) {
				return false;
			}
		}
		// @ts-ignore unused var
		: function isFinalizationRegistry(value) { // eslint-disable-line no-unused-vars
			return false;
		};
	return isFinalizationregistry;
}

var functionsHaveNames_1;
var hasRequiredFunctionsHaveNames;

function requireFunctionsHaveNames () {
	if (hasRequiredFunctionsHaveNames) return functionsHaveNames_1;
	hasRequiredFunctionsHaveNames = 1;

	var functionsHaveNames = function functionsHaveNames() {
		return typeof function f() {}.name === 'string';
	};

	var gOPD = Object.getOwnPropertyDescriptor;
	if (gOPD) {
		try {
			gOPD([], 'length');
		} catch (e) {
			// IE 8 has a broken gOPD
			gOPD = null;
		}
	}

	functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
		if (!functionsHaveNames() || !gOPD) {
			return false;
		}
		var desc = gOPD(function () {}, 'name');
		return !!desc && !!desc.configurable;
	};

	var $bind = Function.prototype.bind;

	functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
		return functionsHaveNames() && typeof $bind === 'function' && function f() {}.bind().name !== '';
	};

	functionsHaveNames_1 = functionsHaveNames;
	return functionsHaveNames_1;
}

var implementation$2;
var hasRequiredImplementation$2;

function requireImplementation$2 () {
	if (hasRequiredImplementation$2) return implementation$2;
	hasRequiredImplementation$2 = 1;

	var IsCallable = requireIsCallable$1();
	var hasOwn = /*@__PURE__*/ requireHasown();
	var functionsHaveNames = requireFunctionsHaveNames()();
	var callBound = /*@__PURE__*/ requireCallBound();
	var $functionToString = callBound('Function.prototype.toString');
	var $stringMatch = callBound('String.prototype.match');
	var toStr = callBound('Object.prototype.toString');

	var classRegex = /^class /;

	var isClass = function isClassConstructor(fn) {
		if (IsCallable(fn)) {
			return false;
		}
		if (typeof fn !== 'function') {
			return false;
		}
		try {
			var match = $stringMatch($functionToString(fn), classRegex);
			return !!match;
		} catch (e) {}
		return false;
	};

	var regex = /\s*function\s+([^(\s]*)\s*/;

	var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

	var objectClass = '[object Object]';
	var ddaClass = '[object HTMLAllCollection]';

	var functionProto = Function.prototype;

	var isDDA = function isDocumentDotAll() {
		return false;
	};
	if (typeof document === 'object') {
		// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
		var all = document.all;
		if (toStr(all) === toStr(document.all)) {
			isDDA = function isDocumentDotAll(value) {
				/* globals document: false */
				// in IE 6-8, typeof document.all is "object" and it's truthy
				if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
					try {
						var str = toStr(value);
						// IE 6-8 uses `objectClass`
						return (str === ddaClass || str === objectClass) && value('') == null; // eslint-disable-line eqeqeq
					} catch (e) { /**/ }
				}
				return false;
			};
		}
	}

	implementation$2 = function getName() {
		if (isDDA(this) || (!isClass(this) && !IsCallable(this))) {
			throw new TypeError('Function.prototype.name sham getter called on non-function');
		}
		if (functionsHaveNames && hasOwn(this, 'name')) {
			return this.name;
		}
		if (this === functionProto) {
			return '';
		}
		var str = $functionToString(this);
		var match = $stringMatch(str, regex);
		var name = match && match[1];
		return name;
	};
	return implementation$2;
}

var polyfill$2;
var hasRequiredPolyfill$2;

function requirePolyfill$2 () {
	if (hasRequiredPolyfill$2) return polyfill$2;
	hasRequiredPolyfill$2 = 1;

	var implementation = requireImplementation$2();

	polyfill$2 = function getPolyfill() {
		return implementation;
	};
	return polyfill$2;
}

var shim$1;
var hasRequiredShim$1;

function requireShim$1 () {
	if (hasRequiredShim$1) return shim$1;
	hasRequiredShim$1 = 1;

	var supportsDescriptors = requireDefineProperties().supportsDescriptors;
	var functionsHaveNames = requireFunctionsHaveNames()();
	var getPolyfill = requirePolyfill$2();
	var defineProperty = Object.defineProperty;
	var TypeErr = TypeError;

	shim$1 = function shimName() {
		var polyfill = getPolyfill();
		if (functionsHaveNames) {
			return polyfill;
		}
		if (!supportsDescriptors) {
			throw new TypeErr('Shimming Function.prototype.name support requires ES5 property descriptor support.');
		}
		var functionProto = Function.prototype;
		defineProperty(functionProto, 'name', {
			configurable: true,
			enumerable: false,
			get: function () {
				var name = polyfill.call(this);
				if (this !== functionProto) {
					defineProperty(this, 'name', {
						configurable: true,
						enumerable: false,
						value: name,
						writable: false
					});
				}
				return name;
			}
		});
		return polyfill;
	};
	return shim$1;
}

var function_prototype_name;
var hasRequiredFunction_prototype_name;

function requireFunction_prototype_name () {
	if (hasRequiredFunction_prototype_name) return function_prototype_name;
	hasRequiredFunction_prototype_name = 1;

	var define = requireDefineProperties();
	var callBind = requireCallBind();

	var implementation = requireImplementation$2();
	var getPolyfill = requirePolyfill$2();
	var shim = requireShim$1();

	var bound = callBind(implementation);

	define(bound, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});

	function_prototype_name = bound;
	return function_prototype_name;
}

var isGeneratorFunction;
var hasRequiredIsGeneratorFunction;

function requireIsGeneratorFunction () {
	if (hasRequiredIsGeneratorFunction) return isGeneratorFunction;
	hasRequiredIsGeneratorFunction = 1;

	var callBound = /*@__PURE__*/ requireCallBound();
	var safeRegexTest = /*@__PURE__*/ requireSafeRegexTest();
	var isFnRegex = safeRegexTest(/^\s*(?:function)?\*/);
	var hasToStringTag = requireShams()();
	var getProto = requireGetProto();

	var toStr = callBound('Object.prototype.toString');
	var fnToStr = callBound('Function.prototype.toString');

	var getGeneratorFunc = function () { // eslint-disable-line consistent-return
		if (!hasToStringTag) {
			return false;
		}
		try {
			return Function('return function*() {}')();
		} catch (e) {
		}
	};
	/** @type {undefined | false | null | GeneratorFunctionConstructor} */
	var GeneratorFunction;

	/** @type {import('.')} */
	isGeneratorFunction = function isGeneratorFunction(fn) {
		if (typeof fn !== 'function') {
			return false;
		}
		if (isFnRegex(fnToStr(fn))) {
			return true;
		}
		if (!hasToStringTag) {
			var str = toStr(fn);
			return str === '[object GeneratorFunction]';
		}
		if (!getProto) {
			return false;
		}
		if (typeof GeneratorFunction === 'undefined') {
			var generatorFunc = getGeneratorFunc();
			GeneratorFunction = generatorFunc
				// eslint-disable-next-line no-extra-parens
				? /** @type {GeneratorFunctionConstructor} */ (getProto(generatorFunc))
				: false;
		}
		return getProto(fn) === GeneratorFunction;
	};
	return isGeneratorFunction;
}

var asyncFunction;
var hasRequiredAsyncFunction;

function requireAsyncFunction () {
	if (hasRequiredAsyncFunction) return asyncFunction;
	hasRequiredAsyncFunction = 1;

	// eslint-disable-next-line no-extra-parens, no-empty-function
	const cached = /** @type {import('.').AsyncFunctionConstructor} */ (async function () {}.constructor);

	/** @type {import('.')} */
	asyncFunction = () => cached;
	return asyncFunction;
}

var isAsyncFunction;
var hasRequiredIsAsyncFunction;

function requireIsAsyncFunction () {
	if (hasRequiredIsAsyncFunction) return isAsyncFunction;
	hasRequiredIsAsyncFunction = 1;

	var callBound = /*@__PURE__*/ requireCallBound();
	var safeRegexTest = /*@__PURE__*/ requireSafeRegexTest();

	var toStr = callBound('Object.prototype.toString');
	var fnToStr = callBound('Function.prototype.toString');
	var isFnRegex = safeRegexTest(/^\s*async(?:\s+function(?:\s+|\()|\s*\()/);

	var hasToStringTag = requireShams()();
	var getProto = requireGetProto();

	var getAsyncFunc = requireAsyncFunction();

	/** @type {import('.')} */
	isAsyncFunction = function isAsyncFunction(fn) {
		if (typeof fn !== 'function') {
			return false;
		}
		if (isFnRegex(fnToStr(fn))) {
			return true;
		}
		if (!hasToStringTag) {
			var str = toStr(fn);
			return str === '[object AsyncFunction]';
		}
		if (!getProto) {
			return false;
		}
		var asyncFunc = getAsyncFunc();
		return asyncFunc && asyncFunc.prototype === getProto(fn);
	};
	return isAsyncFunction;
}

var whichBuiltinType;
var hasRequiredWhichBuiltinType;

function requireWhichBuiltinType () {
	if (hasRequiredWhichBuiltinType) return whichBuiltinType;
	hasRequiredWhichBuiltinType = 1;

	var whichBoxedPrimitive = requireWhichBoxedPrimitive();
	var whichCollection = /*@__PURE__*/ requireWhichCollection();
	var whichTypedArray = /*@__PURE__*/ requireWhichTypedArray();
	var isArray = requireIsarray();
	var isDate = /*@__PURE__*/ requireIsDateObject();
	var isRegex = requireIsRegex();
	var isWeakRef = /*@__PURE__*/ requireIsWeakref();
	var isFinalizationRegistry = requireIsFinalizationregistry();
	var name = requireFunction_prototype_name();
	var isGeneratorFunction = requireIsGeneratorFunction();
	var isAsyncFunction = requireIsAsyncFunction();
	var callBound = /*@__PURE__*/ requireCallBound();
	var hasToStringTag = requireShams()();
	var toStringTag = hasToStringTag && Symbol.toStringTag;

	var $Object = Object;

	/** @type {undefined | ((value: ThisParameterType<typeof Promise.prototype.then>, ...args: Parameters<typeof Promise.prototype.then>) => ReturnType<typeof Promise.prototype.then>)} */
	var promiseThen = callBound('Promise.prototype.then', true);
	/** @type {<T = unknown>(value: unknown) => value is Promise<T>} */
	var isPromise = function isPromise(value) {
		if (!value || typeof value !== 'object' || !promiseThen) {
			return false;
		}
		try {
			promiseThen(value, null, function () {});
			return true;
		} catch (e) {}
		return false;
	};

	/** @type {(builtinName: unknown) => boolean} */
	var isKnownBuiltin = function isKnownBuiltin(builtinName) {
		return !!builtinName
			// primitives
			&& builtinName !== 'BigInt'
			&& builtinName !== 'Boolean'
			&& builtinName !== 'Null'
			&& builtinName !== 'Number'
			&& builtinName !== 'String'
			&& builtinName !== 'Symbol'
			&& builtinName !== 'Undefined'
			// namespaces
			&& builtinName !== 'Math'
			&& builtinName !== 'JSON'
			&& builtinName !== 'Reflect'
			&& builtinName !== 'Atomics'
			// collections
			&& builtinName !== 'Map'
			&& builtinName !== 'Set'
			&& builtinName !== 'WeakMap'
			&& builtinName !== 'WeakSet'
			// typed arrays
			&& builtinName !== 'BigInt64Array'
			&& builtinName !== 'BigUint64Array'
			&& builtinName !== 'Float32Array'
			&& builtinName !== 'Float64Array'
			&& builtinName !== 'Int16Array'
			&& builtinName !== 'Int32Array'
			&& builtinName !== 'Int8Array'
			&& builtinName !== 'Uint16Array'
			&& builtinName !== 'Uint32Array'
			&& builtinName !== 'Uint8Array'
			&& builtinName !== 'Uint8ClampedArray'
			// checked explicitly
			&& builtinName !== 'Array'
			&& builtinName !== 'Date'
			&& builtinName !== 'FinalizationRegistry'
			&& builtinName !== 'Promise'
			&& builtinName !== 'RegExp'
			&& builtinName !== 'WeakRef'
			// functions
			&& builtinName !== 'Function'
			&& builtinName !== 'GeneratorFunction'
			&& builtinName !== 'AsyncFunction';
	};

	/** @type {import('.')} */
	whichBuiltinType = function whichBuiltinType(value) {
		if (value == null) {
			return value;
		}
		// covers: primitives, {,Weak}Map/Set, typed arrays
		var which = whichBoxedPrimitive($Object(value)) || whichCollection(value) || whichTypedArray(value);
		if (which) {
			return which;
		}
		if (isArray(value)) {
			return 'Array';
		}
		if (isDate(value)) {
			return 'Date';
		}
		if (isRegex(value)) {
			return 'RegExp';
		}
		if (isWeakRef(value)) {
			return 'WeakRef';
		}
		if (isFinalizationRegistry(value)) {
			return 'FinalizationRegistry';
		}
		if (typeof value === 'function') {
			if (isGeneratorFunction(value)) {
				return 'GeneratorFunction';
			}
			if (isAsyncFunction(value)) {
				return 'AsyncFunction';
			}
			return 'Function';
		}
		if (isPromise(value)) {
			return 'Promise';
		}
		// @ts-expect-error TS can't figure out that `value` is an `object` after the `which` check above
		if (toStringTag && toStringTag in value) {
			var tag = value[toStringTag];
			if (isKnownBuiltin(tag)) {
				return tag;
			}
		}
		if (typeof value.constructor === 'function') {
			// eslint-disable-next-line no-extra-parens
			var constructorName = name(/** @type {Parameters<name>[0]} */ (value.constructor));
			if (isKnownBuiltin(constructorName)) {
				return constructorName;
			}
		}
		return 'Object';
	};
	return whichBuiltinType;
}

var implementation$1;
var hasRequiredImplementation$1;

function requireImplementation$1 () {
	if (hasRequiredImplementation$1) return implementation$1;
	hasRequiredImplementation$1 = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();
	var IsCallable = /*@__PURE__*/ requireIsCallable();
	var isObject = /*@__PURE__*/ requireIsObject();
	var whichBuiltinType = /*@__PURE__*/ requireWhichBuiltinType();
	var $TypeError = /*@__PURE__*/ requireType();

	var gPO = requireGetProto();
	var $Object = /*@__PURE__*/ requireEsObjectAtoms();

	implementation$1 = function getPrototypeOf(O) {
		if (!isObject(O)) {
			throw new $TypeError('Reflect.getPrototypeOf called on non-object');
		}

		if (gPO) {
			return gPO(O);
		}

		var type = whichBuiltinType(O);
		if (type) {
			var intrinsic = GetIntrinsic('%' + type + '.prototype%', true);
			if (intrinsic) {
				return intrinsic;
			}
		}
		if (IsCallable(O.constructor)) {
			return O.constructor.prototype;
		}
		if (O instanceof Object) {
			return $Object.prototype;
		}

		/*
		 * Correctly return null for Objects created with `Object.create(null)` (shammed or native) or `{ __proto__: null}`.  Also returns null for
		 * cross-realm objects on browsers that lack `__proto__` support (like IE <11), but that's the best we can do.
		 */
		return null;
	};
	return implementation$1;
}

var polyfill$1;
var hasRequiredPolyfill$1;

function requirePolyfill$1 () {
	if (hasRequiredPolyfill$1) return polyfill$1;
	hasRequiredPolyfill$1 = 1;

	var implementation = requireImplementation$1();

	var getProto = requireGetProto();

	polyfill$1 = function getPolyfill() {
		if (typeof Reflect === 'object' && Reflect && Reflect.getPrototypeOf) {
			return Reflect.getPrototypeOf;
		}
		return getProto
			? function getPrototypeOf(O) { return getProto(O); }
			: implementation;
	};
	return polyfill$1;
}

var typedArrayByteOffset;
var hasRequiredTypedArrayByteOffset;

function requireTypedArrayByteOffset () {
	if (hasRequiredTypedArrayByteOffset) return typedArrayByteOffset;
	hasRequiredTypedArrayByteOffset = 1;

	var forEach = requireForEach$1();
	var callBind = requireCallBind();
	var gPO = requirePolyfill$1()();

	var typedArrays = /*@__PURE__*/ requireAvailableTypedArrays()();

	/** @typedef {(x: import('.').TypedArray) => number} ByteOffsetGetter */

	/** @type {Record<import('.').TypedArrayName, ByteOffsetGetter>} */
	var getters = {
		// @ts-expect-error TS can't handle __proto__ or `satisfies` in jsdoc
		__proto__: null
	};

	var gOPD = /*@__PURE__*/ requireGopd();
	var oDP = Object.defineProperty;
	if (gOPD) {
		/** @type {ByteOffsetGetter} */
		var getByteOffset = function (x) {
			return x.byteOffset;
		};
		forEach(typedArrays, function (typedArray) {
			// In Safari 7, Typed Array constructors are typeof object
			if (typeof commonjsGlobal[typedArray] === 'function' || typeof commonjsGlobal[typedArray] === 'object') {
				var Proto = commonjsGlobal[typedArray].prototype;
				// @ts-expect-error TS can't guarantee the callback is invoked sync
				var descriptor = gOPD(Proto, 'byteOffset');
				if (!descriptor) {
					var superProto = gPO(Proto);
					// @ts-expect-error TS can't guarantee the callback is invoked sync
					descriptor = gOPD(superProto, 'byteOffset');
				}
				// Opera 12.16 has a magic byteOffset data property on instances AND on Proto
				if (descriptor && descriptor.get) {
					getters[typedArray] = callBind(descriptor.get);
				} else if (oDP) {
					// this is likely an engine where instances have a magic byteOffset data property
					var arr = new commonjsGlobal[typedArray](2);
					// @ts-expect-error TS can't guarantee the callback is invoked sync
					descriptor = gOPD(arr, 'byteOffset');
					if (descriptor && descriptor.configurable) {
						oDP(arr, 'length', { value: 3 });
					}
					if (arr.length === 2) {
						getters[typedArray] = getByteOffset;
					}
				}
			}
		});
	}

	/** @type {ByteOffsetGetter} */
	var tryTypedArrays = function tryAllTypedArrays(value) {
		/** @type {number} */ var foundOffset;
		forEach(getters, /** @type {(getter: ByteOffsetGetter) => void} */ function (getter) {
			if (typeof foundOffset !== 'number') {
				try {
					var offset = getter(value);
					if (typeof offset === 'number') {
						foundOffset = offset;
					}
				} catch (e) {}
			}
		});
		// @ts-expect-error TS can't guarantee the callback is invoked sync
		return foundOffset;
	};

	var isTypedArray = /*@__PURE__*/ requireIsTypedArray();

	/** @type {import('.')} */
	typedArrayByteOffset = function typedArrayByteOffset(value) {
		if (!isTypedArray(value)) {
			return false;
		}
		return tryTypedArrays(value);
	};
	return typedArrayByteOffset;
}

var typedArrayLength;
var hasRequiredTypedArrayLength$1;

function requireTypedArrayLength$1 () {
	if (hasRequiredTypedArrayLength$1) return typedArrayLength;
	hasRequiredTypedArrayLength$1 = 1;

	// / <reference types="node" />

	var callBind = requireCallBind();
	var forEach = requireForEach$1();
	var gOPD = /*@__PURE__*/ requireGopd();
	var isTypedArray = /*@__PURE__*/ requireIsTypedArray();
	var typedArrays = /*@__PURE__*/ requirePossibleTypedArrayNames();
	var gPO = requirePolyfill$1()();

	/** @typedef {(value: import('.').TypedArray) => number} TypedArrayLengthGetter */
	/** @typedef {{ [k in `$${import('.').TypedArrayName}` | '__proto__']: k extends '__proto__' ? null : TypedArrayLengthGetter }} Cache */

	/** @type {Cache} */
	// @ts-expect-error TS doesn't seem to have a "will eventually satisfy" type
	var getters = { __proto__: null };
	var oDP = Object.defineProperty;
	if (gOPD) {
		var getLength = /** @type {TypedArrayLengthGetter} */ function (x) {
			return x.length;
		};
		forEach(typedArrays, /** @type {(typedArray: import('.').TypedArrayName) => void} */ function (typedArray) {
			var TA = commonjsGlobal[typedArray];
			// In Safari 7, Typed Array constructors are typeof object
			if (typeof TA === 'function' || typeof TA === 'object') {
				var Proto = TA.prototype;
				// @ts-expect-error TS doesn't narrow types inside callbacks, which is weird
				var descriptor = gOPD(Proto, 'length');
				if (!descriptor) {
					var superProto = gPO(Proto);
					// @ts-expect-error TS doesn't narrow types inside callbacks, which is weird
					descriptor = gOPD(superProto, 'length');
				}
				// Opera 12.16 has a magic length data property on instances AND on Proto
				if (descriptor && descriptor.get) {
					// eslint-disable-next-line no-extra-parens
					getters[/** @type {`$${import('.').TypedArrayName}`} */ ('$' + typedArray)] = callBind(descriptor.get);
				} else if (oDP) {
					// this is likely an engine where instances have a magic length data property
					var arr = new commonjsGlobal[typedArray](2);
					// @ts-expect-error TS doesn't narrow types inside callbacks, which is weird
					descriptor = gOPD(arr, 'length');
					if (descriptor && descriptor.configurable) {
						oDP(arr, 'length', { value: 3 });
					}
					if (arr.length === 2) {
					// eslint-disable-next-line no-extra-parens
						getters[/** @type {`$${import('.').TypedArrayName}`} */ ('$' + typedArray)] = getLength;
					}
				}
			}
		});
	}

	/** @type {TypedArrayLengthGetter} */
	var tryTypedArrays = function tryAllTypedArrays(value) {
		/** @type {number} */ var foundLength;
		// @ts-expect-error not sure why this won't work
		forEach(getters, /** @type {(getter: TypedArrayLengthGetter) => void} */ function (getter) {
			if (typeof foundLength !== 'number') {
				try {
					var length = getter(value);
					if (typeof length === 'number') {
						foundLength = length;
					}
				} catch (e) {}
			}
		});
		// @ts-expect-error TS can't guarantee the above callback is invoked sync
		return foundLength;
	};

	/** @type {import('.')} */
	typedArrayLength = function typedArrayLength(value) {
		if (!isTypedArray(value)) {
			return false;
		}
		return tryTypedArrays(value);
	};
	return typedArrayLength;
}

var IsTypedArrayOutOfBounds;
var hasRequiredIsTypedArrayOutOfBounds;

function requireIsTypedArrayOutOfBounds () {
	if (hasRequiredIsTypedArrayOutOfBounds) return IsTypedArrayOutOfBounds;
	hasRequiredIsTypedArrayOutOfBounds = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var IsDetachedBuffer = /*@__PURE__*/ requireIsDetachedBuffer();
	var TypedArrayElementSize = /*@__PURE__*/ requireTypedArrayElementSize();

	var isTypedArrayWithBufferWitnessRecord = /*@__PURE__*/ requireTypedArrayWithBufferWitnessRecord();

	var typedArrayBuffer = /*@__PURE__*/ requireTypedArrayBuffer();
	var typedArrayByteOffset = /*@__PURE__*/ requireTypedArrayByteOffset();
	var typedArrayLength = /*@__PURE__*/ requireTypedArrayLength$1();

	// https://262.ecma-international.org/15.0/#sec-istypedarrayoutofbounds

	IsTypedArrayOutOfBounds = function IsTypedArrayOutOfBounds(taRecord) {
		if (!isTypedArrayWithBufferWitnessRecord(taRecord)) {
			throw new $TypeError('Assertion failed: `taRecord` must be a TypedArray With Buffer Witness Record');
		}

		var O = taRecord['[[Object]]']; // step 1

		var bufferByteLength = taRecord['[[CachedBufferByteLength]]']; // step 2

		if (IsDetachedBuffer(typedArrayBuffer(O)) && bufferByteLength !== 'DETACHED') {
			throw new $TypeError('Assertion failed: typed array is detached only if the byte length is ~DETACHED~'); // step 3
		}

		if (bufferByteLength === 'DETACHED') {
			return true; // step 4
		}

		var byteOffsetStart = typedArrayByteOffset(O); // step 5

		var byteOffsetEnd;
		var length = typedArrayLength(O);
		// TODO: probably use package for array length
		// seems to apply when TA is backed by a resizable/growable AB
		if (length === 'AUTO') { // step 6
			byteOffsetEnd = bufferByteLength; // step 6.a
		} else {
			var elementSize = TypedArrayElementSize(O); // step 7.a

			byteOffsetEnd = byteOffsetStart + (length * elementSize); // step 7.b
		}

		if (byteOffsetStart > bufferByteLength || byteOffsetEnd > bufferByteLength) {
			return true; // step 8
		}

		// 9. NOTE: 0-length TypedArrays are not considered out-of-bounds.

		return false; // step 10
	};
	return IsTypedArrayOutOfBounds;
}

var IsFixedLengthArrayBuffer;
var hasRequiredIsFixedLengthArrayBuffer;

function requireIsFixedLengthArrayBuffer () {
	if (hasRequiredIsFixedLengthArrayBuffer) return IsFixedLengthArrayBuffer;
	hasRequiredIsFixedLengthArrayBuffer = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var callBound = /*@__PURE__*/ requireCallBound();

	var $arrayBufferResizable = callBound('%ArrayBuffer.prototype.resizable%', true);
	var $sharedArrayGrowable = callBound('%SharedArrayBuffer.prototype.growable%', true);

	var isArrayBuffer = /*@__PURE__*/ requireIsArrayBuffer();
	var isSharedArrayBuffer = /*@__PURE__*/ requireIsSharedArrayBuffer();

	// https://262.ecma-international.org/15.0/#sec-isfixedlengtharraybuffer

	IsFixedLengthArrayBuffer = function IsFixedLengthArrayBuffer(arrayBuffer) {
		var isAB = isArrayBuffer(arrayBuffer);
		var isSAB = isSharedArrayBuffer(arrayBuffer);
		if (!isAB && !isSAB) {
			throw new $TypeError('Assertion failed: `arrayBuffer` must be an ArrayBuffer or SharedArrayBuffer');
		}

		if (isAB && $arrayBufferResizable) {
			return !$arrayBufferResizable(arrayBuffer); // step 1
		}
		if (isSAB && $sharedArrayGrowable) {
			return !$sharedArrayGrowable(arrayBuffer); // step 1
		}
		return true; // step 2
	};
	return IsFixedLengthArrayBuffer;
}

var TypedArrayLength;
var hasRequiredTypedArrayLength;

function requireTypedArrayLength () {
	if (hasRequiredTypedArrayLength) return TypedArrayLength;
	hasRequiredTypedArrayLength = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var floor = /*@__PURE__*/ requireFloor();
	var IsFixedLengthArrayBuffer = /*@__PURE__*/ requireIsFixedLengthArrayBuffer();
	var IsTypedArrayOutOfBounds = /*@__PURE__*/ requireIsTypedArrayOutOfBounds();
	var TypedArrayElementSize = /*@__PURE__*/ requireTypedArrayElementSize();

	var isTypedArrayWithBufferWitnessRecord = /*@__PURE__*/ requireTypedArrayWithBufferWitnessRecord();

	var typedArrayBuffer = /*@__PURE__*/ requireTypedArrayBuffer();
	var typedArrayByteOffset = /*@__PURE__*/ requireTypedArrayByteOffset();
	var typedArrayLength = /*@__PURE__*/ requireTypedArrayLength$1();

	// http://www.ecma-international.org/ecma-262/15.0/#sec-typedarraylength

	TypedArrayLength = function TypedArrayLength(taRecord) {
		if (!isTypedArrayWithBufferWitnessRecord(taRecord)) {
			throw new $TypeError('Assertion failed: `taRecord` must be a TypedArray With Buffer Witness Record');
		}

		if (IsTypedArrayOutOfBounds(taRecord)) {
			throw new $TypeError('Assertion failed: `taRecord` is out of bounds'); // step 1
		}

		var O = taRecord['[[Object]]']; // step 2

		var length = typedArrayLength(O);
		if (length !== 'AUTO') {
			return length; // step 3
		}

		if (IsFixedLengthArrayBuffer(typedArrayBuffer(O))) {
			throw new $TypeError('Assertion failed: array buffer is not fixed length'); // step 4
		}

		var byteOffset = typedArrayByteOffset(O); // step 5

		var elementSize = TypedArrayElementSize(O); // step 6

		var byteLength = taRecord['[[CachedBufferByteLength]]']; // step 7

		if (byteLength === 'DETACHED') {
			throw new $TypeError('Assertion failed: typed array is detached'); // step 8
		}

		return floor((byteLength - byteOffset) / elementSize); // step 9
	};
	return TypedArrayLength;
}

var ArrayBufferByteLength;
var hasRequiredArrayBufferByteLength;

function requireArrayBufferByteLength () {
	if (hasRequiredArrayBufferByteLength) return ArrayBufferByteLength;
	hasRequiredArrayBufferByteLength = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	// https://262.ecma-international.org/15.0/#sec-arraybufferbytelength

	var IsDetachedBuffer = /*@__PURE__*/ requireIsDetachedBuffer();

	var isArrayBuffer = /*@__PURE__*/ requireIsArrayBuffer();
	var isSharedArrayBuffer = /*@__PURE__*/ requireIsSharedArrayBuffer();
	var arrayBufferByteLength = /*@__PURE__*/ requireArrayBufferByteLength$1();

	ArrayBufferByteLength = function ArrayBufferByteLength(arrayBuffer, order) {
		var isSAB = isSharedArrayBuffer(arrayBuffer);
		if (!isArrayBuffer(arrayBuffer) && !isSAB) {
			throw new $TypeError('Assertion failed: `arrayBuffer` must be an ArrayBuffer or a SharedArrayBuffer');
		}
		if (order !== 'SEQ-CST' && order !== 'UNORDERED') {
			throw new $TypeError('Assertion failed: `order` must be ~SEQ-CST~ or ~UNORDERED~');
		}

		if (IsDetachedBuffer(arrayBuffer)) {
			throw new $TypeError('Assertion failed: `arrayBuffer` must not be detached'); // step 2
		}

		return arrayBufferByteLength(arrayBuffer);
	};
	return ArrayBufferByteLength;
}

var MakeTypedArrayWithBufferWitnessRecord;
var hasRequiredMakeTypedArrayWithBufferWitnessRecord;

function requireMakeTypedArrayWithBufferWitnessRecord () {
	if (hasRequiredMakeTypedArrayWithBufferWitnessRecord) return MakeTypedArrayWithBufferWitnessRecord;
	hasRequiredMakeTypedArrayWithBufferWitnessRecord = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var ArrayBufferByteLength = /*@__PURE__*/ requireArrayBufferByteLength();
	var IsDetachedBuffer = /*@__PURE__*/ requireIsDetachedBuffer();

	var isTypedArray = /*@__PURE__*/ requireIsTypedArray();
	var typedArrayBuffer = /*@__PURE__*/ requireTypedArrayBuffer();

	// https://262.ecma-international.org/15.0/#sec-maketypedarraywithbufferwitnessrecord

	MakeTypedArrayWithBufferWitnessRecord = function MakeTypedArrayWithBufferWitnessRecord(obj, order) {
		if (!isTypedArray(obj)) {
			throw new $TypeError('Assertion failed: `obj` must be a Typed Array');
		}
		if (order !== 'SEQ-CST' && order !== 'UNORDERED') {
			throw new $TypeError('Assertion failed: `order` must be ~SEQ-CST~ or ~UNORDERED~');
		}

		var buffer = typedArrayBuffer(obj); // step 1

		var byteLength = IsDetachedBuffer(buffer) ? 'DETACHED' : ArrayBufferByteLength(buffer, order); // steps 2 - 3

		return { '[[Object]]': obj, '[[CachedBufferByteLength]]': byteLength }; // step 4
	};
	return MakeTypedArrayWithBufferWitnessRecord;
}

var ValidateTypedArray;
var hasRequiredValidateTypedArray;

function requireValidateTypedArray () {
	if (hasRequiredValidateTypedArray) return ValidateTypedArray;
	hasRequiredValidateTypedArray = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var IsTypedArrayOutOfBounds = /*@__PURE__*/ requireIsTypedArrayOutOfBounds();
	var MakeTypedArrayWithBufferWitnessRecord = /*@__PURE__*/ requireMakeTypedArrayWithBufferWitnessRecord();

	var isObject = /*@__PURE__*/ requireIsObject();

	var isTypedArray = /*@__PURE__*/ requireIsTypedArray();

	// https://262.ecma-international.org/15.0/#sec-validatetypedarray

	ValidateTypedArray = function ValidateTypedArray(O, order) {
		if (order !== 'SEQ-CST' && order !== 'UNORDERED') {
			throw new $TypeError('Assertion failed: `order` must be ~SEQ-CST~ or ~UNORDERED~');
		}

		if (!isObject(O)) {
			throw new $TypeError('Assertion failed: `O` must be an Object'); // step 1
		}
		if (!isTypedArray(O)) {
			throw new $TypeError('Assertion failed: `O` must be a Typed Array'); // steps 1 - 2
		}

		var taRecord = MakeTypedArrayWithBufferWitnessRecord(O, order); // step 3

		if (IsTypedArrayOutOfBounds(taRecord)) {
			throw new $TypeError('`O` must be in-bounds and backed by a non-detached buffer'); // step 4
		}

		return taRecord; // step 5
	};
	return ValidateTypedArray;
}

var TypedArrayCreateFromConstructor;
var hasRequiredTypedArrayCreateFromConstructor;

function requireTypedArrayCreateFromConstructor () {
	if (hasRequiredTypedArrayCreateFromConstructor) return TypedArrayCreateFromConstructor;
	hasRequiredTypedArrayCreateFromConstructor = 1;

	var $SyntaxError = /*@__PURE__*/ requireSyntax();
	var $TypeError = /*@__PURE__*/ requireType();

	var IsArray = /*@__PURE__*/ requireIsArray();
	var IsConstructor = /*@__PURE__*/ requireIsConstructor();
	var IsTypedArrayOutOfBounds = /*@__PURE__*/ requireIsTypedArrayOutOfBounds();
	var TypedArrayLength = /*@__PURE__*/ requireTypedArrayLength();
	var ValidateTypedArray = /*@__PURE__*/ requireValidateTypedArray();

	var availableTypedArrays = /*@__PURE__*/ requireAvailableTypedArrays()();

	// https://262.ecma-international.org/15.0/#typedarraycreatefromconstructor

	TypedArrayCreateFromConstructor = function TypedArrayCreateFromConstructor(constructor, argumentList) {
		if (!IsConstructor(constructor)) {
			throw new $TypeError('Assertion failed: `constructor` must be a constructor');
		}
		if (!IsArray(argumentList)) {
			throw new $TypeError('Assertion failed: `argumentList` must be a List');
		}
		if (availableTypedArrays.length === 0) {
			throw new $SyntaxError('Assertion failed: Typed Arrays are not supported in this environment');
		}

		// var newTypedArray = Construct(constructor, argumentList); // step 1
		var newTypedArray;
		if (argumentList.length === 0) {
			newTypedArray = new constructor();
		} else if (argumentList.length === 1) {
			newTypedArray = new constructor(argumentList[0]);
		} else if (argumentList.length === 2) {
			newTypedArray = new constructor(argumentList[0], argumentList[1]);
		} else {
			newTypedArray = new constructor(argumentList[0], argumentList[1], argumentList[2]);
		}

		var taRecord = ValidateTypedArray(newTypedArray, 'SEQ-CST'); // step 2

		if (argumentList.length === 1 && typeof argumentList[0] === 'number') { // step 3
			if (IsTypedArrayOutOfBounds(taRecord)) {
				throw new $TypeError('new Typed Array is out of bounds'); // step 3.a
			}
			var length = TypedArrayLength(taRecord); // step 3.b
			if (length < argumentList[0]) {
				throw new $TypeError('`argumentList[0]` must be <= `newTypedArray.length`'); // step 3.c
			}
		}

		return newTypedArray; // step 4
	};
	return TypedArrayCreateFromConstructor;
}

var typedArrayConstructors;
var hasRequiredTypedArrayConstructors;

function requireTypedArrayConstructors () {
	if (hasRequiredTypedArrayConstructors) return typedArrayConstructors;
	hasRequiredTypedArrayConstructors = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic$1();

	var constructors = {
		__proto__: null,
		$Int8Array: GetIntrinsic('%Int8Array%', true),
		$Uint8Array: GetIntrinsic('%Uint8Array%', true),
		$Uint8ClampedArray: GetIntrinsic('%Uint8ClampedArray%', true),
		$Int16Array: GetIntrinsic('%Int16Array%', true),
		$Uint16Array: GetIntrinsic('%Uint16Array%', true),
		$Int32Array: GetIntrinsic('%Int32Array%', true),
		$Uint32Array: GetIntrinsic('%Uint32Array%', true),
		$BigInt64Array: GetIntrinsic('%BigInt64Array%', true),
		$BigUint64Array: GetIntrinsic('%BigUint64Array%', true),
		$Float32Array: GetIntrinsic('%Float32Array%', true),
		$Float64Array: GetIntrinsic('%Float64Array%', true)
	};

	typedArrayConstructors = function getConstructor(kind) {
		return constructors['$' + kind];
	};
	return typedArrayConstructors;
}

var TypedArraySpeciesCreate;
var hasRequiredTypedArraySpeciesCreate;

function requireTypedArraySpeciesCreate () {
	if (hasRequiredTypedArraySpeciesCreate) return TypedArraySpeciesCreate;
	hasRequiredTypedArraySpeciesCreate = 1;

	var $SyntaxError = /*@__PURE__*/ requireSyntax();
	var $TypeError = /*@__PURE__*/ requireType();

	var whichTypedArray = /*@__PURE__*/ requireWhichTypedArray();
	var availableTypedArrays = /*@__PURE__*/ requireAvailableTypedArrays()();

	var IsArray = /*@__PURE__*/ requireIsArray();
	var SpeciesConstructor = /*@__PURE__*/ requireSpeciesConstructor();
	var TypedArrayCreateFromConstructor = /*@__PURE__*/ requireTypedArrayCreateFromConstructor();

	var getConstructor = /*@__PURE__*/ requireTypedArrayConstructors();

	// https://262.ecma-international.org/15.0/#typedarray-species-create

	TypedArraySpeciesCreate = function TypedArraySpeciesCreate(exemplar, argumentList) {
		if (availableTypedArrays.length === 0) {
			throw new $SyntaxError('Assertion failed: Typed Arrays are not supported in this environment');
		}

		var kind = whichTypedArray(exemplar);
		if (!kind) {
			throw new $TypeError('Assertion failed: exemplar must be a TypedArray'); // step 1
		}
		if (!IsArray(argumentList)) {
			throw new $TypeError('Assertion failed: `argumentList` must be a List'); // step 1
		}

		var defaultConstructor = getConstructor(kind); // step 2
		if (typeof defaultConstructor !== 'function') {
			throw new $SyntaxError('Assertion failed: `constructor` of `exemplar` (' + kind + ') must exist. Please report this!');
		}
		var constructor = SpeciesConstructor(exemplar, defaultConstructor); // step 3

		return TypedArrayCreateFromConstructor(constructor, argumentList); // step 4
	};
	return TypedArraySpeciesCreate;
}

var implementation;
var hasRequiredImplementation;

function requireImplementation () {
	if (hasRequiredImplementation) return implementation;
	hasRequiredImplementation = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var Get = /*@__PURE__*/ requireGet();
	var GetValueFromBuffer = /*@__PURE__*/ requireGetValueFromBuffer();
	var IsDetachedBuffer = /*@__PURE__*/ requireIsDetachedBuffer();
	var max = /*@__PURE__*/ requireMax();
	var min = /*@__PURE__*/ requireMin();
	var Set = /*@__PURE__*/ require_Set();
	var SetValueInBuffer = /*@__PURE__*/ requireSetValueInBuffer();
	var ToIntegerOrInfinity = /*@__PURE__*/ requireToIntegerOrInfinity();
	var ToString = /*@__PURE__*/ requireToString();
	var TypedArrayElementSize = /*@__PURE__*/ requireTypedArrayElementSize();
	var TypedArrayElementType = /*@__PURE__*/ requireTypedArrayElementType();
	var TypedArraySpeciesCreate = /*@__PURE__*/ requireTypedArraySpeciesCreate();
	var ValidateTypedArray = /*@__PURE__*/ requireValidateTypedArray();

	var typedArrayBuffer = /*@__PURE__*/ requireTypedArrayBuffer();
	var typedArrayByteOffset = /*@__PURE__*/ requireTypedArrayByteOffset();

	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice

	implementation = function slice(start, end) {
		var O = this; // step 1

		ValidateTypedArray(O, 'SEQ-CST'); // step 2

		// 3. Let len be O.[[ArrayLength]].
		var len = O.length; // steps 3

		var relativeStart = ToIntegerOrInfinity(start); // step 4

		var k;
		if (relativeStart === -Infinity) {
			k = 0; // step 5
		} else if (relativeStart < 0) {
			k = max(len + relativeStart, 0); // step 6
		} else {
			k = min(relativeStart, len); // step 7
		}

		var relativeEnd = typeof end === 'undefined' ? len : ToIntegerOrInfinity(end); // step 8

		var final;
		if (relativeEnd === -Infinity) {
			final = 0; // step 9
		} else if (relativeEnd < 0) {
			final = max(len + relativeEnd, 0); // step 10
		} else {
			final = min(relativeEnd, len); // step 11
		}

		var count = max(final - k, 0); // step 12

		var A = TypedArraySpeciesCreate(O, [count]); // step 13

		if (count > 0) { // step 14
			if (IsDetachedBuffer(typedArrayBuffer(O))) {
				throw new $TypeError('Cannot use a Typed Array with an underlying ArrayBuffer that is detached'); // step 14.a
			}
			var srcType = TypedArrayElementType(O); // step 14.b
			var targetType = TypedArrayElementType(A); // step 14.c
			if (srcType === targetType) { // step 14.d
				//  1. NOTE: The transfer must be performed in a manner that preserves the bit-level encoding of the source data.
				var srcBuffer = typedArrayBuffer(O); // step 14.d.ii
				var targetBuffer = typedArrayBuffer(A); // step 14.d.iii
				var elementSize = TypedArrayElementSize(O); // step 14.d.iv
				var srcByteOffset = typedArrayByteOffset(O); // step 14.d.v
				var srcByteIndex = (k * elementSize) + srcByteOffset; // step 14.d.vi
				var targetByteIndex = typedArrayByteOffset(A); // step 14.d.vii
				var limit = targetByteIndex + (count * elementSize); // step 14.d.viii
				while (targetByteIndex < limit) { // step 14.d.ix
					var value = GetValueFromBuffer(srcBuffer, srcByteIndex, 'UINT8', true, 'UNORDERED'); // step 14.d.ix.1
					SetValueInBuffer(targetBuffer, targetByteIndex, 'UINT8', value, true, 'UNORDERED'); // step 14.d.ix.2
					srcByteIndex += 1; // step 14.d.ix.3
					targetByteIndex += 1; // step 14.d.ix.4
				}
			} else { // step 14.e
				var n = 0; // step 14.e.i
				while (k < final) { // step 14.e.ii
					var Pk = ToString(k); // step 14.e.ii.1
					var kValue = Get(O, Pk); // step 14.e.ii.2
					Set(A, ToString(n), kValue, true); // step 14.e.ii.3
					k += 1; // step 14.e.ii.4
					n += 1; // step 14.e.ii.5
				}
			}
		}

		return A; // step 15
	};
	return implementation;
}

var polyfill;
var hasRequiredPolyfill;

function requirePolyfill () {
	if (hasRequiredPolyfill) return polyfill;
	hasRequiredPolyfill = 1;

	var implementation = requireImplementation();

	polyfill = function getPolyfill() {
		return (typeof Uint8Array === 'function' && Uint8Array.prototype.slice) || implementation;
	};
	return polyfill;
}

var shim;
var hasRequiredShim;

function requireShim () {
	if (hasRequiredShim) return shim;
	hasRequiredShim = 1;

	var define = requireDefineProperties();
	var getProto = requireGetProto();

	var getPolyfill = requirePolyfill();

	shim = function shimTypedArraySlice() {
		if (typeof Uint8Array === 'function') {
			var polyfill = getPolyfill();
			var proto = getProto(Uint8Array.prototype);
			define(
				proto,
				{ slice: polyfill },
				{ slice: function () { return proto.slice !== polyfill; } }
			);
		}

		return polyfill;
	};
	return shim;
}

var typedarray_prototype_slice;
var hasRequiredTypedarray_prototype_slice;

function requireTypedarray_prototype_slice () {
	if (hasRequiredTypedarray_prototype_slice) return typedarray_prototype_slice;
	hasRequiredTypedarray_prototype_slice = 1;

	var define = requireDefineProperties();
	var callBind = requireCallBind();

	var implementation = requireImplementation();
	var getPolyfill = requirePolyfill();
	var shim = requireShim();

	var bound = callBind(getPolyfill());

	define(bound, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});

	typedarray_prototype_slice = bound;
	return typedarray_prototype_slice;
}

var traverse_1;
var hasRequiredTraverse;

function requireTraverse () {
	if (hasRequiredTraverse) return traverse_1;
	hasRequiredTraverse = 1;

	var whichTypedArray = /*@__PURE__*/ requireWhichTypedArray();
	var taSlice = requireTypedarray_prototype_slice();
	var gopd = /*@__PURE__*/ requireGopd();

	// TODO: use call-bind, is-date, is-regex, is-string, is-boolean-object, is-number-object
	function toS(obj) { return Object.prototype.toString.call(obj); }
	function isDate(obj) { return toS(obj) === '[object Date]'; }
	function isRegExp(obj) { return toS(obj) === '[object RegExp]'; }
	function isError(obj) { return toS(obj) === '[object Error]'; }
	function isBoolean(obj) { return toS(obj) === '[object Boolean]'; }
	function isNumber(obj) { return toS(obj) === '[object Number]'; }
	function isString(obj) { return toS(obj) === '[object String]'; }

	// TODO: use isarray
	var isArray = Array.isArray || function isArray(xs) {
		return Object.prototype.toString.call(xs) === '[object Array]';
	};

	// TODO: use for-each?
	function forEach(xs, fn) {
		if (xs.forEach) { return xs.forEach(fn); }
		for (var i = 0; i < xs.length; i++) {
			fn(xs[i], i, xs);
		}
		return void 0;
	}

	// TODO: use object-keys
	var objectKeys = Object.keys || function keys(obj) {
		var res = [];
		for (var key in obj) { res[res.length] = key; } // eslint-disable-line no-restricted-syntax
		return res;
	};

	var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols; // eslint-disable-line id-length

	// TODO: use reflect.ownkeys and filter out non-enumerables
	function ownEnumerableKeys(obj) {
		var res = objectKeys(obj);

		// Include enumerable symbol properties.
		if (getOwnPropertySymbols) {
			var symbols = getOwnPropertySymbols(obj);
			for (var i = 0; i < symbols.length; i++) {
				if (propertyIsEnumerable.call(obj, symbols[i])) {
					res[res.length] = symbols[i];
				}
			}
		}
		return res;
	}

	// TODO: use object.hasown
	var hasOwnProperty = Object.prototype.hasOwnProperty || function (obj, key) {
		return key in obj;
	};

	function isWritable(object, key) {
		if (typeof gopd !== 'function') {
			return true;
		}

		var desc = gopd(object, key);
		return !desc || !desc.writable;
	}

	function copy(src, options) {
		if (typeof src === 'object' && src !== null) {
			var dst;

			if (isArray(src)) {
				dst = [];
			} else if (isDate(src)) {
				dst = new Date(src.getTime ? src.getTime() : src);
			} else if (isRegExp(src)) {
				dst = new RegExp(src);
			} else if (isError(src)) {
				dst = { message: src.message };
			} else if (isBoolean(src) || isNumber(src) || isString(src)) {
				dst = Object(src);
			} else {
				var ta = whichTypedArray(src);
				if (ta) {
					return taSlice(src);
				} else if (Object.create && Object.getPrototypeOf) {
					dst = Object.create(Object.getPrototypeOf(src));
				} else if (src.constructor === Object) {
					dst = {};
				} else {
					var proto = (src.constructor && src.constructor.prototype)
						|| src.__proto__
						|| {};
					var T = function T() {}; // eslint-disable-line func-style, func-name-matching
					T.prototype = proto;
					dst = new T();
				}
			}

			var iteratorFunction = options.includeSymbols ? ownEnumerableKeys : objectKeys;
			forEach(iteratorFunction(src), function (key) {
				dst[key] = src[key];
			});
			return dst;
		}
		return src;
	}

	/** @type {TraverseOptions} */
	var emptyNull = { __proto__: null };

	function walk(root, cb) {
		var path = [];
		var parents = [];
		var alive = true;
		var options = arguments.length > 2 ? arguments[2] : emptyNull;
		var iteratorFunction = options.includeSymbols ? ownEnumerableKeys : objectKeys;
		var immutable = !!options.immutable;

		return (function walker(node_) {
			var node = immutable ? copy(node_, options) : node_;
			var modifiers = { __proto__: null };

			var keepGoing = true;

			var state = {
				node: node,
				node_: node_,
				path: [].concat(path),
				parent: parents[parents.length - 1],
				parents: parents,
				key: path[path.length - 1],
				removedKeys: { __proto__: null },
				isRoot: path.length === 0,
				level: path.length,
				circular: null,
				update: function (x, stopHere) {
					if (!state.isRoot) {
						state.parent.node[state.key] = x;
					}
					state.node = x;
					if (stopHere) { keepGoing = false; }
				},
				delete: function (stopHere) {
					delete state.parent.node[state.key];
					state.parent.removedKeys[state.key] = true;
					if (stopHere) { keepGoing = false; }
				},
				remove: function (stopHere) {
					if (isArray(state.parent.node)) {
						state.parent.node.splice(state.key, 1);
						state.parent.removedKeys[state.key] = true;
						if (stopHere) { keepGoing = false; }
					} else {
						state.delete(stopHere);
					}
				},
				keys: null,
				before: function (f) { modifiers.before = f; },
				after: function (f) { modifiers.after = f; },
				pre: function (f) { modifiers.pre = f; },
				post: function (f) { modifiers.post = f; },
				stop: function () { alive = false; },
				block: function () { keepGoing = false; },
			};

			if (!alive) { return state; }

			function updateState() {
				if (typeof state.node === 'object' && state.node !== null) {
					if (!state.keys || state.node_ !== state.node) {
						state.keys = iteratorFunction(state.node);
					}

					state.isLeaf = state.keys.length === 0;

					for (var i = 0; i < parents.length; i++) {
						if (parents[i].node_ === node_) {
							state.circular = parents[i];
							break; // eslint-disable-line no-restricted-syntax
						}
					}
				} else {
					state.isLeaf = true;
					state.keys = null;
				}

				state.notLeaf = !state.isLeaf;
				state.notRoot = !state.isRoot;
			}

			updateState();

			// use return values to update if defined
			var ret = cb.call(state, state.node);
			if (ret !== undefined && state.update) { state.update(ret); }

			if (modifiers.before) { modifiers.before.call(state, state.node); }

			if (!keepGoing) { return state; }

			if (
				typeof state.node === 'object'
				&& state.node !== null
				&& !state.circular
			) {
				parents[parents.length] = state;

				updateState();

				forEach(state.keys, function (key, i) {
					var prevIsRemoved = (i - 1) in state.removedKeys;
					if (prevIsRemoved) {
						key = state.keys[i - 1]; // eslint-disable-line no-param-reassign
					}

					path[path.length] = (key);

					if (modifiers.pre) { modifiers.pre.call(state, state.node[key], key); }

					var child = walker(state.node[key]);
					if (
						immutable
						&& hasOwnProperty.call(state.node, key)
						&& !isWritable(state.node, key)
						&& !prevIsRemoved
					) {
						state.node[key] = child.node;
					}

					child.isLast = i === state.keys.length - 1;
					child.isFirst = i === 0;

					if (modifiers.post) { modifiers.post.call(state, child); }

					path.pop();
				});
				parents.pop();
			}

			if (modifiers.after) { modifiers.after.call(state, state.node); }

			return state;
		}(root)).node;
	}

	/** @typedef {{ immutable?: boolean, includeSymbols?: boolean }} TraverseOptions */

	/**
	 * A traverse constructor
	 * @param {object} obj - the object to traverse
	 * @param {TraverseOptions | undefined} [options] - options for the traverse
	 * @constructor
	 */
	function Traverse(obj) {
		/** @type {TraverseOptions} */
		this.options = arguments.length > 1 ? arguments[1] : emptyNull;
		this.value = obj;
	}

	/** @type {(ps: PropertyKey[]) => Traverse['value']} */
	Traverse.prototype.get = function (ps) {
		var node = this.value;
		for (var i = 0; node && i < ps.length; i++) {
			var key = ps[i];
			if (
				!hasOwnProperty.call(node, key)
				|| (!this.options.includeSymbols && typeof key === 'symbol')
			) {
				return void 0;
			}
			node = node[key];
		}
		return node;
	};

	/** @type {(ps: PropertyKey[]) => boolean} */
	Traverse.prototype.has = function (ps) {
		var node = this.value;
		// TODO: remove ps.length check
		if (!node && ps.length > 0) {
			return false;
		}
		for (var i = 0; node && i < ps.length; i++) {
			var key = ps[i];
			if (!hasOwnProperty.call(node, key) || (!this.options.includeSymbols && typeof key === 'symbol')) {
				return false;
			}
			node = node[key];
		}
		return true;
	};

	Traverse.prototype.set = function (ps, value) {
		var node = this.value;
		for (var i = 0; i < ps.length - 1; i++) {
			var key = ps[i];
			if (!hasOwnProperty.call(node, key)) { node[key] = {}; }
			node = node[key];
		}
		node[ps[i]] = value;
		return value;
	};

	Traverse.prototype.map = function (cb) {
		return walk(this.value, cb, { __proto__: null, immutable: true, includeSymbols: !!this.options.includeSymbols });
	};

	Traverse.prototype.forEach = function (cb) {
		this.value = walk(this.value, cb, this.options);
		return this.value;
	};

	Traverse.prototype.reduce = function (cb, init) {
		var skip = arguments.length === 1;
		var acc = skip ? this.value : init;
		this.forEach(function (x) {
			if (!this.isRoot || !skip) {
				acc = cb.call(this, acc, x);
			}
		});
		return acc;
	};

	Traverse.prototype.paths = function () {
		var acc = [];
		this.forEach(function () {
			acc[acc.length] = this.path;
		});
		return acc;
	};

	Traverse.prototype.nodes = function () {
		var acc = [];
		this.forEach(function () {
			acc[acc.length] = this.node;
		});
		return acc;
	};

	Traverse.prototype.clone = function () {
		var parents = [];
		var nodes = [];
		var options = this.options;

		if (whichTypedArray(this.value)) {
			return taSlice(this.value);
		}

		return (function clone(src) {
			for (var i = 0; i < parents.length; i++) {
				if (parents[i] === src) {
					return nodes[i];
				}
			}

			if (typeof src === 'object' && src !== null) {
				var dst = copy(src, options);

				parents[parents.length] = (src);
				nodes[nodes.length] = (dst);

				var iteratorFunction = options.includeSymbols ? ownEnumerableKeys : objectKeys;
				forEach(iteratorFunction(src), function (key) {
					dst[key] = clone(src[key]);
				});

				parents.pop();
				nodes.pop();
				return dst;
			}

			return src;

		}(this.value));
	};

	/** @type {(obj: object, options?: TraverseOptions) => Traverse} */
	function traverse(obj) {
		var options = arguments.length > 1 ? arguments[1] : emptyNull;
		return new Traverse(obj, options);
	}

	// TODO: replace with object.assign?
	forEach(ownEnumerableKeys(Traverse.prototype), function (key) {
		traverse[key] = function (obj) {
			var args = [].slice.call(arguments, 1);
			var t = new Traverse(obj);
			return t[key].apply(t, args);
		};
	});

	traverse_1 = traverse;
	return traverse_1;
}

var traverseExports = requireTraverse();
var traverse = /*@__PURE__*/getDefaultExportFromCjs(traverseExports);

let styleOptions = {
    level: {
        caseControl: "upper",
    },
    event: {
        prefix: "> ",
    },
    message: {
        prefixMessage: "\n----- received following messages -----\n",
        indentStyle: "",
        nonInfoIndentStyle: "    > ",
        endStyle: ", ",
        nonInfoEndStyle: "\n",
    },
};

/**
 * Sets the style options for the level.
 * @param {Object} options
 * @param {string} options.key - The key(s) to update.
 * @param {string} options.value - The value(s) to set.
 * 
 * Currently available options:
 * - level.caseControl: "upper", "lower", "capitalize"
 */
function setLevelStyles(options) {
    traverse(styleOptions.level).forEach(function (x) {
        if (this.key === options.key) {
            this.update(options.value);
        }
    });
}

/**
 * Sets the style options for the event.
 * @param {any} options 
 *
 * Currently available options:
 * - event.prefix: string
 */
function setEventStyles(options) {
    traverse(styleOptions.event).forEach(function (x) {
        if (this.key === options.key) {
            this.update(options.value);
        }
    });
}

/**
 * Sets the style options for the message.
 * @param {any} options 
 *
 * Currently available options:
 * - message.prefixMessage: string
 * - message.indentStyle: string
 * - message.nonInfoIndentStyle: string
 * - message.endStyle: string
 * - message.nonInfoEndStyle: string 
 */
function setMessageStyles(options) {
    traverse(styleOptions.message).forEach(function (x) {
        if (this.key === options.key) {
            this.update(options.value);
        }
    });
}

function stylize({ level, service, event = "", message = [""] }) {
    const _level = (() => {
        const _caseControl = styleOptions.level.caseControl;
        if (_caseControl === "upper") {
            return level.toUpperCase();
        } else if (_caseControl === "lower") {
            return level.toLowerCase();
        } else if (_caseControl === "capitalize") {
            return level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
        } else {
            return level;
        }
    })();

    const _event = (() => {
        if (!event) return "";
        const prefix = styleOptions.event.prefix || "";
        return `${prefix}${event}`;
    })();

    const _message = (() => {
        const {
            prefixMessage,
            indentStyle,
            nonInfoIndentStyle,
            endStyle,
            nonInfoEndStyle,
        } = styleOptions.message;

        // makes everything is a string
        const _normalized = message.map(line => {
            if (typeof line === "object") {
                return JSON.stringify(line, null, 2);
            } else {
                return String(line);
            }
        });

        if (_level !== "INFO") {
            return prefixMessage + _normalized.map(line => `${nonInfoIndentStyle}${line}`).join(nonInfoEndStyle);
        } else {
            return _normalized.map(line => `${indentStyle}${line}`).join(endStyle);
        }
    })();

    return {
        level: _level,
        service,
        event: _event,
        message: _message,
    };
}

let levelColor = {
    debug: chalk.gray.dim,
    info: chalk.cyan,
    warn: chalk.yellow,
    error: chalk.red,
    fatal: chalk.redBright.bold,
    success: chalk.green,
    default: chalk.white,
};

let serviceColor = chalk.blueBright;
let eventColor = chalk.magentaBright;
let messageColor = {
    debug: chalk.gray.dim,
    info: chalk.white,
    warn: chalk.yellow,
    error: chalk.red,
    fatal: chalk.redBright.bold,
};

/**
 * Set the color to the given level.
 * @param {string} level 
 * @param {import("chalk").ChalkInstance} color 
 */
function setLevelColor(level, color) {
    traverse(levelColor).forEach(function (x) {
        if (this.key === level.toLowerCase()) {
            this.update(color);
        }
    });
}

/**
 * Set the color to the given service.
 * @param {import("chalk").ChalkInstance} color 
 */
function setServiceColor(color) {
    serviceColor = color;
}

/**
 * Set the color to the given event.
 * @param {import("chalk").ChalkInstance} color
 */
function setEventColor(color) {
    eventColor = color;
}

/**
 * Set the color to the given level.
 * @param {string} level 
 * @param {import("chalk").ChalkInstance} color
 */
function setMessageColor(level, color) {
    traverse(messageColor).forEach(function (x) {
        if (this.key === level.toLowerCase()) {
            this.update(color);
        }
    });
}

/**
 * @param {string} level - The log level (e.g., "info", "error").
 * @param {string} service - The service name.
 * @param {string} event - The event name (optional).
 * @param {string[]} message - The log message(s) to be colorized. 
 * @returns 
 */
function colorize({ level, service, event = "", message = [""] }) {
    const levelFn = levelColor[level.toLowerCase()] || levelColor.default;
    const messageFn = messageColor[level.toLowerCase()] || chalk.white;

    const _level = levelFn(level);
    const _service = serviceColor(service);
    const _event = event ? eventColor(event) : "";
    const _message = [message].map(line => messageFn(line));

    return {
        level:      _level,
        service:    _service,
        event:      _event,
        message:    _message,
    };
}

/**
 * Remove ANSI color codes from a string.
 * @param {string} str - The string to be decolorized.
 * @returns {string} - The decolorized string.
 */
function decolorize(str) {
    return stripAnsi(str);
}

let _logDir = null;
let _isWrite = true;

/**
 * Set the status if user wants to write to a file.
 * @param {boolean} value - The status if user wants to write to a file.
 */
function setIsWriteFile(value) {
    if (typeof value === "boolean") {
        _isWrite = value;
    }
}

/**
 * Set the path to the log output directory. 
 * @param {string} path - The path to the log output directory, default is "logs/".
 */
function setLogDumpDir(path) {
    _logDir = path || "logs/";
}

/**
 * Get the path to the log output directory.
 * @returns {string} - The path to the log output directory.
 */
function getLogDumpDir() {
    return _logDir;
}

/**
 * Get the status if user wants to write to a file.
 * @returns {boolean} - The status if user wants to write to a file.
 */
function isWriteFile() {
    return _isWrite;
}

/**
 * Write the log to the given path.
 * @param {string} filename - The path to the log file.
 * @param {any} data - The data to write to the log file.
 * @returns 
 */
function writeLogFile(filename, data) {
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

var sprintf = {};

/* global window, exports, define */

var hasRequiredSprintf;

function requireSprintf () {
	if (hasRequiredSprintf) return sprintf;
	hasRequiredSprintf = 1;
	(function (exports) {
		!function() {

		    var re = {
		        not_type: /[^T]/,
		        not_primitive: /[^v]/,
		        number: /[diefg]/,
		        numeric_arg: /[bcdiefguxX]/,
		        json: /[j]/,
		        text: /^[^\x25]+/,
		        modulo: /^\x25{2}/,
		        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
		        key: /^([a-z_][a-z_\d]*)/i,
		        key_access: /^\.([a-z_][a-z_\d]*)/i,
		        index_access: /^\[(\d+)\]/,
		        sign: /^[+-]/
		    };

		    function sprintf(key) {
		        // `arguments` is not an array, but should be fine for this call
		        return sprintf_format(sprintf_parse(key), arguments)
		    }

		    function vsprintf(fmt, argv) {
		        return sprintf.apply(null, [fmt].concat(argv || []))
		    }

		    function sprintf_format(parse_tree, argv) {
		        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign;
		        for (i = 0; i < tree_length; i++) {
		            if (typeof parse_tree[i] === 'string') {
		                output += parse_tree[i];
		            }
		            else if (typeof parse_tree[i] === 'object') {
		                ph = parse_tree[i]; // convenience purposes only
		                if (ph.keys) { // keyword argument
		                    arg = argv[cursor];
		                    for (k = 0; k < ph.keys.length; k++) {
		                        if (arg == undefined) {
		                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
		                        }
		                        arg = arg[ph.keys[k]];
		                    }
		                }
		                else if (ph.param_no) { // positional argument (explicit)
		                    arg = argv[ph.param_no];
		                }
		                else { // positional argument (implicit)
		                    arg = argv[cursor++];
		                }

		                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
		                    arg = arg();
		                }

		                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
		                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
		                }

		                if (re.number.test(ph.type)) {
		                    is_positive = arg >= 0;
		                }

		                switch (ph.type) {
		                    case 'b':
		                        arg = parseInt(arg, 10).toString(2);
		                        break
		                    case 'c':
		                        arg = String.fromCharCode(parseInt(arg, 10));
		                        break
		                    case 'd':
		                    case 'i':
		                        arg = parseInt(arg, 10);
		                        break
		                    case 'j':
		                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0);
		                        break
		                    case 'e':
		                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential();
		                        break
		                    case 'f':
		                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg);
		                        break
		                    case 'g':
		                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg);
		                        break
		                    case 'o':
		                        arg = (parseInt(arg, 10) >>> 0).toString(8);
		                        break
		                    case 's':
		                        arg = String(arg);
		                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
		                        break
		                    case 't':
		                        arg = String(!!arg);
		                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
		                        break
		                    case 'T':
		                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
		                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
		                        break
		                    case 'u':
		                        arg = parseInt(arg, 10) >>> 0;
		                        break
		                    case 'v':
		                        arg = arg.valueOf();
		                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
		                        break
		                    case 'x':
		                        arg = (parseInt(arg, 10) >>> 0).toString(16);
		                        break
		                    case 'X':
		                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase();
		                        break
		                }
		                if (re.json.test(ph.type)) {
		                    output += arg;
		                }
		                else {
		                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
		                        sign = is_positive ? '+' : '-';
		                        arg = arg.toString().replace(re.sign, '');
		                    }
		                    else {
		                        sign = '';
		                    }
		                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' ';
		                    pad_length = ph.width - (sign + arg).length;
		                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : '';
		                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg);
		                }
		            }
		        }
		        return output
		    }

		    var sprintf_cache = Object.create(null);

		    function sprintf_parse(fmt) {
		        if (sprintf_cache[fmt]) {
		            return sprintf_cache[fmt]
		        }

		        var _fmt = fmt, match, parse_tree = [], arg_names = 0;
		        while (_fmt) {
		            if ((match = re.text.exec(_fmt)) !== null) {
		                parse_tree.push(match[0]);
		            }
		            else if ((match = re.modulo.exec(_fmt)) !== null) {
		                parse_tree.push('%');
		            }
		            else if ((match = re.placeholder.exec(_fmt)) !== null) {
		                if (match[2]) {
		                    arg_names |= 1;
		                    var field_list = [], replacement_field = match[2], field_match = [];
		                    if ((field_match = re.key.exec(replacement_field)) !== null) {
		                        field_list.push(field_match[1]);
		                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
		                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
		                                field_list.push(field_match[1]);
		                            }
		                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
		                                field_list.push(field_match[1]);
		                            }
		                            else {
		                                throw new SyntaxError('[sprintf] failed to parse named argument key')
		                            }
		                        }
		                    }
		                    else {
		                        throw new SyntaxError('[sprintf] failed to parse named argument key')
		                    }
		                    match[2] = field_list;
		                }
		                else {
		                    arg_names |= 2;
		                }
		                if (arg_names === 3) {
		                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
		                }

		                parse_tree.push(
		                    {
		                        placeholder: match[0],
		                        param_no:    match[1],
		                        keys:        match[2],
		                        sign:        match[3],
		                        pad_char:    match[4],
		                        align:       match[5],
		                        width:       match[6],
		                        precision:   match[7],
		                        type:        match[8]
		                    }
		                );
		            }
		            else {
		                throw new SyntaxError('[sprintf] unexpected placeholder')
		            }
		            _fmt = _fmt.substring(match[0].length);
		        }
		        return sprintf_cache[fmt] = parse_tree
		    }

		    /**
		     * export to either browser or node.js
		     */
		    /* eslint-disable quote-props */
		    {
		        exports['sprintf'] = sprintf;
		        exports['vsprintf'] = vsprintf;
		    }
		    if (typeof window !== 'undefined') {
		        window['sprintf'] = sprintf;
		        window['vsprintf'] = vsprintf;
		    }
		    /* eslint-enable quote-props */
		}(); // eslint-disable-line 
	} (sprintf));
	return sprintf;
}

var sprintfExports = requireSprintf();

function getCurrentTimestamp() {
    const momentInstance = moment();
    const date = momentInstance.format("YYYY-MM-DD");
    const time = momentInstance.format("h:mm:ss A");
    return { date, timeStamp: `${date} ${time}` };
}

function log(level, service, event, message) {
    const { date, timeStamp } = getCurrentTimestamp();
    const _stylized = stylize({ level, service, event, message });
    const _colored = colorize(_stylized);
    const _formatted = sprintfExports.sprintf("%s | %s | %s %s: %s", timeStamp, _colored.level, _colored.service, _colored.event, _colored.message);

    console.log("%s", _formatted);

    if (isWriteFile()) {
        writeLogFile(`${date}`, decolorize(_formatted));
    }
}

const loggerInstance = {
    /**
     * @param {string} service - The name of the service.
     * @param {string} event - The name of the event.
     * @param {string[]} message - The message to log. 
     */
    info:   (service, event, message) => log("info", service, event, message),
    /**
     * @param {string} service - The name of the service.
     * @param {string} event - The name of the event.
     * @param {string[]} message - The message to log. 
     */
    error:  (service, event, message) => log("error", service, event, message),
    /**
     * @param {string} service - The name of the service.
     * @param {string} event - The name of the event.
     * @param {string[]} message - The message to log. 
     */
    fatal:  (service, event, message) => log("fatal", service, event, message),
    /**
     * @param {string} service - The name of the service.
     * @param {string} event - The name of the event.
     * @param {string[]} message - The message to log. 
     */
    warn:   (service, event, message) => log("warn", service, event, message),
    /**
     * @param {string} service - The name of the service.
     * @param {string} event - The name of the event.
     * @param {string[]} message - The message to log. 
     */
    debug:  (service, event, message) => log("debug", service, event, message),
    /**
     * @param {string} service - The name of the service.
     * @param {string} event - The name of the event.
     * @param {string[]} message - The message to log. 
     */
    success: (service, event, message) => log("success", service, event, message),
};

/**
 * Logger function to create a logger instance.
 * @returns {Object} loggerInstance - The logger instance.
 *
 * ---
 *
 * Currently default prompt format:
 * - "YYYY-MM-DD HH:mm:ss A | level | service > event: message"
 *
 * Currently default color format:
 *
 * level: 
 *     - info: "cyan"
 *     - error: "red"
 *     - fatal: "red"
 *     - warn: "yellow"
 *     - debug: "gray"
 *     - success: "green"
 *
 * service: "blue"
 *
 * event: "magenta"
 *
 * message:
 *     - info: "white"
 *     - error: "red"
 *     - fatal: "red"
 *     - warn: "yellow"
 *     - debug: "gray"
 *     - success: "green"
 */
function Logger() {
    return loggerInstance;
}

exports.Logger = Logger;
exports.getLogDumpDir = getLogDumpDir;
exports.isWriteFile = isWriteFile;
exports.setEventColor = setEventColor;
exports.setEventStyles = setEventStyles;
exports.setIsWriteFile = setIsWriteFile;
exports.setLevelColor = setLevelColor;
exports.setLevelStyles = setLevelStyles;
exports.setLogDumpDir = setLogDumpDir;
exports.setMessageColor = setMessageColor;
exports.setMessageStyles = setMessageStyles;
exports.setServiceColor = setServiceColor;
