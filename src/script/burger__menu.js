// document.querySelector('.burger').addEventListener("click", function(){
//     this.classList.toggle('_active');
//     document.querySelector('.nav').classList.toggle('open');
// })


// для бургер меню из 4 полос и более
const burgerMenu = document.querySelector('.burger-menu');
const burgerIcon = document.querySelector('.nav');
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
});

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' || e.key === 'Esc'){
        burgerMenu.classList.remove('active');
        burgerIcon.classList.remove('open')
    }
})