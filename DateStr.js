"use strict";
exports.__esModule = true;
var moment = require("moment");
//READ MORE: https://spin.atomicobject.com/2017/06/19/strongly-typed-date-string-typescript/
//ABOUT Nominal Typing: https://basarat.gitbooks.io/typescript/docs/tips/nominalTyping.html
var DateStrBrand;
(function (DateStrBrand) {
})(DateStrBrand || (DateStrBrand = {})); //USED TO MARK "BRAND" DISTINCT TYPE "string" TO OTHERS - NOTE: DON'T export THIS ENUM; SO IT'S SAFED PRIVATE
function checkValidDateStr(str) {
    return str.match(/^\d{4}-\d{2}-\d{2}$/) !== null;
}
exports.checkValidDateStr = checkValidDateStr;
function toDateStr(date) {
    if (typeof date === 'string') {
        if (checkValidDateStr(date)) {
            return date;
        }
        else {
            throw new Error("Invalid date string: " + date);
        }
    }
    else {
        var dateString = moment(date).format('YYYY-MM-DD');
        if (checkValidDateStr(dateString)) {
            return dateString;
        }
    }
    throw new Error("Shouldn't get here (invalid toDateStr provided): " + date);
}
exports.toDateStr = toDateStr;
