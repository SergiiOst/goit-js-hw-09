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

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

const savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
  const { email, message } = JSON.parse(savedFormData);
  formData.email = email || '';
  formData.message = message || '';
  populateText();
}

function handleInput(event) {
  const key = event.target.name;
  formData[key] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateText() {
  const { email, message } = formData;
  form.elements.email.value = email;
  form.elements.message.value = message;
}

function handleSubmit(event) {
  event.preventDefault();
  if (!validateForm()) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

function validateForm() {
  return formData.email && formData.message;
}
