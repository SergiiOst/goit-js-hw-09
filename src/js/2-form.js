// Виконуй це завдання у файлах 2-form.html і 2-form.js. Розбий його на декілька підзавдань:

// Оголоси поза будь-якими функціями об’єкт formData з полями email та message,            -------------
// які спочатку мають порожні рядки як значення: { email: "", message: "" }.               -------------

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

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

populateText();

const formData = {
  email: '',
  message: '',
};

function handleInput(event) {
  const key = event.target.name;

  formData[key] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateText() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!data) {
    return;
  }
  const { email, message } = form.elements;

  email.value = data.email;
  message.value = data.message;
}

function validateForm() {
  const trimmedEmail = formData.email.trim();
  const trimmedMessage = formData.message.trim();
  return trimmedEmail !== '' && trimmedMessage !== '';
}

function handleSubmit(event) {
  event.preventDefault();
  if (!validateForm()) {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
