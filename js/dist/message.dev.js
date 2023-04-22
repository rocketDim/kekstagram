"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showErrorMessage = exports.showSuccessMessage = void 0;
var successMessage = document.querySelector('#success').content.querySelector('.success');
var errorMessage = document.querySelector('#error').content.querySelector('.error');
var body = document.querySelector('body');

var showSuccessMessage = function showSuccessMessage() {
  body.append(successMessage);
  body.addEventListener('keydown', onEscDown);
  body.addEventListener('click', onBodyClick);
  successMessage.querySelector('.success__button').addEventListener('click', hideMessage);
};

exports.showSuccessMessage = showSuccessMessage;

var showErrorMessage = function showErrorMessage() {
  body.append(errorMessage);
  body.addEventListener('keydown', onEscDown);
  errorMessage.querySelector('.error__button').addEventListener('click', hideMessage);
};

exports.showErrorMessage = showErrorMessage;

function hideMessage() {
  var messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  body.removeEventListener('keydown', onEscDown);
  body.removeEventListener('click', onBodyClick);
}

function onBodyClick(evt) {
  if (evt.target.closest('.success__inner') || evt.target.closest('.error__inner')) {
    return;
  }

  hideMessage();
}

function onEscDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
    hideMessage();
  }
}