const barButton = document.querySelector('#navbar i');
const menu = document.querySelector('#drop-menu');
const baner = document.querySelector('.white-line');

barButton.addEventListener('click', () => {
	if(barButton.className == 'fas fa-bars'){
		menu.style.display = 'block';
		barButton.className = 'fas fa-times';
		baner.style.top = '220px';
	}
	else{
		menu.style.display = 'none';
		barButton.className = 'fas fa-bars';
		baner.style.top = '60px';
	}
});

const links = document.querySelectorAll('#drop-menu ul li a')

const aboutDiv = document.querySelector('#about p');
const rzetelnaLogo = document.createElement('IMG');
rzetelnaLogo.src = 'img/rzetelnafirma.png';

if(window.innerWidth >= 768){
	aboutDiv.appendChild(rzetelnaLogo);
}

if(window.innerWidth < 768){
	for(let i=0; i<links.length; i++){
		links[i].addEventListener('click', () => {
			menu.style.display = 'none';
			barButton.className = 'fas fa-bars';
			baner.style.top = '60px';
		});
	}
}

window.onresize = () => {
	if(window.innerWidth >= 768){
		menu.style.display = 'block';
		aboutDiv.appendChild(rzetelnaLogo);
		window.location = window.location;
	}else{
		barButton.className = 'fas fa-bars'
		menu.style.display = 'none';
		window.location = window.location;
	}
}

const menuButtons = document.querySelectorAll('#drop-menu ul li');

for(let i=0; i<menuButtons.length; i++){
	let y = window.screen.height;
	menuButtons[i].addEventListener ('click', () => { 
		moveTo = y * i - 30;
		window.scrollTo(0, moveTo);
	});
}



