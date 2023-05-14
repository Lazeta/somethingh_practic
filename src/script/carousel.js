	// 1.Создаём все часто используемые константы с помощью Caps-Lock
const BTN_LEFT = document.querySelector("#btn-left"); // получаем левую кнопку стрелки
const BTN_RIGHT = document.querySelector("#btn-right"); // Получаем правую кнопку стрелки 
const CAROUSEL = document.querySelector("#carousel"); // Получаем наш блок карусели
const ITEM_LEFT = document.querySelector("#item-left"); // Получаем список карт что слева
const ITEM_RIGHT = document.querySelector("#item-right"); // Получаем список карт что справа



	// 3.Добавляет к 'carousel' блоку селектор 'transition-left' и 
	// делает на время анимации события клика стрелок не отслеживаемыми
const moveLeft = () => {
  	CAROUSEL.classList.add("transition-left");
  	BTN_LEFT.removeEventListener("click", moveLeft);
  	BTN_RIGHT.removeEventListener("click", moveRight);
};

	// 3.2.Добавляет к 'carousel' блоку селектор 'transition-right' и 
	// делает на время анимации события клика стрелок не отслеживаемыми
const moveRight = () => {
  	CAROUSEL.classList.add("transition-right");
  	BTN_LEFT.removeEventListener("click", moveLeft);
  	BTN_RIGHT.removeEventListener("click", moveRight);
};

	// 2.Следим за событием клика левая стрелка и правая стрелка
BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

	// 4.Создаём новый див и присваиваем ему класс 'card' и возвращаем значение этой переменной
const createCardTemplate = () => {
	const card = document.createElement("div");
	card.classList.add("card");
	return card;
}

	// 5.Создаём событие слушания анимации, генерирования чисел, и переприсвоения контента.
CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem; // 6.в эту переменную кладём значения того на какую стрелку мы нажмём, 
				   // по умолчанию она будет 'undefined'
	// 7.Проверка равна ли анимация нажатию на левую стрелку
  	if (animationEvent.animationName === "move-left") { 
	// 8.первым делом удаляем селектор 'transition-left' из блока карусели, присваиваем 
	// переменной новое значение что получим по нажатию на анимацию карусели
    CAROUSEL.classList.remove("transition-left");
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    changedItem = ITEM_LEFT;
  	} else {
    CAROUSEL.classList.remove("transition-right");
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    changedItem = ITEM_RIGHT;
  	}
	// 9.опустошаем текстовое значение переменной отвечающей за контент карточек, 10.в цикле
	// присваиваем переменной 'card' рандомно сгенерированные целые числа менее или равные 7, 
  	// 11.затем к временной переменной внутри функции добавляем эти значения чисел для карточек
  	changedItem.innerHTML = "";
  	for (let i = 0; i < 3; i++) {
    const card = createCardTemplate();
    card.innerText = Math.floor(Math.random() * 8);
    changedItem.appendChild(card);
	}
  
	// 12.вешаем обработчик клика по стрелкам и вызовом функции анимации
  	BTN_LEFT.addEventListener("click", moveLeft);
  	BTN_RIGHT.addEventListener("click", moveRight);
});