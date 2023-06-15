// *RU* Функция смены цвета заднего фона на размерах от 1440 пикселей более.
// Function changed color background color on size from 1440px and more.
const btnColor = document.querySelector('.__changer');
function random(number) {
    return Math.floor(Math.random() * (number + 1))
}
btnColor.onclick = function () {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
};