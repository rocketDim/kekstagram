"use strict";

function getRandomPositiveInteger(a, b) {
  var lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  var upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  var result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
} // eslint-disable-next-line no-unused-vars


function checkStringLength(string, length) {
  return string.length <= length;
}

checkStringLength('', 12);
getRandomPositiveInteger(4, 6);