const Url = document.querySelector('#Url');

Url.onclick = function (event) {
const newUrl = prompt('Введите новый текст для ссылки');
Url.textContent = newUrl;
event.preventDefault()

} 