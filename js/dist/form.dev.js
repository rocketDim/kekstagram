"use strict";

var form = document.querySelector('.img-upload__form');
var overlay = document.querySelector('.img-upload__overlay');
var body = document.querySelector('body');
var cancelButton = document.querySelector('#upload-cancel');
var fileField = document.querySelector('#upload-file');
var hashtagField = document.querySelector('.text__hashtags');
var commentField = document.querySelector('.text__description');
var MAX_HASHTAG_COUNT = 5;
var MIN_HASHTAG_LENGTH = 2;
var MAX_HASHTAG_LENGTH = 20;
var UNVALID_SYMBOLS = /[^a-zA-Z0-9а-яА-ЯёЁ]/g;
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
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

var isTextFieldFocused = function isTextFieldFocused() {
  return document.activeElement === hashtagField || document.activeElement === commentField;
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

var onCancelButtonClick = function onCancelButtonClick() {
  hideModal();
};

var onFileInputChange = function onFileInputChange() {
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

pristine.addValidator(hashtagField, validateTags, 'Неправильно заполнены хэштеги');

var onFormSubmit = function onFormSubmit(evt) {
  evt.preventDefault();
  pristine.validate();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);