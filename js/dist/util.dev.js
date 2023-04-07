"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomArrayElement = exports.checkStringLength = exports.getRandomPositiveInteger = void 0;

var getRandomPositiveInteger = function getRandomPositiveInteger(a, b) {
  var lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  var upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  var result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

exports.getRandomPositiveInteger = getRandomPositiveInteger;

var checkStringLength = function checkStringLength(string, length) {
  return string.length <= length;
};

exports.checkStringLength = checkStringLength;

var getRandomArrayElement = function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

exports.getRandomArrayElement = getRandomArrayElement;