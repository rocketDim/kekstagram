"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showBigPicture = void 0;
var bigPicture = document.querySelector('.big-picture');
var commentCount = document.querySelector('.social__comment-count');
var commentList = document.querySelector('.social__comments');
var commentsLoader = document.querySelector('.comments-loader');
var body = document.querySelector('body');
var cancelButton = document.querySelector('.big-picture__cancel');

var createComment = function createComment(_ref) {
  var avatar = _ref.avatar,
      name = _ref.name,
      message = _ref.message;
  var comment = document.createElement('li');
  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.classList.add('social__comment');
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

var renderComments = function renderComments(comments) {
  commentList.innerHTML = '';
  var fragment = document.createDocumentFragment();
  comments.forEach(function (comment) {
    var commentElement = createComment(comment);
    fragment.append(commentElement);
  });
  commentList.append(fragment);
};

var hideBigPicture = function hideBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

var onCancelButtonClick = function onCancelButtonClick() {
  hideBigPicture();
};

var renderPictureDetails = function renderPictureDetails(_ref2) {
  var url = _ref2.url,
      likes = _ref2.likes,
      description = _ref2.description;
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

var showBigPicture = function showBigPicture(data) {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentCount.classList.add('hidden');
  document.addEventListener('keydown', onEscKeyDown);
  renderPictureDetails(data);
  renderComments(data.comments);
};

exports.showBigPicture = showBigPicture;
cancelButton.addEventListener('click', onCancelButtonClick);