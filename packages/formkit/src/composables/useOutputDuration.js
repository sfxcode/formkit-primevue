"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOutputDuration = useOutputDuration;
function useOutputDuration() {
    function durationToMinutes(duration) {
        var _a, _b, _c;
        var hours = 0;
        var minutes = 0;
        var lowerDuration = duration.toLowerCase();
        if (lowerDuration.includes(":")) {
            var _d = lowerDuration.split(":").map(function (part) { return +((part === null || part === void 0 ? void 0 : part.trim()) || "0"); }), h = _d[0], m = _d[1];
            hours = h !== null && h !== void 0 ? h : 0;
            minutes = m !== null && m !== void 0 ? m : 0;
        }
        else {
            if (lowerDuration.includes("h")) {
                hours = +(((_a = lowerDuration.split("h")[0]) === null || _a === void 0 ? void 0 : _a.trim()) || "0");
                var remainder = lowerDuration.split("h")[1] || "";
                if (remainder.includes("m"))
                    minutes = +(((_b = remainder.split("m")[0]) === null || _b === void 0 ? void 0 : _b.trim()) || "0");
                else if (/^\d+$/.test(remainder))
                    minutes = +remainder;
            }
            else if (lowerDuration.includes("m")) {
                minutes = +(((_c = lowerDuration.split("m")[0]) === null || _c === void 0 ? void 0 : _c.trim()) || "0");
            }
            else if (/^\d+$/.test(lowerDuration)) {
                minutes = +lowerDuration;
            }
        }
        return hours * 60 + minutes;
    }
    function formattedDuration(duration) {
        var minutes = durationToMinutes(duration);
        var hours = Math.trunc(minutes / 60);
        var remainingMinutes = minutes % 60;
        if (minutes === 0)
            return "0";
        return "".concat(hours > 0 ? "".concat(hours, "h") : "").concat(hours > 0 && remainingMinutes > 0 ? " " : "").concat(remainingMinutes > 0 ? "".concat(remainingMinutes, "m") : "");
    }
    return { durationToMinutes: durationToMinutes, formattedDuration: formattedDuration };
}
