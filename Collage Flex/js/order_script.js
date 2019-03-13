import { foam } from './products.js';
import { silicon } from './products.js';

const prodMenuButtons = document.querySelectorAll('#drop-menu ul li');
const section = document.querySelector('section');
const clearButton = document.forms['myForm']['clear'];

const mailIco = document.querySelector('#mailDiv i');

//The function that causes order form is hidden or not
mailIco.addEventListener('click', () => {
  	const x = document.getElementById('mailDiv');
  	x.classList.toggle('show');
});

//The function generates list of products
const addProducts = (prodName) => {
	while (section.firstChild) {
    section.removeChild(section.firstChild);
	}
	for(let i=0; i<prodName.length; i++){	
	prodName[i].create();

}};

//order form cleaning
clearButton.addEventListener ('click', event => {
	event.preventDefault();
	localStorage.removeItem("order");
	document.forms['myForm'].reset();
});

//fucntion adds product to localStorage and checks if the product is already there
const addToOrder = () => {
	const buttons = document.querySelectorAll('.addButton');

for(let i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click', event => {
		event.preventDefault();
		const parent = event.target.parentNode;
		const children = parent.children;
		const name = children[0].textContent;
		const quantity = children[2].value;
		const numbers = /^[1-9]+$/;
		if(!quantity.match(numbers)){
			window.alert('Niepoprawna wartość. Wprowadź cyfę wiekszą od zera.')
		}
		else{
			if(localStorage.getItem('order')){
				const orderStorage = JSON.parse(localStorage.getItem('order'));
				const sameEl = orderStorage.find(element => element.name == name );
				if(sameEl){
					let x = orderStorage.indexOf(sameEl);
					let elQ = parseInt(orderStorage[x].quantity);
					elQ += parseInt(quantity);
					orderStorage[x].quantity = elQ;
					localStorage.setItem('order', JSON.stringify(orderStorage));
				}else{
					const orderObj = {name: name,
							quantity: quantity}
					orderStorage.push(orderObj);
					localStorage.setItem('order', JSON.stringify(orderStorage));	
				}	
			}else{
				const order = [];
				const orderObj = {name: name,
							quantity: quantity}
				order.push(orderObj);
				localStorage.setItem('order', JSON.stringify(order));
				}		
			}
			let formBody = document.forms['myForm']['body'];
			document.forms['myForm'].reset();
			let list = '';
			const order = JSON.parse(localStorage.getItem('order'));
			for (let i=0; i<order.length; i++){
				list += order[i].quantity + ' szt ' + order[i].name + '\n';
			}
			formBody.value = 'Witam, jestem zainteresowany kupnem:\n\n' + list + '\nPozdrawiam';	
		});
	}
}	

for(let i=0; i<prodMenuButtons.length; i++){
	const productsName = {'Piany': foam,
					  'Silikony': silicon}
	prodMenuButtons[i].addEventListener('click', (event) => {
		let x = prodMenuButtons[i].textContent;
		let y = productsName[x];
		addProducts(y);
		addToOrder();
	});
}

addProducts(foam);
addToOrder();

const addButton = document.querySelectorAll('.addButton');

for(let i=0; i<addButton.length; i++){
	addButton[i].addEventListener('click', () => {
		if(localStorage.getItem('order')){
			mailIco.classList.add("messageAdd");
			setTimeout(() => {
				mailIco.classList.remove("messageAdd");
		}, 1500);
		}	
	});
}