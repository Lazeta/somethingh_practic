"use strict"

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