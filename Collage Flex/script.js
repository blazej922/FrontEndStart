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
		window.location.reload(true);
		menu.style.display = 'block';
	}else{
		window.location.reload(true);
		barButton.className = 'fas fa-bars'
		menu.style.display = 'none';
	}
}
