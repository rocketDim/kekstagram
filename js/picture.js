import { showBigPicture } from './big-picture.js';

const pictureTemplate = document
    .querySelector('#picture')
    .content.querySelector('.picture');
const container = document.querySelector('.picture');

const createPicture = (data) => {
    const { comments, description, likes, url } = data;
    const picture = pictureTemlate.cloneNode(true);

    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.querySelector('.picture__likes').textContent = likes;

    /*picture.addEventListener('click', function () {
        showBigPicture(data);
    });*/
    return picture;
};

const renderPictures = (pictures) => {
    const fragment = document.createDocumentFragment();
    pictures.forEach((picture) => {
        const pictureElement = createPicture(picture);
        fragment.append(pictureElement);
    });

    container.append(fragment);
}

export { renderPictures };