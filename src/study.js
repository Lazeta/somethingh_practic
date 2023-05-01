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



const bodyElement = document.body;
const lastElement = bodyElement.lastChild;
console.log(lastElement)
const childNodes = bodyElement.childNodes;
console.log(childNodes)
console.log(bodyElement.hasChildNodes());
for (let node of childNodes) {
    console.log(node);
}
const bodyChildren = bodyElement.children;
console.log(bodyChildren)

const previousSiblingNode = bodyElement.previousSibling; // обращение к предыдущему узлу объекта
const nextSiblingNode = bodyElement.nextSibling; // обращение к следующему узлу объекта
const parentNode = bodyElement.parentNode; // обращение к непосредственному родителю узла
console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);

// Первый и последний дочерние элементы
const firstChild = bodyElement.firstElementChild; 
const lastChild = bodyElement.lastElementChild;
// console.log(firstChild)
// console.log(lastChild)

const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;
// console.log(previousSibling)
// console.log(nextSibling)
// console.log(parentElement)

// Поиск по селектору класса
const elemsOne = document.querySelectorAll('.burger__menu');
// console.log(elemsOne)
// Поиск по селектору тега
const elemsTwo = document.querySelectorAll('li');
// console.log(elemsTwo)
// Поиск по смешанному селектору тега и класса
const elemsThree = document.querySelectorAll('li.about-us__item');
// console.log(elemsThree)
// Поиск по тегу первого уровня вложенности
const elemsFour = document.querySelectorAll('.nav-menu>li');
// console.log(elemsFour)
// Поиск по нескольким классам
const elemsFive = document.querySelectorAll('.burger__menu, .welcome__container');
// console.log(elemsFive)
// Поиск по вложенным классам
const elemsSix = document.querySelectorAll('.welcome__container .welcome__container__img');
// console.log(elemsSix)
// Поиск по ID
const elemsSeven = document.querySelectorAll('#Home');
// console.log(elemsSeven)
// Поиск по атрибуту в html абсолютно любым может быть атрибут к которому мы можем обратиться <li data-item="40"></li>
const elemsEight = document.querySelectorAll('[data-item]');
// console.log(elemsEight)
// Поиск по атрибуту со значением
const elemsNine = document.querySelectorAll('[data-item="40"]');
// console.log(elemsNine)

const elems = document.querySelectorAll('li'); // присваиваем переменной значение коллекции объекта по тегу li
console.log(elems[2]); // вызываем элемент по индексу из коллекции объекта
for (const item of elems) {
    console.log(item);
}
// так же работает метод forEach хотя это и не массив, но работает
elems.forEach(item => {
    console.log(item);
});

// Ищем теги li только внутри коллекции nav-menu
const subList = document.querySelectorAll('.nav-menu')
const subItems = subList[0].querySelectorAll('li');
console.log(subItems)

// Ищет один конкретный объект без необходимости получать коллекцию объекта
const burgerItem = document.querySelector('.nav-menu');
console.log(burgerItem)

// Если у элемента есть атрибут id, 
// то мы можем получить его вызовом getElementById(id), где бы он ни находился.
const elem = document.getElementById('About-us')
console.log(elem)

const elems = document.getElementsById('About-us')
console.log(elem)

// elem.getElementsByTagName(tag)
// ищет элементы с данным тегом и возвращает их коллекцию.
// Передав "*" вместо тега, можно получить всех потомков.
const elems = document.getElementsByTagName('li');
console.log(elems)

// elem.getElementsByClassName(className)
// возвращает элементы, которые имеют данный CSS - класс.
const elems = document.getElementsByClassName('list-reset')
console.log(elems)

// document.getElementsByName(name) возвращает элементы с заданным атрибутом name.
// Очень редко используется. Поиск только внутри document.
const elems = document.getElementsByName('list');
console.log(elems)

// Получаем статическую коллекцию 
const listStatic = document.querySelectorAll('item');

// Получаем "живую" коллекцию
// Разница в том что статическая не добавляет в html ничего, а просто возвращает нам поиск коллекцииобъекта,
// а живая коллекция это когда мы добавляем в колллекцию дополнительный объект в реальном времени.  
const listLive = document.getElementsByClassName('item');
console.log(listStatic)
console.log(listLive)

// Создаём новый HTML-объект. И добавляем его в разметку рядом с указанным классом.
const lessonList = document.querySelector('.burger__menu');
lessonList.insertAdjacentHTML(
    "beforeend",
    '<li class="lesson__item-list">Новый пункт</li>'
);

