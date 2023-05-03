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
if (iconMenu){
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

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