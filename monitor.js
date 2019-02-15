'use strict';
exports.__esModule = true;
var initial = process.hrtime();
var processType = process.type; // browser or renderer
var lenType = 8;
var lenCategory = 12;
var lenName = 20;
function format(category, name) {
    var t = process.hrtime(initial);
    return "[time][" + pad(processType, lenType) + "][" + pad(category, lenCategory) + "] " + pad(name, lenName) + ": " + t[0] + "," + t[1];
}
exports.format = format;
function pad(text, len) {
    return len - text.length > 0 ?
        "" + text + ' '.repeat(len - text.length) :
        text.substring(0, len);
}
