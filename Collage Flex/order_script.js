import { foam } from './products.js';
import { silicon } from './products.js';

const foamButton = document.querySelectorAll('#drop-menu ul li')[0];
const silButton = document.querySelectorAll('#drop-menu ul li')[1];
const section = document.querySelector('section');
const clearButton = document.forms['myForm']['clear'];

const mailIco = document.querySelector('#mailDiv i');

mailIco.addEventListener('click', function() {
  	const x = document.getElementById('mailDiv');
  	x.classList.toggle("hidden");
});

const addProducts = (prodName) => {
	while (section.firstChild) {
    section.removeChild(section.firstChild);
	}
	for(let i=0; i<prodName.length; i++){	
	prodName[i].create();

}};

clearButton.addEventListener ('click', event => {
	event.preventDefault();
	localStorage.removeItem("order");
	document.forms['myForm'].reset();
});

const addToOrder = () => {
	const buttons = document.querySelectorAll('.addButton');

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

foamButton.addEventListener('click', () => {
		addProducts(foam);
		addToOrder();
	});

silButton.addEventListener('click', () => {
		addProducts(silicon);
		addToOrder();
	});

addProducts(foam);
addToOrder();
