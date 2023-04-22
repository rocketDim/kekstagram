"use strict";

var _picture = require("./picture.js");

var _api = require("./api.js");

var _util = require("./util.js");

var _form = require("./form.js");

var _message = require("./message.js");

var onSendDataSucces = function onSendDataSucces() {
  (0, _form.hideModal)();
  (0, _message.showSuccessMessage)();
};

var onSendDataError = function onSendDataError() {
  (0, _message.showErrorMessage)();
};

(0, _form.setOnFormSubmit)(function _callee(data) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _api.sendData)(onSendDataSucces, onSendDataError, data));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
});
(0, _api.getData)(_picture.renderPictures, _util.showAlert);