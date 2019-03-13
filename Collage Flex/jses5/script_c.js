"use strict";

var barButton = document.querySelector('#navbar i');
var menu = document.querySelector('#drop-menu');
barButton.addEventListener('click', function () {
  if (barButton.className == 'fas fa-bars') {
    menu.style.display = 'block';
    barButton.className = 'fas fa-times';
    menu.style.height = '240px';
  } else {
    menu.style.display = 'none';
    barButton.className = 'fas fa-bars';
    baner.style.top = '60px';
  }
});

window.onresize = function () {
  if (window.innerWidth >= 768) {
    menu.style.display = 'block';
    window.location = window.location;
  } else {
    barButton.className = 'fas fa-bars';
    menu.style.display = 'none';
    window.location = window.location;
  }
};