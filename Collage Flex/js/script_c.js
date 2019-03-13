const barButton = document.querySelector('#navbar i');
const menu = document.querySelector('#drop-menu');

barButton.addEventListener('click', () => {
	if(barButton.className == 'fas fa-bars'){
		menu.style.display = 'block';
		barButton.className = 'fas fa-times';
		menu.style.height = '240px';
	}
	else{
		menu.style.display = 'none';
		barButton.className = 'fas fa-bars';
		baner.style.top = '60px';
	}
});

window.onresize = () => {
	if(window.innerWidth >= 768){
		menu.style.display = 'block';
		window.location = window.location;
	}else{
		barButton.className = 'fas fa-bars'
		menu.style.display = 'none';
		window.location = window.location;
	}
}




