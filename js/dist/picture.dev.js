"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPictures = void 0;

var _bigPicture = require("./big-picture.js");

var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
var container = document.querySelector('.pictures');

var createPicture = function createPicture(data) {
  var comments = data.comments,
      description = data.description,
      likes = data.likes,
      url = data.url;
  var picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.addEventListener('click', function () {
    (0, _bigPicture.showBigPicture)(data);
  });
  return picture;
};

var renderPictures = function renderPictures(pictures) {
  container.querySelectorAll('.picture').forEach(function (element) {
    return element.remove();
  });
  var fragment = document.createDocumentFragment();
  pictures.forEach(function (picture) {
    var pictureElement = createPicture(picture);
    fragment.append(pictureElement);
  });
  container.append(fragment);
};

exports.renderPictures = renderPictures;