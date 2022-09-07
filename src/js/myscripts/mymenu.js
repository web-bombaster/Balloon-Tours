let menu = document.querySelector('.menu');
let menuItemLink = document.querySelectorAll('.menu__list-link');
let menuBtn = document.querySelector('.menu__btn');

// Показать / скрыть меню
function menuToggle() {
	menu.classList.toggle('toggle');
	menuBtn.classList.toggle('toggle');
}

// Показать / скрыть меню по клику на кнопку
menuBtn.addEventListener("click", menuToggle);

// Показать / скрыть меню по клику на пункт меню
menuItemLink.forEach(element => {
	element.addEventListener("click", menuToggle);
});

// Плавная прокрутка до якоря
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const blockID = anchor.getAttribute('href').substr(1);
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
};