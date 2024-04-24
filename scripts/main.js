let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

let myButton = document.getElementById('button1');
let body = document.querySelector('body');
let previousColor = null; // зберігаємо попередній колір фону

function toggleBackgroundColor() {
  if (body.style.backgroundColor !== 'purple') {
    previousColor = body.style.backgroundColor; // зберігаємо попередній колір
    body.style.backgroundColor = 'purple'; // змінюємо фон на фіолетовий
    myButton.textContent = 'Change Color'; // змінюємо текст кнопки
  } else {
    body.style.backgroundColor = previousColor; // повертаємо попередній колір
    myButton.textContent = 'Purple Background'; // змінюємо текст кнопки
  }
}

myButton.onclick = function() {
  toggleBackgroundColor(); // викликаємо функцію при кожному кліку на кнопку
}
