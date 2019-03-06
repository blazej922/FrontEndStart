const create = (name, description) => {
	divEl = document.createElement('DIV');
	divEl.className = 'productDiv';
	nameEl = document.createElement('P');
	nameEl.textContent = name;
	descriptionEl = document.createElement('P');
	descriptionEl.textContent = description;
	inputEl = document.createElement('INPUT');
	buttonEl = document.createElement('BUTTON');
	buttonEl.className = 'addButton';
	buttonText = document.createTextNode('+');
	buttonEl.appendChild(buttonText);
	divEl.appendChild(nameEl);
	divEl.appendChild(descriptionEl);
	divEl.appendChild(inputEl);
	divEl.appendChild(buttonEl);
	section = document.querySelector('section');
	section.appendChild(divEl);
}

const order = [];

const foam = [{	name: 'Uszczelniacz żaroodporny',
			   	description: 'Uszczelniacz żaroodporny 1200oC. Jednoskładnikowa masa na bazie silikatu sodowego do uszczelniania złączy narażonych na temperaturę do 1200oC.',
			   	url: 'img/products/Hetman-0034.jpg',
			   	quantity: 3,
			   	create: function createFunc(){
			   		create(this.name, this.description);
			   	},
			   	add: function (){
			   		orderPos = {name: this.name,
			   					quantity: this.quantity}
			   		order.push(orderPos);
			   	}
			},
			   
			  {	name: 'Silikon uniwersalny',
			   	description: 'Uniwersalny, trwale elastyczny silikonowy kit uszczelniający n bazie polisiliksanów z octanowym systemem utwardzania.',
			   	url: 'img/products/hetman.png',
			   	quantity: 0,
			   	create: function createFunc(){
			   		create(this.name, this.description);
			   	}
			}
		]
for(let i=0; i<foam.length; i++){
	foam[i].create();
}  

buttons = document.querySelectorAll('.addButton');
for(let i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click', event => {
		event.preventDefault();
		const parent = event.target.parentNode;
		const children = parent.children;
		const name = children[0].textContent;
		const resultObj = foam.find( product => product.name === name );
		console.log(resultObj);
	});
}

const result = foam.find( product => product.name === 'Uszczelniacz żaroodporny' );
//console.log(result);