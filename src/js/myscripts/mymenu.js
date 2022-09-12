let body = document.querySelector('body');
let menu = document.querySelector('.menu');
let menuItemLink = document.querySelectorAll('.menu__list-link');
let menuBtn = document.querySelector('.menu__btn');

// Показать / скрыть меню
function menuToggle() {
	menu.classList.toggle('toggle');
	menuBtn.classList.toggle('toggle');
	body.classList.toggle('toggle');
}

// Показать / скрыть меню по клику на кнопку
menuBtn.addEventListener("click", menuToggle);

// По клику на пункт меню проверяем, есть ли у меню класс toggle. Если да, удаляем для body, menu и menuBtn класс toggle
menuItemLink.forEach(element => {
	element.addEventListener("click", function () {
		if (menu.classList.contains('toggle')) {
			menuToggle();
		}
	});
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