import { renderPictures } from './picture.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js'

const onSendDataSucces = () => {
    hideModal();
    showSuccessMessage();
};

const onSendDataError = () => {
    showErrorMessage();
};

setOnFormSubmit(async (data) => {
    await sendData(onSendDataSucces, onSendDataError, data);
});

getData(renderPictures, showAlert);
