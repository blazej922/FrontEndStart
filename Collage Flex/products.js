export { foam };
export { silicon };

const create = (name, description, imgSrc) => {
	const imgEl = document.createElement('IMG');
	imgEl.src = imgSrc;
	const imgDiv = document.createElement('DIV');
	imgDiv.className = 'imgDiv';
	imgDiv.appendChild(imgEl);
	const productEl = document.createElement('DIV');
	productEl.className = 'productDiv';
	productEl.appendChild(imgDiv);
	const desEl = document.createElement('DIV');
	desEl.className = 'descriptionDiv';
	const nameEl = document.createElement('P');
	nameEl.textContent = name;
	const descriptionEl = document.createElement('P');
	descriptionEl.textContent = description;
	const inputEl = document.createElement('INPUT');
	const buttonEl = document.createElement('BUTTON');
	buttonEl.className = 'addButton';
	const buttonText = document.createTextNode('Dodaj');
	buttonEl.appendChild(buttonText);
	desEl.appendChild(nameEl);
	desEl.appendChild(descriptionEl);
	desEl.appendChild(inputEl);
	desEl.appendChild(buttonEl);
	productEl.appendChild(desEl);
	const section = document.querySelector('.productSection');
	section.appendChild(productEl);
}

const foam = [{	name: 'FLEX Piana konstrukcyjna 2K',
			   	description: 'Dwuskładnikowa, chemoutwardzalna, bardzo sztywna, poliuretanowa piana wężykowa do zastosowań konstrukcyjnych.',
			   	url: 'img/products/Hetman-0034.jpg',
			   	quantity: 0,
			   	create: function createFunc(){
			   		create(this.name, this.description, this.url);
			   	},
			},
			   
			  {	name: 'FLEX Piana PLUS pistoletowa',
			   	description: 'Jednoskładnikowa, półsztywna pianka montażowa na bazie poliuretanu, zawierająca nieszkodliwy dla środowiska gaz rozprężający, twardniejąca pod wpływem wilgotoności powietrza.',
			   	url: 'img/products/Hetman-0001.jpg',
			   	quantity: 0,
			   	create: function createFunc(){
			   		create(this.name, this.description, this.url);
			   	}
			},

			  {	name: 'FLEX Piana pistoletowa zimowa',
			   	description: 'Piana poliuretanowa montażwo-uszczelniająca przeznaczona do pracy w temperaturze otoczenia już od 10oC.',
			   	url: 'img/products/Hetman-0014-2.jpg',
			   	quantity: 0,
			   	create: function createFunc(){
			   		create(this.name, this.description, this.url);
			   	}
			}
		]

const silicon = [{	name: 'Uszczelniacz wysokotemperaturowy 300oC',
			   	description: 'Trwale elastyczny silikonowy kit uszczelniający, odporny na temperaturę do 300oC.',
			   	url: 'img/products/Hetman-0022-2.jpg',
			   	quantity: 0,
			   	create: function createFunc(){
			   		create(this.name, this.description, this.url);
			   	},
			},
			    
			  {	name: 'Uszczelniacz żaroodporny 1200',
			   	description: 'Jednoskładnikowa masa na bazie silikatu sodowego do uszczelniania złączy narażonych na temepraturę do 1200oC.',
			   	url: 'img/products/Hetman-0014-2.jpg',
			   	quantity: 0,
			   	create: function createFunc(){
			   		create(this.name, this.description, this.url);
			   	}
			},

			  {	name: 'FLEX Piana pistoletowa zimowa',
			   	description: 'Piana poliuretanowa montażwo-uszczelniająca przeznaczona do pracy w temperaturze otoczenia już od 10oC.',
			   	url: 'img/products/Hetman-0014-2.jpg',
			   	quantity: 0,
			   	create: function createFunc(){
			   		create(this.name, this.description, this.url);
			   	}
			}
		]
