'use strict';
exports.__esModule = true;
var initial = process.hrtime();
var processType = process.type; // browser or renderer
// length
var lenType = 8;
var lenCategory = 8;
var lenName = 20;
function format(category, name) {
    var t = process.hrtime(initial);
    var t0 = ('00' + t[0]).slice(-8);
    var t1 = ('000000000' + t[1]).slice(-8);
    return "[time][" + pad(processType, lenType) + "][" + pad(category, lenCategory) + "] " + pad(name, lenName) + ": " + t0 + "," + t1;
}
exports.format = format;
function pad(text, len) {
    return len - text.length > 0 ?
        "" + text + ' '.repeat(len - text.length) :
        text.substring(0, len);
}
