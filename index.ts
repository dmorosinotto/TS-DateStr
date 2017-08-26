import * as u from "./DateStr";
import * as moment from "moment";
// Examples

const today = u.toDateStr(new Date());
const fourthOfJuly = u.toDateStr('2017-07-04');

console.assert(fourthOfJuly === '2017-07-04', "OK "); // true
var wideningOK: string = fourthOfJuly; //OK u.DateStr -> string
//var cantNarrow: u.DateStr = '2017-07-04'; //TS compile error!
function formatDate(date: u.DateStr) {
  return moment(date).format('DD/MM/YY');
}

//formatDate('foo'); // TS compile error!
formatDate(u.toDateStr('foo')); // runtime error
formatDate(u.toDateStr('2017-07-04')); // 04/07/17