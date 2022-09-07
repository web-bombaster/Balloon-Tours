"use strict";

var menu = document.querySelector('.menu');
var menuItemLink = document.querySelectorAll('.menu__list-link');
var menuBtn = document.querySelector('.menu__btn'); // Показать / скрыть меню

function menuToggle() {
  menu.classList.toggle('toggle');
  menuBtn.classList.toggle('toggle');
} // Показать / скрыть меню по клику на кнопку


menuBtn.addEventListener("click", menuToggle); // Показать / скрыть меню по клику на пункт меню

menuItemLink.forEach(function (element) {
  element.addEventListener("click", menuToggle);
}); // Плавная прокрутка до якоря

var anchors = document.querySelectorAll('a[href*="#"]');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

;