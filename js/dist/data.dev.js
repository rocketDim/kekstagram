"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPictures = void 0;

var _util = require("./util.js");

var MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'];
var NAME = ['Артем', 'Дима', 'Саша', 'Таня', 'Чебурашка'];
var DESCRIPTIONS = ['Летний чил на югах. #тай #отдых #лето #summergram', 'Тестим камеру! #camera #test #new #instaphoto', 'Затусили с друзьями  #laptevsea #north #northeastpassage', 'Круто тут кормят #food #foodgram #instafood #delicious #yummy', 'Отых... #chill #relax #group #photo', 'Цените тех, кто рядом с вами....', 'Вот это тачка! #wow #car', '#fun #party #cool #young', 'Милотааааа', 'Хорошо, когда в жизни есть друзья', 'Норм'];
/*const description = (index) => {

    return {
        id: index,
        avatar: `img/avatar - ${getRandomPositiveInteger(1, 6)}.svg`,
        message: getRandomArrayElement(MESSAGE),
        name: getRandomArrayElement(NAME),
    };
};*/

var createPicture = function createPicture(index) {
  return {
    id: index,
    name: (0, _util.getRandomArrayElement)(NAME),
    url: "photos/".concat(index, ".jpg"),
    description: (0, _util.getRandomArrayElement)(DESCRIPTIONS),
    likes: (0, _util.getRandomPositiveInteger)(12, 150),
    comments: (0, _util.getRandomArrayElement)(MESSAGE)
  };
};

var getPictures = function getPictures() {
  return Array.from({
    length: 25
  }, function (_, pictureIndex) {
    return createPicture(pictureIndex + 1);
  });
};

exports.getPictures = getPictures;