import { getRandomPositiveInteger, checkStringLength, getRandomArrayElement } from './util.js';



const MESSAGE = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
]

const NAME = [
    'Артем',
    'Дима',
    'Саша',
    'Таня',
    'Чебурашка',
]

const DESCRIPTIONS = [
    'Летний чил на югах. #тай #отдых #лето #summergram',
    'Тестим камеру! #camera #test #new #instaphoto',
    'Затусили с друзьями  #laptevsea #north #northeastpassage',
    'Круто тут кормят #food #foodgram #instafood #delicious #yummy',
    'Отых... #chill #relax #group #photo',
    'Цените тех, кто рядом с вами....',
    'Вот это тачка! #wow #car',
    '#fun #party #cool #young',
    'Милотааааа',
    'Хорошо, когда в жизни есть друзья',
    'Норм',
]


/*const description = (index) => {

    return {
        id: index,
        avatar: `img/avatar - ${getRandomPositiveInteger(1, 6)}.svg`,
        message: getRandomArrayElement(MESSAGE),
        name: getRandomArrayElement(NAME),
    };
};*/

const createPicture = (index) => {
    return {
        id: index,
        name: getRandomArrayElement(NAME),
        url: `photos/${index}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
        likes: getRandomPositiveInteger(12, 150),
        comments: getRandomArrayElement(MESSAGE),
    }
};

const getPictures = () =>
    Array.from({ length: 25 }, (_, pictureIndex) =>
        createPicture(pictureIndex + 1)
    );

export { getPictures };