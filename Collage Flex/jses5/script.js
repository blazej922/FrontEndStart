"use strict";

var barButton = document.querySelector('#navbar i');
var menu = document.querySelector('#drop-menu');
var baner = document.querySelector('.white-line');
barButton.addEventListener('click', function () {
  if (barButton.className == 'fas fa-bars') {
    menu.style.display = 'block';
    barButton.className = 'fas fa-times';
    baner.style.top = '220px';
  } else {
    menu.style.display = 'none';
    barButton.className = 'fas fa-bars';
    baner.style.top = '60px';
  }
});
var links = document.querySelectorAll('#drop-menu ul li a');
var aboutDiv = document.querySelector('#about p');
var rzetelnaLogo = document.createElement('IMG');
rzetelnaLogo.src = 'img/rzetelnafirma.png';

if (window.innerWidth >= 768) {
  aboutDiv.appendChild(rzetelnaLogo);
}

if (window.innerWidth < 768) {
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      menu.style.display = 'none';
      barButton.className = 'fas fa-bars';
      baner.style.top = '60px';
    });
  }
}

window.onresize = function () {
  if (window.innerWidth >= 768) {
    menu.style.display = 'block';
    aboutDiv.appendChild(rzetelnaLogo);
    window.location = window.location;
  } else {
    barButton.className = 'fas fa-bars';
    menu.style.display = 'none';
    window.location = window.location;
  }
};

var menuButtons = document.querySelectorAll('#drop-menu ul li');

var _loop = function _loop(_i) {
  var y = window.screen.height;

  menuButtons[_i].addEventListener('click', function () {
    moveTo = y * _i - 30;
    window.scrollTo(0, moveTo);
  });
};

for (var _i = 0; _i < menuButtons.length; _i++) {
  _loop(_i);
}