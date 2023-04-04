"use strict";

/*function getRandomPositiveInteger(a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// eslint-disable-next-line no-unused-vars
function checkStringLength(string, length) {
  return string.length <= length;
}
checkStringLength('', 12);
getRandomPositiveInteger(4, 6);*/
var ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var AVATAR = ['img/avatar-1.svg', 'img/avatar-2.svg', 'img/avatar-3.svg', 'img/avatar-4.svg', 'img/avatar-5.svg', 'img/avatar-6.svg'];
var MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'];
var NAME = ['Артем', 'Дима', 'Саша', 'Таня', 'Чебурашка'];

var getRandomPositiveInteger = function getRandomPositiveInteger(a, b) {
  var lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  var upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  var result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

var getRandomArrayElement = function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

var description = function description() {
  return {
    id: getRandomArrayElement(ID),
    avatar: getRandomArrayElement(AVATAR),
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME)
  };
};

var similarDescription = Array.from({
  length: 4
}, description);
console.log(description());