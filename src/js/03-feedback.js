import throttle from 'lodash.throttle';
const LOCALSTORAGEITEM = 'form';
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputMessage = document.querySelector('textarea[name="message"]');

if (!localStorage.getItem(LOCALSTORAGEITEM)) {
  localStorage.setItem(LOCALSTORAGEITEM, JSON.stringify({}));
}

let copyOfLocalStorage = JSON.parse(
  localStorage.getItem(LOCALSTORAGEITEM) ?? {}
);

if (Object.keys(copyOfLocalStorage).length) insertTextInInputs();

form.addEventListener('input', throttle(onInputForm, 200));
form.addEventListener('submit', throttle(onSubmitForm, 200));

function onSubmitForm(e) {
  e.preventDefault();
  if (copyOfLocalStorage.email.length && copyOfLocalStorage.message.length) {
    form.reset();
    copyOfLocalStorage = {};
    updateLocalStorage();
  } else alert('Не всі поля заповнені');
}

function onInputForm(e) {
  copyOfLocalStorage[e.target.name] = e.target.value;
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem(LOCALSTORAGEITEM, JSON.stringify(copyOfLocalStorage));
}

function insertTextInInputs() {
  inputEmail.value = copyOfLocalStorage.email || '';
  inputMessage.value = copyOfLocalStorage.message || '';
}
