"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = exports.showAlert = exports.getRandomArrayElement = exports.checkStringLength = exports.getRandomPositiveInteger = void 0;

var _this = void 0;

var ALERT_SHOW_TIME = 5000;

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

var debounce = function debounce(callback) {
  var timeoutDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var timeoutId;
  return function () {
    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      return callback.apply(_this, rest);
    }, timeoutDelay);
  };
};

exports.debounce = debounce;