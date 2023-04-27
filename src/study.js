// console.log(innerWidth) // показывает ширину браузера
// console.log(location) // Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/something.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
// document // в его зоне ответственности всё что хранится между html тегом, то есть вся разметка. 
// console.log(navigator) // Navigator {vendorSub: '', productSub: '20030107', vendor: 'Google Inc.', maxTouchPoints: 0, scheduling: Scheduling, …}
// Создать div 
const div = document.createElement('div');
// Добавить к нему класс wrapper
div.classList.add('wrapper')
// Поместить его внутрь тэга body
const body = document.querySelector('body'); // или можно записать другим методом
body.appendChild(div);
// const body = document.body 
// Создать заголовок H1 "DOM (Document Object Model)"
const header = document.createElement('h1');
header.textContent = "DOM (Document Object Model)";
// Добавить H1 перед DIV с классом wrapper 
div.insertAdjacentElement('beforebegin', header);
// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"
const ul = `
    <ul>
        <li>один</li>
        <li>два</li>
        <li>три</li>
    </ul>
`;
// Поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;
// ============================================================
// Создать изображение
const img = document.createElement('img');
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.src = 'https://picsum.photo/240';
// 2. Добавить атрибут width со значением 240
img.width = 240;
// 3. Добавить класс super
img.classList.add('super');
// 4. Добавить свойство alt со значением "Super Man"
img.alt = 'Super Man';
// Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img)
// Используя HTML строку, создать DIV с классом 'pDiv' + с 2-мя параграфами

// Поместить этот DIV до элемента <ul></ul>

// Добавить для 2-го параграфа класс text

// Удалить 1-й параграф

// Создать функцию generateAutoCard, которая принимает 3 аргумента: Brand, color, year