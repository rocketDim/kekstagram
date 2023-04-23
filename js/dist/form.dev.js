"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideModal = exports.setOnFormSubmit = void 0;

var _scale = require("./scale.js");

var _effect = require("./effect.js");

var form = document.querySelector('.img-upload__form');
var overlay = document.querySelector('.img-upload__overlay');
var body = document.querySelector('body');
var cancelButton = document.querySelector('#upload-cancel');
var fileField = document.querySelector('#upload-file');
var hashtagField = document.querySelector('.text__hashtags');
var commentField = document.querySelector('.text__description');
var submitButton = form.querySelector('.img-upload__submit');
var photoPreview = document.querySelector('.img-upload__preview img');
var effectsPreviews = document.querySelectorAll('.effects__preview');
var MAX_HASHTAG_COUNT = 5;
var MIN_HASHTAG_LENGTH = 2;
var MAX_HASHTAG_LENGTH = 20;
var UNVALID_SYMBOLS = /[^a-zA-Z0-9а-яА-ЯёЁ]/g;
var FILE_TYPES = ['jpg', 'jpeg', 'png'];
var pristine = new Pristine(form, {
  classTo: 'img-upload__element',
  errorTextParent: 'img-upload__element',
  errorTextClass: 'img-upload__error'
});

var showModal = function showModal() {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

var hideModal = function hideModal() {
  form.reset();
  (0, _scale.resetScale)();
  (0, _effect.resetEffects)();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

exports.hideModal = hideModal;

var isTextFieldFocused = function isTextFieldFocused() {
  return document.activeElement === hashtagField || document.activeElement === commentField;
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

var isValidType = function isValidType(file) {
  var fileName = file.name.toLowerCase();
  return FILE_TYPES.some(function (it) {
    return fileName.endsWith(it);
  });
};

var onCancelButtonClick = function onCancelButtonClick() {
  hideModal();
};

var onFileInputChange = function onFileInputChange() {
  var file = fileField.files[0];

  if (file && isValidType(file)) {
    photoPreview.src = URL.createObjectURL(file);
    effectsPreviews.forEach(function (preview) {
      preview.style.backgroundImage = "url('".concat(photoPreview.src, "')");
    });
  }

  showModal();
};

var startsWithHash = function startsWithHash(string) {
  return string[0] === '#';
};

var hasValidLength = function hasValidLength(string) {
  return string.length >= MIN_HASHTAG_LENGTH && string.length <= MAX_HASHTAG_LENGTH;
};

var hasValidSymbols = function hasValidSymbols(string) {
  return !UNVALID_SYMBOLS.test(string.slice(1));
};

var isValidTag = function isValidTag(tag) {
  return startsWithHash(tag) && hasValidLength(tag) && hasValidSymbols(tag);
};

var hasValidCount = function hasValidCount(tags) {
  return tags.length <= MAX_HASHTAG_COUNT;
};

var hasUniqueTags = function hasUniqueTags(tags) {
  var lowerCaseTags = tags.map(function (tag) {
    return tag.toLowerCase();
  });
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

var validateTags = function validateTags(value) {
  var tags = value.trim().split(' ').filter(function (tag) {
    return tag.trim().length;
  });
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

var blockSubmitButton = function blockSubmitButton() {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

var unblockSubmitButton = function unblockSubmitButton() {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

pristine.addValidator(hashtagField, validateTags, 'Неправильно заполнены хэштеги');

var setOnFormSubmit = function setOnFormSubmit(cb) {
  form.addEventListener('submit', function _callee(evt) {
    var isValid;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            evt.preventDefault();
            isValid = pristine.validate();

            if (!isValid) {
              _context.next = 7;
              break;
            }

            blockSubmitButton();
            _context.next = 6;
            return regeneratorRuntime.awrap(cb(new FormData(form)));

          case 6:
            unblockSubmitButton();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  });
};

exports.setOnFormSubmit = setOnFormSubmit;
fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);