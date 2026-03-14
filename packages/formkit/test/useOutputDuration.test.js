"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var composables_1 = require("../src/composables");
(0, vitest_1.it)('durationToMinutes', function () {
    var durationToMinutes = (0, composables_1.useOutputDuration)().durationToMinutes;
    (0, vitest_1.expect)(durationToMinutes('2h')).toBe(120);
    (0, vitest_1.expect)(durationToMinutes('40m')).toBe(40);
    (0, vitest_1.expect)(durationToMinutes('2h20m')).toBe(140);
    (0, vitest_1.expect)(durationToMinutes('2:40')).toBe(160);
});
(0, vitest_1.it)('formattedDuration', function () {
    var formattedDuration = (0, composables_1.useOutputDuration)().formattedDuration;
    (0, vitest_1.expect)(formattedDuration('120m')).toBe('2h');
    (0, vitest_1.expect)(formattedDuration('40m')).toBe('40m');
    (0, vitest_1.expect)(formattedDuration('140m')).toBe('2h 20m');
});
(0, vitest_1.it)('handles empty duration string', function () {
    var durationToMinutes = (0, composables_1.useOutputDuration)().durationToMinutes;
    (0, vitest_1.expect)(durationToMinutes('')).toBe(0);
});
(0, vitest_1.it)('handles hours-only duration', function () {
    var durationToMinutes = (0, composables_1.useOutputDuration)().durationToMinutes;
    (0, vitest_1.expect)(durationToMinutes('3h')).toBe(180);
});
(0, vitest_1.it)('handles minutes-only duration', function () {
    var durationToMinutes = (0, composables_1.useOutputDuration)().durationToMinutes;
    (0, vitest_1.expect)(durationToMinutes('45m')).toBe(45);
});
(0, vitest_1.it)('handles colon-separated hours and minutes', function () {
    var durationToMinutes = (0, composables_1.useOutputDuration)().durationToMinutes;
    (0, vitest_1.expect)(durationToMinutes('1:30')).toBe(90);
});
(0, vitest_1.it)('handles text format hours and minutes', function () {
    var durationToMinutes = (0, composables_1.useOutputDuration)().durationToMinutes;
    (0, vitest_1.expect)(durationToMinutes('2h15m')).toBe(135);
});
(0, vitest_1.it)('returns original string for invalid input', function () {
    var formattedDuration = (0, composables_1.useOutputDuration)().formattedDuration;
    (0, vitest_1.expect)(formattedDuration('invalid')).toBe('0');
});
(0, vitest_1.it)('formats minutes-only duration', function () {
    var formattedDuration = (0, composables_1.useOutputDuration)().formattedDuration;
    (0, vitest_1.expect)(formattedDuration('45m')).toBe('45m');
});
(0, vitest_1.it)('formats hours-only duration', function () {
    var formattedDuration = (0, composables_1.useOutputDuration)().formattedDuration;
    (0, vitest_1.expect)(formattedDuration('120m')).toBe('2h');
});
(0, vitest_1.it)('formats hours and minutes duration', function () {
    var formattedDuration = (0, composables_1.useOutputDuration)().formattedDuration;
    (0, vitest_1.expect)(formattedDuration('135M')).toBe('2h 15m');
});
(0, vitest_1.it)('handles non-numeric duration values', function () {
    var durationToMinutes = (0, composables_1.useOutputDuration)().durationToMinutes;
    (0, vitest_1.expect)(durationToMinutes('h')).toBe(0);
    (0, vitest_1.expect)(durationToMinutes('m')).toBe(0);
});