// elem.closest(css) ищет ближайшего предка, который соответствует CSS - селектору.
// Сам эемент также включается в поиск
// Предки элемента это родитель, родитель родителя, его родитель и так далее.
// Вместе они образуют цепочку иерархии от элемента до вершины.
// Другими словами, метод closest поднимается ввепх от элемента и проверяет каждого из родителей.
// Если он соответствует селектору, поиск прекращается. 
// Метод возвращает либо предка, либо null, если такой элемент не найден.
const elem = document.querySelector('.lesson__item-sub-list');
const parentList = elem.closest('.lesson__list');
console.log(parentList);

// Стоит добавить, что получив объект тем или иным способом мы можем применять свойства навигации о которых говорили ранее
const text = document.querySelector('.lesson__text');
const list = text.nextElementSibling;
console.log(list);

// Получаем объект
const textElement = document.querySelector('.burger__menu');
// Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);
// Перезаписываем содержимое объекта
textElement.innerHTML = `Живи, а работай в свободное время!`;

// Получаем объект
const textElement = document.querySelector('.burger__menu');
// Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);
// Дописываем содержимое объекта
textElement.innerHTML = 
    `<p>${textElementContent}</p> <p>Живи, а работай в 
    <span class="yellow">свободное</span> время!</p>`;
console.log(textElement.innerHTML);

const textElement = document.querySelector('.burger__menu');
// Получаем содержимое объекта "как есть"
// вместе с HTML, а также сам элемент
const textElementContent = textElement.outerHTML;
console.log(textElementContent);
// Дописываем содержимое объекта
textElement.outerHTML = 
    `<p>${textElementContent}</p> <p>Живи, а работай в 
    <span class="yellow">свободное</span> время!</p>`;
console.log(textElement.outerHTML);

// textContent - записывать текст "безопасным способом".
const textElement = document.querySelector('.logo__list');
const textElementContent = textElement.textContent;
console.log(textElementContent);

// Получаем объект
const textElement = document.querySelector('.burger__menu');
const getComment = textElement.nextSibling;
console.log(getComment)
// Изменение текстового узла/комментария
getComment.data = 'Привет'
console.log(getComment.data)

// Создание нового элемента (тега)
const newElement = document.createElement('div');
// console.log(newElement)
// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в 
    <span class="blue">свободное</span> время!`;
console.log(newElement);

// Создание нового текстового узла
const newText = document.createTextNode('Привет!');
console.log(newText);

// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Создание нового элемента (тега)
const newElement = document.createElement('div');
// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в 
//     <span class="blue">свободное</span> время!`;
// Вставляем новый элемент... 
// ...перед объектом
textElement.before(newElement);
// ...после объекта
textElement.after(newElement);
// ...внутрь и в начало объекта
textElement.prepend(newElement);
// ...внутрь и в конец объекта
textElement.append(newElement);

textElement.append(newElement, "Привет!");
// можно вставить обычную строку(текст) таким же способом
textElement.append(`Живи, а работай в 
    <span class="blue">свободное</span> время!`);

// более наглядный пример
// before
<ul class="lesson__list">
{/* prepend */}
    <li>Пункт №1</li>
    <li>Пункт №2</li>
    <li>Пункт №3</li>
{/* append */}
</ul>
// after


// Вставляем текст, HTML, элемент
textElement.insertAdjacentHTML(
    "afterend",
    `<p>Живи, а работай в 
    <span class="blue">свободное</span> время!</p>`
);

beforebegin - вставить html непосредственно перед textElement,
afterbegin - вставить html в начало textElement,
beforeend - вставить html в конец textElement,
afterend - вставить html непосредственно после textElement.


// beforebegin
<ul class="lesson__list">
{/* afterbegin */}
    <li>Пункт №1</li>
    <li>Пункт №2</li>
    <li>Пункт №3</li>
{/* beforeend */}
</ul>
// afterend

const textElement = document.querySelector('.lesson__text');
// вставляем текст
textElement.insertAdjacentText(
    "beforeend",
    `Живи, а работай в 
    <span class="blue">свободное</span> время!`
);
// создание нового элемента (тега)
const newElement = document.createElement('div');
// наполняем новый элемент
newElement.innerHTML = `Живи, а работай в 
<span class="blue">свободное</span> время!`;
// вставляем элемент
textElement.insertAdjacentElement(
    'beforeend',
    newElement
)

