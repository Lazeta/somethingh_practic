// const { isTemplateExpression } = require("typescript");

// функция возвращает результат , где мы получаем устройство с которого запущен сайт
const isMobile = {
    Android: function () {
    return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/Iphone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

// добавляем класс в зависимости от того какое у нас система
if (isMobile.any()) {
    document.body.classList.add('_touch');
    
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if(menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            // навесить на обработчик кликер и выполнить функцию
            menuArrow.addEventListener("click", function(e) {
                // создать у елемента новый класс _active и затем удалить его
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuList = document.querySelector('.menu__list');
const headerLogo = document.querySelector('.header__logo');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
});

// прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockBValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// Баг 1
// скрол в режиме всплывающего окна заходит за грани страницы вместе с 
// шапкой заднего фона, логотип и иконка бургера остаются на месте.











// классический способ по айди нашей кнопку выполнить функцию по нажатию ЛКМ.
// document.querySelector('#submit').onclick = function(){
//     alert('Вы нажали ЛКМ!');
// }

// // создаём функцию которая срабатываем по вызову её в теге html.
// {/* <button type="submit" id="submit" onclick = "alerted()">Кнопка!</button> */}
// function alerted(){
//     alert('Вы нажали Левую Кнопку Мыши');
// }
// {/* <button type="submit" id="submit" oncontectmenu = "alerted2()">Кнопка!</button> */}
// function alerted2(){
//     alert('Вы нажали Правую Кнопку Мыши');
// }

// // формула вывода случайного числа в диапозоне min - max в форме абсолютного числа.
// function randomSum(min, max){ 
//     document.querySelector('.sum').innerHTML = Math.abs(Math.floor(Math.random() * (min - max + 1) ) + min);
// }

// // alert('сработал скрипт рандомного числа в диапазоне');
// document.querySelector('#submit2').oncontextmenu = function(){
//     randomSum(1000, 9999);
//     // чтобы наша функция остановилась мы возвращаем false, в ином случае у нас по нажатию ПКМ откроется меню настроек.
//     return false;
// }




// const button = document.querySelector('.btn');

// button.onclick = function () {
//     console.log('Click!');
// }
// const button = document.querySelector('#submit');
// button.onclick = function(){ 
//     alert('Вы нажали на кнопку!')
// }

// function showConsole() {
//     console.log('Click!');
// }
// button.onclick = showConsole;

// // минус вышеупомянутых методов невозможность вызова нескольких обработчиков


// const button = document.querySelector('.city__bar');

// // button.onclick = function () {
// //     console.log('Click!');
// // }
// // button.onclick = function () {
// //     console.log('Clak!');
// // }

// button.addEventListener("click", function(e) {
//     console.log('Клик!');
// });
// button.addEventListener("click", function(e) {
//     console.log('Клак!');
// });


// // устанавливаем обработчик и его сразу же удаление чтобы действие 
// // больше не повторялось.
// const button = document.querySelector('.city__bar');
// function showConsole() {
//     console.log('Клик!');
//     button.removeEventListener("click", showConsole);
// }
// button.addEventListener("click", showConsole);

// const options = {
//     "capture" : false, // фаза на которой должен сработать обработчик.
//     "once" : true, // если true, тогда обработчик будет автоматически удалён после удаления
//     "passive" : true, // то указывает, что обработчик никогда не вызовет preventDefault()  
// }

// const button = document.querySelector('.city__bar');
// function showConsole() {
//     console.log('Клик!');
// }
// button.addEventListener("click", showConsole, options);


// const button = document.querySelector(".city__bar");
// // event : создаёт событие обработчик, аргумент указывается в функции.
// function showConsole(event) {
//     // отображает тип взаимодействия мыши.
//     console.log(event.type);
//     // Объект на котором сработал обработчик.
//     console.log(event.target);
//     // Объект к которому назначен обработчик.
//     console.log(event.currentTarget);
//     // Положение курсора по оси X.
//     console.log(event.clientX);
//     console.log(event.clientY);
//     // посмотреть весь список аргумента "event"
//     console.log(event);
// } 
// button.addEventListener("click", showConsole);
// button.addEventListener("mouseenter", showConsole);



// // всплытие и погружение
// const block = document.querySelector(".block");
// const blockInner = document.querySelector(".block__iner");
// const blockInnerInner = document.querySelector(".block__inner-inner");
// // Всплытие : когда на элемете происходит событие, обработчики 
// // сначала срабатывают на нём, потом на его родителе, 
// // затем выше и так далее, вверх по цепочке предков.
// block.addEventListener("click", function (event) {
//     console.log('Клик на блок!' );
// });
// blockInner.addEventListener("click", function(event) {
//     console.log('Клик на блок второго уровня!');
// });
// blockInnerInner.addEventListener("click", function(event) {
//     console.log('Клик на блок третьего уровня!');
//     // Остановка всплытия
//     event.stopPropagation();
// });


// // Делегирование событий
// const lesson = document.querySelector('.lesson');

// function showConsole() {
//     console.log('Ура!');
// }
// lesson.addEventListener("click", function (event)) {
//     if (event.target.closest('.button')) {
//         showConsole();
//     }
// }


// const menuBody = document.querySelector('.menu');
// document.addEventListener('click', menu);
// function menu(event) {
//     if(event.target.closest('.menu__button')) {
//         menuBody.classList.toggle('_active');       
//     }
//     if (!event.target.closest('.menu')) {
//         menuBody.classList.remove('_active');
//     }
// }