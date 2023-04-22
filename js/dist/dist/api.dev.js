"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendData = exports.getData = void 0;

var getData = function getData(onSuccess, onFail) {
  var response, offers;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://25.javascript.pages.academy/kekstagram/data'));

        case 3:
          response = _context.sent;

          if (response.ok) {
            _context.next = 6;
            break;
          }

          throw new Error('Не удалось загрузить фотографии');

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          offers = _context.sent;
          onSuccess(offers);
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          onFail(_context.t0.message);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

exports.getData = getData;

var sendData = function sendData(onSuccess, onFail, body) {
  var response;
  return regeneratorRuntime.async(function sendData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch('https://25.javascript.pages.academy/kekstagram', {
            method: 'POST',
            body: body
          }));

        case 3:
          response = _context2.sent;

          if (response.ok) {
            _context2.next = 6;
            break;
          }

          throw new Errors('Не удалось отправить форму. Попробуйте ещё раз');

        case 6:
          onSuccess();
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          onFail(_context2.t0.message);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.sendData = sendData;