"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showAlert = exports.getRandomArrayElement = exports.checkStringLength = exports.getRandomPositiveInteger = void 0;

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

var getRandomArrayElement = function getRandomArrayElement(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
};

exports.getRandomArrayElement = getRandomArrayElement;

var showAlert = function showAlert(message) {
  var alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);
  setTimeout(function () {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

exports.showAlert = showAlert;