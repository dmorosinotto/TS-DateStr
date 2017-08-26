import * as moment from "moment";

//READ MORE: https://spin.atomicobject.com/2017/06/19/strongly-typed-date-string-typescript/
//ABOUT Nominal Typing: https://basarat.gitbooks.io/typescript/docs/tips/nominalTyping.html
enum DateStrBrand { } //USED TO MARK "BRAND" DISTINCT TYPE "string" TO OTHERS - NOTE: DON'T export THIS ENUM; SO IT'S SAFED PRIVATE
export type DateStr = string & DateStrBrand;


export function checkValidDateStr(str: string): str is DateStr { //TYPE GUARD TO SAFE TEST A DateStr AT RUNTIME
    return str.match(/^\d{4}-\d{2}-\d{2}$/) !== null;
}

export function toDateStr(date: Date | moment.Moment | string): DateStr {
    if (typeof date === 'string') {
      if (checkValidDateStr(date)) {
        return date;
      } else {
        throw new Error(`Invalid date string: ${date}`);
      }
    } else {
      const dateString = moment(date).format('YYYY-MM-DD');
      if (checkValidDateStr(dateString)) {
        return dateString;
      }
    }
    throw new Error(`Shouldn't get here (invalid toDateStr provided): ${date}`);
}
  