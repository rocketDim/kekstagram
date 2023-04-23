"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterPictures = exports.turnFilterOn = exports.setOnFilterClick = void 0;

var _util = require("./util.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var PICTURES_COUNT = 10;
var Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};
var filtersElement = document.querySelector('.img-filters');
var currentFilter = '';
var pictures = [];

var randomSort = function randomSort() {
  return Math.random() - 0.5;
};

var discussedSort = function discussedSort(pictureA, pictureB) {
  return pictureB.comments.length - pictureA.comments.length;
};

var filterPictures = function filterPictures() {
  switch (currentFilter) {
    case Filter.RANDOM:
      return _toConsumableArray(pictures).sort(randomSort).slice(0, PICTURES_COUNT);

    case Filter.DISCUSSED:
      return _toConsumableArray(pictures).sort(discussedSort);

    default:
      return _toConsumableArray(pictures);
  }
};

exports.filterPictures = filterPictures;

var turnFilterOn = function turnFilterOn(loadedPictures) {
  filtersElement.classList.remove('img-filters--inactive');
  pictures = _toConsumableArray(loadedPictures);
  currentFilter = Filter.DEFAULT;
};

exports.turnFilterOn = turnFilterOn;

var setOnFilterClick = function setOnFilterClick(cb) {
  var debouncedCallback = (0, _util.debounce)(cb);
  filtersElement.addEventListener('click', function (evt) {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    var clickedButton = evt.target;

    if (clickedButton.id === currentFilter) {
      return;
    }

    filtersElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    currentFilter = clickedButton.id;
    debouncedCallback(filterPictures());
  });
};

exports.setOnFilterClick = setOnFilterClick;