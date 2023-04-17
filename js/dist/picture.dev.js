"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPictures = void 0;

var _bigPicture = require("./big-picture.js");

var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
var container = document.querySelector('.picture');

var createPicture = function createPicture(data) {
  var comments = data.comments,
      description = data.description,
      likes = data.likes,
      url = data.url;
  var picture = pictureTemlate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  /*picture.addEventListener('click', function () {
      showBigPicture(data);
  });*/

  return picture;
};

var renderPictures = function renderPictures(pictures) {
  var fragment = document.createDocumentFragment();
  pictures.forEach(function (picture) {
    var pictureElement = createPicture(picture);
    fragment.append(pictureElement);
  });
  container.append(fragment);
};

exports.renderPictures = renderPictures;