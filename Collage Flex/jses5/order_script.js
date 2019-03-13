"use strict";

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
var prodMenuButtons = document.querySelectorAll('#drop-menu ul li');
var section = document.querySelector('section');
var clearButton = document.forms['myForm']['clear'];
var mailIco = document.querySelector('#mailDiv i'); //The function that causes order form is hidden or not

mailIco.addEventListener('click', function () {
  var x = document.getElementById('mailDiv');
  x.classList.toggle('show');
}); //The function generates list of products

var addProducts = function addProducts(prodName) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  for (var i = 0; i < prodName.length; i++) {
    prodName[i].create();
  }
}; //order form cleaning


clearButton.addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.removeItem("order");
  document.forms['myForm'].reset();
}); //fucntion adds product to localStorage and checks if the product is already there

var addToOrder = function addToOrder() {
  var buttons = document.querySelectorAll('.addButton');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
      event.preventDefault();
      var parent = event.target.parentNode;
      var children = parent.children;
      var name = children[0].textContent;
      var quantity = children[2].value;
      var numbers = /^[1-9]+$/;

      if (!quantity.match(numbers)) {
        window.alert('Niepoprawna wartość. Wprowadź cyfę wiekszą od zera.');
      } else {
        if (localStorage.getItem('order')) {
          var orderStorage = JSON.parse(localStorage.getItem('order'));
          var sameEl = orderStorage.find(function (element) {
            return element.name == name;
          });

          if (sameEl) {
            var x = orderStorage.indexOf(sameEl);
            var elQ = parseInt(orderStorage[x].quantity);
            elQ += parseInt(quantity);
            orderStorage[x].quantity = elQ;
            localStorage.setItem('order', JSON.stringify(orderStorage));
          } else {
            var orderObj = {
              name: name,
              quantity: quantity
            };
            orderStorage.push(orderObj);
            localStorage.setItem('order', JSON.stringify(orderStorage));
          }
        } else {
          var _order = [];
          var _orderObj = {
            name: name,
            quantity: quantity
          };

          _order.push(_orderObj);

          localStorage.setItem('order', JSON.stringify(_order));
        }
      }

      var formBody = document.forms['myForm']['body'];
      document.forms['myForm'].reset();
      var list = '';
      var order = JSON.parse(localStorage.getItem('order'));

      for (var _i = 0; _i < order.length; _i++) {
        list += order[_i].quantity + ' szt ' + order[_i].name + '\n';
      }

      formBody.value = 'Witam, jestem zainteresowany kupnem:\n\n' + list + '\nPozdrawiam';
    });
  }
};

var _loop = function _loop(i) {
  var productsName = {
    'Piany': foam,
    'Silikony': silicon
  };
  prodMenuButtons[i].addEventListener('click', function (event) {
    var x = prodMenuButtons[i].textContent;
    var y = productsName[x];
    addProducts(y);
    addToOrder();
  });
};

for (var i = 0; i < prodMenuButtons.length; i++) {
  _loop(i);
}

addProducts(foam);
addToOrder();
var addButton = document.querySelectorAll('.addButton');

for (var i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener('click', function () {
    if (localStorage.getItem('order')) {
      mailIco.classList.add("messageAdd");
      setTimeout(function () {
        mailIco.classList.remove("messageAdd");
      }, 1500);
    }
  });
}