Мы можем вставлять не только новые узлы, но и переносить существующие.
Все методы вставки автоматически удаляют узлы со старых мест. 


const lessonBlock = document.querySelector('.lesson');
const title = document.querySelector('h3');
// переносим title в конец блока lessonBlock
lessonBlock.append(title);

// клонирование узлов cloneNode
// если нужен не перенос, а именно копия элемента
const textElement = document.querySelector('.lesson__text');
// Клоинирование без дочерних элементов
// const cloneTextElement = textElement.cloneNode();
// Глубоеое клонирование вместе с содержимым
const cloneTextElement = textElement.cloneNode(true);
const lessonBlock = document.querySelector('.lesson');
lessonBlock.append(cloneTextElement);

// удаление узлов
// удаляет полностью объект
textElement.remove();

const element = document.querySelector('.lesson__item-list_red');
// получаем имена классов
const elementClassNames = element.className;
console.log(elementClassNames);
// перезаписываем имя класса
element.className = "red";

const element = document.querySelector('.lesson__item-list_red');
// добавить класс
element.classList.add('active');
// удалить класс
element.classList.remove('active');
// добавить класс, если его нет, а если есть удалить.
element.classList.toggle('active');
// проверка наличия класса, возвращает true/false.
element.classList.contains('active');

const element = document.querySelector('.lesson__item-list_red');
element.classList.add('active');
// проверяем наличие класса
if (element.classList.contains('active')) {
    console.log(`У element есть класс active!`)
}

const element = document.querySelector('.lesson__item-list_red');
// задаём стиль с помощью CSS свойства
element.style.color = "red";
// для свойства из нескольких слов используется camelCase:
// margin-bottom
element.style.marginBottom = "30px";
// z-index
element.style.zIndex = "10px";
// и т.д.
// каждое свойство пишется отдельно
console.log(element.style.marginBottom);
сброс атрибута CSS
element.style.marginBottom = "";

// для записи нескольких стиле удобно использовать style.cssText = `...`
const element = document.querySelector('.lesson__item-list_red');
element.style.cssText = `
    margin-bottom: 30px;
    color: red;
`;
нюанс - перезаписывает все css свойства что были ранее в данному атрибуте style

// вычисленные стили. getComputedStyle(element, [pseudo])
const element = document.querySelector('.lesson__item-list_red');
// получение значения свойства
// только если оно записано в атрибуте style
console.log(element.style.fontSize);
// стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);

const element = document.querySelector('.lesson__item-list_red');
const elementBeforeStyle = getComputedStyle(element, "::before");
console.log(elementBeforeStyle.backgroundColor);

// как получить число из вывода строки цифр и с символами которые могли бы приравнятся к числу
const element = document.querySelector('.lesson__item-list_red');
const elementStyle = getComputedStyle(element);
const paddingLeft = parseInt(elementStyle.paddingLeft);
console.log(paddingLeft);
не забываем указывать в значении единицы измерения и в кавычках.
element.style.marginLeft = "20px";

const link = document.querySelector('.lesson__link');
const input = document.querySelector('.lesson__input');
console.log(link.href);
console.log(input.href);
console.log(input.value);
console.log(link.value);
// получить список доступных свойств
console.dir(link);

const lessonText = document.querySelector('.lesson__text');
// проверяем наличие атрибута.
lessonText.hasAttribute('name');
// получаем значение атрибута.
lessonText.getAttribute('name');
// устанавливаем значение атрибута.
lessonText.setAttribute('name', 'value');
// удаляем атрибут
lessonText.removeAttribute('name');

// практическое применение методов работы с атрибутами
const lessonText = document.querySelector('.lesson__text');
lessonText.setAttribute('some-attribute', 'some-value');
// проверяем наличие атрибута
if (lessonText.hasAttribute('some-attribute')) {
    console.log('some-attribute существует!');
}

const input = document.querySelector('.lesson__input');
input.setAttribute('id', '123');
console.log(input.id);
input.id = "321";
console.log(input.getAttribute('id'));

const lessonText = document.querySelector('.lesson__text');
// получаем data-атрибут
console.log(lessonText.dataset.size);
// перезаписываем значение data-атрибута
lessonText.dataset.size = "5810"; 
console.log(lessonText.dataset.size);

// получаем тег элемента
console.log(link.tagName);
// скрыть/показать элемент
link.hidden = true;
console.log(link.hidden);