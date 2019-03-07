const create = (name, description, imgSrc) => {
	imgEl = document.createElement('IMG');
	imgEl.src = imgSrc;
	imgDiv = document.createElement('DIV');
	imgDiv.className = 'imgDiv';
	imgDiv.appendChild(imgEl);
	productEl = document.createElement('DIV');
	productEl.className = 'productDiv';
	productEl.appendChild(imgDiv);
	desEl = document.createElement('DIV');
	desEl.className = 'descriptionDiv';
	nameEl = document.createElement('P');
	nameEl.textContent = name;
	descriptionEl = document.createElement('P');
	descriptionEl.textContent = description;
	inputEl = document.createElement('INPUT');
	buttonEl = document.createElement('BUTTON');
	buttonEl.className = 'addButton';
	buttonText = document.createTextNode('Dodaj');
	buttonEl.appendChild(buttonText);
	desEl.appendChild(nameEl);
	desEl.appendChild(descriptionEl);
	desEl.appendChild(inputEl);
	desEl.appendChild(buttonEl);
	productEl.appendChild(desEl);
	section = document.querySelector('.productSection');
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

for(let i=0; i<foam.length; i++){
	foam[i].create();
}

const order = [];

buttons = document.querySelectorAll('.addButton');
for(let i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click', event => {
		event.preventDefault();
		const parent = event.target.parentNode;
		const children = parent.children;
		const name = children[0].textContent;
		const quantity = children[2].value;
		if( quantity === undefined || quantity == 0){
			window.alert('Niepoprawna wartość. Wprowadź cyfę wiekszą od zera.')
		}
		else{
			const result = order.find( product => product.name === name );
			if( !result ){
				const orderObj = {name: name,
							  quantity: quantity};
				order.push(orderObj);
				localStorage['zamowienie'] = order;
			}
			else{
				let sum = 0;
				sum += parseInt(result.quantity);
				sum += parseInt(quantity);
				result.quantity = sum ;
				console.log(order);
			}
		}
		let formBody = document.forms['myForm']['body'];
		document.forms['myForm'].reset();
		let list = '';
		for (let i=0; i<order.length; i++){
			list += order[i].quantity + ' szt ' + order[i].name + '\n';
		}
		formBody.value = 'Witam, jestem zainteresowany kupnem:\n\n' + list + '\nPozdrawiam';	
	});
}
