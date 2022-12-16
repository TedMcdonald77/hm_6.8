const input = document.querySelector('#input');

const button = document.querySelector('#button');

const duplicateField = document.querySelector('#duplicateField');


input.addEventListener('input', (e) => {
duplicateField.textContent = input.value;
});

button.addEventListener('click', (e) => {
e.preventDefault();

console.log(input.value);
input.value = '';
duplicateField.textContent = '';
});
