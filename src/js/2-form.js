// Виконуй це завдання у файлах 2-form.html і 2-form.js. Розбий його на декілька підзавдань:

// Оголоси поза будь-якими функціями об’єкт formData з полями email та message,
// які спочатку мають порожні рядки як значення: { email: "", message: "" }.

// Використовуй метод делегування для відстеження змін у формі через подію input.
// Зберігай актуальні дані з полів email та message у formData та записуй цей об’єкт у локальне сховище.
// Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.

// При завантаженні сторінки перевір, чи є дані у локальному сховищі.
// Якщо так, використовуй їх для заповнення форми та об'єкта formData. Якщо ні, залиш поля форми порожніми.

// Перед відправленням форми переконайся, що обидва поля форми заповнені.
// Якщо будь-яке з полів (властивостей об’єкта formData) порожнє, показуй сповіщення з текстом «Fill please all fields».
// Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями, очисти локальне сховище, об’єкт formData і поля форми.

//===============================================================================================================================================//

const form = document.querySelector('.feedback-form');

// form.addEventListener('input', handleInput);
// populateText();

const formData = {
  email: '',
  massage: '',
};

// function handleInput(event) {
//   const key = event.target.name;

//   formData[key] = event.target.value;

//   localStorage.setItem(JSON.stringify(formData));
// }

// function populateText() {
//   const data = JSON.parse(localStorage.getItem());
//   if (!data) {
//     return;
//   }
//   const { email, massage } = form.elements;

//   email.value = data.email;
//   massage.value = data.massage;
// }

// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'goit-example-message';

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });
