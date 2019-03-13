"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.silicon = exports.foam = void 0;

var create = function create(name, description, imgSrc) {
  var imgEl = document.createElement('IMG');
  imgEl.src = imgSrc;
  var imgDiv = document.createElement('DIV');
  imgDiv.className = 'imgDiv';
  imgDiv.appendChild(imgEl);
  var productEl = document.createElement('DIV');
  productEl.className = 'productDiv';
  productEl.appendChild(imgDiv);
  var desEl = document.createElement('DIV');
  desEl.className = 'descriptionDiv';
  var nameEl = document.createElement('P');
  nameEl.textContent = name;
  var descriptionEl = document.createElement('P');
  descriptionEl.textContent = description;
  var inputEl = document.createElement('INPUT');
  var buttonEl = document.createElement('BUTTON');
  buttonEl.className = 'addButton';
  var buttonText = document.createTextNode('Dodaj');
  buttonEl.appendChild(buttonText);
  desEl.appendChild(nameEl);
  desEl.appendChild(descriptionEl);
  desEl.appendChild(inputEl);
  desEl.appendChild(buttonEl);
  productEl.appendChild(desEl);
  var section = document.querySelector('.productSection');
  section.appendChild(productEl);
};

var foam = [{
  name: 'FLEX Piana konstrukcyjna 2K',
  description: 'Dwuskładnikowa, chemoutwardzalna, bardzo sztywna, poliuretanowa piana wężykowa do zastosowań konstrukcyjnych.',
  url: 'img/products/Hetman-0034.jpg',
  quantity: 0,
  create: function createFunc() {
    create(this.name, this.description, this.url);
  }
}, {
  name: 'FLEX Piana PLUS pistoletowa',
  description: 'Jednoskładnikowa, półsztywna pianka montażowa na bazie poliuretanu, zawierająca nieszkodliwy dla środowiska gaz rozprężający, twardniejąca pod wpływem wilgotoności powietrza.',
  url: 'img/products/Hetman-0001.jpg',
  quantity: 0,
  create: function createFunc() {
    create(this.name, this.description, this.url);
  }
}, {
  name: 'FLEX Piana pistoletowa zimowa',
  description: 'Piana poliuretanowa montażwo-uszczelniająca przeznaczona do pracy w temperaturze otoczenia już od 10oC.',
  url: 'img/products/Hetman-0014-2.jpg',
  quantity: 0,
  create: function createFunc() {
    create(this.name, this.description, this.url);
  }
}];
exports.foam = foam;
var silicon = [{
  name: 'Uszczelniacz wysokotemperaturowy 300oC',
  description: 'Trwale elastyczny silikonowy kit uszczelniający, odporny na temperaturę do 300oC.',
  url: 'img/products/Hetman-0022-2.jpg',
  quantity: 0,
  create: function createFunc() {
    create(this.name, this.description, this.url);
  }
}, {
  name: 'Uszczelniacz żaroodporny 1200',
  description: 'Jednoskładnikowa masa na bazie silikatu sodowego do uszczelniania złączy narażonych na temepraturę do 1200oC.',
  url: 'img/products/Hetman-0014-2.jpg',
  quantity: 0,
  create: function createFunc() {
    create(this.name, this.description, this.url);
  }
}, {
  name: 'FLEX Piana pistoletowa zimowa',
  description: 'Piana poliuretanowa montażwo-uszczelniająca przeznaczona do pracy w temperaturze otoczenia już od 10oC.',
  url: 'img/products/Hetman-0014-2.jpg',
  quantity: 0,
  create: function createFunc() {
    create(this.name, this.description, this.url);
  }
}];
exports.silicon = silicon;