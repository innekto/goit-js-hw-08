import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareatEl = document.querySelector('textarea');


formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onSubmitForm);

populateForm();

const data = {
    email: '',
    message: '',
}

function onFormInput({ target }) {
    if (target.nodeName === 'INPUT') {
        data.email = target.value;
    }
    if (target.nodeName === 'TEXTAREA') {
        data.message = target.value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function populateForm() {
    const saveData = JSON.parse(localStorage.getItem('feedback-form-state'))
    // console.log(saveData);
    if (saveData) {
        inputEl.value = saveData.email;
        textareatEl.value = saveData.message;
    }
}

function onSubmitForm(e) {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem('feedback-form-state')
    console.log(data);
}

